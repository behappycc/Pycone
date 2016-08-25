$(document).ready(function () {
    // initialize the viewer
    $('#messageSubmit').click(function (event) {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var data =
        {
            name: name,
            email: email,
            message: message
        };
        var dataToSend = JSON.stringify(data);
        $.ajax(
            {
                url: '/index',
                type: 'POST',
                data: dataToSend,
                success: function (response) {
                    var objresponse = JSON.parse(response);
                    console.log(response);
                    $("#responsefield").text(objresponse['response']);
                },
                error: function (error) {
                    console.log(error)
                    $("#responsefield").text("抱歉! server出了點問題QQ");
                }
            });
        event.preventDefault();
    });
});