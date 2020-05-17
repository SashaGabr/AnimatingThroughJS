$('.spoiler').hide();

$('.spoilerButton').on('click', function () {
  $('.spoilerButton').hide();
  $('.spoiler').slideDown(2000);
});

$('.someText').hide();

$('.button').on('click', function () {
  $('.button').hide();
  $('.someText').slideDown(1500);
});