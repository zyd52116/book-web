/**
 * Created by v_wanggang on 2016/2/25.
 */

$(document).ready(function(){

    var params = getRequestParams();
    if(params.code != null){
        initShowForm(params.code);
    }
    $("#book-update").bind("click",function(event){
        var code = $("#book-code").text();
        location.href = "book-update.html?code="+code;
    })

});

function initShowForm(code){
    if(code != ''){
        getBook(code,function(data){
            if(data.status == 0){
                var book = data.result;
                $("#book-name").text(book.name);
                $("#book-code").text(book.code);
                $("#book-author").text(book.author);
                $("#book-owner").text(book.owner);
                $("#book-buydate").text(book.buydate);
                $("#book-origin").text(book.origin);
                $("#book-descripe").val(book.descripe);
            }
        });
    }
}