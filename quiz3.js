 // constellation quiz
(function() 
 {
  var allQuestions = [{
    question: "which of the following is not a unit of pressure ? ",
    options: ["Pa", "kg/m2", 'N/m2', "atm"],
    answer: 3
  }, {
    question: "The SI unit of calorific value of a fuel?",
    options: ["kg/kJ ", "J/kg", "kg/g", "KJ/kg"],
    answer: 3
  }, {
    question: "A gaseous fuel used in our homes is ?",
    options: ["LPG", "Water", "Natural gas","Coal gas"],
    answer: 0
  },{
    question: "which star is not in orion?",
    options: ["Betelgeuse", "Vega", "Rigel", "Bellatrix"],
    answer: 1
  }, {
    question: "Which of the diseases is not caused by bacteria ?",
    options: ["Tuberculosis ","Polio", "Typhoid", "Cholera"],
    answer: 1
  },{
    question: "what is the chemical foemulae of baking soda ?",
    options: ["AgIO3", "C3H8O2 ", "CeB6", "NaHCO₃"],
    answer: 3
  },{
    question: "who discovered that black holes are not completely black.?",
    options: ["Albert einstein", "Galileo galilei", "Stephen Hawking", "Isaac newton"],
    answer: 2
  },{
    question: "who discovered penicillin ?",
    options: ["Robert hooke", "Alexander Fleming", "Charles darwin", "Carl linnaeus"],
    answer: 1
  },{
    question: "who discovered cell ?",
    options: ["John dalton ", "niels bohr", "Robert Hooke", "charles darwin"],
    answer: 2
  },{
   question: "What is the most powerful rocket in the world ?",
    options: ["SLS", "Falcon Heavy", "Saturn V", "GSLV MK III"],
    answer: 0
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