"use strict";
function moveScroller() {
    var e = $("#scroller").width()
      , t = function() {
        var t = $(window).scrollTop()
          , n = $("#scroller-anchor").offset().top
          , i = $("#scroller")
          , a = StackExchange.scrollPadding.getPaddingTop()
          , o = a + "px";
        t > n - a ? i.height() > $(window).height() ? i.css({
            "position": "fixed",
            "top": "",
            "bottom": "0",
            "width": e
        }) : i.css({
            "position": "fixed",
            "top": o + 5,
            "bottom": "",
            "width": e
        }) : n >= t && i.css({
            "position": "relative",
            "top": "",
            "bottom": ""
        })
    };
    $(window).scroll(t).resize(t),
    t()
}
function sanitizeAndSplitTags(e, t, n) {
    e = $.trim(e).replace(/([A-Za-z0-9])\+(?=[A-Za-z0-9])/g, "$1 ");
    for (var i = e.split(/[\s|,;]+/), a = [], o = 0; o < i.length; o++) {
        var r = i[o].toLowerCase();
        StackExchange.settings.tags.allowNonAsciiTags || (r = StackExchange.helpers.noDiacritics(r)),
        r = r.replace(/_/g, "-");
        var s = "[^a-z0-9.#+" + (t ? "*" : "") + (StackExchange.settings.tags.allowNonAsciiTags ? "0-9,A-Z,_,a-z,ª,µ,º,À-Ö,Ø-ö,ø-ˁ,ˆ-ˑ,ˠ-ˤ,ˬ,ˮ,Ͱ-ʹ,Ͷ-ͷ,ͺ-ͽ,Ά,Έ-Ί,Ό,Ύ-Ρ,Σ-ϵ,Ϸ-ҁ,Ҋ-ԣ,Ա-Ֆ,ՙ,ա-և,א-ת,װ-ײ,ء-ي,٠-٩,ٮ-ٯ,ٱ-ۓ,ە,ۥ-ۦ,ۮ-ۼ,ۿ,ܐ,ܒ-ܯ,ݍ-ޥ,ޱ,߀-ߪ,ߴ-ߵ,ߺ,ऄ-ह,ऽ,ॐ,क़-ॡ,०-९,ॱ-ॲ,ॻ-ॿ,অ-ঌ,এ-ঐ,ও-ন,প-র,ল,শ-হ,ঽ,ৎ,ড়-ঢ়,য়-ৡ,০-ৱ,ਅ-ਊ,ਏ-ਐ,ਓ-ਨ,ਪ-ਰ,ਲ-ਲ਼,ਵ-ਸ਼,ਸ-ਹ,ਖ਼-ੜ,ਫ਼,੦-੯,ੲ-ੴ,અ-ઍ,એ-ઑ,ઓ-ન,પ-ર,લ-ળ,વ-હ,ઽ,ૐ,ૠ-ૡ,૦-૯,ଅ-ଌ,ଏ-ଐ,ଓ-ନ,ପ-ର,ଲ-ଳ,ଵ-ହ,ଽ,ଡ଼-ଢ଼,ୟ-ୡ,୦-୯,ୱ,ஃ,அ-ஊ,எ-ஐ,ஒ-க,ங-ச,ஜ,ஞ-ட,ண-த,ந-ப,ம-ஹ,ௐ,௦-௯,అ-ఌ,ఎ-ఐ,ఒ-న,ప-ళ,వ-హ,ఽ,ౘ-ౙ,ౠ-ౡ,౦-౯,ಅ-ಌ,ಎ-ಐ,ಒ-ನ,ಪ-ಳ,ವ-ಹ,ಽ,ೞ,ೠ-ೡ,೦-೯,അ-ഌ,എ-ഐ,ഒ-ന,പ-ഹ,ഽ,ൠ-ൡ,൦-൯,ൺ-ൿ,අ-ඖ,ක-න,ඳ-ර,ල,ව-ෆ,ก-ะ,า-ำ,เ-ๆ,๐-๙,ກ-ຂ,ຄ,ງ-ຈ,ຊ,ຍ,ດ-ທ,ນ-ຟ,ມ-ຣ,ລ,ວ,ສ-ຫ,ອ-ະ,າ-ຳ,ຽ,ເ-ໄ,ໆ,໐-໙,ໜ-ໝ,ༀ,༠-༩,ཀ-ཇ,ཉ-ཬ,ྈ-ྋ,က-ဪ,ဿ-၉,ၐ-ၕ,ၚ-ၝ,ၡ,ၥ-ၦ,ၮ-ၰ,ၵ-ႁ,ႎ,႐-႙,Ⴀ-Ⴥ,ა-ჺ,ჼ,ᄀ-ᅙ,ᅟ-ᆢ,ᆨ-ᇹ,ሀ-ቈ,ቊ-ቍ,ቐ-ቖ,ቘ,ቚ-ቝ,በ-ኈ,ኊ-ኍ,ነ-ኰ,ኲ-ኵ,ኸ-ኾ,ዀ,ዂ-ዅ,ወ-ዖ,ዘ-ጐ,ጒ-ጕ,ጘ-ፚ,ᎀ-ᎏ,Ꭰ-Ᏼ,ᐁ-ᙬ,ᙯ-ᙶ,ᚁ-ᚚ,ᚠ-ᛪ,ᜀ-ᜌ,ᜎ-ᜑ,ᜠ-ᜱ,ᝀ-ᝑ,ᝠ-ᝬ,ᝮ-ᝰ,ក-ឳ,ៗ,ៜ,០-៩,᠐-᠙,ᠠ-ᡷ,ᢀ-ᢨ,ᢪ,ᤀ-ᤜ,᥆-ᥭ,ᥰ-ᥴ,ᦀ-ᦩ,ᧁ-ᧇ,᧐-᧙,ᨀ-ᨖ,ᬅ-ᬳ,ᭅ-ᭋ,᭐-᭙,ᮃ-ᮠ,ᮮ-᮹,ᰀ-ᰣ,᱀-᱉,ᱍ-ᱽ,ᴀ-ᶿ,Ḁ-ἕ,Ἐ-Ἕ,ἠ-ὅ,Ὀ-Ὅ,ὐ-ὗ,Ὑ,Ὓ,Ὕ,Ὗ-ώ,ᾀ-ᾴ,ᾶ-ᾼ,ι,ῂ-ῄ,ῆ-ῌ,ῐ-ΐ,ῖ-Ί,ῠ-Ῥ,ῲ-ῴ,ῶ-ῼ,‿-⁀,⁔,ⁱ,ⁿ,ₐ-ₔ,ℂ,ℇ,ℊ-ℓ,ℕ,ℙ-ℝ,ℤ,Ω,ℨ,K-ℭ,ℯ-ℹ,ℼ-ℿ,ⅅ-ⅉ,ⅎ,Ↄ-ↄ,Ⰰ-Ⱞ,ⰰ-ⱞ,Ⱡ-Ɐ,ⱱ-ⱽ,Ⲁ-ⳤ,ⴀ-ⴥ,ⴰ-ⵥ,ⵯ,ⶀ-ⶖ,ⶠ-ⶦ,ⶨ-ⶮ,ⶰ-ⶶ,ⶸ-ⶾ,ⷀ-ⷆ,ⷈ-ⷎ,ⷐ-ⷖ,ⷘ-ⷞ,ⸯ,々-〆,〱-〵,〻-〼,ぁ-ゖ,ゝ-ゟ,ァ-ヺ,ー-ヿ,ㄅ-ㄭ,ㄱ-ㆎ,ㆠ-ㆷ,ㇰ-ㇿ,㐀-䶵,一-鿃,ꀀ-ꒌ,ꔀ-ꘌ,ꘐ-ꘫ,Ꙁ-ꙟ,Ꙣ-ꙮ,ꙿ-ꚗ,ꜗ-ꜟ,Ꜣ-ꞈ,Ꞌ-ꞌ,ꟻ-ꠁ,ꠃ-ꠅ,ꠇ-ꠊ,ꠌ-ꠢ,ꡀ-ꡳ,ꢂ-ꢳ,꣐-꣙,꤀-ꤥ,ꤰ-ꥆ,ꨀ-ꨨ,ꩀ-ꩂ,ꩄ-ꩋ,꩐-꩙,가-힣,豈-鶴,侮-頻,並-龎,ﬀ-ﬆ,ﬓ-ﬗ,יִ,ײַ-ﬨ,שׁ-זּ,טּ-לּ,מּ,נּ-סּ,ףּ-פּ,צּ-ﮱ,ﯓ-ﴽ,ﵐ-ﶏ,ﶒ-ﷇ,ﷰ-ﷻ,︳-︴,﹍-﹏,ﹰ-ﹴ,ﹶ-ﻼ,０-９,Ａ-Ｚ,＿,ａ-ｚ,ｦ-ﾾ,ￂ-ￇ,ￊ-ￏ,ￒ-ￗ,ￚ-ￜ" : "") + "-]";
        r = r.replace(new RegExp(s,"g"), ""),
        r = r.replace(/^[#+-]+/, ""),
        r = r.replace(/[.-]+$/, ""),
        r.length > 0 && (-1 == a.indexOf(r) || n && ("or" == r || "and" == r || "not" == r)) && a.push(r)
    }
    return a
}
function initTagRenderer(e, t) {
    window.tagRenderer || (window.tagRendererRaw = function(n, i, a) {
        i = i || "",
        a = a || "a";
        var o = "";
        i || (e && $.inArray(n, e) > -1 ? o = "required-tag" : t && $.inArray(n, t) > -1 && (o = "moderator-tag"));
        var r = $("<" + a + ">").addClass("post-tag").addClass(o).text(n);
        return "a" === a.toLowerCase() && r.attr({
            "rel": "tag",
            "href": i + "/questions/tagged/" + encodeURIComponent(n),
            "title": function(e) {
                return "show questions tagged '" + e.tag + "'"
            }({
                "tag": n
            })
        }),
        r.outerHTML()
    }
    ,
    window.tagRenderer = function(e, t, n) {
        return $(tagRendererRaw(e, t, n))
    }
    )
}
function showFadingHelpText(e) {
    e.wrap('<div class="dno" />').show().parent().fadeIn("slow", function() {
        $(this).children().unwrap()
    })
}
function initFadingHelpText() {
    var e = {
        "wmd-input": "#how-to-format",
        "tagnames": "#how-to-tag",
        "tag-editor": "#how-to-tag",
        "title": "#how-to-title",
        "wmd-input-42": "#how-to-format",
        "edit-comment": "#how-to-comment"
    }
      , t = $(".wmd-input, #tagnames, #title, .tag-editor input, #wmd-input-42, .edit-comment")
      , n = function(t) {
        var n = $(t);
        return n.parent().hasClass("tag-editor") ? e["tag-editor"] : n.hasClass("wmd-input") ? e["wmd-input"] : n.hasClass("edit-comment") ? e["edit-comment"] : e[$(t).attr("id")]
    };
    t.focus(function() {
        var e = n(this);
        t.each(function() {
            var t = n(this);
            t != e && $(t).hide()
        });
        var i = $(e);
        i.is(":visible") || showFadingHelpText(i)
    })
}
!function(e) {
    function t() {}
    function n(e, t) {
        if (o)
            return t.indexOf(e);
        for (var n = t.length; n--; )
            if (t[n] === e)
                return n;
        return -1
    }
    var i = t.prototype
      , a = []
      , o = a.indexOf ? !0 : !1;
    i.getListeners = function(e) {
        var t = this._events || (this._events = {});
        return t[e] || (t[e] = [])
    }
    ,
    i.addListener = function(e, t) {
        var i = this.getListeners(e);
        return -1 === n(t, i) && i.push(t),
        this
    }
    ,
    i.removeListener = function(e, t) {
        var i = this.getListeners(e)
          , a = n(t, i);
        return -1 !== a && (i.splice(a, 1),
        0 === i.length && (this._events[e] = null)),
        this
    }
    ,
    i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }
    ,
    i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }
    ,
    i.manipulateListeners = function(e, t, n) {
        var i, a, o = e ? this.removeListener : this.addListener, r = e ? this.removeListeners : this.addListeners;
        if ("object" == typeof t)
            for (i in t)
                t.hasOwnProperty(i) && (a = t[i]) && ("function" == typeof a ? o.call(this, i, a) : r.call(this, i, a));
        else
            for (i = n.length; i--; )
                o.call(this, t, n[i]);
        return this
    }
    ,
    i.removeEvent = function(e) {
        return e ? this._events[e] = null : this._events = null,
        this
    }
    ,
    i.emitEvent = function(e, t) {
        for (var n = this.getListeners(e), i = n.length; i--; )
            n[i].apply(null, t || a) === !0 && this.removeListener(e, n[i]);
        return this
    }
    ,
    "function" == typeof define && define.amd ? define(function() {
        return t
    }) : e.EventEmitter = t
}(this);
var StackExchange = StackExchange || {};
StackExchange.realtime = function() {
    function e() {
        return {
            "creationfailed": null,
            "onopen": null,
            "onmessage": null,
            "onclose": null,
            "onerror": null
        }
    }
    function t(t) {
        function n(e, t) {
            tt && tt.contentWindow && tt.contentWindow.postMessage({
                "cmd": e,
                "data": t
            }, l)
        }
        function i(e, t) {
            if (!e.data || !e.data.evt)
                return s("WARNING: Unknown data received from worker: " + JSON.stringify(e)),
                void 0;
            switch (e.data.evt) {
            case "tabId":
                o = e.data.content,
                s("this tab gets assigned id " + o);
                break;
            case "ws-wasopen":
                a = !0,
                r = 1,
                !c && t.open && t.open(),
                c = !0;
                break;
            case "ws-onopen":
                a = !0,
                r = e.data.content,
                t.open && t.open(),
                c = !0;
                break;
            case "ws-onclose":
                a = !1,
                c = !1,
                s("socket has closed"),
                t.close && t.close();
                break;
            case "ws-onerror":
                a = !1,
                c = !1,
                t.error && t.error();
                break;
            case "ws-onmessage":
                t.message && t.message(e.data.content);
                break;
            case "ws-creationfailed":
                t.creationfailed && t.creationfailed(e.data.content);
                break;
            case "log":
                s("worker says: " + e.data.content);
                break;
            case "error":
                s("Web worker failed");
                break;
            default:
                s("WARNING: Unknown message received from worker: " + e.data.evt)
            }
        }
        var a = !1
          , o = -1
          , r = null
          , c = !1
          , l = StackExchange.options.realtime.workerIframeDomain
          , d = {
            "close": function() {
                n("close")
            },
            "send": function(e, t) {
                n("send", {
                    "tabId": e,
                    "message": t
                })
            },
            "open": function(e) {
                n("open", {
                    "endpoint": e,
                    "useMozWebsockets": !("WebSocket"in window)
                })
            },
            "detach": function(e) {
                n("detach", e)
            },
            "keepalive": function(e) {
                n("keepalive", e)
            }
        };
        return Z || (B = window.onunload,
        Z = !0),
        window.onunload = function() {
            B && B(),
            -1 !== o && (s("detaching from worker..."),
            d.detach(o),
            o = -1)
        }
        ,
        setInterval(function() {
            -1 === o || K || Y || d.keepalive(o)
        }, 1e4),
        {
            "on": new e,
            "isOpen": function() {
                return a
            },
            "readyState": function() {
                return r
            },
            "start": function() {
                var e = this.on;
                tt = $("#websocket-worker-iframe")[0],
                window.onmessage = function(t) {
                    "*" === l || t.origin === l ? i(t, e) : s("WARNING!!! worker iframe origin is not what I expected. Got: " + t.origin + " - Expected: " + l)
                }
                ,
                tt.contentWindow.postMessage("START", l)
            },
            "close": function() {
                d.close()
            },
            "dispose": function() {
                -1 !== o && d.detach(o),
                tt = null
            },
            "send": function(e) {
                d.send(o, e)
            },
            "open": function() {
                d.open(t)
            }
        }
    }
    function n(t) {
        function n() {
            try {
                return "WebSocket"in window ? new WebSocket(t) : new MozWebSocket(t)
            } catch (e) {
                return e.message
            }
        }
        var i;
        return {
            "on": new e,
            "isOpen": function() {
                return i && 1 === i.readyState
            },
            "readyState": function() {
                return i ? i.readyState : null
            },
            "start": function() {
                if (!i) {
                    var e = this.on
                      , t = n();
                    "string" == typeof t ? e.creationfailed && e.creationfailed(t) : (i = t,
                    i.onopen = function() {
                        e.open && e.open()
                    }
                    ,
                    i.onclose = function() {
                        e.close && e.close(),
                        i = null
                    }
                    ,
                    i.onmessage = function(t) {
                        e.message && e.message(t)
                    }
                    ,
                    i.onerror = function() {
                        e.error && e.error(),
                        i = null
                    }
                    )
                }
            },
            "close": function() {
                i && (i.close(),
                i = null)
            },
            "dispose": function() {
                this.close()
            },
            "send": function(e) {
                i && i.send(e)
            },
            "open": function() {}
        }
    }
    function i() {
        H && (H.dispose(),
        H = null)
    }
    function a(e) {
        return !Y && StackExchange.options.realtime.useWebWorkers && "undefined" != typeof SharedWorker ? (s("using a shared web worker for web socket connection"),
        X = !0,
        nt || (nt = new t(e))) : (s("NOT using a web worker for web socket connection"),
        X = !1,
        new n(e))
    }
    function o(e) {
        var t = e.split(",")
          , n = t.length
          , o = W % n
          , l = t[o]
          , d = StackExchange.options.realtime.staleDisconnectIntervalInHours;
        if (null != l && 0 != l.indexOf("ws://") && 0 != l.indexOf("wss://") && (l = ("https:" === document.location.protocol ? "wss://" : "ws://") + l),
        "WebSocket"in window || "MozWebSocket"in window) {
            if (H)
                return;
            if (H = new a(l),
            null === H)
                return;
            H.on.open = function() {
                if (G || (G = !0),
                W = 0,
                s("WebSocket opened"),
                H && 1 === H.readyState()) {
                    var e = ""
                      , t = StackExchange.options;
                    if (t) {
                        var e = "|";
                        t.routeName && (e += t.routeName.toString()),
                        e += "|",
                        t.user && t.user.userId && (e += t.user.userId.toString()),
                        e += "|",
                        t.user && t.user.accountId && (e += t.user.accountId.toString()),
                        e += "|",
                        t.user && t.user.rep && (e += t.user.rep.toString()),
                        e = e + "|" + window.location.host + "|",
                        t.serverTime && (e += t.serverTime.toString()),
                        e += "|",
                        s("analytic: " + e),
                        H.send(e)
                    }
                }
                r(),
                c(),
                setInterval(U, 6e4),
                d > 0 && setTimeout(R, 1e3 * d * 60 * 60)
            }
            ,
            H.on.message = function(t) {
                var n = $.parseJSON(t.data || t);
                if ("realtime-broadcast" === n.action) {
                    s("broadcast message - " + n.data);
                    var a = $.parseJSON(n.data).a;
                    "killWebSocket" === a || "restartWebSocket" === a ? (s("Applying action: " + a),
                    K = "killWebSocket" === a,
                    K ? i() : H.close()) : "revertToDirectSocket" === a && X && (Y = !0,
                    s("Direct socket usage forced remotely"),
                    i(),
                    StackExchange.realtime.init(e))
                } else
                    et.emitEvent(n.action, [n.data])
            }
            ,
            H.on.close = function() {
                H = null,
                s("WebSocket closed"),
                !K && 5 > W && J > 0 && (W++,
                J--,
                s("reconnect attempt:" + W + " max retries:" + J),
                setTimeout(function() {
                    StackExchange.realtime.init(e)
                }, (new Date).getTime() % 50 / 20 * 1e3))
            }
            ,
            H.on.error = function() {
                s("WebSocket failed"),
                i()
            }
            ,
            H.on.creationfailed = function(e) {
                s("Sockets disabled - " + e),
                i()
            }
            ,
            H.start(),
            z.length > 0 && H && H.open()
        }
    }
    function r() {
        if (null != H && H.isOpen())
            for (var e = 0, t = z.length; t > e; e++)
                s("sending " + z[e]),
                H.send(z[e])
    }
    function s(e) {
        (StackExchange && StackExchange.options && StackExchange.options.enableLogging || $ && $.cookie && $.cookie("devlog")) && console.log("realtime: " + e)
    }
    function c() {
        et.addListener("hb", function(e) {
            s("heartbeat received; responding"),
            H.send(e)
        })
    }
    function l(e, t) {
        z.push(e),
        t = t === !1 ? !1 : !0,
        t && r()
    }
    function d(e, t) {
        et.removeListener(e, t),
        f(e)
    }
    function u(e, t) {
        et.addListener(e, t),
        l(e)
    }
    function f(e) {
        s("unsubscribing " + e);
        var t = $.inArray(e, z);
        -1 != t && (z.splice(t, 1),
        null != H && H.isOpen() && H.send("-" + e))
    }
    function p(e, t) {
        var n = e + "-question-" + t;
        f(n)
    }
    function h(e, t) {
        var n = e + "-question-" + t;
        l(n),
        et.addListener(n, function(e) {
            if (!StackExchange.realtime.pauseQuestionNotifications) {
                var t = $.parseJSON(e);
                if (t.acctid != StackExchange.options.user.accountId)
                    switch (s(n + " " + e),
                    t.a) {
                    case "score":
                        E(t);
                        break;
                    case "comment-add":
                        v(t);
                        break;
                    case "answer-add":
                        I(t);
                        break;
                    case "accept":
                        m(t);
                        break;
                    case "unaccept":
                        m(t, !0);
                        break;
                    case "post-edit":
                        D(t);
                        break;
                    case "post-deleted":
                        g(t)
                    }
            }
        })
    }
    function g(e) {
        var t = e.aId || e.qId
          , n = !!e.aId
          , i = n ? $("#answer-" + e.aId) : $("#question");
        i.css("opacity", .1);
        var a = $('<div class="realtime-post-deleted-notification" />').css({
            "width": i.outerWidth(),
            "height": i.outerHeight()
        });
        a.insertBefore(i);
        var o = StackExchange.options.user.canSeeDeletedPosts ? "This post has been deleted - click to refresh the page" : "This post has been deleted and is no longer viewable"
          , r = $("<p>").text(o).appendTo(a);
        r.click(function() {
            window.location.reload(!0)
        }),
        $(".popup[data-postid=" + t + "]").fadeOutAndRemove()
    }
    function m(e, t) {
        1 != $("#vote-accepted-" + e.answerid).length && ($(".vote-accepted-on").remove(),
        t || $('.vote input[value="' + e.answerid + '"]').parent().append($("<span>", {
            "class": "vote-accepted-on",
            "title": "The question owner accepted this as the best answer",
            "text": "accepted"
        })))
    }
    function v(e) {
        0 == $("#comment-" + e.commentid).length && StackExchange.comments.realtimeMessage(e.id)
    }
    function x(e, t, n, i, a, o, r) {
        var c = e + "-" + t;
        N = n,
        Q = o,
        l(c),
        et.addListener(c, function(e) {
            s("received (active) on " + c);
            var n = $.parseJSON(e);
            if (null != a)
                for (var o = 0; o < a.length; o++)
                    if (-1 == $.inArray(a[o], n.tags))
                        return;
            O(n, i, t),
            null != r && r(n)
        })
    }
    function k(e) {
        l(e + "-qcnt-feed"),
        et.addListener(e + "-qcnt-feed", function(e) {
            $("div#q-cnt").html(e)
        }),
        l(e + "-evc-feed"),
        et.addListener(e + "-evc-feed", function(e) {
            $("div#evc-cnt").html(e)
        }),
        l(e + "-acnt-feed"),
        et.addListener(e + "-acnt-feed", function(e) {
            $("div#a-cnt").html(e)
        })
    }
    function w(e) {
        var t = e + "-review-dashboard-update";
        l(t),
        et.addListener(t, function(e) {
            var t = $.parseJSON(e)
              , n = $('.dashboard-activity[data-review-task="' + t.i + '"]');
            0 == n.find('.dashboard-user[data-user="' + t.u + '"]').length && (n.find(".dashboard-user:nth-child(6)").remove(),
            n.css("overflow", "hidden"),
            n.children().css({
                "left": "-44px"
            }),
            n.prepend(t.html).children().animate({
                "left": 0
            }, function() {
                n.css("overflow", "visible")
            }))
        })
    }
    function b() {
        if (null != StackExchange.options.user.accountId) {
            var e = StackExchange.options.user.accountId + "-topbar";
            l(e),
            et.addListener(e, function(e) {
                StackExchange.topbar.handleRealtimeMessage(e)
            })
        }
    }
    function y(e) {
        if (null != StackExchange.options.user.accountId) {
            var t = e + "-" + StackExchange.options.user.userId + "-reputation";
            l(t),
            et.addListener(t, function(e) {
                C(e)
            })
        }
    }
    function S(e) {
        var t = e + "-suggested-edits-count-update";
        l(t),
        et.addListener(t, function() {
            T()
        })
    }
    function E(e) {
        var t = $('.vote input[value="' + e.id + '"]').siblings(".vote-count-post");
        t.text() != e.score && (t.text(e.score),
        0 == $(":animated").length && t.fadeTo("fast", .7).fadeTo("fast", 1),
        StackExchange.question.canViewVoteCounts() && StackExchange.vote.bindFetchVoteCounts())
    }
    function C(e) {
        var t = $("#hlinks .reputation-score, .links-container .reputation, .js-header-rep");
        t.text() != e.score && (0 == $(":animated").length && t.fadeTo("fast", .8).fadeTo("fast", 1),
        t.text(e).attr("title", function(e) {
            return "your reputation: " + e.reputation
        }({
            "reputation": e
        })),
        t.trigger("reputationchange"))
    }
    function T() {
        $.ajax({
            "type": "POST",
            "url": "/review/suggested-edit-count",
            "data": {
                "fkey": StackExchange.options.user.fkey
            },
            "dataType": "json",
            "success": function(e) {
                e && e.count && _(e.count)
            }
        })
    }
    function _(e) {
        var t = $(".suggested-edits-count");
        t.text() != e && (0 == $(":animated").length && t.fadeTo("fast", .5).fadeTo("fast", 1),
        t.text(e))
    }
    function I(e) {
        if (0 == $("#answer-" + e.answerid).length && (V.push(e.answerid),
        StackExchange.cardiologist)) {
            if (StackExchange.cardiologist.isHeartBeating()) {
                var t = StackExchange.helpers.DelayedReaction(M, 5e3);
                t.trigger()
            } else
                M();
            StackExchange.cardiologist.notifiedOfNewAnswer()
        }
    }
    function M() {
        $("#new-answer-activity").remove(),
        $("#answers-header").prepend(it)
    }
    function D(e) {
        var t = $(".question[data-questionid=" + e.id + "], .answer[data-answerid=" + e.id + "]");
        if (!(t.find(".new-post-activity[data-postid=" + e.id + "]").length > 0)) {
            var n = $('<div class="new-post-activity" data-postid="' + e.id + '">').append($('<a href="#">').text("an edit has been made to this post; click to load"))
              , i = 0 === t.find(".inline-editor").length
              , a = function() {
                $(".new-post-activity[data-postid=" + e.id + "]").remove(),
                i && t.off("click", a),
                0 == $("#review-content").length && $.get("/posts/ajax-load-realtime/{postIdsSemiColonDelimited}?title=true".formatUnicorn({
                    "postIdsSemiColonDelimited": e.id
                }), at(t.find(".postcell, .answercell"), e)),
                $(document).trigger("refreshEdit", e.id)
            };
            i && t.click(a),
            n.prependTo(t).find("a").click(function(e) {
                return e.stopPropagation(),
                a(),
                !1
            })
        }
    }
    function P() {
        $("#tabs").show(),
        $("#new-answer-activity").remove();
        var e = $("#answers #answers-header")
          , t = e.find(".answers-subheader h2")
          , n = parseInt(t.text()) + V.length;
        isNaN(n) && (n = V.length),
        t.text(function(e) {
            return 1 == e.answerCount ? e.answerCount + " Answer" : e.answerCount + " Answers"
        }({
            "answerCount": n
        })),
        $.ajax({
            "url": "/posts/ajax-load-realtime/{postIdsSemiColonDelimited}".formatUnicorn({
                "postIdsSemiColonDelimited": V.join(";")
            })
        }).done(function(t) {
            var n = $('<div class="dno" />').append(t);
            n.insertAfter(e).fadeIn(400, function() {
                n.removeClass("dno"),
                styleCode(),
                StackExchange.vote.init($(".question").data("questionid")),
                n.find(".answer").each(function() {
                    StackExchange.comments.init({
                        "post": $(this)
                    })
                })
            })
        }),
        StackExchange.question.bindSuggestedEditPopupLinks(),
        U(),
        V = []
    }
    function O(e, t, n) {
        null != StackExchange.options.user.accountId && StackExchange.tagPreferences.isIgnored(e.body) || (e.fetch && $.ajax({
            "url": "/posts/" + e.id + "/" + n
        }).done(function(t) {
            e.body = t,
            F[e.id] = {
                "id": e.id,
                "body": e.body,
                "index": (new Date).getTime(),
                "siteid": e.siteid
            }
        }),
        F[e.id] = {
            "id": e.id,
            "body": e.body,
            "index": (new Date).getTime(),
            "siteid": e.siteid
        },
        $(".new-post-activity").remove(),
        $("#question-mini-list, #questions").prepend(ot),
        $(".tag-sponsorship").length > 0 && $("#question-mini-list, #questions").css("margin-top", "0px"),
        t && A())
    }
    function q(e, t) {
        return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
    }
    function A() {
        var e = [];
        for (var t in F)
            F.hasOwnProperty(t) && e.push(F[t]);
        for (var n = e.sort(q), i = 0; i < n.length; i++) {
            var a = n[i];
            $("#question-summary-" + a.id).remove(),
            $(a.body).prependTo("#question-mini-list, #questions").hide().fadeIn()
        }
        L(0),
        null != StackExchange.options.user.accountId && StackExchange.tagPreferences.applyPrefs(!0, N),
        styleCode(),
        U(),
        $(".new-post-activity").remove(),
        F = {}
    }
    function L(e) {
        var t = document.title.replace(/^\(\d*\*?\) /, "");
        e > 0 && (t = "(" + e + ") " + t),
        window.setTimeout(function() {
            $(document).attr("title", t)
        }, 200)
    }
    function R() {
        K = !0,
        StackExchange.notify.show('Instant updates have been disabled due to inactivity <a href=".">refresh</a> to reconnect', 312),
        H.dispose()
    }
    function U() {
        for (var e = $("span.relativetime, span.relativetime-clean"), t = 0; t < e.length; t++)
            if (e[t].title) {
                var n = j(e[t].title);
                n && (e[t].innerHTML = n)
            }
    }
    function j(e) {
        if (null != e && 20 == e.length) {
            e = e.substr(0, 10) + "T" + e.substr(11, 10);
            var t = new Date(e)
              , n = ((new Date).getTime() - t.getTime()) / 1e3 + StackExchange.options.serverTimeOffsetSec
              , i = Math.floor(n / 86400);
            if (!(isNaN(i) || 0 > i || i >= 31))
                return 0 == i && (2 > n && "just now" || 60 > n && (Q ? function(e) {
                    return 1 == e.seconds,
                    e.seconds + "s ago"
                }({
                    "seconds": Math.floor(n)
                }) : function(e) {
                    return 1 == e.seconds ? e.seconds + " sec ago" : e.seconds + " secs ago"
                }({
                    "seconds": Math.floor(n)
                })) || 120 > n && (Q ? "1m ago" : "1 min ago") || 3600 > n && (Q ? function(e) {
                    return 1 == e.minutes,
                    e.minutes + "m ago"
                }({
                    "minutes": Math.floor(n / 60)
                }) : function(e) {
                    return 1 == e.minutes ? e.minutes + " min ago" : e.minutes + " mins ago"
                }({
                    "minutes": Math.floor(n / 60)
                })) || 7200 > n && (Q ? "1h ago" : "1 hour ago") || 86400 > n && (Q ? function(e) {
                    return 1 == e.hours,
                    e.hours + "h ago"
                }({
                    "hours": Math.floor(n / 3600)
                }) : function(e) {
                    return 1 == e.hours ? e.hours + " hour ago" : e.hours + " hours ago"
                }({
                    "hours": Math.floor(n / 3600)
                })))
        }
    }
    var N, B, H = null, F = {}, V = [], W = 0, z = [], J = 10, G = !1, Q = !1, K = !1, Y = !1, X = !1, Z = !1, et = new EventEmitter, tt = null, nt = null, it = function() {
        var e = Object.keys(V).length;
        0 == e && $("#new-answer-activity").remove();
        var t = $('<div id="new-answer-activity">').append($('<a href="#">').text(function(e) {
            return 1 == e.count ? e.count + " new answer to this question" : e.count + " new answers to this question"
        }({
            "count": e
        })));
        return t.click(function() {
            StackExchange.realtime.expandAnswers()
        }),
        t.find("a").click(function(e) {
            return e.stopPropagation(),
            StackExchange.realtime.expandAnswers(),
            !1
        }),
        t
    }, at = function(e, t) {
        return function(n) {
            var i = $(n).filter(".question, .answer")
              , a = i.find(".postcell, .answercell")
              , o = e.closest(".question")
              , r = o.length > 0
              , s = $("h1 a.question-hyperlink")
              , c = i.data("title")
              , l = r && $.trim(s.text()) != c
              , d = $(".question-status")
              , u = 150
              , f = function(e, t) {
                return function() {
                    return $.Deferred(function(n) {
                        null == t || t() ? e.animate({
                            "opacity": 0
                        }, u).promise().done(function() {
                            n.resolve()
                        }) : n.resolve()
                    })
                }
            }
              , p = f(s, function() {
                return l
            })
              , h = f(e)
              , g = f(d);
            if ($.when(p(), h(), g()).done(function() {
                l && s.text(c).animate({
                    "opacity": 1
                }, u);
                var t = function(e, t) {
                    return new $.Deferred(function(n) {
                        t.css({
                            "opacity": 0
                        }),
                        e.replaceWith(t),
                        t.animate({
                            "opacity": 1
                        }, u, function() {
                            n.resolve()
                        })
                    }
                    )
                };
                t(e, a).done(function() {
                    styleCode(),
                    StackExchange.question.bindSuggestedEditPopupLinks()
                });
                var i = $(n).find(".question-status:last");
                i.length ? (d.length || (d = $("<div>").addClass("question-status").insertAfter(o)),
                t(d, i)) : r ? d.remove() : d.animate({
                    "opacity": 1
                }, u)
            }),
            window.history) {
                var m = l ? function(e) {
                    return e.pageTitle + " - " + e.siteName
                }({
                    "pageTitle": c,
                    "siteName": StackExchange.options.site.name
                }) : document.Title;
                window.history.replaceState(window.history.state, m, "#" + t.id)
            }
        }
    }, ot = function() {
        var e = Object.keys(F).length;
        L(e);
        var t = $('<div class="new-post-activity">').append($('<a href="#">').text(function(e) {
            return 1 == e.count ? e.count + " question with new activity" : e.count + " questions with new activity"
        }({
            "count": e
        })));
        return t.click(function() {
            StackExchange.realtime.expandActiveQuestions()
        }),
        t.find("a").click(function(e) {
            return e.stopPropagation(),
            StackExchange.realtime.expandActiveQuestions(),
            !1
        }),
        t
    };
    return {
        "init": o,
        "log": s,
        "expandActiveQuestions": A,
        "expandAnswers": P,
        "subscribeToActiveQuestions": x,
        "subscribeToQuestion": h,
        "unsubscribeToQuestion": p,
        "pauseQuestionNotifications": !1,
        "subscribeToReputationNotifications": y,
        "subscribeToSuggestedEdits": S,
        "updateRelativeDates": U,
        "subscribeToReviewDashboard": w,
        "subscribeToTopBarNotifications": b,
        "subscribeToCounts": k,
        "genericSubscribe": u,
        "genericUnsubscribe": d
    }
}(),
function() {
    function e(e, t) {
        for (var n = [], i = [], a = {
            "tag": null,
            "endOrBlock": function() {
                i.length && n.push(i),
                i = []
            },
            "pushToAndBlock": function() {
                i.push(a.tag)
            }
        }, o = 0; o < e.length; o++)
            a.tag = e[o],
            t(a);
        return a.tag = null,
        a.endOrBlock(),
        n
    }
    function t(t, n) {
        switch (n) {
        case "and":
            return e(t, function(e) {
                switch (e.tag) {
                case "and":
                    break;
                case "or":
                    e.endOrBlock();
                    break;
                default:
                    e.pushToAndBlock()
                }
            });
        case "or":
            return e(t, function(e) {
                switch (e.tag) {
                case "and":
                    e.and = !0;
                    break;
                case "or":
                    e.and = !1;
                    break;
                default:
                    e.and || e.endOrBlock(),
                    e.pushToAndBlock(),
                    e.and = !1
                }
            });
        default:
            throw "unknown mode " + n
        }
    }
    function n(e, n) {
        var i = "t_" + e.token;
        if (g[i])
            throw "dupe!";
        var r = e.layout + "-" + e.sort;
        g[i] = r;
        var s = h[r];
        s || (h[r] = s = new c(a(e.layout, e.sort),o(e.layout, e.sort)));
        var l, d = t(e.requiredTags.length ? e.requiredTags : ["_FIREHOSE"], e.mode), u = e.filter;
        u && (l = function(e) {
            return e.flags && e.flags.indexOf(u) >= 0
        }
        ),
        s.subscribe(e.token, d, function(e, t) {
            n({
                "token": t,
                "questions": [$(e.body)]
            })
        }, l)
    }
    function i(e) {
        var t = "t_" + e
          , n = g[t];
        if (n) {
            var i = h[n];
            if (!i)
                return StackExchange.debug.log("should have a multiplexer for " + n + " but don't -- that's a bug"),
                void 0;
            i.unsubscribe(e),
            delete g[t]
        }
    }
    function a(e, t) {
        return function(n, i) {
            i._socket_listeners = i._socket_listeners || {};
            var a = r(n, e, t)
              , o = function(e) {
                var t = JSON.parse(e);
                "_FIREHOSE" === n && t.tags.push("_FIREHOSE"),
                i(t)
            };
            i._socket_listeners["t_" + n] = o,
            StackExchange.realtime.genericSubscribe(a, o)
        }
    }
    function o(e, t) {
        return function(n, i) {
            if (!i._socket_listeners)
                throw "cannot remove callback that was not added";
            var a = i._socket_listeners["t_" + n];
            if (!a)
                throw "cannot remove callback that was not added";
            delete i._socket_listeners["t_" + n];
            var o = r(n, e, t);
            StackExchange.realtime.genericUnsubscribe(o, a)
        }
    }
    function r(e, t, n) {
        return "_FIREHOSE" === e ? StackExchange.options.site.id + "-newnav-" + t + "-questions-" + n : StackExchange.options.site.id + "-newnav-" + t + "-questions-" + n + "-tag-" + e
    }
    function s(e, t, n) {
        for (var i in e)
            e.hasOwnProperty(i) && t.call(n, i, e[i])
    }
    function c(e, t) {
        this.subscriptions = {},
        this.layers = {
            "socketLayer": {},
            "middleLayer": [],
            "tabLayer": []
        },
        this.manageInputs = {
            "add": e,
            "remove": t
        },
        this.listeners = {}
    }
    function l(e) {
        var t = e.outputs[0]
          , n = t.node.inputs[t.index];
        return n[0]
    }
    function d(e) {
        if (this.inputs = [],
        this.outputs = [],
        this.must_dedupe = e.must_dedupe,
        e.filter)
            if ("none" === e.filter)
                this.filter = null;
            else {
                if ("function" != typeof e.filter)
                    throw 'filter must be "none" or function';
                this.filter = e.filter
            }
    }
    function u(e) {
        return e.map(function(e) {
            return e = e.slice(),
            e.sort(),
            e
        })
    }
    function f(e, t) {
        for (var n = 0, i = 0; n < e.length && i < t.length; )
            e[n] === t[i] ? (n++,
            i++) : i++;
        return n === e.length
    }
    function p(e, t) {
        for (var n = 0; n < e.length; n++)
            if (f(e[n], t))
                return !0;
        return !1
    }
    var h = {}
      , g = {};
    StackExchange.realtime.newnav_multiplex = {
        "subscribe": n,
        "unsubscribe": i
    },
    c.prototype.subscribe = function(e, t, n, i) {
        this.unsubscribe(e),
        this.subscriptions["t_" + e] = {
            "query": u(t),
            "callback": n,
            "filter": i
        },
        this.dirty()
    }
    ,
    c.prototype.unsubscribe = function(e) {
        var t = "t_" + e
          , n = this.subscriptions[t];
        n && (delete this.subscriptions[t],
        this.dirty())
    }
    ,
    c.prototype.dirty = function() {
        this.refreshInputs()
    }
    ,
    c.prototype.refreshInputs = function() {
        var e = [];
        s(this.subscriptions, function(t, n) {
            var i = t.substring(2)
              , a = {
                "must_dedupe": !0
            }
              , o = n.filter;
            o && (a.filter = function(e, t) {
                return o(t, i)
            }
            );
            var r = new d(a);
            r.addOutputFunction(function(e) {
                n.callback.call(null, e, i)
            }),
            n.query.forEach(function(e) {
                r.addInput([e])
            }),
            e.push(r)
        });
        var t = []
          , n = {};
        e.forEach(function(e) {
            e.inputs.forEach(function(i, a) {
                var o = "t_" + i[0].join("|");
                n[o] || (n[o] = new d({
                    "must_dedupe": !1
                }),
                t.push(n[o])),
                n[o].addOutput(e, a)
            })
        });
        for (var i, a = {}, o = t.slice(); o.length; ) {
            i = {};
            var r, c = -1;
            o.forEach(function(e) {
                l(e).forEach(function(e) {
                    var t = "t_" + e
                      , n = (i[t] || 0) + 1;
                    i[t] = n,
                    n > c && (c = n,
                    r = e)
                })
            });
            var u = new d({
                "must_dedupe": !1,
                "filter": "none"
            });
            a["t_" + r] = u,
            o = o.filter(function(e) {
                return -1 == l(e).indexOf(r) ? !0 : (e.addInput([[r]]),
                u.addOutput(e, 0),
                !1)
            })
        }
        var f = []
          , p = []
          , h = this.layers;
        for (var g in h.socketLayer)
            h.socketLayer.hasOwnProperty(g) && !a[g] && p.push(g.substring(2));
        for (var g in a)
            a.hasOwnProperty(g) && !h.socketLayer[g] && f.push(g.substring(2));
        var m = this.manageInputs
          , v = this;
        p.forEach(function(e) {
            m.remove(e, v.listener(e))
        }),
        f.forEach(function(e) {
            m.add(e, v.listener(e))
        }),
        this.layers.tabLayer = e,
        this.layers.middleLayer = t,
        this.layers.socketLayer = a
    }
    ,
    c.prototype.listener = function(e) {
        var t = "t_" + e;
        if (!this.listeners[t]) {
            var n = this;
            this.listeners[t] = function(i) {
                var a = n.layers.socketLayer[t];
                a ? a.receive(0, i) : StackExchange.debug.log("Multiplexer received question on " + e + " channel. Nobody's listening there.")
            }
        }
        return this.listeners[t]
    }
    ,
    d.prototype.receive = function(e, t) {
        if (this.must_dedupe) {
            var n = t.tags.slice();
            n.sort();
            for (var i = 0; i < this.inputs.length; i++)
                if (p(this.inputs[i], n)) {
                    if (i !== e)
                        return;
                    break
                }
            if (i === this.inputs.length)
                throw "deduping found no matching input"
        }
        this.outputs.forEach(function(e) {
            (!this.filter || this.filter(e, t)) && (e.func ? e.func.call(e.context, t) : e.node.receive(e.index, t))
        }, this)
    }
    ,
    d.prototype.filter = function(e, t) {
        if (e.func)
            return !0;
        var n = t.tags.slice();
        return n.sort(),
        p(e.node.inputs[e.index], n)
    }
    ,
    d.prototype.addOutput = function(e, t) {
        this.outputs.push({
            "node": e,
            "index": t
        })
    }
    ,
    d.prototype.addOutputFunction = function(e, t) {
        this.outputs.push({
            "func": e,
            "context": t
        })
    }
    ,
    d.prototype.addInput = function(e) {
        var t = this.inputs.length;
        return this.inputs.push(u(e)),
        t
    }
}(),
StackExchange.anonymous = {},
!function(e, t, n) {
    "function" == typeof define ? define(n) : "undefined" != typeof module ? module.exports = n() : t[e] = n(t)
}("klass", this, function(e) {
    function t(e) {
        return o.call(n(e) ? e : function() {}
        , e, 1)
    }
    function n(e) {
        return typeof e === s
    }
    function i(e, t, n) {
        return function() {
            var i = this.supr;
            this.supr = n[l][e];
            var a = {}.fabricatedUndefined
              , o = a;
            try {
                o = t.apply(this, arguments)
            } finally {
                this.supr = i
            }
            return o
        }
    }
    function a(e, t, a) {
        for (var o in t)
            t.hasOwnProperty(o) && (e[o] = n(t[o]) && n(a[l][o]) && c.test(t[o]) ? i(o, t[o], a) : t[o])
    }
    function o(e, t) {
        function i() {}
        function r() {
            this.initialize ? this.initialize.apply(this, arguments) : (t || d && s.apply(this, arguments),
            u.apply(this, arguments))
        }
        i[l] = this[l];
        var s = this
          , c = new i
          , d = n(e)
          , u = d ? e : this
          , f = d ? {} : e;
        return r.methods = function(e) {
            return a(c, e, s),
            r[l] = c,
            this
        }
        ,
        r.methods.call(r, f).prototype.constructor = r,
        r.extend = o,
        r[l].implement = r.statics = function(e, t) {
            return e = "string" == typeof e ? function() {
                var n = {};
                return n[e] = t,
                n
            }() : e,
            a(this, e, s),
            this
        }
        ,
        r
    }
    e = e || this;
    var r = e.klass
      , s = "function"
      , c = /.*/
      , l = "prototype";
    return t.noConflict = function() {
        return e.klass = r,
        this
    }
    ,
    t
}),
StackExchange.topbar = function() {
    function e(e) {
        StackExchange.options.enableLogging && console.log("topbar: " + e)
    }
    function t(e) {
        for (var t = 0; t < w.length; t++) {
            var n = w[t].$button;
            if (n && n[0] == e)
                return !0
        }
        return !1
    }
    function n() {
        for (var e = 0; e < w.length; e++)
            w[e].toggle(!1)
    }
    function i(t) {
        var n;
        if (t && (n = JSON.parse(t))) {
            e("realtime message - " + t);
            for (var i in n)
                for (var a = 0; a < w.length; a++)
                    if (i == w[a].name) {
                        w[a].handleRealtimeMessage(n[i]);
                        break
                    }
        }
    }
    function a() {
        var e = $(".js-so-header")
          , t = $(".js-search-field")
          , n = $(".js-search-submit")
          , i = !1;
        t.on({
            "focus": function() {
                e.addClass("_search-open")
            },
            "blur": function() {
                i ? (t.focus(),
                i = !1) : e.removeClass("_search-open")
            }
        }),
        n.mousedown(function() {
            i = !0
        })
    }
    function o(e) {
        function t() {
            var t = $(window).scrollTop();
            t > e ? n.addClass("_scrolling") : n.removeClass("_scrolling")
        }
        var n = $(".js-so-header");
        t(),
        $(window).scroll(function() {
            t()
        })
    }
    var r = klass({
        "name": "",
        "url": "",
        "cssClass": "",
        "button": null,
        "$dialog": null,
        "$loadingPlaceholder": null,
        "$preloadedDialog": null,
        "hasRead": !1
    }).statics({
        "$corral": $(".js-topbar-dialog-corral")
    }).methods({
        "isLoading": function() {
            return null != this.$loadingPlaceholder
        },
        "isLoaded": function() {
            return null != this.$dialog
        },
        "isVisible": function() {
            var e = this.$dialog || this.$loadingPlaceholder;
            return null != e && e.is(":visible")
        },
        "toggle": function(e, t) {
            if ("boolean" != typeof e)
                throw new Error("showOrHide is a required parameter");
            if (!e) {
                if (this.isLoading())
                    return this.showOrHide(!1),
                    void 0;
                if (!this.isLoaded())
                    return
            }
            if (this.isLoaded() || this.isLoading() ? (e || t || !this.hasRead || this.markAsRead(),
            this.showOrHide(e)) : this.$preloadedDialog ? this.loadChildContent() : this.loadDialog(),
            e)
                for (var n = 0; n < w.length; n++)
                    this.button != w[n] && w[n].toggle(!1, t)
        },
        "showOrHide": function(e) {
            var t = this.$dialog || this.$loadingPlaceholder;
            t && t.toggle(e),
            e && this.$dialog && (this.hasRead = !0)
        },
        "loadChildContent": function() {
            var e = this.$preloadedDialog.find(".child-content");
            if (this.$dialog = this.$preloadedDialog,
            this.positionDialogUnderButton(),
            this.showOrHide(!0),
            this.url) {
                $("<div>", {
                    "class": "child-content-loading"
                }).addSpinner().appendTo(e);
                var t = this;
                this.fetchUrl().done(function(n) {
                    e.html(n),
                    t.afterLoad()
                })
            }
        },
        "loadDialog": function() {
            if (!this.isLoading()) {
                this.$loadingPlaceholder = this.getLoadingPlaceholder().appendTo(r.$corral),
                this.positionDialogUnderButton(),
                this.showOrHide(!0);
                var e = this;
                this.fetchUrl().done(function(t) {
                    e.$dialog = $(t).appendTo(r.$corral),
                    e.afterLoad();
                    var n = e.$loadingPlaceholder.is(":visible");
                    e.positionDialogUnderButton(),
                    e.showOrHide(n)
                }).always(function() {
                    e.$loadingPlaceholder.remove(),
                    e.$loadingPlaceholder = null
                })
            }
        },
        "afterLoad": function() {
            this.$dialog.find(".js-close-button").click(function() {
                StackExchange.topbar.hideAll()
            }),
            StackExchange.gps.bindTrackClicks(this.$dialog)
        },
        "getLoadingPlaceholder": function() {
            var e = $("<div/>").append(StackExchange.helpers.getSpinnerImg()).html()
              , t = this.cssClass + (StackExchange.options.user.isAnonymousNetworkWide ? " anon" : "")
              , n = ['<div class="topbar-dialog ', t, ' dno">', '<div class="header">', e, "</div>", '<div class="modal-content"/>', "</div>"];
            return $(n.join(""))
        },
        "positionDialogUnderButton": function() {
            for (var e = StackExchange.options.user.canSeeNewHeaderDesign ? "right" : "left", t = this.button.$button.outerHeight(), n = this.$dialog || this.$loadingPlaceholder, i = n.parent(); i.not("body").length && "static" === i.css("position"); )
                i = i.parent();
            i = i.length ? i : $("body");
            var a = this.button.$button.offset().left - i.offset().left;
            "right" === e && (a = i.outerWidth() - a - this.button.$button.outerWidth());
            var o = {
                "top": t
            };
            o[e] = a,
            (this.$dialog || this.$loadingPlaceholder).css(o)
        },
        "fetchUrl": function() {
            e("fetching " + this.url);
            var t = $.ajax({
                "type": "GET",
                "url": this.url,
                "dataType": "html"
            });
            return t
        },
        "markAsRead": function() {
            this.button.markAsRead(),
            this.isLoaded() && this.$dialog.find(".unread-item").removeClass("unread-item")
        },
        "handleRealtimeMessage": function() {
            this.clearLoadedDialog()
        },
        "clearLoadedDialog": function() {
            this.isLoaded() && (this.$dialog.remove(),
            this.$dialog = null,
            this.hasRead = !1)
        }
    })
      , s = klass({
        "name": "",
        "selector": "",
        "dialog": null,
        "$button": null,
        "onClass": "",
        "unreadCountPrefix": "",
        "queuedUnreadCount": 0,
        "showsOnMouseOver": !1
    }).methods({
        "initialize": function() {
            this.dialog.name = name,
            this.dialog.button = this,
            b.push(this.dialog);
            var e = this;
            this.$button = $(this.selector),
            this.$button.click(function() {
                return e.toggle(),
                !1
            }),
            this.showsOnMouseOver && this.$button.mouseover(function() {
                e.showOnMouseOver()
            }),
            this.onClass = "topbar-icon-on" + (this.onClass ? " " : "") + this.onClass
        },
        "toggle": function(e, t) {
            e = "boolean" == typeof e ? e : !this.$button.hasClass(this.onClass),
            this.$button.toggleClass(this.onClass, e),
            this.dialog.toggle(e, t)
        },
        "showOnMouseOver": function() {
            for (var e = !1, t = 0; t < w.length; t++) {
                var n = w[t];
                if (n != this && n.showsOnMouseOver && n.isOn()) {
                    e = !0;
                    break
                }
            }
            e && this.toggle(!0, !0)
        },
        "isOn": function() {
            return this.$button.hasClass(this.onClass)
        },
        "markAsRead": function() {
            this.$button.find(".unread-count,.js-unread-count").fadeOut();
            var e = this.$button.data("unread-class");
            e && this.$button.removeClass(e),
            this.dequeuePendingUnreadCount()
        },
        "dequeuePendingUnreadCount": function() {
            this.queuedUnreadCount && (this.setUnreadCount(this.queuedUnreadCount),
            this.queuedUnreadCount = 0,
            this.dialog.clearLoadedDialog())
        },
        "setUnreadCount": function(e, t) {
            var n = t !== !1;
            if (void 0 === e)
                ;
            else if (0 >= e)
                this.queuedUnreadCount = 0,
                this.isOn() || this.markAsRead();
            else if (e > 0)
                if (this.isOn())
                    this.queuedUnreadCount = e;
                else {
                    var i = this.$button.find(".unread-count,.js-unread-count");
                    i.text(this.unreadCountPrefix + e).fadeIn(),
                    n && this.addUnreadClass(),
                    this.dialog.clearLoadedDialog()
                }
        },
        "addUnreadClass": function() {
            var e = this.$button.data("unread-class");
            e && this.$button.addClass(e)
        },
        "handleRealtimeMessage": function() {}
    })
      , c = r.extend({
        "url": "/topbar/site-switcher/site-list",
        "cssClass": "siteSwitcher-dialog",
        "$searchItems": null,
        "$pinnedSiteSearchItems": null,
        "isPreloaded": !0,
        "$preloadedDialog": r.$corral.find(".siteSwitcher-dialog")
    }).methods({
        "afterLoad": function() {
            this.$dialog.find("#js-site-filter-txt").typeWatch({
                "highlight": !1,
                "wait": 250,
                "captureLength": -1,
                "callback": $.proxy(this.filterSites, this)
            }),
            this.$searchItems = this.$dialog.find(".js-other-sites li").clone().map(function() {
                return {
                    "title": $(".site-icon", this).attr("title").toLowerCase(),
                    "description": $(".site-desc", this).text().toLowerCase(),
                    "hostname": $("a", this).first().attr("href"),
                    "li": this
                }
            });
            var e = this.$dialog;
            this.$dialog.find("#js-site-filter-txt").focus(function() {
                var t = e.offset().top + e.height()
                  , n = e.find(".other-sites li:nth-child(2)")
                  , i = n.offset().top + n.height();
                i > t && e.animate({
                    "scrollTop": e.scrollTop() + i - t
                }, 750)
            }),
            StackExchange.options.user.isAnonymous && !StackExchange.options.user.isAnonymousOnThisSite || !$(".pinned-site-editor-container").length || ($(".js-found-sites").css({
                "width": $("#js-site-search-txt").outerWidth()
            }),
            $(".js-found-sites").hide(),
            this.$dialog.find("#js-site-search-txt").typeWatch({
                "highlight": !1,
                "wait": 100,
                "captureLength": -1,
                "callback": $.proxy(this.findSitesToPin, this)
            }),
            this.$dialog.find("#edit-pinned-sites").click($.proxy(this.editPinnedSites, this)),
            this.$dialog.find("#cancel-pinned-sites").click({
                "forceListRefresh": $("#save-pinned-sites-btn").is(":enabled")
            }, this.cancelSiteListEdits),
            this.$dialog.find("#pin-site-btn").click($.proxy(this.pinSite, this)),
            this.$dialog.on("click", ".remove-pinned-site-link", function() {
                return $(this).parent().remove(),
                $("#save-pinned-sites-btn").enable(),
                $("#reset-pinned-sites").show(),
                !1
            }),
            this.$dialog.find("#save-pinned-sites-btn").click($.proxy(this.savePinnedSites, this)),
            this.$dialog.find("#reset-pinned-sites").click($.proxy(this.resetPinnedSites, this))),
            this.supr()
        },
        "showOrHide": function(e) {
            this.supr(e)
        },
        "pinSite": function() {
            $("#pin-site-btn").disable();
            var e = $("#js-site-search-txt").val()
              , t = $.grep(this.$pinnedSiteSearchItems, function(t) {
                return t.sitename === e
            });
            if (!t.length)
                return $("#pin-site-btn").enable(),
                void 0;
            var n = t[0]
              , i = $(".pinned-site-link").map(function(e, t) {
                return $(t).data("id")
            }).toArray();
            if (i.indexOf(n.siteid) > -1)
                return $("#pin-site-btn").enable(),
                void 0;
            var a = this;
            $.ajax({
                "type": "GET",
                "url": "/topbar/site-switcher/pin-site",
                "data": {
                    "siteId": n.siteid
                },
                "dataType": "html"
            }).done(function(e) {
                var t = $(e);
                t.hide(),
                $(".pinned-site-list").append(t),
                t.fadeIn("slow"),
                $("#js-site-search-txt").val(""),
                $("#save-pinned-sites-btn").enable(),
                a.toggleSiteListResetLink(!0)
            }).fail(function() {
                $("#pin-site-btn").parent().showErrorMessage("Something bad happened; please try again"),
                $("#pin-site-btn").enable()
            })
        },
        "savePinnedSites": function() {
            var e = $(".pinned-site-list li .pinned-site-link").map(function(e, t) {
                return $(t).data("id")
            }).toArray()
              , t = !$("#reset-pinned-sites").is(":visible") || !e.length;
            return this.toggleSiteListResetLink(!t),
            $.ajax({
                "type": "POST",
                "url": "/topbar/site-switcher/save-pinned-sites",
                "data": {
                    "siteIds": t ? [] : e,
                    "fkey": StackExchange.options.user.fkey
                },
                "dataType": "html",
                "traditional": !0
            }).done($.proxy(function(e) {
                $(".my-sites").html(e),
                this.cancelSiteListEdits(!1),
                $(".pinned-site-list").data("custom-list", !t),
                StackExchange.using("gps", function() {
                    StackExchange.gps.track("site_switcher.edit", {})
                })
            }, this)).fail(function() {
                $("#save-pinned-sites-btn").parent().showErrorMessage("Something bad happened; please try again")
            }),
            !1
        },
        "resetPinnedSites": function() {
            var e = this;
            return $.ajax({
                "type": "GET",
                "url": "/topbar/site-switcher/default-active-sites",
                "dataType": "html"
            }).done(function(t) {
                $(".pinned-site-list").html(t),
                $("#save-pinned-sites-btn").enable(),
                e.toggleSiteListResetLink(!1)
            }).error(function() {
                $("#reset-pinned-sites").parent().showErrorMessage("Something bad happened; please try again")
            }),
            !1
        },
        "doSearch": function(e, t, n) {
            var i;
            t = t.toLowerCase();
            var a = [];
            return $.each(e, function(e, n) {
                var i = {
                    "index": e,
                    "li": n.li,
                    "item": n
                }
                  , o = n.title.indexOf(t);
                n.title == t ? i.priority = 1 : 0 == o ? i.priority = 2 : o > -1 ? i.priority = 3 : n.description.indexOf(t) > -1 ? i.priority = 4 : n.hostname.indexOf(t) > -1 && (i.priority = 5),
                i.priority && a.push(i)
            }),
            i = a.sort(function(e, t) {
                return e.priority - t.priority || e.index - t.index
            }),
            n && StackExchange.using("gps", function() {
                StackExchange.gps.track("sitesearch.submit", {
                    "term": t,
                    "numresults": a.length
                }, !1)
            }),
            i
        },
        "_findSitesToPin": function(e) {
            var t = $(".js-found-sites")
              , n = this.$pinnedSiteSearchItems;
            if (t.empty(),
            "" === e)
                return t.hide(),
                $("#pin-site-btn").disable(),
                void 0;
            if (n = this.doSearch(n, e, !1),
            n.length) {
                t.show(),
                $("#pin-site-btn").enable();
                var i = $(".pinned-site-link").map(function(e, t) {
                    return $(t).data("id")
                }).toArray();
                $.each(n, function(e, n) {
                    var a = $('<li class="pinned-site-candidate">' + n.item.sitename + "</li>");
                    i.indexOf(n.item.siteid) > -1 ? a.addClass("already-pinned-site") : a.click(function() {
                        var e = $(this).text();
                        return $("#js-site-search-txt").val(e),
                        $(".js-found-sites").hide(),
                        !1
                    }),
                    a.appendTo(t)
                })
            }
        },
        "findSitesToPin": function(e) {
            if (this.$pinnedSiteSearchItems)
                return this._findSitesToPin(e),
                void 0;
            var t = this;
            $.ajax({
                "type": "GET",
                "url": "/topbar/site-switcher/all-pinnable-sites",
                "dataType": "json"
            }).done(function(n) {
                t.$pinnedSiteSearchItems = n,
                t._findSitesToPin(e)
            })
        },
        "filterSites": function(e) {
            var t = $(".js-other-sites")
              , n = this.$searchItems;
            t.empty(),
            "" != e && (n = this.doSearch(n, e, !0)),
            t.append(n.map(function(e) {
                return this && this.li || e.li
            }))
        },
        "editPinnedSites": function() {
            $(".header").not("#your-communities-header").css("opacity", .2),
            $(".modal-content").not("#your-communities-section").css("opacity", .2),
            $(".my-sites").hide(),
            $(".pinned-site-editor-container").show(),
            $("#edit-pinned-sites").hide(),
            $("#cancel-pinned-sites").show();
            var e = $(".pinned-site-list");
            if ("" === e.html().trim()) {
                var t = $("<div/>").append(StackExchange.helpers.getSpinnerImg()).html();
                e.append('<li style="text-align:center;">' + t + "</li>"),
                $.ajax({
                    "type": "GET",
                    "url": "/topbar/site-switcher/current-pinned-sites",
                    "dataType": "html"
                }).done(function(t) {
                    e.html(t)
                }).fail(function() {
                    e.showErrorMessage("Something bad happened; please try again")
                }).always(function() {
                    e.find(".ajax-loader").remove()
                })
            }
            this.toggleSiteListResetLink("true" === e.data("custom-list").toString().toLowerCase());
            var n = $(".sortable")
              , i = this;
            return n.data("isSortable") || StackExchange.loadJqueryUi().done(function() {
                n.sortable({
                    "axis": "y",
                    "update": function() {
                        $("#save-pinned-sites-btn").enable(),
                        i.toggleSiteListResetLink(!0)
                    }
                }).disableSelection().data("isSortable", !0)
            }),
            !1
        },
        "toggleSiteListResetLink": function(e) {
            $("#reset-pinned-sites").toggle(e)
        },
        "cancelSiteListEdits": function(e) {
            return $(".header").not("#your-communities-header").css("opacity", 1),
            $(".modal-content").not("#your-communities-section").css("opacity", 1),
            $(".my-sites").show(),
            $("#edit-pinned-sites").show(),
            $(".pinned-site-editor-container").hide(),
            $("#cancel-pinned-sites").hide(),
            $("#save-pinned-sites-btn").disable(),
            e && ($(".pinned-site-list").empty(),
            $(".js-found-sites").hide(),
            $("#js-site-search-txt").val(""),
            $("#pin-site-btn").disable()),
            !1
        }
    })
      , l = s.extend({
        "name": "SiteSwitcher",
        "selector": ".js-site-switcher-button",
        "dialog": new c,
        "showsOnMouseOver": !StackExchange.options.user.canSeeNewHeaderDesign,
        "onClass": "icon-site-switcher-on"
    })
      , d = r.extend({
        "url": "/topbar/inbox",
        "cssClass": "inbox-dialog"
    })
      , u = s.extend({
        "name": "Inbox",
        "selector": ".js-inbox-button",
        "dialog": new d,
        "showsOnMouseOver": !StackExchange.options.user.canSeeNewHeaderDesign
    }).methods({
        "handleRealtimeMessage": function(e) {
            this.setUnreadCount(e.UnreadInboxCount)
        }
    })
      , f = r.extend({
        "url": "/topbar/achievements",
        "cssClass": "achievements-dialog"
    }).methods({
        "afterLoad": function() {
            this.alignRep(),
            this.bindDateGroupToggles(),
            this.displayUtcTime(),
            this.bindGpsTracker(),
            this.supr()
        },
        "alignRep": function() {
            var e = this.$dialog.find(".js-items .js-faux-column")
              , t = 0;
            e.filter(".js-rep-change").each(function() {
                var e = $.trim($(this).text()).length;
                e > t && (t = e)
            }),
            t > 0 && e.width(6 * (t + 1))
        },
        "bindDateGroupToggles": function() {
            this.$dialog.find(".js-date-group-toggle").click(function() {
                var e = $(this)
                  , t = e.closest(".js-date-group")
                  , n = t.find(".js-items")
                  , i = t.find(".rep-site-container");
                e.find(".date-group-toggle").toggleClass("toggle-hidden"),
                n.add(i).fadeToggle("fast")
            }),
            this.$dialog.find(".rep-site-container").on("click", function(e) {
                e.stopImmediatePropagation()
            })
        },
        "displayUtcTime": function() {
            var e = this.$dialog
              , t = function() {
                var t = new Date;
                t.setTime(t.getTime() + 1e3 * StackExchange.options.serverTimeOffsetSec);
                var n = t.getUTCHours()
                  , i = t.getUTCMinutes();
                10 > n && (n = "0" + n),
                10 > i && (i = "0" + i),
                e.find(".js-utc-time").text(n + ":" + i)
            };
            t(),
            setInterval(t, 6e4)
        },
        "bindGpsTracker": function() {
            var e = $("#js-gps-container.js-empty-achiev");
            e.find("a:first").addClass("js-gps-track").data("gps-track", "achievements_popup.click({ item_type:6 })"),
            e.find("a:last").addClass("js-gps-track").data("gps-track", "achievements_popup.click({ item_type:7 })"),
            StackExchange.gps.bindTrackClicks(e)
        }
    })
      , p = s.extend({
        "name": "Achievements",
        "selector": ".js-achievements-button",
        "dialog": new f,
        "unreadCountPrefix": "+",
        "showsOnMouseOver": !StackExchange.options.user.canSeeNewHeaderDesign
    }).methods({
        "handleRealtimeMessage": function(e) {
            var t = e.UnreadNonRepCount > 0
              , n = 0 === (e.UnreadRepCount || 0)
              , i = n && t;
            i ? this.addUnreadClass() : this.setUnreadCount(e.UnreadRepCount, t)
        }
    })
      , h = r.extend({
        "cssClass": "help-dialog"
    }).methods({
        "loadDialog": function() {
            this.$dialog = $(".js-help-dialog").appendTo(r.$corral),
            this.positionDialogUnderButton(),
            this.showOrHide(!0)
        }
    })
      , g = s.extend({
        "name": "Help",
        "selector": ".js-help-button",
        "dialog": new h
    })
      , m = r.extend({
        "url": "/topbar/review",
        "cssClass": "review-dialog"
    })
      , v = s.extend({
        "name": "Review",
        "selector": ".js-review-button",
        "dialog": new m
    })
      , x = r.extend({
        "url": "/topbar/mod-inbox",
        "cssClass": "modInbox-dialog"
    }).methods({})
      , k = s.extend({
        "name": "ModInbox",
        "selector": ".js-mod-inbox-button",
        "dialog": new x
    })
      , w = []
      , b = [];
    return {
        "init": function() {
            if (window.devicePixelRatio >= 1.5 && $(".js-avatar-me").attr("src", function(e, t) {
                return t.replace("?s=24", "?s=48")
            }),
            w.push(new l),
            w.push(new u),
            w.push(new p),
            w.push(new g),
            w.push(new v),
            StackExchange.options.user.isModerator && w.push(new k),
            $(document).click(function(e) {
                t(e.target) || $.contains(r.$corral[0], e.target) || n()
            }),
            StackExchange.options.user.canSeeNewHeaderDesign) {
                var e = document.body.style;
                "justifyContent"in e || "WebkitJustifyContent"in e || $(".so-header *:visible").css({
                    "display": "inline-block",
                    "white-space": "nowrap",
                    "vertical-align": "middle"
                }).not(".-logo, .-logo *, svg, .-badges *").css("width", "auto"),
                a(),
                o(70)
            }
        },
        "hideAll": n,
        "handleRealtimeMessage": i
    }
}(),
StackExchange.notify = function() {
    function e(e, t) {
        var n = $("#dismissed-messages");
        n.val(n.val() + "~" + e + (t ? " " + t : "") + "~")
    }
    function t(e, t) {
        var n = $("#dismissed-messages").val();
        return n ? new RegExp("~" + e + (t ? " " + t : "") + "~").test(n) : !1
    }
    function n(e, t, n) {
        var i = parseInt($("body").css("margin-top").match(/\d+/))
          , a = t * i / e;
        n ? $("body:not(.no-message-slide), body:not(.no-message-slide) .js-so-header").animate({
            "marginTop": a + "px"
        }, "fast", "linear") : $("body:not(.no-message-slide), body:not(.no-message-slide) .js-so-header").css("marginTop", a + "px")
    }
    var i = 0
      , a = -1
      , o = "m"
      , r = function(t, o) {
        var r = $("#notify-" + t + (o ? "-" + o : ""));
        r.length && (t == a ? c() : t > a && $.post("/messages/mark-as-read", {
            "messagetypeid": t,
            "id": o ? o : null
        }),
        e(t, o),
        i--,
        r.fadeOut("fast", function() {
            n(i + 1, i, !0),
            r.remove(),
            0 === $("#notify-container div").length && $("#notify-container").hide()
        }))
    }
      , s = function(e) {
        if (i++,
        t(e.messageTypeId, e.id))
            return !1;
        var n = "";
        e.messageTypeId && (n = ' id="notify-' + e.messageTypeId + (e.id ? "-" + e.id : "") + '"');
        var a = "<div" + n + ' style="display:none"><span class="notify-close">' + $("<a>&times;</a>").attr("title", "dismiss this notification").outerHTML() + '</span><span class="notify-text">' + e.text + "</span>";
        if (e.showProfile) {
            var o = encodeURIComponent("/users/" + e.userId + "?tab=badges&sort=recent");
            a += " " + function(e) {
                return 'See your <a href="' + e.url + '">profile</a>.'
            }({
                "url": "/messages/mark-as-read?messagetypeid=" + e.messageTypeId + "&returnurl=" + o
            })
        }
        a += "</div>";
        var s = $(a);
        return e.cssClass && s.addClass(e.cssClass),
        s.find(".notify-close").click(function() {
            e.close && e.close(),
            r(e.messageTypeId, e.id)
        }),
        $("#notify-container").append(s),
        $("#notify-container").show(),
        !0
    }
      , c = function(e) {
        $.cookie(o, e ? e : "0", {
            "expires": 90,
            "path": "/"
        })
    }
      , l = function() {
        $("#notify-container div").fadeIn("slow")
    }
      , d = function() {
        $("body:not(.no-message-slide), body:not(.no-message-slide) .js-so-header").animate({
            "marginTop": "2.5em"
        }, "fast", "linear")
    }
      , u = function(e, t) {
        var n = $('<div class="link-more">').append($("<a>").text(function(e) {
            return 1 == e.numNotifications ? "view " + e.numNotifications + " more notification" : "view " + e.numNotifications + " more notifications"
        }({
            "numNotifications": e
        })));
        $("#notify-container").append(n),
        n.click(function() {
            n.detach();
            for (var e = 0; e < t.length; e++)
                s(t[e]);
            l()
        })
    };
    return {
        "showMessages": function(e, t) {
            for (var a = 0, o = i, r = t ? 2 : e.length, c = 0; r > c && c < e.length; c++)
                s(e[c]) && a++;
            if (n(o, a, !1),
            l(),
            t && a < e.length) {
                var d = e.slice(r);
                u(e.length - a, d)
            }
        },
        "show": function(e, t, n) {
            d(),
            s({
                "text": e,
                "messageTypeId": t,
                "cssClass": n
            }),
            l()
        },
        "close": r,
        "getMessageText": function(e) {
            return $("#notify-" + e + " .notify-text").text()
        }
    }
}();
var styleCode = function() {
    function e(e) {
        var t = $("#prettify-lang").text();
        return "" != t ? (e.addClass(t),
        !0) : !1
    }
    return function() {
        "undefined" != typeof MathJax && MathJax.Hub.Queue(["Typeset", MathJax.Hub]),
        StackExchange.ifUsing("snippets", function() {
            StackExchange.snippets.redraw && StackExchange.snippets.redraw()
        });
        var t = !1;
        if ($("pre code").parent().each(function() {
            $(this).hasClass("prettyprint-override") && ($(this).removeClass("prettyprint-override").addClass("prettyprint"),
            t = !0),
            $(this).hasClass("prettyprint") || e($(this)) && ($(this).addClass("prettyprint"),
            t = !0)
        }),
        t) {
            if ("undefined" != typeof jtab)
                return jtab.renderimplicit(),
                void 0;
            StackExchange.using("prettify", function() {
                StackExchange.prettify.applyCodeStyling()
            })
        }
        $(".spoiler").click(function() {
            $(this).toggleClass("spoiler")
        })
    }
}();
styleCode.updateLangdivDelayed = StackExchange.helpers.DelayedReaction(function(e) {
    var t = $("#prettify-lang");
    t.length && $.get("/api/tags/langdiv", {
        "tags": e.join(" ")
    }).done(function(e) {
        e ? t.replaceWith(e) : t.empty(),
        StackExchange.MarkdownEditor.refreshAllPreviews(),
        styleCode()
    })
}, 1500, {
    "sliding": !0
}),
StackExchange.helpers.MagicPopup = function(e) {
    function t(t, i) {
        if ($.contains(document.documentElement, t)) {
            var o = $("<div id='" + e.id + "'/>").html(i)
              , r = $("<div />").css({
                "overflow": "hidden",
                "position": "absolute",
                "z-index": 1002,
                "width": 1,
                "height": 1,
                "top": 0,
                "left": 0
            }).append(o).appendTo("body");
            window.MathJax && MathJax.Hub.Typeset(o.attr("id"));
            var s = e.showing(t, o)
              , c = {
                "left": s.left
            };
            s.hasOwnProperty("bottom") ? (c.bottom = s.bottom,
            c.top = "auto") : c.top = 0 | s.top;
            var l;
            e.shown && (l = function() {
                e.shown(t, o)
            }
            ),
            r.css(c).animate({
                "height": o.outerHeight() + 8,
                "width": o.outerWidth() + 8
            }, 300, l),
            n = function() {
                r.stop().remove(),
                e.removed && e.removed(t, o),
                a = null,
                n = null
            }
            ,
            a = StackExchange.helpers.DelayedReaction(n, 5);
            var d = r;
            s.additional && (d = d.add(s.additional)),
            d.hover(a.cancel, a.trigger)
        }
    }
    var n, i, a, o, r = {}, s = StackExchange.helpers.DelayedReaction(function(i, a) {
        if (!o && i) {
            var s;
            e.cache && "c_" + i in r ? s = $.Deferred().resolve(r["c_" + i]) : (s = $.ajax({
                "type": "GET",
                "url": i,
                "dataType": "html"
            }),
            e.cache && s.done(function(e) {
                r["c_" + i] = e
            })),
            s.done(function(e) {
                n && n(),
                "" != e && t(a, e)
            })
        }
    }, 500);
    $(document).delegate(e.selector, {
        "mouseenter": function() {
            return a && this === i ? (a.cancel(),
            void 0) : (i = this,
            s.trigger(e.getUrl(this), this),
            o = !1,
            !1)
        },
        "mouseleave": function() {
            o = !0,
            s.cancel(),
            a && a.trigger()
        }
    })
}
,
StackExchange.tagmenu = function() {
    function e(e) {
        var t = $(e)
          , n = t.attr("href")
          , i = t.data("tag-menu-tagname");
        if (!(i || n && "/" == n.charAt(0)))
            return null;
        var a = i || t.text();
        return a.indexOf("*") > -1 ? null : (t.attr("title", ""),
        "/tags/" + encodeURIComponent(a) + "/subscriber-info")
    }
    function t(e, t) {
        var n = $(e)
          , i = n.offset()
          , a = n.outerHeight()
          , o = {
            "left": i.left
        }
          , r = i.top + a
          , s = i.left + t.outerWidth();
        t.height() + r > $(window).height() + $(window).scrollTop() ? o.bottom = $(window).height() - i.top - 8 : o.top = r;
        var c = Math.max(1024, $(window).width());
        return s > c && (o.left -= s - c),
        o
    }
    var n, i, a = function(a) {
        n = a,
        i || (i = !0,
        StackExchange.options.isMobile || (StackExchange.helpers.MagicPopup({
            "selector": ".post-tag:not(.user-tag,.no-tag-menu,.invalid-tag,.job-link)",
            "id": "tag-menu",
            "getUrl": e,
            "showing": t,
            "shown": function(e, t) {
                n && n(t, $(e).text())
            }
        }),
        $("#interesting-tags .post-tag").addClass("user-tag")))
    };
    return {
        "init": a,
        "showing": t
    }
}(),
StackExchange.usermenu = function() {
    function e(e, t) {
        var n = $(e)
          , i = n.find("img:last")
          , s = i.offset()
          , c = i.height()
          , l = i.width()
          , d = Math.max(l, c)
          , u = 64 * c / d
          , f = 64 * l / d
          , p = t.find("img:first").css({
            "width": f,
            "height": u
        })
          , h = p.offset();
        p.css("visibility", "hidden"),
        a = i.clone().css({
            "position": "absolute",
            "zIndex": 1003,
            "left": s.left,
            "top": s.top,
            "width": l,
            "height": c
        }).appendTo("body");
        var g = function() {
            return p[0].complete ? (p.css("visibility", "visible"),
            a.fadeOutAndRemove(),
            void 0) : (setTimeout(g, 100),
            void 0)
        };
        a.animate({
            "width": f,
            "height": u,
            "top": s.top + h.top
        }, 200, g),
        t.trigger("userhovershowing", e),
        o = !0;
        var m = t.find(".um-header-info a:not(.um-user-link), .um-about-me a, .um-links a").length > 0;
        return StackExchange.gps.track("user_popup.show", {
            "is_own": r,
            "has_links": m
        }),
        setTimeout(function() {
            o && StackExchange.gps.track("user_popup.read", {
                "is_own": r,
                "has_links": m
            })
        }, 2e3),
        t.on("click", ".um-gravatar a, a.um-user-link", function() {
            StackExchange.gps.track("user_popup.click", {
                "clicked_link": 0,
                "is_own": r
            })
        }),
        t.on("click", ".um-header-info a:not(.um-user-link)", function() {
            StackExchange.gps.track("user_popup.click", {
                "clicked_link": 1,
                "is_own": r
            })
        }),
        t.on("click", ".um-about-me a", function() {
            StackExchange.gps.track("user_popup.click", {
                "clicked_link": 2,
                "is_own": r
            })
        }),
        t.on("click", ".um-links a", function() {
            StackExchange.gps.track("user_popup.click", {
                "clicked_link": 3,
                "is_own": r
            })
        }),
        {
            "top": s.top,
            "left": s.left - h.left,
            "additional": a
        }
    }
    function t(e, t) {
        t.trigger("userhovershown")
    }
    function n(e) {
        $(e).trigger("userhoverremoved"),
        a.remove(),
        o = !1
    }
    var i, a, o, r, s = function() {
        function a(e) {
            var t = $(e)
              , n = t.closest(".user-hover")
              , i = n.find(".user-details a").attr("href")
              , a = new RegExp("/users/([^/]+).*$")
              , o = a.exec(i);
            return o ? (r = StackExchange.options.user.isAnonymous ? !1 : (0 | o[1]) > 0 && (0 | o[1]) == (0 | StackExchange.options.user.userId),
            "/users/user-info/" + o[1]) : null
        }
        i || (i = !0,
        StackExchange.options.isMobile || StackExchange.helpers.MagicPopup({
            "selector": ".user-hover .user-gravatar48, .user-hover .user-gravatar32",
            "getUrl": a,
            "cache": !0,
            "id": "user-menu",
            "showing": e,
            "shown": t,
            "removed": n
        }))
    };
    return {
        "init": s
    }
}(),
StackExchange.chatAd = function() {
    function e() {
        var e = $(".question .post-taglist .post-tag");
        return e.length ? e.map(function(e, t) {
            return $(t).text()
        }).get().join(" ") : null
    }
    function t(e) {
        return 10 > e ? "0" + e : e
    }
    function n(e) {
        var n = new Date;
        return n.setTime(1e3 * e),
        [n.getUTCFullYear(), "-", t(n.getUTCMonth() + 1), "-", t(n.getUTCDate()), " ", t(n.getUTCHours()), ":", t(n.getUTCMinutes()), ":", t(n.getUTCSeconds()), "Z"].join("")
    }
    function i(e) {
        var n = Math.floor((new Date).getTime() / 1e3)
          , i = n - e
          , a = i % 60
          , o = Math.floor(i / 60)
          , r = Math.floor(i / 3600);
        if (1 > i)
            return "just now";
        if (60 > i)
            return function(e) {
                return 1 == e.seconds ? e.seconds + " sec ago" : e.seconds + " secs ago"
            }({
                "seconds": a
            });
        if (3600 > i)
            return function(e) {
                return 1 == e.minutes ? e.minutes + " min ago" : e.minutes + " mins ago"
            }({
                "minutes": o
            });
        if (86400 > i)
            return function(e) {
                return 1 == e.hours ? e.hours + " hour ago" : e.hours + " hours ago"
            }({
                "hours": r
            });
        var s = Math.floor(i / 86400);
        if (1 == s)
            return "yesterday";
        if (2 >= s)
            return function(e) {
                return 1 == e.__count ? e.__count + " day ago" : e.__count + " days ago"
            }({
                "__count": s
            });
        var c = new Date(1e3 * e);
        return function(e) {
            return e.month + " " + e.date + " at " + e.hours + ":" + e.minutes
        }({
            "month": v[c.getMonth()],
            "date": c.getDate(),
            "hours": c.getHours(),
            "minutes": t(c.getMinutes())
        })
    }
    function a(e) {
        var t = $("<div />");
        return t.text(e),
        t.html().replace('"', "&quot;")
    }
    function o() {
        p && $.get(p, null, function(e, t, n) {
            u(e, t, n)
        })
    }
    function r(e) {
        if ("!" == e.charAt(0)) {
            var t = e.substr(1);
            if (/^https?:\/\/i.stack.imgur.com\//.test(t)) {
                var n = /\?/.test(t) ? "&" : "?";
                t += n + "g&s=32"
            }
            return t
        }
        return "https://www.gravatar.com/avatar/" + e + "?s=23&d=identicon&r=PG"
    }
    function s(e) {
        for (var t = $('<div class="ad502-users" />'), n = 0; n < e.length && 7 > n; n++) {
            var a = e[n]
              , o = a.name;
            a.lastPost && (o += ": " + i(a.lastPost));
            var s = f + "/users/" + a.id
              , c = $('<a href="' + s + '" />');
            $("<img height='23' width='23' />").attr("title", o).attr("src", r(a.emailhash)).appendTo(c),
            t.append(c)
        }
        return t
    }
    function c(e) {
        return $('<div class="ad502-users"><img src="' + f + "/rooms/users/" + e + '.jpeg" /></div>')
    }
    function l(e) {
        var t = e.user
          , n = e.userid;
        return n ? '<a href="' + f + "/users/" + n + '">' + a(t) + "</a>" : a(t)
    }
    function d() {
        p && (m >= h && window.setTimeout(o, 1e3 * h),
        h += g)
    }
    function u(e) {
        var t = $("#ad502-rooms");
        if (e.error)
            return d(),
            void 0;
        t.html("");
        for (var o = e.rooms, r = 0; r < o.length && 2 > r; r++) {
            var u = o[r]
              , p = f + "/rooms/" + u.id
              , h = $('<div class="ad502-room"></div>');
            h.append($('<h3 class="ad502-room-h3"><span class="ad502-room-title" title="' + a(u.name) + '"><a href="' + p + '">' + a(u.name) + "</a></span></h3>")),
            u.messages && u.messages.length > 0 && h.append($('<span title="' + n(u.lastPost) + '" class="ad502-last-message">' + i(u.lastPost) + " - " + l(u.messages[0]) + "</span><br>")),
            u.singleImage ? h.append(c(u.id)) : h.append(s(u.users)),
            t.append(h)
        }
        e.activeUsers > 1 ? $("#h-chat-link").text(function(e) {
            return 1 == e.num,
            e.num + " People Chatting"
        }({
            "num": e.activeUsers
        })) : $("#h-chat-link").text("Visit Chat"),
        $("#h-chat-link").attr("title", function(e) {
            return 1 == e.users && 1 == e.rooms ? e.users + " user active in " + e.rooms + " room the last 60 minutes" : 1 == e.users ? e.users + " user active in " + e.rooms + " rooms the last 60 minutes" : 1 == e.rooms ? e.users + " users active in " + e.rooms + " room the last 60 minutes" : e.users + " users active in " + e.rooms + " rooms the last 60 minutes"
        }({
            "users": e.activeUsers,
            "rooms": e.activeRooms
        })),
        d()
    }
    var f, p, h = 180, g = 30, m = 480, v = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return /^\/questions\/\d+/i.test(window.location.pathname) && (m = 0),
    {
        "init": function(t) {
            if (f = t.chatUrl,
            p = t.reloadUrl,
            t.tagBased) {
                var n = e();
                if (!n)
                    return;
                p && (p += (/\?/.test(p) ? "&" : "?") + "tags=" + encodeURIComponent(n))
            }
            null === t.preloadData ? o() : u(t.preloadData, null, null)
        }
    }
}(),
StackExchange.helpers.noDiacritics = function() {
    var e = {
        "àåáâäãåąɐᵄᶛ": "a",
        "æǣǽᴂᵆ": "ae",
        "çćčĉ": "c",
        "đƍðÐ": "d",
        "èéêëęǝᴈᵌ": "e",
        "ⅎ": "f",
        "ğĝᵷ": "g",
        "ĥɥʮᶣ": "h",
        "ìíîïıᴉᵎ": "i",
        "ĵ": "j",
        "ʞ": "k",
        "ł": "l",
        "ɯɰᵚᶭᴟ": "m",
        "ñń": "n",
        "òóôõöøő": "o",
        "œɶᴔ": "oe",
        "řɹɺɻʴʵ": "r",
        "śşšŝ": "s",
        "ß": "ss",
        "ʇ": "t",
        "Þ": "th",
        "ùúûüŭů": "u",
        "ʌᶺ": "v",
        "ʍ": "w",
        "ýŸÿʎ": "y",
        "żźž": "z"
    };
    return function(t) {
        for (var n in e)
            e.hasOwnProperty(n) && (t = t.replace(new RegExp("[" + n + "]","g"), e[n]));
        return t
    }
}(),
StackExchange.question = function() {
    function e() {
        var e = "hashchange.highlightDestination";
        $(window).off(e).on(e, function() {
            var e = window.location.href;
            if (!(e.indexOf("#") < 0)) {
                var t = decodeURI(e).match(/#(\d+|comment(\d+)_(\d+))/i);
                t && (t[2] ? f(t[2], t[3]) : u(t[1]))
            }
        }).trigger(e)
    }
    var t, n, i, a = function(e, t) {
        return e ? function(e) {
            return "share link to this question on " + e.socialNetwork
        }({
            "socialNetwork": t
        }) : function(e) {
            return "share link to this answer on " + e.socialNetwork
        }({
            "socialNetwork": t
        })
    }, o = function(e, t, n, i, o, r) {
        return $("<a>", {
            "id": "share-" + i + "-" + e,
            "class": "share-" + i,
            "title": a(t, n),
            "text": o,
            "data-svc": r
        })
    }, r = function(e) {
        var t = null != e;
        e || (e = $("div.question div.post-menu a.short-link"));
        var n = e.closest(".post-menu, .help-menu");
        if (e.hasClass("share-link"))
            n.find(".close-share-tip").click();
        else {
            e.addClass("share-link");
            var i = e.attr("id").substring("link-post-".length)
              , a = e.closest(".col-section").length ? "section" : e.closest("div.question").length ? "question" : "answer"
              , r = e.closest("div.question").length
              , s = StackExchange.options.site.protocol || "http"
              , c = s + "://" + document.location.host + e.attr("href")
              , l = ("answer" == a ? "Answer:" : "") + $("#question-header a.question-hyperlink").text()
              , d = StackExchange.options.user && StackExchange.options.user.userId && StackExchange.options.user.userId > 0
              , u = '<div class="share-tip" style="display:none">' + (r ? d ? "share a link to this question (includes your user id)" : "share a link to this question" : d ? "share a link to this answer (includes your user id)" : "share a link to this answer") + '<input type="text" style="display:block; width:292px;" value="' + c + '">';
            StackExchange.options.site.enableSocialMediaInSharePopup && (u += $("<div>", {
                "id": "share-icons"
            }).append(o(i, r, "Google+", "gp", "share [g+]", 1)).append(o(i, r, "Facebook", "fb", "share [fb]", 2)).append(o(i, r, "Twitter", "tw", "share [tw]", 3)).prop("outerHTML")),
            StackExchange.gps.track("share.show", {
                "location": r ? 1 : 2
            }),
            u += '<a class="close-share-tip" style="float:right">close</a></div>';
            var f = $(u);
            if (StackExchange.options.site.enableSocialMediaInSharePopup) {
                var p = "2";
                StackExchange.share.gplus($("#share-gp-" + i, f), c, l, p),
                StackExchange.share.facebook($("#share-fb-" + i, f), c, l, p),
                StackExchange.share.twitter($("#share-tw-" + i, f), c, l, p),
                $("#share-icons a", f).click(function() {
                    f.fadeOutAndRemove(),
                    StackExchange.gps.track("share.click", {
                        "location": r ? 1 : 2,
                        "service": $(this).data("svc")
                    })
                })
            }
            f.appendTo(n).fadeIn(t ? "fast" : 0).bind("removing", function() {
                e.removeClass("share-link")
            }).find(".close-share-tip").click(function() {
                f.fadeOutAndRemove()
            }).end().find("input[type=text]").select()
        }
    }, s = function(e) {
        var t = $("#post-form h2:first")
          , n = t.wrap("<div />").parent()
          , i = n.wrap("<div />").parent()
          , a = $("<div />").prependTo(i)
          , o = i.height()
          , r = $("<div />")
          , s = $(e)
          , c = parseInt(t.css("margin-bottom"))
          , l = $("#content")
          , d = $("#wmd-input").outerWidth()
          , u = 1e3
          , f = l.offset().left > t.offset().left - 5 && "visible" != l.css("overflow-x");
        r.css({
            "height": 0,
            "overflowY": "hidden"
        }).appendTo(n).append(s),
        i.css({
            "height": o,
            "position": "relative"
        }),
        n.css({
            "position": "absolute",
            "bottom": -c,
            "width": d
        }),
        a.addClass("answer-help-background").css({
            "position": "absolute",
            "bottom": -c,
            "height": 0,
            "width": d
        }),
        f && (a.css("left", 0),
        n.animate({
            "paddingLeft": 5
        }, u)),
        r.animate({
            "height": s.height() + c + 10
        }, u),
        a.animate({
            "height": s.height() + c + 10 + o
        }, u),
        $("<div style='float:right;margin-top:20px;'><a href='#'>ok</a></div>").hide().prependTo(n).fadeIn(1e3).find("a").one("click", function(e) {
            var i = $(this).parent();
            setTimeout(function() {
                i.remove()
            }, 1),
            r.animate({
                "height": 0
            }, u, function() {
                r.add(a).remove(),
                t.unwrap().unwrap(),
                t.text("Your Answer")
            }),
            a.animate({
                "height": 0
            }, u),
            f && n.animate({
                "paddingLeft": 0
            }, u),
            e.preventDefault()
        })
    }, c = function() {
        $.get("/posts/answer-help").then(s)
    }, l = function() {
        $.get("/posts/answer-ban-warning").then(s).then(function() {
            var e = $("#post-form h2:first");
            e.text("WAIT!"),
            $("#qualityBanWarningShown").val("true")
        })
    }, d = function(e) {
        var t = e ? e.closest(".question") : $(".question")
          , n = t.data("questionid");
        if (!n)
            throw new Error("getQuestionId could not find an id");
        return n
    }, u = function(e) {
        p($(".answer[data-answerid=" + e + "]"))
    }, f = function(e, t) {
        var n = "#comment-" + e
          , i = $(n);
        if (i.length)
            p(i);
        else {
            var a = $("#comments-link-" + t);
            a.length && StackExchange.comments.loadAll(a).done(function() {
                p($(n))
            })
        }
    }, p = function(e) {
        var n = i;
        e.css({
            "backgroundColor": t
        }).animate({
            "backgroundColor": n
        }, 2e3, "linear", function() {
            $(this).css("background-color", "")
        }),
        e.is(".comment") && e[0].scrollIntoView(!0)
    }, h = function(e) {
        e = e || {},
        $(document).on("click", ".post-menu a.short-link", function(t) {
            return t.ctrlKey || t.metaKey ? void 0 : (r($(this), e.showCitation),
            !1)
        }).on("click", ".bottom-share-links a", function() {
            var e = $(this).attr("href")
              , t = null;
            e && e.length && (e.indexOf("%3fsgp%3d") >= 0 ? t = 1 : e.indexOf("%3fsfb%3d") >= 0 ? t = 2 : e.indexOf("%3fstw%3d") >= 0 ? t = 3 : e.indexOf("%3fsem%3d") >= 0 && (t = 4)),
            t && StackExchange.gps.track("share.click", {
                "location": 3,
                "service": t
            }, !0)
        });
        var t = $(".bottom-notice");
        t && t.length && !t.data("bn") && t.data("loc") && (t.data("bn", "bn"),
        t.on("click", "a", function() {
            var e = 0
              , n = t.data("loc")
              , i = $(this).attr("href");
            $(this).hasClass("post-tag") ? e = 1 : /\/ask$/.test(i) ? e = 2 : /\/tags$/.test(i) ? e = 4 : /\/unanswered$/.test(i) ? e = 5 : (/\/questions$/.test(i) || /\/questions[?\/]/.test(i)) && (e = 3),
            StackExchange.gps.track("next_action.click", {
                "type": e,
                "location": n
            }, !0)
        }))
    }, g = function(e, t, n, i) {
        var a, o, r = document.title, s = 0;
        e.attr("autocomplete", "off"),
        i = i || function() {}
        ;
        var c = function(c) {
            var l = e.val();
            if (!("" == l || l == a && c !== !0 || StackExchange.settings.site.newTitleSearchBoxEnabled && $(".title-float-selected:visible").length > 0)) {
                for (var d = l.split(" "), u = 0, f = 0; f < d.length; f++)
                    $.trim(d[f]).length > 0 && u++;
                var p = (new Date).getTime()
                  , h = (p - s) / 1e3;
                (c === !0 || !(3 > u || 5 > h) || e.hasClass("edit-field-overlayed")) && (s = p,
                a = l,
                n && (document.title = l ? l + " - " + n : r),
                t.empty(),
                StackExchange.helpers.addSpinner(t),
                o && o.fadeOutAndRemove(),
                $.ajax({
                    "url": "/search/titles",
                    "dataType": "json",
                    "data": {
                        "title": l
                    },
                    "success": function(e) {
                        e && e.content && (t.html(e.content),
                        setTimeout(function() {
                            i(t.find(".answer-link a").attr("target", "_blank"))
                        }, 1))
                    },
                    "complete": function() {
                        StackExchange.helpers.removeSpinner(t)
                    }
                }))
            }
        }
          , l = !1;
        return t.mouseenter(function() {
            l = !0
        }).mouseleave(function() {
            l = !1
        }),
        e.keyup(c).blur(function() {
            var e = function() {
                s = 0,
                c()
            };
            l ? t.one("mouseleave", e) : e()
        }),
        function(e) {
            s = 0,
            c(e)
        }
    }, m = function() {
        try {
            localStorage.removeItem("nextPrevTrackState"),
            localStorage.removeItem("nextPrevTrackState2"),
            localStorage.removeItem("nextPrevState")
        } catch (e) {}
    };
    return {
        "initTitleSearch": g,
        "showShareTip": r,
        "getQuestionId": d,
        "initShareLinks": h,
        "canViewVoteCounts": function() {
            return n
        },
        "init": function(a) {
            n = a.canViewVoteCounts,
            StackExchange.question.fullInit ? StackExchange.question.fullInit(a) : StackExchange.question.bindAnonymousVoteDisclaimers(),
            StackExchange.comments.init({
                "autoShowCommentHelp": a.autoShowCommentHelp,
                "highlightColor": a.highlightColor,
                "commentHighlightColor": a.commentHighlightColor,
                "commentHighlightFocus": a.commentHighlightFocus,
                "backgroundColor": a.backgroundColor
            }),
            h(a),
            a.showAnswerBanWarning && $("#wmd-input").one("focus", l),
            a.showAnswerHelp && !a.showAnswerBanWarning && $("#wmd-input").one("focus", c),
            a.focusPostEditor && ($("#wmd-input").focus(),
            $("#post-form")[0].scrollIntoView(!0)),
            a.showCitation && $(document).on("click", "div .cite-link", function() {
                var e = $(this).closest(".post-menu");
                e.find(".close-share-tip").click(),
                citation.show($(this))
            }),
            i = a.backgroundColor,
            t = a.highlightColor,
            e(),
            m()
        }
    }
}(),
StackExchange.question.bindAnonymousVoteDisclaimers = function() {
    function e(e) {
        var t = $(this)
          , n = t.closest("div.vote")
          , i = t.prop("className")
          , a = /vote-up/.test(i)
          , o = /vote-down/.test(i)
          , r = /star/.test(i)
          , s = t.closest(".answer").length;
        if (e.preventDefault(),
        a || o) {
            if (StackExchange.options.inReadOnly)
                return n.showErrorMessage("Voting isn't available in read-only mode.", {
                    "transient": !0
                }),
                void 0;
            var c = n.find("input").val();
            if (StackExchange.options.isMobile) {
                StackExchange.helpers.fireAndForget("/posts/popup/anon-vote/" + c + "?voteTypeId=" + (a ? 2 : 3));
                var l = "Thank you for your feedback.<br />" + (s ? function(e) {
                    return "Please " + e.startAnchor + "log in or register" + e.endAnchor + " to vote for this answer."
                }({
                    "startAnchor": '<a href="/users/login?returnurl=' + escape(document.location) + '">',
                    "endAnchor": "</a>"
                }) : function(e) {
                    return "Please " + e.startAnchor + "log in or register" + e.endAnchor + " to vote for this question."
                }({
                    "startAnchor": '<a href="/users/login?returnurl=' + escape(document.location) + '">',
                    "endAnchor": "</a>"
                }));
                StackExchange.helpers.showMessage(t, l, {
                    "type": "info",
                    "position": {
                        "my": "left top",
                        "at": "right center"
                    },
                    "css": {
                        "margin-left": "-10px"
                    }
                })
            } else {
                var d = "anon-vote-popup-" + c;
                if (n.is(":working") || $("." + d).length)
                    return;
                n.data("working", !0),
                $(".anon-vote-popup").fadeOutAndRemove(),
                StackExchange.helpers.removeMessages();
                var u = $('<div class="anon-vote-popup vote-popup popup">' + function(e) {
                    return "Sending feedback" + e.nbsp
                }({
                    "nbsp": "&nbsp;"
                }) + "</div>").addClass(d).addSpinner();
                u.appendTo("body").center().fadeIn("fast"),
                StackExchange.using("gps", function() {
                    StackExchange.gps.track("vote_popup.show", {
                        "type": s ? 2 : 1
                    })
                }),
                $.ajax({
                    "type": "POST",
                    "url": "/posts/popup/anon-vote/" + c + "?voteTypeId=" + (a ? 2 : 3),
                    "dataType": "html",
                    "success": function(e) {
                        u.html(e)
                    },
                    "error": function() {
                        u.remove()
                    },
                    "complete": function() {
                        n.data("working", !1)
                    }
                })
            }
        } else if (r) {
            if (StackExchange.options.inReadOnly)
                return n.showErrorMessage("Favoriting isn't available in read-only mode.", {
                    "transient": !0
                }),
                void 0;
            $(".anon-vote-popup").fadeOutAndRemove();
            var l = s ? function(e) {
                return "Please " + e.startAnchor + "log in or register" + e.endAnchor + " to favorite this answer."
            }({
                "startAnchor": '<a href="/users/login?ssrc=fav_answer&returnurl=' + escape(document.location) + '">',
                "endAnchor": "</a>"
            }) : function(e) {
                return "Please " + e.startAnchor + "log in or register" + e.endAnchor + " to favorite this question."
            }({
                "startAnchor": '<a href="/users/login?ssrc=fav_question&returnurl=' + escape(document.location) + '">',
                "endAnchor": "</a>"
            });
            StackExchange.using("gps", function() {
                StackExchange.gps.track("favorite_popup.show", {})
            }),
            StackExchange.helpers.showMessage(t, l, {
                "type": "info",
                "position": {
                    "my": "left top",
                    "at": "right center"
                },
                "css": {
                    "margin-left": "-10px"
                }
            })
        }
    }
    $(".vote-up-off, .vote-down-off, .star-off:not(.disabled)").each(function() {
        var t = $(this);
        t.data("bound-anonymous") || (t.data("bound-anonymous", !0),
        t.click(e))
    }),
    StackExchange.question.bindFetchAcceptedAnswerDates()
}
,
StackExchange.question.bindFetchAcceptedAnswerDates = function() {
    $(".load-accepted-answer-date").hover(function() {
        var e = $(this);
        if (!e.is(":working")) {
            e.working(!0);
            var t = e.closest(".answer").data("answerid");
            if (!t)
                return e.attr("title", ""),
                void 0;
            var n = "/posts/" + t + "/accepted-answer-date";
            $.get(n, function(t) {
                e.attr("title", t)
            })
        }
    })
}
,
StackExchange.comments = function() {
    function e(e, t) {
        this.postId = e,
        this.jDiv = t,
        this.jtBody = t.find(" > table > tbody"),
        this.jCommentsLink = $("#comments-link-" + e)
    }
    function t(e) {
        var t = $("#comments-" + e);
        if (t.length) {
            var i = n(t)
              , a = i.jCommentsLink
              , o = i.jtBody
              , r = o.data("remaining-comments-count") || 0;
            r++,
            a.data("comments-count", r),
            a.attr("title", "expand to show all comments on this post, or add one of your own"),
            i.setCommentsMenu(r),
            a.removeClass("disabled-link"),
            o.data("remaining-comments-count", r),
            a.show().fadeTo("fast", .7).fadeTo("fast", 1)
        }
    }
    function n(t) {
        var n = t.constructor === $ ? t : $(t)
          , i = n.closest(".question, .answer, div[id^='post-']").find(".comments")
          , a = i.attr("id").replace(/^comments-/, "");
        if (p[a])
            return p[a];
        var o = new e(a,i);
        return p[a] = o,
        o
    }
    function i(e) {
        return 0 === window.location.pathname.indexOf("/review") ? 0 : e.closest(".question").length ? 1 : e.closest(".answer").length ? 2 : 0
    }
    function a(e) {
        var t = $(this)
          , a = t.closest(".question, .answer, div[id^='post-']")
          , r = a.find(".comments")
          , s = r.find(" > table > tbody")
          , c = 0 == s.data("remaining-comments-count")
          , l = t.hasClass("disabled-link")
          , d = t.parent()
          , u = d.data("rep");
        c && d.data("anon") && (StackExchange.options.isMobile ? StackExchange.helpers.showMessage(d, function(e) {
            return 1 == e.rep,
            "Commenting requires an account with " + e.rep + " reputation"
        }({
            "rep": u
        }), {
            "type": "info",
            "position": {
                "dimissible": !0,
                "my": "left top",
                "at": "right center"
            },
            "relativeToBody": !0
        }) : o(d.attr("id").replace("comments-link-", ""), i(t))),
        c && d.data("reg") && StackExchange.helpers.showMessage(t, function(e) {
            return 1 == e.rep,
            "You must have " + e.linkStart + e.rep + " reputation" + e.linkEnd + " to comment"
        }({
            "rep": u,
            "linkStart": "<a href='/help/privileges/comment'>",
            "linkEnd": "</a>"
        }), {
            "type": "info",
            "position": {
                "dimissible": !0,
                "my": "left top",
                "at": "right center"
            },
            "relativeToBody": !0
        }),
        t.hasClass("js-show-link") && StackExchange.using("gps", function() {
            StackExchange.gps.track("comment.show")
        });
        var f = !1;
        if (t.hasClass("js-add-link")) {
            f = !0;
            var p = "other";
            a.hasClass("question") ? p = "question" : a.hasClass("answer") && (p = "answer");
            var h = c ? "all_shown" : "hidden";
            StackExchange.using("gps", function() {
                StackExchange.gps.track("comment.add", {
                    "location": p,
                    "type": h
                })
            })
        }
        l || (e.preventDefault(),
        n(this).addShow(!1, f))
    }
    function o(e, t) {
        var n = "anon-vote-popup-" + e;
        if (!$("." + n).length) {
            $(".anon-vote-popup").fadeOutAndRemove(),
            StackExchange.helpers.removeMessages();
            var i = $('<div class="anon-vote-popup comment-popup popup">' + function(e) {
                return "Loading" + e.nbsp
            }({
                "nbsp": "&nbsp;"
            }) + "</div>").addClass(n).addSpinner();
            i.appendTo("body").center().fadeIn("fast"),
            StackExchange.using("gps", function() {
                StackExchange.gps.track("comment_popup.show", {
                    "type": t
                })
            }),
            $.ajax({
                "type": "POST",
                "url": "/posts/popup/anon-comment/" + e,
                "dataType": "html",
                "success": function(e) {
                    i.html(e)
                },
                "error": function() {
                    i.remove()
                }
            })
        }
    }
    function r(e) {
        var t = e && e.post || document;
        p = {},
        $(t).off("click", "a.js-add-link", a).on("click", "a.js-add-link", a),
        $(t).off("click", "a.js-show-link", a).on("click", "a.js-show-link", a),
        t == document && c(),
        s(null, !0),
        e && e.highlightColor && e.highlightColor.length && (l = e.highlightColor),
        e && e.commentHighlightColor && e.commentHighlightColor.length && (d = e.commentHighlightColor),
        e && e.backgroundColor && e.backgroundColor.length && (u = e.backgroundColor),
        e && e.commentHighlightFocus && (f = e.commentHighlightFocus)
    }
    function s(t, n) {
        n || (g = t),
        t = t || g || {};
        for (var i in t)
            t.hasOwnProperty(i) && (e.prototype[i] = t[i])
    }
    function c() {
        if (0 != $(".question[data-questionid]").length) {
            var e = StackExchange.question.getQuestionId();
            $(".comment .comment-date > span").each(function() {
                var t = $(this)
                  , n = t.closest(".answer")
                  , i = n && n.length ? n.data("answerid") : 0
                  , a = t.closest(".comment").attr("id").substr("comment-".length)
                  , o = i ? i : e
                  , r = "#comment" + a + "_" + o;
                location.href.indexOf("/questions/") > 0 ? t.wrap('<a class="comment-link" href="{hash}"></a>'.formatUnicorn({
                    "hash": r
                })) : t.wrap('<a class="comment-link" href="/q/{pid}/{hash}"></a>'.formatUnicorn({
                    "hash": r,
                    "pid": o
                }))
            })
        }
    }
    var l, d, u, f, p = {}, h = function() {};
    e.prototype = {
        "checkDiscussion": h,
        "ensureInput": h,
        "saveEditingComments": h,
        "restoreEditingComments": h,
        "isInputShown": function() {
            var e = this.jDiv.find('form[id^="add-comment-"]');
            return e.children().length && e.is(":visible")
        },
        "commentsShown": function() {
            this.jtBody.data("remaining-comments-count", 0)
        },
        "addShow": function(e, t) {
            var n = this
              , i = this.loadAllComments().done(function() {
                n.checkDiscussion()
            });
            if (t) {
                var a = this.ensureInput();
                a && !e && a.focus()
            }
            i.done(function() {
                a && a.length > 0 && n.jCommentsLink.hide()
            })
        },
        "ajax": function(e, t, n, i) {
            n && !i && StackExchange.helpers.addSpinner(n, {
                "margin-left": "10px"
            });
            var a = this;
            return $.ajax(e).fail(function(e) {
                var o = e.responseText;
                (!o || o.indexOf("<html") >= 0) && (o = t || "An error occured"),
                StackExchange.helpers.showErrorMessage(n || a.jDiv, o, {
                    "transient": 409 == e.status
                }),
                n && !i && StackExchange.helpers.removeSpinner()
            }).done(StackExchange.helpers.removeSpinner).promise()
        },
        "setCommentsMenu": function(e) {
            var t = ""
              , n = "";
            e > 0 && (n = function(e) {
                return 1 == e.count ? "show <b>" + e.count + "</b> more comment" : "show <b>" + e.count + "</b> more comments"
            }({
                "count": e
            })),
            this.isInputShown() || !this.jtBody.data("cansee") && !this.jtBody.data("canpost") || (t = "add a comment"),
            t.length || n || !this.jtBody.data("comments-unavailable") || (t = "comments disabled on deleted / locked posts / reviews"),
            StackExchange.options.inReadOnly && (t = "");
            var i = this.jCommentsLink.find(".js-add-link")
              , a = this.jCommentsLink.find(".js-show-link");
            i.html(t),
            a.html(n),
            t.length ? i.removeClass("dno") : i.addClass("dno"),
            n.length ? a.removeClass("dno") : a.addClass("dno"),
            t.length && n.length ? this.jCommentsLink.find(".js-link-separator").removeClass("dno") : this.jCommentsLink.find(".js-link-separator").addClass("dno"),
            this.jtBody.data("addlink-disabled") && i.addClass("disabled-link")
        },
        "clearHighlights": function() {
            this.jtBody.find("div.comments tr.comment").removeClass("new_comment").css("background-color", "")
        },
        "showComments": function(e, t, n, i) {
            this.saveEditingComments(t);
            var a = !n && (d || l && u)
              , o = {};
            if (this.clearHighlights(),
            a && this.jtBody.find("tr").each(function(e, t) {
                t.id && t.id.length && (o[t.id] = !0)
            }),
            this.jtBody.html(e),
            a) {
                var r = null;
                this.jtBody.find("tr").each(function(e, t) {
                    t.id && t.id.length && !o[t.id] && (r || (r = t),
                    $(t).addClass("new_comment"))
                });
                var s = this.jtBody.find("tr.new_comment");
                d ? s.css({
                    "backgroundColor": d
                }).removeClass("new_comment") : s.css({
                    "backgroundColor": l
                }).animate({
                    "backgroundColor": u
                }, 2e3, "linear", function() {
                    $(this).css("background-color", "").removeClass("new_comment")
                }),
                f && s.length && !i && s[0].scrollIntoView(!0)
            }
            this.restoreEditingComments(),
            this.setCommentsMenu(0),
            "undefined" != typeof MathJax && MathJax.Hub.Queue(["Typeset", MathJax.Hub]),
            c(),
            this.commentsShown()
        },
        "loadAllComments": function(e, t, n, i) {
            this.jDiv.removeClass("dno");
            var a = 0 == this.jtBody.data("remaining-comments-count");
            if (!e && a)
                return $.Deferred().resolve().promise();
            var o = this;
            return this.ajax({
                "type": "GET",
                "url": "/posts/" + this.postId + "/comments" + (t || ""),
                "dataType": "html"
            }, "An error occurred while fetching comments").done(function(e) {
                o.showComments(e, null, n, i)
            }).promise()
        }
    };
    var g;
    return {
        "init": r,
        "loadAll": function(e, t) {
            return n(e).loadAllComments(!0, t, !0, !0)
        },
        "realtimeMessage": t,
        "extendPostUi": s,
        "uiForPost": n
    }
}(),
StackExchange.share = function() {
    function e(e, t, n) {
        window.open(e, t, n) || (window.location.href = e)
    }
    function t(e, t, n) {
        n = "undefined" != typeof n ? n : "1",
        t += "=" + n;
        var i = e.indexOf("?")
          , a = e.indexOf("#");
        return -1 == i ? -1 == a ? e + "?" + t : e.substring(0, a) + "?" + t + e.substring(a) : -1 == a ? e + "&" + t : e.substring(0, a) + "&" + t + e.substring(a)
    }
    return {
        "gplus": function(n, i, a, o) {
            i = t(i, "sgp", o),
            n.click(function() {
                e("https://plus.google.com/share?url=" + encodeURIComponent(i), "sharegplus", "toolbar=1,status=1,resizable=1,scrollbars=1,width=600,height=500")
            })
        },
        "twitter": function(n, i, a, o) {
            i = t(i, "stw", o);
            var r = 117;
            a.length > r && (a = a.substring(0, r - 3) + "..."),
            n.click(function() {
                e("https://twitter.com/share?url=" + encodeURIComponent(i) + "&ref=twitbtn&text=" + encodeURIComponent(a), "sharetwitter", "toolbar=1,status=1,resizable=1,scrollbars=1,width=800,height=526")
            })
        },
        "facebook": function(n, i, a, o) {
            i = t(i, "sfb", o),
            n.click(function() {
                e("https://www.facebook.com/sharer.php?u=" + encodeURIComponent(i) + "&ref=fbshare&t=" + encodeURIComponent(a), "sharefacebook", "toolbar=1,status=1,resizable=1,scrollbars=1,width=626,height=436")
            })
        }
    }
}(),
$.fn.extend({
    "postId": function() {
        var e = this.first();
        return e.hasClass("answer") && e.hasClass("question") || (e = e.closest(".answer, .question")),
        parseInt(e.find(".vote input")[0].value)
    }
}),
StackExchange.newsletterAd = function() {
    function e(e) {
        var t = $('<div class="popup newsletter-popup lightbox-panel" style="display:block"></div>').append($("<div />", {
            "class": "popup-close"
        }).append("<a>&times;</a>", {
            "title": "close this popup (or hit Esc)"
        })).append(e);
        $("body").loadPopup({
            "lightbox": !0,
            "html": t,
            "target": $("body")
        })
    }
    function t() {
        var t = StackExchange.options.site.name
          , n = $(['<div style="text-align: left;">', '<h2 style="margin-bottom: 15px;">', function(e) {
            return "Subscribe to the " + e.site + " weekly newsletter"
        }({
            "site": t
        }), "</h2>", '<p><strong><a href="/users/login?ssrc=news&returnurl=/newsletter/signup/redirect">', function(e) {
            return "Create an account on " + e.site + e.endAnchor + " or " + e.loginAnchor + "log in" + e.endAnchor + " if you already have one."
        }({
            "site": t,
            "loginAnchor": '<a href="/users/login?ssrc=news&returnurl=/newsletter/signup/redirect">',
            "endAnchor": "</a>"
        }), "</strong></p>", '<form><label for="newsletter-email-input">', "Or, send newsletter emails to:", "</label> ", $("<input>", {
            "type": "email",
            "id": "newsletter-email-input",
            "maxlength": "100",
            "title": "your email address",
            "placeholder": "email address"
        }).outerHTML(), " ", $("<input>", {
            "type": "submit",
            "id": "newsletter-email-submit",
            "value": "Subscribe"
        }).outerHTML(), "</form>", $("#newsletter-ad .privacy-policy-agreement").parent().html(), "</div>"].join(""));
        n.find("form").submit(function() {
            var e = $(this)
              , t = e.find("#newsletter-email-input")
              , n = e.find("#newsletter-email-submit")
              , i = $.trim(t.val());
            return 0 == i.length ? !1 : (StackExchange.helpers.addSpinner(e),
            $.ajax({
                "url": "/newsletter/signup/anon",
                "type": "POST",
                "dataType": "json",
                "data": {
                    "fkey": StackExchange.options.user.fkey,
                    "email": i
                },
                "success": function(i) {
                    "confirmed" != i.status || i.error ? "unconfirmed" != i.status || i.error ? e.showErrorMessage(i.error || function(e) {
                        return "there was a problem signing up for the newsletter" + e.br + "please try again later"
                    }({
                        "br": "<br />"
                    })) : (t.attr("disabled", !0),
                    n.replaceWith('<span style="line-height: 120%; text-align: center;"><strong>Subscribed!</strong></span>'),
                    e.append("<br /><br/><p><em>Please click the link in the confirmation email to activate your subscription.</em></p>"),
                    $("#newsletter-signup-container").replaceWith('<span style="line-height: 120%;"><strong>Success!</strong> Please click the link in the confirmation email to activate your subscription.</span>')) : (t.attr("disabled", !0),
                    n.replaceWith('<span style="line-height: 120%; text-align: center;"><strong>Subscribed!</strong></span>'),
                    $("#newsletter-signup-container").replaceWith('<div style="line-height: 200%; text-align: center;"><strong>Subscribed!</strong></div>'))
                },
                "error": function() {
                    e.showErrorMessage(function(e) {
                        return "there was a problem signing up for the newsletter" + e.br + "please try again later"
                    }({
                        "br": "<br />"
                    }))
                },
                "complete": function() {
                    StackExchange.helpers.removeSpinner(e)
                }
            }),
            !1)
        }),
        e(n)
    }
    function n() {
        $("#newsletter-signup").click(function() {
            var e = $(this);
            return StackExchange.options.user.isAnonymous ? (t(),
            !1) : (StackExchange.helpers.addSpinner("#newsletter-signup-container"),
            $.ajax({
                "url": "/newsletter/signup",
                "type": "POST",
                "dataType": "json",
                "data": {
                    "fkey": StackExchange.options.user.fkey
                },
                "success": function(t) {
                    t.url ? window.location.href = t.url : "confirmed" == t.status ? $("#newsletter-signup-container").replaceWith('<div style="line-height: 200%; text-align: center;"><strong>Subscribed!</strong></div>') : "unconfirmed" == t.status ? $("#newsletter-signup-container").replaceWith('<span style="line-height: 120%;"><strong>Success!</strong> Please click the link in the confirmation email to activate your subscription.</span>') : e.parent().showErrorMessage(function(e) {
                        return "there was a problem signing up for the newsletter" + e.br + "please try again later"
                    }({
                        "br": "<br />"
                    }))
                },
                "error": function() {
                    e.parent().showErrorMessage(function(e) {
                        return "there was a problem signing up for the newsletter" + e.br + "please try again later"
                    }({
                        "br": "<br />"
                    }))
                },
                "complete": function() {
                    StackExchange.helpers.removeSpinner("#newsletter-signup-container")
                }
            }),
            void 0)
        }),
        $("#newsletter-preview").click(function() {
            var t = $(window).height()
              , n = Math.min(600, t - 100)
              , i = ['<div id="newsleter-preview-pane" style="overflow: hidden; width: 660px; height: ', n, 'px;">', '<iframe src="', $(this).attr("href"), '&suppressPromotion=true" width="660" height="', n, '" frameborder="0"></iframe>', "</div>"].join("");
            return e(i),
            !1
        })
    }
    return {
        "init": n,
        "loader": function(e, t) {
            var e = t || e
              , n = $(".newuser-greeting");
            $.ajax({
                "url": "/newsletter/targetted/ajax",
                "data": {
                    "domain": e
                },
                "success": function(e) {
                    $("#newsletter-ad").remove(),
                    n.empty().append($(e))
                },
                "complete": function() {
                    n.attr("class", "").attr("style", "")
                }
            }),
            t || (window.sessionStorage.tNewsletter = e + "-continued")
        }
    }
}(),
function(e, t, n, i) {
    var a = !("selectionStart"in e("<input type='text' />")[0]);
    e.fn.caret = function(e, o) {
        var r, s, c = this[0];
        if ("object" == typeof e && "number" == typeof e.start && "number" == typeof e.end)
            r = e.start,
            s = e.end;
        else if ("number" == typeof e && "number" == typeof o)
            r = e,
            s = o;
        else if ("string" == typeof e)
            (r = c.value.indexOf(e)) > -1 ? s = r + e[t] : r = null;
        else if ("[object RegExp]" === Object.prototype.toString.call(e)) {
            var l = e.exec(c.value);
            null != l && (r = l.index,
            s = r + l[0][t])
        }
        if ("undefined" != typeof r) {
            if (a) {
                var d = this[0].createTextRange();
                d.collapse(!0),
                d.moveStart("character", r),
                d.moveEnd("character", s - r),
                d.select()
            } else
                this[0].selectionStart = r,
                this[0].selectionEnd = s;
            return this[0].focus(),
            this
        }
        if (a) {
            var u = document.selection;
            if ("textarea" != this[0].tagName.toLowerCase()) {
                var f = this.val()
                  , p = u[n]()[i]();
                p.moveEnd("character", f[t]);
                var h = "" == p.text ? f[t] : f.lastIndexOf(p.text);
                p = u[n]()[i](),
                p.moveStart("character", -f[t]);
                var g = p.text[t]
            } else {
                var p = u[n]()
                  , m = p[i]();
                m.moveToElementText(this[0]),
                m.setEndPoint("EndToEnd", p);
                var h = m.text[t] - p.text[t]
                  , g = h + p.text[t]
            }
        } else
            var h = c.selectionStart
              , g = c.selectionEnd;
        var v = c.value.substring(h, g);
        return {
            "start": h,
            "end": g,
            "text": v,
            "replace": function(e) {
                return c.value.substring(0, h) + e + c.value.substring(g, c.value[t])
            }
        }
    }
}(jQuery, "length", "createRange", "duplicate"),
StackExchange.nocaptcha = function() {
    function e(e, n) {
        var i = ['<div class="popup captcha-popup lightbox-panel" style="display: block; text-align: left;">', '<div class="popup-close">', $("<a>", {
            "title": "close this popup (or hit Esc)",
            "text": "×"
        }).prop("outerHTML"), "</div>", e, "</div>"].join("");
        $("body").loadPopup({
            "target": $("body"),
            "html": i,
            "lightbox": !0,
            "loaded": function(e) {
                t(e, n)
            }
        })
    }
    function t(e, t) {
        var n = e.find("form:first");
        StackExchange.helpers.enableSubmitButton(n),
        n.submit(function() {
            return StackExchange.helpers.disableSubmitButton(n),
            n.find('input[type="submit"]').addSpinnerAfter(),
            $.ajax({
                "url": "/nocaptcha",
                "type": "POST",
                "dataType": "json",
                "data": n.serialize(),
                "success": function(i) {
                    i.captchaError ? (StackExchange.helpers.removeSpinner(),
                    StackExchange.helpers.enableSubmitButton(n),
                    n.find(".form-error").html(i.captchaError),
                    Recaptcha.reload()) : (e.find(".popup-close a").click(),
                    t(i))
                },
                "error": function() {
                    StackExchange.helpers.removeSpinner(),
                    StackExchange.helpers.enableSubmitButton(n),
                    StackExchange.helpers.showErrorMessage(n, "An error occurred submitting the CAPTCHA")
                }
            }),
            !1
        })
    }
    return {
        "init": e
    }
}(),
StackExchange.captcha = function() {
    function e(e, n) {
        var i = ['<div class="popup captcha-popup lightbox-panel" style="display: block; text-align: left;">', '<div class="popup-close">', $("<a>", {
            "title": "close this popup (or hit Esc)",
            "text": "×"
        }).prop("outerHTML"), "</div>", e, "</div>"].join("");
        $("body").loadPopup({
            "html": i,
            "target": $("body"),
            "lightbox": !0,
            "loaded": function(e) {
                t(e, n)
            }
        })
    }
    function t(e, t) {
        var n = e.find("form:first");
        $.getScript("https://www.google.com/recaptcha/api/js/recaptcha_ajax.js", function() {
            Recaptcha.create(StackExchange.options.site.recaptchaPublicKey, "recaptcha", {
                "theme": "clean",
                "lang": StackExchange.options.site.recaptchaAudioLang,
                "custom_translations": {
                    "visual_challenge": "Get a visual challenge",
                    "audio_challenge": "Get an audio challenge",
                    "refresh_btn": "Get a new challenge",
                    "instructions_visual": "Type the text:",
                    "instructions_audio": "Type what you hear:",
                    "help_btn": "Help",
                    "play_again": "Play sound again",
                    "cant_hear_this": "Download sound as MP3",
                    "incorrect_try_again": "Incorrect. Try again.",
                    "image_alt_text": "reCAPTCHA challenge image",
                    "privacy_and_terms": "Privacy & Terms"
                },
                "callback": Recaptcha.focus_response_field
            }),
            StackExchange.helpers.enableSubmitButton(n),
            n.submit(function() {
                return StackExchange.helpers.disableSubmitButton(n),
                n.find('input[type="submit"]').addSpinnerAfter(),
                $.ajax({
                    "url": "/captcha",
                    "type": "POST",
                    "dataType": "json",
                    "data": n.serialize(),
                    "success": function(i) {
                        i.captchaError ? (StackExchange.helpers.removeSpinner(),
                        StackExchange.helpers.enableSubmitButton(n),
                        n.find(".form-error").html(i.captchaError),
                        Recaptcha.reload()) : (e.find(".popup-close a").click(),
                        t(i))
                    },
                    "error": function() {
                        StackExchange.helpers.removeSpinner(),
                        StackExchange.helpers.enableSubmitButton(n),
                        StackExchange.helpers.showErrorMessage(n, "An error occurred submitting the CAPTCHA")
                    }
                }),
                !1
            })
        })
    }
    return {
        "init": e
    }
}(),
StackExchange.gps = function() {
    function e(e) {
        return m ? !0 : (m = !0,
        e && t() ? (StackExchange.gps.sendPending = r,
        StackExchange.gps.track = s,
        l(),
        r(),
        n(".tagged-questions-page, .questions-page, .tags-page", ".js-gps-related-tags .post-tag", "related_tags.click", ", item_type:1"),
        n(".question-page", ".js-gps-related-questions .spacer", "related_questions.click"),
        n(".question-page .post-taglist", ".post-tag", "question_tags.click", ", location:1"),
        n(".question-page #sidebar .tagged", ".post-tag", "question_tags.click", ", location:2"),
        i(),
        !0) : (StackExchange.gps.track = function(e, t, n, i) {
            i && i()
        }
        ,
        delete StackExchange._gps_track,
        !1))
    }
    function t() {
        if (!window.localStorage)
            return !1;
        try {
            if (window.localStorage["gps-probe"] = "1",
            "1" != window.localStorage["gps-probe"])
                return !1;
            window.localStorage.removeItem("gps-probe")
        } catch (e) {
            return !1
        }
        return !0
    }
    function n(e, t, n, i) {
        $(e).find(t).each(function(e) {
            $(this).addClass("js-gps-track").data("gps-track", n + "({ position:" + (e + 1) + i + " })")
        })
    }
    function i(e) {
        var t = $(e || document).find(".js-gps-track").off("click.gps").one("click.gps", function() {
            var e = $.trim($(this).data("gps-track"));
            if (e)
                for (var t = a(e), n = 0; n < t.length; n++) {
                    var i = t[n];
                    StackExchange.gps.track(i[0], i[1], !0)
                }
        });
        h("bindTrackClicks bound {0} elements in {1}", t.length, e || "document")
    }
    function a(e) {
        function t(e) {
            if ("true" === e)
                return !0;
            if ("false" === e)
                return !1;
            if ("'" === e[0] || '"' === e[0])
                return e.substring(1, e.length - 1);
            var t = parseFloat(e);
            return isNaN(t) ? e : t
        }
        for (var n = [], i = e.match(/([a-z._]+)(\([^)]+\))?/gi), a = 0; a < i.length; a++) {
            var o = i[a];
            if (o.indexOf("{") < 0)
                n.push([o, {}]);
            else {
                for (var r = o.match(/([a-z._]+)\s*\(\s*\{([^}]+)\}\s*\)/i), s = r[1], c = $.trim(r[2]), l = c.match(/[^,]+/gi), d = {}, u = 0; u < l.length; u++) {
                    var f = l[u]
                      , p = f.indexOf(":")
                      , h = $.trim(f.substr(0, p))
                      , g = $.trim(f.substr(p + 1))
                      , m = t(g);
                    d[h] = m
                }
                n.push([s, d])
            }
        }
        return n
    }
    function o(e, t, n) {
        $(e).on("click", t + " a[href]:not(.question-hyperlink, .answer-hyperlink)", function() {
            var e = $(this)
              , t = e.attr("href");
            StackExchange.helpers.isInNetwork(t) || ("undefined" == typeof ga ? h("outbound link clicked " + t) : (ga("send", "event", "outbound", "click", t, {
                "useBeacon": !0
            }),
            n && ga("pageData.send", "event", "outbound", "click", t, {
                "useBeacon": !0
            })))
        })
    }
    function r(e) {
        var t = d();
        if (t.length > 0) {
            for (var n = (new Date).getTime(), i = [], a = 0; a < t.length && i.length < 20; a++) {
                var o = t[a]
                  , r = n - o.now;
                0 > r || r > 36e5 ? f(o) : i.push(o)
            }
            i.length > 0 ? p(i, e) : e && e()
        }
    }
    function s(e, t, n, i) {
        var a = {
            "evt": e,
            "properties": t || {},
            "now": (new Date).getTime()
        };
        u(a),
        navigator && navigator.sendBeacon && (n = !1),
        n ? (i && i(),
        window.setTimeout(r, 1e4)) : r(i)
    }
    function c(e) {
        e && StackExchange.options && StackExchange.options.user && (e.properties && !e.properties.user_type && (e.properties.user_type = StackExchange.options.user.user_type),
        !e.ab && StackExchange.options.user.ab && (e.ab = StackExchange.options.user.ab))
    }
    function l() {
        StackExchange._gps_track && ($.each(StackExchange._gps_track, function(e, t) {
            u(t)
        }),
        delete StackExchange._gps_track)
    }
    function d() {
        var e = localStorage[g];
        return e ? JSON.parse(e) : []
    }
    function u(e) {
        c(e);
        var t, n = localStorage[g];
        if (n) {
            var i = JSON.parse(n);
            i.push(e),
            t = JSON.stringify(i)
        } else
            t = JSON.stringify([e]);
        h("addToPending " + JSON.stringify(e)),
        localStorage[g] = t
    }
    function f(e) {
        var t = localStorage[g];
        if (t) {
            for (var n = JSON.parse(t), i = JSON.stringify(e), a = -1, o = 0; o < n.length; o++) {
                var r = JSON.stringify(n[o]);
                if (i == r) {
                    a = o;
                    break
                }
            }
            if (-1 != a)
                return n.splice(a, 1),
                0 == n.length ? (localStorage.removeItem(g),
                void 0) : (localStorage[g] = JSON.stringify(n),
                void 0)
        }
    }
    function p(e, t) {
        $.isArray(e) || (e = [e]);
        for (var n = 0; n < e.length; n++) {
            var i = JSON.stringify(e[n]);
            v[i] && (e.splice(n, 1),
            n--)
        }
        for (var n = 0; n < e.length; n++) {
            var i = JSON.stringify(e[n]);
            v[i] = !0
        }
        var a = JSON.stringify(e);
        if (navigator && navigator.sendBeacon)
            try {
                if (h("sending (beacon): " + a),
                navigator && navigator.sendBeacon("/gps/event", a)) {
                    for (var n = 0; n < e.length; n++) {
                        f(e[n]);
                        var i = JSON.stringify(e[n]);
                        delete v[i]
                    }
                    return t && t(),
                    void 0
                }
            } catch (o) {
                h(o)
            }
        h("sending (AJAX): " + a),
        $.ajax({
            "type": "POST",
            "url": "/gps/event",
            "data": {
                "data": a
            },
            "success": function() {
                for (var t = 0; t < e.length; t++)
                    f(e[t])
            },
            "complete": function() {
                for (var n = 0; n < e.length; n++) {
                    var i = JSON.stringify(e[n]);
                    delete v[i]
                }
                t && t()
            }
        })
    }
    function h(e) {
        if ((StackExchange.options && StackExchange.options.enableLogging2 || $.cookie("devlog")) && "string" == typeof e) {
            if (arguments.length > 1) {
                var t = Array.prototype.slice.call(arguments, 1);
                e = String.prototype.formatUnicorn.apply(e, t)
            }
            console.log("gps: " + e)
        }
    }
    var g = "gps-pending"
      , m = !1
      , v = {}
      , x = StackExchange.gps.track
      , k = StackExchange.gps.sendPending;
    return {
        "init": e,
        "bindTrackClicks": i,
        "track": x,
        "sendPending": k,
        "trackOutboundClicks": o
    }
}(),
StackExchange.openid = function() {
    function e(e, t) {
        return e ? (t && $(e).data("ssrc", t),
        $(e).data("ssrc")) : u
    }
    function t(t, n) {
        var i = e(n);
        t && (StackExchange.gps.track("openid.click", {
            "openid_provider": t,
            "location": i
        }, !0),
        StackExchange.gps.track("signup.openid.click", {
            "openid_provider": t,
            "location": i
        }, !0)),
        StackExchange.gps.track("signup.start", {
            "openid_provider": t,
            "location": i
        }, !0)
    }
    function n(n, i, a) {
        var r = decodeURIComponent(i)
          , u = "unknown";
        a && a.length ? u = a : (0 === r.indexOf("/questions/") && (u = "question_page"),
        "/questions/ask" === r && (u = "question_ask"));
        var f = $(n);
        e(f, u);
        var p = f.find(".new-login-left")
          , h = f.find(".new-login-right")
          , g = p.find(".show-more-options");
        g.click(function() {
            return g.hide(),
            h.show(),
            !1
        });
        var m = h.find(".hide-more-options");
        m.click(function() {
            return g.show(),
            h.hide(),
            !1
        }),
        f.removeClass("dno"),
        o(f, h);
        var v = p.find(".google-login");
        v.click(function() {
            t("Google", f),
            c(f)
        });
        var x = p.find(".facebook-login");
        x.click(function() {
            t("Facebook", f),
            s(f)
        });
        var k = p.find(".stackexchange-login");
        k.click(l(function() {
            t("Stack Exchange", f),
            StackExchange.navPrevention.stop(),
            window.location = "/users/signup?ssrc=" + encodeURIComponent(u) + "&returnUrl=" + encodeURIComponent(r)
        })),
        f.find(".submit-openid").click(function() {
            d(f, r)
        })
    }
    function i(n, i, a, o, r) {
        var l = decodeURIComponent(i);
        e(n, a);
        var u = n.find(".google-login");
        u.click(function() {
            t("Google", n),
            c(n)
        });
        var f = n.find(".facebook-login");
        f.click(function() {
            t("Facebook", n),
            s(n)
        });
        var p = n.find(".stackexchange-login");
        p.click(function() {
            t("Stack Exchange", n),
            window.location = "/users/signup?ssrc=" + encodeURIComponent(a) + "&returnUrl=" + encodeURIComponent(l)
        }),
        n.find(".submit-openid").click(function() {
            d(n, l, o, r)
        })
    }
    function a(e, n) {
        var i = $(e)
          , a = i.find(".google-login");
        a.click(function() {
            t("Google", i),
            c(i)
        });
        var o = i.find(".facebook-login");
        o.click(function() {
            t("Facebook", i),
            s(i)
        });
        var r = i.find(".stackexchange-login");
        r.click(function() {
            t("Stack Exchange", i),
            window.location = "/users/signup?ssrc=about&returnUrl=" + encodeURIComponent(n)
        }),
        i.find(".submit-openid").click(function() {
            d(i, n)
        })
    }
    function o(e, t) {
        var n = t.find(".option-extra-fields");
        n.hide();
        var i = t.find(".yahoo-button");
        i.click(function() {
            n.hide(),
            r(e, "yahoo")
        });
        var a = function(i) {
            var a = "." + i + "-option";
            n.show(),
            n.find("> div:not(" + a + ")").hide(),
            n.find(a + ", .extra-field-container").show(),
            t.find(".extra-field").val("").focus();
            var o = t.find(".extra-field-submit");
            o.unbind("click"),
            o.click(function() {
                r(e, i, t.find(".extra-field").val())
            })
        }
          , o = t.find(".blogger-button");
        o.click(function() {
            a("blogger")
        });
        var s = t.find(".aol-button");
        s.click(function() {
            a("aol")
        })
    }
    function r(t, n, i) {
        var a = f[n];
        i && (a = a.replace("{username}", i)),
        t.find(".ssrc").val(e(t)),
        t.find(".use-facebook").val(""),
        t.find(".use-google").val(""),
        t.find(".manual-openid").val(a),
        t.find(".submit-openid").click()
    }
    function s(t) {
        t.find(".ssrc").val(e(t)),
        t.find(".use-facebook").val("true"),
        t.find(".use-google").val(""),
        t.find(".manual-openid").val(""),
        t.find(".submit-openid").click()
    }
    function c(t) {
        t.find(".ssrc").val(e(t)),
        t.find(".use-google").val("true"),
        t.find(".use-facebook").val(""),
        t.find(".manual-openid").val(""),
        t.find(".submit-openid").click()
    }
    function l(e) {
        return function() {
            StackExchange.using("editor", function() {
                StackExchange.cardiologist.ensureDraftSaved(e)
            })
        }
    }
    function d(t, n, i, a) {
        var o = t.find(".manual-openid").val()
          , r = t.find(".use-facebook").val()
          , s = t.find(".use-google").val();
        l(function() {
            var c = !!StackExchange.options.site.isChildMeta
              , l = (c ? StackExchange.options.site.parentUrl : "") + "/users/authenticate?returnurl=" + encodeURIComponent(n)
              , d = $('<form method="post" action="' + l + '"></form>');
            if (o) {
                var u = $('<input type="hidden" name="openid_identifier" />');
                d.append(u),
                u.val(o)
            } else {
                var f = $('<input type="hidden" name="oauth_version" />')
                  , p = $('<input type="hidden" name="oauth_server" />');
                d.append(f),
                d.append(p),
                f.val("2.0"),
                r ? p.val("https://www.facebook.com/v2.0/dialog/oauth") : s && p.val("https://accounts.google.com/o/oauth2/auth")
            }
            d.append("<input type='hidden' name='fkey' value='" + StackExchange.options.user.fkey + "' />"),
            $('<input type="hidden" name="ssrc" />').val(e(t)).appendTo(d),
            i && a && ($('<input type="hidden" name="anon_vote_type" />').val(i).appendTo(d),
            $('<input type="hidden" name="anon_vote_hash" />').val(a).appendTo(d)),
            StackExchange.navPrevention.stop(),
            d.hide().appendTo("body").submit()
        })()
    }
    var u = "unknown"
      , f = {
        "yahoo": "http://yahoo.com/",
        "google": "https://www.google.com/accounts/o8/id",
        "aol": "http://openid.aol.com/{username}",
        "blogger": "http://{username}.blogspot.com/"
    };
    return {
        "initPostLogin": n,
        "initAnonPopup": i,
        "initTourSignup": a
    }
}();
var UniversalAuth = function() {
    return {
        "performAuth": function() {
            if (UniversalAuth.enabled()) {
                var e = $.cookie("uauth");
                null != e && ($.post("/users/login/universal/request", function(e) {
                    $.each(e, function(e, t) {
                        var n = "//" + t.Host + "/users/login/universal.gif?authToken=" + encodeURIComponent(t.Token) + "&nonce=" + encodeURIComponent(t.Nonce);
                        $(document).ready(function() {
                            $("#footer").append('<img style="display:none" src="' + n + '"></img>')
                        })
                    })
                }, "json"),
                $.cookie("uauth", null, {
                    "path": "/",
                    "domain": document.domain
                }))
            }
        },
        "enabled": function() {
            return !0
        }
    }
}();
StackExchange.newnav = {
    "init": function(e, t, n, i) {
        StackExchange.newnav.shows = e,
        StackExchange.newnav.sorts = t,
        StackExchange.newnav.sortsByShow = n,
        StackExchange.newnav.config = i
    },
    "viewModels": {},
    "controllers": {},
    "helpers": {}
},
StackExchange.newnav.helpers.loader = function(e) {
    function t(e) {
        var t = $.Deferred()
          , n = $.get(e);
        return StackExchange.newnav.helpers.loader.pending.push(n),
        n.always(function() {
            var e = StackExchange.newnav.helpers.loader.pending.indexOf(n);
            e >= 0 && StackExchange.newnav.helpers.loader.pending.splice(e, 1)
        }).done(t.resolve.bind(null)).fail(t.reject.bind(null)),
        t.promise()
    }
    function n() {
        for (var e; StackExchange.newnav.helpers.loader.pending.length; )
            e = StackExchange.newnav.helpers.loader.pending.pop(),
            e.aborted = !0,
            e.abort();
        StackExchange.newnav.helpers.loader.pendingPeripherals && StackExchange.newnav.helpers.loader.pendingPeripherals.cancel()
    }
    function i(e, t) {
        return e.indexOf("?") > 0 ? e + "&" + t : e + "?" + t
    }
    function a(e, a) {
        n(),
        a ? (o.onLoading(!0, !1),
        t(i(e, "fastpage=true")).always(function() {
            o.onLoadCompleted(!0, !1)
        }).done(function(e) {
            e.warningTags ? (o.onLoadFailed(e.warningTags),
            StackExchange.newnav.helpers.loader.pendingPeripherals && StackExchange.newnav.helpers.loader.pendingPeripherals.cancel()) : o.onLoadSucceeded(!0, !1, e)
        }),
        StackExchange.newnav.helpers.loader.pendingPeripherals = StackExchange.helpers.DelayedReaction(function() {
            o.onLoading(!1, !0),
            t(i(e, "peripherals=true")).always(function() {
                o.onLoadCompleted(!1, !0)
            }).done(function(e) {
                e.warningTags ? o.onLoadFailed(e.warningTags) : o.onLoadSucceeded(!1, !0, e)
            })
        }, 2e3).trigger()) : (o.onLoading(!0, !0),
        StackExchange.tagPreferences.resetDontApplyCache(),
        t(e).always(function() {
            o.onLoadCompleted(!0, !0)
        }).done(function(e) {
            e.warningTags ? o.onLoadFailed(e.warningTags) : o.onLoadSucceeded(!0, !0, e)
        }))
    }
    var o = {
        "onLoadSucceeded": function() {},
        "onLoadFailed": function() {},
        "onLoadCompleted": function() {},
        "onLoading": function() {}
    };
    return o = $.extend(o, e),
    {
        "load": a
    }
}
,
StackExchange.newnav.helpers.loader.pending = [],
StackExchange.newnav.helpers.loader.pendingPeripherals = null,
StackExchange.newnav.viewModels.questionList = function(e, t, n, i, a, o, r, s, c) {
    function l() {
        ot = {}
    }
    function d() {
        return Object.keys(ot).length
    }
    function u() {
        return Object.keys(ot).length > 0
    }
    function f() {
        return $.extend({}, ot)
    }
    function p() {
        return !at || "" === at
    }
    function h() {
        return 0 === (0 | e)
    }
    function g(e, t, n) {
        if (h())
            return "/";
        var i = StackExchange.newnav.config.routes.routesById[10 * e + t];
        return i ? n ? "/questions/tagged/{tags}" + i.tagsRoute : "/questions" + i.noTagsRoute : n ? "/questions/tagged/{tags}" : "/questions"
    }
    function m(e, t) {
        var n, i, a, o = {
            "tags": tt,
            "showId": Y,
            "sortId": X,
            "compose": Z,
            "orCompose": et,
            "isExpanded": K,
            "fastpage": !1,
            "peripherals": !1,
            "hash": null,
            "page": rt ? rt.page : 1,
            "pagesize": rt.pagesize
        };
        return $.extend(o, e),
        4 === o.showId && (o.showId = 0),
        n = o.tags.length > 0,
        i = g(o.showId, o.sortId, n),
        n && (i = i.formatUnicorn({
            "tags": encodeURIComponent(o.tags)
        })),
        a = function(e, t) {
            i = StackExchange.helpers.updateQueryStringParameter(i, e, t)
        }
        ,
        o.tags.length > 1 && o.compose && a("mode", o.orCompose ? "any" : "all"),
        t || (a("page", o.page),
        a("pagesize", o.pagesize),
        (o.isExpanded === !0 || o.isExpanded === !1) && a("layout", o.isExpanded ? "expanded" : "compact"),
        o.fastpage && a("fastpage", "true"),
        o.peripherals && a("peripherals", "true")),
        i
    }
    function v(e) {
        return m(e, !1)
    }
    function x(e) {
        return m(e, !0)
    }
    function k(e) {
        if (!st && Q && G) {
            if (z || l(),
            z && z.body)
                return ct.onLoadSucceeded(!0, !0, z.body, W),
                void 0;
            var t = v();
            e = !!e,
            S(t),
            G.load(t, e)
        }
    }
    function w(e) {
        z = e,
        e && (tt = e.tags,
        et = e.orCompose,
        Y = e.showId,
        X = e.sortId,
        K = e.expanded,
        ot = e.realtimePosts,
        rt = e.paging,
        k())
    }
    function b(t) {
        return {
            "id": e,
            "tags": tt,
            "orCompose": et,
            "showId": Y,
            "sortId": X,
            "expanded": K,
            "paging": rt,
            "realtimePosts": ot,
            "body": t
        }
    }
    function y(e, t) {
        window.history.replaceState && !z && window.history.replaceState(b(e), document.title, x(t))
    }
    function S(e, t) {
        window.history.pushState && !z && window.history.pushState(b(e), document.title, x(t))
    }
    function E() {
        J && (z || l(),
        StackExchange.realtime.newnav_multiplex.unsubscribe(J),
        J = null)
    }
    function C() {
        if (!StackExchange.newnav.config.showRecommended || !h() && !J) {
            var e, t, n, i, a = W.getTagsArray();
            !Z && a.length > 1 || (e = StackExchange.newnav.sorts[X].realtimeName,
            t = StackExchange.newnav.shows[Y].realtimeName,
            n = "newest" === e,
            i = "active" === e,
            z || l(),
            StackExchange.options.realtime && (StackExchange.options.realtime.newest && n || StackExchange.options.realtime.active && i || StackExchange.options.realtime.tagged && (n || i) && a.length > 0) && (J = Math.random(),
            StackExchange.realtime.newnav_multiplex.subscribe({
                "token": J,
                "layout": K ? "expanded" : "compact",
                "sort": e,
                "filter": t,
                "requiredTags": a,
                "mode": s ? "or" : "and"
            }, function(e) {
                if (e.token != J)
                    throw "got data with invalid token: " + e.token + "!=" + J;
                e.questions.forEach(function(e) {
                    var t = /question-summary-(\d+)/i.exec(e.closest(".question-summary").attr("id"));
                    t && t[1] && (ot[t[1]] = {
                        "id": t[1],
                        "index": (new Date).getTime(),
                        "body": e.outerHTML()
                    })
                }),
                ct.onRealtimeUpdates()
            })))
        }
    }
    function T() {
        var e = StackExchange.newnav.config.routes.routesById[10 * Y + X];
        return tt && "" !== tt.trim() ? tt && tt.trim().indexOf(" ") < 0 ? e.autonameOneTag.formatUnicorn(tt) : e.autonameManyTags : e.autonameNoTags
    }
    function _() {
        return h() ? "home" : p() ? T() : at
    }
    function I(e) {
        st || ($.extend(ct, e),
        G = StackExchange.newnav.helpers.loader({
            "onLoadSucceeded": function(e, t, n) {
                ct.onLoadSucceeded(e, t, n, W),
                t && W.replaceState(n)
            },
            "onLoadFailed": function() {
                ct.onLoadFailed.apply(null, arguments)
            },
            "onLoadCompleted": function() {
                ct.onLoadCompleted.apply(null, arguments)
            },
            "onLoading": function() {
                ct.onLoading.apply(null, arguments)
            }
        }))
    }
    function M() {
        return h() ? !1 : nt
    }
    function D() {
        if (h())
            return null;
        var e = {
            "name": at,
            "uri": x()
        };
        return nt = !1,
        e
    }
    function P() {
        return JSON.stringify({
            "dirty": W.isDirty(),
            "id": W.id,
            "name": W.getName(),
            "isExpanded": K,
            "isSelected": Q,
            "showId": Y,
            "sortId": X,
            "tags": tt,
            "compose": Z,
            "orCompose": et,
            "realtimeToken": J
        }, null, "  ")
    }
    function O(e) {
        K !== e && (E(),
        K = e,
        k(),
        C())
    }
    function q(e) {
        e !== Q && (Q = e,
        e && k())
    }
    function A(t) {
        0 !== e && at !== t && (nt = !0,
        at = t)
    }
    function L(e) {
        h() || X === e || (E(),
        nt = !0,
        X = e,
        rt.page = 1,
        k(),
        C())
    }
    function R(e, t) {
        h() || Y === e || (E(),
        nt = !0,
        4 === e && (e = 0),
        Y = e,
        X = t,
        rt.page = 1,
        k(),
        C())
    }
    function U(e) {
        var t = e.join(" ");
        return h() || tt === t ? !1 : (E(),
        nt = !0,
        tt = t,
        Z = 0 === e.filter(function(e) {
            var t = e.toLowerCase();
            return "and" === t || "or" === t || "not" === t
        }).length && e.length > 1,
        rt.page = 1,
        k(!0),
        C(),
        !0)
    }
    function j(e) {
        !h() && et !== e && Z && (E(),
        nt = !0,
        et = e,
        rt.page = 1,
        k(),
        C())
    }
    function N() {
        if (h())
            return StackExchange.options.site.name;
        var e = d();
        return e > 0 ? function(e) {
            return 1 == e.realtimeCount,
            "(" + e.realtimeCount + ") " + e.pageTitle + " - " + e.siteName
        }({
            "realtimeCount": e,
            "pageTitle": W.getName(),
            "siteName": StackExchange.options.site.name
        }) : function(e) {
            return e.pageTitle + " - " + e.siteName
        }({
            "pageTitle": W.getName(),
            "siteName": StackExchange.options.site.name
        })
    }
    function B(e, t) {
        e = e || rt.page || lt.page,
        t = t || rt.pagesize || lt.pagesize;
        var n = e !== rt.page
          , i = t !== rt.pagesize;
        n && (E(),
        rt.page = e),
        i && (rt.pagesize = t),
        (n || i) && k(),
        n && 1 === e && C()
    }
    function H() {
        return $.extend({}, lt, rt)
    }
    function F(e, t) {
        return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
    }
    function V() {
        var e, t, n, i = f();
        l(),
        t = [];
        for (e in i)
            i.hasOwnProperty(e) && t.push(i[e]);
        n = t.sort(F),
        ct.onRefreshContent(n, W),
        y($("body").html())
    }
    var W, z, J, G, Q = !1, K = n, Y = 0 | i, X = 0 | a, Z = r, et = s, tt = o || "", nt = null == c ? !0 : c, it = !1, at = t, ot = {}, rt = {
        "page": 1,
        "pagesize": 15
    }, st = !1, ct = {
        "onLoadSucceeded": function() {
            return null
        },
        "onLoadCompleted": function() {
            return null
        },
        "onLoadFailed": function() {
            return null
        },
        "onLoading": function() {
            return null
        },
        "onRealtimeUpdates": function() {
            return null
        }
    }, lt = {
        "page": 1,
        "pagesize": 15
    };
    return W = {
        "id": e,
        "isHome": h,
        "isDirty": M,
        "init": I,
        "save": D,
        "getVisible": function() {
            return Q
        },
        "setVisible": q,
        "getIsExpanded": function() {
            return K
        },
        "setIsExpanded": O,
        "generateLoadUri": v,
        "generateSaveUri": x,
        "toString": P,
        "getName": _,
        "setName": A,
        "getShowId": function() {
            return Y
        },
        "setShowId": R,
        "getSortId": function() {
            return X
        },
        "setSortId": L,
        "getTags": function() {
            return tt
        },
        "setTags": U,
        "getTagsArray": function() {
            return (tt || "").split(/\s+/).filter(function(e) {
                return "" !== e
            })
        },
        "getTagComposition": function() {
            return et
        },
        "setTagComposition": j,
        "getTagComposable": function() {
            return Z
        },
        "getAutoFocus": function() {
            return it
        },
        "setAutoFocus": function(e) {
            it = e
        },
        "getTitle": N,
        "getRealtimeCounts": d,
        "hasRealtimeUpdates": u,
        "setPopState": w,
        "replaceState": y,
        "pushState": S,
        "setPaging": B,
        "getPaging": H,
        "refreshContent": V,
        "unsubscribe": E,
        "setMute": function(e) {
            st = e
        }
    },
    C(),
    W
}
,
StackExchange.newnav.viewModels.questionList.parseCanonicalUri = function(e) {
    function t(e) {
        var t, n, i = {}, a = e.split("?");
        return a[1] ? (t = a[1].split("&"),
        t.forEach(function(e) {
            n = e.split("="),
            i[n[0]] = decodeURIComponent(n[1])
        }),
        i) : i
    }
    var n, i, a, o, r, s, c = !1, l = t(e), d = /^\/questions\/tagged\/([^\/?]+)/i;
    if ((s = d.exec(e)) && s[1]) {
        switch (a = decodeURIComponent(s[1]),
        l.sort) {
        case "active":
            n = 0;
            break;
        default:
        case "newest":
            n = 1;
            break;
        case "hot":
            n = 2;
            break;
        case "votes":
            n = 3;
            break;
        case "linked":
            n = 4;
            break;
        case "ending":
            n = 5;
            break;
        case "size":
            n = 6
        }
        switch (l.filter) {
        default:
        case "all":
            i = 0;
            break;
        case "today":
            i = 1;
            break;
        case "week":
            i = 2;
            break;
        case "month":
            i = 3;
            break;
        case "need-answers":
            i = 7;
            break;
        case "no-answer":
            i = 5;
            break;
        case "bounties":
            i = 6
        }
    } else {
        var u = e.split("?")[0].substring("/questions".length)
          , f = StackExchange.newnav.config.routes.routesByName[u];
        i = f.showId,
        n = f.sortId
    }
    return o = l.mode,
    c = !!o,
    c && (r = "any" == o.toLowerCase()),
    {
        "sortId": n,
        "showId": i,
        "tags": a,
        "orCompose": r,
        "compose": c
    }
}
,
StackExchange.newnav.viewModels.questionList.load = function(e, t, n) {
    try {
        var i = t.name
          , a = StackExchange.newnav.viewModels.questionList.parseCanonicalUri(t.uri)
          , o = StackExchange.newnav.viewModels.questionList(e, i, n, a.showId, a.sortId, a.tags, a.compose, a.orCompose, !1);
        return o
    } catch (r) {
        return null
    }
}
,
StackExchange.newnav.viewModels.navigation = function() {
    function e() {
        j || R.onNavigationChanged(q)
    }
    function t(e) {
        $.extend(R, e),
        A.forEach(function(e) {
            e.init(R)
        })
    }
    function n(t) {
        O && O.id === t.id || (O = t,
        A.forEach(function(e) {
            e.setVisible(e.id == t.id)
        }),
        e())
    }
    function i(t) {
        var i = A.reduce(function(e, t) {
            return Math.max(e, t.id)
        }, -1) + 1;
        if (0 === i)
            t = {
                "showId": 0,
                "sortId": 1,
                "tags": ""
            };
        else {
            t = $.extend({}, {
                "showId": 0,
                "sortId": 1,
                "tags": ""
            }, t);
            var a = StackExchange.newnav.sortsByShow[t.showId];
            a || (t.showId = 0,
            a = StackExchange.newnav.sortsByShow[0]),
            -1 == a.indexOf(t.sortId) && (t.sortId = a[0])
        }
        var o = StackExchange.newnav.viewModels.questionList(i, null, L, t.showId, t.sortId, t.tags);
        o.setMute(j),
        o.init(R),
        A.push(o),
        n(o),
        o.setAutoFocus(!0),
        e()
    }
    function a(t) {
        var i = o(t);
        if (null != i) {
            var a, r = A.reduce(function(e, t) {
                return Math.max(e, t.id)
            }, -1) + 1;
            a = 0 == r ? {
                "showId": 0,
                "sortId": 1,
                "tags": ""
            } : {
                "showId": i.getShowId(),
                "sortId": i.getSortId(),
                "tags": i.getTags()
            };
            var s = StackExchange.newnav.sortsByShow[a.showId];
            s || (a.showId = 0,
            s = StackExchange.newnav.sortsByShow[0]),
            -1 == s.indexOf(a.sortId) && (a.sortId = s[0]);
            var c = StackExchange.newnav.viewModels.questionList(r, null, L, a.showId, a.sortId, a.tags);
            c.init(R),
            A.push(c),
            n(c),
            c.setAutoFocus(!0),
            e()
        }
    }
    function o(e) {
        return e = 0 | e,
        0 > e ? null : A.filter(function(t) {
            return t.id == e
        })[0]
    }
    function r(e) {
        if (O.id != e) {
            var t = o(e);
            if (t) {
                var i = A.indexOf(t)
                  , a = A.indexOf(O);
                t.setPaging(1),
                i !== a && (t.setAutoFocus(!1),
                n(t))
            }
        }
    }
    function s(e) {
        j = !0;
        var t;
        try {
            t = e.tabOptions
        } catch (a) {}
        if (null == t && (t = {
            "isExpanded": !1,
            "questionLists": []
        }),
        A = [],
        i(),
        t.tabs.forEach(function(e, t) {
            var n = StackExchange.newnav.viewModels.questionList.load(t + 1, e, L);
            n && (n.setMute(!0),
            A.push(n))
        }),
        e.extraList) {
            var o = e.extraList
              , r = A.reduce(function(e, t) {
                return Math.max(e, t.id)
            }, -1) + 1
              , s = StackExchange.newnav.viewModels.questionList(r, o.name, L, o.show, o.sort, o.tags, o.compose, o.orCompose, !0)
              , c = s.generateSaveUri()
              , l = A.filter(function(e) {
                return e.generateSaveUri() == c
            });
            l.length > 0 ? n(l[0]) : (s.setMute(!0),
            s.init(R),
            A.push(s),
            n(s))
        } else
            n(A[0]);
        P(location.search),
        O.replaceState($("body").html()),
        $(window).on("popstate", D),
        A.forEach(function(e) {
            e.setMute(!1)
        }),
        j = !1
    }
    function c(t) {
        var n = StackExchange.newnav.config.tabOptions.tabs || []
          , i = []
          , a = t ? t.generateSaveUri() : null;
        A.forEach(function(e) {
            if (!e.isHome()) {
                var o = e.generateSaveUri();
                if (a && a == o)
                    i.push(t.save()),
                    a = null;
                else {
                    var r = !1;
                    n.forEach(function(e, t) {
                        !r && e && e.uri == o && (r = !0,
                        i.push(e),
                        n[t] = null)
                    })
                }
            }
        });
        var o = {
            "isExpanded": L,
            "tabs": i
        };
        $.post("/home/save-tabs", {
            "tabOptions": JSON.stringify(o),
            "fkey": StackExchange.options.user.fkey
        }).fail(function() {}),
        StackExchange.newnav.config.tabOptions = o,
        e()
    }
    function l(e) {
        c(e ? null : O)
    }
    function d(t) {
        var i = o(t);
        if (i && !(i.id < 1)) {
            var a = A.indexOf(i)
              , r = A.indexOf(O);
            a == r && (r == A.length - 1 ? n(A[r - 1]) : n(A[r + 1])),
            A.splice(a, 1),
            i.unsubscribe(),
            l(!0),
            e()
        }
    }
    function u(t) {
        var n = o(t);
        if (n && !(n.id < 1)) {
            var i = A.indexOf(n);
            if (i != A.length - 1) {
                var a = A[i];
                A[i] = A[i + 1],
                A[i + 1] = a,
                l(!0),
                e()
            }
        }
    }
    function f(t) {
        var n = o(t);
        if (n && !(n.id < 1)) {
            var i = A.indexOf(n);
            if (!(2 > i)) {
                var a = A[i];
                A[i] = A[i - 1],
                A[i - 1] = a,
                l(!0),
                e()
            }
        }
    }
    function p(t, n) {
        var i = o(t);
        if (i && i.getName() != n) {
            var a = i.isDirty();
            i.setName(n),
            a || c(i),
            e()
        }
    }
    function h(t) {
        t != L && (L = t,
        A.forEach(function(e) {
            e.setIsExpanded(t)
        }),
        l(!0),
        e())
    }
    function g(t) {
        O && !O.isHome() && O.setTags(t) && e()
    }
    function m() {
        return !O || O.isHome() ? null : O.getTags()
    }
    function v() {
        return !O || O.isHome() ? null : StackExchange.newnav.sortsByShow[O.getShowId()]
    }
    function x() {
        return !O || O.isHome() ? null : O.getShowId()
    }
    function k(t) {
        if (O && !O.isHome() && StackExchange.newnav.shows[t]) {
            var n = O.getSortId()
              , i = StackExchange.newnav.sortsByShow[t];
            -1 == i.indexOf(n) ? O.setShowId(t, i[0]) : O.setShowId(t, n),
            e()
        }
    }
    function w() {
        return !O || O.isHome() ? null : O.getSortId()
    }
    function b(t) {
        O && !O.isHome() && (O.setSortId(t),
        e())
    }
    function y() {
        return O && !O.isHome() && O.getTagComposable() ? O.getTagComposition() : null
    }
    function S(t) {
        O && !O.isHome() && O.getTagComposable() && (O.setTagComposition(t),
        e())
    }
    function E() {
        return !O || O.isHome() ? null : O.getTagComposable()
    }
    function C() {
        return !O || O.isHome() ? !1 : O.isDirty()
    }
    function T(e, t) {
        var n = !1
          , i = StackExchange.newnav.config.tabOptions.tabs || [];
        return i.forEach(function(i) {
            n || i.uri != e || t && i.name || (n = !0)
        }),
        n
    }
    function _(e) {
        return e ? T(e) : !0
    }
    function I(e) {
        if (e && T(e, !0)) {
            var t = null;
            A.forEach(function(n) {
                t || n.generateSaveUri() != e || n.name || n.isDirty() || (t = n)
            }),
            t && 0 != t.id && d(t.id)
        }
    }
    function M(e) {
        if (e) {
            var t = StackExchange.newnav.viewModels.questionList.load(0, {
                "uri": e
            });
            t && (i({
                "showId": t.getShowId(),
                "sortId": t.getSortId(),
                "tags": t.getTags()
            }),
            l())
        }
    }
    function D(e) {
        var t = e.originalEvent
          , i = t.state;
        if (i) {
            var a = o(i.id);
            a && (a.setPopState(i),
            h(i.expanded),
            n(a),
            a.setPopState(null))
        }
    }
    function P(e) {
        for (var t, n = /(?:[&?])(page(?:size)?)=(\d+)/gi, i = {}; t = n.exec(e); )
            i[t[1].toLowerCase()] = +t[2];
        A.forEach(function(e) {
            e.setPaging(e.getVisible() ? i.page : 1, i.pagesize)
        })
    }
    var O, q, A = [], L = StackExchange.newnav.config.isExpanded, R = {
        "onNavigationChanged": function() {}
    }, U = $.extend({}, StackExchange.newnav.config.invalidTags), j = !1;
    return q = {
        "init": t,
        "load": s,
        "addList": i,
        "removeList": d,
        "renameList": p,
        "selectList": r,
        "saveList": l,
        "moveListRight": u,
        "moveListLeft": f,
        "setIsExpanded": h,
        "getIsExpanded": function() {
            return L
        },
        "getShowId": x,
        "setShowId": k,
        "getSortId": w,
        "setSortId": b,
        "getSorts": v,
        "getTags": m,
        "setTags": g,
        "getTagComposition": y,
        "setTagComposition": S,
        "hasTagComposition": E,
        "tabs": function() {
            return A
        },
        "onHome": function() {
            return O.isHome()
        },
        "generateLoadUri": function(e) {
            return O.generateLoadUri(e)
        },
        "isModified": C,
        "listExists": _,
        "addListByUri": M,
        "removeListByUri": I,
        "getAutoFocus": function() {
            return O.getAutoFocus()
        },
        "duplicateList": a,
        "getInvalidTags": function() {
            return U
        },
        "addInvalidTag": function(e) {
            U[e] = !0
        },
        "getPaging": function() {
            return O.getPaging()
        },
        "setPagingByUri": P,
        "refreshContent": function() {
            O.refreshContent()
        }
    }
}
,
StackExchange.newnav.controllers.unifiedQuestionListController = function(e) {
    function t() {
        $('.help-popup input[type="checkbox"]').each(function(t, n) {
            var i = $(n)
              , a = e.listExists(i.attr("name"));
            i.prop("checked", a)
        })
    }
    function n(e) {
        if (null != StackExchange.options.user.accountId && e) {
            var t = e.getTagsArray()
              , n = t.filter(RegExp.prototype.test.bind(/^(?:and|or|not)$/i)).length
              , i = n ? null : t;
            StackExchange.tagPreferences.applyPrefs(!0, i)
        }
    }
    function i(e) {
        var t = $(".tabs-list");
        t.find(".intellitab").remove();
        var n = t.find(":first-child");
        if ($(".new-post-activity").remove(),
        e.tabs().forEach(function(e, t, i) {
            var a = $($("#tmpl-tab-item").html());
            a.closest(".intellitab").attr("data-id", e.id);
            var o = e.getName()
              , r = o;
            e.isDirty() && (o = "*" + o);
            var s = e.getRealtimeCounts();
            s > 0 && (o = "({count}) {name}".formatUnicorn({
                "count": s,
                "name": o
            })),
            a.find("a:first").attr("href", e.generateSaveUri()),
            a.find(".tab-name").text(o),
            a.find(".tab-name").attr("title", r),
            a.find(".tab-full-name").val(r),
            e.getVisible() && (a.addClass("selected").find("a:first").addClass("youarehere"),
            document.title = ($("#mainbar").data("title-prefix") || "") + e.getTitle()),
            e.isHome() && (a.find(".menu-switcher").remove(),
            a.find(".tab-full-name").remove()),
            1 == t && a.find(".move-left-tab").addClass("disabled"),
            t == i.length - 1 && a.find(".move-right-tab").addClass("disabled"),
            a.insertBefore(n),
            e.getVisible() && e.hasRealtimeUpdates() && e.getPaging().page < 2 && ($("#question-mini-list, #questions").prepend(function() {
                var t = e.getRealtimeCounts()
                  , n = 1 === e.getSortId() ? function(e) {
                    return 1 == e.count ? e.count + " new question" : e.count + " new questions"
                }({
                    "count": t
                }) : function(e) {
                    return 1 == e.count ? e.count + " question with new activity" : e.count + " questions with new activity"
                }({
                    "count": t
                });
                return $('<div class="new-post-activity">' + n + "</div>").data("questionList", e)
            }),
            e.replaceState($("body").html()))
        }),
        e.onHome())
            $(".tab-show").hide(),
            $(".tab-sort").hide(),
            $(".tab-tag-filter").hide(),
            $(".tab-save").hide(),
            $(".question-list-layout").hide(),
            $(".tab-tag-callout").show(),
            StackExchange.newnav.config.userHasPrefs && $(".tab-parameters").hide();
        else {
            $(".tab-parameters").show(),
            $(".tab-show").show(),
            $(".tab-show li[data-tab-options]").each(function() {
                var t = $(this)
                  , n = t.data("tab-options");
                t[e.getShowId() === n.showId ? "addClass" : "removeClass"]("selected").find("a:first").attr("href", e.generateLoadUri(n))
            }),
            $(".tab-sort").show();
            var i = e.getSorts();
            if ($(".tab-sort li[data-tab-options]").each(function() {
                var t = $(this)
                  , n = t.data("tab-options");
                t[-1 === i.indexOf(n.sortId) ? "addClass" : "removeClass"]("disabled")[e.getSortId() === n.sortId ? "addClass" : "removeClass"]("selected").find("a:first").attr("href", e.generateLoadUri(n))
            }),
            $(".tab-tag-filter").show(),
            d = !0,
            l) {
                var a = $(".tab-tag-filter .tag-filter")[0]
                  , o = e.getTags().trim()
                  , r = o.split(" ").filter(function(e) {
                    return -1 === a.value.trim().split(" ").indexOf(e)
                });
                r.length > 0 && (a.func_clear(),
                a.func_add(o)),
                u(e)
            } else
                f(e);
            d = !1;
            var s = !1;
            $("#search input[name='q']").val(e.getTags().trim().split(" ").reduce(function(e, t) {
                return t ? "not" == t ? (s = !s,
                e) : (e.length > 0 && (e += " "),
                "and" == t || "or" == t ? e += t : (s && (e += "-"),
                e += "[" + t + "]"),
                s = !1,
                e) : e
            }, "")),
            e.hasTagComposition() ? ($(".tag-filter-isany").show().find("a[data-tab-options]").each(function() {
                var t = $(this);
                t.attr("href", e.generateLoadUri(t.data("tab-options")))
            }),
            e.getTagComposition() ? ($(".tag-filter-isany .any").addClass("selected"),
            $(".tag-filter-isany .all").removeClass("selected")) : ($(".tag-filter-isany .all").addClass("selected"),
            $(".tag-filter-isany .any").removeClass("selected"))) : $(".tag-filter-isany").hide(),
            $(".tab-save").show(),
            e.isModified() ? $(".tab-save").removeClass("disabled") : $(".tab-save").addClass("disabled"),
            $(".question-list-layout").show().find("a[data-tab-options]").each(function() {
                var t = $(this);
                t.attr("href", e.generateLoadUri(t.data("tab-options")))
            }),
            e.getIsExpanded() ? ($(".question-list-layout .expanded").addClass("selected"),
            $(".question-list-layout .collapsed").removeClass("selected")) : ($(".question-list-layout .expanded").removeClass("selected"),
            $(".question-list-layout .collapsed").addClass("selected")),
            $(".tab-tag-callout").hide();
            var c = e.getTags();
            ("" == c || c.indexOf(" ") > -1) && $("div.excerpt.question").hide()
        }
        $("a.disabled, .disabled a").attr("href", null)
    }
    function a(e, t) {
        var i = $(t);
        $("#sidebar").html(i.filter("#sidebar").html()),
        $(".pager, .page-sizer, #permalink").remove(),
        i.find(".page-sizer").insertBefore("#loading-overlay"),
        i.find(".pager").insertBefore("#loading-overlay"),
        i.filter("#permalink").insertAfter("#sidebar");
        var a = $(".bounties-tab");
        i.find(".bounties-tab").insertAfter(a),
        a.remove(),
        StackExchange.bindShowMoreHotNetworkQuestions(),
        n(e)
    }
    function o(e, t) {
        var i = $(t)
          , a = i.find("#qlist-wrapper");
        $("#qlist-wrapper").html(a.html()),
        n(e),
        document.title = ($("#mainbar").data("title-prefix") || "") + e.getTitle(),
        $(".question.excerpt").remove(),
        $("#qlist-wrapper").prepend($('<div class="question excerpt"/>')),
        $(".question.excerpt").html(i.find(".question.excerpt").html())
    }
    function r(e) {
        var t = $("#sidebar").removeSpinner();
        e && t.addSpinner()
    }
    function s(e) {
        var t = $("#loading-overlay").addClass("dno").removeSpinner();
        e && t.removeClass("dno").addSpinner()
    }
    var c = null
      , l = !1
      , d = !1
      , u = function(e) {
        e.getAutoFocus() ? $(".tab-tag-filter .tag-filter").focus() : $(".tab-tag-filter .tag-filter").blur()
    }
      , f = function(e) {
        l || e.onHome() || (StackExchange.using("tagEditor", function() {
            $(".tab-tag-filter .tag-filter").val(e.getTags()),
            StackExchange.tagEditor($(".tab-tag-filter .tag-filter"), null, !1, {
                "excerpts": !1,
                "invalid": e.getInvalidTags(),
                "operators": /^(?:and|or|not)$/i,
                "tagMenus": !0
            }),
            StackExchange.helpers.genericBindOverlayEvents($(".tab-tag-filter .tag-editor"), $(".tab-tag-filter .tag-filter"), function() {
                return "" === $(".tab-tag-filter .tag-filter").val()
            }),
            u(e)
        }),
        l = !0)
    }
      , p = {
        "showing": !1,
        "show": function(e) {
            this.hide(),
            e && e.filter(".dropdown").show(),
            $(".intellitab").not(":first").addClass("dropdown-enabled"),
            this.showing = !0
        },
        "hide": function() {
            this.showing = !1,
            $(".intellitab").removeClass("dropdown-enabled"),
            $(".newnav .tab-parameters .dropdown").hide()
        },
        "toggle": function(e) {
            this.showing ? this.hide() : this.show(e)
        }
    }
      , h = function(e) {
        var t = $(e.target).closest(".intellitab");
        0 != t.data("id") && (p.hide(),
        t.addClass("renaming"),
        t.find("a").hide(),
        t.find("input.tab-full-name").show().focus().select(),
        c = t,
        e.stopImmediatePropagation(),
        e.preventDefault())
    }
      , g = function(t) {
        if (c) {
            if (t) {
                var n = c.data("id");
                e.renameList(n, c.find("input.tab-full-name").val())
            }
            c.removeClass("renaming"),
            c.find("a").show(),
            c.find("input.tab-full-name").hide(),
            c = null
        }
    };
    $(document).on("click", ".new-post-activity", function() {
        e.refreshContent(),
        $(".flash").hide().fadeIn().removeClass("flash")
    }),
    $(document).on("click", ".disabled, .disabled *", function(e) {
        return e.preventDefault(),
        e.stopImmediatePropagation(),
        !1
    }),
    $(document).on("click", ".tabs-list .remove-tab", function(t) {
        var n = $(t.target).closest(".intellitab").data("id");
        p.hide(),
        e.removeList(+n),
        t.stopImmediatePropagation(),
        t.preventDefault()
    }),
    $(document).on("click", ".tabs-list .move-right-tab", function(t) {
        var n = $(t.target);
        if (!n.hasClass("disabled")) {
            var i = $(t.target).closest(".intellitab").data("id");
            p.hide(),
            e.moveListRight(+i)
        }
        t.stopImmediatePropagation(),
        t.preventDefault()
    }),
    $(document).on("click", ".tabs-list .move-left-tab", function(t) {
        var n = $(t.target);
        if (!n.hasClass("disabled")) {
            var i = n.closest(".intellitab").data("id");
            p.hide(),
            e.moveListLeft(+i)
        }
        t.stopImmediatePropagation(),
        t.preventDefault()
    }),
    $(document).on("click", ".tabs-list .rename-tab", h),
    $(document).on("dblclick", ".tabs-list .intellitab", h),
    $(document).on("keyup", "input.tab-full-name", function(e) {
        if (c) {
            if (13 == e.which)
                g(!0);
            else {
                if (27 != e.which)
                    return;
                g(!1)
            }
            e.stopImmediatePropagation()
        }
    }),
    $(document).on("blur", "input.tab-full-name", function() {
        g(!0)
    }),
    $(document).on("click", ".tabs-list .menu-switcher", function(e) {
        p.toggle(),
        e.stopImmediatePropagation(),
        e.preventDefault()
    }),
    $(document).on("click", ".tabs-list .intellitab", function(t) {
        t.stopImmediatePropagation(),
        t.preventDefault();
        var n = $(t.target);
        if (!n.closest(".menu-switcher").length) {
            var i = n.closest(".intellitab").data("id");
            e.selectList(+i)
        }
    }),
    $(document).on("click", ".tabs-list-container .add-tab", function(t) {
        e.addList({}),
        t.preventDefault()
    }),
    $(document).on("click", ".tabs-list-container .duplicate-tab", function(t) {
        var n = $(t.target).closest(".intellitab")
          , i = n.data("id");
        0 != i && (e.duplicateList(i),
        t.preventDefault(),
        t.stopImmediatePropagation())
    }),
    $(document).on("click", ".tag-filter-isany .any, .tag-filter-isany .all", function(t) {
        var n = e.getTagComposition()
          , i = $(t.target).hasClass("any");
        e.setTagComposition(i),
        t.preventDefault(),
        n != i && $.post("/users/save-preference", {
            "key": 121,
            "value": i ? "or" : "and",
            "fkey": StackExchange.options.user.fkey
        })
    }),
    $(document).on("click", ".question-list-layout a", function(t) {
        var n = $(t.target).hasClass("expanded");
        e.setIsExpanded(n),
        t.preventDefault(),
        $.post("/users/save-preference", {
            "key": 120,
            "value": n ? "true" : "false",
            "fkey": StackExchange.options.user.fkey
        })
    }),
    $(document).on("click", ".tab-show li[data-tab-options] a", function(t) {
        var n = $(t.target).closest("li[data-tab-options]").data("tab-options").showId;
        p.hide(),
        e.setShowId(+n),
        t.preventDefault()
    }),
    $(document).on("click", ".tab-sort li[data-tab-options] a", function(t) {
        var n = $(t.target).closest("li[data-tab-options]").data("tab-options").sortId;
        p.hide(),
        e.setSortId(+n),
        t.preventDefault()
    }),
    $(document).on("click", ".tab-save a", function(t) {
        $(t.target).closest(".tab-save").hasClass("disabled") || e.saveList()
    }),
    $(document).on("click", ".tab-show li[data-id] a", function(t) {
        var n = $(t.target).closest("li[data-id]").data("id");
        e.setShowId(+n),
        t.preventDefault()
    }),
    $(document).on("tageditor:renderedchange", ".tag-filter", function(t, n, i) {
        "" != i && n.push(i),
        d || (d = !0,
        e.setTags(n),
        d = !1)
    }),
    $(document).on("click", ".newnav .filter-switcher", function(e) {
        p.toggle($(e.target).parent().find("ul.dropdown")),
        e.stopImmediatePropagation(),
        e.preventDefault()
    }),
    $(document).on("mouseenter mouseleave", ".newnav .filter-switcher", function(e) {
        p.showing && p.show($(e.target).closest(".tab-show, .tab-sort").find("ul.dropdown"))
    }),
    $(document).on("mouseenter mouseleave", ".newnav .intellitab", function() {
        p.showing && (p.hide(),
        p.show())
    }),
    $(document).on("click", function(e) {
        p.showing && !$(e.target).closest("ul.dropdown").length && (p.hide(),
        e.stopImmediatePropagation())
    }),
    $(document).on("keypress", ".tab-tag-filter .tag-editor", function(e) {
        13 == e.which && $(".tab-tag-filter .tag-filter")[0].func_finish()
    }),
    $(document).on("change", '.help-popup input[type="checkbox"]', function(n) {
        var i = $(n.target);
        i.prop("checked") ? e.addListByUri(i.prop("name")) : e.removeListByUri(i.prop("name")),
        t()
    }),
    $(document).on("click", ".help-tab", function(e) {
        $("#prototype").loadPopup({
            "html": $("#tmpl-help-popup").html(),
            "insert": function(e) {
                e.insertAfter("#prototype.subheader")
            },
            "lightbox": !0,
            "dontShow": !0
        }).done(function(e, t) {
            e.show(),
            t.fadeIn("fast")
        }),
        t(),
        e.preventDefault()
    }),
    $(document).on("click", ".pager a, .page-sizer a", function(t) {
        var n = $(t.target).closest("a")
          , i = n.attr("href");
        e.setPagingByUri(i),
        $("html, body").animate({
            "scrollTop": $(".tabs-list").position().top
        }, 200),
        t.stopImmediatePropagation(),
        t.preventDefault(),
        $.post("/users/save-preference", {
            "key": 10,
            "value": e.getPaging().pagesize,
            "fkey": StackExchange.options.user.fkey
        })
    }),
    $(document).on("click", "#hide-restore-tabs", function() {
        $.post("/newnav/toggle-restore-tabs/false", {
            "fkey": StackExchange.options.user.fkey
        }).done(function() {
            StackExchange.helpers.closePopups(),
            $(".help-tab").remove()
        })
    }),
    e.load(StackExchange.newnav.config),
    e.init({
        "onNavigationChanged": function(e) {
            i(e)
        },
        "onLoadSucceeded": function(e, t, n, i) {
            e && o(i, n),
            t && a(i, n)
        },
        "onLoadFailed": function(t) {
            t.split(/\s+/).forEach(function(t) {
                e.addInvalidTag(t)
            }),
            $(".tab-tag-filter .tag-filter")[0].func_redraw()
        },
        "onLoadCompleted": function(e, t) {
            e && s(!1),
            t && r(!1)
        },
        "onLoading": function(e, t) {
            e ? (t && StackExchange.tagPreferences.resetDontApplyCache(),
            s(!0)) : t && r(!0)
        },
        "onRefreshContent": function(t, a) {
            $(".flash").removeClass("flash");
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                $("#question-summary-" + r.id).remove(),
                $(r.body).prependTo("#question-mini-list, #questions"),
                $("#question-summary-" + r.id).addClass("flash")
            }
            n(a),
            styleCode(),
            StackExchange.realtime.updateRelativeDates(),
            $(".new-post-activity").remove(),
            $(".no-posts").remove(),
            document.title = ($("#mainbar").data("title-prefix") || "") + a.getTitle(),
            i(e)
        },
        "onRealtimeUpdates": function() {
            i(e)
        }
    }),
    f(e)
}
,
StackExchange.ready(function() {
    function e() {
        try {
            $.cookie("fkey", StackExchange.options.user.fkey, {
                "path": "/",
                "expires": 1 / 144
            })
        } catch (e) {}
    }
    if (StackExchange.options.user.isAnonymous) {
        var t = /\bfkey=/i;
        $(document).ajaxSend(function(n, i, a) {
            "post" === a.type.toLowerCase() && (t.test(a.url) || t.test(a.data)) && e()
        }),
        $(document).on("submit", "form", function() {
            var t = $(this);
            "post" === t.attr("method").toLowerCase() && t.find("input[name='fkey']").length && e()
        })
    }
}),
StackExchange.loadJqueryUi = function() {
    if ($.ui)
        return $.Deferred().resolve();
    $("<link>").attr({
        "href": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/themes/smoothness/jquery-ui.css",
        "rel": "stylesheet",
        "type": "text/css",
        "media": "all"
    }).appendTo("head");
    var result = $.Deferred(), locale = StackExchange.options.locale, datepickerLanguageGetter, datepickerLanguageScript;
    return $.ajaxSetup({
        "cache": !0
    }),
    "en" !== locale && (datepickerLanguageGetter = $.ajax({
        "url": "/content/js/third-party/jquery-ui/datepicker-" + locale + ".js",
        "dataType": "text",
        "type": "GET"
    }).done(function(e) {
        datepickerLanguageScript = e
    })),
    $.when(datepickerLanguageGetter || $.Deferred().resolve(), $.getScript("https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js")).done(function() {
        eval(datepickerLanguageScript),
        result.resolve()
    }),
    $.ajaxSetup({
        "cache": !1
    }),
    result.promise()
}
,
StackExchange.processTimings = function() {
    function e(e, t) {
        var n = {};
        t = t || e.name || !1;
        for (var i in e)
            if ("toJSON" !== i && "entryType" !== i)
                if (t) {
                    if ("subresources" === i)
                        continue;
                    var a = Math.round(e[i]);
                    n[i] = a ? a : e[i]
                } else
                    0 !== e[i] && (n[i] = 0 === e[i] ? null : e[i] - e.navigationStart);
        return n
    }
    function t() {
        if (StackExchange.options.timingsGuid && window.performance && window.performance.timing && window.performance.getEntriesByType) {
            var t = []
              , n = []
              , i = !1
              , a = function(a) {
                for (var o = 0; o < n.length; o++)
                    n[o].cancel();
                if (!i) {
                    i = !0;
                    var r = $.extend(e(window.performance.timing, !1), {
                        "guid": StackExchange.options.timingsGuid,
                        "Info": StackExchange.options.timingsInfo,
                        "fkey": StackExchange.options.user.fkey,
                        "subresources": t.map(function(t) {
                            return e(t, !0)
                        })
                    })
                      , s = JSON.stringify(r);
                    if (navigator && navigator.sendBeacon && -1 === location.search.indexOf("__debug=1"))
                        try {
                            if (navigator && navigator.sendBeacon("/_/client-timings", s))
                                return
                        } catch (c) {}
                    a || $.post("/_/client-timings", s)
                }
            }
              , o = StackExchange.helpers.DelayedReaction(a, StackExchange.settings.monitoring.clientTimingsDebounceTimeout, {
                "sliding": !0
            });
            n.push(o);
            var r = StackExchange.helpers.DelayedReaction(a, StackExchange.settings.monitoring.clientTimingsAbsoluteTimeout);
            r.trigger(),
            n.push(r);
            var s = {}
              , c = window.setInterval(function() {
                for (var e = window.performance.getEntriesByType("resource"), n = !1, i = 0; i < e.length; i++)
                    if (!s[i]) {
                        var a = e[i];
                        t.push(a),
                        n = !0,
                        s[i] = !0
                    }
                n && o.trigger()
            }, 50);
            n.push({
                "cancel": function() {
                    c && (window.clearInterval(c),
                    c = null)
                }
            }),
            window.performance.onresourcetimingbufferfull = function() {
                window.performance.clearResourceTimings(),
                s = {}
            }
            ,
            $(window).unload(function() {
                a(!0)
            })
        }
    }
    return t
}(),
StackExchange.showFlashMessageIfAny = function() {
    var e = "flash-message-json"
      , t = $.cookie(e);
    if (null !== t)
        try {
            $.cookie(e, null, {
                "path": "/",
                "domain": document.domain
            });
            var n = JSON.parse(t);
            if (StackExchange.options.isMobile) {
                var i = -3;
                StackExchange.notify.show(n.message, i, "_" + n.type)
            } else if ("toast" === n.position) {
                var a = {
                    "type": n.type,
                    "position": "toast",
                    "transient": !0,
                    "transientTimeout": 4e3
                };
                StackExchange.helpers.showMessage(document.body, n.message, a)
            } else
                StackExchange.helpers.showBannerMessage(n.message, n.type)
        } catch (o) {
            return
        }
}
,
StackExchange.prepareEditor = function(e) {
    var t = e.postfix || ""
      , n = function() {
        setTimeout(function() {
            StackExchange.editor.initIfShown(e)
        }, 1)
    };
    if (!e.onDemand)
        return StackExchange.using("editor", n),
        void 0;
    for (var i = "bold-button italic-button spacer1 link-button quote-button code-button image-button spacer2 olist-button ulist-button heading-button hr-button spacer3 undo-button redo-button".split(" "), a = $('<ul id="wmd-button-row' + t + '" class="wmd-button-row" />').appendTo(".wmd-button-bar"), o = 0, r = 0; r < i.length; r++) {
        var s = i[r]
          , c = /spacer/.test(s)
          , l = $("<li id='wmd-" + s + t + "' />").prop("className", "wmd-" + (c ? "spacer" : "button")).css("left", 25 * r).appendTo(a);
        $("<span />").css("background-position", o + "px -20px").appendTo(l),
        c || (o -= 20)
    }
    var d = !1;
    $("#wmd-input, #title, #tagnames, #edit-comment, #m-address, #display-name").one("focus click keydown", function() {
        if (!d) {
            d = !0;
            var t = function() {
                a.remove(),
                e.autoShowMarkdownHelp && (e.immediatelyShowMarkdownHelp = !0),
                n()
            };
            a.addSpinner({
                "float": "right"
            }),
            StackExchange.using("editor", t)
        }
    })
}
,
StackExchange.bindShowMoreHotNetworkQuestions = function() {
    var e, t = $("#hot-network-questions");
    if (t.length && (e = t.find(".js-show-more")).length) {
        var n = t.find(".js-hidden");
        e.click(function() {
            return n.show(),
            e.remove(),
            !1
        });
        var i = $("#mainbar").height()
          , a = $("#sidebar").height() + 550;
        i > a && (n.each(function() {
            return a += $(this).show().height(),
            i > a
        }),
        0 == n.filter(":hidden").length && e.remove())
    }
}
;
