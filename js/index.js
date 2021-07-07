

   /*nav bar hover*/
   
   $("#wo").hover(function(){
    $(this).css("color", "rgba(255, 204, 77, 1");
    }, function(){
    $(this).css("color", "white");
  });

  
  $("#ab").hover(function(){
    $(this).css("color", "rgba(255, 204, 77, 1");
    }, function(){
    $(this).css("color", "white");
  });

  $("#co").hover(function(){
    $(this).css("color", "rgba(255, 204, 77, 1");
    }, function(){
    $(this).css("color", "white");
  });

 /*about me animation*/

 $("#animation").animate({ marginTop: "50px" }, 1600, function() {
  $(this).animate({ marginTop: "40px" }, 1000 );
})


$("#profileimage").animate({ marginTop: "50px" },800, function() {
  $(this).animate({ marginTop: "40px" }, 800 );
})
  

  
 /*Projects images animation*/

 $("#grid-item-4").hover(function() {
  $(this).addClass('transition');
}, function() {
  $(this).removeClass('transition');
});

$("#grid-item-2").hover(function() {
$(this).addClass('transition');
}, function() {
$(this).removeClass('transition');
});

  /*button hover and animation*/
  
  $( "button" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });
  /*scroll-top-animation*/
  $(document).ready(function(){
    $(".scroll-top").click(function() {
        $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");
        return false;
    });
});

  /*contct page send email icon*/
$(document).ready(function() {
  $("#search").click(function() {
      $("<a>").prop({
          target: "_blank",
          href: "https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser"
      })[0].click();
  });
});