//Prevent spoilers from being seen
//Solution: hide spoilers and reveal them through user interaction 

//1) Hide spoiler (hide returns all the spans  with class spoiler)
$(".spoiler span").hide()
//2) Add a button 
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3) When button pressed
$("button").click(function() {
      //3.1) Show spoiler next to button clicked (previous element of button is the span)
  $(this).prev().show();
   //3.2) Get rid of button 
  //remove the specific button being clicked!
$(this).remove();
});

     
