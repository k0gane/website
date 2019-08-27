$(document).ready(function () {
    $("#form").submit(function (event) {
        
        var data = new FormData;
        
        //メールを取得
        data.append('entry.307426390', $("#email").val());
        //名前を取得
        data.append('entry.718895314', $("#name").val());
        //歳を取得
        data.append('entry.1891173114', $("#age").val());
        //お問い合わせ内容を取得
        data.append('entry.1011271364', $("#msg").val());


 
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLScvmbS1iM6JR6ou9lFaiwOKhjx4HBUOJqmdfybsmJ2-mCdthw/formResponse",
            data: data,
            processData: false,
            contentType: false,
            type: "POST",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理
                    $("form").slideUp();
                    $('#success').slideDown();
                },
                200: function () {
                    //送信に失敗したときの処理
                    $("form").slideUp();
                    $('#error').slideDown();
                }
            }
        });
        event.preventDefault();
    });
});