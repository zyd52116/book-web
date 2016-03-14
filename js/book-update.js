/**
 * Created by v_wanggang on 2016/2/25.
 */

$(document).ready(function(){
    var params = getRequestParams();
    initUpdateForm(params.code);
    $("#book-update").bind("click",function(event){
        submitUpdateForm();
        event.stopPropagation();
    });
    $("#book-reset").bind("click",function(event){
        initUpdateForm($("#book-code").val())
        event.stopPropagation();
    });
})


function initUpdateForm(code){
    if(code != ''){
        getBook(code,function(data){
            if(data.status == 0){
                var book = data.result;
                $("#book-name").val(book.name);
                $("#book-code").val(book.code);
                $("#book-author").val(book.author);
                $("#book-owner").val(book.owner);
                $("#book-buydate").val(book.buydate);
                $("#book-origin").val(book.origin);
                $("#book-descripe").val(book.descripe);
            }
        });
    }
}

function submitUpdateForm(){
    var params = getUpdateFormData();
    updateBook(params,function(data){
        console.log(JSON.stringify(data));
        if(data.status == 0){
            alert('更新成功');
            location.href = "success.html";
        }else{
            alert('更新失败：' + data.message);
            location.href = "failure.html";
        }
    });
}
function getUpdateFormData(){
    var params = {code:1};
    params.name = $("#book-name").val();
    params.code = $("#book-code").val();
    params.author = $("#book-author").val();
    params.owner = $("#book-owner").val();
    params.buydate = $("#book-buydate").val();
    params.origin = $("#book-origin").val();
    params.descripe = $("#book-descripe").val();
    //console.log("getUpdateFormData = " + JSON.stringify(params));
    return JSON.stringify(params);
}
