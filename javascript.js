var $webTitle = '';
var $webURL = '';

$('.create').on('click', function() {
  console.log('A click!')
  if ($('.title').val() == '' || $('.url').val() == ''){
    alert('Error: Enter a Valid Input');
    return; 
  }
  $webTitle = $('.title').val();
  $webURL = $('.url').val();
  console.log($webTitle);
  $('.bookmark-container').prepend(
  '<section class="bookmark">'+
  '<h2>'+$webTitle+'</h2>'+
  '<hr>'+
  '<h3>'+$webURL+'</h3>'+
  '<hr>'+
  '<button class="read">Read</button>'+
  '<button class="delete">Delete</button>'+
  '</section>');

})


$('.bookmark-container').on('click', 'button', function(event){
  console.log(event.target);
  console.log($webTitle);
  $(this).toggleClass('red');
})

$('.bookmark-container').on('click', 'button', function(event){
  console.log(event.target);
  console.log($webURL);
  $(this).parent().remove();
})

// $('.title').(function() {
//   if ($('.title').val() == '' || $('.url').val() == ''){
//     alert('Error: Enter a Title');
//   }
//
// })
