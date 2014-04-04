 $(".slide-button").on("mouseover",function(e) {
 $(this).animate({
     width: "46px",
  }, 30 );  
  });
 
  $(".slide-button").on("mouseout",function(e) {
 $(this).animate({
     width: "36px"
  }, 30 );  
  });
  
  // Attach the slide function to the button
  $(".slide-button").on("click",function () {
   slideView("html")
});
 
 