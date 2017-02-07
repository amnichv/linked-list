var $webTitle = '';

$('.create').on('click', function() {
  console.log('A click!')
  $webTitle = $('.title').val();
  console.log($webTitle);
  $('.bookmark-container').append(
  '<section class="bookmark">'+
  '<h2>'+$webTitle+'</h2>'+
  '<hr>'+
  '<h3>URL</h3>'+
  '<hr>'+
  '<button class="read">Read</button>'+
  '<button class="delete">Delete</button>'+
  '</section>');
  //$('.bookmark-container').append(  '<section class="bookmark">');
  //$('.bookmark-container').append(  '<h2>Bookmark Title</h2>');
  //$('.bookmark-container').append(  '</section>');



})

$('.bookmark-container').on('click', 'button', function(event){
  console.log(event.target);
  console.log($webTitle);
  $(this).toggleClass('red');
  $('')
})



// readbtn.on('click', function() {
//   $('.bookmark-container').append('class ="read"');
// })
