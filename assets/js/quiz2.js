(function() {
  var pitanja = [{
    pitanje: "Колико различитих трочланих екипа за туринир у баскету можемо саставити од 10 ученика једног разреда?",
    izbori: [160, 100, 120, 80],
    tacanOdgovor: 2
  }, {
    pitanje: "-2 * (-2)^2 + 2^3 - (-2)^3 = ",
    izbori: [2, 4, 6, 8],
    tacanOdgovor: 3
  }, {
    pitanje: "Када је ученик прочитао половину књиге и још 20 страна остало му је да прочита још трећину књиге. Колико је страна имала књига?",
    izbori: [135, 120, 80, 200],
    tacanOdgovor: 1
  }, {
    pitanje: "На колико се начина од 6 јабука могу узети 2 јабуке?",
    izbori: [15, 36, 3, 12],
    tacanOdgovor: 0
  }, {
    pitanje: "Настави низ 0, 1, 3, 6, 10, 15, 21 … ?",
    izbori: [21, 23, 25, 28],
    tacanOdgovor: 3
  }, { // Nova pitanja
    pitanje: "У 100 г мешавине чаја 2/5 је нана, 1/4 је кантарион, а остатак је камилица. Колико грама камилице је у тој мешавини?",
    izbori: [15 + ' g', 25 + ' g', 35 + ' g', 45 + ' g'],
    tacanOdgovor: 2
  }, {
	pitanje: "Који од система има решење (-1,- 2)?",
    izbori: ['x - 2y – 3 = 0 <br>&emsp; y = x - 3<br>', '2x – 2y – 3 = 0<br>&emsp; -x + 2y = 3<br>', 'x = - y – 3<br>&emsp; 2y = x – 3<br>', 'x = 2y – 3<br>&emsp; y = x – 3<br>'],
    tacanOdgovor: 2
  }, {
    pitanje: "Полином (а – 1)(2а + 1) – (а – 6)(а + 6) једнак је полиному: ",
    izbori: ['-+' + 35, '--' + 37, '+' + 35, '-' + 37],
    tacanOdgovor: 0
  }, {
	pitanje: "Човек живи у кући у којој сви зидови гледају према југу. Поред куће пролази медвед. Какве је медвед боје?",
    izbori: ['браон', 'беле', 'црне', 'смеђе'],
    tacanOdgovor: 1
  }, {
	pitanje: "Који геометријски објекат нема осу симетрије?",
    izbori: ['Кружница', 'Правоугли троугао', 'Једнакостранични троугао', 'Правоугаоник'],
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
    var listaDugmadi = $('<ul>');
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
    
    poeni.append('Имаш тачних ' + brojTacnih + ' од ' +
                 pitanja.length + ' могућих одговора!');
    return poeni;
  }
})();