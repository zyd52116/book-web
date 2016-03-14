/**
 * Created by v_wanggang on 2016/2/24.
 */

var book_url = "http://www.wngn123.com/wngn-crud/book/";

function getBookListByPage(start,success){
    var url = book_url + 'getBookList_jsonp';
    var data = {params:'{\"params\":[{\"start\":'+start+',\"limit\":10}],\"request_id\":1454095837827}'};
    ajax(url,data,success);

}

function getBookList(params,success){
    // console.log('getBookList request params:' + params);
    var url = book_url + 'getBookList_jsonp';
    var data = {params:'{\"params\":['+params+'],\"request_id\":1454095837827}'};
    ajax(url,data,success);

}

function addBook(params,success){
    var url = book_url + 'addBook_jsonp';
    var data = {params:'{\"params\":['+params+'],\"request_id\":1454095837827}'};
    ajax(url,data,success);
}

function getBook(code,success){
    var url = book_url + 'getBook_jsonp';
    var data = {params:'{\"params\":[{\"code\":"'+code+'"}],\"request_id\":1454095837827}'};
    ajax(url,data,success);

}

function updateBook(params,success){
    var url = book_url + 'updateBook_jsonp';
    var data = {params:'{\"params\":['+params+'],\"request_id\":1454095837827}'};
    ajax(url,data,success);
}

function deleteBook(id,success){
    var url = book_url + 'deleteBook_jsonp';
    var data = {params:'{\"params\":[{\"id\":"'+id+'"}],\"request_id\":1454095837827}'};
    ajax(url,data,success);
}


function deleteBookByCode(code,success){
    var url = book_url + 'deleteBook_jsonp';
    var data = {params:'{\"params\":[{\"code\":"'+code+'"}],\"request_id\":1454095837827}'};
    ajax(url,data,success);
}

function getJsonByForm(form){
    var inputs = form.find("input:not(:hidden):not(:disabled)");
    var params = '"type":"none","form":"form","start":"0","limit":"10",';
    for(var i=0;i<inputs.length;i++){
        if(inputs[i].value != ''){
            params += '"'+inputs[i].name+'":"' + inputs[i].value + '",';
        }
    }
    params = params.substring(0, params.length - 1);
    params = "{" + params + "}";
    console.log(params);
    return params;
}

function ajax(url, data,success) {
    $.ajax({
        url : url,
        dataType : "jsonp",
        type : "get",
        data : data,
        jsonp:'callback',
        success : success,
        timeout:3000
    });
}
