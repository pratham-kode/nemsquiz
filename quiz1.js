(function() 
 {
  var allQuestions = [{
    question: "What is the unit of force ? ",
    options: ["Kelvin", "Pascal", 'Newton', "Volts"],
    answer: 2
  }, {
    question: "What is the PH of  salt (NaCl) ?",
    options: ["7", "14", "2", "5.3"],
    answer: 0
  }, {
    question: " Which of the following is a unit of frequency (of sound) ?",
    options: ["Hertz", "Pitch", "Amplitude","Second"],
    answer: 0
  },{
    question: "Deceleration is what sort of Acceleration? ?",
    options: ["positive acceleration", "negative acceleration", "zero acceleration", "all of above"],
    answer: 1
  }, {
    question: "what is the unit of current?",
    options: ["Kelvin","Volts", "Watts", "None of above"],
    answer: 3
  },{
    question: "Who discovered the sub-atomic particle electron ?",
    options: ["Democritus ", "Socrates", "Pythagoras", "J.J. Thomson"],
    answer: 3
  },{
    question: "Which rocket was used in Apollo mission ?",
    options: ["PSLV ", "Space Shuttle", "Atlas III", "Saturn V"],
    answer: 3
  },{
    question: "What is the atomic number of nitrogen ?",
    options: ["8", "7", "32", "14"],
    answer: 1
  },{
    question: "Sirius star is in which constellation ?",
    options: ["Virgo ", "Scorpius", "Canis Major", "Orion"],
    answer: 2
  },{
   question: "Which of the following is an example of an exhaustible natural resource ?",
    options: ["Air", "Sunlight", "Wind", "Groundwater"],
    answer: 3
   }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();