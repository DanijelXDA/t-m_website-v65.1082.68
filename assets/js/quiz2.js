(function() {
  var questions2 = [{
    question2: "Колико различитих трочланих екипа за туринир у баскету можемо саставити од 10 ученика једног разреда?",
    choices2: [160, 100, 120, 80],
    correctAnswer2: 2
  }, {
    question2: "-2 * (-2)^2 + 2^3 - (-2)^3 = ",
    choices2: [2, 4, 6, 8],
    correctAnswer2: 3
  }, {
    question2: "Када је ученик прочитао половину књиге и још 20 страна остало му је да прочита још трећину књиге. Колико је страна имала књига?",
    choices2: [135, 120, 80, 200],
    correctAnswer2: 1
  }, {
    question2: "На колико се начина од 6 јабука могу узети 2 јабуке?",
    choices2: [15, 36, 3, 12],
    correctAnswer2: 0
  }, {
    question2: "Настави низ 0, 1, 3, 6, 10, 15, 21 … ?",
    choices2: [21, 23, 25, 28],
    correctAnswer2: 3
  }, { // Nova pitanja
    question2: "У 100 г мешавине чаја 2/5 је нана, 1/4 је кантарион, а остатак је камилица. Колико грама камилице је у тој мешавини?",
    choices2: [15 + ' g', 25 + ' g', 35 + ' g', 45 + ' g'],
    correctAnswer2: 2
  }, {
	question2: "Који од система има решење (-1,- 2)?",
    choices2: ['x - 2y – 3 = 0 <br>&emsp; y = x - 3<br>', '2x – 2y – 3 = 0<br>&emsp; -x + 2y = 3<br>', 'x = - y – 3<br>&emsp; 2y = x – 3<br>', 'x = 2y – 3<br>&emsp; y = x – 3<br>'],
    correctAnswer2: 2
  }, {
    question2: "Полином (а – 1)(2а + 1) – (а – 6)(а + 6) једнак је полиному: ",
    choices2: ['-+' + 35, '--' + 37, '+' + 35, '-' + 37],
    correctAnswer2: 0
  }, {
	question2: "Човек живи у кући у којој сви зидови гледају према југу. Поред куће пролази медвед. Какве је медвед боје?",
    choices2: ['браон', 'беле', 'црне', 'смеђе'],
    correctAnswer2: 1
  }, {
	question2: "Који геометријски објекат нема осу симетрије?",
    choices2: ['Кружница', 'Правоугли троугао', 'Једнакостранични троугао', 'Правоугаоник'],
    correctAnswer2: 1
  }];
  
  var questionCounter2 = 0; //Tracks question2 number
  var selections2 = []; //Array containing user choices2
  var quiz2 = $('#quiz2'); //quiz2 div object
  
  // Display initial question2
  displayNext2();
  
  // Click handler for the 'next2' button
  $('#next2').on('click', function (e) {
    e.preventDefault2();
    
    // Suspend click listener during fade animation
    if(quiz2.is(':animated')) {        
      return false;
    }
    choose2();
    
    // If no user selection, progress is stopped
    if (isNaN(selections2[questionCounter2])) {
      alert('Изабери одговор!');
    } else {
      questionCounter2++;
      displayNext2();
    }
  });
  
  // Click handler for the 'prev2' button
  $('#prev2').on('click', function (e) {
    e.preventDefault2();
    
    if(quiz2.is(':animated')) {
      return false;
    }
    choose2();
    questionCounter2--;
    displayNext2();
  });
  
  // Click handler for the 'start2 Over' button
  $('#start2').on('click', function (e) {
    e.preventDefault2();
    
    if(quiz2.is(':animated')) {
      return false;
    }
    questionCounter2 = 0;
    selections2 = [];
    displayNext2();
    $('#start2').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions2 and 
  // the answer selections2
  function createQuestionElement2(index) {
    var qElement = $('<div>', {
      id: 'question2'
    });
    
    var header = $('<h3 style="color: white;">Питање ' + (index + 1) + '</h3>');
    qElement.append(header);
    
    var question2 = $('<p>').append(questions2[index].question2);
    qElement.append(question2);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices2 as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions2[index].choices2.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />  ';
      input += questions2[index].choices2[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose2() {
    selections2[questionCounter2] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next2 requested element
  function displayNext2() {
    quiz2.fadeOut(function() {
      $('#question2').remove();
      
      if(questionCounter2 < questions2.length){
        var nextQuestion2 = createQuestionElement2(questionCounter2);
        quiz2.append(nextQuestion2).fadeIn();
        if (!(isNaN(selections2[questionCounter2]))) {
          $('input[value='+selections2[questionCounter2]+']').prop('checked', true);
        }
        
        // Controls display of 'prev2' button
        if(questionCounter2 === 1){
          $('#prev2').show();
        } else if(questionCounter2 === 0){
          
          $('#prev2').hide();
          $('#next2').show();
        }
      }else {
        var scoreElem2 = displayScore2();
        quiz2.append(scoreElem2).fadeIn();
        $('#next2').hide();
        $('#prev2').hide();
        $('#start2').show();
      }
    });
  }
  
  // Computes score2 and returns a paragraph element to be displayed
  function displayScore2() {
    var score2 = $('<p>',{id: 'question2'});
    
    var numCorrect2 = 0;
    for (var i = 0; i < selections2.length; i++) {
      if (selections2[i] === questions2[i].correctAnswer2) {
        numCorrect2++;
      }
    }
    
    score2.append('Имаш тачних ' + numCorrect2 + ' од ' +
                 questions2.length + ' могућих одговора!');
    return score2;
  }
})();