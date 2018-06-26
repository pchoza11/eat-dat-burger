$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");


        var ateList = {
            devoured : 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: ateList
        }).then(
            function() {
                console.log("changed burger number " + id + " to devoured.");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bu").val().trim(),
            devoured : 0
        };
        $.ajax("/api/burgers", {
            type: "POST", 
            data: newBurger
        }).then(
            function(){
                console.log("ORDER UP! Eat yo BURGER!");
                location.reload();
            }
        );
    });
    
})