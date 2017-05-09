(function() {
    'use strict';
    var e, aa = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        for (var d in b)
            if (Object.defineProperties) {
                var f = Object.getOwnPropertyDescriptor(b, d);
                f && Object.defineProperty(a, d, f)
            } else
                a[d] = b[d]
    }, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (c.get || c.set)
            throw new TypeError("ES3 does not support getters and setters.");
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    }
    , h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, ca = function() {
        ca = function() {}
        ;
        h.Symbol || (h.Symbol = da)
    }, ea = 0, da = function(a) {
        return "jscomp_symbol_" + (a || "") + ea++
    }, l = function() {
        ca();
        var a = h.Symbol.iterator;
        a || (a = h.Symbol.iterator = h.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && ba(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return fa(this)
            }
        });
        l = function() {}
    }, fa = function(a) {
        var b = 0;
        return ga(function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        })
    }, ga = function(a) {
        l();
        a = {
            next: a
        };
        a[h.Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }, ia = function(a) {
        l();
        var b = a[Symbol.iterator];
        return b ? b.call(a) : fa(a)
    }, n = this, p = function(a, b, c) {
        a = a.split(".");
        c = c || n;
        a[0]in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
    }, ja = function() {}, q = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }, r = function(a) {
        var b = q(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }, t = function(a) {
        return "string" == typeof a
    }, ka = "closure_uid_" + (1E9 * Math.random() >>> 0), la = 0, ma = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, na = function(a, b, c) {
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
    }, u = function(a, b, c) {
        u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
        return u.apply(null, arguments)
    }, oa = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.le = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.he = function(a, c, g) {
            for (var d = Array(arguments.length - 2), f = 2; f < arguments.length; f++)
                d[f - 2] = arguments[f];
            return b.prototype[c].apply(a, d)
        }
    };
    var chrome = chrome || window.chrome || {};
    chrome.cast = chrome.cast || {};
    chrome.cast.media = chrome.cast.media || {};
    chrome.cast.VERSION = [1, 2];
    p("chrome.cast.VERSION", chrome.cast.VERSION, void 0);
    chrome.cast.fe = !0;
    p("chrome.cast.usingPresentationApi", chrome.cast.fe, void 0);
    chrome.cast.Error = function(a, b, c) {
        this.code = a;
        this.description = b || null;
        this.details = c || null
    }
    ;
    p("chrome.cast.Error", chrome.cast.Error, void 0);
    chrome.cast.xc = function(a) {
        this.platform = a;
        this.packageId = this.url = null
    }
    ;
    p("chrome.cast.SenderApplication", chrome.cast.xc, void 0);
    chrome.cast.Image = function(a) {
        this.url = a;
        this.width = this.height = null
    }
    ;
    p("chrome.cast.Image", chrome.cast.Image, void 0);
    chrome.cast.Volume = function(a, b) {
        this.level = void 0 !== a ? a : null;
        this.muted = void 0 !== b ? b : null
    }
    ;
    p("chrome.cast.Volume", chrome.cast.Volume, void 0);
    var pa = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
      , qa = /&/g
      , ra = /</g
      , sa = />/g
      , ta = /"/g
      , ua = /'/g
      , va = /\x00/g
      , wa = /[\x00&<>"']/
      , ya = function(a, b) {
        var c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        }, d;
        d = b ? b.createElement("div") : n.document.createElement("div");
        return a.replace(xa, function(a, b) {
            var f = c[a];
            if (f)
                return f;
            "#" == b.charAt(0) && (b = Number("0" + b.substr(1)),
            isNaN(b) || (f = String.fromCharCode(b)));
            f || (d.innerHTML = a + " ",
            f = d.firstChild.nodeValue.slice(0, -1));
            return c[a] = f
        })
    }
      , za = function(a) {
        return a.replace(/&([^;]+);/g, function(a, c) {
            switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)),
                isNaN(c)) ? a : String.fromCharCode(c)
            }
        })
    }
      , xa = /&([^;\s<&]+);?/g
      , w = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    chrome.cast.eb = {
        CUSTOM_CONTROLLER_SCOPED: "custom_controller_scoped",
        TAB_AND_ORIGIN_SCOPED: "tab_and_origin_scoped",
        ORIGIN_SCOPED: "origin_scoped",
        PAGE_SCOPED: "page_scoped"
    };
    p("chrome.cast.AutoJoinPolicy", chrome.cast.eb, void 0);
    chrome.cast.fb = {
        CREATE_SESSION: "create_session",
        CAST_THIS_TAB: "cast_this_tab"
    };
    p("chrome.cast.DefaultActionPolicy", chrome.cast.fb, void 0);
    chrome.cast.Da = {
        VIDEO_OUT: "video_out",
        AUDIO_OUT: "audio_out",
        VIDEO_IN: "video_in",
        AUDIO_IN: "audio_in",
        MULTIZONE_GROUP: "multizone_group"
    };
    p("chrome.cast.Capability", chrome.cast.Da, void 0);
    chrome.cast.u = {
        CANCEL: "cancel",
        TIMEOUT: "timeout",
        API_NOT_INITIALIZED: "api_not_initialized",
        INVALID_PARAMETER: "invalid_parameter",
        EXTENSION_NOT_COMPATIBLE: "extension_not_compatible",
        EXTENSION_MISSING: "extension_missing",
        RECEIVER_UNAVAILABLE: "receiver_unavailable",
        SESSION_ERROR: "session_error",
        CHANNEL_ERROR: "channel_error",
        LOAD_MEDIA_FAILED: "load_media_failed"
    };
    p("chrome.cast.ErrorCode", chrome.cast.u, void 0);
    chrome.cast.ia = {
        AVAILABLE: "available",
        UNAVAILABLE: "unavailable"
    };
    p("chrome.cast.ReceiverAvailability", chrome.cast.ia, void 0);
    chrome.cast.yc = {
        CHROME: "chrome",
        IOS: "ios",
        ANDROID: "android"
    };
    p("chrome.cast.SenderPlatform", chrome.cast.yc, void 0);
    chrome.cast.ob = {
        CAST: "cast",
        DIAL: "dial",
        HANGOUT: "hangout",
        CUSTOM: "custom"
    };
    p("chrome.cast.ReceiverType", chrome.cast.ob, void 0);
    chrome.cast.bc = {
        RUNNING: "running",
        STOPPED: "stopped",
        ERROR: "error"
    };
    p("chrome.cast.DialAppState", chrome.cast.bc, void 0);
    chrome.cast.tc = {
        CAST: "cast",
        STOP: "stop"
    };
    p("chrome.cast.ReceiverAction", chrome.cast.tc, void 0);
    chrome.cast.U = {
        CONNECTED: "connected",
        DISCONNECTED: "disconnected",
        STOPPED: "stopped"
    };
    p("chrome.cast.SessionStatus", chrome.cast.U, void 0);
    chrome.cast.Zb = function(a, b, c, d, f) {
        this.sessionRequest = a;
        this.sessionListener = b;
        this.receiverListener = c;
        this.autoJoinPolicy = d || chrome.cast.eb.TAB_AND_ORIGIN_SCOPED;
        this.defaultActionPolicy = f || chrome.cast.fb.CREATE_SESSION;
        this.customDialLaunchCallback = null;
        this.invisibleSender = !1;
        this.additionalSessionRequests = []
    }
    ;
    p("chrome.cast.ApiConfig", chrome.cast.Zb, void 0);
    chrome.cast.ec = function(a, b) {
        this.appName = a;
        this.launchParameter = b || null
    }
    ;
    p("chrome.cast.DialRequest", chrome.cast.ec, void 0);
    chrome.cast.cc = function(a, b, c) {
        this.receiver = a;
        this.appState = b;
        this.extraData = c || null
    }
    ;
    p("chrome.cast.DialLaunchData", chrome.cast.cc, void 0);
    chrome.cast.dc = function(a, b) {
        this.doLaunch = a;
        this.launchParameter = b || null
    }
    ;
    p("chrome.cast.DialLaunchResponse", chrome.cast.dc, void 0);
    chrome.cast.zc = function(a, b, c) {
        this.appId = a;
        this.capabilities = "array" == q(b) ? b : [chrome.cast.Da.VIDEO_OUT, chrome.cast.Da.AUDIO_OUT];
        this.requestSessionTimeout = c || chrome.cast.timeout.requestSession;
        this.dialRequest = this.language = null
    }
    ;
    p("chrome.cast.SessionRequest", chrome.cast.zc, void 0);
    chrome.cast.sc = function(a, b, c, d) {
        this.label = a;
        a = b;
        wa.test(a) && (-1 != a.indexOf("&") && (a = a.replace(qa, "&amp;")),
        -1 != a.indexOf("<") && (a = a.replace(ra, "&lt;")),
        -1 != a.indexOf(">") && (a = a.replace(sa, "&gt;")),
        -1 != a.indexOf('"') && (a = a.replace(ta, "&quot;")),
        -1 != a.indexOf("'") && (a = a.replace(ua, "&#39;")),
        -1 != a.indexOf("\x00") && (a = a.replace(va, "&#0;")));
        this.friendlyName = a;
        this.capabilities = c || [];
        this.volume = d || null;
        this.receiverType = chrome.cast.ob.CAST;
        this.displayStatus = this.isActiveInput = null
    }
    ;
    p("chrome.cast.Receiver", chrome.cast.sc, void 0);
    chrome.cast.uc = function(a, b) {
        this.statusText = a;
        this.appImages = b;
        this.showStop = null
    }
    ;
    p("chrome.cast.ReceiverDisplayStatus", chrome.cast.uc, void 0);
    chrome.cast.rb = function() {
        this.requestSession = 6E4;
        this.sendCustomMessage = this.setReceiverVolume = this.stopSession = this.leaveSession = 3E3
    }
    ;
    p("chrome.cast.Timeout", chrome.cast.rb, void 0);
    chrome.cast.timeout = new chrome.cast.rb;
    p("chrome.cast.timeout", chrome.cast.timeout, void 0);
    chrome.cast.Yb = "auto-join";
    chrome.cast.nc = "cast-session_";
    chrome.cast.media.jc = {
        PAUSE: "pause",
        SEEK: "seek",
        STREAM_VOLUME: "stream_volume",
        STREAM_MUTE: "stream_mute"
    };
    p("chrome.cast.media.MediaCommand", chrome.cast.media.jc, void 0);
    chrome.cast.media.s = {
        GENERIC: 0,
        MOVIE: 1,
        TV_SHOW: 2,
        MUSIC_TRACK: 3,
        PHOTO: 4
    };
    p("chrome.cast.media.MetadataType", chrome.cast.media.s, void 0);
    chrome.cast.media.T = {
        IDLE: "IDLE",
        PLAYING: "PLAYING",
        PAUSED: "PAUSED",
        BUFFERING: "BUFFERING"
    };
    p("chrome.cast.media.PlayerState", chrome.cast.media.T, void 0);
    chrome.cast.media.Ea = {
        OFF: "REPEAT_OFF",
        ALL: "REPEAT_ALL",
        SINGLE: "REPEAT_SINGLE",
        ALL_AND_SHUFFLE: "REPEAT_ALL_AND_SHUFFLE"
    };
    p("chrome.cast.media.RepeatMode", chrome.cast.media.Ea, void 0);
    chrome.cast.media.vc = {
        PLAYBACK_START: "PLAYBACK_START",
        PLAYBACK_PAUSE: "PLAYBACK_PAUSE"
    };
    p("chrome.cast.media.ResumeState", chrome.cast.media.vc, void 0);
    chrome.cast.media.qb = {
        BUFFERED: "BUFFERED",
        LIVE: "LIVE",
        OTHER: "OTHER"
    };
    p("chrome.cast.media.StreamType", chrome.cast.media.qb, void 0);
    chrome.cast.media.hc = {
        CANCELLED: "CANCELLED",
        INTERRUPTED: "INTERRUPTED",
        FINISHED: "FINISHED",
        ERROR: "ERROR"
    };
    p("chrome.cast.media.IdleReason", chrome.cast.media.hc, void 0);
    chrome.cast.media.Hc = {
        TEXT: "TEXT",
        AUDIO: "AUDIO",
        VIDEO: "VIDEO"
    };
    p("chrome.cast.media.TrackType", chrome.cast.media.Hc, void 0);
    chrome.cast.media.Ec = {
        SUBTITLES: "SUBTITLES",
        CAPTIONS: "CAPTIONS",
        DESCRIPTIONS: "DESCRIPTIONS",
        CHAPTERS: "CHAPTERS",
        METADATA: "METADATA"
    };
    p("chrome.cast.media.TextTrackType", chrome.cast.media.Ec, void 0);
    chrome.cast.media.Ac = {
        NONE: "NONE",
        OUTLINE: "OUTLINE",
        DROP_SHADOW: "DROP_SHADOW",
        RAISED: "RAISED",
        DEPRESSED: "DEPRESSED"
    };
    p("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.Ac, void 0);
    chrome.cast.media.Fc = {
        NONE: "NONE",
        NORMAL: "NORMAL",
        ROUNDED_CORNERS: "ROUNDED_CORNERS"
    };
    p("chrome.cast.media.TextTrackWindowType", chrome.cast.media.Fc, void 0);
    chrome.cast.media.Bc = {
        SANS_SERIF: "SANS_SERIF",
        MONOSPACED_SANS_SERIF: "MONOSPACED_SANS_SERIF",
        SERIF: "SERIF",
        MONOSPACED_SERIF: "MONOSPACED_SERIF",
        CASUAL: "CASUAL",
        CURSIVE: "CURSIVE",
        SMALL_CAPITALS: "SMALL_CAPITALS"
    };
    p("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.Bc, void 0);
    chrome.cast.media.Cc = {
        NORMAL: "NORMAL",
        BOLD: "BOLD",
        BOLD_ITALIC: "BOLD_ITALIC",
        ITALIC: "ITALIC"
    };
    p("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.Cc, void 0);
    chrome.cast.media.gb = function() {
        this.customData = null
    }
    ;
    p("chrome.cast.media.GetStatusRequest", chrome.cast.media.gb, void 0);
    chrome.cast.media.hb = function() {
        this.customData = null
    }
    ;
    p("chrome.cast.media.PauseRequest", chrome.cast.media.hb, void 0);
    chrome.cast.media.ib = function() {
        this.customData = null
    }
    ;
    p("chrome.cast.media.PlayRequest", chrome.cast.media.ib, void 0);
    chrome.cast.media.wc = function() {
        this.customData = this.resumeState = this.currentTime = null
    }
    ;
    p("chrome.cast.media.SeekRequest", chrome.cast.media.wc, void 0);
    chrome.cast.media.pb = function() {
        this.customData = null
    }
    ;
    p("chrome.cast.media.StopRequest", chrome.cast.media.pb, void 0);
    chrome.cast.media.Jc = function(a) {
        this.volume = a;
        this.customData = null
    }
    ;
    p("chrome.cast.media.VolumeRequest", chrome.cast.media.Jc, void 0);
    chrome.cast.media.ic = function(a) {
        this.type = "LOAD";
        this.requestId = 0;
        this.sessionId = null;
        this.media = a;
        this.activeTrackIds = null;
        this.autoplay = !0;
        this.customData = this.currentTime = null
    }
    ;
    p("chrome.cast.media.LoadRequest", chrome.cast.media.ic, void 0);
    chrome.cast.media.pc = function(a) {
        this.type = "PRECACHE";
        this.requestId = 0;
        this.data = a
    }
    ;
    chrome.cast.media.fc = function(a, b) {
        this.requestId = 0;
        this.activeTrackIds = a || null;
        this.textTrackStyle = b || null
    }
    ;
    p("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.fc, void 0);
    chrome.cast.media.gc = function() {
        this.metadataType = this.type = chrome.cast.media.s.GENERIC;
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null
    }
    ;
    p("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.gc, void 0);
    chrome.cast.media.lc = function() {
        this.metadataType = this.type = chrome.cast.media.s.MOVIE;
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null
    }
    ;
    p("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.lc, void 0);
    chrome.cast.media.Ic = function() {
        this.metadataType = this.type = chrome.cast.media.s.TV_SHOW;
        this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null
    }
    ;
    p("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.Ic, void 0);
    chrome.cast.media.mc = function() {
        this.metadataType = this.type = chrome.cast.media.s.MUSIC_TRACK;
        this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null
    }
    ;
    p("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.mc, void 0);
    chrome.cast.media.oc = function() {
        this.metadataType = this.type = chrome.cast.media.s.PHOTO;
        this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null
    }
    ;
    p("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.oc, void 0);
    chrome.cast.media.kc = function(a, b) {
        this.contentId = a;
        this.streamType = chrome.cast.media.qb.BUFFERED;
        this.contentType = b;
        this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null
    }
    ;
    p("chrome.cast.media.MediaInfo", chrome.cast.media.kc, void 0);
    chrome.cast.media.kb = function(a) {
        this.itemId = null;
        this.media = a;
        this.autoplay = !0;
        this.startTime = 0;
        this.playbackDuration = null;
        this.preloadTime = 0;
        this.customData = this.activeTrackIds = null
    }
    ;
    p("chrome.cast.media.QueueItem", chrome.cast.media.kb, void 0);
    chrome.cast.media.ac = "CC1AD845";
    p("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.ac, void 0);
    chrome.cast.media.timeout = {};
    p("chrome.cast.media.timeout", chrome.cast.media.timeout, void 0);
    chrome.cast.media.timeout.load = 0;
    chrome.cast.media.timeout.load = chrome.cast.media.timeout.load;
    chrome.cast.media.timeout.na = 0;
    chrome.cast.media.timeout.getStatus = chrome.cast.media.timeout.na;
    chrome.cast.media.timeout.play = 0;
    chrome.cast.media.timeout.play = chrome.cast.media.timeout.play;
    chrome.cast.media.timeout.pause = 0;
    chrome.cast.media.timeout.pause = chrome.cast.media.timeout.pause;
    chrome.cast.media.timeout.seek = 0;
    chrome.cast.media.timeout.seek = chrome.cast.media.timeout.seek;
    chrome.cast.media.timeout.stop = 0;
    chrome.cast.media.timeout.stop = chrome.cast.media.timeout.stop;
    chrome.cast.media.timeout.Ca = 0;
    chrome.cast.media.timeout.setVolume = chrome.cast.media.timeout.Ca;
    chrome.cast.media.timeout.la = 0;
    chrome.cast.media.timeout.editTracksInfo = chrome.cast.media.timeout.la;
    chrome.cast.media.timeout.o = 0;
    chrome.cast.media.timeout.queue = chrome.cast.media.timeout.o;
    chrome.cast.media.Gc = function(a, b) {
        this.trackId = a;
        this.trackContentType = this.trackContentId = null;
        this.type = b;
        this.customData = this.subtype = this.language = this.name = null
    }
    ;
    p("chrome.cast.media.Track", chrome.cast.media.Gc, void 0);
    chrome.cast.media.Dc = function() {
        this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null
    }
    ;
    p("chrome.cast.media.TextTrackStyle", chrome.cast.media.Dc, void 0);
    chrome.cast.media.qc = function(a) {
        this.type = "QUEUE_LOAD";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.startIndex = 0;
        this.repeatMode = chrome.cast.media.Ea.OFF;
        this.customData = null
    }
    ;
    p("chrome.cast.media.QueueLoadRequest", chrome.cast.media.qc, void 0);
    chrome.cast.media.jb = function(a) {
        this.type = "QUEUE_INSERT";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.customData = this.insertBefore = null
    }
    ;
    p("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.jb, void 0);
    chrome.cast.media.rc = function(a) {
        this.type = "QUEUE_UPDATE";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.customData = null
    }
    ;
    p("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.rc, void 0);
    chrome.cast.media.ha = function() {
        this.type = "QUEUE_UPDATE";
        this.customData = this.jump = this.currentItemId = this.sessionId = this.requestId = null
    }
    ;
    p("chrome.cast.media.QueueJumpRequest", chrome.cast.media.ha, void 0);
    chrome.cast.media.nb = function() {
        this.type = "QUEUE_UPDATE";
        this.customData = this.repeatMode = this.sessionId = this.requestId = null
    }
    ;
    p("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.nb, void 0);
    chrome.cast.media.lb = function(a) {
        this.type = "QUEUE_REMOVE";
        this.sessionId = this.requestId = null;
        this.itemIds = a;
        this.customData = null
    }
    ;
    p("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.lb, void 0);
    chrome.cast.media.mb = function(a) {
        this.type = "QUEUE_REORDER";
        this.sessionId = this.requestId = null;
        this.itemIds = a;
        this.customData = this.insertBefore = null
    }
    ;
    p("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.mb, void 0);
    var x = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, f = t(a) ? a.split("") : a, g = 0; g < d; g++)
            g in f && b.call(c, f[g], g, a)
    }
      , Aa = function(a, b, c) {
        for (var d = a.length, f = t(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in f && b.call(c, f[g], g, a))
                return g;
        return -1
    }
      , Ba = function(a) {
        return Array.prototype.concat.apply([], arguments)
    }
      , Ca = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    };
    chrome.cast.media.a = function(a, b) {
        this.sessionId = a;
        this.mediaSessionId = b;
        this.media = null;
        this.playbackRate = 1;
        this.playerState = chrome.cast.media.T.IDLE;
        this.currentTime = 0;
        this.Qa = -1;
        this.supportedMediaCommands = [];
        this.volume = new chrome.cast.Volume;
        this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
        this.repeatMode = chrome.cast.media.Ea.OFF;
        this.oa = !1;
        this.ea = []
    }
    ;
    p("chrome.cast.media.Media", chrome.cast.media.a, void 0);
    chrome.cast.media.a.prototype.na = function(a, b, c) {
        a || (a = new chrome.cast.media.gb);
        y.i(this, "MEDIA_GET_STATUS", a, b, c, chrome.cast.media.timeout.na)
    }
    ;
    chrome.cast.media.a.prototype.getStatus = chrome.cast.media.a.prototype.na;
    chrome.cast.media.a.prototype.play = function(a, b, c) {
        this.Ib(y, a, b, c)
    }
    ;
    chrome.cast.media.a.prototype.play = chrome.cast.media.a.prototype.play;
    chrome.cast.media.a.prototype.Ib = function(a, b, c, d) {
        b || (b = new chrome.cast.media.ib);
        a.i(this, "PLAY", b, c, d, chrome.cast.media.timeout.play)
    }
    ;
    chrome.cast.media.a.prototype.playWithContext = chrome.cast.media.a.prototype.Ib;
    chrome.cast.media.a.prototype.pause = function(a, b, c) {
        this.Hb(y, a, b, c)
    }
    ;
    chrome.cast.media.a.prototype.pause = chrome.cast.media.a.prototype.pause;
    chrome.cast.media.a.prototype.Hb = function(a, b, c, d) {
        b || (b = new chrome.cast.media.hb);
        a.i(this, "PAUSE", b, c, d, chrome.cast.media.timeout.pause)
    }
    ;
    chrome.cast.media.a.prototype.pauseWithContext = chrome.cast.media.a.prototype.Hb;
    chrome.cast.media.a.prototype.seek = function(a, b, c) {
        y.i(this, "SEEK", a, b, c, chrome.cast.media.timeout.seek)
    }
    ;
    chrome.cast.media.a.prototype.seek = chrome.cast.media.a.prototype.seek;
    chrome.cast.media.a.prototype.stop = function(a, b, c) {
        a || (a = new chrome.cast.media.pb);
        y.i(this, "STOP_MEDIA", a, b, c, chrome.cast.media.timeout.stop)
    }
    ;
    chrome.cast.media.a.prototype.stop = chrome.cast.media.a.prototype.stop;
    chrome.cast.media.a.prototype.Ca = function(a, b, c) {
        y.i(this, "MEDIA_SET_VOLUME", a, b, c, chrome.cast.media.timeout.Ca)
    }
    ;
    chrome.cast.media.a.prototype.setVolume = chrome.cast.media.a.prototype.Ca;
    chrome.cast.media.a.prototype.la = function(a, b, c) {
        y.i(this, "EDIT_TRACKS_INFO", a, b, c, chrome.cast.media.timeout.la)
    }
    ;
    chrome.cast.media.a.prototype.editTracksInfo = chrome.cast.media.a.prototype.la;
    chrome.cast.media.a.prototype.Ed = function(a, b, c) {
        y.i(this, "QUEUE_INSERT", a, b, c, chrome.cast.media.timeout.o)
    }
    ;
    chrome.cast.media.a.prototype.queueInsertItems = chrome.cast.media.a.prototype.Ed;
    chrome.cast.media.a.prototype.Dd = function(a, b, c) {
        y.i(this, "QUEUE_INSERT", new chrome.cast.media.jb([a]), b, c, chrome.cast.media.timeout.o)
    }
    ;
    chrome.cast.media.a.prototype.queueAppendItem = chrome.cast.media.a.prototype.Dd;
    chrome.cast.media.a.prototype.Od = function(a, b, c) {
        y.i(this, "QUEUE_UPDATE", a, b, c, chrome.cast.media.timeout.o)
    }
    ;
    chrome.cast.media.a.prototype.queueUpdateItems = chrome.cast.media.a.prototype.Od;
    chrome.cast.media.a.prototype.Jd = function(a, b) {
        var c = new chrome.cast.media.ha;
        c.jump = -1;
        y.i(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.o)
    }
    ;
    chrome.cast.media.a.prototype.queuePrev = chrome.cast.media.a.prototype.Jd;
    chrome.cast.media.a.prototype.Id = function(a, b) {
        var c = new chrome.cast.media.ha;
        c.jump = 1;
        y.i(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.o)
    }
    ;
    chrome.cast.media.a.prototype.queueNext = chrome.cast.media.a.prototype.Id;
    chrome.cast.media.a.prototype.Fd = function(a, b, c) {
        if (!(0 > this.Oa(a))) {
            var d = new chrome.cast.media.ha;
            d.currentItemId = a;
            y.i(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.o)
        }
    }
    ;
    chrome.cast.media.a.prototype.queueJumpToItem = chrome.cast.media.a.prototype.Fd;
    chrome.cast.media.a.prototype.Nd = function(a, b, c) {
        var d = new chrome.cast.media.nb;
        d.repeatMode = a;
        y.i(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.o)
    }
    ;
    chrome.cast.media.a.prototype.queueSetRepeatMode = chrome.cast.media.a.prototype.Nd;
    chrome.cast.media.a.prototype.Ld = function(a, b, c) {
        y.i(this, "QUEUE_REMOVE", a, b, c, chrome.cast.media.timeout.o)
    }
    ;
    chrome.cast.media.a.prototype.queueRemoveItems = chrome.cast.media.a.prototype.Ld;
    chrome.cast.media.a.prototype.Kd = function(a, b, c) {
        0 > this.Oa(a) || y.i(this, "QUEUE_REMOVE", new chrome.cast.media.lb([a]), b, c, chrome.cast.media.timeout.o)
    }
    ;
    chrome.cast.media.a.prototype.queueRemoveItem = chrome.cast.media.a.prototype.Kd;
    chrome.cast.media.a.prototype.Md = function(a, b, c) {
        y.i(this, "QUEUE_REORDER", a, b, c, chrome.cast.media.timeout.o)
    }
    ;
    chrome.cast.media.a.prototype.queueReorderItems = chrome.cast.media.a.prototype.Md;
    chrome.cast.media.a.prototype.Hd = function(a, b, c, d) {
        var f = this.Oa(a);
        if (!(0 > f))
            if (0 > b)
                d && d(new chrome.cast.Error(chrome.cast.u.INVALID_PARAMETER));
            else if (f == b)
                c && c();
            else {
                var g = null;
                b = b > f ? b + 1 : b;
                b < this.items.length && (g = this.items[b]);
                a = new chrome.cast.media.mb([a]);
                a.insertBefore = g ? g.itemId : null;
                y.i(this, "QUEUE_REORDER", a, c, d, chrome.cast.media.timeout.o)
            }
    }
    ;
    chrome.cast.media.a.prototype.queueMoveItemToNewIndex = chrome.cast.media.a.prototype.Hd;
    chrome.cast.media.a.prototype.de = function(a) {
        return -1 < this.supportedMediaCommands.indexOf(a)
    }
    ;
    chrome.cast.media.a.prototype.supportsCommand = chrome.cast.media.a.prototype.de;
    chrome.cast.media.a.prototype.Xc = function() {
        if (this.playerState == chrome.cast.media.T.PLAYING && 0 <= this.Qa) {
            var a = this.currentTime + (Date.now() - this.Qa) / 1E3 * this.playbackRate;
            this.media && null != this.media.duration && a > this.media.duration && (a = this.media.duration);
            0 > a && (a = 0);
            return a
        }
        return this.currentTime
    }
    ;
    chrome.cast.media.a.prototype.getEstimatedTime = chrome.cast.media.a.prototype.Xc;
    chrome.cast.media.a.prototype.Ha = function(a) {
        this.V(y, a)
    }
    ;
    chrome.cast.media.a.prototype.addUpdateListener = chrome.cast.media.a.prototype.Ha;
    chrome.cast.media.a.prototype.V = function(a, b) {
        a.Lc(this, b)
    }
    ;
    chrome.cast.media.a.prototype.addUpdateListenerWithContext = chrome.cast.media.a.prototype.V;
    chrome.cast.media.a.prototype.Ta = function(a) {
        this.ba(y, a)
    }
    ;
    chrome.cast.media.a.prototype.removeUpdateListener = chrome.cast.media.a.prototype.Ta;
    chrome.cast.media.a.prototype.ba = function(a, b) {
        y.Rd(this, b)
    }
    ;
    chrome.cast.media.a.prototype.removeUpdateListenerWithContext = chrome.cast.media.a.prototype.ba;
    chrome.cast.media.a.prototype.Oa = function(a) {
        return Aa(this.items, function(b) {
            return b.itemId == a
        })
    }
    ;
    var y = null;
    var Da = function(a, b, c) {
        this.sessionId = a;
        this.namespaceName = b;
        this.message = c
    };
    var Ea = function(a, b) {
        this.type = "SET_VOLUME";
        this.requestId = 0;
        this.volume = a;
        this.expectedVolume = b || null
    };
    var Fa = function(a) {
        this.type = "STOP";
        this.requestId = 0;
        this.sessionId = a || null
    };
    chrome.cast.b = function(a, b, c, d, f) {
        this.sessionId = a;
        this.appId = b;
        this.displayName = c;
        this.statusText = null;
        this.appImages = d;
        this.receiver = f;
        this.senderApps = [];
        this.namespaces = [];
        this.media = [];
        this.status = chrome.cast.U.CONNECTED;
        this.transportId = ""
    }
    ;
    p("chrome.cast.Session", chrome.cast.b, void 0);
    chrome.cast.b.prototype.ae = function(a, b, c) {
        this.Ub(y, a, b, c)
    }
    ;
    chrome.cast.b.prototype.setReceiverVolumeLevel = chrome.cast.b.prototype.ae;
    chrome.cast.b.prototype.Ub = function(a, b, c, d) {
        b = new Ea(new chrome.cast.Volume(b,null),this.receiver.volume);
        a.setReceiverVolume(this.sessionId, b, c, d)
    }
    ;
    chrome.cast.b.prototype.setReceiverVolumeLevelWithContext = chrome.cast.b.prototype.Ub;
    chrome.cast.b.prototype.Zd = function(a, b, c) {
        this.Tb(y, a, b, c)
    }
    ;
    chrome.cast.b.prototype.setReceiverMuted = chrome.cast.b.prototype.Zd;
    chrome.cast.b.prototype.Tb = function(a, b, c, d) {
        a = new Ea(new chrome.cast.Volume(null,b),this.receiver.volume);
        y.setReceiverVolume(this.sessionId, a, c, d)
    }
    ;
    chrome.cast.b.prototype.setReceiverMutedWithContext = chrome.cast.b.prototype.Tb;
    chrome.cast.b.prototype.kd = function(a, b) {
        y.leaveSession(this.sessionId, a, b)
    }
    ;
    chrome.cast.b.prototype.leave = chrome.cast.b.prototype.kd;
    chrome.cast.b.prototype.stop = function(a, b) {
        this.Wb(y, a, b)
    }
    ;
    chrome.cast.b.prototype.stop = chrome.cast.b.prototype.stop;
    chrome.cast.b.prototype.Wb = function(a, b, c) {
        a.Pb(new Fa(this.sessionId), b, c, chrome.cast.timeout.stopSession)
    }
    ;
    chrome.cast.b.prototype.stopWithContext = chrome.cast.b.prototype.Wb;
    chrome.cast.b.prototype.sendMessage = function(a, b, c, d) {
        this.Rb(y, a, b, c, d)
    }
    ;
    chrome.cast.b.prototype.sendMessage = chrome.cast.b.prototype.sendMessage;
    chrome.cast.b.prototype.Rb = function(a, b, c, d, f) {
        a.Vd(new Da(this.sessionId,b,c), d, f)
    }
    ;
    chrome.cast.b.prototype.sendMessageWithContext = chrome.cast.b.prototype.Rb;
    chrome.cast.b.prototype.Ha = function(a) {
        this.V(y, a)
    }
    ;
    chrome.cast.b.prototype.addUpdateListener = chrome.cast.b.prototype.Ha;
    chrome.cast.b.prototype.V = function(a, b) {
        a.Oc(this.sessionId, b)
    }
    ;
    chrome.cast.b.prototype.addUpdateListenerWithContext = chrome.cast.b.prototype.V;
    chrome.cast.b.prototype.Ta = function(a) {
        this.ba(y, a)
    }
    ;
    chrome.cast.b.prototype.removeUpdateListener = chrome.cast.b.prototype.Ta;
    chrome.cast.b.prototype.ba = function(a, b) {
        a.Ud(this.sessionId, b)
    }
    ;
    chrome.cast.b.prototype.removeUpdateListenerWithContext = chrome.cast.b.prototype.ba;
    chrome.cast.b.prototype.Mc = function(a, b) {
        this.tb(y, a, b)
    }
    ;
    chrome.cast.b.prototype.addMessageListener = chrome.cast.b.prototype.Mc;
    chrome.cast.b.prototype.tb = function(a, b, c) {
        a.Kc(this.sessionId, b, c)
    }
    ;
    chrome.cast.b.prototype.addMessageListenerWithContext = chrome.cast.b.prototype.tb;
    chrome.cast.b.prototype.Fa = function(a) {
        this.sb(y, a)
    }
    ;
    chrome.cast.b.prototype.addMediaListener = chrome.cast.b.prototype.Fa;
    chrome.cast.b.prototype.sb = function(a, b) {
        a.Fa(this.sessionId, b)
    }
    ;
    chrome.cast.b.prototype.addMediaListenerWithContext = chrome.cast.b.prototype.sb;
    chrome.cast.b.prototype.Ra = function(a) {
        this.Kb(y, a)
    }
    ;
    chrome.cast.b.prototype.removeMediaListener = chrome.cast.b.prototype.Ra;
    chrome.cast.b.prototype.Kb = function(a, b) {
        a.Ra(this.sessionId, b)
    }
    ;
    chrome.cast.b.prototype.removeMediaListenerWithContext = chrome.cast.b.prototype.Kb;
    chrome.cast.b.prototype.Sd = function(a, b) {
        this.Lb(y, a, b)
    }
    ;
    chrome.cast.b.prototype.removeMessageListener = chrome.cast.b.prototype.Sd;
    chrome.cast.b.prototype.Lb = function(a, b, c) {
        a.Pd(this.sessionId, b, c)
    }
    ;
    chrome.cast.b.prototype.removeMessageListenerWithContext = chrome.cast.b.prototype.Lb;
    chrome.cast.b.prototype.md = function(a, b, c) {
        a.sessionId = this.sessionId;
        y.Qb(a, "LOAD", b, c)
    }
    ;
    chrome.cast.b.prototype.loadMedia = chrome.cast.b.prototype.md;
    chrome.cast.b.prototype.Gd = function(a, b, c) {
        a.sessionId = this.sessionId;
        y.Qb(a, "QUEUE_LOAD", b, c)
    }
    ;
    chrome.cast.b.prototype.queueLoad = chrome.cast.b.prototype.Gd;
    var Ga = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
      , Ha = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    };
    var z = "StopIteration"in n ? n.StopIteration : {
        message: "StopIteration",
        stack: ""
    }
      , A = function() {};
    A.prototype.next = function() {
        throw z;
    }
    ;
    A.prototype.v = function() {
        return this
    }
    ;
    var Ia = function(a) {
        if (a instanceof A)
            return a;
        if ("function" == typeof a.v)
            return a.v(!1);
        if (r(a)) {
            var b = 0
              , c = new A;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        throw z;
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
      , B = function(a, b, c) {
        if (r(a))
            try {
                x(a, b, c)
            } catch (d) {
                if (d !== z)
                    throw d;
            }
        else {
            a = Ia(a);
            try {
                for (; ; )
                    b.call(c, a.next(), void 0, a)
            } catch (d) {
                if (d !== z)
                    throw d;
            }
        }
    };
    var C = function(a, b) {
        this.h = {};
        this.g = [];
        this.ga = this.f = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else
            a && this.addAll(a)
    };
    e = C.prototype;
    e.l = function() {
        this.ja();
        for (var a = [], b = 0; b < this.g.length; b++)
            a.push(this.h[this.g[b]]);
        return a
    }
    ;
    e.B = function() {
        this.ja();
        return this.g.concat()
    }
    ;
    e.M = function(a) {
        return D(this.h, a)
    }
    ;
    e.clear = function() {
        this.h = {};
        this.ga = this.f = this.g.length = 0
    }
    ;
    e.remove = function(a) {
        return D(this.h, a) ? (delete this.h[a],
        this.f--,
        this.ga++,
        this.g.length > 2 * this.f && this.ja(),
        !0) : !1
    }
    ;
    e.ja = function() {
        if (this.f != this.g.length) {
            for (var a = 0, b = 0; a < this.g.length; ) {
                var c = this.g[a];
                D(this.h, c) && (this.g[b++] = c);
                a++
            }
            this.g.length = b
        }
        if (this.f != this.g.length) {
            for (var d = {}, b = a = 0; a < this.g.length; )
                c = this.g[a],
                D(d, c) || (this.g[b++] = c,
                d[c] = 1),
                a++;
            this.g.length = b
        }
    }
    ;
    e.get = function(a, b) {
        return D(this.h, a) ? this.h[a] : b
    }
    ;
    e.set = function(a, b) {
        D(this.h, a) || (this.f++,
        this.g.push(a),
        this.ga++);
        this.h[a] = b
    }
    ;
    e.addAll = function(a) {
        var b;
        a instanceof C ? (b = a.B(),
        a = a.l()) : (b = Ha(a),
        a = Ga(a));
        for (var c = 0; c < b.length; c++)
            this.set(b[c], a[c])
    }
    ;
    e.forEach = function(a, b) {
        for (var c = this.B(), d = 0; d < c.length; d++) {
            var f = c[d]
              , g = this.get(f);
            a.call(b, g, f, this)
        }
    }
    ;
    e.clone = function() {
        return new C(this)
    }
    ;
    e.v = function(a) {
        this.ja();
        var b = 0
          , c = this.ga
          , d = this
          , f = new A;
        f.next = function() {
            if (c != d.ga)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length)
                throw z;
            var f = d.g[b++];
            return a ? f : d.h[f]
        }
        ;
        return f
    }
    ;
    var D = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Ja = function(a, b) {
        this.requestId = a;
        this.ee = b;
        this.Xb = null
    };
    Ja.prototype.Gb = function() {}
    ;
    var E = function() {
        this.ua = new C
    };
    E.prototype.Nc = function(a) {
        var b = this;
        this.ua.set(a.requestId, a);
        a.Xb = setTimeout(function() {
            return b.yd(a)
        }, a.ee)
    }
    ;
    E.prototype.Mb = function(a) {
        var b = this.ua.get(a);
        if (!b)
            return null;
        clearTimeout(b.Xb);
        this.ua.remove(a);
        return b
    }
    ;
    E.prototype.yd = function(a) {
        this.ua.remove(a.requestId);
        a.Gb()
    }
    ;
    var Ka = function(a) {
        this.pd = a
    }
      , Ma = function(a) {
        var b = La.get(a);
        b || (b = new Ka(a),
        La.set(a, b));
        return b
    };
    e = Ka.prototype;
    e.log = function(a, b, c) {
        if (1 <= a) {
            "function" == typeof b && (b = b());
            var d = {
                ke: this.pd,
                level: a,
                time: Date.now(),
                message: b,
                ie: c
            };
            Na.forEach(function(a) {
                return a(d)
            })
        }
    }
    ;
    e.error = function(a, b) {
        this.log(3, a, b)
    }
    ;
    e.ge = function(a, b) {
        this.log(2, a, b)
    }
    ;
    e.info = function(a, b) {
        this.log(1, a, b)
    }
    ;
    e.Db = function(a, b) {
        this.log(0, a, b)
    }
    ;
    var Na = []
      , La = new Map;
    var F = function() {
        this.La = this.La;
        this.td = this.td
    };
    F.prototype.La = !1;
    F.prototype.isDisposed = function() {
        return this.La
    }
    ;
    var Oa = function(a, b, c, d) {
        d = d ? d(b) : b;
        return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    };
    var G;
    a: {
        var Pa = n.navigator;
        if (Pa) {
            var Qa = Pa.userAgent;
            if (Qa) {
                G = Qa;
                break a
            }
        }
        G = ""
    }
    var H = function(a) {
        return -1 != G.indexOf(a)
    };
    var Ra = H("Opera"), I = H("Trident") || H("MSIE"), Sa = H("Edge"), J = H("Gecko") && !(-1 != G.toLowerCase().indexOf("webkit") && !H("Edge")) && !(H("Trident") || H("MSIE")) && !H("Edge"), K = -1 != G.toLowerCase().indexOf("webkit") && !H("Edge"), Ta;
    a: {
        var Ua = ""
          , Va = function() {
            var a = G;
            if (J)
                return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (Sa)
                return /Edge\/([\d\.]+)/.exec(a);
            if (I)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (K)
                return /WebKit\/(\S+)/.exec(a);
            if (Ra)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Va && (Ua = Va ? Va[1] : "");
        if (I) {
            var L, Wa = n.document;
            L = Wa ? Wa.documentMode : void 0;
            if (null != L && L > parseFloat(Ua)) {
                Ta = String(L);
                break a
            }
        }
        Ta = Ua
    }
    var Xa = Ta
      , Ya = {}
      , M = function(a) {
        return Oa(Ya, a, function() {
            for (var b = 0, c = pa(String(Xa)).split("."), d = pa(String(a)).split("."), f = Math.max(c.length, d.length), g = 0; 0 == b && g < f; g++) {
                var k = c[g] || ""
                  , m = d[g] || "";
                do {
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    m = /(\d*)(\D*)(.*)/.exec(m) || ["", "", "", ""];
                    if (0 == k[0].length && 0 == m[0].length)
                        break;
                    b = w(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || w(0 == k[2].length, 0 == m[2].length) || w(k[2], m[2]);
                    k = k[3];
                    m = m[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    };
    I && M("9");
    !K || M("528");
    J && M("1.9b") || I && M("8") || Ra && M("9.5") || K && M("528");
    J && !M("8") || I && M("9");
    var Za = function(a, b, c) {
        F.call(this);
        this.ld = null != c ? u(a, c) : a;
        this.ed = b;
        this.Ja = u(this.zd, this);
        this.Ia = []
    };
    oa(Za, F);
    e = Za.prototype;
    e.S = !1;
    e.aa = 0;
    e.J = null;
    e.Vc = function(a) {
        this.Ia = arguments;
        this.J || this.aa ? this.S = !0 : this.Ma()
    }
    ;
    e.stop = function() {
        this.J && (n.clearTimeout(this.J),
        this.J = null,
        this.S = !1,
        this.Ia = [])
    }
    ;
    e.pause = function() {
        this.aa++
    }
    ;
    e.resume = function() {
        this.aa--;
        this.aa || !this.S || this.J || (this.S = !1,
        this.Ma())
    }
    ;
    e.zd = function() {
        this.J = null;
        this.S && !this.aa && (this.S = !1,
        this.Ma())
    }
    ;
    e.Ma = function() {
        var a = this.Ja
          , b = this.ed;
        if ("function" != q(a))
            if (a && "function" == typeof a.handleEvent)
                a = u(a.handleEvent, a);
            else
                throw Error("Invalid listener argument");
        this.J = 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0);
        this.ld.apply(null, this.Ia)
    }
    ;
    var $a = H("Safari") && !((H("Chrome") || H("CriOS")) && !H("Edge") || H("Coast") || H("Opera") || H("Edge") || H("Silk") || H("Android")) && !(H("iPhone") && !H("iPod") && !H("iPad") || H("iPad") || H("iPod"));
    var N = null
      , ab = null
      , bb = J || K && !$a || Ra || "function" == typeof n.btoa
      , cb = function(a, b) {
        var c;
        if (bb && !b)
            c = n.btoa(a);
        else {
            c = [];
            for (var d = 0, f = 0; f < a.length; f++) {
                for (var g = a.charCodeAt(f); 255 < g; )
                    c[d++] = g & 255,
                    g >>= 8;
                c[d++] = g
            }
            if (!N)
                for (N = {},
                ab = {},
                a = 0; 65 > a; a++)
                    N[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
                    ab[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a);
            b = b ? ab : N;
            a = [];
            for (d = 0; d < c.length; d += 3) {
                var k = c[d]
                  , m = (f = d + 1 < c.length) ? c[d + 1] : 0
                  , v = (g = d + 2 < c.length) ? c[d + 2] : 0
                  , ha = k >> 2
                  , k = (k & 3) << 4 | m >> 4
                  , m = (m & 15) << 2 | v >> 6
                  , v = v & 63;
                g || (v = 64,
                f || (m = 64));
                a.push(b[ha], b[k], b[m], b[v])
            }
            c = a.join("")
        }
        return c
    };
    var db = function(a) {
        if (a.l && "function" == typeof a.l)
            return a.l();
        if (t(a))
            return a.split("");
        if (r(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        return Ga(a)
    }
      , eb = function(a, b, c) {
        if (a.forEach && "function" == typeof a.forEach)
            a.forEach(b, c);
        else if (r(a) || t(a))
            x(a, b, c);
        else {
            var d;
            if (a.B && "function" == typeof a.B)
                d = a.B();
            else if (a.l && "function" == typeof a.l)
                d = void 0;
            else if (r(a) || t(a)) {
                d = [];
                for (var f = a.length, g = 0; g < f; g++)
                    d.push(g)
            } else
                d = Ha(a);
            for (var f = db(a), g = f.length, k = 0; k < g; k++)
                b.call(c, f[k], d && d[k], a)
        }
    };
    var O = function(a) {
        this.h = new C;
        a && this.addAll(a)
    }
      , fb = function(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + (a[ka] || (a[ka] = ++la)) : b.substr(0, 1) + a
    };
    e = O.prototype;
    e.add = function(a) {
        this.h.set(fb(a), a)
    }
    ;
    e.addAll = function(a) {
        a = db(a);
        for (var b = a.length, c = 0; c < b; c++)
            this.add(a[c])
    }
    ;
    e.removeAll = function(a) {
        a = db(a);
        for (var b = a.length, c = 0; c < b; c++)
            this.remove(a[c])
    }
    ;
    e.remove = function(a) {
        return this.h.remove(fb(a))
    }
    ;
    e.clear = function() {
        this.h.clear()
    }
    ;
    e.contains = function(a) {
        return this.h.M(fb(a))
    }
    ;
    e.l = function() {
        return this.h.l()
    }
    ;
    e.clone = function() {
        return new O(this)
    }
    ;
    e.v = function() {
        return this.h.v(!1)
    }
    ;
    var gb = function(a, b, c, d) {
        Ja.call(this, a, d || 6E5);
        this.ce = b;
        this.Na = c
    };
    aa(gb, Ja);
    gb.prototype.Gb = function() {
        this.Na(new chrome.cast.Error(chrome.cast.u.TIMEOUT))
    }
    ;
    var P = function(a, b, c, d) {
        this.type = a;
        this.message = b;
        this.sequenceNumber = void 0 !== c ? c : -1;
        this.timeoutMillis = d || 0;
        this.clientId = ""
    };
    var Q = function(a, b) {
        this.Ja = a;
        this.D = b || String(Date.now()) + String(Math.floor(1E5 * Math.random()));
        this.L = null
    };
    Q.prototype.Sb = function(a) {
        if (!this.L)
            return R.error("No active session"),
            "No active session";
        a.clientId = this.D;
        a = JSON.stringify(a);
        if (32768 < a.length)
            return R.error("Message length over limit"),
            "Message length over limit";
        R.Db("Send " + a);
        this.L.send(a);
        return null
    }
    ;
    Q.prototype.connect = function(a) {
        this.L = a;
        this.L.onmessage = u(this.ud, this);
        this.Sb(new P("client_connect",this.D))
    }
    ;
    Q.prototype.disconnect = function() {
        this.L.close();
        this.L = null
    }
    ;
    Q.prototype.ud = function(a) {
        R.Db("Receive " + a.data);
        a = JSON.parse(a.data);
        if (a.clientId == this.D)
            this.Ja.onMessage(a)
    }
    ;
    var R = Ma("mr.cast.ExtensionMessenger");
    var hb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
      , ib = function(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="), f, g = null;
                0 <= d ? (f = a[c].substring(0, d),
                g = a[c].substring(d + 1)) : f = a[c];
                b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
            }
        }
    };
    var S = function(a, b) {
        this.X = this.fa = this.C = "";
        this.P = null;
        this.Z = this.H = "";
        this.m = this.jd = !1;
        var c;
        a instanceof S ? (this.m = void 0 !== b ? b : a.m,
        this.Ba(a.C),
        this.bb(a.fa),
        this.ya(a.X),
        this.Za(a.P),
        this.Aa(a.H),
        this.ab(a.w.clone()),
        this.za(a.Z)) : a && (c = String(a).match(hb)) ? (this.m = !!b,
        this.Ba(c[1] || "", !0),
        this.bb(c[2] || "", !0),
        this.ya(c[3] || "", !0),
        this.Za(c[4]),
        this.Aa(c[5] || "", !0),
        this.ab(c[6] || "", !0),
        this.za(c[7] || "", !0)) : (this.m = !!b,
        this.w = new T(null,null,this.m))
    };
    e = S.prototype;
    e.toString = function() {
        var a = []
          , b = this.C;
        b && a.push(U(b, jb, !0), ":");
        var c = this.X;
        if (c || "file" == b)
            a.push("//"),
            (b = this.fa) && a.push(U(b, jb, !0), "@"),
            a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.P,
            null != c && a.push(":", String(c));
        if (c = this.H)
            this.Pa() && "/" != c.charAt(0) && a.push("/"),
            a.push(U(c, "/" == c.charAt(0) ? kb : lb, !0));
        (c = this.Wc()) && a.push("?", c);
        (c = this.Z) && a.push("#", U(c, mb));
        return a.join("")
    }
    ;
    e.resolve = function(a) {
        var b = this.clone()
          , c = a.bd();
        c ? b.Ba(a.C) : c = a.cd();
        c ? b.bb(a.fa) : c = a.Pa();
        c ? b.ya(a.X) : c = a.Zc();
        var d = a.H;
        if (c)
            b.Za(a.P);
        else if (c = a.Eb()) {
            if ("/" != d.charAt(0))
                if (this.Pa() && !this.Eb())
                    d = "/" + d;
                else {
                    var f = b.H.lastIndexOf("/");
                    -1 != f && (d = b.H.substr(0, f + 1) + d)
                }
            f = d;
            if (".." == f || "." == f)
                d = "";
            else if (-1 != f.indexOf("./") || -1 != f.indexOf("/.")) {
                for (var d = 0 == f.lastIndexOf("/", 0), f = f.split("/"), g = [], k = 0; k < f.length; ) {
                    var m = f[k++];
                    "." == m ? d && k == f.length && g.push("") : ".." == m ? ((1 < g.length || 1 == g.length && "" != g[0]) && g.pop(),
                    d && k == f.length && g.push("")) : (g.push(m),
                    d = !0)
                }
                d = g.join("/")
            } else
                d = f
        }
        c ? b.Aa(d) : c = a.ad();
        c ? b.ab(a.w.clone()) : c = a.Yc();
        c && b.za(a.Z);
        return b
    }
    ;
    e.clone = function() {
        return new S(this)
    }
    ;
    e.Ba = function(a, b) {
        this.F();
        if (this.C = b ? V(a, !0) : a)
            this.C = this.C.replace(/:$/, "");
        return this
    }
    ;
    e.bd = function() {
        return !!this.C
    }
    ;
    e.bb = function(a, b) {
        this.F();
        this.fa = b ? V(a) : a;
        return this
    }
    ;
    e.cd = function() {
        return !!this.fa
    }
    ;
    e.ya = function(a, b) {
        this.F();
        this.X = b ? V(a, !0) : a;
        return this
    }
    ;
    e.Pa = function() {
        return !!this.X
    }
    ;
    e.Za = function(a) {
        this.F();
        if (a) {
            a = Number(a);
            if (isNaN(a) || 0 > a)
                throw Error("Bad port number " + a);
            this.P = a
        } else
            this.P = null;
        return this
    }
    ;
    e.Zc = function() {
        return null != this.P
    }
    ;
    e.Aa = function(a, b) {
        this.F();
        this.H = b ? V(a, !0) : a;
        return this
    }
    ;
    e.Eb = function() {
        return !!this.H
    }
    ;
    e.ad = function() {
        return "" !== this.w.toString()
    }
    ;
    e.ab = function(a, b) {
        this.F();
        a instanceof T ? (this.w = a,
        this.w.Xa(this.m)) : (b || (a = U(a, nb)),
        this.w = new T(a,null,this.m));
        return this
    }
    ;
    e.Wc = function() {
        return this.w.toString()
    }
    ;
    e.za = function(a, b) {
        this.F();
        this.Z = b ? V(a) : a;
        return this
    }
    ;
    e.Yc = function() {
        return !!this.Z
    }
    ;
    e.F = function() {
        if (this.jd)
            throw Error("Tried to modify a read-only Uri");
    }
    ;
    e.Xa = function(a) {
        this.m = a;
        this.w && this.w.Xa(a);
        return this
    }
    ;
    var V = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
      , U = function(a, b, c) {
        return t(a) ? (a = encodeURI(a).replace(b, ob),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
      , ob = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
      , jb = /[#\/\?@]/g
      , lb = /[\#\?:]/g
      , kb = /[\#\?]/g
      , nb = /[\#\?@]/g
      , mb = /#/g
      , T = function(a, b, c) {
        this.f = this.c = null;
        this.A = a || null;
        this.m = !!c
    };
    e = T.prototype;
    e.G = function() {
        if (!this.c && (this.c = new C,
        this.f = 0,
        this.A)) {
            var a = this;
            ib(this.A, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            })
        }
    }
    ;
    e.add = function(a, b) {
        this.G();
        this.O();
        a = this.N(a);
        var c = this.c.get(a);
        c || this.c.set(a, c = []);
        c.push(b);
        this.f += 1;
        return this
    }
    ;
    e.remove = function(a) {
        this.G();
        a = this.N(a);
        return this.c.M(a) ? (this.O(),
        this.f -= this.c.get(a).length,
        this.c.remove(a)) : !1
    }
    ;
    e.clear = function() {
        this.O();
        this.c = null;
        this.f = 0
    }
    ;
    e.M = function(a) {
        this.G();
        a = this.N(a);
        return this.c.M(a)
    }
    ;
    e.B = function() {
        this.G();
        for (var a = this.c.l(), b = this.c.B(), c = [], d = 0; d < b.length; d++)
            for (var f = a[d], g = 0; g < f.length; g++)
                c.push(b[d]);
        return c
    }
    ;
    e.l = function(a) {
        this.G();
        var b = [];
        if (t(a))
            this.M(a) && (b = Ba(b, this.c.get(this.N(a))));
        else {
            a = this.c.l();
            for (var c = 0; c < a.length; c++)
                b = Ba(b, a[c])
        }
        return b
    }
    ;
    e.set = function(a, b) {
        this.G();
        this.O();
        a = this.N(a);
        this.M(a) && (this.f -= this.c.get(a).length);
        this.c.set(a, [b]);
        this.f += 1;
        return this
    }
    ;
    e.get = function(a, b) {
        a = a ? this.l(a) : [];
        return 0 < a.length ? String(a[0]) : b
    }
    ;
    e.be = function(a, b) {
        this.remove(a);
        0 < b.length && (this.O(),
        this.c.set(this.N(a), Ca(b)),
        this.f += b.length)
    }
    ;
    e.toString = function() {
        if (this.A)
            return this.A;
        if (!this.c)
            return "";
        for (var a = [], b = this.c.B(), c = 0; c < b.length; c++)
            for (var d = b[c], f = encodeURIComponent(String(d)), d = this.l(d), g = 0; g < d.length; g++) {
                var k = f;
                "" !== d[g] && (k += "=" + encodeURIComponent(String(d[g])));
                a.push(k)
            }
        return this.A = a.join("&")
    }
    ;
    e.O = function() {
        this.A = null
    }
    ;
    e.clone = function() {
        var a = new T;
        a.A = this.A;
        this.c && (a.c = this.c.clone(),
        a.f = this.f);
        return a
    }
    ;
    e.N = function(a) {
        a = String(a);
        this.m && (a = a.toLowerCase());
        return a
    }
    ;
    e.Xa = function(a) {
        a && !this.m && (this.G(),
        this.O(),
        this.c.forEach(function(a, c) {
            var b = c.toLowerCase();
            c != b && (this.remove(c),
            this.be(b, a))
        }, this));
        this.m = a
    }
    ;
    e.extend = function(a) {
        for (var b = 0; b < arguments.length; b++)
            eb(arguments[b], function(a, b) {
                this.add(b, a)
            }, this)
    }
    ;
    var pb = function(a, b, c, d, f, g, k, m, v, ha) {
        this.Pc = a;
        this.D = b || null;
        this.vb = c || null;
        this.Ab = d || null;
        this.Fb = void 0 !== f ? f : null;
        this.ub = g || null;
        this.Cb = k || null;
        this.fd = m || !1;
        this.xb = v || null;
        this.wb = ha || null
    };
    pb.prototype.toString = function() {
        var a = new S;
        a.Ba("https");
        a.ya("google.com");
        a.Aa("/cast");
        var b = [];
        x(this.Pc, function(a) {
            var c = "__castAppId__=" + a.appId;
            a.capabilities && 0 < a.capabilities.length && (c = c + "(" + a.capabilities.join(","),
            c += ")");
            b.push(c)
        });
        this.D && b.push("__castClientId__=" + this.D);
        this.vb && b.push("__castAutoJoinPolicy__=" + this.vb);
        this.Ab && b.push("__castDefaultActionPolicy__=" + this.Ab);
        null != this.Fb && b.push("__castLaunchTimeout__=" + this.Fb);
        this.ub && b.push("__dialAppName__=" + this.ub);
        this.Cb && b.push("__dialPostData__=" + this.Cb);
        this.fd && b.push("__castInvisibleSender__=true");
        this.xb && (b.push("__castBroadcastNamespace__=" + this.xb),
        b.push("__castBroadcastId__=" + Math.random()));
        this.wb && b.push("__castBroadcastMessage__=" + encodeURIComponent(JSON.stringify(this.wb)));
        a.za(b.join("/"));
        return a.toString()
    }
    ;
    var W = function() {
        this.R = {};
        this.sa = {}
    };
    W.prototype.Td = function(a, b) {
        var c = this
          , d = this.R[a];
        return d ? (d.status = b,
        d.media.forEach(function(a) {
            delete c.sa[a.sessionId + "#" + a.mediaSessionId]
        }),
        delete this.R[a],
        !0) : !1
    }
    ;
    W.prototype.Uc = function(a) {
        var b = this
          , c = this.R[a.sessionId];
        if (c)
            return c.statusText = a.statusText,
            c.namespaces = a.namespaces || [],
            c.receiver.volume = a.receiver.volume,
            c;
        var c = new chrome.cast.b(a.sessionId,a.appId,a.displayName,a.appImages,a.receiver), d;
        for (d in a)
            "media" == d ? c.media = a.media.map(function(a) {
                a = b.zb(a);
                a.je = !1;
                a.oa = !0;
                return a
            }) : a.hasOwnProperty(d) && (c[d] = a[d]);
        return this.R[a.sessionId] = c
    }
    ;
    W.prototype.zb = function(a) {
        var b = a.sessionId + "#" + a.mediaSessionId
          , c = this.sa[b];
        c || (c = new chrome.cast.media.a(a.sessionId,a.mediaSessionId),
        this.sa[b] = c,
        (b = this.R[a.sessionId]) && b.media.push(c));
        b = c;
        b.currentItemId = null;
        b.loadingItemId = null;
        b.preloadedItemId = null;
        for (var d in a)
            "items" != d && a.hasOwnProperty(d) && ("volume" == d ? (b.volume.level = a.volume.level,
            b.volume.muted = a.volume.muted) : b[d] = a[d]);
        d = ia(["idleReason", "extendedStatus"]);
        for (var f = d.next(); !f.done; f = d.next())
            f = f.value,
            a.hasOwnProperty(f) || (b[f] = null);
        "currentTime"in a && (b.Qa = Date.now());
        if (b.playerState == chrome.cast.media.T.IDLE && null == b.loadingItemId)
            b.currentItemId = null,
            b.loadingItemId = null,
            b.preloadedItemId = null,
            b.items = null;
        else if (a.hasOwnProperty("items") && a.items) {
            d = [];
            var g = b.items
              , f = {};
            if (g)
                for (var k = 0; k < g.length; k++)
                    f[g[k].itemId] = k;
            a = ia(a.items);
            for (g = a.next(); !g.done; g = a.next()) {
                g = g.value;
                if (!g.media) {
                    var k = g.itemId
                      , m = b.items ? b.items[f[k]] : null;
                    m && m.media ? g.media = m.media : k == b.currentItemId && b.media && (g.media = b.media)
                }
                d.push(qb(g))
            }
            b.items = d
        }
        return c
    }
    ;
    W.prototype.Qd = function(a) {
        delete this.sa[a.sessionId + "#" + a.mediaSessionId];
        var b = this.R[a.sessionId];
        b && (a = b.media.indexOf(a),
        -1 != a && b.media.splice(a, 1))
    }
    ;
    var qb = function(a) {
        var b = new chrome.cast.media.kb(a.media), c;
        for (c in a)
            a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    };
    var X = function() {
        this.Y = new Q(this);
        this.j = null;
        this.xa = new W;
        this.wa = 0;
        this.Ka = new E;
        this.da = new C;
        this.Jb = !1;
        this.W = new C;
        this.ra = new C;
        this.va = [];
        this.Sc = this.Tc.bind(this);
        this.I = null;
        this.qa = 0;
        this.K = null;
        this.Rc = new Za(this.Wd,200,this);
        this.Bb = null
    }
      , rb = function(a, b) {
        a && a(b)
    };
    e = X.prototype;
    e.ka = function(a, b, c) {
        return new gb(this.wa,a,b,c)
    }
    ;
    e.ca = function(a, b, c) {
        b && this.Ka.Nc(b);
        void 0 !== c ? a.sequenceNumber = c : (a.sequenceNumber = this.wa,
        this.wa = (this.wa + 1) % 9007199254740992);
        c = this.Y.Sb(a);
        b && c && (a = this.Ka.Mb(a.sequenceNumber),
        b = new chrome.cast.Error(chrome.cast.u.INVALID_PARAMETER,c),
        (a = a.Na) && a(b))
    }
    ;
    e.pa = function(a, b) {
        var c = this;
        y = this;
        this.j || (this.j = a,
        a.invisibleSender || (a = new PresentationRequest(this.ma()),
        a.getAvailability().then(function(a) {
            a.onchange = function() {
                c.Jb = !!a.value;
                c.j.receiverListener(a.value ? chrome.cast.ia.AVAILABLE : chrome.cast.ia.UNAVAILABLE)
            }
            ;
            a.onchange()
        }, function() {
            c.j.receiverListener(chrome.cast.ia.AVAILABLE)
        }),
        a.onconnectionavailable = function(a) {
            c.ta(a.connection)
        }
        ,
        this.Bb = (n.navigator || null).presentation.defaultRequest = a,
        a.reconnect(chrome.cast.Yb).then(function(a) {
            c.ta(a)
        }, ja)));
        b && b(void 0)
    }
    ;
    e.Ya = function(a) {
        a.navigator.presentation.defaultRequest = this.Bb
    }
    ;
    e.ta = function(a, b) {
        b = void 0 === b ? null : b;
        var c = this;
        a.onclose = function(a) {
            c.I = null;
            switch (a.reason) {
            case "closed":
                c.sd();
                break;
            case "error":
                b && (a = new chrome.cast.Error(chrome.cast.u.SESSION_ERROR),
                b && b(a))
            }
        }
        ;
        a.onterminate = function() {
            c.xd()
        }
        ;
        "connected" == a.state ? this.Y.connect(a) : a.onconnect = function() {
            c.Y.connect(a)
        }
    }
    ;
    e.Qc = function(a, b) {
        "urn:x-cast:com.google.cast.media" != a ? Y.error("Unsupported broadcast message namespace - " + a) : sb.has(b.type) ? this.Jb && (this.K ? (b.sessionId = this.K,
        this.Wa(null, b.type, b, function() {
            Y.info("Send Broadcast directly succeeded")
        }, function(a) {
            Y.error("Send Broadcast directly failed with code " + a.code)
        })) : this.Rc.Vc(this.ma(void 0, a, b))) : Y.error("Unsupported broadcast message type - " + b.type)
    }
    ;
    e.Wd = function(a) {
        Y.info("Broadcast request " + a);
        (a = (new PresentationRequest(a)).getAvailability()) ? a.then(function() {
            Y.info("Broadcast succeeded")
        }, function() {
            Y.ge("Broadcast failed")
        }) : Y.error("presentationRequest.getAvailability return undefined")
    }
    ;
    e.requestSession = function(a, b, c) {
        var d = this;
        this.I ? rb(b, new chrome.cast.Error(chrome.cast.u.INVALID_PARAMETER,"Already requesting session")) : (c = this.ma(c),
        this.I = a,
        (new PresentationRequest(c.toString())).start().then(function(a) {
            d.ta(a, b)
        }).catch(function(a) {
            d.I = null;
            a = new chrome.cast.Error("AbortError" == a.name || "NotAllowedError" == a.name ? chrome.cast.u.CANCEL : chrome.cast.u.SESSION_ERROR);
            b && b(a)
        }))
    }
    ;
    e.ma = function(a, b, c) {
        var d = null
          , f = null
          , g = a || this.j.sessionRequest
          , k = g.dialRequest;
        k && (d = k.appName,
        (f = k.launchParameter) && !f.match(tb) && (f = cb(f)));
        var m = [];
        m.push({
            appId: g.appId,
            capabilities: g.capabilities
        });
        a || x(this.j.additionalSessionRequests, function(a) {
            m.push({
                appId: a.appId,
                capabilities: a.capabilities
            })
        });
        return (new pb(m,this.Y.D,this.j.autoJoinPolicy,this.j.defaultActionPolicy,g.requestSessionTimeout,d,f,this.j.invisibleSender,b,c)).toString()
    }
    ;
    e.Qb = function(a, b, c, d) {
        var f = this;
        this.qa++;
        this.Wa(null, b, a, function(a) {
            f.qa--;
            a.oa = !0;
            c && c(a)
        }, function(a) {
            f.qa--;
            d(a)
        }, chrome.cast.media.timeout.load)
    }
    ;
    e.i = function(a, b, c, d, f, g) {
        var k = this;
        this.Wa(a, b, c, function(a) {
            k.yb(a);
            d && d(void 0)
        }, f, g)
    }
    ;
    e.Wa = function(a, b, c, d, f, g) {
        c.type = b;
        null != a && (c.mediaSessionId = a.mediaSessionId,
        c.sessionId = a.sessionId);
        this.Pb(c, function(a) {
            a.status && 1 == a.status.length ? d && d(a.status[0]) : (a = new chrome.cast.Error(chrome.cast.u.SESSION_ERROR),
            f && f(a))
        }, f, g)
    }
    ;
    e.setReceiverVolume = function(a, b, c, d) {
        b.sessionId = a;
        this.ca(new P("v2_message",b,void 0,chrome.cast.timeout.setReceiverVolume), this.ka(c, d, chrome.cast.timeout.sendCustomMessage))
    }
    ;
    e.Ua = function(a) {
        var b = this;
        (new PresentationRequest(this.ma())).reconnect(chrome.cast.nc + a).then(function(a) {
            b.ta(a)
        }, ja)
    }
    ;
    e.leaveSession = function(a, b, c) {
        this.ca(new P("leave_session",a,void 0,chrome.cast.timeout.leaveSession), this.ka(b, c, chrome.cast.timeout.leaveSession))
    }
    ;
    e.Vd = function(a, b, c) {
        this.ca(new P("app_message",a,void 0,chrome.cast.timeout.sendCustomMessage), this.ka(b, c, chrome.cast.timeout.sendCustomMessage))
    }
    ;
    e.Pb = function(a, b, c, d) {
        this.ca(new P("v2_message",a,void 0,d), this.ka(b, c, d))
    }
    ;
    var ub = function(a, b, c) {
        var d = a.get(b);
        d || (d = new O,
        a.set(b, d));
        d.add(c)
    };
    e = X.prototype;
    e.Oc = function(a, b) {
        ub(this.da, a, b)
    }
    ;
    e.Ud = function(a, b) {
        (a = this.da.get(a)) && a.remove(b)
    }
    ;
    e.Ga = function(a) {
        this.va.push(a)
    }
    ;
    e.Sa = function(a) {
        a = this.va.indexOf(a);
        0 <= a && this.va.splice(a, 1)
    }
    ;
    e.Kc = function(a, b, c) {
        var d = this.W.get(a);
        d || (d = new C,
        this.W.set(a, d));
        a = d.get(b);
        a || (a = new O,
        d.set(b, a));
        a.add(c)
    }
    ;
    e.Pd = function(a, b, c) {
        (a = this.W.get(a)) && (b = a.get(b)) && b.remove(c)
    }
    ;
    e.Fa = function(a, b) {
        ub(this.ra, a, b)
    }
    ;
    e.Ra = function(a, b) {
        (a = this.ra.get(a)) && a.remove(b)
    }
    ;
    e.Lc = function(a, b) {
        -1 == a.ea.indexOf(b) && a.ea.push(b)
    }
    ;
    e.Rd = function(a, b) {
        b = a.ea.indexOf(b);
        -1 != b && a.ea.splice(b, 1)
    }
    ;
    e.gd = function(a) {
        var b = this.Ka.Mb(a.sequenceNumber);
        b && (b = "error" == a.type ? b.Na : b.ce) && b(a.message)
    }
    ;
    e.hd = function(a) {
        return a.playerState != chrome.cast.media.T.IDLE || null != a.loadingItemId
    }
    ;
    e.yb = function(a) {
        if (a.oa) {
            var b = this.hd(a);
            a.ea.forEach(function(a) {
                a(b)
            });
            b || this.xa.Qd(a)
        } else if (!(0 < this.qa)) {
            a.oa = !0;
            var c = this.ra.get(a.sessionId);
            c && B(c.v(), function(b) {
                b(a)
            })
        }
    }
    ;
    e.Tc = function(a) {
        return this.xa.zb(a)
    }
    ;
    e.od = function(a) {
        switch (a.type) {
        case "new_session":
        case "update_session":
            a.message = this.xa.Uc(a.message);
            break;
        case "v2_message":
            (a = a.message) && "MEDIA_STATUS" == a.type && a.status && (a.status = a.status.map(this.Sc))
        }
    }
    ;
    e.Nb = function(a) {
        if (this.K) {
            var b = this.K;
            this.K = null;
            this.Y.disconnect();
            var c = a != chrome.cast.U.STOPPED;
            this.xa.Td(b, a) && (this.W.remove(b),
            this.ra.remove(b),
            a = this.da.get(b)) && (this.da.remove(b),
            B(a.v(), function(a) {
                a(c)
            }))
        }
    }
    ;
    e.onMessage = function(a) {
        this.od(a);
        this.gd(a);
        var b = a.message;
        if (b)
            switch (a.type) {
            case "receiver_action":
                this.wd(b);
                break;
            case "new_session":
                this.vd(b);
                break;
            case "update_session":
                this.Ad(b);
                break;
            case "app_message":
                this.qd(b);
                break;
            case "v2_message":
                this.Bd(b);
                break;
            case "custom_dial_launch":
                this.rd(a.sequenceNumber, b)
            }
    }
    ;
    e.vd = function(a) {
        this.K = a.sessionId;
        this.I ? (this.I(a),
        this.I = null) : this.j && this.j.sessionListener(a)
    }
    ;
    e.Ad = function(a) {
        (a = this.da.get(a.sessionId)) && B(a.v(), function(a) {
            a(!0)
        })
    }
    ;
    e.wd = function(a) {
        this.va.forEach(function(b) {
            b(a.receiver, a.action)
        })
    }
    ;
    e.sd = function() {
        this.Nb(chrome.cast.U.DISCONNECTED)
    }
    ;
    e.xd = function() {
        this.Nb(chrome.cast.U.STOPPED)
    }
    ;
    e.qd = function(a) {
        var b = this.W.get(a.sessionId);
        b && (b = b.get(a.namespaceName)) && B(b.v(), function(b) {
            b(a.namespaceName, a.message)
        })
    }
    ;
    e.Bd = function(a) {
        "MEDIA_STATUS" == a.type && a.status.forEach(this.yb.bind(this))
    }
    ;
    e.Va = function(a, b) {
        this.ca(new P("custom_dial_launch",b,void 0,chrome.cast.timeout.sendCustomMessage), null, a)
    }
    ;
    e.rd = function(a, b) {
        var c = this;
        this.j.customDialLaunchCallback ? this.j.customDialLaunchCallback(b).then(function(b) {
            c.Va(a, b)
        }, function() {
            c.Va(a)
        }) : this.Va(a)
    }
    ;
    var tb = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
      , sb = new Set(["PRECACHE"])
      , Z = new X
      , Y = Ma("mr.cast.Api");
    chrome.cast.pa = function(a, b, c) {
        Z.pa(a, b, c)
    }
    ;
    p("chrome.cast.initialize", chrome.cast.pa, void 0);
    chrome.cast.dd = function(a, b, c) {
        var d = new X;
        d.pa(a, b, c);
        return d
    }
    ;
    p("chrome.cast.initializeWithContext", chrome.cast.dd, void 0);
    chrome.cast.Ya = function(a) {
        Z.Ya(a)
    }
    ;
    p("chrome.cast.setPageContext", chrome.cast.Ya, void 0);
    chrome.cast.requestSession = function(a, b, c) {
        Z.requestSession(a, b, c)
    }
    ;
    p("chrome.cast.requestSession", chrome.cast.requestSession, void 0);
    chrome.cast.Cd = function(a) {
        Z.Qc("urn:x-cast:com.google.cast.media", new chrome.cast.media.pc(a))
    }
    ;
    p("chrome.cast.precache", chrome.cast.Cd, void 0);
    chrome.cast.Ua = function(a) {
        chrome.cast.Ob(Z, a)
    }
    ;
    p("chrome.cast.requestSessionById", chrome.cast.Ua, void 0);
    chrome.cast.Ob = function(a, b) {
        a.Ua(b)
    }
    ;
    p("chrome.cast.requestSessionByIdWithContext", chrome.cast.Ob, void 0);
    chrome.cast.Ga = function(a) {
        Z.Ga(a)
    }
    ;
    p("chrome.cast.addReceiverActionListener", chrome.cast.Ga, void 0);
    chrome.cast.Sa = function(a) {
        Z.Sa(a)
    }
    ;
    p("chrome.cast.removeReceiverActionListener", chrome.cast.Sa, void 0);
    chrome.cast.nd = function() {}
    ;
    p("chrome.cast.logMessage", chrome.cast.nd, void 0);
    chrome.cast.Xd = function(a, b) {
        b()
    }
    ;
    p("chrome.cast.setCustomReceivers", chrome.cast.Xd, void 0);
    chrome.cast.Yd = function(a, b) {
        b()
    }
    ;
    p("chrome.cast.setReceiverDisplayStatus", chrome.cast.Yd, void 0);
    chrome.cast.unescape = function(a) {
        return -1 != a.indexOf("&") ? "document"in n ? ya(a) : za(a) : a
    }
    ;
    p("chrome.cast.unescape", chrome.cast.unescape, void 0);
    chrome.cast.isAvailable = !1;
    p("chrome.cast.isAvailable", chrome.cast.isAvailable, void 0);
    chrome.cast.Vb = !1;
    chrome.cast.cb = function() {
        if (!chrome.cast.Vb) {
            chrome.cast.Vb = !0;
            chrome.cast.isAvailable = !0;
            var a = window.__onGCastApiAvailable;
            a && "function" == typeof a && a(!0)
        }
    }
    ;
    "complete" == document.readyState ? chrome.cast.cb() : (window.addEventListener("load", chrome.cast.cb, !1),
    window.addEventListener("DOMContentLoaded", chrome.cast.cb, !1));
}
).call(window);
