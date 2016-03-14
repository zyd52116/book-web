/**
 * Created by v_wanggang on 2016/2/25.
 */

function getRequestParams() {
    var url = location.search; //获取url中"?"符后的字串
    var params = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            params[strs[i].split("=")[0]]=strs[i].split("=")[1];
        }
    }
    //console.log('url params = ' + JSON.stringify(params));
    return params;
}