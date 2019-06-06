$(document).ready(function() {
var height = parseInt(prompt("How tall are you?"));
if (height <= 36){
  $('.Carousel').show();

} else if (height >= 37 && height < 60){
  $('.Twirly-Whirly').show();

} else {

}
});
