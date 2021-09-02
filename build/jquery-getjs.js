$.extend({
    getjs: function (param, callbackDone, callbackFail) {
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(unescape(pair[1]));
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], decodeURIComponent(unescape(pair[1]))];
                query_string[pair[0]] = arr;
            } else {
                query_string[pair[0]].push(decodeURIComponent(unescape(pair[1])));
            }
        }
        if (query_string[param] != undefined) {
            if (typeof callbackDone == 'function') {
                callbackDone.call(this, query_string[param]);
            } else {
                return query_string[param];
            }
        } else {
            if (typeof callbackFail == 'function') {
                callbackFail.call(this);
            } else {
                return "";
            }
        }
    }
});