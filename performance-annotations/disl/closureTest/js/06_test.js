// https://www.duolingo.com/
!function(e) {
    function t(n) {
        if (r[n])
            return r[n].exports;
        var o = r[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(o.exports, o, o.exports, t),
        o.loaded = !0,
        o.exports
    }
    var r = {};
    return t.m = e,
    t.c = r,
    t.p = "",
    t(0)
}([function(e, t, r) {
    "use strict";
    function n() {
        var e = "undefined" == typeof JSON ? {} : JSON
          , t = r(8)
          , n = {};
        t(n),
        e = n,
        o.setupJSON(e)
    }
    var o = r(1)
      , i = r(2);
    n();
    var a = window._rollbarConfig
      , s = a && a.globalAlias || "Rollbar"
      , u = window[s] && "undefined" != typeof window[s].shimId;
    !u && a ? o.wrapper.init(a) : (window.Rollbar = o.wrapper,
    window.RollbarNotifier = i.Notifier),
    e.exports = o.wrapper
}
, function(e, t, r) {
    "use strict";
    function n(e, t, r) {
        !r[4] && window._rollbarWrappedError && (r[4] = window._rollbarWrappedError,
        window._rollbarWrappedError = null),
        e.uncaughtError.apply(e, r),
        t && t.apply(window, r)
    }
    function o(e, t) {
        if (t.hasOwnProperty && t.hasOwnProperty("addEventListener")) {
            var r = t.addEventListener;
            t.addEventListener = function(t, n, o) {
                r.call(this, t, e.wrap(n), o)
            }
            ;
            var n = t.removeEventListener;
            t.removeEventListener = function(e, t, r) {
                n.call(this, e, t && t._wrapped || t, r)
            }
        }
    }
    var i = r(2)
      , a = r(6)
      , s = i.Notifier;
    window._rollbarWrappedError = null;
    var u = {};
    u.init = function(e, t) {
        var r = new s(t);
        if (r.configure(e),
        e.captureUncaught) {
            var i;
            t && a.isType(t._rollbarOldOnError, "function") ? i = t._rollbarOldOnError : window.onerror && !window.onerror.belongsToShim && (i = window.onerror),
            window.onerror = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                n(r, i, e)
            }
            ;
            var u, c, l = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
            for (u = 0; u < l.length; ++u)
                c = l[u],
                window[c] && window[c].prototype && o(r, window[c].prototype)
        }
        return window.Rollbar = r,
        s.processPayloads(),
        r
    }
    ,
    e.exports = {
        wrapper: u,
        setupJSON: i.setupJSON
    }
}
, function(e, t, r) {
    "use strict";
    function n(e) {
        w = e,
        m.setupJSON(e)
    }
    function o(e, t) {
        return function() {
            var r = t || this;
            try {
                return e.apply(r, arguments)
            } catch (n) {
                r && r.logger(n)
            }
        }
    }
    function i() {
        g || (g = setTimeout(p, 1e3))
    }
    function a() {
        return y
    }
    function s(e) {
        y = y || this;
        var t = "https://" + s.DEFAULT_ENDPOINT;
        this.options = {
            enabled: !0,
            endpoint: t,
            environment: "production",
            scrubFields: d.copy(s.DEFAULT_SCRUB_FIELDS),
            checkIgnore: null,
            logLevel: s.DEFAULT_LOG_LEVEL,
            reportLevel: s.DEFAULT_REPORT_LEVEL,
            uncaughtErrorLevel: s.DEFAULT_UNCAUGHT_ERROR_LEVEL,
            payload: {}
        },
        this.lastError = null,
        this.plugins = {},
        this.parentNotifier = e,
        this.logger = function() {
            var e = window.console;
            if (e && d.isType(e.log, "function")) {
                var t = ["Rollbar:"].concat(Array.prototype.slice.call(arguments, 0)).join(" ");
                e.log.apply(e, [t])
            }
        }
        ,
        e && (e.hasOwnProperty("shimId") ? e.notifier = this : (this.logger = e.logger,
        this.configure(e.options)))
    }
    function u(e) {
        return o(function() {
            var t = this._getLogArgs(arguments);
            return this._log(e || t.level || this.options.logLevel || s.DEFAULT_LOG_LEVEL, t.message, t.err, t.custom, t.callback)
        })
    }
    function c(e, t) {
        e || (e = t ? w.stringify(t) : "");
        var r = {
            body: e
        };
        return t && (r.extra = d.copy(t)),
        {
            message: r
        }
    }
    function l(e, t, r) {
        var n = h.guessErrorClass(t.message)
          , o = t.name || n[0]
          , i = n[1]
          , a = {
            exception: {
                "class": o,
                message: i
            }
        };
        if (e && (a.exception.description = e || "uncaught exception"),
        t.stack) {
            var s, u, l, p, f, g, m, v;
            for (a.frames = [],
            m = 0; m < t.stack.length; ++m)
                s = t.stack[m],
                u = {
                    filename: s.url ? d.sanitizeUrl(s.url) : "(unknown)",
                    lineno: s.line || null,
                    method: s.func && "?" !== s.func ? s.func : "[anonymous]",
                    colno: s.column
                },
                l = p = f = null,
                g = s.context ? s.context.length : 0,
                g && (v = Math.floor(g / 2),
                p = s.context.slice(0, v),
                l = s.context[v],
                f = s.context.slice(v)),
                l && (u.code = l),
                (p || f) && (u.context = {},
                p && p.length && (u.context.pre = p),
                f && f.length && (u.context.post = f)),
                s.args && (u.args = s.args),
                a.frames.push(u);
            return a.frames.reverse(),
            r && (a.extra = d.copy(r)),
            {
                trace: a
            }
        }
        return c(o + ": " + i, r)
    }
    function p() {
        var e;
        try {
            for (; e = window._rollbarPayloadQueue.shift(); )
                f(e.endpointUrl, e.accessToken, e.payload, e.callback)
        } finally {
            g = void 0
        }
    }
    function f(e, t, r, n) {
        n = n || function() {}
        ;
        var o = (new Date).getTime();
        o - x >= 6e4 && (x = o,
        _ = 0);
        var i = window._globalRollbarOptions.maxItems
          , a = window._globalRollbarOptions.itemsPerMinute
          , s = function() {
            return !r.ignoreRateLimit && i >= 1 && E >= i
        }
          , u = function() {
            return !r.ignoreRateLimit && a >= 1 && _ >= a
        };
        return s() ? void n(new Error(i + " max items reached")) : u() ? void n(new Error(a + " items per minute reached")) : (E++,
        _++,
        s() && y._log(y.options.uncaughtErrorLevel, "maxItems has been hit. Ignoring errors for the remainder of the current page load.", null, {
            maxItems: i
        }, null, !1, !0),
        r.ignoreRateLimit && delete r.ignoreRateLimit,
        void v.post(e, t, r, function(e, t) {
            return e ? n(e) : n(null, t)
        }))
    }
    var g, h = r(3), d = r(6), m = r(7), v = m.XHR, w = null;
    s.NOTIFIER_VERSION = "1.7.5",
    s.DEFAULT_ENDPOINT = "api.rollbar.com/api/1/",
    s.DEFAULT_SCRUB_FIELDS = ["pw", "pass", "passwd", "password", "secret", "confirm_password", "confirmPassword", "password_confirmation", "passwordConfirmation", "access_token", "accessToken", "secret_key", "secretKey", "secretToken"],
    s.DEFAULT_LOG_LEVEL = "debug",
    s.DEFAULT_REPORT_LEVEL = "debug",
    s.DEFAULT_UNCAUGHT_ERROR_LEVEL = "error",
    s.DEFAULT_ITEMS_PER_MIN = 60,
    s.DEFAULT_MAX_ITEMS = 0,
    s.LEVELS = {
        debug: 0,
        info: 1,
        warning: 2,
        error: 3,
        critical: 4
    },
    window._rollbarPayloadQueue = window._rollbarPayloadQueue || [],
    window._globalRollbarOptions = {
        startTime: (new Date).getTime(),
        maxItems: s.DEFAULT_MAX_ITEMS,
        itemsPerMinute: s.DEFAULT_ITEMS_PER_MIN
    };
    var y, b = s.prototype;
    b._getLogArgs = function(e) {
        for (var t, r, n, i, a, u, c = this.options.logLevel || s.DEFAULT_LOG_LEVEL, l = [], p = 0; p < e.length; ++p)
            u = e[p],
            a = d.typeName(u),
            "string" === a ? t ? l.push(u) : t = u : "function" === a ? i = o(u, this) : "date" === a ? l.push(u) : "error" === a || u.stack || "undefined" != typeof DOMException && u instanceof DOMException ? r ? l.push(u) : r = u : "object" === a && (n ? l.push(u) : n = u);
        return l.length && (n = n || {},
        n.extraArgs = l),
        {
            level: c,
            message: t,
            err: r,
            custom: n,
            callback: i
        }
    }
    ,
    b._route = function(e) {
        var t = this.options.endpoint
          , r = /\/$/.test(t)
          , n = /^\//.test(e);
        return r && n ? e = e.substring(1) : r || n || (e = "/" + e),
        t + e
    }
    ,
    b._processShimQueue = function(e) {
        for (var t, r, n, o, i, a, u, c = {}; r = e.shift(); )
            t = r.shim,
            n = r.method,
            o = r.args,
            i = t.parentShim,
            u = c[t.shimId],
            u || (i ? (a = c[i.shimId],
            u = new s(a)) : u = this,
            c[t.shimId] = u),
            u[n] && d.isType(u[n], "function") && u[n].apply(u, o)
    }
    ,
    b._buildPayload = function(e, t, r, n, o) {
        var i = this.options.accessToken
          , a = this.options.environment
          , u = d.copy(this.options.payload)
          , c = d.uuid4();
        if (void 0 === s.LEVELS[t])
            throw new Error("Invalid level");
        if (!r && !n && !o)
            throw new Error("No message, stack info or custom data");
        var l = {
            environment: a,
            endpoint: this.options.endpoint,
            uuid: c,
            level: t,
            platform: "browser",
            framework: "browser-js",
            language: "javascript",
            body: this._buildBody(r, n, o),
            request: {
                url: window.location.href,
                query_string: window.location.search,
                user_ip: "$remote_ip"
            },
            client: {
                runtime_ms: e.getTime() - window._globalRollbarOptions.startTime,
                timestamp: Math.round(e.getTime() / 1e3),
                javascript: {
                    browser: window.navigator.userAgent,
                    language: window.navigator.language,
                    cookie_enabled: window.navigator.cookieEnabled,
                    screen: {
                        width: window.screen.width,
                        height: window.screen.height
                    },
                    plugins: this._getBrowserPlugins()
                }
            },
            server: {},
            notifier: {
                name: "rollbar-browser-js",
                version: s.NOTIFIER_VERSION
            }
        };
        u.body && delete u.body;
        var p = {
            access_token: i,
            data: d.merge(l, u)
        };
        return this._scrub(p.data),
        p
    }
    ,
    b._buildBody = function(e, t, r) {
        var n;
        return n = t ? l(e, t, r) : c(e, r)
    }
    ,
    b._getBrowserPlugins = function() {
        if (!this._browserPlugins) {
            var e, t, r = window.navigator.plugins || [], n = r.length, o = [];
            for (t = 0; n > t; ++t)
                e = r[t],
                o.push({
                    name: e.name,
                    description: e.description
                });
            this._browserPlugins = o
        }
        return this._browserPlugins
    }
    ,
    b._scrub = function(e) {
        function t(e, t, r, n, o, i) {
            return t + d.redact(i)
        }
        function r(e) {
            var r;
            if (d.isType(e, "string"))
                for (r = 0; r < s.length; ++r)
                    e = e.replace(s[r], t);
            return e
        }
        function n(e, t) {
            var r;
            for (r = 0; r < a.length; ++r)
                if (a[r].test(e)) {
                    t = d.redact(t);
                    break
                }
            return t
        }
        function o(e, t) {
            var o = n(e, t);
            return o === t ? r(o) : o
        }
        var i = this.options.scrubFields
          , a = this._getScrubFieldRegexs(i)
          , s = this._getScrubQueryParamRegexs(i);
        return d.traverse(e, o),
        e
    }
    ,
    b._getScrubFieldRegexs = function(e) {
        for (var t, r = [], n = 0; n < e.length; ++n)
            t = "\\[?(%5[bB])?" + e[n] + "\\[?(%5[bB])?\\]?(%5[dD])?",
            r.push(new RegExp(t,"i"));
        return r
    }
    ,
    b._getScrubQueryParamRegexs = function(e) {
        for (var t, r = [], n = 0; n < e.length; ++n)
            t = "\\[?(%5[bB])?" + e[n] + "\\[?(%5[bB])?\\]?(%5[dD])?",
            r.push(new RegExp("(" + t + "=)([^&\\n]+)","igm"));
        return r
    }
    ,
    b._urlIsWhitelisted = function(e) {
        var t, r, n, o, i, a, s, u, c, l;
        try {
            if (t = this.options.hostWhiteList,
            r = e.data.body.trace,
            !t || 0 === t.length)
                return !0;
            if (!r)
                return !0;
            for (s = t.length,
            i = r.frames.length,
            c = 0; i > c; c++) {
                if (n = r.frames[c],
                o = n.filename,
                !d.isType(o, "string"))
                    return !0;
                for (l = 0; s > l; l++)
                    if (a = t[l],
                    u = new RegExp(a),
                    u.test(o))
                        return !0
            }
        } catch (p) {
            return this.configure({
                hostWhiteList: null
            }),
            this.error("Error while reading your configuration's hostWhiteList option. Removing custom hostWhiteList.", p),
            !0
        }
        return !1
    }
    ,
    b._messageIsIgnored = function(e) {
        var t, r, n, o, i, a, s;
        try {
            if (i = !1,
            n = this.options.ignoredMessages,
            s = e.data.body.trace,
            !n || 0 === n.length)
                return !1;
            if (!s)
                return !1;
            for (t = s.exception.message,
            o = n.length,
            r = 0; o > r && (a = new RegExp(n[r],"gi"),
            !(i = a.test(t))); r++)
                ;
        } catch (u) {
            this.configure({
                ignoredMessages: null
            }),
            this.error("Error while reading your configuration's ignoredMessages option. Removing custom ignoredMessages.")
        }
        return i
    }
    ,
    b._enqueuePayload = function(e, t, r, n) {
        var o = {
            callback: n,
            accessToken: this.options.accessToken,
            endpointUrl: this._route("item/"),
            payload: e
        }
          , a = function() {
            if (n) {
                var e = "This item was not sent to Rollbar because it was ignored. This can happen if a custom checkIgnore() function was used or if the item's level was less than the notifier' reportLevel. See https://rollbar.com/docs/notifier/rollbar.js/configuration for more details.";
                n(null, {
                    err: 0,
                    result: {
                        id: null,
                        uuid: null,
                        message: e
                    }
                })
            }
        };
        if (this._internalCheckIgnore(t, r, e))
            return void a();
        try {
            if (d.isType(this.options.checkIgnore, "function") && this.options.checkIgnore(t, r, e))
                return void a()
        } catch (s) {
            this.configure({
                checkIgnore: null
            }),
            this.error("Error while calling custom checkIgnore() function. Removing custom checkIgnore().", s)
        }
        if (this._urlIsWhitelisted(e) && !this._messageIsIgnored(e)) {
            if (this.options.verbose) {
                if (e.data && e.data.body && e.data.body.trace) {
                    var u = e.data.body.trace
                      , c = u.exception.message;
                    this.logger(c)
                }
                this.logger("Sending payload -", o)
            }
            d.isType(this.options.logFunction, "function") && this.options.logFunction(o);
            try {
                d.isType(this.options.transform, "function") && this.options.transform(e)
            } catch (s) {
                this.configure({
                    transform: null
                }),
                this.error("Error while calling custom transform() function. Removing custom transform().", s)
            }
            this.options.enabled && (window._rollbarPayloadQueue.push(o),
            i())
        }
    }
    ,
    b._internalCheckIgnore = function(e, t, r) {
        var n = t[0]
          , o = s.LEVELS[n] || 0
          , i = s.LEVELS[this.options.reportLevel] || 0;
        if (i > o)
            return !0;
        var a = this.options ? this.options.plugins : {};
        if (a && a.jquery && a.jquery.ignoreAjaxErrors)
            try {
                return !!r.body.message.extra.isAjax
            } catch (u) {
                return !1
            }
        return !1
    }
    ,
    b._log = function(e, t, r, n, o, i, a) {
        var s = null;
        if (r)
            try {
                if (s = r._savedStackTrace ? r._savedStackTrace : h.parse(r),
                r === this.lastError)
                    return;
                this.lastError = r
            } catch (u) {
                t = String(r),
                r = null
            }
        var c = this._buildPayload(new Date, e, t, s, n);
        a && (c.ignoreRateLimit = !0),
        this._enqueuePayload(c, i ? !0 : !1, [e, t, r, n], o)
    }
    ,
    b.log = u(),
    b.debug = u("debug"),
    b.info = u("info"),
    b.warn = u("warning"),
    b.warning = u("warning"),
    b.error = u("error"),
    b.critical = u("critical"),
    b.uncaughtError = o(function(e, t, r, n, o, i) {
        if (i = i || null,
        o && o.stack)
            return void this._log(this.options.uncaughtErrorLevel, e, o, i, null, !0);
        if (t && t.stack)
            return void this._log(this.options.uncaughtErrorLevel, e, t, i, null, !0);
        var a = {
            url: t || "",
            line: r
        };
        a.func = h.guessFunctionName(a.url, a.line),
        a.context = h.gatherContext(a.url, a.line);
        var s = {
            mode: "onerror",
            message: o ? String(o) : e || "uncaught exception",
            url: document.location.href,
            stack: [a],
            useragent: navigator.userAgent
        }
          , u = this._buildPayload(new Date, this.options.uncaughtErrorLevel, e, s);
        this._enqueuePayload(u, !0, [this.options.uncaughtErrorLevel, e, t, r, n, o])
    }),
    b.global = o(function(e) {
        e = e || {},
        d.merge(window._globalRollbarOptions, e),
        void 0 !== e.maxItems && (E = 0),
        void 0 !== e.itemsPerMinute && (_ = 0)
    }),
    b.configure = o(function(e) {
        d.merge(this.options, e),
        this.global(e)
    }),
    b.scope = o(function(e) {
        var t = new s(this);
        return d.merge(t.options.payload, e),
        t
    }),
    b.wrap = function(e, t) {
        try {
            var r;
            if (r = d.isType(t, "function") ? t : function() {
                return t || {}
            }
            ,
            !d.isType(e, "function"))
                return e;
            if (e._isWrap)
                return e;
            if (!e._wrapped) {
                e._wrapped = function() {
                    try {
                        return e.apply(this, arguments)
                    } catch (t) {
                        throw t.stack || (t._savedStackTrace = h.parse(t)),
                        t._rollbarContext = r() || {},
                        t._rollbarContext._wrappedSource = e.toString(),
                        window._rollbarWrappedError = t,
                        t
                    }
                }
                ,
                e._wrapped._isWrap = !0;
                for (var n in e)
                    e.hasOwnProperty(n) && (e._wrapped[n] = e[n])
            }
            return e._wrapped
        } catch (o) {
            return e
        }
    }
    ,
    b.loadFull = function() {
        this.logger("Unexpected Rollbar.loadFull() called on a Notifier instance")
    }
    ,
    s.processPayloads = function(e) {
        return e ? void p() : void i()
    }
    ;
    var x = (new Date).getTime()
      , E = 0
      , _ = 0;
    e.exports = {
        Notifier: s,
        setupJSON: n,
        topLevelNotifier: a
    }
}
, function(e, t, r) {
    "use strict";
    function n() {
        return l
    }
    function o() {
        return null
    }
    function i(e) {
        var t = {};
        return t._stackFrame = e,
        t.url = e.fileName,
        t.line = e.lineNumber,
        t.func = e.functionName,
        t.column = e.columnNumber,
        t.args = e.args,
        t.context = o(t.url, t.line),
        t
    }
    function a(e) {
        function t() {
            var t = [];
            try {
                t = c.parse(e)
            } catch (r) {
                t = []
            }
            for (var n = [], o = 0; o < t.length; o++)
                n.push(new i(t[o]));
            return n
        }
        return {
            stack: t(),
            message: e.message,
            name: e.name
        }
    }
    function s(e) {
        return new a(e)
    }
    function u(e) {
        if (!e)
            return ["Unknown error. There was no error message to display.", ""];
        var t = e.match(p)
          , r = "(unknown)";
        return t && (r = t[t.length - 1],
        e = e.replace((t[t.length - 2] || "") + r + ":", ""),
        e = e.replace(/(^[\s]+|[\s]+$)/g, "")),
        [r, e]
    }
    var c = r(4)
      , l = "?"
      , p = new RegExp("^(([a-zA-Z0-9-_$ ]*): *)?(Uncaught )?([a-zA-Z0-9-_$ ]*): ");
    e.exports = {
        guessFunctionName: n,
        guessErrorClass: u,
        gatherContext: o,
        parse: s,
        Stack: a,
        Frame: i
    }
}
, function(e, t, r) {
    var n, o, i;
    !function(a, s) {
        "use strict";
        o = [r(5)],
        n = s,
        i = "function" == typeof n ? n.apply(t, o) : n,
        !(void 0 !== i && (e.exports = i))
    }(this, function(e) {
        "use strict";
        var t, r, n = /\S+\:\d+/, o = /\s+at /;
        return t = Array.prototype.map ? function(e, t) {
            return e.map(t)
        }
        : function(e, t) {
            var r, n = e.length, o = [];
            for (r = 0; n > r; ++r)
                o.push(t(e[r]));
            return o
        }
        ,
        r = Array.prototype.filter ? function(e, t) {
            return e.filter(t)
        }
        : function(e, t) {
            var r, n = e.length, o = [];
            for (r = 0; n > r; ++r)
                t(e[r]) && o.push(e[r]);
            return o
        }
        ,
        {
            parse: function(e) {
                if ("undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"])
                    return this.parseOpera(e);
                if (e.stack && e.stack.match(o))
                    return this.parseV8OrIE(e);
                if (e.stack && e.stack.match(n))
                    return this.parseFFOrSafari(e);
                throw new Error("Cannot parse given Error object")
            },
            extractLocation: function(e) {
                if (-1 === e.indexOf(":"))
                    return [e];
                var t = e.replace(/[\(\)\s]/g, "").split(":")
                  , r = t.pop()
                  , n = t[t.length - 1];
                if (!isNaN(parseFloat(n)) && isFinite(n)) {
                    var o = t.pop();
                    return [t.join(":"), o, r]
                }
                return [t.join(":"), r, void 0]
            },
            parseV8OrIE: function(r) {
                var n = this.extractLocation
                  , o = t(r.stack.split("\n").slice(1), function(t) {
                    var r = t.replace(/^\s+/, "").split(/\s+/).slice(1)
                      , o = n(r.pop())
                      , i = r[0] && "Anonymous" !== r[0] ? r[0] : void 0;
                    return new e(i,void 0,o[0],o[1],o[2])
                });
                return o
            },
            parseFFOrSafari: function(o) {
                var i = r(o.stack.split("\n"), function(e) {
                    return !!e.match(n)
                })
                  , a = this.extractLocation
                  , s = t(i, function(t) {
                    var r = t.split("@")
                      , n = a(r.pop())
                      , o = r.shift() || void 0;
                    return new e(o,void 0,n[0],n[1],n[2])
                });
                return s
            },
            parseOpera: function(e) {
                return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
            },
            parseOpera9: function(t) {
                for (var r = /Line (\d+).*script (?:in )?(\S+)/i, n = t.message.split("\n"), o = [], i = 2, a = n.length; a > i; i += 2) {
                    var s = r.exec(n[i]);
                    s && o.push(new e(void 0,void 0,s[2],s[1]))
                }
                return o
            },
            parseOpera10: function(t) {
                for (var r = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n = t.stacktrace.split("\n"), o = [], i = 0, a = n.length; a > i; i += 2) {
                    var s = r.exec(n[i]);
                    s && o.push(new e(s[3] || void 0,void 0,s[2],s[1]))
                }
                return o
            },
            parseOpera11: function(o) {
                var i = r(o.stack.split("\n"), function(e) {
                    return !!e.match(n) && !e.match(/^Error created at/)
                })
                  , a = this.extractLocation
                  , s = t(i, function(t) {
                    var r, n = t.split("@"), o = a(n.pop()), i = n.shift() || "", s = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                    i.match(/\(([^\)]*)\)/) && (r = i.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                    var u = void 0 === r || "[arguments not available]" === r ? void 0 : r.split(",");
                    return new e(s,u,o[0],o[1],o[2])
                });
                return s
            }
        }
    })
}
, function(e, t, r) {
    var n, o, i;
    !function(r, a) {
        "use strict";
        o = [],
        n = a,
        i = "function" == typeof n ? n.apply(t, o) : n,
        !(void 0 !== i && (e.exports = i))
    }(this, function() {
        "use strict";
        function e(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }
        function t(e, t, r, n, o) {
            void 0 !== e && this.setFunctionName(e),
            void 0 !== t && this.setArgs(t),
            void 0 !== r && this.setFileName(r),
            void 0 !== n && this.setLineNumber(n),
            void 0 !== o && this.setColumnNumber(o)
        }
        return t.prototype = {
            getFunctionName: function() {
                return this.functionName
            },
            setFunctionName: function(e) {
                this.functionName = String(e)
            },
            getArgs: function() {
                return this.args
            },
            setArgs: function(e) {
                if ("[object Array]" !== Object.prototype.toString.call(e))
                    throw new TypeError("Args must be an Array");
                this.args = e
            },
            getFileName: function() {
                return this.fileName
            },
            setFileName: function(e) {
                this.fileName = String(e)
            },
            getLineNumber: function() {
                return this.lineNumber
            },
            setLineNumber: function(t) {
                if (!e(t))
                    throw new TypeError("Line Number must be a Number");
                this.lineNumber = Number(t)
            },
            getColumnNumber: function() {
                return this.columnNumber
            },
            setColumnNumber: function(t) {
                if (!e(t))
                    throw new TypeError("Column Number must be a Number");
                this.columnNumber = Number(t)
            },
            toString: function() {
                var t = this.getFunctionName() || "{anonymous}"
                  , r = "(" + (this.getArgs() || []).join(",") + ")"
                  , n = this.getFileName() ? "@" + this.getFileName() : ""
                  , o = e(this.getLineNumber()) ? ":" + this.getLineNumber() : ""
                  , i = e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "";
                return t + r + n + o + i
            }
        },
        t
    })
}
, function(e, t) {
    "use strict";
    function r(e) {
        return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }
    function n(e, t) {
        return r(e) === t
    }
    function o() {
        var e, t, i, a, s, u, c = arguments[0] || {}, l = 1, p = arguments.length, f = !0, g = r(c);
        for ("object" !== g && "array" !== g && "function" !== g && (c = {}); p > l; l++)
            if (null !== (e = arguments[l]))
                for (t in e)
                    e.hasOwnProperty(t) && (i = c[t],
                    a = e[t],
                    c !== a && (f && a && (n(a, "object") || (s = n(a, "array"))) ? (s ? (s = !1,
                    u = []) : u = i && n(i, "object") ? i : {},
                    c[t] = o(u, a)) : void 0 !== a && (c[t] = a)));
        return c
    }
    function i(e) {
        var t, n = r(e);
        return t = {
            object: {},
            array: []
        }[n],
        o(t, e),
        t
    }
    function a(e) {
        if (!n(e, "string"))
            throw new Error("received invalid input");
        for (var t = p, r = t.parser[t.strictMode ? "strict" : "loose"].exec(e), o = {}, i = 14; i--; )
            o[t.key[i]] = r[i] || "";
        return o[t.q.name] = {},
        o[t.key[12]].replace(t.q.parser, function(e, r, n) {
            r && (o[t.q.name][r] = n)
        }),
        o
    }
    function s(e) {
        var t = a(e);
        return "" === t.anchor && (t.source = t.source.replace("#", "")),
        e = t.source.replace("?" + t.query, "")
    }
    function u(e, t) {
        var r, o, i, a = n(e, "object"), s = n(e, "array"), c = [];
        if (a)
            for (r in e)
                e.hasOwnProperty(r) && c.push(r);
        else if (s)
            for (i = 0; i < e.length; ++i)
                c.push(i);
        for (i = 0; i < c.length; ++i)
            r = c[i],
            o = e[r],
            a = n(o, "object"),
            s = n(o, "array"),
            a || s ? e[r] = u(o, t) : e[r] = t(r, o);
        return e
    }
    function c(e) {
        return e = String(e),
        new Array(e.length + 1).join("*")
    }
    function l() {
        var e = (new Date).getTime()
          , t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var r = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16),
            ("x" === t ? r : 7 & r | 8).toString(16)
        });
        return t
    }
    var p = {
        strictMode: !1,
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    }
      , f = {
        copy: i,
        isType: n,
        merge: o,
        parseUri: a,
        parseUriOptions: p,
        redact: c,
        sanitizeUrl: s,
        traverse: u,
        typeName: r,
        uuid4: l
    };
    e.exports = f
}
, function(e, t, r) {
    "use strict";
    function n(e) {
        i = e
    }
    var o = r(6)
      , i = null
      , a = {
        XMLHttpFactories: [function() {
            return new XMLHttpRequest
        }
        , function() {
            return new ActiveXObject("Msxml2.XMLHTTP")
        }
        , function() {
            return new ActiveXObject("Msxml3.XMLHTTP")
        }
        , function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        ],
        createXMLHTTPObject: function() {
            var e, t = !1, r = a.XMLHttpFactories, n = r.length;
            for (e = 0; n > e; e++)
                try {
                    t = r[e]();
                    break
                } catch (o) {}
            return t
        },
        post: function(e, t, r, n) {
            if (!o.isType(r, "object"))
                throw new Error("Expected an object to POST");
            r = i.stringify(r),
            n = n || function() {}
            ;
            var s = a.createXMLHTTPObject();
            if (s)
                try {
                    try {
                        var u = function() {
                            try {
                                u && 4 === s.readyState && (u = void 0,
                                200 === s.status ? n(null, i.parse(s.responseText)) : n(o.isType(s.status, "number") && s.status >= 400 && s.status < 600 ? new Error(String(s.status)) : new Error))
                            } catch (e) {
                                var t;
                                t = e && e.stack ? e : new Error(e),
                                n(t)
                            }
                        };
                        s.open("POST", e, !0),
                        s.setRequestHeader && (s.setRequestHeader("Content-Type", "application/json"),
                        s.setRequestHeader("X-Rollbar-Access-Token", t)),
                        s.onreadystatechange = u,
                        s.send(r)
                    } catch (c) {
                        if ("undefined" != typeof XDomainRequest) {
                            "http:" === window.location.href.substring(0, 5) && "https" === e.substring(0, 5) && (e = "http" + e.substring(5));
                            var l = function() {
                                n(new Error("Request timed out"))
                            }
                              , p = function() {
                                n(new Error("Error during request"))
                            }
                              , f = function() {
                                n(null, i.parse(s.responseText))
                            };
                            s = new XDomainRequest,
                            s.onprogress = function() {}
                            ,
                            s.ontimeout = l,
                            s.onerror = p,
                            s.onload = f,
                            s.open("POST", e, !0),
                            s.send(r)
                        }
                    }
                } catch (g) {
                    n(g)
                }
        }
    };
    e.exports = {
        XHR: a,
        setupJSON: n
    }
}
, function(module, exports) {
    var setupCustomJSON = function(JSON) {
        function f(e) {
            return 10 > e ? "0" + e : e
        }
        function quote(e) {
            return escapable.lastIndex = 0,
            escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }
        function str(e, t) {
            var r, n, o, i, a, s = gap, u = t[e];
            switch ("function" == typeof rep && (u = rep.call(t, e, u)),
            typeof u) {
            case "string":
                return quote(u);
            case "number":
                return isFinite(u) ? String(u) : "null";
            case "boolean":
            case "null":
                return String(u);
            case "object":
                if (!u)
                    return "null";
                if (gap += indent,
                a = [],
                "[object Array]" === Object.prototype.toString.apply(u)) {
                    for (i = u.length,
                    r = 0; i > r; r += 1)
                        a[r] = str(r, u) || "null";
                    return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]",
                    gap = s,
                    o
                }
                if (rep && "object" == typeof rep)
                    for (i = rep.length,
                    r = 0; i > r; r += 1)
                        "string" == typeof rep[r] && (n = rep[r],
                        o = str(n, u),
                        o && a.push(quote(n) + (gap ? ": " : ":") + o));
                else
                    for (n in u)
                        Object.prototype.hasOwnProperty.call(u, n) && (o = str(n, u),
                        o && a.push(quote(n) + (gap ? ": " : ":") + o));
                return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}",
                gap = s,
                o
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }
        ,
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        }
        );
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, r) {
            var n;
            if (gap = "",
            indent = "",
            "number" == typeof r)
                for (n = 0; r > n; n += 1)
                    indent += " ";
            else
                "string" == typeof r && (indent = r);
            if (rep = t,
            t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
                throw new Error("JSON.stringify");
            return str("", {
                "": e
            })
        }
        ),
        "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var r, n, o = e[t];
                if (o && "object" == typeof o)
                    for (r in o)
                        Object.prototype.hasOwnProperty.call(o, r) && (n = walk(o, r),
                        void 0 !== n ? o[r] = n : delete o[r]);
                return reviver.call(e, t, o)
            }
            var j;
            if (text = String(text),
            cx.lastIndex = 0,
            cx.test(text) && (text = text.replace(cx, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })),
            /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                return j = eval("(" + text + ")"),
                "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
            throw new SyntaxError("JSON.parse")
        }
        )
    };
    module.exports = setupCustomJSON
}
]);
