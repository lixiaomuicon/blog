function _howxm() { _howxmQueue.push(arguments) }
window._howxmQueue = window._howxmQueue || [];
_howxm('setAppID', 'fe25093c-6c93-490e-9015-35fc84c2f8e2');
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