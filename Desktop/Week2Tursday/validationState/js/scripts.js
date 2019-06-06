$(document).ready(function() {
  $("form#aboutme").submit(function(event) {
    var name = $("input#yourName").val();
    var age = parseInt($("input#yourAge").val());
    var star = $("input#yourStar").val();

    // console.log(name.length);
    if (name.length === 0) {
      $("#helpBlock2").show();
    } else {
      $(".yourName").text(name);
    }
    if (age > 0) {
      $(".yourAge").text(age);
    } else {
      $("#helpBlock3").show();
    }
    if (star.length === 0) {
      $("#helpBlock4").show();
    } else {
      $(".yourStar").text(name);
    }
    $("#story").show();
    // alert(name);
    // alert(age);
    // alert(star);

    // if (age) {
    //   var quote = (100 - age) * 3;
    //   if (gender === 'male' || age < 26) {
    //     quote += 50;
    //   }
    //
    //   $("#rate").empty().append(quote);
    //   $("#quote").show();
    // } else {
    //   alert('Please enter your age.')
    // }

    event.preventDefault();
  });
});
