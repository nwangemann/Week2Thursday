$(document).ready(function() {

  $(".formOne").submit(function(event) {
    event.preventDefault();
    var clickreturn = $("#origin").val();
    if (clickreturn === "0") {
      $(".stepA").show();
      $(".step1").hide();
    } else if (clickreturn === "1") {
      $(".stepB").show();
      $(".step1").hide();
    }
  });

  $(".formTwo").submit(function(event) {
    event.preventDefault();
    var clickreturn2 = $("#branchA").val();
    if (clickreturn2 === "2") {
      $("#branchA1").show();

    } else if (clickreturn2 === "3") {
      $("#branchA2").show();
    }
  });

  $(".formThree").submit(function(event) {
    event.preventDefault();
    var clickreturn3 = $("#branchB").val();
    if (clickreturn3 === "4") {
      $("#branchB1").show();

    } else if (clickreturn3 === "5") {
      $("#branchB2").show();
    }
  });
});
