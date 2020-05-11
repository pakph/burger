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
    })
})