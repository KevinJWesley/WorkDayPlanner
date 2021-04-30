// $ jQuery function

$(document).ready(function () {
  // write all of our jQuery in here

  //variable declarations!!!!

  //display date to the user
  var currentDay = $("#currentDay");
  //display current date in "<p>" aka #currentDay
  currentDay.text(moment().format("MMMM, Do YYYY"));

  //functions!!!!!!

  //dynamically style timeblocks based on curent time

  function checkTime() {
    //use momentjs to grab current hour
    var currentHour = moment().hours();
    //compare currentHour against  blockHour
    // if else?
    //need to grab hours for the time block
    // loop through timeblock hours class of time-block??

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour > currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  checkTime();

  // eventhandlers!!!!!!
  //when someone clicks on .saveBtn execute function
  $(".saveBtn").on("click", function () {
    // need to capture info that the user inputted and store it in localStorage
    //capture .descriptin inside #hour-9
    //created value of hour (this) and the sibling inside ".description"
    //"this" represents all the "hour" divs
    var value = $(this).siblings(".description").val();
    //captures id of parent aka "hour-9" "hour-10" etc
    var time = $(this).parent().attr("id");
    //save info to local storage
    localStorage.setItem(time, value);
  });

  // display items in local storage into timeblocks

for (let i = 9; i < 18; i++) {
  
  $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
}

  // $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  // $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  // $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  // $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  // $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  // $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  // $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  // $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  // $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
