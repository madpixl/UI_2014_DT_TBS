// To be used to view an overlay panel that slides out from the right.
//Slide out the navigation panel
function slideView(dashXPos){
 window.walignment =  dashXPos;
 window.collapseBack =  window.screen.width;
  //Check if the item is visible by the class.
   if ($(".slide-panel").hasClass("dash-visible")) {
       $(".slide-panel").animate({
       left: + (collapseBack+"")
     },'slow',"",function() {
	     $(this).css("display","none");
	 }
	 ); 
     $(".slide-panel").removeClass("dash-visible")
     $(".slide-button").text("View Dash Panel");
     $("body").css("overflow","");    
   } else {
	$(".slide-panel").css("display","block");
    $(".slide-panel").animate({  
    //turn left offset int into a string and set left = "string"
       left: +  $(walignment).offset().left +""
     },'slow')
     $(".slide-panel").addClass("dash-visible")
     $(".slide-button").text("Hide Dash Panel");
     $("body").css("overflow","hidden");  
  
   }
}