! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (oe.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return _.call(t, e) >= 0 !== n
        })
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e) {
        var t = he[e] = {};
        return Z.each(e.match(fe) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        Q.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
    }

    function o() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + o.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(xe, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : we.test(n) ? Z.parseJSON(n) : n
                } catch (r) {}
                ye.set(e, t, n)
            } else n = void 0;
        return n
    }

    function u() {
        return !0
    }

    function d() {
        return !1
    }

    function c() {
        try {
            return Q.activeElement
        } catch (e) {}
    }

    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function f(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = je.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n = 0, i = e.length; i > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function g(e, t) {
        var n, i, r, a, s, o, l, u;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (a = ve.access(e), s = ve.set(t, a), u = a.events)) {
                delete s.handle, s.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; i > n; n++) Z.event.add(t, r, u[r][n])
            }
            ye.hasData(e) && (o = ye.access(e), l = Z.extend({}, o), ye.set(t, l))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Se.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function w(t, n) {
        var i, r = Z(n.createElement(t)).appendTo(n.body),
            a = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : Z.css(r[0], "display");
        return r.detach(), a
    }

    function x(e) {
        var t = Q,
            n = Be[e];
        return n || (n = w(e, t), "none" !== n && n || (He = (He || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = He[0].contentDocument, t.write(), t.close(), n = w(e, t), He.detach()), Be[e] = n), n
    }

    function b(e, t, n) {
        var i, r, a, s, o = e.style;
        return n = n || Re(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Fe.test(s) && $e.test(t) && (i = o.width, r = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, o.minWidth = r, o.maxWidth = a)), void 0 !== s ? s + "" : s
    }

    function T(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Ue.length; r--;)
            if (t = Ue[r] + n, t in e) return t;
        return i
    }

    function S(e, t, n) {
        var i = Xe.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function E(e, t, n, i, r) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > a; a += 2) "margin" === n && (s += Z.css(e, n + Te[a], !0, r)), i ? ("content" === n && (s -= Z.css(e, "padding" + Te[a], !0, r)), "margin" !== n && (s -= Z.css(e, "border" + Te[a] + "Width", !0, r))) : (s += Z.css(e, "padding" + Te[a], !0, r), "padding" !== n && (s += Z.css(e, "border" + Te[a] + "Width", !0, r)));
        return s
    }

    function k(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            a = Re(e),
            s = "border-box" === Z.css(e, "boxSizing", !1, a);
        if (0 >= r || null == r) {
            if (r = b(e, t, a), (0 > r || null == r) && (r = e.style[t]), Fe.test(r)) return r;
            i = s && (K.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + E(e, t, n || (s ? "border" : "content"), i, a) + "px"
    }

    function P(e, t) {
        for (var n, i, r, a = [], s = 0, o = e.length; o > s; s++) i = e[s], i.style && (a[s] = ve.get(i, "olddisplay"), n = i.style.display, t ? (a[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ce(i) && (a[s] = ve.access(i, "olddisplay", x(i.nodeName)))) : (r = Ce(i), "none" === n && r || ve.set(i, "olddisplay", r ? n : Z.css(i, "display"))));
        for (s = 0; o > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[s] || "" : "none"));
        return e
    }

    function D(e, t, n, i, r) {
        return new D.prototype.init(e, t, n, i, r)
    }

    function M() {
        return setTimeout(function() {
            Ke = void 0
        }), Ke = Z.now()
    }

    function N(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Te[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function I(e, t, n) {
        for (var i, r = (nt[t] || []).concat(nt["*"]), a = 0, s = r.length; s > a; a++)
            if (i = r[a].call(n, t, e)) return i
    }

    function L(e, t, n) {
        var i, r, a, s, o, l, u, d, c = this,
            p = {},
            f = e.style,
            h = e.nodeType && Ce(e),
            m = ve.get(e, "fxshow");
        n.queue || (o = Z._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() {
            o.unqueued || l()
        }), o.unqueued++, c.always(function() {
            c.always(function() {
                o.unqueued--, Z.queue(e, "fx").length || o.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = Z.css(e, "display"), d = "none" === u ? ve.get(e, "olddisplay") || x(e.nodeName) : u, "inline" === d && "none" === Z.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], Je.exec(r)) {
                if (delete t[i], a = a || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    h = !0
                }
                p[i] = m && m[i] || Z.style(e, i)
            } else u = void 0;
        if (Z.isEmptyObject(p)) "inline" === ("none" === u ? x(e.nodeName) : u) && (f.display = u);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = ve.access(e, "fxshow", {}), a && (m.hidden = !h), h ? Z(e).show() : c.done(function() {
                Z(e).hide()
            }), c.done(function() {
                var t;
                ve.remove(e, "fxshow");
                for (t in p) Z.style(e, t, p[t])
            });
            for (i in p) s = I(h ? m[i] : 0, i, c), i in m || (m[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function A(e, t) {
        var n, i, r, a, s;
        for (n in e)
            if (i = Z.camelCase(n), r = t[i], a = e[n], Z.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), s = Z.cssHooks[i], s && "expand" in s) {
                a = s.expand(a), delete e[i];
                for (n in a) n in e || (e[n] = a[n], t[n] = r)
            } else t[i] = r
    }

    function z(e, t, n) {
        var i, r, a = 0,
            s = tt.length,
            o = Z.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Ke || M(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, a = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(a);
                return o.notifyWith(e, [u, a, n]), 1 > a && l ? n : (o.resolveWith(e, [u]), !1)
            },
            u = o.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ke || M(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = Z.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? o.resolveWith(e, [u, t]) : o.rejectWith(e, [u, t]), this
                }
            }),
            d = u.props;
        for (A(d, u.opts.specialEasing); s > a; a++)
            if (i = tt[a].call(u, e, d, u.opts)) return i;
        return Z.map(d, I, u), Z.isFunction(u.opts.start) && u.opts.start.call(e, u), Z.fx.timer(Z.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function O(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                a = t.toLowerCase().match(fe) || [];
            if (Z.isFunction(n))
                for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function j(e, t, n, i) {
        function r(o) {
            var l;
            return a[o] = !0, Z.each(e[o] || [], function(e, o) {
                var u = o(t, n, i);
                return "string" != typeof u || s || a[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var a = {},
            s = e === wt;
        return r(t.dataTypes[0]) || !a["*"] && r("*")
    }

    function W(e, t) {
        var n, i, r = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && Z.extend(!0, e, i), e
    }

    function q(e, t, n) {
        for (var i, r, a, s, o = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in o)
                if (o[r] && o[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) a = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    a = r;
                    break
                }
                s || (s = r)
            }
            a = a || s
        }
        return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
    }

    function H(e, t, n, i) {
        var r, a, s, o, l, u = {},
            d = e.dataTypes.slice();
        if (d[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (a = d.shift(); a;)
            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift())
                if ("*" === a) a = l;
                else if ("*" !== l && l !== a) {
            if (s = u[l + " " + a] || u["* " + a], !s)
                for (r in u)
                    if (o = r.split(" "), o[1] === a && (s = u[l + " " + o[0]] || u["* " + o[0]])) {
                        s === !0 ? s = u[r] : u[r] !== !0 && (a = o[0], d.unshift(o[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: s ? c : "No conversion from " + l + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function B(e, t, n, i) {
        var r;
        if (Z.isArray(t)) Z.each(t, function(t, r) {
            n || St.test(e) ? i(e, r) : B(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== Z.type(t)) i(e, t);
        else
            for (r in t) B(e + "[" + r + "]", t[r], n, i)
    }

    function $(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var F = [],
        R = F.slice,
        G = F.concat,
        X = F.push,
        _ = F.indexOf,
        V = {},
        Y = V.toString,
        U = V.hasOwnProperty,
        K = {},
        Q = e.document,
        J = "2.1.4",
        Z = function(e, t) {
            return new Z.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        ie = function(e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: J,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : R.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: F.sort,
        splice: F.splice
    }, Z.extend = Z.fn.extend = function() {
        var e, t, n, i, r, a, s = arguments[0] || {},
            o = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[o] || {}, o++), "object" == typeof s || Z.isFunction(s) || (s = {}), o === l && (s = this, o--); l > o; o++)
            if (null != (e = arguments[o]))
                for (t in e) n = s[t], i = e[t], s !== i && (u && i && (Z.isPlainObject(i) || (r = Z.isArray(i))) ? (r ? (r = !1, a = n && Z.isArray(n) ? n : []) : a = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(u, a, i)) : void 0 !== i && (s[t] = i));
        return s
    }, Z.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !U.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, ie)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, a = 0,
                s = e.length,
                o = n(e);
            if (i) {
                if (o)
                    for (; s > a && (r = t.apply(e[a], i), r !== !1); a++);
                else
                    for (a in e)
                        if (r = t.apply(e[a], i), r === !1) break
            } else if (o)
                for (; s > a && (r = t.call(e[a], a, e[a]), r !== !1); a++);
            else
                for (a in e)
                    if (r = t.call(e[a], a, e[a]), r === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? Z.merge(i, "string" == typeof e ? [e] : e) : X.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : _.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], a = 0, s = e.length, o = !n; s > a; a++) i = !t(e[a], a), i !== o && r.push(e[a]);
            return r
        },
        map: function(e, t, i) {
            var r, a = 0,
                s = e.length,
                o = n(e),
                l = [];
            if (o)
                for (; s > a; a++) r = t(e[a], a, i), null != r && l.push(r);
            else
                for (a in e) r = t(e[a], a, i), null != r && l.push(r);
            return G.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (i = R.call(arguments, 2), r = function() {
                return e.apply(t || this, i.concat(R.call(arguments)))
            }, r.guid = e.guid = e.guid || Z.guid++, r) : void 0
        },
        now: Date.now,
        support: K
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var re = function(e) {
        function t(e, t, n, i) {
            var r, a, s, o, l, u, c, f, h, m;
            if ((t ? t.ownerDocument || t : B) !== L && I(t), t = t || L, n = n || [], o = t.nodeType, "string" != typeof e || !e || 1 !== o && 9 !== o && 11 !== o) return n;
            if (!i && z) {
                if (11 !== o && (r = ye.exec(e)))
                    if (s = r[1]) {
                        if (9 === o) {
                            if (a = t.getElementById(s), !a || !a.parentNode) return n;
                            if (a.id === s) return n.push(a), n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && q(t, a) && a.id === s) return n.push(a), n
                    } else {
                        if (r[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = r[3]) && b.getElementsByClassName) return J.apply(n, t.getElementsByClassName(s)), n
                    }
                if (b.qsa && (!O || !O.test(e))) {
                    if (f = c = H, h = t, m = 1 !== o && e, 1 === o && "object" !== t.nodeName.toLowerCase()) {
                        for (u = E(e), (c = t.getAttribute("id")) ? f = c.replace(xe, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + p(u[l]);
                        h = we.test(e) && d(t.parentNode) || t, m = u.join(",")
                    }
                    if (m) try {
                        return J.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return P(e.replace(le, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[H] = !0, e
        }

        function r(e) {
            var t = L.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) T.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function o(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, a = e([], n.length, t), s = a.length; s--;) n[r = a[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function c() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                a = F++;
            return t.first ? function(t, n, a) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, a)
            } : function(t, n, s) {
                var o, l, u = [$, a];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (l = t[H] || (t[H] = {}), (o = l[i]) && o[0] === $ && o[1] === a) return u[2] = o[2];
                            if (l[i] = u, u[2] = e(t, n, s)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var r = 0, a = n.length; a > r; r++) t(e, n[r], i);
            return i
        }

        function g(e, t, n, i, r) {
            for (var a, s = [], o = 0, l = e.length, u = null != t; l > o; o++)(a = e[o]) && (!n || n(a, i, r)) && (s.push(a), u && t.push(o));
            return s
        }

        function v(e, t, n, r, a, s) {
            return r && !r[H] && (r = v(r)), a && !a[H] && (a = v(a, s)), i(function(i, s, o, l) {
                var u, d, c, p = [],
                    f = [],
                    h = s.length,
                    v = i || m(t || "*", o.nodeType ? [o] : o, []),
                    y = !e || !i && t ? v : g(v, p, e, o, l),
                    w = n ? a || (i ? e : h || r) ? [] : s : y;
                if (n && n(y, w, o, l), r)
                    for (u = g(w, f), r(u, [], o, l), d = u.length; d--;)(c = u[d]) && (w[f[d]] = !(y[f[d]] = c));
                if (i) {
                    if (a || e) {
                        if (a) {
                            for (u = [], d = w.length; d--;)(c = w[d]) && u.push(y[d] = c);
                            a(null, w = [], u, l)
                        }
                        for (d = w.length; d--;)(c = w[d]) && (u = a ? ee(i, c) : p[d]) > -1 && (i[u] = !(s[u] = c))
                    }
                } else w = g(w === s ? w.splice(h, w.length) : w), a ? a(null, s, w, l) : J.apply(s, w)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, a = T.relative[e[0].type], s = a || T.relative[" "], o = a ? 1 : 0, l = f(function(e) {
                    return e === t
                }, s, !0), u = f(function(e) {
                    return ee(t, e) > -1
                }, s, !0), d = [function(e, n, i) {
                    var r = !a && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; r > o; o++)
                if (n = T.relative[e[o].type]) d = [f(h(d), n)];
                else {
                    if (n = T.filter[e[o].type].apply(null, e[o].matches), n[H]) {
                        for (i = ++o; r > i && !T.relative[e[i].type]; i++);
                        return v(o > 1 && h(d), o > 1 && p(e.slice(0, o - 1).concat({
                            value: " " === e[o - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > o && y(e.slice(o, i)), r > i && y(e = e.slice(i)), r > i && p(e))
                    }
                    d.push(n)
                }
            return h(d)
        }

        function w(e, n) {
            var r = n.length > 0,
                a = e.length > 0,
                s = function(i, s, o, l, u) {
                    var d, c, p, f = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        y = D,
                        w = i || a && T.find.TAG("*", u),
                        x = $ += null == y ? 1 : Math.random() || .1,
                        b = w.length;
                    for (u && (D = s !== L && s); h !== b && null != (d = w[h]); h++) {
                        if (a && d) {
                            for (c = 0; p = e[c++];)
                                if (p(d, s, o)) {
                                    l.push(d);
                                    break
                                }
                            u && ($ = x)
                        }
                        r && ((d = !p && d) && f--, i && m.push(d))
                    }
                    if (f += h, r && h !== f) {
                        for (c = 0; p = n[c++];) p(m, v, s, o);
                        if (i) {
                            if (f > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = K.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && ($ = x, D = y), m
                };
            return r ? i(s) : s
        }
        var x, b, T, C, S, E, k, P, D, M, N, I, L, A, z, O, j, W, q, H = "sizzle" + 1 * new Date,
            B = e.document,
            $ = 0,
            F = 0,
            R = n(),
            G = n(),
            X = n(),
            _ = function(e, t) {
                return e === t && (N = !0), 0
            },
            V = 1 << 31,
            Y = {}.hasOwnProperty,
            U = [],
            K = U.pop,
            Q = U.push,
            J = U.push,
            Z = U.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = ie.replace("w", "w#"),
            ae = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
            oe = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            pe = new RegExp(se),
            fe = new RegExp("^" + re + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            we = /[+~]/,
            xe = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Te = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Ce = function() {
                I()
            };
        try {
            J.apply(U = Z.call(B.childNodes), B.childNodes), U[B.childNodes.length].nodeType
        } catch (Se) {
            J = {
                apply: U.length ? function(e, t) {
                    Q.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, I = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : B;
            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, A = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), z = !S(i), b.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = r(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = ve.test(i.getElementsByClassName), b.getById = r(function(e) {
                return A.appendChild(e).id = H, !i.getElementsByName || !i.getElementsByName(H).length
            }), b.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && z) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(be, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(be, Te);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = b.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return a
            }, T.find.CLASS = b.getElementsByClassName && function(e, t) {
                return z ? t.getElementsByClassName(e) : void 0
            }, j = [], O = [], (b.qsa = ve.test(i.querySelectorAll)) && (r(function(e) {
                A.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || O.push(".#.+[+~]")
            }), r(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (b.matchesSelector = ve.test(W = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function(e) {
                b.disconnectedMatch = W.call(e, "div"), W.call(e, "[s!='']:x"), j.push("!=", se)
            }), O = O.length && new RegExp(O.join("|")), j = j.length && new RegExp(j.join("|")), t = ve.test(A.compareDocumentPosition), q = t || ve.test(A.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, _ = t ? function(e, t) {
                if (e === t) return N = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === B && q(B, e) ? -1 : t === i || t.ownerDocument === B && q(B, t) ? 1 : M ? ee(M, e) - ee(M, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return N = !0, 0;
                var n, r = 0,
                    a = e.parentNode,
                    o = t.parentNode,
                    l = [e],
                    u = [t];
                if (!a || !o) return e === i ? -1 : t === i ? 1 : a ? -1 : o ? 1 : M ? ee(M, e) - ee(M, t) : 0;
                if (a === o) return s(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[r] === u[r];) r++;
                return r ? s(l[r], u[r]) : l[r] === B ? -1 : u[r] === B ? 1 : 0
            }, i) : L
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== L && I(e), n = n.replace(ce, "='$1']"), !(!b.matchesSelector || !z || j && j.test(n) || O && O.test(n))) try {
                var i = W.call(e, n);
                if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {}
            return t(n, L, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && I(e), q(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== L && I(e);
            var n = T.attrHandle[t.toLowerCase()],
                i = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !z) : void 0;
            return void 0 !== i ? i : b.attributes || !z ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (N = !b.detectDuplicates, M = !b.sortStable && e.slice(0), e.sort(_), N) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return M = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(be, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = R[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && R(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var a = t.attr(r, e);
                        return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n ? a === i || a.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var a = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        o = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, d, c, p, f, h, m = a !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = o && t.nodeName.toLowerCase(),
                            y = !l && !o;
                        if (g) {
                            if (a) {
                                for (; m;) {
                                    for (c = t; c = c[m];)
                                        if (o ? c.nodeName.toLowerCase() === v : 1 === c.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                for (d = g[H] || (g[H] = {}), u = d[e] || [], f = u[0] === $ && u[1], p = u[0] === $ && u[2], c = f && g.childNodes[f]; c = ++f && c && c[m] || (p = f = 0) || h.pop();)
                                    if (1 === c.nodeType && ++p && c === t) {
                                        d[e] = [$, f, p];
                                        break
                                    }
                            } else if (y && (u = (t[H] || (t[H] = {}))[e]) && u[0] === $) p = u[1];
                            else
                                for (;
                                    (c = ++f && c && c[m] || (p = f = 0) || h.pop()) && ((o ? c.nodeName.toLowerCase() !== v : 1 !== c.nodeType) || !++p || (y && ((c[H] || (c[H] = {}))[e] = [$, p]), c !== t)););
                            return p -= r, p === i || p % i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[H] ? a(n) : a.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = a(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s])
                    }) : function(e) {
                        return a(e, 0, r)
                    }) : a
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = k(e.replace(le, "$1"));
                    return r[H] ? i(function(e, t, n, i) {
                        for (var a, s = r(e, null, i, []), o = e.length; o--;)(a = s[o]) && (e[o] = !(t[o] = a))
                    }) : function(e, i, a) {
                        return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(be, Te),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, Te).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = z ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === A
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[x] = o(x);
        for (x in {
                submit: !0,
                reset: !0
            }) T.pseudos[x] = l(x);
        return c.prototype = T.filters = T.pseudos, T.setFilters = new c, E = t.tokenize = function(e, n) {
            var i, r, a, s, o, l, u, d = G[e + " "];
            if (d) return n ? 0 : d.slice(0);
            for (o = e, l = [], u = T.preFilter; o;) {
                (!i || (r = ue.exec(o))) && (r && (o = o.slice(r[0].length) || o), l.push(a = [])), i = !1, (r = de.exec(o)) && (i = r.shift(), a.push({
                    value: i,
                    type: r[0].replace(le, " ")
                }), o = o.slice(i.length));
                for (s in T.filter) !(r = he[s].exec(o)) || u[s] && !(r = u[s](r)) || (i = r.shift(), a.push({
                    value: i,
                    type: s,
                    matches: r
                }), o = o.slice(i.length));
                if (!i) break
            }
            return n ? o.length : o ? t.error(e) : G(e, l).slice(0)
        }, k = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                a = X[e + " "];
            if (!a) {
                for (t || (t = E(e)), n = t.length; n--;) a = y(t[n]), a[H] ? i.push(a) : r.push(a);
                a = X(e, w(r, i)), a.selector = e
            }
            return a
        }, P = t.select = function(e, t, n, i) {
            var r, a, s, o, l, u = "function" == typeof e && e,
                c = !i && E(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (a = c[0] = c[0].slice(0), a.length > 2 && "ID" === (s = a[0]).type && b.getById && 9 === t.nodeType && z && T.relative[a[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(be, Te), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (r = he.needsContext.test(e) ? 0 : a.length; r-- && (s = a[r], !T.relative[o = s.type]);)
                    if ((l = T.find[o]) && (i = l(s.matches[0].replace(be, Te), we.test(a[0].type) && d(t.parentNode) || t))) {
                        if (a.splice(r, 1), e = i.length && p(a), !e) return J.apply(n, i), n;
                        break
                    }
            }
            return (u || k(e, c))(i, t, !z, n, we.test(e) && d(t.parentNode) || t), n
        }, b.sortStable = H.split("").sort(_).join("") === H, b.detectDuplicates = !!N, I(), b.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    Z.find = re, Z.expr = re.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = re.uniqueSort, Z.text = re.getText, Z.isXMLDoc = re.isXML, Z.contains = re.contains;
    var ae = Z.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        oe = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Z.find.matchesSelector(i, e) ? [i] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                r = this;

            if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (Z.contains(r[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Z.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ae.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var le, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        de = Z.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ue.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), se.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return i = Q.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = Q, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        };
    de.prototype = Z.fn, le = Z(Q);
    var ce = /^(?:parents|prev(?:Until|All))/,
        pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && Z(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function(e) {
            var t = Z(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, a = [], s = ae.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    }
            return this.pushStack(a.length > 1 ? Z.unique(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? _.call(Z(e), this[0]) : _.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function(e, t) {
        Z.fn[e] = function(n, i) {
            var r = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Z.filter(i, r)), this.length > 1 && (pe[e] || Z.unique(r), ce.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var fe = /\S+/g,
        he = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || a(e) : Z.extend({}, e);
        var t, n, i, r, s, o, l = [],
            u = !e.once && [],
            d = function(a) {
                for (t = e.memory && a, n = !0, o = r || 0, r = 0, s = l.length, i = !0; l && s > o; o++)
                    if (l[o].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, l && (u ? u.length && d(u.shift()) : t ? l = [] : c.disable())
            },
            c = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function a(t) {
                            Z.each(t, function(t, n) {
                                var i = Z.type(n);
                                "function" === i ? e.unique && c.has(n) || l.push(n) : n && n.length && "string" !== i && a(n)
                            })
                        }(arguments), i ? s = l.length : t && (r = n, d(t))
                    }
                    return this
                },
                remove: function() {
                    return l && Z.each(arguments, function(e, t) {
                        for (var n;
                            (n = Z.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (s >= n && s--, o >= n && o--)
                    }), this
                },
                has: function(e) {
                    return e ? Z.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = u = t = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, t || c.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !l || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? u.push(t) : d(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return c
    }, Z.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(t, function(t, a) {
                                var s = Z.isFunction(e[t]) && e[t];
                                r[a[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Z.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, Z.each(t, function(e, a) {
                var s = a[2],
                    o = a[3];
                i[a[1]] = s.add, o && s.add(function() {
                    n = o
                }, t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function() {
                    return r[a[0] + "With"](this === r ? i : this, arguments), this
                }, r[a[0] + "With"] = s.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                a = R.call(arguments),
                s = a.length,
                o = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
                l = 1 === o ? e : Z.Deferred(),
                u = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? R.call(arguments) : r, i === t ? l.notifyWith(n, i) : --o || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) a[r] && Z.isFunction(a[r].promise) ? a[r].promise().done(u(r, i, a)).fail(l.reject).progress(u(r, n, t)) : --o;
            return o || l.resolveWith(i, a), l.promise()
        }
    });
    var me;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (me.resolveWith(Q, [Z]), Z.fn.triggerHandler && (Z(Q).triggerHandler("ready"), Z(Q).off("ready"))))
        }
    }), Z.ready.promise = function(t) {
        return me || (me = Z.Deferred(), "complete" === Q.readyState ? setTimeout(Z.ready) : (Q.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), me.promise(t)
    }, Z.ready.promise();
    var ge = Z.access = function(e, t, n, i, r, a, s) {
        var o = 0,
            l = e.length,
            u = null == n;
        if ("object" === Z.type(n)) {
            r = !0;
            for (o in n) Z.access(e, t, o, n[o], !0, a, s)
        } else if (void 0 !== i && (r = !0, Z.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                return u.call(Z(e), n)
            })), t))
            for (; l > o; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : a
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, o.uid = 1, o.accepts = Z.acceptData, o.prototype = {
        key: function(e) {
            if (!o.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = o.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var i, r = this.key(e),
                a = this.cache[r];
            if ("string" == typeof t) a[t] = n;
            else if (Z.isEmptyObject(a)) Z.extend(this.cache[r], t);
            else
                for (i in t) a[i] = t[i];
            return a
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, r, a = this.key(e),
                s = this.cache[a];
            if (void 0 === t) this.cache[a] = {};
            else {
                Z.isArray(t) ? i = t.concat(t.map(Z.camelCase)) : (r = Z.camelCase(t), t in s ? i = [t, r] : (i = r, i = i in s ? [i] : i.match(fe) || [])), n = i.length;
                for (; n--;) delete s[i[n]]
            }
        },
        hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new o,
        ye = new o,
        we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        xe = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {
            ye.remove(e, t)
        },
        _data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function(e, t) {
            ve.remove(e, t)
        }
    }), Z.fn.extend({
        data: function(e, t) {
            var n, i, r, a = this[0],
                s = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (r = ye.get(a), 1 === a.nodeType && !ve.get(a, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), l(a, i, r[i])));
                    ve.set(a, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                ye.set(this, e)
            }) : ge(this, function(t) {
                var n, i = Z.camelCase(e);
                if (a && void 0 === t) {
                    if (n = ye.get(a, e), void 0 !== n) return n;
                    if (n = ye.get(a, i), void 0 !== n) return n;
                    if (n = l(a, i, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ye.get(this, i);
                    ye.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ye.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || Z.isArray(n) ? i = ve.access(e, t, Z.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
                i = n.length,
                r = n.shift(),
                a = Z._queueHooks(e, t),
                s = function() {
                    Z.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, s, a)), !i && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = Z.Deferred(),
                a = this,
                s = this.length,
                o = function() {
                    --i || r.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(a[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(o));
            return o(), r.promise(t)
        }
    });
    var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Te = ["Top", "Right", "Bottom", "Left"],
        Ce = function(e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        },
        Se = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = Q.createDocumentFragment(),
            t = e.appendChild(Q.createElement("div")),
            n = Q.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), K.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ee = "undefined";
    K.focusinBubbles = "onfocusin" in e;
    var ke = /^key/,
        Pe = /^(?:mouse|pointer|contextmenu)|click/,
        De = /^(?:focusinfocus|focusoutblur)$/,
        Me = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var a, s, o, l, u, d, c, p, f, h, m, g = ve.get(e);
            if (g)
                for (n.handler && (a = n, n = a.handler, r = a.selector), n.guid || (n.guid = Z.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                        return typeof Z !== Ee && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(fe) || [""], u = t.length; u--;) o = Me.exec(t[u]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (c = Z.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, c = Z.event.special[f] || {}, d = Z.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && Z.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, a), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s, !1)), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), Z.event.global[f] = !0)
        },
        remove: function(e, t, n, i, r) {
            var a, s, o, l, u, d, c, p, f, h, m, g = ve.hasData(e) && ve.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(fe) || [""], u = t.length; u--;)
                    if (o = Me.exec(t[u]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f) {
                        for (c = Z.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, p = l[f] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = p.length; a--;) d = p[a], !r && m !== d.origType || n && n.guid !== d.guid || o && !o.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(a, 1), d.selector && p.delegateCount--, c.remove && c.remove.call(e, d));
                        s && !p.length && (c.teardown && c.teardown.call(e, h, g.handle) !== !1 || Z.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) Z.event.remove(e, f + t[u], n, i, !0);
                Z.isEmptyObject(l) && (delete g.handle, ve.remove(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var a, s, o, l, u, d, c, p = [i || Q],
                f = U.call(t, "type") ? t.type : t,
                h = U.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = o = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !De.test(f + Z.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[Z.expando] ? t : new Z.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Z.makeArray(n, [t]), c = Z.event.special[f] || {}, r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                if (!r && !c.noBubble && !Z.isWindow(i)) {
                    for (l = c.delegateType || f, De.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), o = s;
                    o === (i.ownerDocument || Q) && p.push(o.defaultView || o.parentWindow || e)
                }
                for (a = 0;
                    (s = p[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? l : c.bindType || f, d = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), d && d.apply(s, n), d = u && s[u], d && d.apply && Z.acceptData(s) && (t.result = d.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = f, r || t.isDefaultPrevented() || c._default && c._default.apply(p.pop(), n) !== !1 || !Z.acceptData(i) || u && Z.isFunction(i[f]) && !Z.isWindow(i) && (o = i[u], o && (i[u] = null), Z.event.triggered = f, i[f](), Z.event.triggered = void 0, o && (i[u] = o)), t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, i, r, a, s = [],
                o = R.call(arguments),
                l = (ve.get(this, "events") || {})[e.type] || [],
                u = Z.event.special[e.type] || {};
            if (o[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, l), t = 0;
                    (r = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (a = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, i = ((Z.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, o), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, a, s = [],
                o = t.delegateCount,
                l = e.target;
            if (o && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (i = [], n = 0; o > n; n++) a = t[n], r = a.selector + " ", void 0 === i[r] && (i[r] = a.needsContext ? Z(r, this).index(l) >= 0 : Z.find(r, this, null, [l]).length), i[r] && i.push(a);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return o < t.length && s.push({
                elem: this,
                handlers: t.slice(o)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, a = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Z.expando]) return e;
            var t, n, i, r = e.type,
                a = e,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Pe.test(r) ? this.mouseHooks : ke.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(a), t = i.length; t--;) n = i[t], e[n] = a[n];
            return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, a) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== c() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === c() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? Z.event.trigger(r, null, t) : Z.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? u : d) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = u, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    a = e.handleObj;
                return (!r || r !== i && !Z.contains(i, r)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), K.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = ve.access(i, t);
                r || i.addEventListener(e, n, !0), ve.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = ve.access(i, t) - 1;
                r ? ve.access(i, t, r) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
            }
        }
    }), Z.fn.extend({
        on: function(e, t, n, i, r) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = d;
            else if (!i) return this;
            return 1 === r && (a = i, i = function(e) {
                return Z().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = d), this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ie = /<([\w:]+)/,
        Le = /<|&#?\w+;/,
        Ae = /<(?:script|style|link)/i,
        ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^$|\/(?:java|ecma)script/i,
        je = /^true\/(.*)/,
        We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td, Z.extend({
        clone: function(e, t, n) {
            var i, r, a, s, o = e.cloneNode(!0),
                l = Z.contains(e.ownerDocument, e);
            if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (s = v(o), a = v(e), i = 0, r = a.length; r > i; i++) y(a[i], s[i]);
            if (t)
                if (n)
                    for (a = a || v(e), s = s || v(o), i = 0, r = a.length; r > i; i++) g(a[i], s[i]);
                else g(e, o);
            return s = v(o, "script"), s.length > 0 && m(s, !l && v(e, "script")), o
        },
        buildFragment: function(e, t, n, i) {
            for (var r, a, s, o, l, u, d = t.createDocumentFragment(), c = [], p = 0, f = e.length; f > p; p++)
                if (r = e[p], r || 0 === r)
                    if ("object" === Z.type(r)) Z.merge(c, r.nodeType ? [r] : r);
                    else if (Le.test(r)) {
                for (a = a || d.appendChild(t.createElement("div")), s = (Ie.exec(r) || ["", ""])[1].toLowerCase(), o = qe[s] || qe._default, a.innerHTML = o[1] + r.replace(Ne, "<$1></$2>") + o[2], u = o[0]; u--;) a = a.lastChild;
                Z.merge(c, a.childNodes), a = d.firstChild, a.textContent = ""
            } else c.push(t.createTextNode(r));
            for (d.textContent = "", p = 0; r = c[p++];)
                if ((!i || -1 === Z.inArray(r, i)) && (l = Z.contains(r.ownerDocument, r), a = v(d.appendChild(r), "script"), l && m(a), n))
                    for (u = 0; r = a[u++];) Oe.test(r.type || "") && n.push(r);
            return d
        },
        cleanData: function(e) {
            for (var t, n, i, r, a = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (r = n[ve.expando], r && (t = ve.cache[r]))) {
                    if (t.events)
                        for (i in t.events) a[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
                    ve.cache[r] && delete ve.cache[r]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(e) {
            return ge(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? Z.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return ge(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !qe[(Ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ne, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = G.apply([], e);
            var n, i, r, a, s, o, l = 0,
                u = this.length,
                d = this,
                c = u - 1,
                p = e[0],
                m = Z.isFunction(p);
            if (m || u > 1 && "string" == typeof p && !K.checkClone && ze.test(p)) return this.each(function(n) {
                var i = d.eq(n);
                m && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
            });
            if (u && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = Z.map(v(n, "script"), f), a = r.length; u > l; l++) s = n, l !== c && (s = Z.clone(s, !0, !0), a && Z.merge(r, v(s, "script"))), t.call(this[l], s, l);
                if (a)
                    for (o = r[r.length - 1].ownerDocument, Z.map(r, h), l = 0; a > l; l++) s = r[l], Oe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(o, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(We, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, i = [], r = Z(e), a = r.length - 1, s = 0; a >= s; s++) n = s === a ? this : this.clone(!0), Z(r[s])[t](n), X.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var He, Be = {},
        $e = /^margin/,
        Fe = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
        Re = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(a);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, i = "4px" === t.width, r.removeChild(a)
        }
        var n, i, r = Q.documentElement,
            a = Q.createElement("div"),
            s = Q.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", a.appendChild(s), e.getComputedStyle && Z.extend(K, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(Q.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", r.appendChild(a), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(a), s.removeChild(n), t
            }
        }))
    }(), Z.swap = function(e, t, n, i) {
        var r, a, s = {};
        for (a in t) s[a] = e.style[a], e.style[a] = t[a];
        r = n.apply(e, i || []);
        for (a in t) e.style[a] = s[a];
        return r
    };
    var Ge = /^(none|table(?!-c[ea]).+)/,
        Xe = new RegExp("^(" + be + ")(.*)$", "i"),
        _e = new RegExp("^([+-])=(" + be + ")", "i"),
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ue = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = b(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s, o = Z.camelCase(t),
                    l = e.style;
                return t = Z.cssProps[o] || (Z.cssProps[o] = C(l, o)), s = Z.cssHooks[t] || Z.cssHooks[o], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t] : (a = typeof n, "string" === a && (r = _e.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(Z.css(e, t)), a = "number"), void(null != n && n === n && ("number" !== a || Z.cssNumber[o] || (n += "px"), K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var r, a, s, o = Z.camelCase(t);
            return t = Z.cssProps[o] || (Z.cssProps[o] = C(e.style, o)), s = Z.cssHooks[t] || Z.cssHooks[o], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = b(e, t, i)), "normal" === r && t in Ye && (r = Ye[t]), "" === n || n ? (a = parseFloat(r), n === !0 || Z.isNumeric(a) ? a || 0 : r) : r
        }
    }), Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? Ge.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function() {
                    return k(e, t, i)
                }) : k(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && Re(e);
                return S(e, n, i ? E(e, t, i, "border-box" === Z.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), Z.cssHooks.marginRight = T(K.reliableMarginRight, function(e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        }, b, [e, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Te[i] + t] = a[i] || a[i - 2] || a[0];
                return r
            }
        }, $e.test(e) || (Z.cssHooks[e + t].set = S)
    }), Z.fn.extend({
        css: function(e, t) {
            return ge(this, function(e, t, n) {
                var i, r, a = {},
                    s = 0;
                if (Z.isArray(t)) {
                    for (i = Re(e), r = t.length; r > s; s++) a[t[s]] = Z.css(e, t[s], !1, i);
                    return a
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return P(this, !0)
        },
        hide: function() {
            return P(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ce(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = D, D.prototype = {
        constructor: D,
        init: function(e, t, n, i, r, a) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = D.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = D.prototype.init, Z.fx.step = {};
    var Ke, Qe, Je = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [L],
        nt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = Ze.exec(t),
                    a = r && r[3] || (Z.cssNumber[e] ? "" : "px"),
                    s = (Z.cssNumber[e] || "px" !== a && +i) && Ze.exec(Z.css(n.elem, e)),
                    o = 1,
                    l = 20;
                if (s && s[3] !== a) {
                    a = a || s[3], r = r || [], s = +i || 1;
                    do o = o || ".5", s /= o, Z.style(n.elem, e, s + a); while (o !== (o = n.cur() / i) && 1 !== o && --l)
                }
                return r && (s = n.start = +s || +i || 0, n.unit = a, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    Z.Animation = Z.extend(z, {
            tweener: function(e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), Z.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? Z.extend({}, e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
            }, i
        }, Z.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ce).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = Z.isEmptyObject(e),
                    a = Z.speed(t, n, i),
                    s = function() {
                        var t = z(this, Z.extend({}, e), a);
                        (r || ve.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || a.queue === !1 ? this.each(s) : this.queue(a.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        a = Z.timers,
                        s = ve.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && et.test(r) && i(s[r]);
                    for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                    (t || !n) && Z.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ve.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        a = Z.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, Z.queue(this, e, []), r && r.stop && r.stop.call(this, !0),
                        t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(N(t, !0), e, i, r)
            }
        }), Z.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Z.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var e, t = 0,
                n = Z.timers;
            for (Ke = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(), Ke = void 0
        }, Z.fx.timer = function(e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Qe || (Qe = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Qe), Qe = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e = Q.createElement("input"),
                t = Q.createElement("select"),
                n = t.appendChild(Q.createElement("option"));
            e.type = "checkbox", K.checkOn = "" !== e.value, K.optSelected = n.selected, t.disabled = !0, K.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", K.radioValue = "t" === e.value
        }();
    var it, rt, at = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return ge(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function(e, t, n) {
            var i, r, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === Ee ? Z.prop(e, t, n) : (1 === a && Z.isXMLDoc(e) || (t = t.toLowerCase(), i = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? rt : it)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = Z.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                a = t && t.match(fe);
            if (a && 1 === e.nodeType)
                for (; n = a[r++];) i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!K.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), rt = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = at[t] || Z.find.attr;
        at[t] = function(e, t, i) {
            var r, a;
            return i || (a = at[t], at[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, at[t] = a), r
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return ge(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, r, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !Z.isXMLDoc(e), a && (t = Z.propFix[t] || t, r = Z.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), K.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var ot = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, i, r, a, s, o = "string" == typeof e && e,
                l = 0,
                u = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (o)
                for (t = (e || "").match(fe) || []; u > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : " ")) {
                        for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = Z.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, a, s, o = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                u = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (o)
                for (t = (e || "").match(fe) || []; u > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : "")) {
                        for (a = 0; r = t[a++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        s = e ? Z.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, r = Z(this), a = e.match(fe) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(n === Ee || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ot, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var lt = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = Z.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, Z(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Z.isArray(r) && (r = Z.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = Z.valHooks[r.type] || Z.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || 0 > r, s = a ? null : [], o = a ? r + 1 : i.length, l = 0 > r ? o : a ? r : 0; o > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (K.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, a = Z.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = Z.inArray(i.value, a) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, K.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ut = Z.now(),
        dt = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (i) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var ct = /#.*$/,
        pt = /([?&])_=[^&]*/,
        ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        mt = /^(?:GET|HEAD)$/,
        gt = /^\/\//,
        vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        yt = {},
        wt = {},
        xt = "*/".concat("*"),
        bt = e.location.href,
        Tt = vt.exec(bt.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt,
            type: "GET",
            isLocal: ht.test(Tt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? W(W(e, Z.ajaxSettings), t) : W(Z.ajaxSettings, e)
        },
        ajaxPrefilter: O(yt),
        ajaxTransport: O(wt),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var l, d, v, y, x, T = t;
                2 !== w && (w = 2, o && clearTimeout(o), i = void 0, a = s || "", b.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = q(c, b, n)), y = H(c, y, b, l), l ? (c.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (Z.lastModified[r] = x), x = b.getResponseHeader("etag"), x && (Z.etag[r] = x)), 204 === e || "HEAD" === c.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, d = y.data, v = y.error, l = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), b.status = e, b.statusText = (t || T) + "", l ? h.resolveWith(p, [d, T, b]) : h.rejectWith(p, [b, T, v]), b.statusCode(g), g = void 0, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [b, c, l ? d : v]), m.fireWith(p, [b, T]), u && (f.trigger("ajaxComplete", [b, c]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, a, s, o, l, u, d, c = Z.ajaxSetup({}, t),
                p = c.context || c,
                f = c.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                h = Z.Deferred(),
                m = Z.Callbacks("once memory"),
                g = c.statusCode || {},
                v = {},
                y = {},
                w = 0,
                x = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!s)
                                for (s = {}; t = ft.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e) g[t] = [g[t], e[t]];
                            else b.always(e[b.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return i && i.abort(t), n(0, t), this
                    }
                };
            if (h.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, c.url = ((e || c.url || bt) + "").replace(ct, "").replace(gt, Tt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = Z.trim(c.dataType || "*").toLowerCase().match(fe) || [""], null == c.crossDomain && (l = vt.exec(c.url.toLowerCase()), c.crossDomain = !(!l || l[1] === Tt[1] && l[2] === Tt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Tt[3] || ("http:" === Tt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = Z.param(c.data, c.traditional)), j(yt, c, t, b), 2 === w) return b;
            u = Z.event && c.global, u && 0 === Z.active++ && Z.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !mt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (dt.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = pt.test(r) ? r.replace(pt, "$1_=" + ut++) : r + (dt.test(r) ? "&" : "?") + "_=" + ut++)), c.ifModified && (Z.lastModified[r] && b.setRequestHeader("If-Modified-Since", Z.lastModified[r]), Z.etag[r] && b.setRequestHeader("If-None-Match", Z.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && b.setRequestHeader("Content-Type", c.contentType), b.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : c.accepts["*"]);
            for (d in c.headers) b.setRequestHeader(d, c.headers[d]);
            if (c.beforeSend && (c.beforeSend.call(p, b, c) === !1 || 2 === w)) return b.abort();
            x = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) b[d](c[d]);
            if (i = j(wt, c, t, b)) {
                b.readyState = 1, u && f.trigger("ajaxSend", [b, c]), c.async && c.timeout > 0 && (o = setTimeout(function() {
                    b.abort("timeout")
                }, c.timeout));
                try {
                    w = 1, i.send(v, n)
                } catch (T) {
                    if (!(2 > w)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return b
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, i, r) {
            return Z.isFunction(n) && (r = r || i, i = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(Z.isFunction(e) ? function(t) {
                Z(this).wrapInner(e.call(this, t))
            } : function() {
                var t = Z(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    };
    var Ct = /%20/g,
        St = /\[\]$/,
        Et = /\r?\n/g,
        kt = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) B(n, e[n], t, r);
        return i.join("&").replace(Ct, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && Pt.test(this.nodeName) && !kt.test(e) && (this.checked || !Se.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Dt = 0,
        Mt = {},
        Nt = {
            0: 200,
            1223: 204
        },
        It = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Mt) Mt[e]()
    }), K.cors = !!It && "withCredentials" in It, K.ajax = It = !!It, Z.ajaxTransport(function(e) {
        var t;
        return K.cors || It && !e.crossDomain ? {
            send: function(n, i) {
                var r, a = e.xhr(),
                    s = ++Dt;
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (r in e.xhrFields) a[r] = e.xhrFields[r];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) a.setRequestHeader(r, n[r]);
                t = function(e) {
                    return function() {
                        t && (delete Mt[s], t = a.onload = a.onerror = null, "abort" === e ? a.abort() : "error" === e ? i(a.status, a.statusText) : i(Nt[a.status] || a.status, a.statusText, "string" == typeof a.responseText ? {
                            text: a.responseText
                        } : void 0, a.getAllResponseHeaders()))
                    }
                }, a.onload = t(), a.onerror = t("error"), t = Mt[s] = t("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (o) {
                    if (t) throw o
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), Q.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Lt = [],
        At = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Lt.pop() || Z.expando + "_" + ut++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, a, s, o = t.jsonp !== !1 && (At.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && At.test(t.data) && "data");
        return o || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(At, "$1" + r) : t.jsonp !== !1 && (t.url += (dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || Z.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", a = e[r], e[r] = function() {
            s = arguments
        }, i.always(function() {
            e[r] = a, t[r] && (t.jsonpCallback = n.jsonpCallback, Lt.push(r)), s && Z.isFunction(a) && a(s[0]), s = a = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Q;
        var i = se.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = Z.buildFragment([e], t, r), r && r.length && Z(r).remove(), Z.merge([], i.childNodes))
    };
    var zt = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && zt) return zt.apply(this, arguments);
        var i, r, a, s = this,
            o = e.indexOf(" ");
        return o >= 0 && (i = Z.trim(e.slice(o)), e = e.slice(0, o)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && Z.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, s.html(i ? Z("<div>").append(Z.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, a || [e.responseText, t, e])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Ot = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var i, r, a, s, o, l, u, d = Z.css(e, "position"),
                c = Z(e),
                p = {};
            "static" === d && (e.style.position = "relative"), o = c.offset(), a = Z.css(e, "top"), l = Z.css(e, "left"), u = ("absolute" === d || "fixed" === d) && (a + l).indexOf("auto") > -1, u ? (i = c.position(), s = i.top, r = i.left) : (s = parseFloat(a) || 0, r = parseFloat(l) || 0), Z.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (p.top = t.top - o.top + s), null != t.left && (p.left = t.left - o.left + r), "using" in t ? t.using.call(e, p) : c.css(p)
        }
    }, Z.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                a = i && i.ownerDocument;
            return a ? (t = a.documentElement, Z.contains(t, i) ? (typeof i.getBoundingClientRect !== Ee && (r = i.getBoundingClientRect()), n = $(a), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (i = e.offset()), i.top += Z.css(e[0], "borderTopWidth", !0), i.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - Z.css(n, "marginTop", !0),
                    left: t.left - i.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Ot; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || Ot
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = "pageYOffset" === n;
        Z.fn[t] = function(r) {
            return ge(this, function(t, r, a) {
                var s = $(t);
                return void 0 === a ? s ? s[n] : t[r] : void(s ? s.scrollTo(i ? e.pageXOffset : a, i ? a : e.pageYOffset) : t[r] = a)
            }, t, r, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = T(K.pixelPosition, function(e, n) {
            return n ? (n = b(e, t), Fe.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            Z.fn[i] = function(i, r) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return ge(this, function(t, n, i) {
                    var r;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? Z.css(t, n, s) : Z.style(t, n, i, s)
                }, t, a ? i : void 0, a, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var jt = e.jQuery,
        Wt = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Wt), t && e.jQuery === Z && (e.jQuery = jt), Z
    }, typeof t === Ee && (e.jQuery = e.$ = Z), Z
}),
function(e) {
    e.fn.menumaker = function(t) {
        var n = e(this),
            i = e.extend({
                title: "Menu",
                format: "dropdown",
                sticky: !1
            }, t);
        return this.each(function() {
            return n.prepend('<div id="menu-button">' + i.title + "</div>"), e(this).find("#menu-button").on("click", function() {
                e(this).toggleClass("menu-opened");
                var t = e(this).next("ul");
                t.hasClass("open") ? t.hide().removeClass("open") : (t.show().addClass("open"), "dropdown" === i.format && t.find("ul").show())
            }), n.find("li ul").parent().addClass("has-sub"), multiTg = function() {
                n.find(".has-sub").prepend('<span class="submenu-button"></span>'), n.find(".submenu-button").on("click", function() {
                    e(this).toggleClass("submenu-opened"), e(this).siblings("ul").hasClass("open") ? e(this).siblings("ul").removeClass("open").hide() : e(this).siblings("ul").addClass("open").show()
                })
            }, "multitoggle" === i.format ? multiTg() : n.addClass("dropdown"), i.sticky === !0 && n.css("position", "fixed"), resizeFix = function() {
                e(window).width() > 768 && n.find("ul").show(), e(window).width() <= 768 && n.find("ul").hide().removeClass("open")
            }, resizeFix(), e(window).on("resize", resizeFix)
        })
    }
}(jQuery),
function(e) {
    e(document).ready(function() {
        e("#cssmenu").menumaker({
            title: "Menu",
            format: "multitoggle"
        }), e("#cssmenu").prepend("<div id='menu-line'></div>");
        var t, n, i, r, a = !1,
            s = 0,
            o = e("#cssmenu #menu-line");
        e("#cssmenu > ul > li").each(function() {
            e(this).hasClass("active") && (t = e(this), a = !0)
        }), a === !1 && (t = e("#cssmenu > ul > li").first()), r = n = t.width(), i = s = t.position().left, o.css("width", n), o.css("left", s), e("#cssmenu > ul > li").hover(function() {
            t = e(this), n = t.width(), s = t.position().left, o.css("width", n), o.css("left", s)
        }, function() {
            o.css("left", i), o.css("width", r)
        })
    })
}(jQuery), ! function(e) {
    function t() {
        for (var e, n, i, r, s, o = arguments[0], l = 1, u = arguments.length; u > l; l += 1)
            if (null !== (e = arguments[l]))
                for (n in e) i = o[n], r = e[n], o !== r && (r && a.obj(r) ? (s = i && a.obj(i) ? i : {}, o[n] = t(s, r)) : void 0 !== r && (o[n] = r));
        return o
    }

    function n(e, t) {
        var n = Array.prototype.slice,
            i = n.call(arguments, 2);
        return function() {
            return e.apply(t, i.concat(n.call(arguments)))
        }
    }

    function i(e) {
        var n, i, r = e.el,
            a = e.complete ? e.complete : function() {};
        return e.animation && (r.animate || e.css3transition && s) ? (e.animStartCss && (0 === e.animStartCss.opacity && (e.animStartCss.opacity = .01), r.css(e.animStartCss)), n = e.animation, void(e.css3transition && s ? (i = r[0].offsetWidth, r[0].style[s.prop] = "all " + n.duration + "ms", delete n.duration, delete n.easing, r.css(n), r.on(s.end, function() {
            r.off(s.end), r[0].style[s.prop] = "none", a()
        })) : window.ender ? r.animate(t(n, {
            complete: a
        })) : r.animate(n, n.duration, n.easing, a))) : (r.css(e.fallbackCss), void a())
    }

    function r(e, t) {
        return this.init(e, t), {
            getPageSize: n(this.getPageSize, this),
            getCursor: n(this.getCursor, this),
            nextPage: n(this.nextPage, this),
            prevPage: n(this.prevPage, this),
            isVisibleItem: n(this.isVisibleItem, this),
            scrollToItem: n(this.scrollToItem, this),
            getOptions: n(this.getOptions, this),
            setOptions: n(this.setOptions, this)
        }
    }
    var a, s;
    a = {
        fun: function(e) {
            return "function" == typeof e
        },
        arr: function(e) {
            return e instanceof Array
        },
        obj: function(e) {
            return e instanceof Object && !a.fun(e) && !a.arr(e)
        }
    }, s = function() {
        var e = document.createElement("div").style,
            t = "TransitionEnd",
            n = "Transition",
            i = void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition;
        return i && {
            prop: function() {
                return void 0 !== e.WebkitTransition ? n = "WebkitTransition" : void 0 !== e.MozTransition && (n = "MozTransition"), n
            }(),
            end: function() {
                return void 0 !== e.WebkitTransition ? t = "webkitTransitionEnd" : void 0 !== e.MozTransition && (t = "transitionend"), t
            }()
        }
    }(), r.prototype = {
        init: function(t, i) {
            var r;
            if (this.options = {
                    window: ".window",
                    items: "li",
                    pager: null,
                    nextPager: "a.next",
                    prevPager: "a.prev",
                    activeClass: null,
                    disabledClass: "disabled",
                    duration: 400,
                    vertical: !1,
                    keyboard: !1,
                    css3transition: !1,
                    extraOffset: 0
                }, this.setOptions(i), r = this.options, r.css3transition && !s && (r.css3transition = !1), this.$el = e(t), this.$window = this.$el.find(r.window), this.$itemWrapper = this.$window.children().first(), this.$items = this.$el.find(r.items), this.$nextPager = this.$el.find(r.nextPager), this.$prevPager = this.$el.find(r.prevPager), this.setDimensions(), r.pager && (this.$pager = this.$el.find(r.pager), this.createPager(), this.$pagerItems = this.$pager.find("li")), this.$items.length <= this.pageSize) return this.hidePrevPager(), void this.hideNextPager();
            if (this.cursor = this.getActiveIndex(), this.cursor < 0) {
                if (this.options.activeClass)
                    for (var a = 0; a < this.pageSize; a += 1) e(this.$items.get(a)).addClass("active");
                this.cursor = 0
            }
            this.cursor > this.lastPosition && (this.cursor = this.lastPosition), this.cursor > 0 && this.scrollToItem(this.cursor, !0), 0 === this.cursor && this.hidePrevPager(), this.cursor >= this.lastPosition && this.hideNextPager(), this.$nextPager.on("click", n(this.nextPage, this)), this.$prevPager.on("click", n(this.prevPage, this)), r.keyboard && e(document).on("keyup", n(this.onKeyUp, this)), this.$el.addClass("carousel-inited")
        },
        setDimensions: function() {
            var e, t = "width",
                n = ["margin-left", "margin-right"];
            this.options.vertical && (t = "height", n = ["margin-top", "margin-bottom"]), e = this.$items.first().next(), this.itemMargin = parseInt(e.css(n[0]), 10) + parseInt(e.css(n[1]), 10), this.itemDimension = e[t]() + this.itemMargin, this.windowDimension = this.$window[t](), this.pageSize = Math.floor((this.windowDimension + this.itemMargin) / this.itemDimension), this.pageDimension = this.pageSize * this.itemDimension, this.lastPosition = this.$items.length - this.pageSize
        },
        createPager: function() {
            var t, i, r = this.$items.length,
                a = document.createDocumentFragment();
            for (i = 0; r > i; i += 1) t = document.createElement("li"), $pagerItem = e(t), $pagerItem.on("click", n(this.usePager, this, i, r)), i < this.pageSize && $pagerItem.addClass("active"), a.appendChild(t);
            this.$pager.empty().get(0).appendChild(a)
        },
        usePager: function(e, t) {
            this.scrollToItem(e > t - this.pageSize ? t - this.pageSize : e)
        },
        nextPage: function(e) {
            if ("undefined" != typeof e && e.preventDefault(), !(this.cursor >= this.lastPosition)) {
                var t = this.cursor + this.pageSize;
                t > this.lastPosition && (t = this.lastPosition), this.scrollToItem(t)
            }
        },
        prevPage: function(e) {
            if ("undefined" != typeof e && e.preventDefault(), 0 !== this.cursor) {
                var t = this.cursor - this.pageSize;
                0 > t && (t = 0), this.scrollToItem(t)
            }
        },
        nextItem: function() {
            this.cursor >= this.lastPosition || this.scrollToItem(this.cursor + 1)
        },
        prevItem: function() {
            0 !== this.cursor && this.scrollToItem(this.cursor - 1)
        },
        scrollToItem: function(t, n) {
            var r, a, s = this.options.vertical ? "top" : "left",
                o = {},
                l = this.options.activeClass || "active",
                u = this.$items.length;
            if (this.cursorPrevious = this.cursor, this.cursor = t, 0 === this.cursor ? this.hidePrevPager() : this.showPrevPager(), this.cursor >= this.lastPosition ? this.hideNextPager() : this.showNextPager(), r = this.cursor * this.itemDimension, this.cursor === this.lastPosition && (r = r - (this.windowDimension - this.pageDimension + this.itemMargin) + this.options.extraOffset), r *= -1, o[s] = r, n || (o.duration = this.options.duration), this.options.activeClass)
                if (activeClass = this.options.activeClass, 1 === this.getPageSize()) e(this.$items.get(this.cursorPrevious)).removeClass(activeClass), e(this.$items.get(t)).addClass(activeClass);
                else
                    for (itemslen = this.$items.length, this.$items.removeClass(activeClass), a = 0; a < itemslen; a += 1) this.isVisibleItem(a) && e(this.$items.get(a)).addClass(activeClass);
            if (this.options.pager)
                if (1 === this.getPageSize()) e(this.$pagerItems.get(this.cursorPrevious)).removeClass(l), e(this.$pagerItems.get(this.cursor)).addClass(l);
                else
                    for (this.$pagerItems.removeClass(l), a = 0; u > a; a += 1) this.isVisibleItem(a) && e(this.$pagerItems.get(a)).addClass(l);
            i({
                el: this.$itemWrapper,
                animation: n ? !1 : o,
                fallbackCss: o,
                css3transition: this.options.css3transition
            })
        },
        onKeyUp: function(e) {
            39 === e.keyCode ? this.nextPage() : 37 === e.keyCode && this.prevPage()
        },
        getActiveIndex: function() {
            for (var t = 0, n = this.$items.length; n > t; t += 1)
                if (e(this.$items.get(t)).hasClass("active")) return t;
            return -1
        },
        hideNextPager: function() {
            this.$nextPager.addClass(this.options.disabledClass)
        },
        hidePrevPager: function() {
            this.$prevPager.addClass(this.options.disabledClass)
        },
        showNextPager: function() {
            this.$nextPager.removeClass(this.options.disabledClass)
        },
        showPrevPager: function() {
            this.$prevPager.removeClass(this.options.disabledClass)
        },
        getPageSize: function() {
            return this.pageSize
        },
        getCursor: function() {
            return this.cursor
        },
        isVisibleItem: function(e) {
            return this.cursor + this.pageSize <= e || this.cursor > e ? !1 : !0
        },
        getOptions: function() {
            return this.options
        },
        setOptions: function(e) {
            t(this.options, e || {})
        }
    }, e.fn.carousel = function(e) {
        return new r(this.first(), e)
    }
}(window.ender || window.jQuery || window.Zepto), ! function() {
    "use strict";

    function e(e) {
        e.fn.swiper = function(t) {
            var n;
            return e(this).each(function() {
                var e = new Swiper(this, t);
                n || (n = e)
            }), n
        }
    }
    window.Swiper = function(e, n) {
        function i() {
            return "horizontal" === f.params.direction
        }

        function r() {
            f.autoplayTimeoutId = setTimeout(function() {
                f.params.loop ? (f.fixLoop(), f._slideNext()) : f.isEnd ? n.autoplayStopOnLast ? f.stopAutoplay() : f._slideTo(0) : f._slideNext()
            }, f.params.autoplay)
        }

        function a(e, t) {
            var n = h(e.target);
            if (!n.is(t))
                if ("string" == typeof t) n = n.parents(t);
                else if (t.nodeType) {
                var i;
                return n.parents().each(function(e, n) {
                    n === t && (i = t)
                }), i ? t : void 0
            }
            return 0 === n.length ? void 0 : n[0]
        }

        function s(e, t) {
            t = t || {};
            var n = window.MutationObserver || window.WebkitMutationObserver,
                i = new n(function(e) {
                    e.forEach(function(e) {
                        f.onResize(), f.params.onObserverUpdate && f.params.onObserverUpdate(f, e)
                    })
                });
            i.observe(e, {
                attributes: "undefined" == typeof t.attributes ? !0 : t.attributes,
                childList: "undefined" == typeof t.childList ? !0 : t.childList,
                characterData: "undefined" == typeof t.characterData ? !0 : t.characterData
            }), f.observers.push(i)
        }

        function o(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var n = !1;
                    if (f.container.parents(".swiper-slide").length > 0 && 0 === f.container.parents(".swiper-slide-active").length) return;
                    for (var r = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        }, a = window.innerWidth, s = window.innerHeight, o = f.container.offset(), l = [
                            [o.left, o.top],
                            [o.left + f.width, o.top],
                            [o.left, o.top + f.height],
                            [o.left + f.width, o.top + f.height]
                        ], u = 0; u < l.length; u++) {
                        var d = l[u];
                        d[0] >= r.left && d[0] <= r.left + a && d[1] >= r.top && d[1] <= r.top + s && (n = !0)
                    }
                    if (!n) return
                }
                i() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 39 === t && f.slideNext(), 37 === t && f.slidePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && f.slideNext(), 38 === t && f.slidePrev())
            }
        }

        function l(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = f._wheelEvent,
                n = 0;
            if (e.detail) n = -e.detail;
            else if ("mousewheel" === t)
                if (f.params.mousewheelForceToAxis)
                    if (i()) {
                        if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                        n = e.wheelDeltaX
                    } else {
                        if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                        n = e.wheelDeltaY
                    } else n = e.wheelDelta;
            else if ("DOMMouseScroll" === t) n = -e.detail;
            else if ("wheel" === t)
                if (f.params.mousewheelForceToAxis)
                    if (i()) {
                        if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                        n = -e.deltaX
                    } else {
                        if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                        n = -e.deltaY
                    } else n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
            if (f.params.freeMode) {
                var r = f.getWrapperTranslate() + n;
                if (r > 0 && (r = 0), r < f.maxTranslate() && (r = f.maxTranslate()), f.setWrapperTransition(0), f.setWrapperTranslate(r), f.updateProgress(), f.updateActiveIndex(), 0 === r || r === f.maxTranslate()) return
            } else(new Date).getTime() - f._lastWheelScrollTime > 60 && (0 > n ? f.slideNext() : f.slidePrev()), f._lastWheelScrollTime = (new Date).getTime();
            return f.params.autoplay && f.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
        }

        function u(e, t) {
            e = h(e);
            var n, r, a, s, o;
            n = e.attr("data-swiper-parallax"), r = e.attr("data-swiper-parallax-x"), a = e.attr("data-swiper-parallax-y"), r || a || !n ? (r = r ? r : "0", a = a ? a : "0") : i() ? (r = n, a = "0") : (a = n, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%" : r * t + "px", a = a.indexOf("%") >= 0 ? parseInt(a, 10) * t + "%" : a * t + "px",
                s = r, o = a, e.transform("translate3d(" + s + ", " + o + ",0px)")
        }
        var d = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            scrollbar: null,
            scrollbarHide: !0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelForceToAxis: !1,
            hashnav: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            pagination: null,
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationHiddenClass: "swiper-pagination-hidden",
            observer: !1,
            observeParents: !1,
            runCallbacksOnInit: !0
        };
        n = n || {};
        for (var c in d)
            if ("undefined" == typeof n[c]) n[c] = d[c];
            else if ("object" == typeof n[c])
            for (var p in d[c]) "undefined" == typeof n[c][p] && (n[c][p] = d[c][p]);
        var f = this;
        f.params = n;
        var h;
        if (h = "undefined" == typeof t ? window.Dom7 || window.Zepto || window.jQuery : t, h && (f.container = h(e), 0 !== f.container.length)) {
            if (f.container.length > 1) return void f.container.each(function() {
                new Swiper(this, n)
            });
            f.container[0].swiper = f, f.container.data("swiper", f), f.container.addClass("swiper-container-" + f.params.direction), f.params.freeMode && f.container.addClass("swiper-container-free-mode"), (f.params.parallax || f.params.watchSlidesVisibility) && (f.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(f.params.effect) >= 0 && (f.support.transforms3d ? (f.params.watchSlidesProgress = !0, f.container.addClass("swiper-container-3d")) : f.params.effect = "slide"), "slide" !== f.params.effect && f.container.addClass("swiper-container-" + f.params.effect), "cube" === f.params.effect && (f.params.resistanceRatio = 0, f.params.slidesPerView = 1, f.params.slidesPerColumn = 1, f.params.slidesPerGroup = 1, f.params.centeredSlides = !1, f.params.spaceBetween = 0), "fade" === f.params.effect && (f.params.watchSlidesProgress = !0, f.params.spaceBetween = 0), f.params.grabCursor && f.support.touch && (f.params.grabCursor = !1), f.wrapper = f.container.children("." + f.params.wrapperClass), f.params.pagination && (f.paginationContainer = h(f.params.pagination), f.params.paginationClickable && f.paginationContainer.addClass("swiper-pagination-clickable")), f.rtl = i() && ("rtl" === f.container[0].dir.toLowerCase() || "rtl" === f.container.css("direction")), f.rtl && f.container.addClass("swiper-container-rtl"), f.rtl && (f.wrongRTL = "-webkit-box" === f.wrapper.css("display")), f.translate = 0, f.progress = 0, f.velocity = 0, f.lockSwipeToNext = function() {
                f.params.allowSwipeToNext = !1
            }, f.lockSwipeToPrev = function() {
                f.params.allowSwipeToPrev = !1
            }, f.lockSwipes = function() {
                f.params.allowSwipeToNext = f.params.allowSwipeToPrev = !1
            }, f.unlockSwipeToNext = function() {
                f.params.allowSwipeToNext = !0
            }, f.unlockSwipeToPrev = function() {
                f.params.allowSwipeToPrev = !0
            }, f.unlockSwipes = function() {
                f.params.allowSwipeToNext = f.params.allowSwipeToPrev = !0
            }, f.params.slidesPerColumn > 1 && f.container.addClass("swiper-container-multirow"), f.params.grabCursor && (f.container[0].style.cursor = "move", f.container[0].style.cursor = "-webkit-grab", f.container[0].style.cursor = "-moz-grab", f.container[0].style.cursor = "grab"), f.imagesToLoad = [], f.imagesLoaded = 0, f.loadImage = function(e, t, n, i) {
                function r() {
                    i && i()
                }
                var a;
                e.complete && n ? r() : t ? (a = new Image, a.onload = r, a.onerror = r, a.src = t) : r()
            }, f.preloadImages = function() {
                function e() {
                    "undefined" != typeof f && null !== f && (void 0 !== f.imagesLoaded && f.imagesLoaded++, f.imagesLoaded === f.imagesToLoad.length && (f.params.updateOnImagesReady && f.update(), f.params.onImagesReady && f.params.onImagesReady(f)))
                }
                f.imagesToLoad = f.container.find("img");
                for (var t = 0; t < f.imagesToLoad.length; t++) f.loadImage(f.imagesToLoad[t], f.imagesToLoad[t].currentSrc || f.imagesToLoad[t].getAttribute("src"), !0, e)
            }, f.autoplayTimeoutId = void 0, f.autoplaying = !1, f.autoplayPaused = !1, f.startAutoplay = function() {
                return "undefined" != typeof f.autoplayTimeoutId ? !1 : f.params.autoplay ? f.autoplaying ? !1 : (f.autoplaying = !0, f.params.onAutoplayStart && f.params.onAutoplayStart(f), void r()) : !1
            }, f.stopAutoplay = function() {
                f.autoplayTimeoutId && (f.autoplayTimeoutId && clearTimeout(f.autoplayTimeoutId), f.autoplaying = !1, f.autoplayTimeoutId = void 0, f.params.onAutoplayStop && f.params.onAutoplayStop(f))
            }, f.pauseAutoplay = function(e) {
                f.autoplayPaused || (f.autoplayTimeoutId && clearTimeout(f.autoplayTimeoutId), f.autoplayPaused = !0, 0 === e ? (f.autoplayPaused = !1, r()) : f.wrapper.transitionEnd(function() {
                    f.autoplayPaused = !1, f.autoplaying ? r() : f.stopAutoplay()
                }))
            }, f.minTranslate = function() {
                return -f.snapGrid[0]
            }, f.maxTranslate = function() {
                return -f.snapGrid[f.snapGrid.length - 1]
            }, f.updateContainerSize = function() {
                f.width = f.container[0].clientWidth, f.height = f.container[0].clientHeight, f.size = i() ? f.width : f.height
            }, f.updateSlidesSize = function() {
                f.slides = f.wrapper.children("." + f.params.slideClass), f.snapGrid = [], f.slidesGrid = [], f.slidesSizesGrid = [];
                var e, t = f.params.spaceBetween,
                    n = 0,
                    r = 0,
                    a = 0;
                "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * f.size), f.virtualWidth = -t, f.slides.css(f.rtl ? {
                    marginLeft: "",
                    marginTop: ""
                } : {
                    marginRight: "",
                    marginBottom: ""
                });
                var s;
                f.params.slidesPerColumn > 1 && (s = Math.floor(f.slides.length / f.params.slidesPerColumn) === f.slides.length / f.params.slidesPerColumn ? f.slides.length : Math.ceil(f.slides.length / f.params.slidesPerColumn) * f.params.slidesPerColumn);
                var o;
                for (e = 0; e < f.slides.length; e++) {
                    o = 0;
                    var l = f.slides.eq(e);
                    if (f.params.slidesPerColumn > 1) {
                        var u, d, c, p, h = f.params.slidesPerColumn;
                        "column" === f.params.slidesPerColumnFill ? (d = Math.floor(e / h), c = e - d * h, u = d + c * s / h, l.css({
                            "-webkit-box-ordinal-group": u,
                            "-moz-box-ordinal-group": u,
                            "-ms-flex-order": u,
                            "-webkit-order": u,
                            order: u
                        })) : (p = s / h, c = Math.floor(e / p), d = e - c * p), l.css({
                            "margin-top": 0 !== c && f.params.spaceBetween && f.params.spaceBetween + "px"
                        }).attr("data-swiper-column", d).attr("data-swiper-row", c)
                    }
                    "none" !== l.css("display") && ("auto" === f.params.slidesPerView ? o = i() ? l.outerWidth(!0) : l.outerHeight(!0) : (o = (f.size - (f.params.slidesPerView - 1) * t) / f.params.slidesPerView, i() ? f.slides[e].style.width = o + "px" : f.slides[e].style.height = o + "px"), f.slides[e].swiperSlideSize = o, f.slidesSizesGrid.push(o), f.params.centeredSlides ? (n = n + o / 2 + r / 2 + t, 0 === e && (n = n - f.size / 2 - t), Math.abs(n) < .001 && (n = 0), a % f.params.slidesPerGroup === 0 && f.snapGrid.push(n), f.slidesGrid.push(n)) : (a % f.params.slidesPerGroup === 0 && f.snapGrid.push(n), f.slidesGrid.push(n), n = n + o + t), f.virtualWidth += o + t, r = o, a++)
                }
                f.virtualWidth = Math.max(f.virtualWidth, f.size);
                var m;
                if (f.rtl && f.wrongRTL && ("slide" === f.params.effect || "coverflow" === f.params.effect) && f.wrapper.css({
                        width: f.virtualWidth + f.params.spaceBetween + "px"
                    }), f.params.slidesPerColumn > 1 && (f.virtualWidth = (o + f.params.spaceBetween) * s, f.virtualWidth = Math.ceil(f.virtualWidth / f.params.slidesPerColumn) - f.params.spaceBetween, f.wrapper.css({
                        width: f.virtualWidth + f.params.spaceBetween + "px"
                    }), f.params.centeredSlides)) {
                    for (m = [], e = 0; e < f.snapGrid.length; e++) f.snapGrid[e] < f.virtualWidth + f.snapGrid[0] && m.push(f.snapGrid[e]);
                    f.snapGrid = m
                }
                if (!f.params.centeredSlides) {
                    for (m = [], e = 0; e < f.snapGrid.length; e++) f.snapGrid[e] <= f.virtualWidth - f.size && m.push(f.snapGrid[e]);
                    f.snapGrid = m, Math.floor(f.virtualWidth - f.size) > Math.floor(f.snapGrid[f.snapGrid.length - 1]) && f.snapGrid.push(f.virtualWidth - f.size)
                }
                0 === f.snapGrid.length && (f.snapGrid = [0]), 0 !== f.params.spaceBetween && f.slides.css(i() ? f.rtl ? {
                    marginLeft: t + "px"
                } : {
                    marginRight: t + "px"
                } : {
                    marginBottom: t + "px"
                }), f.params.watchSlidesProgress && f.updateSlidesOffset()
            }, f.updateSlidesOffset = function() {
                for (var e = 0; e < f.slides.length; e++) f.slides[e].swiperSlideOffset = i() ? f.slides[e].offsetLeft : f.slides[e].offsetTop
            }, f.updateSlidesProgress = function(e) {
                if ("undefined" == typeof e && (e = f.translate || 0), 0 !== f.slides.length) {
                    "undefined" == typeof f.slides[0].swiperSlideOffset && f.updateSlidesOffset();
                    var t = f.params.centeredSlides ? -e + f.size / 2 : -e;
                    f.rtl && (t = f.params.centeredSlides ? e - f.size / 2 : e), f.container[0].getBoundingClientRect(), i() ? "left" : "top", i() ? "right" : "bottom", f.slides.removeClass(f.params.slideVisibleClass);
                    for (var n = 0; n < f.slides.length; n++) {
                        var r = f.slides[n],
                            a = f.params.centeredSlides === !0 ? r.swiperSlideSize / 2 : 0,
                            s = (t - r.swiperSlideOffset - a) / (r.swiperSlideSize + f.params.spaceBetween);
                        if (f.params.watchSlidesVisibility) {
                            var o = -(t - r.swiperSlideOffset - a),
                                l = o + f.slidesSizesGrid[n],
                                u = o >= 0 && o < f.size || l > 0 && l <= f.size || 0 >= o && l >= f.size;
                            u && f.slides.eq(n).addClass(f.params.slideVisibleClass)
                        }
                        r.progress = f.rtl ? -s : s
                    }
                }
            }, f.updateProgress = function(e) {
                "undefined" == typeof e && (e = f.translate || 0);
                var t = f.maxTranslate() - f.minTranslate();
                0 === t ? (f.progress = 0, f.isBeginning = f.isEnd = !0) : (f.progress = (e - f.minTranslate()) / t, f.isBeginning = f.progress <= 0, f.isEnd = f.progress >= 1), f.isBeginning && f.params.onReachBeginning && f.params.onReachBeginning(f), f.isEnd && f.params.onReachEnd && f.params.onReachEnd(f), f.params.watchSlidesProgress && f.updateSlidesProgress(e), f.params.onProgress && f.params.onProgress(f, f.progress)
            }, f.updateActiveIndex = function() {
                var e, t, n, i = f.rtl ? f.translate : -f.translate;
                for (t = 0; t < f.slidesGrid.length; t++) "undefined" != typeof f.slidesGrid[t + 1] ? i >= f.slidesGrid[t] && i < f.slidesGrid[t + 1] - (f.slidesGrid[t + 1] - f.slidesGrid[t]) / 2 ? e = t : i >= f.slidesGrid[t] && i < f.slidesGrid[t + 1] && (e = t + 1) : i >= f.slidesGrid[t] && (e = t);
                (0 > e || "undefined" == typeof e) && (e = 0), n = Math.floor(e / f.params.slidesPerGroup), n >= f.snapGrid.length && (n = f.snapGrid.length - 1), e !== f.activeIndex && (f.snapIndex = n, f.previousIndex = f.activeIndex, f.activeIndex = e, f.updateClasses())
            }, f.updateClasses = function() {
                f.slides.removeClass(f.params.slideActiveClass + " " + f.params.slideNextClass + " " + f.params.slidePrevClass);
                var e = f.slides.eq(f.activeIndex);
                if (e.addClass(f.params.slideActiveClass), e.next("." + f.params.slideClass).addClass(f.params.slideNextClass), e.prev("." + f.params.slideClass).addClass(f.params.slidePrevClass), f.bullets && f.bullets.length > 0) {
                    f.bullets.removeClass(f.params.bulletActiveClass);
                    var t;
                    f.params.loop ? (t = f.activeIndex - f.loopedSlides, t > f.slides.length - 1 - 2 * f.loopedSlides && (t -= f.slides.length - 2 * f.loopedSlides)) : t = "undefined" != typeof f.snapIndex ? f.snapIndex : f.activeIndex || 0, f.bullets.eq(t).addClass(f.params.bulletActiveClass)
                }
                f.params.loop || (f.params.prevButton && (f.isBeginning ? h(f.params.prevButton).addClass(f.params.buttonDisabledClass) : h(f.params.prevButton).removeClass(f.params.buttonDisabledClass)), f.params.nextButton && (f.isEnd ? h(f.params.nextButton).addClass(f.params.buttonDisabledClass) : h(f.params.nextButton).removeClass(f.params.buttonDisabledClass)))
            }, f.updatePagination = function() {
                if (f.params.pagination && f.paginationContainer && f.paginationContainer.length > 0) {
                    for (var e = "", t = f.params.loop ? f.slides.length - 2 * f.loopedSlides : f.snapGrid.length, n = 0; t > n; n++) e += f.params.paginationBulletRender ? f.params.paginationBulletRender(n, f.params.bulletClass) : '<span class="' + f.params.bulletClass + '"></span>';
                    f.paginationContainer.html(e), f.bullets = f.paginationContainer.find("." + f.params.bulletClass)
                }
            }, f.update = function(e) {
                function t() {
                    i = Math.min(Math.max(f.translate, f.maxTranslate()), f.minTranslate()), f.setWrapperTranslate(i), f.updateActiveIndex(), f.updateClasses()
                }
                if (f.updateContainerSize(), f.updateSlidesSize(), f.updateProgress(), f.updatePagination(), f.updateClasses(), f.params.scrollbar && f.scrollbar && f.scrollbar.set(), e) {
                    var n, i;
                    f.params.freeMode ? t() : (n = "auto" === f.params.slidesPerView && f.isEnd && !f.params.centeredSlides ? f.slideTo(f.slides.length - 1, 0, !1, !0) : f.slideTo(f.activeIndex, 0, !1, !0), n || t())
                }
            }, f.onResize = function() {
                if (f.updateContainerSize(), f.updateSlidesSize(), f.updateProgress(), ("auto" === f.params.slidesPerView || f.params.freeMode) && f.updatePagination(), f.params.scrollbar && f.scrollbar && f.scrollbar.set(), f.params.freeMode) {
                    var e = Math.min(Math.max(f.translate, f.maxTranslate()), f.minTranslate());
                    f.setWrapperTranslate(e), f.updateActiveIndex(), f.updateClasses()
                } else f.updateClasses(), "auto" === f.params.slidesPerView && f.isEnd && !f.params.centeredSlides ? f.slideTo(f.slides.length - 1, 0, !1, !0) : f.slideTo(f.activeIndex, 0, !1, !0)
            };
            var m = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? m = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), f.touchEvents = {
                start: f.support.touch || !f.params.simulateTouch ? "touchstart" : m[0],
                move: f.support.touch || !f.params.simulateTouch ? "touchmove" : m[1],
                end: f.support.touch || !f.params.simulateTouch ? "touchend" : m[2]
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === f.params.touchEventsTarget ? f.container : f.wrapper).addClass("swiper-wp8-" + f.params.direction), f.events = function(e) {
                var t = e ? "off" : "on",
                    i = e ? "removeEventListener" : "addEventListener",
                    r = "container" === f.params.touchEventsTarget ? f.container[0] : f.wrapper[0],
                    a = f.support.touch ? r : document,
                    s = f.params.nested ? !0 : !1;
                f.browser.ie ? (r[i](f.touchEvents.start, f.onTouchStart, !1), a[i](f.touchEvents.move, f.onTouchMove, s), a[i](f.touchEvents.end, f.onTouchEnd, !1)) : (f.support.touch && (r[i](f.touchEvents.start, f.onTouchStart, !1), r[i](f.touchEvents.move, f.onTouchMove, s), r[i](f.touchEvents.end, f.onTouchEnd, !1)), !n.simulateTouch || f.device.ios || f.device.android || (r[i]("mousedown", f.onTouchStart, !1), a[i]("mousemove", f.onTouchMove, s), a[i]("mouseup", f.onTouchEnd, !1))), window[i]("resize", f.onResize), f.params.nextButton && h(f.params.nextButton)[t]("click", f.onClickNext), f.params.prevButton && h(f.params.prevButton)[t]("click", f.onClickPrev), f.params.pagination && f.params.paginationClickable && h(f.paginationContainer)[t]("click", "." + f.params.bulletClass, f.onClickIndex), (f.params.preventClicks || f.params.preventClicksPropagation) && r[i]("click", f.preventClicks, !0)
            }, f.attachEvents = function() {
                f.events()
            }, f.detachEvents = function() {
                f.events(!0)
            }, f.allowClick = !0, f.preventClicks = function(e) {
                f.allowClick || (f.params.preventClicks && e.preventDefault(), f.params.preventClicksPropagation && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, f.onClickNext = function(e) {
                e.preventDefault(), f.slideNext()
            }, f.onClickPrev = function(e) {
                e.preventDefault(), f.slidePrev()
            }, f.onClickIndex = function(e) {
                e.preventDefault();
                var t = h(this).index() * f.params.slidesPerGroup;
                f.params.loop && (t += f.loopedSlides), f.slideTo(t)
            }, f.updateClickedSlide = function(e) {
                var t = a(e, "." + f.params.slideClass);
                if (!t) return f.clickedSlide = void 0, void(f.clickedIndex = void 0);
                if (f.clickedSlide = t, f.clickedIndex = h(t).index(), f.params.slideToClickedSlide && void 0 !== f.clickedIndex && f.clickedIndex !== f.activeIndex) {
                    var n, i = f.clickedIndex;
                    if (f.params.loop)
                        if (n = h(f.clickedSlide).attr("data-swiper-slide-index"), i > f.slides.length - f.params.slidesPerView) f.fixLoop(), i = f.wrapper.children("." + f.params.slideClass + '[data-swiper-slide-index="' + n + '"]').eq(0).index(), setTimeout(function() {
                            f.slideTo(i)
                        }, 0);
                        else if (i < f.params.slidesPerView - 1) {
                        f.fixLoop();
                        var r = f.wrapper.children("." + f.params.slideClass + '[data-swiper-slide-index="' + n + '"]');
                        i = r.eq(r.length - 1).index(), setTimeout(function() {
                            f.slideTo(i)
                        }, 0)
                    } else f.slideTo(i);
                    else f.slideTo(i)
                }
            };
            var g, v, y, w, x, b, T, C, S, E = "input, select, textarea, button",
                k = Date.now(),
                P = [];
            f.animating = !1, f.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var D;
            if (f.onTouchStart = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), D = "touchstart" === e.type, D || !("which" in e) || 3 !== e.which) {
                        if (f.params.noSwiping && a(e, "." + f.params.noSwipingClass)) return void(f.allowClick = !0);
                        if (!f.params.swipeHandler || a(e, f.params.swipeHandler)) {
                            if (g = !0, v = !1, w = void 0, f.touches.startX = f.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touches.startY = f.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, y = Date.now(), f.allowClick = !0, f.updateContainerSize(), f.swipeDirection = void 0, f.params.threshold > 0 && (T = !1), "touchstart" !== e.type) {
                                var t = !0;
                                h(e.target).is(E) && (t = !1), document.activeElement && h(document.activeElement).is(E) && document.activeElement.blur(), t && e.preventDefault()
                            }
                            f.params.onTouchStart && f.params.onTouchStart(f, e)
                        }
                    }
                }, f.onTouchMove = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), !(D && "mousemove" === e.type || e.preventedByNestedSwiper)) {
                        if (f.params.onlyExternal) return v = !0, void(f.allowClick = !1);
                        if (D && document.activeElement && e.target === document.activeElement && h(e.target).is(E)) return v = !0, void(f.allowClick = !1);
                        if (f.params.onTouchMove && f.params.onTouchMove(f, e), f.allowClick = !1, !(e.targetTouches && e.targetTouches.length > 1)) {
                            if (f.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof w) {
                                var t = 180 * Math.atan2(Math.abs(f.touches.currentY - f.touches.startY), Math.abs(f.touches.currentX - f.touches.startX)) / Math.PI;
                                w = i() ? t > f.params.touchAngle : 90 - t > f.params.touchAngle
                            }
                            if (w && f.params.onTouchMoveOpposite && f.params.onTouchMoveOpposite(f, e), g) {
                                if (w) return void(g = !1);
                                f.params.onSliderMove && f.params.onSliderMove(f, e), e.preventDefault(), f.params.touchMoveStopPropagation && !f.params.nested && e.stopPropagation(), v || (n.loop && f.fixLoop(), b = "cube" === f.params.effect ? (f.rtl ? -f.translate : f.translate) || 0 : f.getWrapperTranslate(), f.setWrapperTransition(0), f.animating && f.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), f.params.autoplay && f.autoplaying && (f.params.autoplayDisableOnInteraction ? f.stopAutoplay() : f.pauseAutoplay()), S = !1, f.params.grabCursor && (f.container[0].style.cursor = "move", f.container[0].style.cursor = "-webkit-grabbing", f.container[0].style.cursor = "-moz-grabbin", f.container[0].style.cursor = "grabbing")), v = !0;
                                var r = f.touches.diff = i() ? f.touches.currentX - f.touches.startX : f.touches.currentY - f.touches.startY;
                                r *= f.params.touchRatio, f.rtl && (r = -r), f.swipeDirection = r > 0 ? "prev" : "next", x = r + b;
                                var a = !0;
                                if (r > 0 && x > f.minTranslate() ? (a = !1, f.params.resistance && (x = f.minTranslate() - 1 + Math.pow(-f.minTranslate() + b + r, f.params.resistanceRatio))) : 0 > r && x < f.maxTranslate() && (a = !1, f.params.resistance && (x = f.maxTranslate() + 1 - Math.pow(f.maxTranslate() - b - r, f.params.resistanceRatio))), a && (e.preventedByNestedSwiper = !0), !f.params.allowSwipeToNext && "next" === f.swipeDirection && b > x && (x = b), !f.params.allowSwipeToPrev && "prev" === f.swipeDirection && x > b && (x = b), f.params.followFinger) {
                                    if (f.params.threshold > 0) {
                                        if (!(Math.abs(r) > f.params.threshold || T)) return void(x = b);
                                        if (!T) return T = !0, f.touches.startX = f.touches.currentX, f.touches.startY = f.touches.currentY, x = b, void(f.touches.diff = i() ? f.touches.currentX - f.touches.startX : f.touches.currentY - f.touches.startY)
                                    }(f.params.freeMode || f.params.watchSlidesProgress) && f.updateActiveIndex(), f.params.freeMode && (0 === P.length && P.push({
                                        position: f.touches[i() ? "startX" : "startY"],
                                        time: y
                                    }), P.push({
                                        position: f.touches[i() ? "currentX" : "currentY"],
                                        time: (new Date).getTime()
                                    })), f.updateProgress(x), f.setWrapperTranslate(x)
                                }
                            }
                        }
                    }
                }, f.onTouchEnd = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), f.params.onTouchEnd && f.params.onTouchEnd(f, e), g) {
                        f.params.grabCursor && v && g && (f.container[0].style.cursor = "move", f.container[0].style.cursor = "-webkit-grab", f.container[0].style.cursor = "-moz-grab", f.container[0].style.cursor = "grab");
                        var t = Date.now(),
                            n = t - y;
                        if (f.allowClick && (f.updateClickedSlide(e), f.params.onTap && f.params.onTap(f, e), 300 > n && t - k > 300 && (C && clearTimeout(C), C = setTimeout(function() {
                                f && (f.params.paginationHide && f.paginationContainer.length > 0 && !h(e.target).hasClass(f.params.bulletClass) && f.paginationContainer.toggleClass(f.params.paginationHiddenClass), f.params.onClick && f.params.onClick(f, e))
                            }, 300)), 300 > n && 300 > t - k && (C && clearTimeout(C), f.params.onDoubleTap && f.params.onDoubleTap(f, e))), k = Date.now(), setTimeout(function() {
                                f && f.allowClick && (f.allowClick = !0)
                            }, 0), !g || !v || !f.swipeDirection || 0 === f.touches.diff || x === b) return void(g = v = !1);
                        g = v = !1;
                        var i;
                        if (i = f.params.followFinger ? f.rtl ? f.translate : -f.translate : -x, f.params.freeMode) {
                            if (i < -f.minTranslate()) return void f.slideTo(f.activeIndex);
                            if (i > -f.maxTranslate()) return void f.slideTo(f.slides.length - 1);
                            if (f.params.freeModeMomentum) {
                                if (P.length > 1) {
                                    var r = P.pop(),
                                        a = P.pop(),
                                        s = r.position - a.position,
                                        o = r.time - a.time;
                                    f.velocity = s / o, f.velocity = f.velocity / 2, Math.abs(f.velocity) < .02 && (f.velocity = 0), (o > 150 || (new Date).getTime() - r.time > 300) && (f.velocity = 0)
                                } else f.velocity = 0;
                                P.length = 0;
                                var l = 1e3 * f.params.freeModeMomentumRatio,
                                    u = f.velocity * l,
                                    d = f.translate + u;
                                f.rtl && (d = -d);
                                var c, p = !1,
                                    m = 20 * Math.abs(f.velocity) * f.params.freeModeMomentumBounceRatio;
                                d < f.maxTranslate() && (f.params.freeModeMomentumBounce ? (d + f.maxTranslate() < -m && (d = f.maxTranslate() - m), c = f.maxTranslate(), p = !0, S = !0) : d = f.maxTranslate()), d > f.minTranslate() && (f.params.freeModeMomentumBounce ? (d - f.minTranslate() > m && (d = f.minTranslate() + m), c = f.minTranslate(), p = !0, S = !0) : d = f.minTranslate()), 0 !== f.velocity && (l = Math.abs(f.rtl ? (-d - f.translate) / f.velocity : (d - f.translate) / f.velocity)), f.params.freeModeMomentumBounce && p ? (f.updateProgress(c), f.setWrapperTransition(l), f.setWrapperTranslate(d), f.onTransitionStart(), f.animating = !0, f.wrapper.transitionEnd(function() {
                                    S && (f.params.onMomentumBounce && f.params.onMomentumBounce(f), f.setWrapperTransition(f.params.speed), f.setWrapperTranslate(c), f.wrapper.transitionEnd(function() {
                                        f.onTransitionEnd()
                                    }))
                                })) : f.velocity ? (f.updateProgress(d), f.setWrapperTransition(l), f.setWrapperTranslate(d), f.onTransitionStart(), f.animating || (f.animating = !0, f.wrapper.transitionEnd(function() {
                                    f.onTransitionEnd()
                                }))) : f.updateProgress(d), f.updateActiveIndex()
                            }
                            return void((!f.params.freeModeMomentum || n >= f.params.longSwipesMs) && (f.updateProgress(), f.updateActiveIndex()))
                        }
                        var w, T = 0,
                            E = f.slidesSizesGrid[0];
                        for (w = 0; w < f.slidesGrid.length; w += f.params.slidesPerGroup) "undefined" != typeof f.slidesGrid[w + f.params.slidesPerGroup] ? i >= f.slidesGrid[w] && i < f.slidesGrid[w + f.params.slidesPerGroup] && (T = w, E = f.slidesGrid[w + f.params.slidesPerGroup] - f.slidesGrid[w]) : i >= f.slidesGrid[w] && (T = w, E = f.slidesGrid[f.slidesGrid.length - 1] - f.slidesGrid[f.slidesGrid.length - 2]);
                        var D = (i - f.slidesGrid[T]) / E;
                        if (n > f.params.longSwipesMs) {
                            if (!f.params.longSwipes) return void f.slideTo(f.activeIndex);
                            "next" === f.swipeDirection && f.slideTo(D >= f.params.longSwipesRatio ? T + f.params.slidesPerGroup : T), "prev" === f.swipeDirection && f.slideTo(D > 1 - f.params.longSwipesRatio ? T + f.params.slidesPerGroup : T)
                        } else {
                            if (!f.params.shortSwipes) return void f.slideTo(f.activeIndex);
                            "next" === f.swipeDirection && f.slideTo(T + f.params.slidesPerGroup), "prev" === f.swipeDirection && f.slideTo(T)
                        }
                    }
                }, f._slideTo = function(e, t) {
                    return f.slideTo(e, t, !0, !0)
                }, f.slideTo = function(e, t, n, r) {
                    "undefined" == typeof n && (n = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), f.snapIndex = Math.floor(e / f.params.slidesPerGroup), f.snapIndex >= f.snapGrid.length && (f.snapIndex = f.snapGrid.length - 1);
                    var a = -f.snapGrid[f.snapIndex];
                    f.params.autoplay && f.autoplaying && (r || !f.params.autoplayDisableOnInteraction ? f.pauseAutoplay(t) : f.stopAutoplay()), f.updateProgress(a);
                    for (var s = 0; s < f.slidesGrid.length; s++) - a >= f.slidesGrid[s] && (e = s);
                    return "undefined" == typeof t && (t = f.params.speed), f.previousIndex = f.activeIndex || 0, f.activeIndex = e, a === f.translate ? (f.updateClasses(), !1) : (f.onTransitionStart(n), i() ? a : 0, i() ? 0 : a, 0 === t ? (f.setWrapperTransition(0), f.setWrapperTranslate(a), f.onTransitionEnd(n)) : (f.setWrapperTransition(t), f.setWrapperTranslate(a), f.animating || (f.animating = !0, f.wrapper.transitionEnd(function() {
                        f.onTransitionEnd(n)
                    }))), f.updateClasses(), !0)
                }, f.onTransitionStart = function(e) {
                    "undefined" == typeof e && (e = !0), f.lazy && f.lazy.onTransitionStart(), e && (f.params.onTransitionStart && f.params.onTransitionStart(f), f.params.onSlideChangeStart && f.activeIndex !== f.previousIndex && f.params.onSlideChangeStart(f))
                }, f.onTransitionEnd = function(e) {
                    f.animating = !1, f.setWrapperTransition(0), "undefined" == typeof e && (e = !0), f.lazy && f.lazy.onTransitionEnd(), e && (f.params.onTransitionEnd && f.params.onTransitionEnd(f), f.params.onSlideChangeEnd && f.activeIndex !== f.previousIndex && f.params.onSlideChangeEnd(f))
                }, f.slideNext = function(e, t, n) {
                    return f.params.loop ? f.animating ? !1 : (f.fixLoop(), f.container[0].clientLeft, f.slideTo(f.activeIndex + f.params.slidesPerGroup, t, e, n)) : f.slideTo(f.activeIndex + f.params.slidesPerGroup, t, e, n)
                }, f._slideNext = function(e) {
                    return f.slideNext(!0, e, !0)
                }, f.slidePrev = function(e, t, n) {
                    return f.params.loop ? f.animating ? !1 : (f.fixLoop(), f.container[0].clientLeft, f.slideTo(f.activeIndex - 1, t, e, n)) : f.slideTo(f.activeIndex - 1, t, e, n)
                }, f._slidePrev = function(e) {
                    return f.slidePrev(!0, e, !0)
                }, f.slideReset = function(e, t) {
                    return f.slideTo(f.activeIndex, t, e)
                }, f.setWrapperTransition = function(e, t) {
                    f.wrapper.transition(e), f.params.onSetTransition && f.params.onSetTransition(f, e), "slide" !== f.params.effect && f.effects[f.params.effect] && f.effects[f.params.effect].setTransition(e), f.params.parallax && f.parallax && f.parallax.setTransition(e), f.params.scrollbar && f.scrollbar && f.scrollbar.setTransition(e), f.params.control && f.controller && f.controller.setTransition(e, t)
                }, f.setWrapperTranslate = function(e, t, n) {
                    var r = 0,
                        a = 0,
                        s = 0;
                    i() ? r = f.rtl ? -e : e : a = e, f.wrapper.transform(f.support.transforms3d ? "translate3d(" + r + "px, " + a + "px, " + s + "px)" : "translate(" + r + "px, " + a + "px)"), f.translate = i() ? r : a, t && f.updateActiveIndex(), "slide" !== f.params.effect && f.effects[f.params.effect] && f.effects[f.params.effect].setTranslate(f.translate), f.params.parallax && f.parallax && f.parallax.setTranslate(f.translate), f.params.scrollbar && f.scrollbar && f.scrollbar.setTranslate(f.translate), f.params.control && f.controller && f.controller.setTranslate(f.translate, n), f.params.hashnav && f.hashnav && f.hashnav.setHash(), f.params.onSetTranslate && f.params.onSetTranslate(f, f.translate)
                }, f.getTranslate = function(e, t) {
                    var n, i, r, a;
                    return "undefined" == typeof t && (t = "x"), r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? a = new WebKitCSSMatrix("none" === r.webkitTransform ? "" : r.webkitTransform) : (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? a.m41 : parseFloat(16 === n.length ? n[12] : n[4])), "y" === t && (i = window.WebKitCSSMatrix ? a.m42 : parseFloat(16 === n.length ? n[13] : n[5])), f.rtl && i && (i = -i), i || 0
                }, f.getWrapperTranslate = function(e) {
                    return "undefined" == typeof e && (e = i() ? "x" : "y"), f.getTranslate(f.wrapper[0], e)
                }, f.observers = [], f.initObservers = function() {
                    if (f.params.observeParents)
                        for (var e = f.container.parents(), t = 0; t < e.length; t++) s(e[t]);
                    s(f.container[0], {
                        childList: !1
                    }), s(f.wrapper[0], {
                        attributes: !1
                    })
                }, f.disconnectObservers = function() {
                    for (var e = 0; e < f.observers.length; e++) f.observers[e].disconnect();
                    f.observers = []
                }, f.createLoop = function() {
                    f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass).remove();
                    var e = f.wrapper.children("." + f.params.slideClass);
                    f.loopedSlides = parseInt(f.params.loopedSlides || f.params.slidesPerView, 10), f.loopedSlides = f.loopedSlides + f.params.loopAdditionalSlides, f.loopedSlides > e.length && (f.loopedSlides = e.length);
                    var t, n = [],
                        i = [];
                    for (e.each(function(t, r) {
                            var a = h(this);
                            t < f.loopedSlides && i.push(r), t < e.length && t >= e.length - f.loopedSlides && n.push(r), a.attr("data-swiper-slide-index", t)
                        }), t = 0; t < i.length; t++) f.wrapper.append(h(i[t].cloneNode(!0)).addClass(f.params.slideDuplicateClass));
                    for (t = n.length - 1; t >= 0; t--) f.wrapper.prepend(h(n[t].cloneNode(!0)).addClass(f.params.slideDuplicateClass))
                }, f.destroyLoop = function() {
                    f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass).remove()
                }, f.fixLoop = function() {
                    var e;
                    f.activeIndex < f.loopedSlides ? (e = f.slides.length - 3 * f.loopedSlides + f.activeIndex, e += f.loopedSlides, f.slideTo(e, 0, !1, !0)) : ("auto" === f.params.slidesPerView && f.activeIndex >= 2 * f.loopedSlides || f.activeIndex > f.slides.length - 2 * f.params.slidesPerView) && (e = -f.slides.length + f.activeIndex + f.loopedSlides, e += f.loopedSlides, f.slideTo(e, 0, !1, !0))
                }, f.appendSlide = function(e) {
                    if (f.params.loop && f.destroyLoop(), "object" == typeof e && e.length)
                        for (var t = 0; t < e.length; t++) e[t] && f.wrapper.append(e[t]);
                    else f.wrapper.append(e);
                    f.params.loop && f.createLoop(), f.params.observer && f.support.observer || f.update(!0)
                }, f.prependSlide = function(e) {
                    f.params.loop && f.destroyLoop();
                    var t = f.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var n = 0; n < e.length; n++) e[n] && f.wrapper.prepend(e[n]);
                        t = f.activeIndex + e.length
                    } else f.wrapper.prepend(e);
                    f.params.loop && f.createLoop(), f.params.observer && f.support.observer || f.update(!0), f.slideTo(t, 0, !1)
                }, f.removeSlide = function(e) {
                    f.params.loop && f.destroyLoop();
                    var t, n = f.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var i = 0; i < e.length; i++) t = e[i], f.slides[t] && f.slides.eq(t).remove(), n > t && n--;
                        n = Math.max(n, 0)
                    } else t = e, f.slides[t] && f.slides.eq(t).remove(), n > t && n--, n = Math.max(n, 0);
                    f.params.observer && f.support.observer || f.update(!0), f.slideTo(n, 0, !1)
                }, f.removeAllSlides = function() {
                    for (var e = [], t = 0; t < f.slides.length; t++) e.push(t);
                    f.removeSlide(e)
                }, f.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var e = 0; e < f.slides.length; e++) {
                                var t = f.slides.eq(e),
                                    n = t[0].swiperSlideOffset,
                                    r = -n - f.translate,
                                    a = 0;
                                i() || (a = r, r = 0);
                                var s = f.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                t.css({
                                    opacity: s
                                }).transform("translate3d(" + r + "px, " + a + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            f.slides.transition(e)
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var e, t = 0;
                            f.params.cube.shadow && (i() ? (e = f.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = h('<div class="swiper-cube-shadow"></div>'), f.wrapper.append(e)), e.css({
                                height: f.width + "px"
                            })) : (e = f.container.find(".swiper-cube-shadow"), 0 === e.length && (e = h('<div class="swiper-cube-shadow"></div>'), f.container.append(e))));
                            for (var n = 0; n < f.slides.length; n++) {
                                var r = f.slides.eq(n),
                                    a = 90 * n,
                                    s = Math.floor(a / 360);
                                f.rtl && (a = -a, s = Math.floor(-a / 360));
                                var o = Math.max(Math.min(r[0].progress, 1), -1),
                                    l = 0,
                                    u = 0,
                                    d = 0;
                                n % 4 === 0 ? (l = 4 * -s * f.size, d = 0) : (n - 1) % 4 === 0 ? (l = 0, d = 4 * -s * f.size) : (n - 2) % 4 === 0 ? (l = f.size + 4 * s * f.size, d = f.size) : (n - 3) % 4 === 0 && (l = -f.size, d = 3 * f.size + 4 * f.size * s), f.rtl && (l = -l), i() || (u = l, l = 0);
                                var c = "rotateX(" + (i() ? 0 : -a) + "deg) rotateY(" + (i() ? a : 0) + "deg) translate3d(" + l + "px, " + u + "px, " + d + "px)";
                                if (1 >= o && o > -1 && (t = 90 * n + 90 * o, f.rtl && (t = 90 * -n - 90 * o)), r.transform(c), f.params.cube.slideShadows) {
                                    var p = r.find(i() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                        m = r.find(i() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                    0 === p.length && (p = h('<div class="swiper-slide-shadow-' + (i() ? "left" : "top") + '"></div>'), r.append(p)), 0 === m.length && (m = h('<div class="swiper-slide-shadow-' + (i() ? "right" : "bottom") + '"></div>'), r.append(m)), r[0].progress, p.length && (p[0].style.opacity = -r[0].progress), m.length && (m[0].style.opacity = r[0].progress)
                                }
                            }
                            if (f.wrapper.css({
                                    "-webkit-transform-origin": "50% 50% -" + f.size / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + f.size / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + f.size / 2 + "px",
                                    "transform-origin": "50% 50% -" + f.size / 2 + "px"
                                }), f.params.cube.shadow)
                                if (i()) e.transform("translate3d(0px, " + (f.width / 2 + f.params.cube.shadowOffset) + "px, " + -f.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + f.params.cube.shadowScale + ")");
                                else {
                                    var g = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                        v = 1.5 - (Math.sin(2 * g * Math.PI / 360) / 2 + Math.cos(2 * g * Math.PI / 360) / 2),
                                        y = f.params.cube.shadowScale,
                                        w = f.params.cube.shadowScale / v,
                                        x = f.params.cube.shadowOffset;
                                    e.transform("scale3d(" + y + ", 1, " + w + ") translate3d(0px, " + (f.height / 2 + x) + "px, " + -f.height / 2 / w + "px) rotateX(-90deg)")
                                }
                            var b = f.isSafari || f.isUiWebView ? -f.size / 2 : 0;
                            f.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (i() ? 0 : t) + "deg) rotateY(" + (i() ? -t : 0) + "deg)");

                        },
                        setTransition: function(e) {
                            f.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), f.params.cube.shadow && !i() && f.container.find(".swiper-cube-shadow").transition(e)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var e = f.translate, t = i() ? -e + f.width / 2 : -e + f.height / 2, n = i() ? f.params.coverflow.rotate : -f.params.coverflow.rotate, r = f.params.coverflow.depth, a = 0, s = f.slides.length; s > a; a++) {
                                var o = f.slides.eq(a),
                                    l = f.slidesSizesGrid[a],
                                    u = o[0].swiperSlideOffset,
                                    d = (t - u - l / 2) / l * f.params.coverflow.modifier,
                                    c = i() ? n * d : 0,
                                    p = i() ? 0 : n * d,
                                    m = -r * Math.abs(d),
                                    g = i() ? 0 : f.params.coverflow.stretch * d,
                                    v = i() ? f.params.coverflow.stretch * d : 0;
                                Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(c) < .001 && (c = 0), Math.abs(p) < .001 && (p = 0);
                                var y = "translate3d(" + v + "px," + g + "px," + m + "px)  rotateX(" + p + "deg) rotateY(" + c + "deg)";
                                if (o.transform(y), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, f.params.coverflow.slideShadows) {
                                    var w = o.find(i() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                        x = o.find(i() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                    0 === w.length && (w = h('<div class="swiper-slide-shadow-' + (i() ? "left" : "top") + '"></div>'), o.append(w)), 0 === x.length && (x = h('<div class="swiper-slide-shadow-' + (i() ? "right" : "bottom") + '"></div>'), o.append(x)), w.length && (w[0].style.opacity = d > 0 ? d : 0), x.length && (x[0].style.opacity = -d > 0 ? -d : 0)
                                }
                            }
                            if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
                                var b = f.wrapper.style;
                                b.perspectiveOrigin = t + "px 50%"
                            }
                        },
                        setTransition: function(e) {
                            f.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                }, f.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(e) {
                        if ("undefined" != typeof e && 0 !== f.slides.length) {
                            var t = f.slides.eq(e),
                                n = t.find("img.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                            0 !== n.length && n.each(function() {
                                var e = h(this);
                                e.addClass("swiper-lazy-loading");
                                var n = e.attr("data-src");
                                f.loadImage(e[0], n, !1, function() {
                                    e.attr("src", n), e.removeAttr("data-src"), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), t.find(".swiper-lazy-preloader, .preloader").remove(), f.params.onLazyImageLoaded && f.params.onLazyImageLoaded(f, t[0], e[0])
                                }), f.params.onLazyImageLoad && f.params.onLazyImageLoad(f, t[0], e[0])
                            })
                        }
                    },
                    load: function() {
                        if (f.params.watchSlidesVisibility) f.wrapper.children("." + f.params.slideVisibleClass).each(function() {
                            f.lazy.loadImageInSlide(h(this).index())
                        });
                        else if (f.params.slidesPerView > 1)
                            for (var e = f.activeIndex; e < f.activeIndex + f.params.slidesPerView; e++) f.slides[e] && f.lazy.loadImageInSlide(e);
                        else f.lazy.loadImageInSlide(f.activeIndex);
                        if (f.params.lazyLoadingInPrevNext) {
                            var t = f.wrapper.children("." + f.params.slideNextClass);
                            t.length > 0 && f.lazy.loadImageInSlide(t.index());
                            var n = f.wrapper.children("." + f.params.slidePrevClass);
                            n.length > 0 && f.loadImageInSlide(n.index())
                        }
                    },
                    onTransitionStart: function() {
                        f.params.lazyLoading && (f.params.lazyLoadingOnTransitionStart || !f.params.lazyLoadingOnTransitionStart && !f.lazy.initialImageLoaded) && (f.lazy.initialImageLoaded = !0, f.lazy.load())
                    },
                    onTransitionEnd: function() {
                        f.params.lazyLoading && !f.params.lazyLoadingOnTransitionStart && f.lazy.load()
                    }
                }, f.scrollbar = {
                    set: function() {
                        if (f.params.scrollbar) {
                            var e = f.scrollbar;
                            e.track = h(f.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = h('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = i() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = f.size / f.virtualWidth, e.moveDivider = e.divider * (e.trackSize / f.size), e.dragSize = e.trackSize * e.divider, i() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.track[0].style.display = e.divider >= 1 ? "none" : "", f.params.scrollbarHide && (e.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (f.params.scrollbar) {
                            var e, t = f.scrollbar,
                                n = (f.translate || 0, t.dragSize);
                            e = (t.trackSize - t.dragSize) * f.progress, f.rtl && i() ? (e = -e, e > 0 ? (n = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e)) : 0 > e ? (n = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e), i() ? (t.drag.transform("translate3d(" + e + "px, 0, 0)"), t.drag[0].style.width = n + "px") : (t.drag.transform("translate3d(0px, " + e + "px, 0)"), t.drag[0].style.height = n + "px"), f.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                                t.track[0].style.opacity = 0, t.track.transition(400)
                            }, 1e3))
                        }
                    },
                    setTransition: function(e) {
                        f.params.scrollbar && f.scrollbar.drag.transition(e)
                    }
                }, f.controller = {
                    setTranslate: function(e, t) {
                        var n, i, r = f.params.control;
                        if (f.isArray(r))
                            for (var a = 0; a < r.length; a++) r[a] !== t && r[a] instanceof Swiper && (e = r[a].rtl && "horizontal" === r[a].params.direction ? -f.translate : f.translate, n = (r[a].maxTranslate() - r[a].minTranslate()) / (f.maxTranslate() - f.minTranslate()), i = (e - f.minTranslate()) * n + r[a].minTranslate(), f.params.controlInverse && (i = r[a].maxTranslate() - i), r[a].updateProgress(i), r[a].setWrapperTranslate(i, !1, f), r[a].updateActiveIndex());
                        else r instanceof Swiper && t !== r && (e = r.rtl && "horizontal" === r.params.direction ? -f.translate : f.translate, n = (r.maxTranslate() - r.minTranslate()) / (f.maxTranslate() - f.minTranslate()), i = (e - f.minTranslate()) * n + r.minTranslate(), f.params.controlInverse && (i = r.maxTranslate() - i), r.updateProgress(i), r.setWrapperTranslate(i, !1, f), r.updateActiveIndex())
                    },
                    setTransition: function(e, t) {
                        var n = f.params.control;
                        if (f.isArray(n))
                            for (var i = 0; i < n.length; i++) n[i] !== t && n[i] instanceof Swiper && n[i].setWrapperTransition(e, f);
                        else n instanceof Swiper && t !== n && n.setWrapperTransition(e, f)
                    }
                }, f.hashnav = {
                    init: function() {
                        if (f.params.hashnav) {
                            f.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e)
                                for (var t = 0, n = 0, i = f.slides.length; i > n; n++) {
                                    var r = f.slides.eq(n),
                                        a = r.attr("data-hash");
                                    if (a === e && !r.hasClass(f.params.slideDuplicateClass)) {
                                        var s = r.index();
                                        f.slideTo(s, t, f.params.runCallbacksOnInit, !0)
                                    }
                                }
                        }
                    },
                    setHash: function() {
                        f.hashnav.initialized && f.params.hashnav && (document.location.hash = f.slides.eq(f.activeIndex).attr("data-hash") || "")
                    }
                }, f.disableKeyboardControl = function() {
                    h(document).off("keydown", o)
                }, f.enableKeyboardControl = function() {
                    h(document).on("keydown", o)
                }, f._wheelEvent = !1, f._lastWheelScrollTime = (new Date).getTime(), f.params.mousewheelControl) {
                if (void 0 !== document.onmousewheel && (f._wheelEvent = "mousewheel"), !f._wheelEvent) try {
                    new WheelEvent("wheel"), f._wheelEvent = "wheel"
                } catch (M) {}
                f._wheelEvent || (f._wheelEvent = "DOMMouseScroll")
            }
            return f.disableMousewheelControl = function() {
                return f._wheelEvent ? (f.container.off(f._wheelEvent, l), !0) : !1
            }, f.enableMousewheelControl = function() {
                return f._wheelEvent ? (f.container.on(f._wheelEvent, l), !0) : !1
            }, f.parallax = {
                setTranslate: function() {
                    f.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        u(this, f.progress)
                    }), f.slides.each(function() {
                        var e = h(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var t = Math.min(Math.max(e[0].progress, -1), 1);
                            u(this, t)
                        })
                    })
                },
                setTransition: function(e) {
                    "undefined" == typeof e && (e = f.params.speed), f.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var t = h(this),
                            n = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (n = 0), t.transition(n)
                    })
                }
            }, f.init = function() {
                f.params.loop && f.createLoop(), f.updateContainerSize(), f.updateSlidesSize(), f.updatePagination(), f.params.scrollbar && f.scrollbar && f.scrollbar.set(), "slide" !== f.params.effect && f.effects[f.params.effect] && (f.params.loop || f.updateProgress(), f.effects[f.params.effect].setTranslate()), f.params.loop ? f.slideTo(f.params.initialSlide + f.loopedSlides, 0, f.params.runCallbacksOnInit) : (f.slideTo(f.params.initialSlide, 0, f.params.runCallbacksOnInit), 0 === f.params.initialSlide && (f.parallax && f.params.parallax && f.parallax.setTranslate(), f.lazy && f.params.lazyLoading && f.lazy.load())), f.attachEvents(), f.params.observer && f.support.observer && f.initObservers(), f.params.preloadImages && !f.params.lazyLoading && f.preloadImages(), f.params.autoplay && f.startAutoplay(), f.params.keyboardControl && f.enableKeyboardControl && f.enableKeyboardControl(), f.params.mousewheelControl && f.enableMousewheelControl && f.enableMousewheelControl(), f.params.hashnav && f.hashnav && f.hashnav.init(), f.params.onInit && f.params.onInit(f)
            }, f.destroy = function(e) {
                f.detachEvents(), f.disconnectObservers(), f.params.keyboardControl && f.disableKeyboardControl && f.disableKeyboardControl(), f.params.mousewheelControl && f.disableMousewheelControl && f.disableMousewheelControl(), f.params.onDestroy && f.params.onDestroy(), e !== !1 && (f = null)
            }, f.init(), f
        }
    }, Swiper.prototype = {
        isSafari: function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled
        },
        device: function() {
            var e = navigator.userAgent,
                t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                n = e.match(/(iPad).*OS\s([\d_]+)/),
                i = (e.match(/(iPod)(.*OS\s([\d_]+))?/), !n && e.match(/(iPhone\sOS)\s([\d_]+)/));
            return {
                ios: n || i || n,
                android: t
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, t = "WebkitBox msFlexbox MsFlexbox WebkitFlex MozBox flex".split(" "), n = 0; n < t.length; n++)
                    if (t[n] in e) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }()
        }
    };
    for (var t = (function() {
            var e = function(e) {
                    var t = this,
                        n = 0;
                    for (n = 0; n < e.length; n++) t[n] = e[n];
                    return t.length = e.length, this
                },
                t = function(t, n) {
                    var i = [],
                        r = 0;
                    if (t && !n && t instanceof e) return t;
                    if (t)
                        if ("string" == typeof t) {
                            var a, s, o = t.trim();
                            if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                                var l = "div";
                                for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), (0 === o.indexOf("<td") || 0 === o.indexOf("<th")) && (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), s = document.createElement(l), s.innerHTML = t, r = 0; r < s.childNodes.length; r++) i.push(s.childNodes[r])
                            } else
                                for (a = n || "#" !== t[0] || t.match(/[ .<>:~]/) ? (n || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], r = 0; r < a.length; r++) a[r] && i.push(a[r])
                        } else if (t.nodeType || t === window || t === document) i.push(t);
                    else if (t.length > 0 && t[0].nodeType)
                        for (r = 0; r < t.length; r++) i.push(t[r]);
                    return new e(i)
                };
            return e.prototype = {
                addClass: function(e) {
                    if ("undefined" == typeof e) return this;
                    for (var t = e.split(" "), n = 0; n < t.length; n++)
                        for (var i = 0; i < this.length; i++) this[i].classList.add(t[n]);
                    return this
                },
                removeClass: function(e) {
                    for (var t = e.split(" "), n = 0; n < t.length; n++)
                        for (var i = 0; i < this.length; i++) this[i].classList.remove(t[n]);
                    return this
                },
                hasClass: function(e) {
                    return this[0] ? this[0].classList.contains(e) : !1
                },
                toggleClass: function(e) {
                    for (var t = e.split(" "), n = 0; n < t.length; n++)
                        for (var i = 0; i < this.length; i++) this[i].classList.toggle(t[n]);
                    return this
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var n = 0; n < this.length; n++)
                        if (2 === arguments.length) this[n].setAttribute(e, t);
                        else
                            for (var i in e) this[n][i] = e[i], this[n].setAttribute(i, e[i]);
                    return this
                },
                removeAttr: function(e) {
                    for (var t = 0; t < this.length; t++) this[t].removeAttribute(e)
                },
                data: function(e, t) {
                    if ("undefined" == typeof t) {
                        if (this[0]) {
                            var n = this[0].getAttribute("data-" + e);
                            return n ? n : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
                        }
                        return void 0
                    }
                    for (var i = 0; i < this.length; i++) {
                        var r = this[i];
                        r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}), r.dom7ElementDataStorage[e] = t
                    }
                    return this
                },
                transform: function(e) {
                    for (var t = 0; t < this.length; t++) {
                        var n = this[t].style;
                        n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var t = 0; t < this.length; t++) {
                        var n = this[t].style;
                        n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
                    }
                    return this
                },
                on: function(e, n, i, r) {
                    function a(e) {
                        var r = e.target;
                        if (t(r).is(n)) i.call(r, e);
                        else
                            for (var a = t(r).parents(), s = 0; s < a.length; s++) t(a[s]).is(n) && i.call(a[s], e)
                    }
                    var s, o, l = e.split(" ");
                    for (s = 0; s < this.length; s++)
                        if ("function" == typeof n || n === !1)
                            for ("function" == typeof n && (i = arguments[1], r = arguments[2] || !1), o = 0; o < l.length; o++) this[s].addEventListener(l[o], i, r);
                        else
                            for (o = 0; o < l.length; o++) this[s].dom7LiveListeners || (this[s].dom7LiveListeners = []), this[s].dom7LiveListeners.push({
                                listener: i,
                                liveListener: a
                            }), this[s].addEventListener(l[o], a, r);
                    return this
                },
                off: function(e, t, n, i) {
                    for (var r = e.split(" "), a = 0; a < r.length; a++)
                        for (var s = 0; s < this.length; s++)
                            if ("function" == typeof t || t === !1) "function" == typeof t && (n = arguments[1], i = arguments[2] || !1), this[s].removeEventListener(r[a], n, i);
                            else if (this[s].dom7LiveListeners)
                        for (var o = 0; o < this[s].dom7LiveListeners.length; o++) this[s].dom7LiveListeners[o].listener === n && this[s].removeEventListener(r[a], this[s].dom7LiveListeners[o].liveListener, i);
                    return this
                },
                once: function(e, t, n, i) {
                    function r(s) {
                        n(s), a.off(e, t, r, i)
                    }
                    var a = this;
                    "function" == typeof t && (t = !1, n = arguments[1], i = arguments[2]), a.on(e, t, r, i)
                },
                trigger: function(e, t) {
                    for (var n = 0; n < this.length; n++) {
                        var i;
                        try {
                            i = new CustomEvent(e, {
                                detail: t,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (r) {
                            i = document.createEvent("Event"), i.initEvent(e, !0, !0), i.detail = t
                        }
                        this[n].dispatchEvent(i)
                    }
                    return this
                },
                transitionEnd: function(e) {
                    function t(a) {
                        if (a.target === this)
                            for (e.call(this, a), n = 0; n < i.length; n++) r.off(i[n], t)
                    }
                    var n, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        r = this;
                    if (e)
                        for (n = 0; n < i.length; n++) r.on(i[n], t);
                    return this
                },
                width: function() {
                    return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                },
                outerWidth: function(e) {
                    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                },
                height: function() {
                    return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                },
                outerHeight: function(e) {
                    return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0],
                            t = e.getBoundingClientRect(),
                            n = document.body,
                            i = e.clientTop || n.clientTop || 0,
                            r = e.clientLeft || n.clientLeft || 0,
                            a = window.pageYOffset || e.scrollTop,
                            s = window.pageXOffset || e.scrollLeft;
                        return {
                            top: t.top + a - i,
                            left: t.left + s - r
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    var n;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (n = 0; n < this.length; n++)
                                for (var i in e) this[n].style[i] = e[i];
                            return this
                        }
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (n = 0; n < this.length; n++) this[n].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                    return this
                },
                html: function(e) {
                    if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;
                    for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                    return this
                },
                is: function(n) {
                    if (!this[0]) return !1;
                    var i, r;
                    if ("string" == typeof n) {
                        var a = this[0];
                        if (a === document) return n === document;
                        if (a === window) return n === window;
                        if (a.matches) return a.matches(n);
                        if (a.webkitMatchesSelector) return a.webkitMatchesSelector(n);
                        if (a.mozMatchesSelector) return a.mozMatchesSelector(n);
                        if (a.msMatchesSelector) return a.msMatchesSelector(n);
                        for (i = t(n), r = 0; r < i.length; r++)
                            if (i[r] === this[0]) return !0;
                        return !1
                    }
                    if (n === document) return this[0] === document;
                    if (n === window) return this[0] === window;
                    if (n.nodeType || n instanceof e) {
                        for (i = n.nodeType ? [n] : n, r = 0; r < i.length; r++)
                            if (i[r] === this[0]) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    if (this[0]) {
                        for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
                        return t
                    }
                    return void 0
                },
                eq: function(t) {
                    if ("undefined" == typeof t) return this;
                    var n, i = this.length;
                    return t > i - 1 ? new e([]) : 0 > t ? (n = i + t, new e(0 > n ? [] : [this[n]])) : new e([this[t]])
                },
                append: function(t) {
                    var n, i;
                    for (n = 0; n < this.length; n++)
                        if ("string" == typeof t) {
                            var r = document.createElement("div");
                            for (r.innerHTML = t; r.firstChild;) this[n].appendChild(r.firstChild)
                        } else if (t instanceof e)
                        for (i = 0; i < t.length; i++) this[n].appendChild(t[i]);
                    else this[n].appendChild(t);
                    return this
                },
                prepend: function(t) {
                    var n, i;
                    for (n = 0; n < this.length; n++)
                        if ("string" == typeof t) {
                            var r = document.createElement("div");
                            for (r.innerHTML = t, i = r.childNodes.length - 1; i >= 0; i--) this[n].insertBefore(r.childNodes[i], this[n].childNodes[0])
                        } else if (t instanceof e)
                        for (i = 0; i < t.length; i++) this[n].insertBefore(t[i], this[n].childNodes[0]);
                    else this[n].insertBefore(t, this[n].childNodes[0]);
                    return this
                },
                insertBefore: function(e) {
                    for (var n = t(e), i = 0; i < this.length; i++)
                        if (1 === n.length) n[0].parentNode.insertBefore(this[i], n[0]);
                        else if (n.length > 1)
                        for (var r = 0; r < n.length; r++) n[r].parentNode.insertBefore(this[i].cloneNode(!0), n[r])
                },
                insertAfter: function(e) {
                    for (var n = t(e), i = 0; i < this.length; i++)
                        if (1 === n.length) n[0].parentNode.insertBefore(this[i], n[0].nextSibling);
                        else if (n.length > 1)
                        for (var r = 0; r < n.length; r++) n[r].parentNode.insertBefore(this[i].cloneNode(!0), n[r].nextSibling)
                },
                next: function(n) {
                    return new e(this.length > 0 ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                },
                nextAll: function(n) {
                    var i = [],
                        r = this[0];
                    if (!r) return new e([]);
                    for (; r.nextElementSibling;) {
                        var a = r.nextElementSibling;
                        n ? t(a).is(n) && i.push(a) : i.push(a), r = a
                    }
                    return new e(i)
                },
                prev: function(n) {
                    return new e(this.length > 0 ? n ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(n) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                },
                prevAll: function(n) {
                    var i = [],
                        r = this[0];
                    if (!r) return new e([]);
                    for (; r.previousElementSibling;) {
                        var a = r.previousElementSibling;
                        n ? t(a).is(n) && i.push(a) : i.push(a), r = a
                    }
                    return new e(i)
                },
                parent: function(e) {
                    for (var n = [], i = 0; i < this.length; i++) e ? t(this[i].parentNode).is(e) && n.push(this[i].parentNode) : n.push(this[i].parentNode);
                    return t(t.unique(n))
                },
                parents: function(e) {
                    for (var n = [], i = 0; i < this.length; i++)
                        for (var r = this[i].parentNode; r;) e ? t(r).is(e) && n.push(r) : n.push(r), r = r.parentNode;
                    return t(t.unique(n))
                },
                find: function(t) {
                    for (var n = [], i = 0; i < this.length; i++)
                        for (var r = this[i].querySelectorAll(t), a = 0; a < r.length; a++) n.push(r[a]);
                    return new e(n)
                },
                children: function(n) {
                    for (var i = [], r = 0; r < this.length; r++)
                        for (var a = this[r].childNodes, s = 0; s < a.length; s++) n ? 1 === a[s].nodeType && t(a[s]).is(n) && i.push(a[s]) : 1 === a[s].nodeType && i.push(a[s]);
                    return new e(t.unique(i))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                add: function() {
                    var e, n, i = this;
                    for (e = 0; e < arguments.length; e++) {
                        var r = t(arguments[e]);
                        for (n = 0; n < r.length; n++) i[i.length] = r[n], i.length++
                    }
                    return i
                }
            }, t.fn = e.prototype, t.unique = function(e) {
                for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
                return t
            }, t
        }()), n = ["jQuery", "Zepto", "Dom7"], i = 0; i < n.length; i++) window[n[i]] && e(window[n[i]]);
    var r;
    r = "undefined" == typeof t ? window.Dom7 || window.Zepto || window.jQuery : t, r && ("transitionEnd" in r.fn || (r.fn.transitionEnd = function(e) {
        function t(a) {
            if (a.target === this)
                for (e.call(this, a), n = 0; n < i.length; n++) r.off(i[n], t)
        }
        var n, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            r = this;
        if (e)
            for (n = 0; n < i.length; n++) r.on(i[n], t);
        return this
    }), "transform" in r.fn || (r.fn.transform = function(e) {
        for (var t = 0; t < this.length; t++) {
            var n = this[t].style;
            n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
        }
        return this
    }), "transition" in r.fn || (r.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var n = this[t].style;
            n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
        }
        return this
    }))
}(), "undefined" != typeof module ? module.exports = Swiper : "function" == typeof define && define.amd && define([], function() {
        "use strict";
        return Swiper
    }),
    function(e) { //Youtube video start
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = e(window).width() <= 1100 ? e(window).width() < 763 ? "mobile" : "tablet" : "desktop",
            n = {},
            i = window.Overlayer || {};
        i = function() {
            function t(t, r) {
                this.id = i++, this.element = t, this.settings = e.extend({}, n, r), this.init()
            }
            var i = 0;
            return t
        }(), i.prototype.init = function() {
            this.video = e(this.element).find("iframe"), this.video.attr("src").indexOf("youtube") > -1 && "desktop" == t && (this.updateVideo(), this.attach())
        }, i.prototype.attach = function() {
            this.addVideo(), this.addDialog();
            var t = this;
            e(this.element).find("a.replay").on("click", function(e) {
                t.toggle(), t.player.playVideo(), e.preventDefault()
            })
        }, i.prototype.updateVideo = function() {
            this.video.src = this.video.attr("src"), this.video.attr({
                src: this.video.src + "?enablejsapi=1"
            }), this.video.id = "yt" + this.id, this.video.attr({
                id: this.video.id
            })
        }, i.prototype.addVideo = function() {
            var e = this;
            this.player = new YT.Player(this.video.id, {
                events: {
                    onReady: function() {
                        console.log("ready")
                    },
                    onStateChange: function(t) {
                        t.data == YT.PlayerState.ENDED && (console.log("done"), e.toggle())
                    }
                }
            })
        }, i.prototype.toggle = function() {
            this.dialog.css("none" == this.dialog.css("display") ? {
                display: "block"
            } : {
                display: "none"
            })
        }, i.prototype.getYoutubeId = function(e) {
            return e.substring(e.lastIndexOf("/") + 1)
        }, i.prototype.addDialog = function() {
            this.dialog = e("dialog").clone(), e(this.element).append(this.dialog)
        }, e.fn.overlayer = function() {
            var e, t = this,
                n = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                a = t.length,
                s = 0;
            for (s; a > s; s++)
                if ("object" == typeof n || "undefined" == typeof n ? t[s].overlayer = new i(t[s], n) : e = t[s].overlayer[n].apply(t[s].overlayer, r), "undefined" != typeof e) return e;
            return t
        }, e.getScript("//www.youtube.com/iframe_api").done(function(t, n) {
            window.onYouTubeIframeAPIReady = function() {
                e(function() {
                    e("figure.embed").overlayer()
                })
            }
        })
    }), $(function() {
        $("a.bookmark").click(function() {
            if (window.sidebar && window.sidebar.addPanel) window.sidebar.addPanel(document.title, window.location.href, "");
            else if (window.sidebar && navigator.userAgent.indexOf("Firefox") > 0) $(this).attr("rel", "sidebar");
            else if (window.external && "AddFavorite" in window.external) window.external.AddFavorite(location.href, document.title);
            else {
                if (window.opera && window.print) return this.title = document.title, !0;
                alert("Press " + (-1 != navigator.userAgent.toLowerCase().indexOf("mac") ? "Command/Cmd" : "CTRL") + " + D to bookmark this page.")
            }
        })
    });
for (var span = $(".dots span"), divh = $(".dots").height(); $(span).outerHeight() > divh;) $(span).text(function(e, t) {
    return t.replace(/\W*\s(\S)*$/, "...")
});
$(document).ready(function() {
        $(".carousel").carousel({
            vertical: !0
        })
    }),
    function(e, t, n, i, r, a, s) {
        e.GoogleAnalyticsObject = r, e[r] = e[r] || function() {
            (e[r].q = e[r].q || []).push(arguments)
        }, e[r].l = 1 * new Date, a = t.createElement(n), s = t.getElementsByTagName(n)[0], a.async = 1, a.src = i, s.parentNode.insertBefore(a, s)
    }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-55870435-23", "auto"), ga("send", "pageview"),
    function(e, t, n, i, r, a) {
        null == e[t] && e[n + r] && (e[t] = "loading", e[n + r](a, n = function() {
            e[t] = "complete", e[i + r](a, n, !1)
        }, !1))
    }(document, "readyState", "add", "remove", "EventListener", "DOMContentLoaded");
	


