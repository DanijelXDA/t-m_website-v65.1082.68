(function() {
  var pitanja = [{
    pitanje: "<p style='color:white;'>Google Chrome је?</p>",
    izbori: ['<span style="color:white;">Веб прегледач</span>', '<span style="color:white;">Веб сервер</span>', '<span style="color:white;">Програмски језик</span>', '<span style="color:white;">Текст едитор</span>'],
    tacanOdgovor: 0
  }, {
    pitanje: "<p style='color:white;'>Исправна синтакса елемента за прелазак у нови ред је:</p>",
    izbori: ['<span style="color:white;">p</span>', '<span style="color:white;">break</span>', '<span style="color:white;">b</span>', '<span style="color:white;">br</span>'],
    tacanOdgovor: 3
  }, {
    pitanje: "<p style='color:white;'>Потребно је у некој класи дефинисати поље season у коме би се чувало једно од четири годишња доба. Најбоље је да то поље буде типа:</p>",
    izbori: ['<span style="color:white;">string</span>', '<span style="color:white;">int</span>', '<span style="color:white;">набрајање Season које би имало именоване константе Spring, Summer, Autumn и Winter</span>', '<span style="color:white;">char</span>'],
    tacanOdgovor: 2
  }, {
    pitanje: "<p style='color:white;'>Извршни програми имају екстензију:</p>",
    izbori: ['<span style="color:white;">.obj</span>', '<span style="color:white;">.exe</span>', '<span style="color:white;">.run</span>', '<span style="color:white;">.com</span>'],
    tacanOdgovor: 0
  }, {
    pitanje: "<p style='color:white;'>Избаци уљеза:</p>",
    izbori: ['<span style="color:white;">PHP</span>', '<span style="color:white;">ASP</span>', '<span style="color:white;">C++</span>', '<span style="color:white;">JavaScript</span>'],
    tacanOdgovor: 2
  }, { // Nova pitanja
    pitanje: "<p style='color:white;'>У програмском језику С важи да је индекс првог члана низа увек:</p>",
    izbori: ['<span style="color:white;">0</span>', '<span style="color:white;">1</span>', '<span style="color:white;">2</span>', '<span style="color:white;">Свеједно</span>'],
    tacanOdgovor: 0
  }, {
    pitanje: "<p style='color:white;'>Једини језик који рачунар разуме је:</p>",
    izbori: ['<span style="color:white;">Машински језик</span>', '<span style="color:white;">Виши програмски језик</span>', '<span style="color:white;">Windows</span>', '<span style="color:white;">Mac</span>'],
    tacanOdgovor: 0
  }, {
    pitanje: "<p style='color:white;'>Процесор представља:</p>",
    izbori: ['<span style="color:white;">Кичму рачунара</span>', '<span style="color:white;">Мозак рачунара</span>', '<span style="color:white;">Очи рачунара</span>', '<span style="color:white;">Напајање рачунара</span>'],
    tacanOdgovor: 0
  }, {
	pitanje: "Човек живи у кући у којој сви зидови гледају према југу. Поред куће пролази медвед. Какве је медвед боје?",
    izbori: ['<span style="color:white;"></span>', '<span style="color:white;"></span>', '<span style="color:white;"></span>', '<span style="color:white;"></span>'],
    tacanOdgovor: 1
  }, {
    pitanje: "<p style='color:white;'>	</p>",
    izbori: ['<span style="color:white;"></span>', '<span style="color:white;"></span>', '<span style="color:white;"></span>', '<span style="color:white;"></span>'],
    tacanOdgovor: 1
  }];
  
  var brojPitanja = 0; //Tracks pitanje number
  var selekcija = []; //Array containing user izbori
  var kviz = $('#kviz'); //kviz div object
  
  // Display initial pitanje
  prikaziSledece();
  
  // Click handler for the 'dalje' button
  $('#dalje').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(kviz.is(':animated')) {        
      return false;
    }
    izaberi();
    
    // If no user selection, progress is stopped
    if (isNaN(selekcija[brojPitanja])) {
      alert('Изабери одговор!');
    } else {
      brojPitanja++;
      prikaziSledece();
    }
  });
  
  // Click handler for the 'prethodno' button
  $('#prethodno').on('click', function (e) {
    e.preventDefault();
    
    if(kviz.is(':animated')) {
      return false;
    }
    izaberi();
    brojPitanja--;
    prikaziSledece();
  });
  
  // Click handler for the 'pocni Over' button
  $('#pocni').on('click', function (e) {
    e.preventDefault();
    
    if(kviz.is(':animated')) {
      return false;
    }
    brojPitanja = 0;
    selekcija = [];
    prikaziSledece();
    $('#pocni').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the pitanja and 
  // the answer selekcija
  function createQuestionElement(index) {
    var elementPitanja = $('<div>', {
      id: 'pitanje'
    });
    
    var zaglavlje = $('<h3 style="color: white;">Питање ' + (index + 1) + '</h3>');
    elementPitanja.append(zaglavlje);
    
    var pitanje = $('<p>').append(pitanja[index].pitanje);
    elementPitanja.append(pitanje);
    
    var dugme = createRadios(index);
    elementPitanja.append(dugme);
    
    return elementPitanja;
  }
  
  // Creates a list of the answer izbori as radio inputs
  function createRadios(index) {
    var listaDugmadi = $('<ul style="color: white;">');
    var stavka;
    var unos = '';
    for (var i = 0; i < pitanja[index].izbori.length; i++) {
      stavka = $('<li>');
      unos = '<input type="radio" name="answer" value=' + i + ' />  ';
      unos += pitanja[index].izbori[i];
      stavka.append(unos);
      listaDugmadi.append(stavka);
    }
    return listaDugmadi;
  }
  
  // Reads the user selection and pushes the value to an array
  function izaberi() {
    selekcija[brojPitanja] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays dalje requested element
  function prikaziSledece() {
    kviz.fadeOut(function() {
      $('#pitanje').remove();
      
      if(brojPitanja < pitanja.length){
        var nextQuestion = createQuestionElement(brojPitanja);
        kviz.append(nextQuestion).fadeIn();
        if (!(isNaN(selekcija[brojPitanja]))) {
          $('unos[value='+selekcija[brojPitanja]+']').prop('checked', true);
        }
        
        // Controls display of 'prethodno' button
        if(brojPitanja === 1){
          $('#prethodno').show();
        } else if(brojPitanja === 0){
          
          $('#prethodno').hide();
          $('#dalje').show();
        }
      }else {
        var elemenatPoena = prikazPoena();
        kviz.append(elemenatPoena).fadeIn();
        $('#dalje').hide();
        $('#prethodno').hide();
        $('#pocni').show();
      }
    });
  }
  
  // Computes poeni and returns a paragraph element to be displayed
  function prikazPoena() {
    var poeni = $('<p>',{id: 'pitanje'});
    
    var brojTacnih = 0;
    for (var i = 0; i < selekcija.length; i++) {
      if (selekcija[i] === pitanja[i].tacanOdgovor) {
        brojTacnih++;
      }
    }
    
    poeni.append('<span style="color:white;">Имаш тачних </span>' + brojTacnih + '<span style="color:white;"> од </span>' +
                 pitanja.length + ' <span style="color:white;">могућих одговора!</span>');
    return poeni;
  }
})();