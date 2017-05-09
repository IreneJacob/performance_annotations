var gapi = window.gapi = window.gapi || {};
gapi._bs = new Date().getTime();
(function() {
    var aa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
      , ba = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
      , ca = function(a, b, c) {
        ca = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return ca.apply(null, arguments)
    };
    /*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var m = window
      , p = document
      , r = m.location
      , da = function() {}
      , ea = /\[native code\]/
      , u = function(a, b, c) {
        return a[b] = a[b] || c
    }
      , fa = function(a) {
        for (var b = 0; b < this.length; b++)
            if (this[b] === a)
                return b;
        return -1
    }
      , ga = function(a) {
        a = a.sort();
        for (var b = [], c = void 0, d = 0; d < a.length; d++) {
            var e = a[d];
            e != c && b.push(e);
            c = e
        }
        return b
    }
      , ha = /&/g
      , ia = /</g
      , ja = />/g
      , ka = /"/g
      , la = /'/g
      , ma = function(a) {
        return String(a).replace(ha, "&amp;").replace(ia, "&lt;").replace(ja, "&gt;").replace(ka, "&quot;").replace(la, "&#39;")
    }
      , v = function() {
        var a;
        if ((a = Object.create) && ea.test(a))
            a = a(null);
        else {
            a = {};
            for (var b in a)
                a[b] = void 0
        }
        return a
    }
      , x = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
      , z = function(a) {
        if (ea.test(Object.keys))
            return Object.keys(a);
        var b = [], c;
        for (c in a)
            x(a, c) && b.push(c);
        return b
    }
      , A = function(a, b) {
        a = a || {};
        for (var c in a)
            x(a, c) && (b[c] = a[c])
    }
      , na = function(a) {
        return function() {
            m.setTimeout(a, 0)
        }
    }
      , B = function(a, b) {
        if (!a)
            throw Error(b || "");
    }
      , C = u(m, "gapi", {});
    var D = function(a, b, c) {
        var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)","g");
        b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)","g");
        if (a = a && (d.exec(a) || b.exec(a)))
            try {
                c = decodeURIComponent(a[2])
            } catch (e) {}
        return c
    }
      , oa = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source)
      , pa = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g
      , ra = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,"g")
      , sa = /%([a-f]|[0-9a-fA-F][a-f])/g
      , ta = /^(https?|ftp|file|chrome-extension):$/i
      , E = function(a) {
        a = String(a);
        a = a.replace(pa, function(a) {
            try {
                return encodeURIComponent(a)
            } catch (f) {
                return encodeURIComponent(a.replace(/^[^%]+$/g, "\ufffd"))
            }
        }).replace(ra, function(a) {
            return a.replace(/%/g, "%25")
        }).replace(sa, function(a) {
            return a.toUpperCase()
        });
        a = a.match(oa) || [];
        var b = v()
          , c = function(a) {
            return a.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g, "%7D")
        }
          , d = !!(a[1] || "").match(ta);
        b.v = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
        d = function(a) {
            return c(a.replace(/\?/g, "%3F").replace(/\#/g, "%23"))
        }
        ;
        b.query = a[5] ? [d(a[5])] : [];
        b.c = a[7] ? [d(a[7])] : [];
        return b
    }
      , ua = function(a) {
        return a.v + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.c.length ? "#" + a.c.join("&") : "")
    }
      , va = function(a, b) {
        var c = [];
        if (a)
            for (var d in a)
                if (x(a, d) && null != a[d]) {
                    var e = b ? b(a[d]) : a[d];
                    c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
                }
        return c
    }
      , wa = function(a, b, c, d) {
        a = E(a);
        a.query.push.apply(a.query, va(b, d));
        a.c.push.apply(a.c, va(c, d));
        return ua(a)
    }
      , xa = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$","i")
      , ya = function(a, b) {
        var c = E(b);
        b = c.v;
        c.query.length && (b += "?" + c.query.join(""));
        c.c.length && (b += "#" + c.c.join(""));
        var d = "";
        2E3 < b.length && (c = b,
        b = b.substr(0, 2E3),
        b = b.replace(xa, ""),
        d = c.substr(b.length));
        var e = a.createElement("div");
        a = a.createElement("a");
        c = E(b);
        b = c.v;
        c.query.length && (b += "?" + c.query.join(""));
        c.c.length && (b += "#" + c.c.join(""));
        a.href = b;
        e.appendChild(a);
        e.innerHTML = e.innerHTML;
        b = String(e.firstChild.href);
        e.parentNode && e.parentNode.removeChild(e);
        c = E(b + d);
        b = c.v;
        c.query.length && (b += "?" + c.query.join(""));
        c.c.length && (b += "#" + c.c.join(""));
        return b
    }
      , za = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    var H = function(a, b, c, d) {
        if (m[c + "EventListener"])
            m[c + "EventListener"](a, b, !1);
        else if (m[d + "tachEvent"])
            m[d + "tachEvent"]("on" + a, b)
    }
      , Aa = function() {
        var a = p.readyState;
        return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE")
    }
      , Da = function(a) {
        var b = Ba;
        if (!Aa())
            try {
                b()
            } catch (c) {}
        Ca(a)
    }
      , Ca = function(a) {
        if (Aa())
            a();
        else {
            var b = !1
              , c = function() {
                if (!b)
                    return b = !0,
                    a.apply(this, arguments)
            };
            m.addEventListener ? (m.addEventListener("load", c, !1),
            m.addEventListener("DOMContentLoaded", c, !1)) : m.attachEvent && (m.attachEvent("onreadystatechange", function() {
                Aa() && c.apply(this, arguments)
            }),
            m.attachEvent("onload", c))
        }
    }
      , Ea = function(a) {
        for (; a.firstChild; )
            a.removeChild(a.firstChild)
    }
      , Fa = {
        button: !0,
        div: !0,
        span: !0
    };
    var I;
    I = u(m, "___jsl", v());
    u(I, "I", 0);
    u(I, "hel", 10);
    var J = function(a) {
        return I.dpo ? I.h : D(a, "jsh", I.h)
    }
      , Ga = function(a) {
        var b = u(I, "sws", []);
        b.push.apply(b, a)
    }
      , Ha = function(a) {
        return u(I, "watt", v())[a]
    }
      , Ia = function(a) {
        var b = u(I, "PQ", []);
        I.PQ = [];
        var c = b.length;
        if (0 === c)
            a();
        else
            for (var d = 0, e = function() {
                ++d === c && a()
            }, f = 0; f < c; f++)
                b[f](e)
    }
      , Ja = function(a) {
        return u(u(I, "H", v()), a, v())
    };
    var K = u(I, "perf", v())
      , Ka = u(K, "g", v())
      , La = u(K, "i", v());
    u(K, "r", []);
    v();
    v();
    var Ma = function(a, b, c) {
        var d = K.r;
        "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
    }
      , L = function(a, b, c) {
        Ka[a] = !b && Ka[a] || c || (new Date).getTime();
        Ma(a)
    }
      , Oa = function(a, b, c) {
        b && 0 < b.length && (b = Na(b),
        c && 0 < c.length && (b += "___" + Na(c)),
        28 < b.length && (b = b.substr(0, 28) + (b.length - 28)),
        c = b,
        b = u(La, "_p", v()),
        u(b, c, v())[a] = (new Date).getTime(),
        Ma(a, "_p", c))
    }
      , Na = function(a) {
        return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/\,/g, "_")
    };
    var Pa = v()
      , M = []
      , N = function(a) {
        throw Error("Bad hint" + (a ? ": " + a : ""));
    };
    M.push(["jsl", function(a) {
        for (var b in a)
            if (x(a, b)) {
                var c = a[b];
                "object" == typeof c ? I[b] = u(I, b, []).concat(c) : u(I, b, c)
            }
        if (b = a.u)
            a = u(I, "us", []),
            a.push(b),
            (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }
    ]);
    var Qa = /^(\/[a-zA-Z0-9_\-]+)+$/
      , Ra = [/\/amp\//, /\/amp$/, /^\/amp$/]
      , Sa = /^[a-zA-Z0-9\-_\.,!]+$/
      , Ta = /^gapi\.loaded_[0-9]+$/
      , Ua = /^[a-zA-Z0-9,._-]+$/
      , Ya = function(a, b, c, d) {
        var e = a.split(";")
          , f = e.shift()
          , g = Pa[f]
          , h = null;
        g ? h = g(e, b, c, d) : N("no hint processor for: " + f);
        h || N("failed to generate load url");
        b = h;
        c = b.match(Va);
        (d = b.match(Wa)) && 1 === d.length && Xa.test(b) && c && 1 === c.length || N("failed sanity: " + a);
        return h
    }
      , ab = function(a, b, c, d) {
        a = Za(a);
        Ta.test(c) || N("invalid_callback");
        b = $a(b);
        d = d && d.length ? $a(d) : null;
        var e = function(a) {
            return encodeURIComponent(a).replace(/%2C/g, ",")
        };
        return [encodeURIComponent(a.Y).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.H ? "/am=" + e(a.H) : "", a.R ? "/rs=" + e(a.R) : "", a.T ? "/t=" + e(a.T) : "", "/cb=", e(c)].join("")
    }
      , Za = function(a) {
        "/" !== a.charAt(0) && N("relative path");
        for (var b = a.substring(1).split("/"), c = []; b.length; ) {
            a = b.shift();
            if (!a.length || 0 == a.indexOf("."))
                N("empty/relative directory");
            else if (0 < a.indexOf("=")) {
                b.unshift(a);
                break
            }
            c.push(a)
        }
        a = {};
        for (var d = 0, e = b.length; d < e; ++d) {
            var f = b[d].split("=")
              , g = decodeURIComponent(f[0])
              , h = decodeURIComponent(f[1]);
            2 == f.length && g && h && (a[g] = a[g] || h)
        }
        b = "/" + c.join("/");
        Qa.test(b) || N("invalid_prefix");
        c = 0;
        for (d = Ra.length; c < d; ++c)
            Ra[c].test(b) && N("invalid_prefix");
        c = bb(a, "k", !0);
        d = bb(a, "am");
        e = bb(a, "rs");
        a = bb(a, "t");
        return {
            Y: b,
            version: c,
            H: d,
            R: e,
            T: a
        }
    }
      , $a = function(a) {
        for (var b = [], c = 0, d = a.length; c < d; ++c) {
            var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
            Ua.test(e) && b.push(e)
        }
        return b.join(",")
    }
      , bb = function(a, b, c) {
        a = a[b];
        !a && c && N("missing: " + b);
        if (a) {
            if (Sa.test(a))
                return a;
            N("invalid: " + b)
        }
        return null
    }
      , Xa = /^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/
      , Wa = /\/cb=/g
      , Va = /\/\//g
      , cb = function() {
        var a = J(r.href);
        if (!a)
            throw Error("Bad hint");
        return a
    };
    Pa.m = function(a, b, c, d) {
        (a = a[0]) || N("missing_hint");
        return "https://apis.google.com" + ab(a, b, c, d)
    }
    ;
    var O = decodeURI("%73cript")
      , db = /^[-+_0-9\/A-Za-z]+={0,2}$/
      , eb = function(a, b) {
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d];
            e && 0 > fa.call(b, e) && c.push(e)
        }
        return c
    }
      , fb = function() {
        var a = I.nonce;
        if (void 0 !== a)
            return a && a === String(a) && a.match(db) ? a : I.nonce = null;
        var b = u(I, "us", []);
        if (!b || !b.length)
            return I.nonce = null;
        for (var c = p.getElementsByTagName(O), d = 0, e = c.length; d < e; ++d) {
            var f = c[d];
            if (f.src && (a = String(f.nonce || f.getAttribute("nonce") || "") || null)) {
                for (var g = 0, h = b.length; g < h && b[g] !== f.src; ++g)
                    ;
                if (g !== h && a && a === String(a) && a.match(db))
                    return I.nonce = a
            }
        }
        return null
    }
      , hb = function(a) {
        if ("loading" != p.readyState)
            gb(a);
        else {
            var b = fb()
              , c = "";
            null !== b && (c = ' nonce="' + b + '"');
            p.write("<" + O + ' src="' + encodeURI(a) + '"' + c + "></" + O + ">")
        }
    }
      , gb = function(a) {
        var b = p.createElement(O);
        b.setAttribute("src", a);
        a = fb();
        null !== a && b.setAttribute("nonce", a);
        b.async = "true";
        (a = p.getElementsByTagName(O)[0]) ? a.parentNode.insertBefore(b, a) : (p.head || p.body || p.documentElement).appendChild(b)
    }
      , ib = function(a, b) {
        var c = b && b._c;
        if (c)
            for (var d = 0; d < M.length; d++) {
                var e = M[d][0]
                  , f = M[d][1];
                f && x(c, e) && f(c[e], a, b)
            }
    }
      , kb = function(a, b, c) {
        jb(function() {
            var c = b === J(r.href) ? u(C, "_", v()) : v();
            c = u(Ja(b), "_", c);
            a(c)
        }, c)
    }
      , P = function(a, b) {
        var c = b || {};
        "function" == typeof b && (c = {},
        c.callback = b);
        ib(a, c);
        b = a ? a.split(":") : [];
        var d = c.h || cb()
          , e = u(I, "ah", v());
        if (e["::"] && b.length) {
            a = [];
            for (var f = null; f = b.shift(); ) {
                var g = f.split(".")
                  , g = e[f] || e[g[1] && "ns:" + g[0] || ""] || d
                  , h = a.length && a[a.length - 1] || null
                  , k = h;
                h && h.hint == g || (k = {
                    hint: g,
                    L: []
                },
                a.push(k));
                k.L.push(f)
            }
            var l = a.length;
            if (1 < l) {
                var n = c.callback;
                n && (c.callback = function() {
                    0 == --l && n()
                }
                )
            }
            for (; b = a.shift(); )
                lb(b.L, c, b.hint)
        } else
            lb(b || [], c, d)
    }
      , lb = function(a, b, c) {
        a = ga(a) || [];
        var d = b.callback
          , e = b.config
          , f = b.timeout
          , g = b.ontimeout
          , h = b.onerror
          , k = void 0;
        "function" == typeof h && (k = h);
        var l = null
          , n = !1;
        if (f && !g || !f && g)
            throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
        var h = u(Ja(c), "r", []).sort()
          , w = u(Ja(c), "L", []).sort()
          , q = [].concat(h)
          , y = function(a, b) {
            if (n)
                return 0;
            m.clearTimeout(l);
            w.push.apply(w, t);
            var d = ((C || {}).config || {}).update;
            d ? d(e) : e && u(I, "cu", []).push(e);
            if (b) {
                Oa("me0", a, q);
                try {
                    kb(b, c, k)
                } finally {
                    Oa("me1", a, q)
                }
            }
            return 1
        };
        0 < f && (l = m.setTimeout(function() {
            n = !0;
            g()
        }, f));
        var t = eb(a, w);
        if (t.length) {
            var t = eb(a, h)
              , F = u(I, "CP", [])
              , G = F.length;
            F[G] = function(a) {
                if (!a)
                    return 0;
                Oa("ml1", t, q);
                var b = function(b) {
                    F[G] = null;
                    y(t, a) && Ia(function() {
                        d && d();
                        b()
                    })
                }
                  , c = function() {
                    var a = F[G + 1];
                    a && a()
                };
                0 < G && F[G - 1] ? F[G] = function() {
                    b(c)
                }
                : b(c)
            }
            ;
            if (t.length) {
                var qa = "loaded_" + I.I++;
                C[qa] = function(a) {
                    F[G](a);
                    C[qa] = null
                }
                ;
                a = Ya(c, t, "gapi." + qa, h);
                h.push.apply(h, t);
                Oa("ml0", t, q);
                b.sync || m.___gapisync ? hb(a) : gb(a)
            } else
                F[G](da)
        } else
            y(t) && d && d()
    };
    var jb = function(a, b) {
        if (I.hee && 0 < I.hel)
            try {
                return a()
            } catch (c) {
                b && b(c),
                I.hel--,
                P("debug_error", function() {
                    try {
                        window.___jsl.hefn(c)
                    } catch (d) {
                        throw c;
                    }
                })
            }
        else
            try {
                return a()
            } catch (c) {
                throw b && b(c),
                c;
            }
    };
    C.load = function(a, b) {
        return jb(function() {
            return P(a, b)
        })
    }
    ;
    var Q = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b[a] = b[a] || [];
        return b[a]
    }
      , R = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = !a && b.cfg || {};
        return b.cfg
    }
      , mb = function(a) {
        return "object" === typeof a && /\[native code\]/.test(a.push)
    }
      , S = function(a, b, c) {
        if (b && "object" === typeof b)
            for (var d in b)
                !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !mb(a[d]) && !mb(b[d]) ? S(a[d], b[d]) : b[d] && "object" === typeof b[d] ? (a[d] = mb(b[d]) ? [] : {},
                S(a[d], b[d])) : a[d] = b[d])
    }
      , nb = function(a) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 == a.charCodeAt(a.length - 1); )
                a = a.substring(0, a.length - 1);
            try {
                var b = window.JSON.parse(a)
            } catch (c) {}
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return (" + a + "\n)"))()
            } catch (c) {}
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return ({" + a + "\n})"))()
            } catch (c) {}
            return "object" === typeof b ? b : {}
        }
    }
      , ob = function(a, b) {
        var c = {
            ___goc: void 0
        };
        a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
        S(c, b);
        a.push(c)
    }
      , pb = function(a) {
        R(!0);
        var b = window.___gcfg
          , c = Q("cu")
          , d = window.___gu;
        b && b !== d && (ob(c, b),
        window.___gu = b);
        var b = Q("cu")
          , e = document.scripts || document.getElementsByTagName("script") || []
          , d = []
          , f = [];
        f.push.apply(f, Q("us"));
        for (var g = 0; g < e.length; ++g)
            for (var h = e[g], k = 0; k < f.length; ++k)
                h.src && 0 == h.src.indexOf(f[k]) && d.push(h);
        0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
        for (e = 0; e < d.length; ++e)
            d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0),
            (f = d[e]) ? (g = f.nodeType,
            f = 3 == g || 4 == g ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || "") : f = void 0,
            (f = nb(f)) && b.push(f));
        a && ob(c, a);
        d = Q("cd");
        a = 0;
        for (b = d.length; a < b; ++a)
            S(R(), d[a], !0);
        d = Q("ci");
        a = 0;
        for (b = d.length; a < b; ++a)
            S(R(), d[a], !0);
        a = 0;
        for (b = c.length; a < b; ++a)
            S(R(), c[a], !0)
    }
      , T = function(a) {
        var b = R();
        if (!a)
            return b;
        a = a.split("/");
        for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c)
            b = b[a[c]];
        return c === a.length && void 0 !== b ? b : void 0
    }
      , qb = function(a, b) {
        var c;
        if ("string" === typeof a) {
            var d = c = {};
            a = a.split("/");
            for (var e = 0, f = a.length; e < f - 1; ++e)
                var g = {}
                  , d = d[a[e]] = g;
            d[a[e]] = b
        } else
            c = a;
        pb(c)
    };
    var rb = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis),
        u(I, "ci", []).push(a),
        window.__GOOGLEAPIS = void 0)
    };
    var sb = {
        apppackagename: 1,
        callback: 1,
        clientid: 1,
        cookiepolicy: 1,
        openidrealm: -1,
        includegrantedscopes: -1,
        requestvisibleactions: 1,
        scope: 1
    }
      , tb = !1
      , ub = v()
      , vb = function() {
        if (!tb) {
            for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
                var c = a[b].name.toLowerCase();
                if (0 == c.lastIndexOf("google-signin-", 0)) {
                    var c = c.substring(14)
                      , d = a[b].content;
                    sb[c] && d && (ub[c] = d)
                }
            }
            if (window.self !== window.top) {
                var a = document.location.toString();
                for (e in sb)
                    0 < sb[e] && (b = D(a, e, "")) && (ub[e] = b)
            }
            tb = !0
        }
        var e = v();
        A(ub, e);
        return e
    }
      , wb = function(a) {
        return !!(a.clientid && a.scope && a.callback)
    };
    var xb = window.console
      , yb = function(a) {
        xb && xb.log && xb.log(a)
    };
    var zb = function() {
        return !!I.oa
    }
      , Ab = function() {};
    var U = u(I, "rw", v())
      , Bb = function(a) {
        for (var b in U)
            a(U[b])
    }
      , Cb = function(a, b) {
        (a = U[a]) && a.state < b && (a.state = b)
    };
    var Db;
    var Eb = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//
      , Fb = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,21})\//
      , Gb = function(a) {
        var b = T("googleapis.config/sessionIndex");
        "string" === typeof b && 254 < b.length && (b = null);
        null == b && (b = window.__X_GOOG_AUTHUSER);
        "string" === typeof b && 254 < b.length && (b = null);
        if (null == b) {
            var c = window.google;
            c && (b = c.authuser)
        }
        "string" === typeof b && 254 < b.length && (b = null);
        null == b && (a = a || window.location.href,
        b = D(a, "authuser") || null,
        null == b && (b = (b = a.match(Eb)) ? b[1] : null));
        if (null == b)
            return null;
        b = String(b);
        254 < b.length && (b = null);
        return b
    }
      , Hb = function(a) {
        var b = T("googleapis.config/sessionDelegate");
        "string" === typeof b && 21 < b.length && (b = null);
        null == b && (b = (a = (a || window.location.href).match(Fb)) ? a[1] : null);
        if (null == b)
            return null;
        b = String(b);
        21 < b.length && (b = null);
        return b
    };
    var Ib = function() {
        this.i = -1
    };
    var V = function() {
        this.i = 64;
        this.b = [];
        this.C = [];
        this.U = [];
        this.w = [];
        this.w[0] = 128;
        for (var a = 1; a < this.i; ++a)
            this.w[a] = 0;
        this.A = this.l = 0;
        this.reset()
    };
    (function() {
        function a() {}
        a.prototype = Ib.prototype;
        V.ea = Ib.prototype;
        V.prototype = new a;
        V.v = function(a, c, d) {
            for (var b = Array(arguments.length - 2), f = 2; f < arguments.length; f++)
                b[f - 2] = arguments[f];
            return Ib.prototype[c].apply(a, b)
        }
    })();
    V.prototype.reset = function() {
        this.b[0] = 1732584193;
        this.b[1] = 4023233417;
        this.b[2] = 2562383102;
        this.b[3] = 271733878;
        this.b[4] = 3285377520;
        this.A = this.l = 0
    }
    ;
    var Jb = function(a, b, c) {
        c || (c = 0);
        var d = a.U;
        if ("string" == typeof b)
            for (var e = 0; 16 > e; e++)
                d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3),
                c += 4;
        else
            for (e = 0; 16 > e; e++)
                d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3],
                c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.b[0];
        c = a.b[1];
        for (var g = a.b[2], h = a.b[3], k = a.b[4], l, e = 0; 80 > e; e++)
            40 > e ? 20 > e ? (f = h ^ c & (g ^ h),
            l = 1518500249) : (f = c ^ g ^ h,
            l = 1859775393) : 60 > e ? (f = c & g | h & (c | g),
            l = 2400959708) : (f = c ^ g ^ h,
            l = 3395469782),
            f = (b << 5 | b >>> 27) + f + k + l + d[e] & 4294967295,
            k = h,
            h = g,
            g = (c << 30 | c >>> 2) & 4294967295,
            c = b,
            b = f;
        a.b[0] = a.b[0] + b & 4294967295;
        a.b[1] = a.b[1] + c & 4294967295;
        a.b[2] = a.b[2] + g & 4294967295;
        a.b[3] = a.b[3] + h & 4294967295;
        a.b[4] = a.b[4] + k & 4294967295
    };
    V.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.i, d = 0, e = this.C, f = this.l; d < b; ) {
                if (0 == f)
                    for (; d <= c; )
                        Jb(this, a, d),
                        d += this.i;
                if ("string" == typeof a)
                    for (; d < b; ) {
                        if (e[f] = a.charCodeAt(d),
                        ++f,
                        ++d,
                        f == this.i) {
                            Jb(this, e);
                            f = 0;
                            break
                        }
                    }
                else
                    for (; d < b; )
                        if (e[f] = a[d],
                        ++f,
                        ++d,
                        f == this.i) {
                            Jb(this, e);
                            f = 0;
                            break
                        }
            }
            this.l = f;
            this.A += b
        }
    }
    ;
    V.prototype.digest = function() {
        var a = []
          , b = 8 * this.A;
        56 > this.l ? this.update(this.w, 56 - this.l) : this.update(this.w, this.i - (this.l - 56));
        for (var c = this.i - 1; 56 <= c; c--)
            this.C[c] = b & 255,
            b /= 256;
        Jb(this, this.C);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8)
                a[b] = this.b[c] >> d & 255,
                ++b;
        return a
    }
    ;
    var Kb = function() {
        this.F = new V
    };
    Kb.prototype.reset = function() {
        this.F.reset()
    }
    ;
    var Lb = m.crypto
      , Mb = !1
      , Nb = 0
      , Ob = 0
      , Pb = 1
      , Qb = 0
      , Rb = ""
      , Sb = function(a) {
        a = a || m.event;
        var b = a.screenX + a.clientX << 16
          , b = b + (a.screenY + a.clientY)
          , b = (new Date).getTime() % 1E6 * b;
        Pb = Pb * b % Qb;
        0 < Nb && ++Ob == Nb && H("mousemove", Sb, "remove", "de")
    }
      , Tb = function(a) {
        var b = new Kb;
        a = unescape(encodeURIComponent(a));
        for (var c = [], d = 0, e = a.length; d < e; ++d)
            c.push(a.charCodeAt(d));
        b.F.update(c);
        b = b.F.digest();
        a = "";
        for (c = 0; c < b.length; c++)
            a += "0123456789ABCDEF".charAt(Math.floor(b[c] / 16)) + "0123456789ABCDEF".charAt(b[c] % 16);
        return a
    }
      , Mb = !!Lb && "function" == typeof Lb.getRandomValues;
    Mb || (Qb = 1E6 * (screen.width * screen.width + screen.height),
    Rb = Tb(p.cookie + "|" + p.location + "|" + (new Date).getTime() + "|" + Math.random()),
    Nb = T("random/maxObserveMousemove") || 0,
    0 != Nb && H("mousemove", Sb, "add", "at"));
    var Ub = function() {
        var a = Pb
          , a = a + parseInt(Rb.substr(0, 20), 16);
        Rb = Tb(Rb);
        return a / (Qb + Math.pow(16, 20))
    }
      , Vb = function() {
        var a = new m.Uint32Array(1);
        Lb.getRandomValues(a);
        return Number("0." + a[0])
    };
    var Wb = function() {
        var a = I.onl;
        if (!a) {
            a = v();
            I.onl = a;
            var b = v();
            a.e = function(a) {
                var c = b[a];
                c && (delete b[a],
                c())
            }
            ;
            a.a = function(a, d) {
                b[a] = d
            }
            ;
            a.r = function(a) {
                delete b[a]
            }
        }
        return a
    }
      , Xb = function(a, b) {
        b = b.onload;
        return "function" === typeof b ? (Wb().a(a, b),
        b) : null
    }
      , Yb = function(a) {
        B(/^\w+$/.test(a), "Unsupported id - " + a);
        Wb();
        return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
    }
      , Zb = function(a) {
        Wb().r(a)
    };
    var $b = {
        allowtransparency: "true",
        frameborder: "0",
        hspace: "0",
        marginheight: "0",
        marginwidth: "0",
        scrolling: "no",
        style: "",
        tabindex: "0",
        vspace: "0",
        width: "100%"
    }
      , ac = {
        allowtransparency: !0,
        onload: !0
    }
      , bc = 0
      , cc = function(a) {
        B(!a || za.test(a), "Illegal url for new iframe - " + a)
    }
      , dc = function(a, b, c, d, e) {
        cc(c.src);
        var f, g = Xb(d, c), h = g ? Yb(d) : "";
        try {
            document.all && (f = a.createElement('<iframe frameborder="' + ma(String(c.frameborder)) + '" scrolling="' + ma(String(c.scrolling)) + '" ' + h + ' name="' + ma(String(c.name)) + '"/>'))
        } catch (l) {} finally {
            f || (f = a.createElement("iframe"),
            g && (f.onload = function() {
                f.onload = null;
                g.call(this)
            }
            ,
            Zb(d)))
        }
        f.setAttribute("ng-non-bindable", "");
        for (var k in c)
            a = c[k],
            "style" === k && "object" === typeof a ? A(a, f.style) : ac[k] || f.setAttribute(k, String(a));
        (k = e && e.beforeNode || null) || e && e.dontclear || Ea(b);
        b.insertBefore(f, k);
        f = k ? k.previousSibling : b.lastChild;
        c.allowtransparency && (f.allowTransparency = !0);
        return f
    };
    var ec = /^:[\w]+$/
      , fc = /:([a-zA-Z_]+):/g
      , gc = function() {
        var a = Gb() || "0"
          , b = Hb();
        var c = Gb(void 0) || a;
        var d = Hb(void 0)
          , e = "";
        c && (e += "u/" + encodeURIComponent(String(c)) + "/");
        d && (e += "b/" + encodeURIComponent(String(d)) + "/");
        c = e || null;
        (e = (d = !1 === T("isLoggedIn")) ? "_/im/" : "") && (c = "");
        var f = T("iframes/:socialhost:")
          , g = T("iframes/:im_socialhost:");
        return Db = {
            socialhost: f,
            ctx_socialhost: d ? g : f,
            session_index: a,
            session_delegate: b,
            session_prefix: c,
            im_prefix: e
        }
    }
      , hc = function(a, b) {
        return gc()[b] || ""
    }
      , ic = function(a) {
        return function(b, c) {
            return a ? gc()[c] || a[c] || "" : gc()[c] || ""
        }
    };
    var jc = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }
      , kc = function(a) {
        var b;
        var c = /[\"\\\x00-\x1f\x7f-\x9f]/g;
        if (void 0 !== a) {
            switch (typeof a) {
            case "string":
                return c.test(a) ? '"' + a.replace(c, function(a) {
                    var b = jc[a];
                    if (b)
                        return b;
                    b = a.charCodeAt();
                    return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
                }) + '"' : '"' + a + '"';
            case "number":
                return isFinite(a) ? String(a) : "null";
            case "boolean":
            case "null":
                return String(a);
            case "object":
                if (!a)
                    return "null";
                c = [];
                if ("number" === typeof a.length && !a.propertyIsEnumerable("length")) {
                    var d = a.length;
                    for (b = 0; b < d; b += 1)
                        c.push(kc(a[b]) || "null");
                    return "[" + c.join(",") + "]"
                }
                for (b in a)
                    !/___$/.test(b) && x(a, b) && "string" === typeof b && (d = kc(a[b])) && c.push(kc(b) + ":" + d);
                return "{" + c.join(",") + "}"
            }
            return ""
        }
    }
      , lc = function(a) {
        if (!a)
            return !1;
        if (/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/b-u]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        return !1
    }
      , mc = !1;
    try {
        mc = !!window.JSON && '["a"]' === window.JSON.stringify(["a"]) && "a" === window.JSON.parse('["a"]')[0]
    } catch (a) {}
    var nc = function(a) {
        try {
            return window.JSON.parse(a)
        } catch (b) {
            return !1
        }
    }
      , oc = mc ? window.JSON.stringify : kc
      , pc = mc ? nc : lc;
    var qc = function(a) {
        var b;
        a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
        return ya(document, b ? b : a)
    }
      , rc = function(a) {
        a = a || "canonical";
        for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
            var e = b[c]
              , f = e.getAttribute("rel");
            if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = qc(e)) && null != e.match(/^https?:\/\/[\w\-\_\.]+/i))
                return e
        }
        return window.location.href
    };
    var sc = {
        se: "0"
    }
      , tc = {
        post: !0
    }
      , uc = {
        style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
    }
      , vc = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" ")
      , wc = u(I, "WI", v())
      , xc = function(a, b, c) {
        var d;
        var e = {};
        var f = d = a;
        "plus" == a && b.action && (d = a + "_" + b.action,
        f = a + "/" + b.action);
        (d = T("iframes/" + d + "/url")) || (d = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + f + "?usegapi=1");
        for (var g in sc)
            e[g] = g + "/" + (b[g] || sc[g]) + "/";
        e = ya(p, d.replace(fc, ic(e)));
        g = "iframes/" + a + "/params/";
        f = {};
        A(b, f);
        (d = T("lang") || T("gwidget/lang")) && (f.hl = d);
        tc[a] || (f.origin = window.location.origin || window.location.protocol + "//" + window.location.host);
        f.exp = T(g + "exp");
        if (g = T(g + "location"))
            for (d = 0; d < g.length; d++) {
                var h = g[d];
                f[h] = m.location[h]
            }
        switch (a) {
        case "plus":
        case "follow":
            g = f.href;
            d = b.action ? void 0 : "publisher";
            g = (g = "string" == typeof g ? g : void 0) ? qc(g) : rc(d);
            f.url = g;
            delete f.href;
            break;
        case "plusone":
            g = (g = b.href) ? qc(g) : rc();
            f.url = g;
            g = b.db;
            d = T();
            null == g && d && (g = d.db,
            null == g && (g = d.gwidget && d.gwidget.db));
            f.db = g || void 0;
            g = b.ecp;
            d = T();
            null == g && d && (g = d.ecp,
            null == g && (g = d.gwidget && d.gwidget.ecp));
            f.ecp = g || void 0;
            delete f.href;
            break;
        case "signin":
            f.url = rc()
        }
        I.ILI && (f.iloader = "1");
        delete f["data-onload"];
        delete f.rd;
        for (var k in sc)
            f[k] && delete f[k];
        f.gsrc = T("iframes/:source:");
        k = T("inline/css");
        "undefined" !== typeof k && 0 < c && k >= c && (f.ic = "1");
        k = /^#|^fr-/;
        c = {};
        for (var l in f)
            x(f, l) && k.test(l) && (c[l.replace(k, "")] = f[l],
            delete f[l]);
        l = "q" == T("iframes/" + a + "/params/si") ? f : c;
        k = vb();
        for (var n in k)
            !x(k, n) || x(f, n) || x(c, n) || (l[n] = k[n]);
        n = [].concat(vc);
        (l = T("iframes/" + a + "/methods")) && "object" === typeof l && ea.test(l.push) && (n = n.concat(l));
        for (var w in b)
            x(b, w) && /^on/.test(w) && ("plus" != a || "onconnect" != w) && (n.push(w),
            delete f[w]);
        delete f.callback;
        c._methods = n.join(",");
        return wa(e, f, c)
    }
      , yc = ["style", "data-gapiscan"]
      , Ac = function(a) {
        for (var b = v(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = 0, e = a.attributes.length; d < e; d++) {
            var f = a.attributes[d]
              , g = f.name
              , h = f.value;
            0 <= fa.call(yc, g) || c && 0 != g.indexOf("data-") || "null" === h || "specified"in f && !f.specified || (c && (g = g.substr(5)),
            b[g.toLowerCase()] = h)
        }
        a = a.style;
        (c = zc(a && a.height)) && (b.height = String(c));
        (a = zc(a && a.width)) && (b.width = String(a));
        return b
    }
      , zc = function(a) {
        var b = void 0;
        "number" === typeof a ? b = a : "string" === typeof a && (b = parseInt(a, 10));
        return b
    }
      , Cc = function() {
        var a = I.drw;
        Bb(function(b) {
            if (a !== b.id && 4 != b.state && "share" != b.type) {
                var c = b.id
                  , d = b.type
                  , e = b.url;
                b = b.userParams;
                var f = p.getElementById(c);
                if (f) {
                    var g = xc(d, b, 0);
                    g ? (f = f.parentNode,
                    e.replace(/\#.*/, "").replace(/(\?|&)ic=1/, "") !== g.replace(/\#.*/, "").replace(/(\?|&)ic=1/, "") && (b.dontclear = !0,
                    b.rd = !0,
                    b.ri = !0,
                    b.type = d,
                    Bc(f, b),
                    (d = U[f.lastChild.id]) && (d.oid = c),
                    Cb(c, 4))) : delete U[c]
                } else
                    delete U[c]
            }
        })
    };
    var W, X, Y, Dc, Ec, Fc = /(?:^|\s)g-((\S)*)(?:$|\s)/, Gc = {
        plusone: !0,
        autocomplete: !0,
        profile: !0,
        signin: !0,
        signin2: !0
    };
    W = u(I, "SW", v());
    X = u(I, "SA", v());
    Y = u(I, "SM", v());
    Dc = u(I, "FW", []);
    Ec = null;
    var Ic = function(a, b) {
        Hc(void 0, !1, a, b)
    }
      , Hc = function(a, b, c, d) {
        L("ps0", !0);
        c = ("string" === typeof c ? document.getElementById(c) : c) || p;
        var e = p.documentMode;
        if (c.querySelectorAll && (!e || 8 < e)) {
            e = d ? [d] : z(W).concat(z(X)).concat(z(Y));
            for (var f = [], g = 0; g < e.length; g++) {
                var h = e[g];
                f.push(".g-" + h, "g\\:" + h)
            }
            e = c.querySelectorAll(f.join(","))
        } else
            e = c.getElementsByTagName("*");
        c = v();
        for (f = 0; f < e.length; f++) {
            g = e[f];
            var k = g
              , h = d
              , l = k.nodeName.toLowerCase()
              , n = void 0;
            k.getAttribute("data-gapiscan") ? h = null : (0 == l.indexOf("g:") ? n = l.substr(2) : (k = (k = String(k.className || k.getAttribute("class"))) && Fc.exec(k)) && (n = k[1]),
            h = !n || !(W[n] || X[n] || Y[n]) || h && n !== h ? null : n);
            h && (Gc[h] || 0 == g.nodeName.toLowerCase().indexOf("g:") || 0 != z(Ac(g)).length) && (g.setAttribute("data-gapiscan", !0),
            u(c, h, []).push(g))
        }
        if (b)
            for (var w in c)
                for (b = c[w],
                d = 0; d < b.length; d++)
                    b[d].setAttribute("data-onload", !0);
        for (var q in c)
            Dc.push(q);
        L("ps1", !0);
        if ((w = Dc.join(":")) || a)
            try {
                C.load(w, a)
            } catch (t) {
                yb(t);
                return
            }
        if (Jc(Ec || {}))
            for (var y in c) {
                a = c[y];
                q = 0;
                for (b = a.length; q < b; q++)
                    a[q].removeAttribute("data-gapiscan");
                Kc(y)
            }
        else {
            d = [];
            for (y in c)
                for (a = c[y],
                q = 0,
                b = a.length; q < b; q++)
                    e = a[q],
                    Lc(y, e, Ac(e), d, b);
            Mc(w, d)
        }
    }
      , Nc = function(a) {
        var b = u(C, a, {});
        b.go || (b.go = function(b) {
            return Ic(b, a)
        }
        ,
        b.render = function(b, d) {
            d = d || {};
            d.type = a;
            return Bc(b, d)
        }
        )
    }
      , Oc = function(a) {
        W[a] = !0
    }
      , Pc = function(a) {
        X[a] = !0
    }
      , Qc = function(a) {
        Y[a] = !0
    };
    var Kc = function(a, b) {
        var c = Ha(a);
        b && c ? (c(b),
        (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : C.load(a, function() {
            var c = Ha(a)
              , e = b && b.iframeNode
              , f = b && b.userParams;
            e && c ? (c(b),
            e.setAttribute("data-gapiattached", !0)) : (c = C[a].go,
            "signin2" == a ? c(e, f) : c(e && e.parentNode, f))
        })
    }
      , Jc = function() {
        return !1
    }
      , Mc = function() {}
      , Lc = function(a, b, c, d, e, f, g) {
        switch (Rc(b, a, f)) {
        case 0:
            a = Y[a] ? a + "_annotation" : a;
            d = {};
            d.iframeNode = b;
            d.userParams = c;
            Kc(a, d);
            break;
        case 1:
            if (b.parentNode) {
                for (var h in c) {
                    if (f = x(c, h))
                        f = c[h],
                        f = !!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
                    if (f)
                        try {
                            c[h] = oc(c[h])
                        } catch (F) {
                            delete c[h]
                        }
                }
                f = !0;
                c.dontclear && (f = !1);
                delete c.dontclear;
                Ab();
                h = xc(a, c, e);
                e = g || {};
                e.allowPost = 1;
                e.attributes = uc;
                e.dontclear = !f;
                g = {};
                g.userParams = c;
                g.url = h;
                g.type = a;
                if (c.rd)
                    var k = b;
                else
                    k = document.createElement("div"),
                    b.setAttribute("data-gapistub", !0),
                    k.style.cssText = "position:absolute;width:450px;left:-10000px;",
                    b.parentNode.insertBefore(k, b);
                g.siteElement = k;
                k.id || (b = k,
                u(wc, a, 0),
                f = "___" + a + "_" + wc[a]++,
                b.id = f);
                b = v();
                b[">type"] = a;
                A(c, b);
                f = h;
                c = k;
                h = e || {};
                b = h.attributes || {};
                B(!(h.allowPost || h.forcePost) || !b.onload, "onload is not supported by post iframe (allowPost or forcePost)");
                e = b = f;
                ec.test(b) && (e = T("iframes/" + e.substring(1) + "/url"),
                B(!!e, "Unknown iframe url config for - " + b));
                f = ya(p, e.replace(fc, hc));
                b = c.ownerDocument || p;
                k = 0;
                do
                    e = h.id || ["I", bc++, "_", (new Date).getTime()].join("");
                while (b.getElementById(e) && 5 > ++k);B(5 > k, "Error creating iframe id");
                k = {};
                var l = {};
                b.documentMode && 9 > b.documentMode && (k.hostiemode = b.documentMode);
                A(h.queryParams || {}, k);
                A(h.fragmentParams || {}, l);
                var n = h.connectWithQueryParams ? k : l
                  , w = h.pfname
                  , q = v();
                q.id = e;
                q.parent = b.location.protocol + "//" + b.location.host;
                var y = D(b.location.href, "parent")
                  , w = w || "";
                !w && y && (y = D(b.location.href, "id", ""),
                w = D(b.location.href, "pfname", ""),
                w = y ? w + "/" + y : "");
                q.pfname = w;
                A(q, n);
                (q = D(f, "rpctoken") || k.rpctoken || l.rpctoken) || (q = n.rpctoken = h.rpctoken || String(Math.round(1E8 * (Mb ? Vb() : Ub()))));
                h.rpctoken = q;
                q = b.location.href;
                n = v();
                (y = D(q, "_bsh", I.bsh)) && (n._bsh = y);
                (q = J(q)) && (n.jsh = q);
                h.hintInFragment ? A(n, l) : A(n, k);
                f = wa(f, k, l, h.paramsSerializer);
                l = v();
                A($b, l);
                A(h.attributes, l);
                l.name = l.id = e;
                l.src = f;
                h.eurl = f;
                k = h || {};
                n = !!k.allowPost;
                if (k.forcePost || n && 2E3 < f.length) {
                    k = E(f);
                    l.src = "";
                    l["data-postorigin"] = f;
                    f = dc(b, c, l, e);
                    if (-1 != navigator.userAgent.indexOf("WebKit")) {
                        var t = f.contentWindow.document;
                        t.open();
                        l = t.createElement("div");
                        n = {};
                        q = e + "_inner";
                        n.name = q;
                        n.src = "";
                        n.style = "display:none";
                        dc(b, l, n, q, h)
                    }
                    l = (h = k.query[0]) ? h.split("&") : [];
                    h = [];
                    for (n = 0; n < l.length; n++)
                        q = l[n].split("=", 2),
                        h.push([decodeURIComponent(q[0]), decodeURIComponent(q[1])]);
                    k.query = [];
                    l = ua(k);
                    B(za.test(l), "Invalid URL: " + l);
                    k = b.createElement("form");
                    k.action = l;
                    k.method = "POST";
                    k.target = e;
                    k.style.display = "none";
                    for (e = 0; e < h.length; e++)
                        l = b.createElement("input"),
                        l.type = "hidden",
                        l.name = h[e][0],
                        l.value = h[e][1],
                        k.appendChild(l);
                    c.appendChild(k);
                    k.submit();
                    k.parentNode.removeChild(k);
                    t && t.close();
                    t = f
                } else
                    t = dc(b, c, l, e, h);
                g.iframeNode = t;
                g.id = t.getAttribute("id");
                t = g.id;
                c = v();
                c.id = t;
                c.userParams = g.userParams;
                c.url = g.url;
                c.type = g.type;
                c.state = 1;
                U[t] = c;
                t = g
            } else
                t = null;
            t && ((g = t.id) && d.push(g),
            Kc(a, t))
        }
    }
      , Rc = function(a, b, c) {
        if (a && 1 === a.nodeType && b) {
            if (c)
                return 1;
            if (Y[b]) {
                if (Fa[a.nodeName.toLowerCase()])
                    return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
            } else {
                if (X[b])
                    return 0;
                if (W[b])
                    return 1
            }
        }
        return null
    }
      , Bc = function(a, b) {
        var c = b.type;
        delete b.type;
        var d = ("string" === typeof a ? document.getElementById(a) : a) || void 0;
        if (d) {
            a = {};
            for (var e in b)
                x(b, e) && (a[e.toLowerCase()] = b[e]);
            a.rd = 1;
            (b = !!a.ri) && delete a.ri;
            e = [];
            Lc(c, d, a, e, 0, b, void 0);
            Mc(c, e)
        } else
            yb("string" === "gapi." + c + ".render: missing element " + typeof a ? a : "")
    };
    u(C, "platform", {}).go = Ic;
    var Jc = function(a) {
        for (var b = ["_c", "jsl", "h"], c = 0; c < b.length && a; c++)
            a = a[b[c]];
        b = J(r.href);
        return !a || 0 != a.indexOf("n;") && 0 != b.indexOf("n;") && a !== b
    }
      , Mc = function(a, b) {
        Sc(a, b)
    }
      , Ba = function(a) {
        Hc(a, !0)
    }
      , Tc = function(a, b) {
        b = b || [];
        for (var c = 0; c < b.length; ++c)
            a(b[c]);
        for (a = 0; a < b.length; a++)
            Nc(b[a])
    };
    M.push(["platform", function(a, b, c) {
        Ec = c;
        b && Dc.push(b);
        Tc(Oc, a);
        Tc(Pc, c._c.annotation);
        Tc(Qc, c._c.bimodal);
        rb();
        pb();
        if ("explicit" != T("parsetags")) {
            Ga(a);
            wb(vb()) && !T("disableRealtimeCallback") && Ab();
            if (c && (a = c.callback)) {
                var d = na(a);
                delete c.callback
            }
            Da(function() {
                Ba(d)
            })
        }
    }
    ]);
    C._pl = !0;
    var Uc = function(a) {
        a = (a = U[a]) ? a.oid : void 0;
        if (a) {
            var b = p.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete U[a];
            Uc(a)
        }
    };
    var Vc = /^\{h\:'/
      , Wc = /^!_/
      , Xc = ""
      , Sc = function(a, b) {
        function c() {
            H("message", d, "remove", "de")
        }
        function d(d) {
            var f = d.data
              , h = d.origin;
            if (Yc(f, b)) {
                var k = e;
                e = !1;
                k && L("rqe");
                Zc(a, function() {
                    k && L("rqd");
                    c();
                    for (var a = u(I, "RPMQ", []), b = 0; b < a.length; b++)
                        a[b]({
                            data: f,
                            origin: h
                        })
                })
            }
        }
        if (0 !== b.length) {
            Xc = D(r.href, "pfname", "");
            var e = !0;
            H("message", d, "add", "at");
            P(a, c)
        }
    }
      , Yc = function(a, b) {
        a = String(a);
        if (Vc.test(a))
            return !0;
        var c = !1;
        Wc.test(a) && (c = !0,
        a = a.substr(2));
        if (!/^\{/.test(a))
            return !1;
        var d = pc(a);
        if (!d)
            return !1;
        a = d.f;
        if (d.s && a && -1 != fa.call(b, a)) {
            if ("_renderstart" === d.s || d.s === Xc + "/" + a + "::_renderstart")
                if (d = d.a && d.a[c ? 0 : 1],
                b = p.getElementById(a),
                Cb(a, 2),
                d && b && d.width && d.height) {
                    a: {
                        var c = b.parentNode, e;
                        a = d || {};
                        if (zb() && (e = b.id)) {
                            d = (d = U[e]) ? d.state : void 0;
                            if (1 === d || 4 === d)
                                break a;
                            Uc(e)
                        }
                        (d = c.nextSibling) && d.getAttribute && d.getAttribute("data-gapistub") && (c.parentNode.removeChild(d),
                        c.style.cssText = "");
                        var d = a.width
                          , f = a.height
                          , g = c.style;
                        g.textIndent = "0";
                        g.margin = "0";
                        g.padding = "0";
                        g.background = "transparent";
                        g.borderStyle = "none";
                        g.cssFloat = "none";
                        g.styleFloat = "none";
                        g.lineHeight = "normal";
                        g.fontSize = "1px";
                        g.verticalAlign = "baseline";
                        c = c.style;
                        c.display = "inline-block";
                        g = b.style;
                        g.position = "static";
                        g.left = "0";
                        g.top = "0";
                        g.visibility = "visible";
                        d && (c.width = g.width = d + "px");
                        f && (c.height = g.height = f + "px");
                        a.verticalAlign && (c.verticalAlign = a.verticalAlign);
                        e && Cb(e, 3)
                    }
                    b["data-csi-wdt"] = (new Date).getTime()
                }
            return !0
        }
        return !1
    }
      , Zc = function(a, b) {
        P(a, b)
    };
    var $c = function(a, b) {
        this.N = a;
        a = b || {};
        this.X = Number(a.maxAge) || 0;
        this.K = a.domain;
        this.O = a.path;
        this.Z = !!a.secure
    }
      , ad = /^[-+/_=.:|%&a-zA-Z0-9@]*$/
      , bd = /^[A-Z_][A-Z0-9_]{0,63}$/;
    $c.prototype.write = function(a, b) {
        if (!bd.test(this.N))
            throw "Invalid cookie name";
        if (!ad.test(a))
            throw "Invalid cookie value";
        a = this.N + "=" + a;
        this.K && (a += ";domain=" + this.K);
        this.O && (a += ";path=" + this.O);
        b = "number" === typeof b ? b : this.X;
        if (0 <= b) {
            var c = new Date;
            c.setSeconds(c.getSeconds() + b);
            a += ";expires=" + c.toUTCString()
        }
        this.Z && (a += ";secure");
        document.cookie = a;
        return !0
    }
    ;
    $c.iterate = function(a) {
        for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c].split("=")
              , e = d.shift();
            a(e, d.join("="))
        }
    }
    ;
    var cd = function(a) {
        this.W = a
    }
      , dd = {};
    cd.prototype.write = function(a) {
        dd[this.W] = a;
        return !0
    }
    ;
    cd.iterate = function(a) {
        for (var b in dd)
            dd.hasOwnProperty(b) && a(b, dd[b])
    }
    ;
    var ed = "https:" === window.location.protocol
      , fd = ed || "http:" === window.location.protocol ? $c : cd
      , gd = function(a) {
        var b = a.substr(1)
          , c = ""
          , d = window.location.hostname;
        if ("" !== b) {
            c = parseInt(b, 10);
            if (isNaN(c))
                return null;
            b = d.split(".");
            if (b.length < c - 1)
                return null;
            b.length == c - 1 && (d = "." + d)
        } else
            d = "";
        return {
            g: "S" == a.charAt(0),
            domain: d,
            j: c
        }
    }
      , hd = function() {
        var a, b = null;
        fd.iterate(function(c, d) {
            0 === c.indexOf("G_AUTHUSER_") && (c = gd(c.substring(11)),
            !a || c.g && !a.g || c.g == a.g && c.j > a.j) && (a = c,
            b = d)
        });
        return {
            V: a,
            B: b
        }
    };
    var id = function(a) {
        if (0 !== a.indexOf("GCSC"))
            return null;
        var b = {
            M: !1
        };
        a = a.substr(4);
        if (!a)
            return b;
        var c = a.charAt(0);
        a = a.substr(1);
        var d = a.lastIndexOf("_");
        if (-1 == d)
            return b;
        var e = gd(a.substr(d + 1));
        if (null == e)
            return b;
        a = a.substring(0, d);
        if ("_" !== a.charAt(0))
            return b;
        d = "E" === c && e.g;
        return !d && ("U" !== c || e.g) || d && !ed ? b : {
            M: !0,
            g: d,
            ba: a.substr(1),
            domain: e.domain,
            j: e.j
        }
    }
      , jd = function(a) {
        if (!a)
            return [];
        a = a.split("=");
        return a[1] ? a[1].split("|") : []
    }
      , kd = function(a) {
        a = a.split(":");
        return {
            clientId: a[0].split("=")[1],
            aa: jd(a[1]),
            da: jd(a[2]),
            ca: jd(a[3])
        }
    }
      , ld = function() {
        var a = hd()
          , b = a.V
          , a = a.B;
        if (null !== a) {
            var c;
            fd.iterate(function(a, d) {
                (a = id(a)) && a.M && a.g == b.g && a.j == b.j && (c = d)
            });
            if (c) {
                var d = kd(c)
                  , e = d && d.aa[Number(a)]
                  , d = d && d.clientId;
                if (e)
                    return {
                        B: a,
                        $: e,
                        clientId: d
                    }
            }
        }
        return null
    };
    var Z = function(a) {
        this.J = a
    };
    Z.prototype.o = 0;
    Z.prototype.G = 2;
    Z.prototype.J = null;
    Z.prototype.D = !1;
    Z.prototype.S = function() {
        this.D || (this.o = 0,
        this.D = !0,
        this.P())
    }
    ;
    Z.prototype.P = function() {
        this.D && (this.J() ? this.o = this.G : this.o = Math.min(2 * (this.o || this.G), 120),
        window.setTimeout(ca(this.P, this), 1E3 * this.o))
    }
    ;
    for (var md = 0; 64 > md; ++md)
        ;
    var nd = null
      , zb = function() {
        return I.oa = !0
    }
      , Ab = function() {
        I.oa = !0;
        var a = ld();
        (a = a && a.B) && qb("googleapis.config/sessionIndex", a);
        nd || (nd = u(I, "ss", new Z(od)));
        a = nd;
        a.S && a.S()
    }
      , od = function() {
        var a = ld()
          , b = a && a.$ || null
          , c = a && a.clientId;
        P("auth", {
            callback: function() {
                var a = m.gapi.auth
                  , e = {
                    client_id: c,
                    session_state: b
                };
                a.checkSessionState(e, function(b) {
                    var c = e.session_state
                      , d = T("isLoggedIn");
                    b = T("debug/forceIm") ? !1 : c && b || !c && !b;
                    if (d = d != b)
                        qb("isLoggedIn", b),
                        Ab(),
                        Cc(),
                        b || ((b = a.signOut) ? b() : (b = a.setToken) && b(null));
                    b = vb();
                    var f = T("savedUserState")
                      , c = a._guss(b.cookiepolicy)
                      , f = f != c && "undefined" != typeof f;
                    qb("savedUserState", c);
                    (d || f) && wb(b) && !T("disableRealtimeCallback") && a._pimf(b, !0)
                })
            }
        });
        return !0
    };
    L("bs0", !0, window.gapi._bs);
    L("bs1", !0);
    delete window.gapi._bs;
}
).call(this);
gapi.load("client:plusone", {
    callback: window["loadGoogleClientLibraries"],
    _c: {
        "jsl": {
            "ci": {
                "deviceType": "desktop",
                "oauth-flow": {
                    "authUrl": "https://accounts.google.com/o/oauth2/auth",
                    "proxyUrl": "https://accounts.google.com/o/oauth2/postmessageRelay",
                    "disableOpt": true,
                    "idpIframeUrl": "https://accounts.google.com/o/oauth2/iframe",
                    "usegapi": false
                },
                "debug": {
                    "reportExceptionRate": 0.05,
                    "forceIm": false,
                    "rethrowException": false,
                    "host": "https://apis.google.com"
                },
                "enableMultilogin": true,
                "googleapis.config": {
                    "auth": {
                        "useFirstPartyAuthV2": true
                    }
                },
                "isPlusUser": true,
                "inline": {
                    "css": 1
                },
                "disableRealtimeCallback": false,
                "drive_share": {
                    "skipInitCommand": true
                },
                "csi": {
                    "rate": 0.01
                },
                "client": {
                    "cors": false,
                    "batchPath": {
                        "translate": "batch/translate"
                    },
                    "perApiBatch": false
                },
                "isLoggedIn": true,
                "signInDeprecation": {
                    "rate": 0.0
                },
                "include_granted_scopes": true,
                "llang": "en",
                "iframes": {
                    "ytsubscribe": {
                        "url": "https://www.youtube.com/subscribe_embed?usegapi\u003d1"
                    },
                    "plus_share": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"
                    },
                    ":source:": "3p",
                    "playemm": {
                        "url": "https://play.google.com/work/embedded/search?usegapi\u003d1\u0026usegapi\u003d1"
                    },
                    "partnersbadge": {
                        "url": "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1"
                    },
                    "dataconnector": {
                        "url": "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi\u003d1"
                    },
                    "shortlists": {
                        "url": ""
                    },
                    "plus_followers": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"
                    },
                    "post": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"
                    },
                    "signin": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1",
                        "methods": ["onauth"]
                    },
                    "donation": {
                        "url": "https://onetoday.google.com/home/donationWidget?usegapi\u003d1"
                    },
                    "plusone": {
                        "params": {
                            "count": "",
                            "size": "",
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"
                    },
                    ":im_socialhost:": "https://plus.googleapis.com",
                    "backdrop": {
                        "url": "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"
                    },
                    "visibility": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"
                    },
                    "additnow": {
                        "url": "https://apis.google.com/additnow/additnow.html?usegapi\u003d1",
                        "methods": ["launchurl"]
                    },
                    ":signuphost:": "https://plus.google.com",
                    "community": {
                        "url": ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"
                    },
                    "plus": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"
                    },
                    "commentcount": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"
                    },
                    "zoomableimage": {
                        "url": "https://ssl.gstatic.com/microscope/embed/"
                    },
                    "appfinder": {
                        "url": "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi\u003d1"
                    },
                    "person": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"
                    },
                    "savetodrive": {
                        "url": "https://drive.google.com/savetodrivebutton?usegapi\u003d1",
                        "methods": ["save"]
                    },
                    "page": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"
                    },
                    "card": {
                        "url": ":socialhost:/:session_prefix:_/hovercard/card"
                    },
                    "youtube": {
                        "params": {
                            "location": ["search", "hash"]
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1",
                        "methods": ["scroll", "openwindow"]
                    },
                    "plus_circle": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"
                    },
                    "rbr_s": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
                    },
                    "udc_webconsentflow": {
                        "params": {
                            "url": ""
                        },
                        "url": "https://myaccount.google.com/webconsent?usegapi\u003d1"
                    },
                    "savetoandroidpay": {
                        "url": "https://androidpay.google.com/a/widget/save"
                    },
                    "blogger": {
                        "params": {
                            "location": ["search", "hash"]
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1",
                        "methods": ["scroll", "openwindow"]
                    },
                    "evwidget": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"
                    },
                    "surveyoptin": {
                        "url": "https://www.google.com/shopping/customerreviews/optin?usegapi\u003d1"
                    },
                    ":socialhost:": "https://apis.google.com",
                    "hangout": {
                        "url": "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
                    },
                    ":gplus_url:": "https://plus.google.com",
                    "rbr_i": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
                    },
                    "share": {
                        "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"
                    },
                    "comments": {
                        "params": {
                            "location": ["search", "hash"]
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1",
                        "methods": ["scroll", "openwindow"]
                    },
                    "autocomplete": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/autocomplete"
                    },
                    "ratingbadge": {
                        "url": "https://www.google.com/shopping/customerreviews/badge?usegapi\u003d1"
                    },
                    "appcirclepicker": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
                    },
                    "follow": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"
                    },
                    "sharetoclassroom": {
                        "url": "https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1"
                    },
                    "ytshare": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"
                    },
                    "family_creation": {
                        "params": {
                            "url": ""
                        },
                        "url": "https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1"
                    },
                    "configurator": {
                        "url": ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"
                    },
                    "savetowallet": {
                        "url": "https://androidpay.google.com/a/widget/save"
                    }
                }
            },
            "h": "m;/_/scs/apps-static/_/js/k\u003doz.gapi.en_GB.si41oWX-Mj8.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/rs\u003dAGLTcCMe47ObQ2Oq57369oeLnl5iY-5ygw",
            "u": "https://apis.google.com/js/client:plusone.js?onload\u003dloadGoogleClientLibraries",
            "hee": true,
            "fp": "295772ee1c4573f4f80db1c7ad290c761faacba8",
            "dpo": false
        },
        "platform": ["additnow", "backdrop", "blogger", "comments", "commentcount", "community", "family_creation", "follow", "hangout", "page", "partnersbadge", "person", "playemm", "playreview", "plus", "plusone", "post", "savetoandroidpay", "savetodrive", "savetowallet", "shortlists", "signin2", "udc_webconsentflow", "visibility", "youtube", "ytsubscribe", "zoomableimage", "sharetoclassroom", "donation", "ratingbadge", "surveyoptin"],
        "fp": "295772ee1c4573f4f80db1c7ad290c761faacba8",
        "annotation": ["interactivepost", "recobar", "signin2", "autocomplete", "profile"],
        "bimodal": ["signin", "share"]
    }
});
