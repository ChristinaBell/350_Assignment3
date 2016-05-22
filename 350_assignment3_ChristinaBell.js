
$( document ).ready(function() {

  $(function(){
    $('.locked').on('click', function() {
       $(this).toggleClass("unlocked");
    });

    // locks page button
    $('#frontdoor_lock').on('click', function() {
      if ($("#front_door_lock_button").hasClass("unlocked")){
         $("#front_door_lock_button").removeClass("unlocked");
         $("#front_door_lock_button").addClass("locked");
       }
       else if ($("#front_door_lock_button").hasClass("locked")){
          $("#front_door_lock_button").addClass("unlocked");
       }
       // change the all door status
       if ($("#all_lock_status").hasClass("notsecure")){
          $("#all_lock_status").removeClass("notsecure");
          $("#all_lock_status").addClass("secure");
          var div = $("#all_lock_status");
          var temp = div[0].textContent;
          div[0].textContent = "Secure";
        }
        else if ($("#all_lock_status").hasClass("secure")){
           $("#all_lock_status").removeClass("secure");
           $("#all_lock_status").addClass("notsecure");
           var div = $("#all_lock_status");
           var temp = div[0].textContent;
           div[0].textContent = "Not Secure";
        }
     });

     // home page lock button
     $('#front_door_lock_button').on('click', function() {
       if ($("#frontdoor_lock").hasClass("unlocked")){
          $("#frontdoor_lock").removeClass("unlocked");
          $("#frontdoor_lock").addClass("locked");
        }
        else if ($("#frontdoor_lock").hasClass("locked")){
           $("#frontdoor_lock").addClass("unlocked");
        }
        // change the all door status
        if ($("#all_lock_status").hasClass("notsecure")){
           $("#all_lock_status").removeClass("notsecure");
           $("#all_lock_status").addClass("secure");
           var div = $("#all_lock_status");
           var temp = div[0].textContent;
           div[0].textContent = "Secure";
         }
         else if ($("#all_lock_status").hasClass("secure")){
            $("#all_lock_status").removeClass("secure");
            $("#all_lock_status").addClass("notsecure");
            var div = $("#all_lock_status");
            var temp = div[0].textContent;
            div[0].textContent = "Not Secure";
         }
      });

  });


  $(function(){
    $(".pickdate").datepicker({ dateFormat:"dd-mm-yy", defaultDate: new Date() } );
    $(".pickdate").datepicker('setDate', new Date());
  });

  $(function(){
    $("#up_button").on('click', function() {
      var div = $("#temperature_value");
      var temp = div[0].textContent;
      temp++ ;
      div[0].textContent = temp;
    });
    $("#down_button").on('click', function() {
      var div = $("#temperature_value");
      var temp = div[0].textContent;
      temp-- ;
      div[0].textContent = temp;
    });
  });

  $(function(){
    $(".close").on('click', function() {
      $("#camera2").css("color", "white");
      console.log("closed");
    });
  });

});
