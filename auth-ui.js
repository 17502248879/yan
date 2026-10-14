/**
 * YAN_AUTH 免登录版
 * - 不显示登录/注册界面，不发心跳，不会被踢下线
 * - 保留原来对外的接口，页面里其他代码调用不会报错
 */
(function () {
    'use strict';

    if (window.YAN_AUTH) return;

    function noop() {}

    window.YAN_AUTH = {
        getToken: function () { return ''; },
        getUsername: function () { return '已登录'; },
        authHeader: function () { return {}; },
        // 直接转发请求，401 也不会弹登录
        fetchWithAuth: function (url, init) { return fetch(url, init || {}); },
        logout: noop,
        showDevicesModal: noop,
        _showLogin: noop,
        _handleKicked: noop
    };
})();
