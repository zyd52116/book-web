/**
 * Created by v_wanggang on 2016/2/25.
 */

$(document).ready(function(){
    $("#book-add").bind("click",function(event){
        submitAddForm();
        event.stopPropagation();
    });
    $("#book-reset").bind("click",function(event){
        initAddForm();
        event.stopPropagation();
    });
});

function initAddForm(){
    $("#book-name").val("");
    $("#book-author").val("");
    $("#book-owner").val("");
    $("#book-buydate").val("");
    $("#book-origin").val("");
    $("#book-descripe").val("");
}

function submitAddForm(){
    var params = getAddFormData();
    addBook(params,function(data){
        console.log(JSON.stringify(data));
        if(data.status == 0){
            alert('添加成功');
            location.href = "success.html";
        }else{
            alert('添加失败：' + data.message);
            location.href = "failure.html";
        }
    });
}

function getAddFormData(){
    var params = {};
    params.name = $("#book-name").val();
    params.author = $("#book-author").val();
    params.owner = $("#book-owner").val();
    params.buydate = $("#book-buydate").val();
    params.origin = $("#book-origin").val();
    params.descripe = $("#book-descripe").val();
    console.log("getAddFormData = " + JSON.stringify(params));
    return JSON.stringify(params);
}