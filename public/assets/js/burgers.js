$(document).ready(function () {
    $(document).on("click", "#burgerButton", function (event) {
        event.preventDefault();

        const burgerID = $(this).data().id;

        $.ajax({
            url: "/api/burgers/" + burgerID,
            method: "PUT"
        }).then(function(result) {
            console.log("it worked");
            location.reload();
        });
    });

    $(document).on("click", "#addButton", function (event) {
        event.preventDefault();

        const burgerName = {
            burger_name: $("#burgerInput").val().trim()
        }

        $.ajax({
            url: "/api/burgers",
            method: "POST",
            data: burgerName
        }).then(function(result) {
            console.log(result);
            location.reload();
        });
    });

});