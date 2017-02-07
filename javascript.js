$('.create').on('click', function() {
  console.log('A click!')
  var $userInput = $('.title').val();
  console.log($userInput);
  $('.bookmark-container').append("random text "+$userInput);

  $('.bookmark-container').append('<button>Read</button>');
})

$('.bookmark-container').on('click', 'button', function(event){
  console.log(event.target);
  console.log('something worked');
})



// readbtn.on('click', function() {
//   $('.bookmark-container').append('class ="read"');
// })
