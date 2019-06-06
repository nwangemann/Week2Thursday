$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var pet = $("input#yourpet").val();
    if (pet === "cat") {
      $('.cat').toggle();
      $('.dog').hide();
      $('.bird').hide();
    } else if (pet === "dog") {
      $('.dog').toggle();
      $('.cat').hide();
      $('.bird').hide();
    } else if (pet === "bird") {
      $('.bird').toggle();
      $('.cat').hide();
      $('.dog').hide();
    } else {
      alert("Check your type!")
    }
    event.preventDefault();
  });
});
