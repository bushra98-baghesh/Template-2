// $("p").hide();
/*hide the paragraph*/
/////////////////////////////////////////////
// $("button").click(function () {
//   $("p").show();
// });
/*when i press on the button the paragraph will show*/
/////////////////////////////////////////
// $("button").dbclick(function () {
//   $("p").show();
// });
/*when i press doublr click on the button the paragraph will show*/
////////////////////////////////////////////
// $("button").mouseenter(function () {
//   $("p").css("color", "green");
// });
/*when i came across the button the paragraph will change his color*/
//////////////////////////////////////////////
// $("button").hover(
//   function () {
//     $(this).css("color", "green");
//   },
//   function () {
//     $(this).css("color", "blue");
//   }
// );
/*instead of mouseenter and mouseleave we put hover with two functions*/
////////////////////////////////////////////////////
// $("button").click(function () {
//   $("p").hide(2000, function () {
//     $("h2").css("color", "green");
//   });

// });
/////////////////////////////////////////////////////////
/* fade in-fade out samilar to show and hide but its about opacitie*/
/*fadeTo(speed,opacity,callback function) يوصل العنصر لنسبة الشفافية التي اريدها
 */
// $(".toggle-menu").hover(function () {
//   $("ul").slideToggle("slow");
// });
/////////////////////////////////////////////////
// animate(parameters, speed, callback);
// $("button").animate(
//   { width: "+=100px", height: "200px", borderRadius: "20%" },
//   1000,
//   function () {
//     $("p").css("color", "black");
//   }
// );
////////////////////////////////////////////////////////////////
// var div = $("div");
// div.slideUp();
// div.slideDown();
// div.animate();
// /*easy way to select the elements*/
////////////////////////////////////////////////////////////////////////
// $("div").slideUp().slideDown().fadeTo()
//anthor way to define
/////////////////////////////////////
// $(document).ready(function () {
//   $("div").append("<p>hello</p>");
// });
// append is to add elements in the end of elements html file

// $(document).ready(function () {
//   $("div").prepend("<p>hello</p>");
// });
//prepend is to add the element in the first of the element here in the first place of div

// $(document).ready(function () {
//   $("div").before("<p>hello</p>");
// });
// add the element befor the selector element here will come before the div element
// after will done the same thing but after the end of element will be

// $("<p>hello</p>").appendTo("div");
// here he will ad the paragraph in the top of the selected div
// prependTo will do the same thing but in the end of the selected element

//  $("<p></p>",
//  {
//      text : "welcome to jequery",
//      class:"osama"
//  }).prependTo("div");
///////////////////////////////////////////////////////////////
//dealing with css classes
// $("button").click(function () {
//   $("p,span,div").addClass("custom br").removeClass("text");
// });
//we can add a style class to the paragraph element
//we can add more than one class
//we can add more than one element to custom by a class or more
//////////////////////////////////////////////////////////////////////

//traversing
// $("[title], [alt='img2']").css("background-color", "white");
//we put the attributes in the []brackets when we select them
// $("div[title='ar']").css("background-color", "pink");
//$("img[alt*='my']").css("background-color", "") here we put (*) search for the word (my)
//$("img[alt~='my']").css("background-color", "") here we put (~) search for a specific word (my)
//$("img[alt^='my']").css("background-color", "") here we put (^) serach for a alt began with the word (my)
///////////////////////////
// $(":input")=> select all the input in the page
// $("div :input")=> select all the input in the div
///////////////////////////
//event reference
//Bind()
// $("div").bind("click", function () {
//   //to put event or more
//   $(this).hide();
// });

// $("div").bind("click mouseenter mouseleave", function () {
//   //multi event
// });

// $("div").bind({
//   click: function () {
//     $(this).text("click me");
//   },
//   dbclick: function () {
//     $(this).text("double click me");
//   },
//   mouseenter: function () {
//     $(this).text("mouse on me");
//   },
// }); //event map

// //custom event
// $("div").bind("myCustomEvent", function (event, myName, myAge) {
//   $(this).text("hello" + myName + "your age is" + myAge);
// });
// $("button").click(function () {
//   $("div").trigger("myCustomEvent", ["osama", "32"]);
// });
