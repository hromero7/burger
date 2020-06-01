$(document).ready(function(){
    $(".submit-btn").on("click", function(event){
        event.preventDefault();
        const newBurger = {
            burger_name: $(".burger-box").val().trim()
        }

        console.log(newBurger);

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });
    });

    $(".devour-btn").on("click", function(event) {
        event.preventDefault();
        const id = $(this).val();
        const newValue = $(this).data("newValue");
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newValue
        }).then(function() {
            location.reload();
        })
    })

});


