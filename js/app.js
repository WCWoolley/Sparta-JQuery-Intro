$(document).ready(function(){

  var newFacts = [
    'Big Ben is actually called Elizabeth Tower',
    'France was still executing people by guillotine when the first star wars came out.',
    'Female elephants are called cows.'
  ];

  var $facts = $('#facts');
  var $count = $('#count');

  $facts.prepend(`<li>The tallest and fastest rollercoaster in Europe is called The SilverStar</li>`);

  for (var i = 0; i < newFacts.length; i++) {
    $facts.append(`<li>${newFacts[i]}</li>`);
  };

});
