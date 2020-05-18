$(document).ready(function(){
    $(".submit-btn").on("click", function(event){
        event.preventDefault();
        // console.log("hello");
        const newBurger = $(".burger-box").val().trim();
        console.log(newBurger);

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });


    });
});


