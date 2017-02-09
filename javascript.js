
$('.create').on('click', function() {
  checkInputs();
  var exitCode = oneInputError();
  printBookmark(exitCode);
})

function checkInputs(){
  if ($('.title').val() == '' && $('.url').val() == ''){
    $('.create').prop('disabled', true);
  } else if ($('.title').val() == '' || $('.url').val() == '') {
    $('.create').prop('disabled', false);
  }
}

function oneInputError() {
  var exitCode = '';
  if ($('.title').val() == '' || $('.url').val() == '') {
    alert('Error: Please ensure both inputs are valid');
    exitCode = true;
    return exitCode;
  }
}

function printBookmark (exitCode) {
  if (exitCode == true) {return}
  var $webTitle = $('.title').val();
  var $webURL = $('.url').val();
  $('.bookmark-container').prepend(
  '<section class="bookmark">'+
  '<h2>'+$webTitle+'</h2>'+
  '<hr>'+
  '<a href=http://'+$webURL+' target="_blank" class="underline">'+$webURL+'</a>'+
  '<hr>'+
  '<button class="reviewed underline">Read</button>'+
  '<button class="delete underline">Delete</button>'+
  '</section>');
  $('.title-url')[0].reset();
}

$('.bookmark-container').on('click', '.reviewed', function(){
  $(this).toggleClass('read');
})

$('.bookmark-container').on('click', '.delete', function(){
  $(this).parent().remove();
})

$('.title').keyup(function() {
  checkInputs();
})

$('.url').keyup(function() {
  checkInputs();
})

 $('html').on('click', function() {
console.log('Qty links: '+$('.bookmark-container a').length);
console.log('Qty read links: '+$('.read').length);
var $unRead = $('.reviewed').length-$('.read').length;
console.log('Qty unread links: '+$unRead);
})
