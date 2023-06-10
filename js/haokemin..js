function _howxm() { _howxmQueue.push(arguments) }
window._howxmQueue = window._howxmQueue || [];
_howxm('setAppID', 'e03d08db-bb4c-4760-b7e6-37fa70b29124');
(function() {
    var scriptId = 'howxm_script';
    if (!document.getElementById(scriptId)) {
        var e = document.createElement('script'),
            t = document.getElementsByTagName('script')[0];
        e.setAttribute('id', scriptId);
        e.type = 'text/javascript';
        e.async = !0;
        e.src = 'https://static.howxm.com/sdk.js';
        t.parentNode.insertBefore(e, t)
    }
})();