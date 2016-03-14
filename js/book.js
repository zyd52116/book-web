/**
 * Created by v_wanggang on 2016/2/24.
 */

$(document).ready(function(){
    loadBookList();
    $("#book-search").bind("click",function(event){
        searchBookList(1)
    });
})

/*
window.onload=function(){
    //code
}
*/

function loadBookList(){
    searchBookList(1);
}

function searchBookList(start){
    var json = JSON.parse(getJsonByForm($("#book-search-form")));
    json.start = start-1;
    json.limit = 10;
    getBookList(JSON.stringify(json),function(data){
        if(data.status == 0){
            var result = data.result;
            var contents = '';

            for(var i = 0;i < result.results.length;i++){
                contents = contents +
                    '<tr>' +
                    '    <td>'+result.results[i].code+'</td>' +
                    '    <td>'+result.results[i].name+'</td>' +
                    '    <td>'+result.results[i].author+'</td>' +
                    '    <td>'+result.results[i].buydate+'</td>' +
                    '    <td>' +
                    '        <a href="book-update.html?code='+result.results[i].code+'">Update</a>' +
                    '        <a href="#" onclick="deleteBookByCode_(\''+result.results[i].code+'\');">Delete</a>' +
                    '        <a href="book-show.html?code='+result.results[i].code+'">Show</a>' +
                    '    </td>' +
                    '</tr>';
            }
            $("#container-context table tbody").html(contents);
            pagination( result.count, result.limit,result.start + 1);
        }
    });
}


function deleteBookByCode_(code){
    deleteBookByCode(code,function(data){
        if(data.status == 0){
            alert('删除成功');
            loadBookList();
        }else{
            alert('删除失败：' + data.message);
            location.href = "failure.html";
        }
    })
}
function pagination(count,limit,page){
    var maxPage = (count % limit == 0)?parseInt(count / limit):parseInt(count / limit + 1);
    var currPage = page;
    var startPage = 1;
    if(currPage > 8 &&  maxPage >=10){
        startPage = currPage - 7
    }
    var endPage = ((startPage + 9)  >=  maxPage) ? maxPage : (startPage + 9);
    pagination_(startPage,endPage,currPage,maxPage);
}

function pagination_(startPage,endPage,currPage,maxPage){
    var contents = '';
    if(currPage == 1){
        contents += '<li class="disabled">';
    }else{
        contents += '<li>';
    }
    contents += '    <a href="#" onclick="searchBookList(1);" aria-label="Previous">';
    contents += '        <span aria-hidden="true">&laquo;</span>';
    contents += '    </a>';
    contents += '</li>';
    for(var i = startPage;i <= endPage;i++){
        if(i == currPage){
            contents += '<li class="active"><a href="#" onclick="searchBookList(' + i + ');">' + i + '</a></li>';
        }else{
            contents += '<li><a href="#" onclick="searchBookList(' + i + ');">' + i + '</a></li>';
        }
    }
    if(currPage == maxPage){
        contents += '<li class="disabled">';
    }else{
        contents += '<li>';
    }

    contents += '    <a href="#" onclick="searchBookList(' + maxPage + ');" aria-label="Next">';
    contents += '        <span aria-hidden="true">&raquo;</span>';
    contents += '    </a>';
    contents += '</li>';
    contents += '';
    $("#pagination ul").html(contents)
}

