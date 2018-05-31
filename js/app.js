$(document).ready(function(){

  var newFacts = [
    'Big Ben is actually called Elizabeth Tower',
    'France was still executing people by guillotine when the first star wars came out.',
    'Female elephants are called cows.'
  ]; // Standard Array Of Strings

  var $facts = $('#facts'); // Using jQuery to get the element with an ID of 'facts'
  var $count = $('#count'); // Using jQuery to get the element with an ID of 'count'
  var $customFact = $('#customFact'); // Using jQuery to get the element with an ID of 'customFact'

  // Using the $facts variable, create, add content and append to the BEGINNING of the list
  $facts.prepend(`<li>The tallest and fastest rollercoaster in Europe is called The SilverStar</li>`);

  // Loop through newFacts and create, add content and append to $facts
  for (var i = 0; i < newFacts.length; i++) {
    $facts.append(`<li>${newFacts[i]}</li>`); // Using template literals instead of concatenation
  };

  $count.html($facts.children().length); // Changing the html of $count to the length of the <ol> ($facts)

  for (var i = 0; i < $facts.children().length; i++) {
    // Ternary operator for a single if statement on one line
    // The target element must be wrapped in jQuery syntax $()
    // Ternary operator = (condition which evaluates to true) ? run if true : run if false;
    (i % 2 === 0) ? $($facts.children()[i]).addClass(`even`) : $($facts.children()[i]).addClass(`odd`);
  };

  // Using the $facts variable, get all the children and apply a hover Event Listener which calls hoverStyle() from below.
  $facts.children().hover(hoverStyle);

  function hoverStyle(){
    // $(this) is referring to the current item the Event Listener is on
    // toggleClass will add a class when the Event is the first fired, then remove it when it's fired again.
    $(this).toggleClass(`selected`);
  };

  // Creating two new elements (input and button) with attributes and appending them to $customFact
  $customFact.append(`<input type="text" id="input" value=""><button id="addNewFact">Add New Fact</button>`);

  // Grabbing the element with and ID of addNewFact (created above), adding a click event which will get the value of the element with an ID of input
  $('#addNewFact').click(function(){
    // console.log($(`#input`).val());
    // $facts.append($(`#input`).val());
    $facts.append(`<li>${$(`#input`).val()}</li>`);
  });

});
