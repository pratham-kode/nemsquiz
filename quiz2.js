// city : Paris , Washington , 	Greenville , Mumbai , 
// Dubai  , Rome , Pisa ,   London , Peru , Asia  ; 

(function() 
 {
  var allQuestions = [{
    question: "which of the following is good conductor of electricity ?",
    options: ["Diamond", "Graphite", 'plastic', "wood"],
    answer: 1
  }, {
    question: "what is the unit of charge?",
    options: ["Coulomb", "Watts", "horse power", "Volts"],
    answer: 0
  }, {
    question: "what is the fullform of RAM ?",
    options: ["Read access memory", "Random access memory", "Raster asured megabyte","Raster access megabyte"],
    answer: 1
  },{
    question: "who discovered hydrogen ? ",
    options: ["Niels Bohr", "Edwin Hubble", "Karl Landsteiner", "Henry Cavendish"],
    answer: 3
  }, {
    question: "Betelgeuse star is in which constellation ? ",
    options: ["Cepheus","Orion", "Leo", "Corona borealis"],
    answer: 1
  },{
    question: "what batteries do Tesla motors use ?",
    options: ["NICKEL CADMIUM BATTERIES", "NICKEL METAL HYDRIDE BATTERIES", "LITHIUM ION BATTERIES", "SEALED LEAD ACID BATTERIES."],
    answer: 2
  },{
    question: "Joule is the unit of ?",
    options: ["Work ", "Velocity", "Power", "Force"],
    answer: 0
  },{
    question: "which of these help in absorbing UV rays ?",
    options: ["Water vapour", "Ozone", "Oxygen", "Nitrogen"],
    answer: 1
  },{
    question: "what type of galaxy is Milky Way ?",
    options: ["Elliptical", "circle", "Irregular", "Sprial"],
    answer: 3
  },{
   question: "which of the following force is a contact force ?",
    options: ["Gravitational force", "Magnetic force", "Frictional force", "Elctrostatic force"],
    answer: 2
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