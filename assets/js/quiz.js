(function() {
  var questions = [{
    question: "Колико различитих трочланих екипа за туринир у баскету можемо саставити од 10 ученика једног разреда?",
    choices: [160, 100, 120, 80],
    correctAnswer: 2
  }, {
    question: "-2 * (-2)^2 + 2^3 - (-2)^3 = ",
    choices: [2, 4, 6, 8],
    correctAnswer: 3
  }, {
    question: "Када је ученик прочитао половину књиге и још 20 страна остало му је да прочита још трећину књиге. Колико је страна имала књига?",
    choices: [135, 120, 80, 200],
    correctAnswer: 1
  }, {
    question: "На колико се начина од 6 јабука могу узети 2 јабуке?",
    choices: [15, 36, 3, 12],
    correctAnswer: 0
  }, {
    question: "Настави низ 0, 1, 3, 6, 10, 15, 21 … ?",
    choices: [21, 23, 25, 28],
    correctAnswer: 3
  }, { // Nova pitanja
    question: "У 100 г мешавине чаја 2/5 је нана, 1/4 је кантарион, а остатак је камилица. Колико грама камилице је у тој мешавини?",
    choices: [15 + ' g', 25 + ' g', 35 + ' g', 45 + ' g'],
    correctAnswer: 2
  }, {
	question: "Који од система има решење (-1,- 2)?",
    choices: ['x - 2y – 3 = 0 <br>&emsp; y = x - 3<br>', '2x – 2y – 3 = 0<br>&emsp; -x + 2y = 3<br>', 'x = - y – 3<br>&emsp; 2y = x – 3<br>', 'x = 2y – 3<br>&emsp; y = x – 3<br>'],
    correctAnswer: 2
  }, {
    question: "Полином (а – 1)(2а + 1) – (а – 6)(а + 6) једнак је полиному: ",
    choices: ['-+' + 35, '--' + 37, '+' + 35, '-' + 37],
    correctAnswer: 0
  }, {
	question: "Човек живи у кући у којој сви зидови гледају према југу. Поред куће пролази медвед. Какве је медвед боје?",
    choices: ['браон', 'беле', 'црне', 'смеђе'],
    correctAnswer: 1
  }, {
	question: "Који геометријски објекат нема осу симетрије?",
    choices: ['Кружница', 'Правоугли троугао', 'Једнакостранични троугао', 'Правоугаоник'],
    correctAnswer: 1
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Изабери одговор!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h3 style="color: white;">Питање ' + (index + 1) + '</h3>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />  ';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('Имаш тачних ' + numCorrect + ' од ' +
                 questions.length + ' могућих одговора!');
    return score;
  }
})();