"use strict"; 
$(document).ready(() => {
let btn = $(".available"); 
btn.click(() => {
    $("#form_container").toggle(); 
})

let icon = $(".material-icons"); 
icon.click(() => {
    $("#form_container").toggle(); 
})

let save= $("#save_button"); 
save.click(() => {
    $("#form_container").toggle().
    addClass("table_button reserved").removeClass("table_button available");

})

}); 


/*


    $(document).click(() => {
        if ($(e.target).hasClass("reserved")) {
            $("reserved").css( "cursor", "not-allowed");                                    
        }
  });





*/