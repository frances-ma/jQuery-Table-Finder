/*
JQUERY LAB PART 2
// Task: Add on to the seating application by taking the data the user entered into the form and
associating it to the table. Include transitions for the form being hidden and displayed.
What does the application do?
1. When a user submits information through the form and mouses over the table they
reserved, display that it was reserved using the user’s name and the size of the party.
2. Displays animated transitions for when the form is hidden or displayed.
Build Specifications:
1. Must include transitions to hide and show the form.
2. Assigns data to the element(s) that were reserved.
3. Is responsive.
*/ 


"use strict"; 
$(document).ready(() => {

// logs attributes and the value of their inputs to console! 

$(document).on("click", ".available", (event) => {
    $("#save_button").on("click", () => {
    $(event.target).removeClass("available").addClass("reserved") // removes class available to reserved 
    $(event.target).attr("table-number",$( "#table_num" ).val()) 
    $(event.target).attr("name", $( "#name" ).val())
    $(event.target).attr("phone-number", $( "#num" ).val())
    $(event.target).attr("party-size", $( "#cust" ).val()); 
    console.log(event.target); 
 }); 

// when mouseenter reserved class, target the element with 
/*
$(".reserved").on("mouseenter", (event) => {
    $(event.target).attr("name");
    $(event.target).text();
    $(event.target).text(name);
}).on("mouseleave", (event) => {
    $(event.target).text(ogText);
});

*/ 

// fade-out for icon and when save_button are clicked

    let icon = $(".material-icons"); 
    icon.click(() => {
    $("#form_container").fadeOut(); 
    })

    let save= $("#save_button");  
        save.click(() => {
    $("#form_container").fadeOut(); 

})

// for fade-in 
$("#form_container").fadeIn(); 


    
});



// mydata = $( "#form_container").data();
    
// }


// $( "#form_container").submit();


// $(document).on("click", ".available", (e) => {
//     $(e.target).removeClass("available").addClass("reserved");
// })


//  $( "" ).addClass(function( index ) {
//      return "item-" + index;
//    });


}); 


