$(document).ready(function() {
    $(".devour").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                location.reload();
            }
        )
    });
    $(".undo").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: false
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                location.reload();
            }
        )
    });
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#makeBurger").val().trim(),
          devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("Added new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
})