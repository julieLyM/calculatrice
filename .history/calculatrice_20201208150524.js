//Etapes :
// --------
// - faire une page html
// - créer deux input type text avec deux id différent pour la saisie des valeurs
// - créer un select avec un id pour proposer les différents opérateurs. (+-*/    ** %)
// - créer un bouton avec un id pour lancer le calcul (button, span)

// Avec js :
// ---------
// - lors du click  sur le bouton (evenement) :
// - récupérer les deux saisies des champs text et l'opérateur selectionné

// - il peut être important de passer les saisies dans un parseFloat() pour les transformer en type number
// - declencher le calcul des saisies selon  l'opérateur avec un if qui va tester l'opérateur pour déclencher l'opération.
// - afficher l'opération avec le résultat.

// Pour aller plus loin :
// ----------------------
// - essayer de donner la possibilité de faire apparaitre ou disparaitre la calculatrice

$(document).ready(function () {
  $('#appear').on('click', function () {
    console.log('click');
    $('#blocCal').slideDown(1000);
  });

  // Cacher la  calculatrice :
  $('#disapear').on('click', function () {
    $('#blocCal').slideUp(1000);
  });

  $('#calculer').on('click', function () {
    var value1 = $('#nombre1').val();
    var signe = $('#operateur').val();
    var value2 = $('#nombre2').val();

    value1 = parseFloat(value1);
    value2 = parseFloat(value2);
    var resultat = '';

    if (signe == '+') {
      resultat = `<div style="background-color: pink;color: white; padding:20px">(value1 + signe + value2 + ' = ' + (value1 + value2))`;
    } else if (signe == '-') {
      resultat = alert(value1 + signe + value2 + ' = ' + (value1 - value2));
    } else if (signe == '*') {
      resultat = alert(value1 + signe + value2 + ' = ' + value1 * value2);
    } else if (signe == '/') {
      resultat = alert(value1 + signe + value2 + ' = ' + value1 / value2);
    }
  });

  $('#nombre1, #nombre2').on('mouseover', function () {
    $('#message').html(
      `<div style="background-color: pink;color: white; padding:20px">Saisir un chiffre</div>`
    );
  });

  $('#nombre1, #nombre2').on('mouseout', function () {
    $('#message').html('');
  });

  $('#operateur').on('mouseover', function () {
    $('#message').html(
      `<div style="background-color: pink;color: white; padding:20px">Saisir un opérateur + - / *</div>`
    );
  });
  $('#operateur').on('mouseout', function () {
    $('#message').html('');
  });
});
