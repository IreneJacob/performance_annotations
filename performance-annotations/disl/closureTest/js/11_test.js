var addComment = {
    moveForm: function(a, b, c, d) {
        var e, f = this, g = f.I(a), h = f.I(c), i = f.I("cancel-comment-reply-link"), j = f.I("comment_parent"), k = f.I("comment_post_ID");
        if (g && h && i && j) {
            f.respondId = c,
            d = d || !1,
            f.I("wp-temp-form-div") || (e = document.createElement("div"),
            e.id = "wp-temp-form-div",
            e.style.display = "none",
            h.parentNode.insertBefore(e, h)),
            g.parentNode.insertBefore(h, g.nextSibling),
            k && d && (k.value = d),
            j.value = b,
            i.style.display = "",
            i.onclick = function() {
                var a = addComment
                  , b = a.I("wp-temp-form-div")
                  , c = a.I(a.respondId);
                if (b && c)
                    return a.I("comment_parent").value = "0",
                    b.parentNode.insertBefore(c, b),
                    b.parentNode.removeChild(b),
                    this.style.display = "none",
                    this.onclick = null,
                    !1
            }
            ;
            try {
                f.I("comment").focus()
            } catch (l) {}
            return !1
        }
    },
    I: function(a) {
        return document.getElementById(a)
    }
};
