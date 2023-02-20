if (function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var i = [], o = t.document, n = Object.getPrototypeOf, s = i.slice, r = i.concat, a = i.push, l = i.indexOf, c = {},
        h = c.toString, d = c.hasOwnProperty, u = d.toString, p = u.call(Object), f = {};

    function m(t, e) {
        var i = (e = e || o).createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
    }

    var g = "3.1.0", v = function (t, e) {
        return new v.fn.init(t, e)
    }, y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, w = /^-ms-/, b = /-([a-z])/g, x = function (t, e) {
        return e.toUpperCase()
    };

    function k(t) {
        var e = !!t && "length" in t && t.length, i = v.type(t);
        return "function" !== i && !v.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    v.fn = v.prototype = {
        jquery: g, constructor: v, length: 0, toArray: function () {
            return s.call(this)
        }, get: function (t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : s.call(this)
        }, pushStack: function (t) {
            var e = v.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return v.each(this, t)
        }, map: function (t) {
            return this.pushStack(v.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        }, slice: function () {
            return this.pushStack(s.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: a, sort: i.sort, splice: i.splice
    }, v.extend = v.fn.extend = function () {
        var t, e, i, o, n, s, r = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || v.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = r[e], o = t[e], r !== o && (c && o && (v.isPlainObject(o) || (n = v.isArray(o))) ? (n ? (n = !1, s = i && v.isArray(i) ? i : []) : s = i && v.isPlainObject(i) ? i : {}, r[e] = v.extend(c, s, o)) : void 0 !== o && (r[e] = o));
        return r
    }, v.extend({
        expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === v.type(t)
        }, isArray: Array.isArray, isWindow: function (t) {
            return null != t && t === t.window
        }, isNumeric: function (t) {
            var e = v.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== h.call(t) || (e = n(t)) && (i = d.call(e, "constructor") && e.constructor, "function" != typeof i || u.call(i) !== p))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[h.call(t)] || "object" : typeof t
        }, globalEval: function (t) {
            m(t)
        }, camelCase: function (t) {
            return t.replace(w, "ms-").replace(b, x)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e) {
            var i, o = 0;
            if (k(t)) for (i = t.length; o < i && !1 !== e.call(t[o], o, t[o]); o++) ; else for (o in t) if (!1 === e.call(t[o], o, t[o])) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(y, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (k(Object(t)) ? v.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
        }, inArray: function (t, e, i) {
            return null == e ? -1 : l.call(e, t, i)
        }, merge: function (t, e) {
            for (var i = +e.length, o = 0, n = t.length; o < i; o++) t[n++] = e[o];
            return t.length = n, t
        }, grep: function (t, e, i) {
            for (var o, n = [], s = 0, r = t.length, a = !i; s < r; s++) o = !e(t[s], s), o !== a && n.push(t[s]);
            return n
        }, map: function (t, e, i) {
            var o, n, s = 0, a = [];
            if (k(t)) for (o = t.length; s < o; s++) n = e(t[s], s, i), null != n && a.push(n); else for (s in t) n = e(t[s], s, i), null != n && a.push(n);
            return r.apply([], a)
        }, guid: 1, proxy: function (t, e) {
            var i, o, n;
            if ("string" == typeof e && (i = t[e], e = t, t = i), v.isFunction(t)) return o = s.call(arguments, 2), n = function () {
                return t.apply(e || this, o.concat(s.call(arguments)))
            }, n.guid = t.guid = t.guid || v.guid++, n
        }, now: Date.now, support: f
    }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = i[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        c["[object " + e + "]"] = e.toLowerCase()
    });
    var _ = function (t) {
        var e, i, o, n, s, r, a, l, c, h, d, u, p, f, m, g, v, y, w, b = "sizzle" + 1 * new Date, x = t.document, k = 0,
            _ = 0, $ = rt(), T = rt(), S = rt(), C = function (t, e) {
                return t === e && (d = !0), 0
            }, A = {}.hasOwnProperty, E = [], M = E.pop, I = E.push, D = E.push, O = E.slice, P = function (t, e) {
                for (var i = 0, o = t.length; i < o; i++) if (t[i] === e) return i;
                return -1
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            z = "\\[" + N + "*(" + L + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + N + "*\\]",
            H = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            R = new RegExp(N + "+", "g"), q = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
            F = new RegExp("^" + N + "*," + N + "*"), W = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
            U = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"), B = new RegExp(H),
            Q = new RegExp("^" + L + "$"), X = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
            }, K = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, V = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"), tt = function (t, e, i) {
                var o = "0x" + e - 65536;
                return o != o || i ? e : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
            }, et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, it = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, ot = function () {
                u()
            }, nt = yt(function (t) {
                return !0 === t.disabled
            }, {dir: "parentNode", next: "legend"});
        try {
            D.apply(E = O.call(x.childNodes), x.childNodes), E[x.childNodes.length].nodeType
        } catch (t) {
            D = {
                apply: E.length ? function (t, e) {
                    I.apply(t, O.call(e))
                } : function (t, e) {
                    for (var i = t.length, o = 0; t[i++] = e[o++];) ;
                    t.length = i - 1
                }
            }
        }

        function st(t, e, o, n) {
            var s, a, c, h, d, f, v, y = e && e.ownerDocument, k = e ? e.nodeType : 9;
            if (o = o || [], "string" != typeof t || !t || 1 !== k && 9 !== k && 11 !== k) return o;
            if (!n && ((e ? e.ownerDocument || e : x) !== p && u(e), e = e || p, m)) {
                if (11 !== k && (d = G.exec(t))) if (s = d[1]) {
                    if (9 === k) {
                        if (!(c = e.getElementById(s))) return o;
                        if (c.id === s) return o.push(c), o
                    } else if (y && (c = y.getElementById(s)) && w(e, c) && c.id === s) return o.push(c), o
                } else {
                    if (d[2]) return D.apply(o, e.getElementsByTagName(t)), o;
                    if ((s = d[3]) && i.getElementsByClassName && e.getElementsByClassName) return D.apply(o, e.getElementsByClassName(s)), o
                }
                if (i.qsa && !S[t + " "] && (!g || !g.test(t))) {
                    if (1 !== k) y = e, v = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((h = e.getAttribute("id")) ? h = h.replace(et, it) : e.setAttribute("id", h = b), a = (f = r(t)).length; a--;) f[a] = "#" + h + " " + vt(f[a]);
                        v = f.join(","), y = Z.test(t) && mt(e.parentNode) || e
                    }
                    if (v) try {
                        return D.apply(o, y.querySelectorAll(v)), o
                    } catch (t) {
                    } finally {
                        h === b && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(q, "$1"), e, o, n)
        }

        function rt() {
            var t = [];
            return function e(i, n) {
                return t.push(i + " ") > o.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
        }

        function at(t) {
            return t[b] = !0, t
        }

        function lt(t) {
            var e = p.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ct(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) o.attrHandle[i[n]] = e
        }

        function ht(t, e) {
            var i = e && t, o = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (o) return o;
            if (i) for (; i = i.nextSibling;) if (i === e) return -1;
            return t ? 1 : -1
        }

        function dt(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ut(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function pt(t) {
            return function (e) {
                return "label" in e && e.disabled === t || "form" in e && e.disabled === t || "form" in e && !1 === e.disabled && (e.isDisabled === t || e.isDisabled !== !t && ("label" in e || !nt(e)) !== t)
            }
        }

        function ft(t) {
            return at(function (e) {
                return e = +e, at(function (i, o) {
                    for (var n, s = t([], i.length, e), r = s.length; r--;) i[n = s[r]] && (i[n] = !(o[n] = i[n]))
                })
            })
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        i = st.support = {}, s = st.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, u = st.setDocument = function (t) {
            var e, n, r = t ? t.ownerDocument || t : x;
            return r !== p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement, m = !s(p), x !== p && (n = p.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ot, !1) : n.attachEvent && n.attachEvent("onunload", ot)), i.attributes = lt(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), i.getElementsByTagName = lt(function (t) {
                return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
            }), i.getElementsByClassName = V.test(p.getElementsByClassName), i.getById = lt(function (t) {
                return f.appendChild(t).id = b, !p.getElementsByName || !p.getElementsByName(b).length
            }), i.getById ? (o.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && m) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }, o.filter.ID = function (t) {
                var e = t.replace(J, tt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete o.find.ID, o.filter.ID = function (t) {
                var e = t.replace(J, tt);
                return function (t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), o.find.TAG = i.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, o = [], n = 0, s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = s[n++];) 1 === i.nodeType && o.push(i);
                    return o
                }
                return s
            }, o.find.CLASS = i.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
            }, v = [], g = [], (i.qsa = V.test(p.querySelectorAll)) && (lt(function (t) {
                f.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + j + ")"), t.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
            }), lt(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = p.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
            })), (i.matchesSelector = V.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt(function (t) {
                i.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", H)
            }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = V.test(f.compareDocumentPosition), w = e || V.test(f.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, o = e && e.parentNode;
                return t === o || !(!o || 1 !== o.nodeType || !(i.contains ? i.contains(o) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(o)))
            } : function (t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                return !1
            }, C = e ? function (t, e) {
                if (t === e) return d = !0, 0;
                var o = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return o || (1 & (o = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === o ? t === p || t.ownerDocument === x && w(x, t) ? -1 : e === p || e.ownerDocument === x && w(x, e) ? 1 : h ? P(h, t) - P(h, e) : 0 : 4 & o ? -1 : 1)
            } : function (t, e) {
                if (t === e) return d = !0, 0;
                var i, o = 0, n = t.parentNode, s = e.parentNode, r = [t], a = [e];
                if (!n || !s) return t === p ? -1 : e === p ? 1 : n ? -1 : s ? 1 : h ? P(h, t) - P(h, e) : 0;
                if (n === s) return ht(t, e);
                for (i = t; i = i.parentNode;) r.unshift(i);
                for (i = e; i = i.parentNode;) a.unshift(i);
                for (; r[o] === a[o];) o++;
                return o ? ht(r[o], a[o]) : r[o] === x ? -1 : a[o] === x ? 1 : 0
            }, p) : p
        }, st.matches = function (t, e) {
            return st(t, null, null, e)
        }, st.matchesSelector = function (t, e) {
            if ((t.ownerDocument || t) !== p && u(t), e = e.replace(U, "='$1']"), i.matchesSelector && m && !S[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                var o = y.call(t, e);
                if (o || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return o
            } catch (t) {
            }
            return st(e, p, null, [t]).length > 0
        }, st.contains = function (t, e) {
            return (t.ownerDocument || t) !== p && u(t), w(t, e)
        }, st.attr = function (t, e) {
            (t.ownerDocument || t) !== p && u(t);
            var n = o.attrHandle[e.toLowerCase()],
                s = n && A.call(o.attrHandle, e.toLowerCase()) ? n(t, e, !m) : void 0;
            return void 0 !== s ? s : i.attributes || !m ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
        }, st.escape = function (t) {
            return (t + "").replace(et, it)
        }, st.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, st.uniqueSort = function (t) {
            var e, o = [], n = 0, s = 0;
            if (d = !i.detectDuplicates, h = !i.sortStable && t.slice(0), t.sort(C), d) {
                for (; e = t[s++];) e === t[s] && (n = o.push(s));
                for (; n--;) t.splice(o[n], 1)
            }
            return h = null, t
        }, n = st.getText = function (t) {
            var e, i = "", o = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += n(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else for (; e = t[o++];) i += n(e);
            return i
        }, (o = st.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && B.test(i) && (e = r(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(J, tt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = $[t + " "];
                    return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && $(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                }, ATTR: function (t, e, i) {
                    return function (o) {
                        var n = st.attr(o, t);
                        return null == n ? "!=" === e : !e || (n += "", "=" === e ? n === i : "!=" === e ? n !== i : "^=" === e ? i && 0 === n.indexOf(i) : "*=" === e ? i && n.indexOf(i) > -1 : "$=" === e ? i && n.slice(-i.length) === i : "~=" === e ? (" " + n.replace(R, " ") + " ").indexOf(i) > -1 : "|=" === e && (n === i || n.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (t, e, i, o, n) {
                    var s = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === o && 0 === n ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var c, h, d, u, p, f, m = s !== r ? "nextSibling" : "previousSibling", g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(), y = !l && !a, w = !1;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (u = e; u = u[m];) if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                for (w = (p = (c = (h = (d = (u = g)[b] || (u[b] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[t] || [])[0] === k && c[1]) && c[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (w = p = 0) || f.pop();) if (1 === u.nodeType && ++w && u === e) {
                                    h[t] = [k, p, w];
                                    break
                                }
                            } else if (y && (u = e, d = u[b] || (u[b] = {}), h = d[u.uniqueID] || (d[u.uniqueID] = {}), c = h[t] || [], p = c[0] === k && c[1], w = p), !1 === w) for (; (u = ++p && u && u[m] || (w = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++w || (y && (d = u[b] || (u[b] = {}), h = d[u.uniqueID] || (d[u.uniqueID] = {}), h[t] = [k, w]), u !== e));) ;
                            return (w -= n) === o || w % o == 0 && w / o >= 0
                        }
                    }
                }, PSEUDO: function (t, e) {
                    var i, n = o.pseudos[t] || o.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                    return n[b] ? n(e) : n.length > 1 ? (i = [t, t, "", e], o.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, i) {
                        for (var o, s = n(t, e), r = s.length; r--;) o = P(t, s[r]), t[o] = !(i[o] = s[r])
                    }) : function (t) {
                        return n(t, 0, i)
                    }) : n
                }
            },
            pseudos: {
                not: at(function (t) {
                    var e = [], i = [], o = a(t.replace(q, "$1"));
                    return o[b] ? at(function (t, e, i, n) {
                        for (var s, r = o(t, null, n, []), a = t.length; a--;) (s = r[a]) && (t[a] = !(e[a] = s))
                    }) : function (t, n, s) {
                        return e[0] = t, o(e, null, s, i), e[0] = null, !i.pop()
                    }
                }), has: at(function (t) {
                    return function (e) {
                        return st(t, e).length > 0
                    }
                }), contains: at(function (t) {
                    return t = t.replace(J, tt), function (e) {
                        return (e.textContent || e.innerText || n(e)).indexOf(t) > -1
                    }
                }), lang: at(function (t) {
                    return Q.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(), function (e) {
                        var i;
                        do {
                            if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                }, root: function (t) {
                    return t === f
                }, focus: function (t) {
                    return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: pt(!1), disabled: pt(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !o.pseudos.empty(t)
                }, header: function (t) {
                    return Y.test(t.nodeName)
                }, input: function (t) {
                    return K.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: ft(function () {
                    return [0]
                }), last: ft(function (t, e) {
                    return [e - 1]
                }), eq: ft(function (t, e, i) {
                    return [i < 0 ? i + e : i]
                }), even: ft(function (t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }), odd: ft(function (t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }), lt: ft(function (t, e, i) {
                    for (var o = i < 0 ? i + e : i; --o >= 0;) t.push(o);
                    return t
                }), gt: ft(function (t, e, i) {
                    for (var o = i < 0 ? i + e : i; ++o < e;) t.push(o);
                    return t
                })
            }
        }).pseudos.nth = o.pseudos.eq;
        for (e in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) o.pseudos[e] = dt(e);
        for (e in {submit: !0, reset: !0}) o.pseudos[e] = ut(e);

        function gt() {
        }

        function vt(t) {
            for (var e = 0, i = t.length, o = ""; e < i; e++) o += t[e].value;
            return o
        }

        function yt(t, e, i) {
            var o = e.dir, n = e.next, s = n || o, r = i && "parentNode" === s, a = _++;
            return e.first ? function (e, i, n) {
                for (; e = e[o];) if (1 === e.nodeType || r) return t(e, i, n)
            } : function (e, i, l) {
                var c, h, d, u = [k, a];
                if (l) {
                    for (; e = e[o];) if ((1 === e.nodeType || r) && t(e, i, l)) return !0
                } else for (; e = e[o];) if (1 === e.nodeType || r) if (d = e[b] || (e[b] = {}), h = d[e.uniqueID] || (d[e.uniqueID] = {}), n && n === e.nodeName.toLowerCase()) e = e[o] || e; else {
                    if ((c = h[s]) && c[0] === k && c[1] === a) return u[2] = c[2];
                    if (h[s] = u, u[2] = t(e, i, l)) return !0
                }
            }
        }

        function wt(t) {
            return t.length > 1 ? function (e, i, o) {
                for (var n = t.length; n--;) if (!t[n](e, i, o)) return !1;
                return !0
            } : t[0]
        }

        function bt(t, e, i, o, n) {
            for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++) (s = t[a]) && (i && !i(s, o, n) || (r.push(s), c && e.push(a)));
            return r
        }

        function xt(t, e, i, o, n, s) {
            return o && !o[b] && (o = xt(o)), n && !n[b] && (n = xt(n, s)), at(function (s, r, a, l) {
                var c, h, d, u = [], p = [], f = r.length, m = s || function (t, e, i) {
                        for (var o = 0, n = e.length; o < n; o++) st(t, e[o], i);
                        return i
                    }(e || "*", a.nodeType ? [a] : a, []), g = !t || !s && e ? m : bt(m, u, t, a, l),
                    v = i ? n || (s ? t : f || o) ? [] : r : g;
                if (i && i(g, v, a, l), o) for (c = bt(v, p), o(c, [], a, l), h = c.length; h--;) (d = c[h]) && (v[p[h]] = !(g[p[h]] = d));
                if (s) {
                    if (n || t) {
                        if (n) {
                            for (c = [], h = v.length; h--;) (d = v[h]) && c.push(g[h] = d);
                            n(null, v = [], c, l)
                        }
                        for (h = v.length; h--;) (d = v[h]) && (c = n ? P(s, d) : u[h]) > -1 && (s[c] = !(r[c] = d))
                    }
                } else v = bt(v === r ? v.splice(f, v.length) : v), n ? n(null, r, v, l) : D.apply(r, v)
            })
        }

        function kt(t) {
            for (var e, i, n, s = t.length, r = o.relative[t[0].type], a = r || o.relative[" "], l = r ? 1 : 0, h = yt(function (t) {
                return t === e
            }, a, !0), d = yt(function (t) {
                return P(e, t) > -1
            }, a, !0), u = [function (t, i, o) {
                var n = !r && (o || i !== c) || ((e = i).nodeType ? h(t, i, o) : d(t, i, o));
                return e = null, n
            }]; l < s; l++) if (i = o.relative[t[l].type]) u = [yt(wt(u), i)]; else {
                if ((i = o.filter[t[l].type].apply(null, t[l].matches))[b]) {
                    for (n = ++l; n < s && !o.relative[t[n].type]; n++) ;
                    return xt(l > 1 && wt(u), l > 1 && vt(t.slice(0, l - 1).concat({value: " " === t[l - 2].type ? "*" : ""})).replace(q, "$1"), i, l < n && kt(t.slice(l, n)), n < s && kt(t = t.slice(n)), n < s && vt(t))
                }
                u.push(i)
            }
            return wt(u)
        }

        return gt.prototype = o.filters = o.pseudos, o.setFilters = new gt, r = st.tokenize = function (t, e) {
            var i, n, s, r, a, l, c, h = T[t + " "];
            if (h) return e ? 0 : h.slice(0);
            for (a = t, l = [], c = o.preFilter; a;) {
                i && !(n = F.exec(a)) || (n && (a = a.slice(n[0].length) || a), l.push(s = [])), i = !1, (n = W.exec(a)) && (i = n.shift(), s.push({
                    value: i,
                    type: n[0].replace(q, " ")
                }), a = a.slice(i.length));
                for (r in o.filter) !(n = X[r].exec(a)) || c[r] && !(n = c[r](n)) || (i = n.shift(), s.push({
                    value: i,
                    type: r,
                    matches: n
                }), a = a.slice(i.length));
                if (!i) break
            }
            return e ? a.length : a ? st.error(t) : T(t, l).slice(0)
        }, a = st.compile = function (t, e) {
            var i, n, s, a, l, h, d = [], f = [], g = S[t + " "];
            if (!g) {
                for (e || (e = r(t)), i = e.length; i--;) g = kt(e[i]), g[b] ? d.push(g) : f.push(g);
                (g = S(t, (n = f, a = (s = d).length > 0, l = n.length > 0, h = function (t, e, i, r, h) {
                    var d, f, g, v = 0, y = "0", w = t && [], b = [], x = c, _ = t || l && o.find.TAG("*", h),
                        $ = k += null == x ? 1 : Math.random() || .1, T = _.length;
                    for (h && (c = e === p || e || h); y !== T && null != (d = _[y]); y++) {
                        if (l && d) {
                            for (f = 0, e || d.ownerDocument === p || (u(d), i = !m); g = n[f++];) if (g(d, e || p, i)) {
                                r.push(d);
                                break
                            }
                            h && (k = $)
                        }
                        a && ((d = !g && d) && v--, t && w.push(d))
                    }
                    if (v += y, a && y !== v) {
                        for (f = 0; g = s[f++];) g(w, b, e, i);
                        if (t) {
                            if (v > 0) for (; y--;) w[y] || b[y] || (b[y] = M.call(r));
                            b = bt(b)
                        }
                        D.apply(r, b), h && !t && b.length > 0 && v + s.length > 1 && st.uniqueSort(r)
                    }
                    return h && (k = $, c = x), w
                }, a ? at(h) : h))).selector = t
            }
            return g
        }, l = st.select = function (t, e, n, s) {
            var l, c, h, d, u, p = "function" == typeof t && t, f = !s && r(t = p.selector || t);
            if (n = n || [], 1 === f.length) {
                if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (h = c[0]).type && i.getById && 9 === e.nodeType && m && o.relative[c[1].type]) {
                    if (!(e = (o.find.ID(h.matches[0].replace(J, tt), e) || [])[0])) return n;
                    p && (e = e.parentNode), t = t.slice(c.shift().value.length)
                }
                for (l = X.needsContext.test(t) ? 0 : c.length; l-- && (h = c[l], !o.relative[d = h.type]);) if ((u = o.find[d]) && (s = u(h.matches[0].replace(J, tt), Z.test(c[0].type) && mt(e.parentNode) || e))) {
                    if (c.splice(l, 1), !(t = s.length && vt(c))) return D.apply(n, s), n;
                    break
                }
            }
            return (p || a(t, f))(s, e, !m, n, !e || Z.test(t) && mt(e.parentNode) || e), n
        }, i.sortStable = b.split("").sort(C).join("") === b, i.detectDuplicates = !!d, u(), i.sortDetached = lt(function (t) {
            return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
        }), lt(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), i.attributes && lt(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ct("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), lt(function (t) {
            return null == t.getAttribute("disabled")
        }) || ct(j, function (t, e, i) {
            var o;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
        }), st
    }(t);
    v.find = _, v.expr = _.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = _.uniqueSort, v.text = _.getText, v.isXMLDoc = _.isXML, v.contains = _.contains, v.escapeSelector = _.escape;
    var $ = function (t, e, i) {
            for (var o = [], n = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (n && v(t).is(i)) break;
                o.push(t)
            }
            return o
        }, T = function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }, S = v.expr.match.needsContext, C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        A = /^.[^:#\[\.,]*$/;

    function E(t, e, i) {
        if (v.isFunction(e)) return v.grep(t, function (t, o) {
            return !!e.call(t, o, t) !== i
        });
        if (e.nodeType) return v.grep(t, function (t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (A.test(e)) return v.filter(e, t, i);
            e = v.filter(e, t)
        }
        return v.grep(t, function (t) {
            return l.call(e, t) > -1 !== i && 1 === t.nodeType
        })
    }

    v.filter = function (t, e, i) {
        var o = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === o.nodeType ? v.find.matchesSelector(o, t) ? [o] : [] : v.find.matches(t, v.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, v.fn.extend({
        find: function (t) {
            var e, i, o = this.length, n = this;
            if ("string" != typeof t) return this.pushStack(v(t).filter(function () {
                for (e = 0; e < o; e++) if (v.contains(n[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < o; e++) v.find(t, n[e], i);
            return o > 1 ? v.uniqueSort(i) : i
        }, filter: function (t) {
            return this.pushStack(E(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(E(this, t || [], !0))
        }, is: function (t) {
            return !!E(this, "string" == typeof t && S.test(t) ? v(t) : t || [], !1).length
        }
    });
    var M, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (v.fn.init = function (t, e, i) {
        var n, s;
        if (!t) return this;
        if (i = i || M, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : I.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof v ? e[0] : e, v.merge(this, v.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : o, !0)), C.test(n[1]) && v.isPlainObject(e)) for (n in e) v.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (s = o.getElementById(n[2])) && (this[0] = s, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : v.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(v) : v.makeArray(t, this)
    }).prototype = v.fn, M = v(o);
    var D = /^(?:parents|prev(?:Until|All))/, O = {children: !0, contents: !0, next: !0, prev: !0};

    function P(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    v.fn.extend({
        has: function (t) {
            var e = v(t, this), i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++) if (v.contains(this, e[t])) return !0
            })
        }, closest: function (t, e) {
            var i, o = 0, n = this.length, s = [], r = "string" != typeof t && v(t);
            if (!S.test(t)) for (; o < n; o++) for (i = this[o]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && v.find.matchesSelector(i, t))) {
                s.push(i);
                break
            }
            return this.pushStack(s.length > 1 ? v.uniqueSort(s) : s)
        }, index: function (t) {
            return t ? "string" == typeof t ? l.call(v(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), v.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return $(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return $(t, "parentNode", i)
        }, next: function (t) {
            return P(t, "nextSibling")
        }, prev: function (t) {
            return P(t, "previousSibling")
        }, nextAll: function (t) {
            return $(t, "nextSibling")
        }, prevAll: function (t) {
            return $(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return $(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return $(t, "previousSibling", i)
        }, siblings: function (t) {
            return T((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return T(t.firstChild)
        }, contents: function (t) {
            return t.contentDocument || v.merge([], t.childNodes)
        }
    }, function (t, e) {
        v.fn[t] = function (i, o) {
            var n = v.map(this, e, i);
            return "Until" !== t.slice(-5) && (o = i), o && "string" == typeof o && (n = v.filter(o, n)), this.length > 1 && (O[t] || v.uniqueSort(n), D.test(t) && n.reverse()), this.pushStack(n)
        }
    });
    var j = /\S+/g;

    function N(t) {
        return t
    }

    function L(t) {
        throw t
    }

    function z(t, e, i) {
        var o;
        try {
            t && v.isFunction(o = t.promise) ? o.call(t).done(e).fail(i) : t && v.isFunction(o = t.then) ? o.call(t, e, i) : e.call(void 0, t)
        } catch (t) {
            i.call(void 0, t)
        }
    }

    v.Callbacks = function (t) {
        var e, i;
        t = "string" == typeof t ? (e = t, i = {}, v.each(e.match(j) || [], function (t, e) {
            i[e] = !0
        }), i) : v.extend({}, t);
        var o, n, s, r, a = [], l = [], c = -1, h = function () {
            for (r = t.once, s = o = !0; l.length; c = -1) for (n = l.shift(); ++c < a.length;) !1 === a[c].apply(n[0], n[1]) && t.stopOnFalse && (c = a.length, n = !1);
            t.memory || (n = !1), o = !1, r && (a = n ? [] : "")
        }, d = {
            add: function () {
                return a && (n && !o && (c = a.length - 1, l.push(n)), function e(i) {
                    v.each(i, function (i, o) {
                        v.isFunction(o) ? t.unique && d.has(o) || a.push(o) : o && o.length && "string" !== v.type(o) && e(o)
                    })
                }(arguments), n && !o && h()), this
            }, remove: function () {
                return v.each(arguments, function (t, e) {
                    for (var i; (i = v.inArray(e, a, i)) > -1;) a.splice(i, 1), i <= c && c--
                }), this
            }, has: function (t) {
                return t ? v.inArray(t, a) > -1 : a.length > 0
            }, empty: function () {
                return a && (a = []), this
            }, disable: function () {
                return r = l = [], a = n = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return r = l = [], n || o || (a = n = ""), this
            }, locked: function () {
                return !!r
            }, fireWith: function (t, e) {
                return r || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), o || h()), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!s
            }
        };
        return d
    }, v.extend({
        Deferred: function (e) {
            var i = [["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2], ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]],
                o = "pending", n = {
                    state: function () {
                        return o
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, catch: function (t) {
                        return n.then(null, t)
                    }, pipe: function () {
                        var t = arguments;
                        return v.Deferred(function (e) {
                            v.each(i, function (i, o) {
                                var n = v.isFunction(t[o[4]]) && t[o[4]];
                                s[o[1]](function () {
                                    var t = n && n.apply(this, arguments);
                                    t && v.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[o[0] + "With"](this, n ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, then: function (e, o, n) {
                        var s = 0;

                        function r(e, i, o, n) {
                            return function () {
                                var a = this, l = arguments, c = function () {
                                    var t, c;
                                    if (!(e < s)) {
                                        if ((t = o.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        c = t && ("object" == typeof t || "function" == typeof t) && t.then, v.isFunction(c) ? n ? c.call(t, r(s, i, N, n), r(s, i, L, n)) : (s++, c.call(t, r(s, i, N, n), r(s, i, L, n), r(s, i, N, i.notifyWith))) : (o !== N && (a = void 0, l = [t]), (n || i.resolveWith)(a, l))
                                    }
                                }, h = n ? c : function () {
                                    try {
                                        c()
                                    } catch (t) {
                                        v.Deferred.exceptionHook && v.Deferred.exceptionHook(t, h.stackTrace), e + 1 >= s && (o !== L && (a = void 0, l = [t]), i.rejectWith(a, l))
                                    }
                                };
                                e ? h() : (v.Deferred.getStackHook && (h.stackTrace = v.Deferred.getStackHook()), t.setTimeout(h))
                            }
                        }

                        return v.Deferred(function (t) {
                            i[0][3].add(r(0, t, v.isFunction(n) ? n : N, t.notifyWith)), i[1][3].add(r(0, t, v.isFunction(e) ? e : N)), i[2][3].add(r(0, t, v.isFunction(o) ? o : L))
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? v.extend(t, n) : n
                    }
                }, s = {};
            return v.each(i, function (t, e) {
                var r = e[2], a = e[5];
                n[e[1]] = r.add, a && r.add(function () {
                    o = a
                }, i[3 - t][2].disable, i[0][2].lock), r.add(e[3].fire), s[e[0]] = function () {
                    return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[e[0] + "With"] = r.fireWith
            }), n.promise(s), e && e.call(s, s), s
        }, when: function (t) {
            var e = arguments.length, i = e, o = Array(i), n = s.call(arguments), r = v.Deferred(), a = function (t) {
                return function (i) {
                    o[t] = this, n[t] = arguments.length > 1 ? s.call(arguments) : i, --e || r.resolveWith(o, n)
                }
            };
            if (e <= 1 && (z(t, r.done(a(i)).resolve, r.reject), "pending" === r.state() || v.isFunction(n[i] && n[i].then))) return r.then();
            for (; i--;) z(n[i], a(i), r.reject);
            return r.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function (e, i) {
        t.console && t.console.warn && e && H.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, v.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var R = v.Deferred();

    function q() {
        o.removeEventListener("DOMContentLoaded", q), t.removeEventListener("load", q), v.ready()
    }

    v.fn.ready = function (t) {
        return R.then(t).catch(function (t) {
            v.readyException(t)
        }), this
    }, v.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? v.readyWait++ : v.ready(!0)
        }, ready: function (t) {
            (!0 === t ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== t && --v.readyWait > 0 || R.resolveWith(o, [v]))
        }
    }), v.ready.then = R.then, "complete" === o.readyState || "loading" !== o.readyState && !o.documentElement.doScroll ? t.setTimeout(v.ready) : (o.addEventListener("DOMContentLoaded", q), t.addEventListener("load", q));
    var F = function (t, e, i, o, n, s, r) {
        var a = 0, l = t.length, c = null == i;
        if ("object" === v.type(i)) {
            n = !0;
            for (a in i) F(t, e, a, i[a], !0, s, r)
        } else if (void 0 !== o && (n = !0, v.isFunction(o) || (r = !0), c && (r ? (e.call(t, o), e = null) : (c = e, e = function (t, e, i) {
            return c.call(v(t), i)
        })), e)) for (; a < l; a++) e(t[a], i, r ? o : o.call(t[a], a, e(t[a], i)));
        return n ? t : c ? e.call(t) : l ? e(t[0], i) : s
    }, W = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function U() {
        this.expando = v.expando + U.uid++
    }

    U.uid = 1, U.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, W(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, i) {
            var o, n = this.cache(t);
            if ("string" == typeof e) n[v.camelCase(e)] = i; else for (o in e) n[v.camelCase(o)] = e[o];
            return n
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][v.camelCase(e)]
        }, access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        }, remove: function (t, e) {
            var i, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 !== e) {
                    i = (e = v.isArray(e) ? e.map(v.camelCase) : (e = v.camelCase(e)) in o ? [e] : e.match(j) || []).length;
                    for (; i--;) delete o[e[i]]
                }
                (void 0 === e || v.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !v.isEmptyObject(e)
        }
    };
    var B = new U, Q = new U, X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;

    function Y(t, e, i) {
        var o;
        if (void 0 === i && 1 === t.nodeType) if (o = "data-" + e.replace(K, "-$&").toLowerCase(), i = t.getAttribute(o), "string" == typeof i) {
            try {
                i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : X.test(i) ? JSON.parse(i) : i)
            } catch (t) {
            }
            Q.set(t, e, i)
        } else i = void 0;
        return i
    }

    v.extend({
        hasData: function (t) {
            return Q.hasData(t) || B.hasData(t)
        }, data: function (t, e, i) {
            return Q.access(t, e, i)
        }, removeData: function (t, e) {
            Q.remove(t, e)
        }, _data: function (t, e, i) {
            return B.access(t, e, i)
        }, _removeData: function (t, e) {
            B.remove(t, e)
        }
    }), v.fn.extend({
        data: function (t, e) {
            var i, o, n, s = this[0], r = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (n = Q.get(s), 1 === s.nodeType && !B.get(s, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && (o = r[i].name, 0 === o.indexOf("data-") && (o = v.camelCase(o.slice(5)), Y(s, o, n[o])));
                    B.set(s, "hasDataAttrs", !0)
                }
                return n
            }
            return "object" == typeof t ? this.each(function () {
                Q.set(this, t)
            }) : F(this, function (e) {
                var i;
                if (s && void 0 === e) {
                    if (void 0 !== (i = Q.get(s, t))) return i;
                    if (void 0 !== (i = Y(s, t))) return i
                } else this.each(function () {
                    Q.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                Q.remove(this, t)
            })
        }
    }), v.extend({
        queue: function (t, e, i) {
            var o;
            if (t) return e = (e || "fx") + "queue", o = B.get(t, e), i && (!o || v.isArray(i) ? o = B.access(t, e, v.makeArray(i)) : o.push(i)), o || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = v.queue(t, e), o = i.length, n = i.shift(), s = v._queueHooks(t, e);
            "inprogress" === n && (n = i.shift(), o--), n && ("fx" === e && i.unshift("inprogress"), delete s.stop, n.call(t, function () {
                v.dequeue(t, e)
            }, s)), !o && s && s.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return B.get(t, i) || B.access(t, i, {
                empty: v.Callbacks("once memory").add(function () {
                    B.remove(t, [e + "queue", i])
                })
            })
        }
    }), v.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? v.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = v.queue(this, t, e);
                v._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && v.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                v.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, o = 1, n = v.Deferred(), s = this, r = this.length, a = function () {
                --o || n.resolveWith(s, [s])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) i = B.get(s[r], t + "queueHooks"), i && i.empty && (o++, i.empty.add(a));
            return a(), n.promise(e)
        }
    });
    var V = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, G = new RegExp("^(?:([+-])=|)(" + V + ")([a-z%]*)$", "i"),
        Z = ["Top", "Right", "Bottom", "Left"], J = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && v.contains(t.ownerDocument, t) && "none" === v.css(t, "display")
        }, tt = function (t, e, i, o) {
            var n, s, r = {};
            for (s in e) r[s] = t.style[s], t.style[s] = e[s];
            n = i.apply(t, o || []);
            for (s in e) t.style[s] = r[s];
            return n
        };

    function et(t, e, i, o) {
        var n, s = 1, r = 20, a = o ? function () {
                return o.cur()
            } : function () {
                return v.css(t, e, "")
            }, l = a(), c = i && i[3] || (v.cssNumber[e] ? "" : "px"),
            h = (v.cssNumber[e] || "px" !== c && +l) && G.exec(v.css(t, e));
        if (h && h[3] !== c) {
            c = c || h[3], i = i || [], h = +l || 1;
            do {
                h /= s = s || ".5", v.style(t, e, h + c)
            } while (s !== (s = a() / l) && 1 !== s && --r)
        }
        return i && (h = +h || +l || 0, n = i[1] ? h + (i[1] + 1) * i[2] : +i[2], o && (o.unit = c, o.start = h, o.end = n)), n
    }

    var it = {};

    function ot(t, e) {
        for (var i, o, n = [], s = 0, r = t.length; s < r; s++) o = t[s], o.style && (i = o.style.display, e ? ("none" === i && (n[s] = B.get(o, "display") || null, n[s] || (o.style.display = "")), "" === o.style.display && J(o) && (n[s] = (a = o, l = void 0, c = void 0, d = void 0, c = a.ownerDocument, h = a.nodeName, d = it[h], d || (l = c.body.appendChild(c.createElement(h)), d = v.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), it[h] = d, d)))) : "none" !== i && (n[s] = "none", B.set(o, "display", i)));
        var a, l, c, h, d;
        for (s = 0; s < r; s++) null != n[s] && (t[s].style.display = n[s]);
        return t
    }

    v.fn.extend({
        show: function () {
            return ot(this, !0)
        }, hide: function () {
            return ot(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                J(this) ? v(this).show() : v(this).hide()
            })
        }
    });
    var nt = /^(?:checkbox|radio)$/i, st = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, rt = /^$|\/(?:java|ecma)script/i, at = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function lt(t, e) {
        var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && v.nodeName(t, e) ? v.merge([t], i) : i
    }

    function ct(t, e) {
        for (var i = 0, o = t.length; i < o; i++) B.set(t[i], "globalEval", !e || B.get(e[i], "globalEval"))
    }

    at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td;
    var ht, dt, ut = /<|&#?\w+;/;

    function pt(t, e, i, o, n) {
        for (var s, r, a, l, c, h, d = e.createDocumentFragment(), u = [], p = 0, f = t.length; p < f; p++) if (s = t[p], s || 0 === s) if ("object" === v.type(s)) v.merge(u, s.nodeType ? [s] : s); else if (ut.test(s)) {
            for (r = r || d.appendChild(e.createElement("div")), a = (st.exec(s) || ["", ""])[1].toLowerCase(), l = at[a] || at._default, r.innerHTML = l[1] + v.htmlPrefilter(s) + l[2], h = l[0]; h--;) r = r.lastChild;
            v.merge(u, r.childNodes), (r = d.firstChild).textContent = ""
        } else u.push(e.createTextNode(s));
        for (d.textContent = "", p = 0; s = u[p++];) if (o && v.inArray(s, o) > -1) n && n.push(s); else if (c = v.contains(s.ownerDocument, s), r = lt(d.appendChild(s), "script"), c && ct(r), i) for (h = 0; s = r[h++];) rt.test(s.type || "") && i.push(s);
        return d
    }

    ht = o.createDocumentFragment().appendChild(o.createElement("div")), (dt = o.createElement("input")).setAttribute("type", "radio"), dt.setAttribute("checked", "checked"), dt.setAttribute("name", "t"), ht.appendChild(dt), f.checkClone = ht.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!ht.cloneNode(!0).lastChild.defaultValue;
    var ft = o.documentElement, mt = /^key/, gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        vt = /^([^.]*)(?:\.(.+)|)/;

    function yt() {
        return !0
    }

    function wt() {
        return !1
    }

    function bt() {
        try {
            return o.activeElement
        } catch (t) {
        }
    }

    function xt(t, e, i, o, n, s) {
        var r, a;
        if ("object" == typeof e) {
            "string" != typeof i && (o = o || i, i = void 0);
            for (a in e) xt(t, a, i, o, e[a], s);
            return t
        }
        if (null == o && null == n ? (n = i, o = i = void 0) : null == n && ("string" == typeof i ? (n = o, o = void 0) : (n = o, o = i, i = void 0)), !1 === n) n = wt; else if (!n) return t;
        return 1 === s && (r = n, (n = function (t) {
            return v().off(t), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = v.guid++)), t.each(function () {
            v.event.add(this, e, n, o, i)
        })
    }

    v.event = {
        global: {}, add: function (t, e, i, o, n) {
            var s, r, a, l, c, h, d, u, p, f, m, g = B.get(t);
            if (g) for (i.handler && (i = (s = i).handler, n = s.selector), n && v.find.matchesSelector(ft, n), i.guid || (i.guid = v.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function (e) {
                return void 0 !== v && v.event.triggered !== e.type ? v.event.dispatch.apply(t, arguments) : void 0
            }), c = (e = (e || "").match(j) || [""]).length; c--;) a = vt.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (d = v.event.special[p] || {}, p = (n ? d.delegateType : d.bindType) || p, d = v.event.special[p] || {}, h = v.extend({
                type: p,
                origType: m,
                data: o,
                handler: i,
                guid: i.guid,
                selector: n,
                needsContext: n && v.expr.match.needsContext.test(n),
                namespace: f.join(".")
            }, s), (u = l[p]) || (u = l[p] = [], u.delegateCount = 0, d.setup && !1 !== d.setup.call(t, o, f, r) || t.addEventListener && t.addEventListener(p, r)), d.add && (d.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), n ? u.splice(u.delegateCount++, 0, h) : u.push(h), v.event.global[p] = !0)
        }, remove: function (t, e, i, o, n) {
            var s, r, a, l, c, h, d, u, p, f, m, g = B.hasData(t) && B.get(t);
            if (g && (l = g.events)) {
                for (c = (e = (e || "").match(j) || [""]).length; c--;) if (a = vt.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (d = v.event.special[p] || {}, u = l[p = (o ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = u.length; s--;) h = u[s], !n && m !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || o && o !== h.selector && ("**" !== o || !h.selector) || (u.splice(s, 1), h.selector && u.delegateCount--, d.remove && d.remove.call(t, h));
                    r && !u.length && (d.teardown && !1 !== d.teardown.call(t, f, g.handle) || v.removeEvent(t, p, g.handle), delete l[p])
                } else for (p in l) v.event.remove(t, p + e[c], i, o, !0);
                v.isEmptyObject(l) && B.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, i, o, n, s, r, a = v.event.fix(t), l = new Array(arguments.length),
                c = (B.get(this, "events") || {})[a.type] || [], h = v.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
                for (r = v.event.handlers.call(this, a, c), e = 0; (n = r[e++]) && !a.isPropagationStopped();) for (a.currentTarget = n.elem, i = 0; (s = n.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, o = ((v.event.special[s.origType] || {}).handle || s.handler).apply(n.elem, l), void 0 !== o && !1 === (a.result = o) && (a.preventDefault(), a.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, a), a.result
            }
        }, handlers: function (t, e) {
            var i, o, n, s, r = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                for (o = [], i = 0; i < a; i++) s = e[i], n = s.selector + " ", void 0 === o[n] && (o[n] = s.needsContext ? v(n, this).index(l) > -1 : v.find(n, this, null, [l]).length), o[n] && o.push(s);
                o.length && r.push({elem: l, handlers: o})
            }
            return a < e.length && r.push({elem: this, handlers: e.slice(a)}), r
        }, addProp: function (t, e) {
            Object.defineProperty(v.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v.isFunction(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (t) {
            return t[v.expando] ? t : new v.Event(t)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== bt() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === bt() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && v.nodeName(this, "input")) return this.click(), !1
                }, _default: function (t) {
                    return v.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, v.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, v.Event = function (t, e) {
        return this instanceof v.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? yt : wt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && v.extend(this, e), this.timeStamp = t && t.timeStamp || v.now(), void (this[v.expando] = !0)) : new v.Event(t, e)
    }, v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: wt,
        isPropagationStopped: wt,
        isImmediatePropagationStopped: wt,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = yt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = yt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = yt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, v.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && mt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && gt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, v.event.addProp), v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        v.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, o = t.relatedTarget, n = t.handleObj;
                return o && (o === this || v.contains(this, o)) || (t.type = n.origType, i = n.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), v.fn.extend({
        on: function (t, e, i, o) {
            return xt(this, t, e, i, o)
        }, one: function (t, e, i, o) {
            return xt(this, t, e, i, o, 1)
        }, off: function (t, e, i) {
            var o, n;
            if (t && t.preventDefault && t.handleObj) return o = t.handleObj, v(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof t) {
                for (n in t) this.off(n, e, t[n]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = wt), this.each(function () {
                v.event.remove(this, t, i, e)
            })
        }
    });
    var kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        _t = /<script|<style|<link/i, $t = /checked\s*(?:[^=]|=\s*.checked.)/i, Tt = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ct(t, e) {
        return v.nodeName(t, "table") && v.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") && t.getElementsByTagName("tbody")[0] || t
    }

    function At(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Et(t) {
        var e = Tt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function Mt(t, e) {
        var i, o, n, s, r, a, l, c;
        if (1 === e.nodeType) {
            if (B.hasData(t) && (s = B.access(t), r = B.set(e, s), c = s.events)) {
                delete r.handle, r.events = {};
                for (n in c) for (i = 0, o = c[n].length; i < o; i++) v.event.add(e, n, c[n][i])
            }
            Q.hasData(t) && (a = Q.access(t), l = v.extend({}, a), Q.set(e, l))
        }
    }

    function It(t, e, i, o) {
        e = r.apply([], e);
        var n, s, a, l, c, h, d = 0, u = t.length, p = u - 1, g = e[0], y = v.isFunction(g);
        if (y || u > 1 && "string" == typeof g && !f.checkClone && $t.test(g)) return t.each(function (n) {
            var s = t.eq(n);
            y && (e[0] = g.call(this, n, s.html())), It(s, e, i, o)
        });
        if (u && (s = (n = pt(e, t[0].ownerDocument, !1, t, o)).firstChild, 1 === n.childNodes.length && (n = s), s || o)) {
            for (l = (a = v.map(lt(n, "script"), At)).length; d < u; d++) c = n, d !== p && (c = v.clone(c, !0, !0), l && v.merge(a, lt(c, "script"))), i.call(t[d], c, d);
            if (l) for (h = a[a.length - 1].ownerDocument, v.map(a, Et), d = 0; d < l; d++) c = a[d], rt.test(c.type || "") && !B.access(c, "globalEval") && v.contains(h, c) && (c.src ? v._evalUrl && v._evalUrl(c.src) : m(c.textContent.replace(St, ""), h))
        }
        return t
    }

    function Dt(t, e, i) {
        for (var o, n = e ? v.filter(e, t) : t, s = 0; null != (o = n[s]); s++) i || 1 !== o.nodeType || v.cleanData(lt(o)), o.parentNode && (i && v.contains(o.ownerDocument, o) && ct(lt(o, "script")), o.parentNode.removeChild(o));
        return t
    }

    v.extend({
        htmlPrefilter: function (t) {
            return t.replace(kt, "<$1></$2>")
        }, clone: function (t, e, i) {
            var o, n, s, r, a, l, c, h = t.cloneNode(!0), d = v.contains(t.ownerDocument, t);
            if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || v.isXMLDoc(t))) for (r = lt(h), s = lt(t), o = 0, n = s.length; o < n; o++) a = s[o], l = r[o], c = l.nodeName.toLowerCase(), "input" === c && nt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (e) if (i) for (s = s || lt(t), r = r || lt(h), o = 0, n = s.length; o < n; o++) Mt(s[o], r[o]); else Mt(t, h);
            return (r = lt(h, "script")).length > 0 && ct(r, !d && lt(t, "script")), h
        }, cleanData: function (t) {
            for (var e, i, o, n = v.event.special, s = 0; void 0 !== (i = t[s]); s++) if (W(i)) {
                if (e = i[B.expando]) {
                    if (e.events) for (o in e.events) n[o] ? v.event.remove(i, o) : v.removeEvent(i, o, e.handle);
                    i[B.expando] = void 0
                }
                i[Q.expando] && (i[Q.expando] = void 0)
            }
        }
    }), v.fn.extend({
        detach: function (t) {
            return Dt(this, t, !0)
        }, remove: function (t) {
            return Dt(this, t)
        }, text: function (t) {
            return F(this, function (t) {
                return void 0 === t ? v.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return It(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ct(this, t).appendChild(t)
            })
        }, prepend: function () {
            return It(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Ct(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return It(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return It(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (v.cleanData(lt(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return v.clone(this, t, e)
            })
        }, html: function (t) {
            return F(this, function (t) {
                var e = this[0] || {}, i = 0, o = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !_t.test(t) && !at[(st.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = v.htmlPrefilter(t);
                    try {
                        for (; i < o; i++) e = this[i] || {}, 1 === e.nodeType && (v.cleanData(lt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return It(this, arguments, function (e) {
                var i = this.parentNode;
                v.inArray(this, t) < 0 && (v.cleanData(lt(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        v.fn[t] = function (t) {
            for (var i, o = [], n = v(t), s = n.length - 1, r = 0; r <= s; r++) i = r === s ? this : this.clone(!0), v(n[r])[e](i), a.apply(o, i.get());
            return this.pushStack(o)
        }
    });
    var Ot = /^margin/, Pt = new RegExp("^(" + V + ")(?!px)[a-z%]+$", "i"), jt = function (e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e)
    };

    function Nt(t, e, i) {
        var o, n, s, r, a = t.style;
        return (i = i || jt(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || v.contains(t.ownerDocument, t) || (r = v.style(t, e)), !f.pixelMarginRight() && Pt.test(r) && Ot.test(e) && (o = a.width, n = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = o, a.minWidth = n, a.maxWidth = s)), void 0 !== r ? r + "" : r
    }

    function Lt(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    !function () {
        function e() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", ft.appendChild(a);
                var e = t.getComputedStyle(l);
                i = "1%" !== e.top, r = "2px" === e.marginLeft, n = "4px" === e.width, l.style.marginRight = "50%", s = "4px" === e.marginRight, ft.removeChild(a), l = null
            }
        }

        var i, n, s, r, a = o.createElement("div"), l = o.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === l.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(l), v.extend(f, {
            pixelPosition: function () {
                return e(), i
            }, boxSizingReliable: function () {
                return e(), n
            }, pixelMarginRight: function () {
                return e(), s
            }, reliableMarginLeft: function () {
                return e(), r
            }
        }))
    }();
    var zt = /^(none|table(?!-c[ea]).+)/, Ht = {position: "absolute", visibility: "hidden", display: "block"},
        Rt = {letterSpacing: "0", fontWeight: "400"}, qt = ["Webkit", "Moz", "ms"], Ft = o.createElement("div").style;

    function Wt(t) {
        if (t in Ft) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = qt.length; i--;) if (t = qt[i] + e, t in Ft) return t
    }

    function Ut(t, e, i) {
        var o = G.exec(e);
        return o ? Math.max(0, o[2] - (i || 0)) + (o[3] || "px") : e
    }

    function Bt(t, e, i, o, n) {
        for (var s = i === (o ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; s < 4; s += 2) "margin" === i && (r += v.css(t, i + Z[s], !0, n)), o ? ("content" === i && (r -= v.css(t, "padding" + Z[s], !0, n)), "margin" !== i && (r -= v.css(t, "border" + Z[s] + "Width", !0, n))) : (r += v.css(t, "padding" + Z[s], !0, n), "padding" !== i && (r += v.css(t, "border" + Z[s] + "Width", !0, n)));
        return r
    }

    function Qt(t, e, i) {
        var o, n = !0, s = jt(t), r = "border-box" === v.css(t, "boxSizing", !1, s);
        if (t.getClientRects().length && (o = t.getBoundingClientRect()[e]), o <= 0 || null == o) {
            if (((o = Nt(t, e, s)) < 0 || null == o) && (o = t.style[e]), Pt.test(o)) return o;
            n = r && (f.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + Bt(t, e, i || (r ? "border" : "content"), n, s) + "px"
    }

    function Xt(t, e, i, o, n) {
        return new Xt.prototype.init(t, e, i, o, n)
    }

    v.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = Nt(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
        cssProps: {float: "cssFloat"},
        style: function (t, e, i, o) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var n, s, r, a = v.camelCase(e), l = t.style;
                return e = v.cssProps[a] || (v.cssProps[a] = Wt(a) || a), r = v.cssHooks[e] || v.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (n = r.get(t, !1, o)) ? n : l[e] : ("string" == (s = typeof i) && (n = G.exec(i)) && n[1] && (i = et(t, e, n), s = "number"), void (null != i && i == i && ("number" === s && (i += n && n[3] || (v.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, o)) || (l[e] = i))))
            }
        },
        css: function (t, e, i, o) {
            var n, s, r, a = v.camelCase(e);
            return e = v.cssProps[a] || (v.cssProps[a] = Wt(a) || a), (r = v.cssHooks[e] || v.cssHooks[a]) && "get" in r && (n = r.get(t, !0, i)), void 0 === n && (n = Nt(t, e, o)), "normal" === n && e in Rt && (n = Rt[e]), "" === i || i ? (s = parseFloat(n), !0 === i || isFinite(s) ? s || 0 : n) : n
        }
    }), v.each(["height", "width"], function (t, e) {
        v.cssHooks[e] = {
            get: function (t, i, o) {
                if (i) return !zt.test(v.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Qt(t, e, o) : tt(t, Ht, function () {
                    return Qt(t, e, o)
                })
            }, set: function (t, i, o) {
                var n, s = o && jt(t), r = o && Bt(t, e, o, "border-box" === v.css(t, "boxSizing", !1, s), s);
                return r && (n = G.exec(i)) && "px" !== (n[3] || "px") && (t.style[e] = i, i = v.css(t, e)), Ut(0, i, r)
            }
        }
    }), v.cssHooks.marginLeft = Lt(f.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(Nt(t, "marginLeft")) || t.getBoundingClientRect().left - tt(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), v.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        v.cssHooks[t + e] = {
            expand: function (i) {
                for (var o = 0, n = {}, s = "string" == typeof i ? i.split(" ") : [i]; o < 4; o++) n[t + Z[o] + e] = s[o] || s[o - 2] || s[0];
                return n
            }
        }, Ot.test(t) || (v.cssHooks[t + e].set = Ut)
    }), v.fn.extend({
        css: function (t, e) {
            return F(this, function (t, e, i) {
                var o, n, s = {}, r = 0;
                if (v.isArray(e)) {
                    for (o = jt(t), n = e.length; r < n; r++) s[e[r]] = v.css(t, e[r], !1, o);
                    return s
                }
                return void 0 !== i ? v.style(t, e, i) : v.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), v.Tween = Xt, Xt.prototype = {
        constructor: Xt, init: function (t, e, i, o, n, s) {
            this.elem = t, this.prop = i, this.easing = n || v.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = o, this.unit = s || (v.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = Xt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Xt.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = Xt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = v.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Xt.propHooks._default.set(this), this
        }
    }, Xt.prototype.init.prototype = Xt.prototype, Xt.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = v.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            }, set: function (t) {
                v.fx.step[t.prop] ? v.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[v.cssProps[t.prop]] && !v.cssHooks[t.prop] ? t.elem[t.prop] = t.now : v.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, Xt.propHooks.scrollTop = Xt.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, v.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, v.fx = Xt.prototype.init, v.fx.step = {};
    var Kt, Yt, Vt, Gt, Zt = /^(?:toggle|show|hide)$/, Jt = /queueHooks$/;

    function te() {
        Yt && (t.requestAnimationFrame(te), v.fx.tick())
    }

    function ee() {
        return t.setTimeout(function () {
            Kt = void 0
        }), Kt = v.now()
    }

    function ie(t, e) {
        var i, o = 0, n = {height: t};
        for (e = e ? 1 : 0; o < 4; o += 2 - e) i = Z[o], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function oe(t, e, i) {
        for (var o, n = (ne.tweeners[e] || []).concat(ne.tweeners["*"]), s = 0, r = n.length; s < r; s++) if (o = n[s].call(i, e, t)) return o
    }

    function ne(t, e, i) {
        var o, n, s = 0, r = ne.prefilters.length, a = v.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (n) return !1;
            for (var e = Kt || ee(), i = Math.max(0, c.startTime + c.duration - e), o = 1 - (i / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++) c.tweens[s].run(o);
            return a.notifyWith(t, [c, o, i]), o < 1 && r ? i : (a.resolveWith(t, [c]), !1)
        }, c = a.promise({
            elem: t,
            props: v.extend({}, e),
            opts: v.extend(!0, {specialEasing: {}, easing: v.easing._default}, i),
            originalProperties: e,
            originalOptions: i,
            startTime: Kt || ee(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
                var o = v.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(o), o
            },
            stop: function (e) {
                var i = 0, o = e ? c.tweens.length : 0;
                if (n) return this;
                for (n = !0; i < o; i++) c.tweens[i].run(1);
                return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
            }
        }), h = c.props;
        for (function (t, e) {
            var i, o, n, s, r;
            for (i in t) if (o = v.camelCase(i), n = e[o], s = t[i], v.isArray(s) && (n = s[1], s = t[i] = s[0]), i !== o && (t[o] = s, delete t[i]), r = v.cssHooks[o], r && "expand" in r) {
                s = r.expand(s), delete t[o];
                for (i in s) i in t || (t[i] = s[i], e[i] = n)
            } else e[o] = n
        }(h, c.opts.specialEasing); s < r; s++) if (o = ne.prefilters[s].call(c, t, h, c.opts)) return v.isFunction(o.stop) && (v._queueHooks(c.elem, c.opts.queue).stop = v.proxy(o.stop, o)), o;
        return v.map(h, oe, c), v.isFunction(c.opts.start) && c.opts.start.call(t, c), v.fx.timer(v.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    v.Animation = v.extend(ne, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return et(i.elem, t, G.exec(e), i), i
            }]
        }, tweener: function (t, e) {
            v.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(j);
            for (var i, o = 0, n = t.length; o < n; o++) i = t[o], ne.tweeners[i] = ne.tweeners[i] || [], ne.tweeners[i].unshift(e)
        }, prefilters: [function (t, e, i) {
            var o, n, s, r, a, l, c, h, d = "width" in e || "height" in e, u = this, p = {}, f = t.style,
                m = t.nodeType && J(t), g = B.get(t, "fxshow");
            i.queue || (null == (r = v._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
                r.unqueued || a()
            }), r.unqueued++, u.always(function () {
                u.always(function () {
                    r.unqueued--, v.queue(t, "fx").length || r.empty.fire()
                })
            }));
            for (o in e) if (n = e[o], Zt.test(n)) {
                if (delete e[o], s = s || "toggle" === n, n === (m ? "hide" : "show")) {
                    if ("show" !== n || !g || void 0 === g[o]) continue;
                    m = !0
                }
                p[o] = g && g[o] || v.style(t, o)
            }
            if ((l = !v.isEmptyObject(e)) || !v.isEmptyObject(p)) {
                d && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = B.get(t, "display")), "none" === (h = v.css(t, "display")) && (c ? h = c : (ot([t], !0), c = t.style.display || c, h = v.css(t, "display"), ot([t]))), ("inline" === h || "inline-block" === h && null != c) && "none" === v.css(t, "float") && (l || (u.done(function () {
                    f.display = c
                }), null == c && (h = f.display, c = "none" === h ? "" : h)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", u.always(function () {
                    f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                })), l = !1;
                for (o in p) l || (g ? "hidden" in g && (m = g.hidden) : g = B.access(t, "fxshow", {display: c}), s && (g.hidden = !m), m && ot([t], !0), u.done(function () {
                    m || ot([t]), B.remove(t, "fxshow");
                    for (o in p) v.style(t, o, p[o])
                })), l = oe(m ? g[o] : 0, o, u), o in g || (g[o] = l.start, m && (l.end = l.start, l.start = 0))
            }
        }], prefilter: function (t, e) {
            e ? ne.prefilters.unshift(t) : ne.prefilters.push(t)
        }
    }), v.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? v.extend({}, t) : {
            complete: i || !i && e || v.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !v.isFunction(e) && e
        };
        return v.fx.off || o.hidden ? n.duration = 0 : n.duration = "number" == typeof n.duration ? n.duration : n.duration in v.fx.speeds ? v.fx.speeds[n.duration] : v.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            v.isFunction(n.old) && n.old.call(this), n.queue && v.dequeue(this, n.queue)
        }, n
    }, v.fn.extend({
        fadeTo: function (t, e, i, o) {
            return this.filter(J).css("opacity", 0).show().end().animate({opacity: e}, t, i, o)
        }, animate: function (t, e, i, o) {
            var n = v.isEmptyObject(t), s = v.speed(e, i, o), r = function () {
                var e = ne(this, v.extend({}, t), s);
                (n || B.get(this, "finish")) && e.stop(!0)
            };
            return r.finish = r, n || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        }, stop: function (t, e, i) {
            var o = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                var e = !0, n = null != t && t + "queueHooks", s = v.timers, r = B.get(this);
                if (n) r[n] && r[n].stop && o(r[n]); else for (n in r) r[n] && r[n].stop && Jt.test(n) && o(r[n]);
                for (n = s.length; n--;) s[n].elem !== this || null != t && s[n].queue !== t || (s[n].anim.stop(i), e = !1, s.splice(n, 1));
                !e && i || v.dequeue(this, t)
            })
        }, finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each(function () {
                var e, i = B.get(this), o = i[t + "queue"], n = i[t + "queueHooks"], s = v.timers, r = o ? o.length : 0;
                for (i.finish = !0, v.queue(this, t, []), n && n.stop && n.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; e < r; e++) o[e] && o[e].finish && o[e].finish.call(this);
                delete i.finish
            })
        }
    }), v.each(["toggle", "show", "hide"], function (t, e) {
        var i = v.fn[e];
        v.fn[e] = function (t, o, n) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ie(e, !0), t, o, n)
        }
    }), v.each({
        slideDown: ie("show"),
        slideUp: ie("hide"),
        slideToggle: ie("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        v.fn[t] = function (t, i, o) {
            return this.animate(e, t, i, o)
        }
    }), v.timers = [], v.fx.tick = function () {
        var t, e = 0, i = v.timers;
        for (Kt = v.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
        i.length || v.fx.stop(), Kt = void 0
    }, v.fx.timer = function (t) {
        v.timers.push(t), t() ? v.fx.start() : v.timers.pop()
    }, v.fx.interval = 13, v.fx.start = function () {
        Yt || (Yt = t.requestAnimationFrame ? t.requestAnimationFrame(te) : t.setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.stop = function () {
        t.cancelAnimationFrame ? t.cancelAnimationFrame(Yt) : t.clearInterval(Yt), Yt = null
    }, v.fx.speeds = {slow: 600, fast: 200, _default: 400}, v.fn.delay = function (e, i) {
        return e = v.fx && v.fx.speeds[e] || e, i = i || "fx", this.queue(i, function (i, o) {
            var n = t.setTimeout(i, e);
            o.stop = function () {
                t.clearTimeout(n)
            }
        })
    }, Vt = o.createElement("input"), Gt = o.createElement("select").appendChild(o.createElement("option")), Vt.type = "checkbox", f.checkOn = "" !== Vt.value, f.optSelected = Gt.selected, (Vt = o.createElement("input")).value = "t", Vt.type = "radio", f.radioValue = "t" === Vt.value;
    var se, re = v.expr.attrHandle;
    v.fn.extend({
        attr: function (t, e) {
            return F(this, v.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                v.removeAttr(this, t)
            })
        }
    }), v.extend({
        attr: function (t, e, i) {
            var o, n, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? v.prop(t, e, i) : (1 === s && v.isXMLDoc(t) || (n = v.attrHooks[e.toLowerCase()] || (v.expr.match.bool.test(e) ? se : void 0)), void 0 !== i ? null === i ? void v.removeAttr(t, e) : n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""), i) : n && "get" in n && null !== (o = n.get(t, e)) ? o : (o = v.find.attr(t, e), null == o ? void 0 : o))
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!f.radioValue && "radio" === e && v.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var i, o = 0, n = e && e.match(j);
            if (n && 1 === t.nodeType) for (; i = n[o++];) t.removeAttribute(i)
        }
    }), se = {
        set: function (t, e, i) {
            return !1 === e ? v.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, v.each(v.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = re[e] || v.find.attr;
        re[e] = function (t, e, o) {
            var n, s, r = e.toLowerCase();
            return o || (s = re[r], re[r] = n, n = null != i(t, e, o) ? r : null, re[r] = s), n
        }
    });
    var ae = /^(?:input|select|textarea|button)$/i, le = /^(?:a|area)$/i;
    v.fn.extend({
        prop: function (t, e) {
            return F(this, v.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[v.propFix[t] || t]
            })
        }
    }), v.extend({
        prop: function (t, e, i) {
            var o, n, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && v.isXMLDoc(t) || (e = v.propFix[e] || e, n = v.propHooks[e]), void 0 !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : t[e] = i : n && "get" in n && null !== (o = n.get(t, e)) ? o : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = v.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ae.test(t.nodeName) || le.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), f.optSelected || (v.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        v.propFix[this.toLowerCase()] = this
    });
    var ce = /[\t\r\n\f]/g;

    function he(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    v.fn.extend({
        addClass: function (t) {
            var e, i, o, n, s, r, a, l = 0;
            if (v.isFunction(t)) return this.each(function (e) {
                v(this).addClass(t.call(this, e, he(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(j) || []; i = this[l++];) if (n = he(i), o = 1 === i.nodeType && (" " + n + " ").replace(ce, " ")) {
                for (r = 0; s = e[r++];) o.indexOf(" " + s + " ") < 0 && (o += s + " ");
                n !== (a = v.trim(o)) && i.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, i, o, n, s, r, a, l = 0;
            if (v.isFunction(t)) return this.each(function (e) {
                v(this).removeClass(t.call(this, e, he(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(j) || []; i = this[l++];) if (n = he(i), o = 1 === i.nodeType && (" " + n + " ").replace(ce, " ")) {
                for (r = 0; s = e[r++];) for (; o.indexOf(" " + s + " ") > -1;) o = o.replace(" " + s + " ", " ");
                n !== (a = v.trim(o)) && i.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : v.isFunction(t) ? this.each(function (i) {
                v(this).toggleClass(t.call(this, i, he(this), e), e)
            }) : this.each(function () {
                var e, o, n, s;
                if ("string" === i) for (o = 0, n = v(this), s = t.match(j) || []; e = s[o++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== t && "boolean" !== i || (e = he(this), e && B.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : B.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, i, o = 0;
            for (e = " " + t + " "; i = this[o++];) if (1 === i.nodeType && (" " + he(i) + " ").replace(ce, " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var de = /\r/g, ue = /[\x20\t\r\n\f]+/g;
    v.fn.extend({
        val: function (t) {
            var e, i, o, n = this[0];
            return arguments.length ? (o = v.isFunction(t), this.each(function (i) {
                var n;
                1 === this.nodeType && (null == (n = o ? t.call(this, i, v(this).val()) : t) ? n = "" : "number" == typeof n ? n += "" : v.isArray(n) && (n = v.map(n, function (t) {
                    return null == t ? "" : t + ""
                })), (e = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, n, "value") || (this.value = n))
            })) : n ? (e = v.valHooks[n.type] || v.valHooks[n.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(n, "value")) ? i : "string" == typeof (i = n.value) ? i.replace(de, "") : null == i ? "" : i : void 0
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = v.find.attr(t, "value");
                    return null != e ? e : v.trim(v.text(t)).replace(ue, " ")
                }
            }, select: {
                get: function (t) {
                    for (var e, i, o = t.options, n = t.selectedIndex, s = "select-one" === t.type, r = s ? null : [], a = s ? n + 1 : o.length, l = n < 0 ? a : s ? n : 0; l < a; l++) if (i = o[l], (i.selected || l === n) && !i.disabled && (!i.parentNode.disabled || !v.nodeName(i.parentNode, "optgroup"))) {
                        if (e = v(i).val(), s) return e;
                        r.push(e)
                    }
                    return r
                }, set: function (t, e) {
                    for (var i, o, n = t.options, s = v.makeArray(e), r = n.length; r--;) o = n[r], (o.selected = v.inArray(v.valHooks.option.get(o), s) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = {
            set: function (t, e) {
                if (v.isArray(e)) return t.checked = v.inArray(v(t).val(), e) > -1
            }
        }, f.checkOn || (v.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var pe = /^(?:focusinfocus|focusoutblur)$/;
    v.extend(v.event, {
        trigger: function (e, i, n, s) {
            var r, a, l, c, h, u, p, f = [n || o], m = d.call(e, "type") ? e.type : e,
                g = d.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = l = n = n || o, 3 !== n.nodeType && 8 !== n.nodeType && !pe.test(m + v.event.triggered) && (m.indexOf(".") > -1 && (m = (g = m.split(".")).shift(), g.sort()), h = m.indexOf(":") < 0 && "on" + m, (e = e[v.expando] ? e : new v.Event(m, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : v.makeArray(i, [e]), p = v.event.special[m] || {}, s || !p.trigger || !1 !== p.trigger.apply(n, i))) {
                if (!s && !p.noBubble && !v.isWindow(n)) {
                    for (c = p.delegateType || m, pe.test(c + m) || (a = a.parentNode); a; a = a.parentNode) f.push(a), l = a;
                    l === (n.ownerDocument || o) && f.push(l.defaultView || l.parentWindow || t)
                }
                for (r = 0; (a = f[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? c : p.bindType || m, u = (B.get(a, "events") || {})[e.type] && B.get(a, "handle"), u && u.apply(a, i), u = h && a[h], u && u.apply && W(a) && (e.result = u.apply(a, i), !1 === e.result && e.preventDefault());
                return e.type = m, s || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(f.pop(), i) || !W(n) || h && v.isFunction(n[m]) && !v.isWindow(n) && ((l = n[h]) && (n[h] = null), v.event.triggered = m, n[m](), v.event.triggered = void 0, l && (n[h] = l)), e.result
            }
        }, simulate: function (t, e, i) {
            var o = v.extend(new v.Event, i, {type: t, isSimulated: !0});
            v.event.trigger(o, null, e)
        }
    }), v.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                v.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return v.event.trigger(t, e, i, !0)
        }
    }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        v.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), v.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), f.focusin = "onfocusin" in t, f.focusin || v.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            v.event.simulate(e, t.target, v.event.fix(t))
        };
        v.event.special[e] = {
            setup: function () {
                var o = this.ownerDocument || this, n = B.access(o, e);
                n || o.addEventListener(t, i, !0), B.access(o, e, (n || 0) + 1)
            }, teardown: function () {
                var o = this.ownerDocument || this, n = B.access(o, e) - 1;
                n ? B.access(o, e, n) : (o.removeEventListener(t, i, !0), B.remove(o, e))
            }
        }
    });
    var fe = t.location, me = v.now(), ge = /\?/;
    v.parseXML = function (e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + e), i
    };
    var ve = /\[\]$/, ye = /\r?\n/g, we = /^(?:submit|button|image|reset|file)$/i,
        be = /^(?:input|select|textarea|keygen)/i;

    function xe(t, e, i, o) {
        var n;
        if (v.isArray(e)) v.each(e, function (e, n) {
            i || ve.test(t) ? o(t, n) : xe(t + "[" + ("object" == typeof n && null != n ? e : "") + "]", n, i, o)
        }); else if (i || "object" !== v.type(e)) o(t, e); else for (n in e) xe(t + "[" + n + "]", e[n], i, o)
    }

    v.param = function (t, e) {
        var i, o = [], n = function (t, e) {
            var i = v.isFunction(e) ? e() : e;
            o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (v.isArray(t) || t.jquery && !v.isPlainObject(t)) v.each(t, function () {
            n(this.name, this.value)
        }); else for (i in t) xe(i, t[i], e, n);
        return o.join("&")
    }, v.fn.extend({
        serialize: function () {
            return v.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = v.prop(this, "elements");
                return t ? v.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !v(this).is(":disabled") && be.test(this.nodeName) && !we.test(t) && (this.checked || !nt.test(t))
            }).map(function (t, e) {
                var i = v(this).val();
                return null == i ? null : v.isArray(i) ? v.map(i, function (t) {
                    return {name: e.name, value: t.replace(ye, "\r\n")}
                }) : {name: e.name, value: i.replace(ye, "\r\n")}
            }).get()
        }
    });
    var ke = /%20/g, _e = /#.*$/, $e = /([?&])_=[^&]*/, Te = /^(.*?):[ \t]*([^\r\n]*)$/gm, Se = /^(?:GET|HEAD)$/,
        Ce = /^\/\//, Ae = {}, Ee = {}, Me = "*/".concat("*"), Ie = o.createElement("a");

    function De(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var o, n = 0, s = e.toLowerCase().match(j) || [];
            if (v.isFunction(i)) for (; o = s[n++];) "+" === o[0] ? (o = o.slice(1) || "*", (t[o] = t[o] || []).unshift(i)) : (t[o] = t[o] || []).push(i)
        }
    }

    function Oe(t, e, i, o) {
        var n = {}, s = t === Ee;

        function r(a) {
            var l;
            return n[a] = !0, v.each(t[a] || [], function (t, a) {
                var c = a(e, i, o);
                return "string" != typeof c || s || n[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), l
        }

        return r(e.dataTypes[0]) || !n["*"] && r("*")
    }

    function Pe(t, e) {
        var i, o, n = v.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((n[i] ? t : o || (o = {}))[i] = e[i]);
        return o && v.extend(!0, t, o), t
    }

    Ie.href = fe.href, v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fe.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(fe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Me,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": v.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? Pe(Pe(t, v.ajaxSettings), e) : Pe(v.ajaxSettings, t)
        },
        ajaxPrefilter: De(Ae),
        ajaxTransport: De(Ee),
        ajax: function (e, i) {
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var n, s, r, a, l, c, h, d, u, p, f = v.ajaxSetup({}, i), m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? v(m) : v.event, y = v.Deferred(),
                w = v.Callbacks("once memory"), b = f.statusCode || {}, x = {}, k = {}, _ = "canceled", $ = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (h) {
                            if (!a) for (a = {}; e = Te.exec(r);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    }, getAllResponseHeaders: function () {
                        return h ? r : null
                    }, setRequestHeader: function (t, e) {
                        return null == h && (t = k[t.toLowerCase()] = k[t.toLowerCase()] || t, x[t] = e), this
                    }, overrideMimeType: function (t) {
                        return null == h && (f.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (h) $.always(t[$.status]); else for (e in t) b[e] = [b[e], t[e]];
                        return this
                    }, abort: function (t) {
                        var e = t || _;
                        return n && n.abort(e), T(0, e), this
                    }
                };
            if (y.promise($), f.url = ((e || f.url || fe.href) + "").replace(Ce, fe.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""], null == f.crossDomain) {
                c = o.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = Ie.protocol + "//" + Ie.host != c.protocol + "//" + c.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = v.param(f.data, f.traditional)), Oe(Ae, f, i, $), h) return $;
            (d = v.event && f.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Se.test(f.type), s = f.url.replace(_e, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(ke, "+")) : (p = f.url.slice(s.length), f.data && (s += (ge.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace($e, ""), p = (ge.test(s) ? "&" : "?") + "_=" + me++ + p), f.url = s + p), f.ifModified && (v.lastModified[s] && $.setRequestHeader("If-Modified-Since", v.lastModified[s]), v.etag[s] && $.setRequestHeader("If-None-Match", v.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && $.setRequestHeader("Content-Type", f.contentType), $.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Me + "; q=0.01" : "") : f.accepts["*"]);
            for (u in f.headers) $.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, $, f) || h)) return $.abort();
            if (_ = "abort", w.add(f.complete), $.done(f.success), $.fail(f.error), n = Oe(Ee, f, i, $)) {
                if ($.readyState = 1, d && g.trigger("ajaxSend", [$, f]), h) return $;
                f.async && f.timeout > 0 && (l = t.setTimeout(function () {
                    $.abort("timeout")
                }, f.timeout));
                try {
                    h = !1, n.send(x, T)
                } catch (t) {
                    if (h) throw t;
                    T(-1, t)
                }
            } else T(-1, "No Transport");

            function T(e, i, o, a) {
                var c, u, p, x, k, _ = i;
                h || (h = !0, l && t.clearTimeout(l), n = void 0, r = a || "", $.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, o && (x = function (t, e, i) {
                    for (var o, n, s, r, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (o) for (n in a) if (a[n] && a[n].test(o)) {
                        l.unshift(n);
                        break
                    }
                    if (l[0] in i) s = l[0]; else {
                        for (n in i) {
                            if (!l[0] || t.converters[n + " " + l[0]]) {
                                s = n;
                                break
                            }
                            r || (r = n)
                        }
                        s = s || r
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s]
                }(f, $, o)), x = function (t, e, i, o) {
                    var n, s, r, a, l, c = {}, h = t.dataTypes.slice();
                    if (h[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                    for (s = h.shift(); s;) if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && o && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = h.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
                        if (!(r = c[l + " " + s] || c["* " + s])) for (n in c) if (a = n.split(" "), a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === r ? r = c[n] : !0 !== c[n] && (s = a[0], h.unshift(a[1]));
                            break
                        }
                        if (!0 !== r) if (r && t.throws) e = r(e); else try {
                            e = r(e)
                        } catch (t) {
                            return {state: "parsererror", error: r ? t : "No conversion from " + l + " to " + s}
                        }
                    }
                    return {state: "success", data: e}
                }(f, x, $, c), c ? (f.ifModified && ((k = $.getResponseHeader("Last-Modified")) && (v.lastModified[s] = k), (k = $.getResponseHeader("etag")) && (v.etag[s] = k)), 204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = x.state, u = x.data, c = !(p = x.error))) : (p = _, !e && _ || (_ = "error", e < 0 && (e = 0))), $.status = e, $.statusText = (i || _) + "", c ? y.resolveWith(m, [u, _, $]) : y.rejectWith(m, [$, _, p]), $.statusCode(b), b = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [$, f, c ? u : p]), w.fireWith(m, [$, _]), d && (g.trigger("ajaxComplete", [$, f]), --v.active || v.event.trigger("ajaxStop")))
            }

            return $
        },
        getJSON: function (t, e, i) {
            return v.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return v.get(t, void 0, e, "script")
        }
    }), v.each(["get", "post"], function (t, e) {
        v[e] = function (t, i, o, n) {
            return v.isFunction(i) && (n = n || o, o = i, i = void 0), v.ajax(v.extend({
                url: t,
                type: e,
                dataType: n,
                data: i,
                success: o
            }, v.isPlainObject(t) && t))
        }
    }), v._evalUrl = function (t) {
        return v.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, v.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (v.isFunction(t) && (t = t.call(this[0])), e = v(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        }, wrapInner: function (t) {
            return v.isFunction(t) ? this.each(function (e) {
                v(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = v(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = v.isFunction(t);
            return this.each(function (i) {
                v(this).wrapAll(e ? t.call(this, i) : t)
            })
        }, unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                v(this).replaceWith(this.childNodes)
            }), this
        }
    }), v.expr.pseudos.hidden = function (t) {
        return !v.expr.pseudos.visible(t)
    }, v.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, v.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {
        }
    };
    var je = {0: 200, 1223: 204}, Ne = v.ajaxSettings.xhr();
    f.cors = !!Ne && "withCredentials" in Ne, f.ajax = Ne = !!Ne, v.ajaxTransport(function (e) {
        var i, o;
        if (f.cors || Ne && !e.crossDomain) return {
            send: function (n, s) {
                var r, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) a[r] = e.xhrFields[r];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) a.setRequestHeader(r, n[r]);
                i = function (t) {
                    return function () {
                        i && (i = o = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(je[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), o = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = o : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        i && o()
                    })
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (i) throw t
                }
            }, abort: function () {
                i && i()
            }
        }
    }), v.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), v.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return v.globalEval(t), t
            }
        }
    }), v.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), v.ajaxTransport("script", function (t) {
        var e, i;
        if (t.crossDomain) return {
            send: function (n, s) {
                e = v("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", i = function (t) {
                    e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
                }), o.head.appendChild(e[0])
            }, abort: function () {
                i && i()
            }
        }
    });
    var Le, ze = [], He = /(=)\?(?=&|$)|\?\?/;

    function Re(t) {
        return v.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }

    v.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = ze.pop() || v.expando + "_" + me++;
            return this[t] = !0, t
        }
    }), v.ajaxPrefilter("json jsonp", function (e, i, o) {
        var n, s, r,
            a = !1 !== e.jsonp && (He.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && He.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = v.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(He, "$1" + n) : !1 !== e.jsonp && (e.url += (ge.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function () {
            return r || v.error(n + " was not called"), r[0]
        }, e.dataTypes[0] = "json", s = t[n], t[n] = function () {
            r = arguments
        }, o.always(function () {
            void 0 === s ? v(t).removeProp(n) : t[n] = s, e[n] && (e.jsonpCallback = i.jsonpCallback, ze.push(n)), r && v.isFunction(s) && s(r[0]), r = s = void 0
        }), "script"
    }), f.createHTMLDocument = ((Le = o.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Le.childNodes.length), v.parseHTML = function (t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (f.createHTMLDocument ? ((n = (e = o.implementation.createHTMLDocument("")).createElement("base")).href = o.location.href, e.head.appendChild(n)) : e = o), s = C.exec(t), r = !i && [], s ? [e.createElement(s[1])] : (s = pt([t], e, r), r && r.length && v(r).remove(), v.merge([], s.childNodes)));
        var n, s, r
    }, v.fn.load = function (t, e, i) {
        var o, n, s, r = this, a = t.indexOf(" ");
        return a > -1 && (o = v.trim(t.slice(a)), t = t.slice(0, a)), v.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (n = "POST"), r.length > 0 && v.ajax({
            url: t,
            type: n || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            s = arguments, r.html(o ? v("<div>").append(v.parseHTML(t)).find(o) : t)
        }).always(i && function (t, e) {
            r.each(function () {
                i.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        v.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), v.expr.pseudos.animated = function (t) {
        return v.grep(v.timers, function (e) {
            return t === e.elem
        }).length
    }, v.offset = {
        setOffset: function (t, e, i) {
            var o, n, s, r, a, l, c = v.css(t, "position"), h = v(t), d = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), s = v.css(t, "top"), l = v.css(t, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (r = (o = h.position()).top, n = o.left) : (r = parseFloat(s) || 0, n = parseFloat(l) || 0), v.isFunction(e) && (e = e.call(t, i, v.extend({}, a))), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + n), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, v.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                v.offset.setOffset(this, t, e)
            });
            var e, i, o, n, s = this[0];
            return s ? s.getClientRects().length ? (o = s.getBoundingClientRect()).width || o.height ? (i = Re(n = s.ownerDocument), e = n.documentElement, {
                top: o.top + i.pageYOffset - e.clientTop,
                left: o.left + i.pageXOffset - e.clientLeft
            }) : o : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, i = this[0], o = {top: 0, left: 0};
                return "fixed" === v.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), v.nodeName(t[0], "html") || (o = t.offset()), o = {
                    top: o.top + v.css(t[0], "borderTopWidth", !0),
                    left: o.left + v.css(t[0], "borderLeftWidth", !0)
                }), {top: e.top - o.top - v.css(i, "marginTop", !0), left: e.left - o.left - v.css(i, "marginLeft", !0)}
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === v.css(t, "position");) t = t.offsetParent;
                return t || ft
            })
        }
    }), v.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = "pageYOffset" === e;
        v.fn[t] = function (o) {
            return F(this, function (t, o, n) {
                var s = Re(t);
                return void 0 === n ? s ? s[e] : t[o] : void (s ? s.scrollTo(i ? s.pageXOffset : n, i ? n : s.pageYOffset) : t[o] = n)
            }, t, o, arguments.length)
        }
    }), v.each(["top", "left"], function (t, e) {
        v.cssHooks[e] = Lt(f.pixelPosition, function (t, i) {
            if (i) return i = Nt(t, e), Pt.test(i) ? v(t).position()[e] + "px" : i
        })
    }), v.each({Height: "height", Width: "width"}, function (t, e) {
        v.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, o) {
            v.fn[o] = function (n, s) {
                var r = arguments.length && (i || "boolean" != typeof n),
                    a = i || (!0 === n || !0 === s ? "margin" : "border");
                return F(this, function (e, i, n) {
                    var s;
                    return v.isWindow(e) ? 0 === o.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? v.css(e, i, a) : v.style(e, i, n, a)
                }, e, r ? n : void 0, r)
            }
        })
    }), v.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, o) {
            return this.on(e, t, i, o)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), v.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return v
    });
    var qe = t.jQuery, Fe = t.$;
    return v.noConflict = function (e) {
        return t.$ === v && (t.$ = Fe), e && t.jQuery === v && (t.jQuery = qe), v
    }, e || (t.jQuery = t.$ = v), v
}), function () {
    var t, e;
    jQuery.uaMatch = function (t) {
        t = t.toLowerCase();
        var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
        return {browser: e[1] || "", version: e[2] || "0"}
    }, e = {}, (t = jQuery.uaMatch(navigator.userAgent)).browser && (e[t.browser] = !0, e.version = t.version), e.chrome ? e.webkit = !0 : e.webkit && (e.safari = !0), jQuery.browser = e, jQuery.sub = function () {
        function t(e, i) {
            return new t.fn.init(e, i)
        }

        jQuery.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function (i, o) {
            return o && o instanceof jQuery && !(o instanceof t) && (o = t(o)), jQuery.fn.init.call(this, i, o, e)
        }, t.fn.init.prototype = t.fn;
        var e = t(document);
        return t
    }
}(), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    function e() {
        return t(t.map(arguments, t.proxy(document, "createElement")))
    }

    function i(i, o) {
        this.element = i, this.$element = t(i);
        var n = this.$element.data();
        "" === n.reverse && (n.reverse = !0), "" === n.switchAlways && (n.switchAlways = !0), "" === n.html && (n.html = !0), this.options = t.extend({}, t.fn.checkboxpicker.defaults, o, n), this.$element.closest("label").length ? console.warn(this.options.warningMessage) : (this.$group = e("div"), this.$buttons = e("a", "a"), this.$off = this.$buttons.eq(this.options.reverse ? 1 : 0), this.$on = this.$buttons.eq(this.options.reverse ? 0 : 1), this.init())
    }

    i.prototype = {
        init: function () {
            var i = this.options.html ? "html" : "text";
            this.element.hidden = !0, this.$group.addClass(this.options.baseGroupCls).addClass(this.options.groupCls), this.$buttons.addClass(this.options.baseCls).addClass(this.options.cls), this.options.offLabel && this.$off[i](this.options.offLabel), this.options.onLabel && this.$on[i](this.options.onLabel), this.options.offIconCls && (this.options.offLabel && this.$off.prepend("&nbsp;"), e("span").addClass(this.options.iconCls).addClass(this.options.offIconCls).prependTo(this.$off)), this.options.onIconCls && (this.options.onLabel && this.$on.prepend("&nbsp;"), e("span").addClass(this.options.iconCls).addClass(this.options.onIconCls).prependTo(this.$on)), this.element.checked ? (this.$on.addClass("active"), this.$on.addClass(this.options.onActiveCls), this.$off.addClass(this.options.offCls)) : (this.$off.addClass("active"), this.$off.addClass(this.options.offActiveCls), this.$on.addClass(this.options.onCls)), this.element.title ? this.$group.attr("title", this.element.title) : (this.options.offTitle && this.$off.attr("title", this.options.offTitle), this.options.onTitle && this.$on.attr("title", this.options.onTitle)), this.$group.on("keydown", t.proxy(this, "keydown")), this.$buttons.on("click", t.proxy(this, "click")), this.$element.on("change", t.proxy(this, "toggleChecked")), t(this.element.labels).on("click", t.proxy(this, "focus")), t(this.element.form).on("reset", t.proxy(this, "reset")), this.$group.append(this.$buttons).insertAfter(this.element), this.element.readOnly || this.element.disabled ? (this.$buttons.addClass("disabled"), this.options.disabledCursor && this.$group.css("cursor", this.options.disabledCursor)) : (this.$group.attr("tabindex", this.element.tabIndex), this.element.autofocus && this.focus())
        }, toggleChecked: function () {
            this.$buttons.toggleClass("active"), this.$off.toggleClass(this.options.offCls), this.$off.toggleClass(this.options.offActiveCls), this.$on.toggleClass(this.options.onCls), this.$on.toggleClass(this.options.onActiveCls)
        }, toggleDisabled: function () {
            this.$buttons.toggleClass("disabled"), this.element.disabled ? (this.$group.attr("tabindex", this.element.tabIndex), this.$group.css("cursor", "")) : (this.$group.removeAttr("tabindex"), this.options.disabledCursor && this.$group.css("cursor", this.options.disabledCursor))
        }, focus: function () {
            this.$group.trigger("focus")
        }, click: function (e) {
            t(e.currentTarget).hasClass("active") && !this.options.switchAlways || this.change()
        }, change: function () {
            this.set(!this.element.checked)
        }, set: function (t) {
            this.element.checked = t, this.$element.trigger("change")
        }, keydown: function (e) {
            -1 !== t.inArray(e.keyCode, this.options.toggleKeyCodes) ? (e.preventDefault(), this.change()) : 13 === e.keyCode && t(this.element.form).trigger("submit")
        }, reset: function () {
            (this.element.defaultChecked && this.$off.hasClass("active") || !this.element.defaultChecked && this.$on.hasClass("active")) && this.set(this.element.defaultChecked)
        }
    };
    var o = t.extend({}, t.propHooks);
    t.extend(t.propHooks, {
        checked: {
            set: function (e, i) {
                var n = t.data(e, "bs.checkbox");
                n && e.checked !== i && n.change(i), o.checked && o.checked.set && o.checked.set(e, i)
            }
        }, disabled: {
            set: function (e, i) {
                var n = t.data(e, "bs.checkbox");
                n && e.disabled !== i && n.toggleDisabled(), o.disabled && o.disabled.set && o.disabled.set(e, i)
            }
        }
    });
    var n = t.fn.checkboxpicker;
    return t.fn.checkboxpicker = function (e, o) {
        return (this instanceof t ? this : t("string" == typeof e ? e : o)).each(function () {
            var o = t.data(this, "bs.checkbox");
            o || (o = new i(this, e), t.data(this, "bs.checkbox", o))
        })
    }, t.fn.checkboxpicker.defaults = {
        baseGroupCls: "btn-group",
        baseCls: "btn",
        groupCls: null,
        cls: null,
        offCls: "btn-default",
        onCls: "btn-default",
        offActiveCls: "btn-danger",
        onActiveCls: "btn-success",
        offLabel: "No",
        onLabel: "Yes",
        offTitle: !1,
        onTitle: !1,
        iconCls: "glyphicon",
        disabledCursor: "not-allowed",
        toggleKeyCodes: [13, 32],
        warningMessage: "Please do not use Bootstrap-checkbox element in label element."
    }, t.fn.checkboxpicker.Constructor = i, t.fn.checkboxpicker.noConflict = function () {
        return t.fn.checkboxpicker = n, this
    }, t.fn.checkboxpicker
}), function (t, e, i) {
    function o(i, o, n) {
        var s = e.createElement(i);
        return o && (s.id = V + o), n && (s.style.cssText = n), t(s)
    }

    function n() {
        return i.innerHeight ? i.innerHeight : t(i).height()
    }

    function s(e, i) {
        i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function (e) {
            var o;
            return void 0 === this.cache[e] && (void 0 !== (o = t(this.el).attr("data-cbox-" + e)) ? this.cache[e] = o : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== K[e] && (this.cache[e] = K[e])), this.cache[e]
        }, this.get = function (e) {
            var i = this.value(e);
            return t.isFunction(i) ? i.call(this.el, this) : i
        }
    }

    function r(t) {
        var e = _.length, i = (R + t) % e;
        return 0 > i ? e + i : i
    }

    function a(t, e) {
        return Math.round((/%/.test(t) ? ("x" === e ? $.width() : n()) / 100 : 1) * parseInt(t, 10))
    }

    function l(t, e) {
        return t.get("photo") || t.get("photoRegex").test(e)
    }

    function c(t, e) {
        return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e
    }

    function h(t) {
        "contains" in g[0] && !g[0].contains(t.target) && t.target !== m[0] && (t.stopPropagation(), g.focus())
    }

    function d(t) {
        d.str !== t && (g.add(m).removeClass(d.str).addClass(t), d.str = t)
    }

    function u(i) {
        t(e).trigger(i), nt.triggerHandler(i)
    }

    function p(n) {
        var r, p;
        if (!U) {
            if (r = t(n).data(Y), j = new s(n, r), p = j.get("rel"), R = 0, p && !1 !== p && "nofollow" !== p ? (_ = t("." + G).filter(function () {
                return new s(this, t.data(this, Y)).get("rel") === p
            }), -1 === (R = _.index(j.el)) && (_ = _.add(j.el), R = _.length - 1)) : _ = t(j.el), !F) {
                F = W = !0, d(j.get("className")), g.css({
                    visibility: "hidden",
                    display: "block",
                    opacity: ""
                }), T = o(st, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), y.css({
                    width: "",
                    height: ""
                }).append(T), N = w.height() + k.height() + y.outerHeight(!0) - y.height(), L = b.width() + x.width() + y.outerWidth(!0) - y.width(), z = T.outerHeight(!0), H = T.outerWidth(!0);
                var f = a(j.get("initialWidth"), "x"), v = a(j.get("initialHeight"), "y"), $ = j.get("maxWidth"),
                    E = j.get("maxHeight");
                j.w = Math.max((!1 !== $ ? Math.min(f, a($, "x")) : f) - H - L, 0), j.h = Math.max((!1 !== E ? Math.min(v, a(E, "y")) : v) - z - N, 0), T.css({
                    width: "",
                    height: j.h
                }), Q.position(), u(Z), j.get("onOpen"), P.add(A).hide(), g.focus(), j.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", h, !0), nt.one(it, function () {
                    e.removeEventListener("focus", h, !0)
                })), j.get("returnFocus") && nt.one(it, function () {
                    t(j.el).focus()
                })
            }
            var M = parseFloat(j.get("opacity"));
            m.css({
                opacity: M == M ? M : "",
                cursor: j.get("overlayClose") ? "pointer" : "",
                visibility: "visible"
            }).show(), j.get("closeButton") ? O.html(j.get("close")).appendTo(y) : O.appendTo("<div/>"), function () {
                var e, n, s, r = Q.prep, h = ++rt;
                if (W = !0, q = !1, u(ot), u(J), j.get("onLoad"), j.h = j.get("height") ? a(j.get("height"), "y") - z - N : j.get("innerHeight") && a(j.get("innerHeight"), "y"), j.w = j.get("width") ? a(j.get("width"), "x") - H - L : j.get("innerWidth") && a(j.get("innerWidth"), "x"), j.mw = j.w, j.mh = j.h, j.get("maxWidth") && (j.mw = a(j.get("maxWidth"), "x") - H - L, j.mw = j.w && j.w < j.mw ? j.w : j.mw), j.get("maxHeight") && (j.mh = a(j.get("maxHeight"), "y") - z - N, j.mh = j.h && j.h < j.mh ? j.h : j.mh), e = j.get("href"), B = setTimeout(function () {
                    C.show()
                }, 100), j.get("inline")) {
                    var d = t(e).eq(0);
                    s = t("<div>").hide().insertBefore(d), nt.one(ot, function () {
                        s.replaceWith(d)
                    }), r(d)
                } else j.get("iframe") ? r(" ") : j.get("html") ? r(j.get("html")) : l(j, e) ? (e = c(j, e), q = j.get("createImg"), t(q).addClass(V + "Photo").bind("error." + V, function () {
                    r(o(st, "Error").html(j.get("imgError")))
                }).one("load", function () {
                    h === rt && setTimeout(function () {
                        var e;
                        j.get("retinaImage") && i.devicePixelRatio > 1 && (q.height = q.height / i.devicePixelRatio, q.width = q.width / i.devicePixelRatio), j.get("scalePhotos") && (n = function () {
                            q.height -= q.height * e, q.width -= q.width * e
                        }, j.mw && q.width > j.mw && (e = (q.width - j.mw) / q.width, n()), j.mh && q.height > j.mh && (e = (q.height - j.mh) / q.height, n())), j.h && (q.style.marginTop = Math.max(j.mh - q.height, 0) / 2 + "px"), _[1] && (j.get("loop") || _[R + 1]) && (q.style.cursor = "pointer", t(q).bind("click." + V, function () {
                            Q.next()
                        })), q.style.width = q.width + "px", q.style.height = q.height + "px", r(q)
                    }, 1)
                }), q.src = e) : e && S.load(e, j.get("data"), function (e, i) {
                    h === rt && r("error" === i ? o(st, "Error").html(j.get("xhrError")) : t(this).contents())
                })
            }()
        }
    }

    function f() {
        g || (X = !1, $ = t(i), g = o(st).attr({
            id: Y,
            class: !1 === t.support.opacity ? V + "IE" : "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), m = o(st, "Overlay").hide(), C = t([o(st, "LoadingOverlay")[0], o(st, "LoadingGraphic")[0]]), v = o(st, "Wrapper"), y = o(st, "Content").append(A = o(st, "Title"), E = o(st, "Current"), D = t('<button type="button"/>').attr({id: V + "Previous"}), I = t('<button type="button"/>').attr({id: V + "Next"}), M = t('<button type="button"/>').attr({id: V + "Slideshow"}), C), O = t('<button type="button"/>').attr({id: V + "Close"}), v.append(o(st).append(o(st, "TopLeft"), w = o(st, "TopCenter"), o(st, "TopRight")), o(st, !1, "clear:left").append(b = o(st, "MiddleLeft"), y, x = o(st, "MiddleRight")), o(st, !1, "clear:left").append(o(st, "BottomLeft"), k = o(st, "BottomCenter"), o(st, "BottomRight"))).find("div div").css({float: "left"}), S = o(st, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), P = I.add(D).add(E).add(M)), e.body && !g.parent().length && t(e.body).append(m, g.append(v, S))
    }

    var m, g, v, y, w, b, x, k, _, $, T, S, C, A, E, M, I, D, O, P, j, N, L, z, H, R, q, F, W, U, B, Q, X, K = {
            html: !1,
            photo: !1,
            iframe: !1,
            inline: !1,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            opacity: .9,
            preloading: !0,
            className: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0,
            closeButton: !0,
            fastIframe: !0,
            open: !1,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: !0,
            trapFocus: !0,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            rel: function () {
                return this.rel
            },
            href: function () {
                return t(this).attr("href")
            },
            title: function () {
                return this.title
            },
            createImg: function () {
                var e = new Image, i = t(this).data("cbox-img-attrs");
                return "object" == typeof i && t.each(i, function (t, i) {
                    e[t] = i
                }), e
            },
            createIframe: function () {
                var i = e.createElement("iframe"), o = t(this).data("cbox-iframe-attrs");
                return "object" == typeof o && t.each(o, function (t, e) {
                    i[t] = e
                }), "frameBorder" in i && (i.frameBorder = 0), "allowTransparency" in i && (i.allowTransparency = "true"), i.name = (new Date).getTime(), i.allowFullscreen = !0, i
            }
        }, Y = "colorbox", V = "cbox", G = V + "Element", Z = V + "_open", J = V + "_load", tt = V + "_complete",
        et = V + "_cleanup", it = V + "_closed", ot = V + "_purge", nt = t("<a/>"), st = "div", rt = 0, at = {},
        lt = function () {
            function t() {
                clearTimeout(r)
            }

            function e() {
                (j.get("loop") || _[R + 1]) && (t(), r = setTimeout(Q.next, j.get("slideshowSpeed")))
            }

            function i() {
                M.html(j.get("slideshowStop")).unbind(l).one(l, o), nt.bind(tt, e).bind(J, t), g.removeClass(a + "off").addClass(a + "on")
            }

            function o() {
                t(), nt.unbind(tt, e).unbind(J, t), M.html(j.get("slideshowStart")).unbind(l).one(l, function () {
                    Q.next(), i()
                }), g.removeClass(a + "on").addClass(a + "off")
            }

            function n() {
                s = !1, M.hide(), t(), nt.unbind(tt, e).unbind(J, t), g.removeClass(a + "off " + a + "on")
            }

            var s, r, a = V + "Slideshow_", l = "click." + V;
            return function () {
                s ? j.get("slideshow") || (nt.unbind(et, n), n()) : j.get("slideshow") && _[1] && (s = !0, nt.one(et, n), j.get("slideshowAuto") ? i() : o(), M.show())
            }
        }();
    t[Y] || (t(f), (Q = t.fn[Y] = t[Y] = function (i, o) {
        var n = this;
        return i = i || {}, t.isFunction(n) && (n = t("<a/>"), i.open = !0), n[0] ? (f(), function () {
            function i(t) {
                t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), p(this))
            }

            return !!g && (X || (X = !0, I.click(function () {
                Q.next()
            }), D.click(function () {
                Q.prev()
            }), O.click(function () {
                Q.close()
            }), m.click(function () {
                j.get("overlayClose") && Q.close()
            }), t(e).bind("keydown." + V, function (t) {
                var e = t.keyCode;
                F && j.get("escKey") && 27 === e && (t.preventDefault(), Q.close()), F && j.get("arrowKey") && _[1] && !t.altKey && (37 === e ? (t.preventDefault(), D.click()) : 39 === e && (t.preventDefault(), I.click()))
            }), t.isFunction(t.fn.on) ? t(e).on("click." + V, "." + G, i) : t("." + G).live("click." + V, i)), !0)
        }() && (o && (i.onComplete = o), n.each(function () {
            var e = t.data(this, Y) || {};
            t.data(this, Y, t.extend(e, i))
        }).addClass(G), new s(n[0], i).get("open") && p(n[0])), n) : n
    }).position = function (e, i) {
        function o() {
            w[0].style.width = k[0].style.width = y[0].style.width = parseInt(g[0].style.width, 10) - L + "px", y[0].style.height = b[0].style.height = x[0].style.height = parseInt(g[0].style.height, 10) - N + "px"
        }

        var s, r, l, c = 0, h = 0, d = g.offset();
        if ($.unbind("resize." + V), g.css({
            top: -9e4,
            left: -9e4
        }), r = $.scrollTop(), l = $.scrollLeft(), j.get("fixed") ? (d.top -= r, d.left -= l, g.css({position: "fixed"})) : (c = r, h = l, g.css({position: "absolute"})), h += !1 !== j.get("right") ? Math.max($.width() - j.w - H - L - a(j.get("right"), "x"), 0) : !1 !== j.get("left") ? a(j.get("left"), "x") : Math.round(Math.max($.width() - j.w - H - L, 0) / 2), c += !1 !== j.get("bottom") ? Math.max(n() - j.h - z - N - a(j.get("bottom"), "y"), 0) : !1 !== j.get("top") ? a(j.get("top"), "y") : Math.round(Math.max(n() - j.h - z - N, 0) / 2), g.css({
            top: d.top,
            left: d.left,
            visibility: "visible"
        }), v[0].style.width = v[0].style.height = "9999px", s = {
            width: j.w + H + L,
            height: j.h + z + N,
            top: c,
            left: h
        }, e) {
            var u = 0;
            t.each(s, function (t) {
                return s[t] !== at[t] ? void (u = e) : void 0
            }), e = u
        }
        at = s, e || g.css(s), g.dequeue().animate(s, {
            duration: e || 0, complete: function () {
                o(), W = !1, v[0].style.width = j.w + H + L + "px", v[0].style.height = j.h + z + N + "px", j.get("reposition") && setTimeout(function () {
                    $.bind("resize." + V, Q.position)
                }, 1), t.isFunction(i) && i()
            }, step: o
        })
    }, Q.resize = function (t) {
        var e;
        F && ((t = t || {}).width && (j.w = a(t.width, "x") - H - L), t.innerWidth && (j.w = a(t.innerWidth, "x")), T.css({width: j.w}), t.height && (j.h = a(t.height, "y") - z - N), t.innerHeight && (j.h = a(t.innerHeight, "y")), t.innerHeight || t.height || (e = T.scrollTop(), T.css({height: "auto"}), j.h = T.height()), T.css({height: j.h}), e && T.scrollTop(e), Q.position("none" === j.get("transition") ? 0 : j.get("speed")))
    }, Q.prep = function (i) {
        if (F) {
            var n, a = "none" === j.get("transition") ? 0 : j.get("speed");
            T.remove(), (T = o(st, "LoadedContent").append(i)).hide().appendTo(S.show()).css({
                width: (j.w = j.w || T.width(), j.w = j.mw && j.mw < j.w ? j.mw : j.w, j.w),
                overflow: j.get("scrolling") ? "auto" : "hidden"
            }).css({height: (j.h = j.h || T.height(), j.h = j.mh && j.mh < j.h ? j.mh : j.h, j.h)}).prependTo(y), S.hide(), t(q).css({float: "none"}), d(j.get("className")), n = function () {
                function i() {
                    !1 === t.support.opacity && g[0].style.removeAttribute("filter")
                }

                var o, n, h = _.length;
                F && (n = function () {
                    clearTimeout(B), C.hide(), u(tt), j.get("onComplete")
                }, A.html(j.get("title")).show(), T.show(), h > 1 ? ("string" == typeof j.get("current") && E.html(j.get("current").replace("{current}", R + 1).replace("{total}", h)).show(), I[j.get("loop") || h - 1 > R ? "show" : "hide"]().html(j.get("next")), D[j.get("loop") || R ? "show" : "hide"]().html(j.get("previous")), lt(), j.get("preloading") && t.each([r(-1), r(1)], function () {
                    var i = _[this], o = new s(i, t.data(i, Y)), n = o.get("href");
                    n && l(o, n) && (n = c(o, n), e.createElement("img").src = n)
                })) : P.hide(), j.get("iframe") ? (o = j.get("createIframe"), j.get("scrolling") || (o.scrolling = "no"), t(o).attr({
                    src: j.get("href"),
                    class: V + "Iframe"
                }).one("load", n).appendTo(T), nt.one(ot, function () {
                    o.src = "//about:blank"
                }), j.get("fastIframe") && t(o).trigger("load")) : n(), "fade" === j.get("transition") ? g.fadeTo(a, 1, i) : i())
            }, "fade" === j.get("transition") ? g.fadeTo(a, 0, function () {
                Q.position(0, n)
            }) : Q.position(a, n)
        }
    }, Q.next = function () {
        !W && _[1] && (j.get("loop") || _[R + 1]) && (R = r(1), p(_[R]))
    }, Q.prev = function () {
        !W && _[1] && (j.get("loop") || R) && (R = r(-1), p(_[R]))
    }, Q.close = function () {
        F && !U && (U = !0, F = !1, u(et), j.get("onCleanup"), $.unbind("." + V), m.fadeTo(j.get("fadeOut") || 0, 0), g.stop().fadeTo(j.get("fadeOut") || 0, 0, function () {
            g.hide(), m.hide(), u(ot), T.remove(), setTimeout(function () {
                U = !1, u(it), j.get("onClosed")
            }, 1)
        }))
    }, Q.remove = function () {
        g && (g.stop(), t[Y].close(), g.stop(!1, !0).remove(), m.remove(), U = !1, g = null, t("." + G).removeData(Y).removeClass(G), t(e).unbind("click." + V).unbind("keydown." + V))
    }, Q.element = function () {
        return t(j.el)
    }, Q.settings = K)
}(jQuery, document, window), eval(function (t, e, i, o, n, s) {
    if (n = function (t) {
        return (t < 53 ? "" : n(parseInt(t / 53))) + ((t %= 53) > 35 ? String.fromCharCode(t + 29) : t.toString(36))
    }, !"".replace(/^/, String)) {
        for (; i--;) s[n(i)] = o[i] || n(i);
        o = [function (t) {
            return s[t]
        }], n = function () {
            return "\\w+"
        }, i = 1
    }
    for (; i--;) o[i] && (t = t.replace(new RegExp("\\b" + n(i) + "\\b", "g"), o[i]));
    return t
}('(2($){$.c.f=2(p){p=$.d({g:"!@#$%^&*()+=[]\\\\\\\';,/{}|\\":<>?~`.- ",4:"",9:""},p);7 3.b(2(){5(p.G)p.4+="Q";5(p.w)p.4+="n";s=p.9.z(\'\');x(i=0;i<s.y;i++)5(p.g.h(s[i])!=-1)s[i]="\\\\"+s[i];p.9=s.O(\'|\');6 l=N M(p.9,\'E\');6 a=p.g+p.4;a=a.H(l,\'\');$(3).J(2(e){5(!e.r)k=o.q(e.K);L k=o.q(e.r);5(a.h(k)!=-1)e.j();5(e.u&&k==\'v\')e.j()});$(3).B(\'D\',2(){7 F})})};$.c.I=2(p){6 8="n";8+=8.P();p=$.d({4:8},p);7 3.b(2(){$(3).f(p)})};$.c.t=2(p){6 m="A";p=$.d({4:m},p);7 3.b(2(){$(3).f(p)})}})(C);', 0, 53, "||function|this|nchars|if|var|return|az|allow|ch|each|fn|extend||alphanumeric|ichars|indexOf||preventDefault||reg|nm|abcdefghijklmnopqrstuvwxyz|String||fromCharCode|charCode||alpha|ctrlKey||allcaps|for|length|split|1234567890|bind|jQuery|contextmenu|gi|false|nocaps|replace|numeric|keypress|which|else|RegExp|new|join|toUpperCase|ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("|"), 0, {})), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function (t) {
    var e = /\+/g;

    function i(t) {
        return n.raw ? t : encodeURIComponent(t)
    }

    function o(i, o) {
        var s = n.raw ? i : function (t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(e, " ")), n.json ? JSON.parse(t) : t
            } catch (t) {
            }
        }(i);
        return t.isFunction(o) ? o(s) : s
    }

    var n = t.cookie = function (e, s, r) {
        if (void 0 !== s && !t.isFunction(s)) {
            if ("number" == typeof (r = t.extend({}, n.defaults, r)).expires) {
                var a = r.expires, l = r.expires = new Date;
                l.setTime(+l + 864e5 * a)
            }
            return document.cookie = [i(e), "=", (c = s, i(n.json ? JSON.stringify(c) : String(c))), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
        }
        for (var c, h, d = e ? void 0 : {}, u = document.cookie ? document.cookie.split("; ") : [], p = 0, f = u.length; p < f; p++) {
            var m = u[p].split("="), g = (h = m.shift(), n.raw ? h : decodeURIComponent(h)), v = m.join("=");
            if (e && e === g) {
                d = o(v, s);
                break
            }
            e || void 0 === (v = o(v)) || (d[g] = v)
        }
        return d
    };
    n.defaults = {}, t.removeCookie = function (e, i) {
        return void 0 !== t.cookie(e) && (t.cookie(e, "", t.extend({}, i, {expires: -1})), !t.cookie(e))
    }
}), function (t, e, i, o) {
    var n = t(e);
    t.fn.lazyload = function (s) {
        function r() {
            var e = 0;
            l.each(function () {
                var i = t(this);
                if (!c.skip_invisible || i.is(":visible")) if (t.abovethetop(this, c) || t.leftofbegin(this, c)) ; else if (t.belowthefold(this, c) || t.rightoffold(this, c)) {
                    if (++e > c.failure_limit) return !1
                } else i.trigger("appear"), e = 0
            })
        }

        var a, l = this, c = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: e,
            data_attribute: "original",
            skip_invisible: !1,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return s && (o !== s.failurelimit && (s.failure_limit = s.failurelimit, delete s.failurelimit), o !== s.effectspeed && (s.effect_speed = s.effectspeed, delete s.effectspeed), t.extend(c, s)), a = c.container === o || c.container === e ? n : t(c.container), 0 === c.event.indexOf("scroll") && a.bind(c.event, function () {
            return r()
        }), this.each(function () {
            var e = this, i = t(e);
            e.loaded = !1, (i.attr("src") === o || !1 === i.attr("src")) && i.is("img") && i.attr("src", c.placeholder), i.one("appear", function () {
                if (!this.loaded) {
                    if (c.appear) {
                        var o = l.length;
                        c.appear.call(e, o, c)
                    }
                    t("<img />").bind("load", function () {
                        var o = i.attr("data-" + c.data_attribute);
                        i.hide(), i.is("img") ? i.attr("src", o) : i.css("background-image", "url('" + o + "')"), i[c.effect](c.effect_speed), e.loaded = !0;
                        var n = t.grep(l, function (t) {
                            return !t.loaded
                        });
                        if (l = t(n), c.load) {
                            var s = l.length;
                            c.load.call(e, s, c)
                        }
                    }).attr("src", i.attr("data-" + c.data_attribute))
                }
            }), 0 !== c.event.indexOf("scroll") && i.bind(c.event, function () {
                e.loaded || i.trigger("appear")
            })
        }), n.bind("resize", function () {
            r()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && n.bind("pageshow", function (e) {
            e.originalEvent && e.originalEvent.persisted && l.each(function () {
                t(this).trigger("appear")
            })
        }), t(i).ready(function () {
            r()
        }), this
    }, t.belowthefold = function (i, s) {
        return (s.container === o || s.container === e ? (e.innerHeight ? e.innerHeight : n.height()) + n.scrollTop() : t(s.container).offset().top + t(s.container).height()) <= t(i).offset().top - s.threshold
    }, t.rightoffold = function (i, s) {
        return (s.container === o || s.container === e ? n.width() + n.scrollLeft() : t(s.container).offset().left + t(s.container).width()) <= t(i).offset().left - s.threshold
    }, t.abovethetop = function (i, s) {
        return (s.container === o || s.container === e ? n.scrollTop() : t(s.container).offset().top) >= t(i).offset().top + s.threshold + t(i).height()
    }, t.leftofbegin = function (i, s) {
        return (s.container === o || s.container === e ? n.scrollLeft() : t(s.container).offset().left) >= t(i).offset().left + s.threshold + t(i).width()
    }, t.inviewport = function (e, i) {
        return !(t.rightoffold(e, i) || t.leftofbegin(e, i) || t.belowthefold(e, i) || t.abovethetop(e, i))
    }, t.extend(t.expr[":"], {
        "below-the-fold": function (e) {
            return t.belowthefold(e, {threshold: 0})
        }, "above-the-top": function (e) {
            return !t.belowthefold(e, {threshold: 0})
        }, "right-of-screen": function (e) {
            return t.rightoffold(e, {threshold: 0})
        }, "left-of-screen": function (e) {
            return !t.rightoffold(e, {threshold: 0})
        }, "in-viewport": function (e) {
            return t.inviewport(e, {threshold: 0})
        }, "above-the-fold": function (e) {
            return !t.belowthefold(e, {threshold: 0})
        }, "right-of-fold": function (e) {
            return t.rightoffold(e, {threshold: 0})
        }, "left-of-fold": function (e) {
            return !t.rightoffold(e, {threshold: 0})
        }
    })
}(jQuery, window, document), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

function Notifications() {
    this.actionDialog;
    var t = this;
    this.showDialog = function (e, i, o) {
        if (null != i) {
            var n = $("#dialog");
            0 == n.length && ($("body").append($("<div>", {id: "dialog"})), (n = $("#dialog")).html('<div><div class="header" style="display:none"></div><div class="content" style="display:none"></div><div class="action" style="display:none"><button class="btnSubmit">Đồng ý</button><button class="btnCancel">Đóng</button></div></div>'));
            var s = n.find(".action button.btnSubmit"), r = n.find(".action button.btnCancel");
            n.find(".header").html(e || "Thông báo"), n.find(".content").html(i), r.text("Đóng"), null != o && (null != o.submit ? (s.html(o.submit.text || "Đồng ý"), s.on("click", function () {
                o.submit.action()
            }).show()) : s.hide(), null != o.cancel && null != o.cancel.text && r.html(o.cancel.text)), r.on("click", function () {
                o && o.cancel && o.cancel.action && o.cancel.action(), t.closeDialog(o.close)
            }), r.show(), n.find("> div").css({"margin-top": "-" + Math.round($("#dialog > div").height() / 2) + "px"}), n.show();
            var a = n.find("> div").height(), l = $(window).height();
            $("#dialog > div").css("top", (l - a) / 2 + "px")
        }
    }, this.closeDialog = function (e) {
        var i = $("#dialog");
        i.hide(), i.find(".header").empty(), i.find(".content").empty(), i.find(".action button").unbind("click").hide(), e && "function" == typeof e && e(), t.actionDialog && "function" == typeof t.actionDialog && t.actionDialog()
    }, this.cancelDialog = function (e) {
        t.closeDialog(e)
    }, this.hideSubmit = function () {
        $("#dialog").find(".action button.btnSubmit").unbind("click").hide()
    }, this.showNotices = function (e, i) {
        var o = "";
        e && (is_array(e) || is_object(e)) ? $.each(e, function (t, e) {
            o += '<div class="alert alert-info"><a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + e + "</div>"
        }) : o = e, t.showDialog("Thông báo !!!", '<div class="notices">' + o + "</div>", {close: i})
    }, this.showSuccess = function (e, i) {
        var o = "";
        e && (is_array(e) || is_object(e)) ? $.each(e, function (t, e) {
            o += '<div class="alert alert-success"><a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + e + "</div>"
        }) : o = e, t.showDialog("Thông báo !!!", '<div class="success">' + o + "</div>", {close: i})
    }, this.showWarning = function (e, i) {
        var o = "";
        e && (is_array(e) || is_object(e)) ? $.each(e, function (t, e) {
            o += '<div class="alert alert-warning"><a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + e + "</div>"
        }) : o = e, t.showDialog("Thông báo !!!", '<div class="warnings">' + o + "</div>", {close: i})
    }, this.showErrors = function (e, i) {
        var o = "";
        e && (is_array(e) || is_object(e)) ? $.each(e, function (t, e) {
            o += '<div class="alert alert-warning"><a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + e + "</div>"
        }) : o = e, t.showDialog("Thông báo !!!", '<div class="errors">' + o + "</div>", {close: i})
    }
}

function showEmailBox() {
}

function showPhoneBox() {
}

function showBoxAds() {
}

function objText(t, e) {
    if (is_object(t) || is_array(t)) {
        var i = "";
        return e = void 0 === e ? "" : e, $.each(t, function (t, o) {
            i = i + '<p clas="' + e + '">' + o + "</p>"
        }), i
    }
    return t
}

function showPopup(t, e) {
    noti_.showDialog("Thông báo !!!", t, {close: e})
}

function showSuccess(t, e) {
    noti_.showSuccess(t, {close: e})
}

function showConfirm(t, e) {
    noti_.showDialog("Thông báo !!!", t, {
        submit: {
            text: "Đồng ý", action: function () {
                e.success
            }
        }, cancel: {
            text: "Đóng", action: function () {
                e.error
            }
        }
    })
}

function showWarning(t, e) {
    noti_.showErrors(t, {close: e})
}

!function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), function (t) {
    "use strict";
    t.fn.emulateTransitionEnd = function (e) {
        var i = !1, o = this;
        return t(this).one("bsTransitionEnd", function () {
            i = !0
        }), setTimeout(function () {
            i || t(o).trigger(t.support.transition.end)
        }, e), this
    }, t(function () {
        t.support.transition = function () {
            var t = document.createElement("bootstrap"), e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var i in e) if (void 0 !== t.style[i]) return {end: e[i]};
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]', i = function (i) {
        t(i).on("click", e, this.close)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function o() {
            r.detach().trigger("closed.bs.alert").remove()
        }

        var n = t(this), s = n.attr("data-target");
        s || (s = (s = n.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t("#" === s ? [] : s);
        e && e.preventDefault(), r.length || (r = n.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o())
    };
    var o = t.fn.alert;
    t.fn.alert = function (e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.alert");
            n || o.data("bs.alert", n = new i(this)), "string" == typeof e && n[e].call(o)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.button"), s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }

    var i = function (e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
        var i = "disabled", o = this.$element, n = o.is("input") ? "val" : "html", s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var o = t(i.target).closest(".btn");
        e.call(o, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), o.is("input,button") ? o.trigger("focus") : o.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : r ? n[r]() : s.interval && n.pause().cycle()
        })
    }

    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(o)
    }, i.prototype.to = function (t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    }, i.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    }, i.prototype.slide = function (e, o) {
        var n = this.$element.find(".item.active"), s = o || this.getItemForDirection(e, n), r = this.interval,
            a = "next" == e ? "left" : "right", l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var c = s[0], h = t.Event("slide.bs.carousel", {relatedTarget: c, direction: a});
        if (this.$element.trigger(h), !h.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(s)]);
                d && d.addClass("active")
            }
            var u = t.Event("slid.bs.carousel", {relatedTarget: c, direction: a});
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(a), s.addClass(a), n.one("bsTransitionEnd", function () {
                s.removeClass([e, a].join(" ")).addClass("active"), n.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(u)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(u)), r && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = o, this
    };
    var n = function (i) {
        var o, n = t(this), s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var r = t.extend({}, s.data(), n.data()), a = n.attr("data-slide-to");
            a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this), n = i.data("bs.collapse"),
                s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }

    var o = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 350, o.DEFAULTS = {toggle: !0}, o.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, o.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n), r = s.data("bs.collapse") ? "toggle" : n.data();
        i.call(s, r)
    })
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(o).remove(), t(n).each(function () {
            var o = t(this), n = e(o), s = {relatedTarget: this};
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }

    var o = ".dropdown-backdrop", n = '[data-toggle="dropdown"]', s = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.3.7", s.prototype.toggle = function (o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = e(n), r = s.hasClass("open");
            if (i(), !r) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {relatedTarget: this};
                if (s.trigger(o = t.Event("show.bs.dropdown", a)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function (i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var s = e(o), r = s.hasClass("open");
                if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && s.find(n).trigger("focus"), o.trigger("click");
                var a = s.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = function (e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new s(this)), "string" == typeof e && o[e].call(i)
        })
    }, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", n, s.prototype.toggle).on("keydown.bs.dropdown.data-api", n, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), function (t) {
    "use strict";

    function e(e, o) {
        return this.each(function () {
            var n = t(this), s = n.data("bs.modal"), r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, r)), "string" == typeof e ? s[e](o) : r.show && s.show(o)
        })
    }

    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var o = this, n = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            o.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {relatedTarget: e});
            n ? o.$dialog.one("bsTransitionEnd", function () {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var o = this, n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function () {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var o = t(this), n = o.attr("href"), s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            r = s.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(n) && n}, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, r, this)
    })
}(jQuery), function (t) {
    "use strict";
    var e = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, e.prototype.init = function (e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var r = n[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin", l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.getOptions = function (e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function () {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function (t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, e.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void (i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, e.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1
    }, e.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, e.prototype.show = function () {
        var i = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(i);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (i.isDefaultPrevented() || !o) return;
            var n = this, s = this.tip(), r = this.getUID(this.type);
            this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i, c = l.test(a);
            c && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var h = this.getPosition(), d = s[0].offsetWidth, u = s[0].offsetHeight;
            if (c) {
                var p = a, f = this.getPosition(this.$viewport);
                a = "bottom" == a && h.bottom + u > f.bottom ? "top" : "top" == a && h.top - u < f.top ? "bottom" : "right" == a && h.right + d > f.width ? "left" : "left" == a && h.left - d < f.left ? "right" : a, s.removeClass(p).addClass(a)
            }
            var m = this.getCalculatedOffset(a, h, d, u);
            this.applyPlacement(m, a);
            var g = function () {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(e.TRANSITION_DURATION) : g()
        }
    }, e.prototype.applyPlacement = function (e, i) {
        var o = this.tip(), n = o[0].offsetWidth, s = o[0].offsetHeight, r = parseInt(o.css("margin-top"), 10),
            a = parseInt(o.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(o[0], t.extend({
            using: function (t) {
                o.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth, c = o[0].offsetHeight;
        "top" == i && c != s && (e.top = e.top + s - c);
        var h = this.getViewportAdjustedDelta(i, e, l, c);
        h.left ? e.left += h.left : e.top += h.top;
        var d = /top|bottom/.test(i), u = d ? 2 * h.left - n + l : 2 * h.top - s + c,
            p = d ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(u, o[0][p], d)
    }, e.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, e.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function (i) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), i && i()
        }

        var n = this, s = t(this.$tip), r = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(e.TRANSITION_DURATION) : o(), this.hoverState = null, this
    }, e.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function () {
        return this.getTitle()
    }, e.prototype.getPosition = function (e) {
        var i = (e = e || this.$element)[0], o = "BODY" == i.tagName, n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {width: n.right - n.left, height: n.bottom - n.top}));
        var s = window.SVGElement && i instanceof window.SVGElement, r = o ? {top: 0, left: 0} : s ? null : e.offset(),
            a = {scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
            l = o ? {width: t(window).width(), height: t(window).height()} : null;
        return t.extend({}, n, a, l, r)
    }, e.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {top: e.top + e.height / 2 - o / 2, left: e.left - i} : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var n = {top: 0, left: 0};
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll, l = e.top + s - r.scroll + o;
            a < r.top ? n.top = r.top - a : l > r.top + r.height && (n.top = r.top + r.height - l)
        } else {
            var c = e.left - s, h = e.left + s + i;
            c < r.left ? n.left = r.left - c : h > r.right && (n.left = r.left + r.width - h)
        }
        return n
    }, e.prototype.getTitle = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.getUID = function (t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, e.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function () {
        this.enabled = !0
    }, e.prototype.disable = function () {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function (e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function (i) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.tooltip"), s = "object" == typeof i && i;
            !n && /destroy|hide/.test(i) || (n || o.data("bs.tooltip", n = new e(this, s)), "string" == typeof i && n[i]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), function (t) {
    "use strict";
    var e = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = function (i) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.popover"), s = "object" == typeof i && i;
            !n && /destroy|hide/.test(i) || (n || o.data("bs.popover", n = new e(this, s)), "string" == typeof i && n[i]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), function (t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.scrollspy"), s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }

    e.VERSION = "3.3.7", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, i = "offset", o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), n = e.data("target") || e.attr("href"), s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [[s[i]().top + o, n]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(), n = this.offsets, s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) r != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }

    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), o = e.data("target");
        if (o || (o = (o = e.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"), s = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                r = t.Event("show.bs.tab", {relatedTarget: n[0]});
            if (n.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(o);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function () {
                    n.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, o, n) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }

        var r = o.find("> .active"),
            a = n && t.support.transition && (r.length && r.hasClass("fade") || !!o.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), r.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = o, this
    };
    var n = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.affix"), s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }

    var i = function (e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, o) {
        var n = this.$target.scrollTop(), s = this.$element.offset(), r = this.$target.height();
        if (null != i && "top" == this.affixed) return n < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + r <= t - o) && "bottom";
        var a = null == this.affixed, l = a ? n : s.top;
        return null != i && n <= i ? "top" : null != o && l + (a ? r : e) >= t - o && "bottom"
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), o = this.options.offset, n = o.top, s = o.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var a = this.getState(r, e, n, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: r - e - s})
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = o, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this), o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery), function (t, e, i, o) {
    var n = t(e);
    t.fn.lazyload = function (s) {
        function r() {
            var e = 0;
            l.each(function () {
                var i = t(this);
                if (!c.skip_invisible || i.is(":visible")) if (t.abovethetop(this, c) || t.leftofbegin(this, c)) ; else if (t.belowthefold(this, c) || t.rightoffold(this, c)) {
                    if (++e > c.failure_limit) return !1
                } else i.trigger("appear"), e = 0
            })
        }

        var a, l = this, c = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: e,
            data_attribute: "original",
            skip_invisible: !1,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return s && (o !== s.failurelimit && (s.failure_limit = s.failurelimit, delete s.failurelimit), o !== s.effectspeed && (s.effect_speed = s.effectspeed, delete s.effectspeed), t.extend(c, s)), a = c.container === o || c.container === e ? n : t(c.container), 0 === c.event.indexOf("scroll") && a.bind(c.event, function () {
            return r()
        }), this.each(function () {
            var e = this, i = t(e);
            e.loaded = !1, (i.attr("src") === o || !1 === i.attr("src")) && i.is("img") && i.attr("src", c.placeholder), i.one("appear", function () {
                if (!this.loaded) {
                    if (c.appear) {
                        var o = l.length;
                        c.appear.call(e, o, c)
                    }
                    t("<img />").bind("load", function () {
                        var o = i.attr("data-" + c.data_attribute);
                        i.hide(), i.is("img") ? i.attr("src", o) : i.css("background-image", "url('" + o + "')"), i[c.effect](c.effect_speed), e.loaded = !0;
                        var n = t.grep(l, function (t) {
                            return !t.loaded
                        });
                        if (l = t(n), c.load) {
                            var s = l.length;
                            c.load.call(e, s, c)
                        }
                    }).attr("src", i.attr("data-" + c.data_attribute))
                }
            }), 0 !== c.event.indexOf("scroll") && i.bind(c.event, function () {
                e.loaded || i.trigger("appear")
            })
        }), n.bind("resize", function () {
            r()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && n.bind("pageshow", function (e) {
            e.originalEvent && e.originalEvent.persisted && l.each(function () {
                t(this).trigger("appear")
            })
        }), t(i).ready(function () {
            r()
        }), this
    }, t.belowthefold = function (i, s) {
        return (s.container === o || s.container === e ? (e.innerHeight ? e.innerHeight : n.height()) + n.scrollTop() : t(s.container).offset().top + t(s.container).height()) <= t(i).offset().top - s.threshold
    }, t.rightoffold = function (i, s) {
        return (s.container === o || s.container === e ? n.width() + n.scrollLeft() : t(s.container).offset().left + t(s.container).width()) <= t(i).offset().left - s.threshold
    }, t.abovethetop = function (i, s) {
        return (s.container === o || s.container === e ? n.scrollTop() : t(s.container).offset().top) >= t(i).offset().top + s.threshold + t(i).height()
    }, t.leftofbegin = function (i, s) {
        return (s.container === o || s.container === e ? n.scrollLeft() : t(s.container).offset().left) >= t(i).offset().left + s.threshold + t(i).width()
    }, t.inviewport = function (e, i) {
        return !(t.rightoffold(e, i) || t.leftofbegin(e, i) || t.belowthefold(e, i) || t.abovethetop(e, i))
    }, t.extend(t.expr[":"], {
        "below-the-fold": function (e) {
            return t.belowthefold(e, {threshold: 0})
        }, "above-the-top": function (e) {
            return !t.belowthefold(e, {threshold: 0})
        }, "right-of-screen": function (e) {
            return t.rightoffold(e, {threshold: 0})
        }, "left-of-screen": function (e) {
            return !t.rightoffold(e, {threshold: 0})
        }, "in-viewport": function (e) {
            return t.inviewport(e, {threshold: 0})
        }, "above-the-fold": function (e) {
            return !t.belowthefold(e, {threshold: 0})
        }, "right-of-fold": function (e) {
            return t.rightoffold(e, {threshold: 0})
        }, "left-of-fold": function (e) {
            return !t.rightoffold(e, {threshold: 0})
        }
    })
}(jQuery, window, document), noti_ = new Notifications, function (t) {
    t.fn.keyGenCKfinder = function (e) {
        function o(t) {
            var e = 0, i = t;
            0 === o && (i = i.replace(new RegExp("^www."), "").replace(new RegExp("^."), ""));
            for (var n = 0; n < i.length; n++) e += i.charCodeAt(n);
            return e + -33 * parseInt(e % 100 / 33, 10) - 100 * ("" + e / 100 >>> 0)
        }

        var n, s;
        e = t.extend({
            version: "2x",
            licenseKey: "",
            licenseName: "",
            classKey: ".licenseKey"
        }, e), String.prototype.replaceAt = function (t, e) {
            return t > this.length - 1 ? this : this.substr(0, t) + e + this.substr(t + e.length)
        }, licName = t(e.licenseName).val(), "" === licName ? (alert("Mời bạn nhập License Name!"), t(e.licenseName).css("background-color", "yellow")) : (t(e.licenseName).css("background-color", ""), "2x" == e.version ? (e.licenseKey = function (t) {
            for (licenseKey = "", chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZ", i = 0; i <= 31; i++) licenseKey += chars[Math.floor(Math.random() * (chars.length - 1))];
            return zeroChars = chars[4] + chars[9] + chars[14] + chars[19] + chars[24] + chars[29], zeroChars = zeroChars[Math.floor(Math.random() * (zeroChars.length - 1))], licenseKey = licenseKey.replaceAt(0, zeroChars), threeChars = chars.substr(9 * (t.length + chars.indexOf(licenseKey[1])) % 32, 1), licenseKey = licenseKey.replaceAt(3, threeChars), twelveChars = chars[9 * (chars.indexOf(licenseKey[11]) + chars.indexOf(licenseKey[8])) % (chars.length - 1)], licenseKey = licenseKey.replaceAt(12, twelveChars), twentyFiveChars = chars[7] + chars[15] + chars[23] + chars[31], twentyFiveChars = twentyFiveChars[Math.floor(Math.random() * (twentyFiveChars.length - 1))], licenseKey = licenseKey.replaceAt(25, twentyFiveChars), licenseKey
        }(licName), t(e.classKey).val(e.licenseKey)) : (!("" != (s = licName).trim() && null == s.toLowerCase().match(/á|à|ả|ã|ạ|â|ấ|ầ|ậ|ẩ|ẫ|ă|ắ|ằ|ặ|ẳ|é|è|ẻ|ẹ|ê|ế|ề|ệ|ể|ẽ|đ|ụ|ủ|ù|ú|ũ|ư|ứ|ừ|ử|ự|ữ|ó|ò|ỏ|õ|ọ|ô|ố|ồ|ộ|ổ|ơ|ớ|ờ|ợ|ở|ỡ|ỉ|ì|í|ị|ĩ|ý|ỵ|ỳ|ỹ/i) || (n = licName, "" == n.trim() || !n.toLowerCase().replace(/0|1|2|3|4|5|6|7|8|9|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|\.|\-/gim, ""))) && (t(e.licenseName).css("background-color", "yellow"), alert("License Name là Domain không được gõ dấu!")), o(licName) > 32 ? alert("License Name là Domain chưa hợp lệ!") : (t(e.licenseName).css("background-color", ""), e.licenseKey = function t(e) {
            function n(t) {
                for (var e = chars.toString().split(""), i = 0; i < e.length; i++) if (t == e[i]) return i;
                return 0
            }

            for (licenseKey = "", chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZ", i = 0; i <= 28; i++) licenseKey += chars[Math.floor(Math.random() * (chars.length - 1))];
            return zeroChars = chars[Math.floor(Math.random() * (chars.length - 1))], licenseKey = licenseKey.replaceAt(1, zeroChars), licenseKey = licenseKey.replaceAt(3, zeroChars), twoChars = chars[1] + chars[6] + chars[11] + chars[16] + chars[21] + chars[26] + chars[31] + chars[2] + chars[7] + chars[12] + chars[17] + chars[22] + chars[27] + chars[32], twoChars = twoChars[Math.floor(Math.random() * (twoChars.length - 1))], licenseKey = licenseKey.replaceAt(2, twoChars), thirteen = chars[function (t, e) {
                for (var i = chars.toString().split(""), o = 0; o < i.length; o++) if (t == i[o]) return o;
                return 0
            }(licenseKey[8]) + 1], licenseKey = licenseKey.replaceAt(13, thirteen), twenty = o(e), twentyChar = chars[twenty], licenseKey = licenseKey.replaceAt(20, twentyChar), licenseC = licenseKey[1] + licenseKey[8] + licenseKey[17] + licenseKey[22] + licenseKey[3] + licenseKey[13] + licenseKey[11] + licenseKey[20] + licenseKey[5] + licenseKey[24], tsC = function (t) {
                for (var e = 0, i = 0; 10 > i; i++) e += t.charCodeAt(i);
                for (; e > 33;) {
                    var o = e.toString().split("");
                    e = 0;
                    for (var n = 0; n < o.length; n++) e += parseInt(o[n])
                }
                return e
            }(licenseC), twentySevenChars = chars[tsC], licenseKey = licenseKey.replaceAt(27, twentySevenChars), function (t, e, i, o, n, s) {
                for (var r = i, a = s, l = 33 + (r * a - (l = o) * (h = n)) % 33, c = window.Date, h = r = 0; 33 > h; h++) 1 == l * h % 33 && (r = h);
                return (r * s % 33 * (l = t) + r * (33 + -1 * o) % 33 * (h = e)) % 33 * 12 + ((r * (33 + -1 * n) - 33 * ("" + r * (33 + -1 * n) / 33 >>> 0)) * l + r * i % 33 * h) % 33 - 1 >= (a = new c(145751884e4)).getFullYear() % 2e3 * 12 + a.getMonth()
            }(n(licenseC[8]), n(licenseC[9]), n(licenseC[0]), n(licenseC[1]), n(licenseC[2]), n(licenseC[3])) ? licenseKey : t(e)
        }(licName), t(e.classKey).val(e.licenseKey))))
    }, t.keyGenCKfinder = t.fn.keyGenCKfinder
}(jQuery), function (t) {
    var e = function (t) {
        t || (t = window.event), t.cancelBubble = !0, t.stopPropagation && t.stopPropagation()
    };
    t.fn.checkbox = function (i) {
        try {
            document.execCommand("BackgroundImageCache", !1, !0)
        } catch (t) {
        }
        var o = {cls: "jquery-checkbox", empty: "empty.png"};
        return o = t.extend(o, i || {}), this.each(function () {
            var i, n, s, r, a = this,
                l = (n = (i = a).checked, s = i.disabled, r = t(i), i.stateInterval && clearInterval(i.stateInterval), i.stateInterval = setInterval(function () {
                    i.disabled != s && r.trigger((s = !!i.disabled) ? "disable" : "enable"), i.checked != n && r.trigger((n = !!i.checked) ? "check" : "uncheck")
                }, 10), r);
            a.wrapper && a.wrapper.remove(), a.wrapper = t('<span class="' + o.cls + '"><span class="mark"><img src="' + o.empty + '" /></span></span>'), a.wrapperInner = a.wrapper.children("span:eq(0)"), a.wrapper.hover(function (t) {
                a.wrapperInner.addClass(o.cls + "-hover"), e(t)
            }, function (t) {
                a.wrapperInner.removeClass(o.cls + "-hover"), e(t)
            }), l.css({position: "absolute", zIndex: -1, visibility: "hidden"}).after(a.wrapper);
            var c = !1;
            l.attr("id") && ((c = t("label[for=" + l.attr("id") + "]")).length || (c = !1)), c || (c = l.closest ? l.closest("label") : l.parents("label:eq(0)")).length || (c = !1), c && (c.hover(function (t) {
                a.wrapper.trigger("mouseover", [t])
            }, function (t) {
                a.wrapper.trigger("mouseout", [t])
            }), c.click(function (t) {
                return l.trigger("click", [t]), e(t), !1
            })), a.wrapper.click(function (t) {
                return l.trigger("click", [t]), e(t), !1
            }), l.click(function (t) {
                e(t)
            }), l.bind("disable", function () {
                a.wrapperInner.addClass(o.cls + "-disabled")
            }).bind("enable", function () {
                a.wrapperInner.removeClass(o.cls + "-disabled")
            }), l.bind("check", function () {
                a.wrapper.addClass(o.cls + "-checked")
            }).bind("uncheck", function () {
                a.wrapper.removeClass(o.cls + "-checked")
            }), t("img", a.wrapper).bind("dragstart", function () {
                return !1
            }).bind("mousedown", function () {
                return !1
            }), window.getSelection && a.wrapper.css("MozUserSelect", "none"), a.checked && a.wrapper.addClass(o.cls + "-checked"), a.disabled && a.wrapperInner.addClass(o.cls + "-disabled")
        })
    }
}(jQuery), function (t, e, i) {
    "use strict";
    var o = function (e, i) {
        this.widget = "", this.$element = t(e), this.defaultTime = i.defaultTime, this.disableFocus = i.disableFocus, this.disableMousewheel = i.disableMousewheel, this.isOpen = i.isOpen, this.minuteStep = i.minuteStep, this.modalBackdrop = i.modalBackdrop, this.orientation = i.orientation, this.secondStep = i.secondStep, this.snapToStep = i.snapToStep, this.showInputs = i.showInputs, this.showMeridian = i.showMeridian, this.showSeconds = i.showSeconds, this.template = i.template, this.appendWidgetTo = i.appendWidgetTo, this.showWidgetOnAddonClick = i.showWidgetOnAddonClick, this.icons = i.icons, this.maxHours = i.maxHours, this.explicitMode = i.explicitMode, this.handleDocumentClick = function (t) {
            var e = t.data.scope;
            e.$element.parent().find(t.target).length || e.$widget.is(t.target) || e.$widget.find(t.target).length || e.hideWidget()
        }, this._init()
    };
    o.prototype = {
        constructor: o, _init: function () {
            var e = this;
            this.showWidgetOnAddonClick && this.$element.parent().hasClass("input-group") && this.$element.parent().hasClass("bootstrap-timepicker") ? (this.$element.parent(".input-group.bootstrap-timepicker").find(".input-group-addon").on({"click.timepicker": t.proxy(this.showWidget, this)}), this.$element.on({
                "focus.timepicker": t.proxy(this.highlightUnit, this),
                "click.timepicker": t.proxy(this.highlightUnit, this),
                "keydown.timepicker": t.proxy(this.elementKeydown, this),
                "blur.timepicker": t.proxy(this.blurElement, this),
                "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(this.mousewheel, this)
            })) : this.template ? this.$element.on({
                "focus.timepicker": t.proxy(this.showWidget, this),
                "click.timepicker": t.proxy(this.showWidget, this),
                "blur.timepicker": t.proxy(this.blurElement, this),
                "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(this.mousewheel, this)
            }) : this.$element.on({
                "focus.timepicker": t.proxy(this.highlightUnit, this),
                "click.timepicker": t.proxy(this.highlightUnit, this),
                "keydown.timepicker": t.proxy(this.elementKeydown, this),
                "blur.timepicker": t.proxy(this.blurElement, this),
                "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(this.mousewheel, this)
            }), !1 !== this.template ? this.$widget = t(this.getTemplate()).on("click", t.proxy(this.widgetClick, this)) : this.$widget = !1, this.showInputs && !1 !== this.$widget && this.$widget.find("input").each(function () {
                t(this).on({
                    "click.timepicker": function () {
                        t(this).select()
                    }, "keydown.timepicker": t.proxy(e.widgetKeydown, e), "keyup.timepicker": t.proxy(e.widgetKeyup, e)
                })
            }), this.setDefaultTime(this.defaultTime)
        }, blurElement: function () {
            this.highlightedUnit = null, this.updateFromElementVal()
        }, clear: function () {
            this.hour = "", this.minute = "", this.second = "", this.meridian = "", this.$element.val("")
        }, decrementHour: function () {
            if (this.showMeridian) if (1 === this.hour) this.hour = 12; else {
                if (12 === this.hour) return this.hour--, this.toggleMeridian();
                if (0 === this.hour) return this.hour = 11, this.toggleMeridian();
                this.hour--
            } else this.hour <= 0 ? this.hour = this.maxHours - 1 : this.hour--
        }, decrementMinute: function (t) {
            var e;
            0 > (e = t ? this.minute - t : this.minute - this.minuteStep) ? (this.decrementHour(), this.minute = e + 60) : this.minute = e
        }, decrementSecond: function () {
            var t = this.second - this.secondStep;
            0 > t ? (this.decrementMinute(!0), this.second = t + 60) : this.second = t
        }, elementKeydown: function (t) {
            switch (t.which) {
                case 9:
                    if (t.shiftKey) {
                        if ("hour" === this.highlightedUnit) {
                            this.hideWidget();
                            break
                        }
                        this.highlightPrevUnit()
                    } else {
                        if (this.showMeridian && "meridian" === this.highlightedUnit || this.showSeconds && "second" === this.highlightedUnit || !this.showMeridian && !this.showSeconds && "minute" === this.highlightedUnit) {
                            this.hideWidget();
                            break
                        }
                        this.highlightNextUnit()
                    }
                    t.preventDefault(), this.updateFromElementVal();
                    break;
                case 27:
                    this.updateFromElementVal();
                    break;
                case 37:
                    t.preventDefault(), this.highlightPrevUnit(), this.updateFromElementVal();
                    break;
                case 38:
                    switch (t.preventDefault(), this.highlightedUnit) {
                        case"hour":
                            this.incrementHour(), this.highlightHour();
                            break;
                        case"minute":
                            this.incrementMinute(), this.highlightMinute();
                            break;
                        case"second":
                            this.incrementSecond(), this.highlightSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian(), this.highlightMeridian()
                    }
                    this.update();
                    break;
                case 39:
                    t.preventDefault(), this.highlightNextUnit(), this.updateFromElementVal();
                    break;
                case 40:
                    switch (t.preventDefault(), this.highlightedUnit) {
                        case"hour":
                            this.decrementHour(), this.highlightHour();
                            break;
                        case"minute":
                            this.decrementMinute(), this.highlightMinute();
                            break;
                        case"second":
                            this.decrementSecond(), this.highlightSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian(), this.highlightMeridian()
                    }
                    this.update()
            }
        }, getCursorPosition: function () {
            var t = this.$element.get(0);
            if ("selectionStart" in t) return t.selectionStart;
            if (i.selection) {
                t.focus();
                var e = i.selection.createRange(), o = i.selection.createRange().text.length;
                return e.moveStart("character", -t.value.length), e.text.length - o
            }
        }, getTemplate: function () {
            var t, e, i, o, n, s;
            switch (this.showInputs ? (e = '<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>', i = '<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>', o = '<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>', n = '<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>') : (e = '<span class="bootstrap-timepicker-hour"></span>', i = '<span class="bootstrap-timepicker-minute"></span>', o = '<span class="bootstrap-timepicker-second"></span>', n = '<span class="bootstrap-timepicker-meridian"></span>'), s = '<table><tr><td><a href="#" data-action="incrementHour"><span class="' + this.icons.up + '"></span></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><span class="' + this.icons.up + '"></span></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><span class="' + this.icons.up + '"></span></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><span class="' + this.icons.up + '"></span></a></td>' : "") + "</tr><tr><td>" + e + '</td> <td class="separator">:</td><td>' + i + "</td> " + (this.showSeconds ? '<td class="separator">:</td><td>' + o + "</td>" : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td>' + n + "</td>" : "") + '</tr><tr><td><a href="#" data-action="decrementHour"><span class="' + this.icons.down + '"></span></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><span class="' + this.icons.down + '"></span></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><span class="' + this.icons.down + '"></span></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><span class="' + this.icons.down + '"></span></a></td>' : "") + "</tr></table>", this.template) {
                case"modal":
                    t = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' + (this.modalBackdrop ? "true" : "false") + '"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">&times;</a><h3>Pick a Time</h3></div><div class="modal-content">' + s + '</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';
                    break;
                case"dropdown":
                    t = '<div class="bootstrap-timepicker-widget dropdown-menu">' + s + "</div>"
            }
            return t
        }, getTime: function () {
            return "" === this.hour ? "" : this.hour + ":" + (1 === this.minute.toString().length ? "0" + this.minute : this.minute) + (this.showSeconds ? ":" + (1 === this.second.toString().length ? "0" + this.second : this.second) : "") + (this.showMeridian ? " " + this.meridian : "")
        }, hideWidget: function () {
            !1 !== this.isOpen && (this.$element.trigger({
                type: "hide.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            }), "modal" === this.template && this.$widget.modal ? this.$widget.modal("hide") : this.$widget.removeClass("open"), t(i).off("mousedown.timepicker, touchend.timepicker", this.handleDocumentClick), this.isOpen = !1, this.$widget.detach())
        }, highlightUnit: function () {
            this.position = this.getCursorPosition(), this.position >= 0 && this.position <= 2 ? this.highlightHour() : this.position >= 3 && this.position <= 5 ? this.highlightMinute() : this.position >= 6 && this.position <= 8 ? this.showSeconds ? this.highlightSecond() : this.highlightMeridian() : this.position >= 9 && this.position <= 11 && this.highlightMeridian()
        }, highlightNextUnit: function () {
            switch (this.highlightedUnit) {
                case"hour":
                    this.highlightMinute();
                    break;
                case"minute":
                    this.showSeconds ? this.highlightSecond() : this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                    break;
                case"second":
                    this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                    break;
                case"meridian":
                    this.highlightHour()
            }
        }, highlightPrevUnit: function () {
            switch (this.highlightedUnit) {
                case"hour":
                    this.showMeridian ? this.highlightMeridian() : this.showSeconds ? this.highlightSecond() : this.highlightMinute();
                    break;
                case"minute":
                    this.highlightHour();
                    break;
                case"second":
                    this.highlightMinute();
                    break;
                case"meridian":
                    this.showSeconds ? this.highlightSecond() : this.highlightMinute()
            }
        }, highlightHour: function () {
            var t = this.$element.get(0), e = this;
            this.highlightedUnit = "hour", t.setSelectionRange && setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(0, 1) : t.setSelectionRange(0, 2)
            }, 0)
        }, highlightMinute: function () {
            var t = this.$element.get(0), e = this;
            this.highlightedUnit = "minute", t.setSelectionRange && setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(2, 4) : t.setSelectionRange(3, 5)
            }, 0)
        }, highlightSecond: function () {
            var t = this.$element.get(0), e = this;
            this.highlightedUnit = "second", t.setSelectionRange && setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8)
            }, 0)
        }, highlightMeridian: function () {
            var t = this.$element.get(0), e = this;
            this.highlightedUnit = "meridian", t.setSelectionRange && (this.showSeconds ? setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(8, 10) : t.setSelectionRange(9, 11)
            }, 0) : setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8)
            }, 0))
        }, incrementHour: function () {
            if (this.showMeridian) {
                if (11 === this.hour) return this.hour++, this.toggleMeridian();
                12 === this.hour && (this.hour = 0)
            }
            return this.hour === this.maxHours - 1 ? void (this.hour = 0) : void this.hour++
        }, incrementMinute: function (t) {
            var e;
            (e = t ? this.minute + t : this.minute + this.minuteStep - this.minute % this.minuteStep) > 59 ? (this.incrementHour(), this.minute = e - 60) : this.minute = e
        }, incrementSecond: function () {
            var t = this.second + this.secondStep - this.second % this.secondStep;
            t > 59 ? (this.incrementMinute(!0), this.second = t - 60) : this.second = t
        }, mousewheel: function (e) {
            if (!this.disableMousewheel) {
                e.preventDefault(), e.stopPropagation();
                var i = e.originalEvent.wheelDelta || -e.originalEvent.detail, o = null;
                switch ("mousewheel" === e.type ? o = -1 * e.originalEvent.wheelDelta : "DOMMouseScroll" === e.type && (o = 40 * e.originalEvent.detail), o && (e.preventDefault(), t(this).scrollTop(o + t(this).scrollTop())), this.highlightedUnit) {
                    case"minute":
                        i > 0 ? this.incrementMinute() : this.decrementMinute(), this.highlightMinute();
                        break;
                    case"second":
                        i > 0 ? this.incrementSecond() : this.decrementSecond(), this.highlightSecond();
                        break;
                    case"meridian":
                        this.toggleMeridian(), this.highlightMeridian();
                        break;
                    default:
                        i > 0 ? this.incrementHour() : this.decrementHour(), this.highlightHour()
                }
                return !1
            }
        }, changeToNearestStep: function (t, e) {
            return t % e == 0 ? t : Math.round(t % e / e) ? (t + (e - t % e)) % 60 : t - t % e
        }, place: function () {
            if (!this.isInline) {
                var i = this.$widget.outerWidth(), o = this.$widget.outerHeight(), n = t(e).width(), s = t(e).height(),
                    r = t(e).scrollTop(), a = parseInt(this.$element.parents().filter(function () {
                        return "auto" !== t(this).css("z-index")
                    }).first().css("z-index"), 10) + 10,
                    l = this.component ? this.component.parent().offset() : this.$element.offset(),
                    c = this.component ? this.component.outerHeight(!0) : this.$element.outerHeight(!1),
                    h = this.component ? this.component.outerWidth(!0) : this.$element.outerWidth(!1), d = l.left,
                    u = l.top;
                this.$widget.removeClass("timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left"), "auto" !== this.orientation.x ? (this.$widget.addClass("timepicker-orient-" + this.orientation.x), "right" === this.orientation.x && (d -= i - h)) : (this.$widget.addClass("timepicker-orient-left"), l.left < 0 ? d -= l.left - 10 : l.left + i > n && (d = n - i - 10));
                var p, f, m = this.orientation.y;
                "auto" === m && (p = -r + l.top - o, f = r + s - (l.top + c + o), m = Math.max(p, f) === f ? "top" : "bottom"), this.$widget.addClass("timepicker-orient-" + m), "top" === m ? u += c : u -= o + parseInt(this.$widget.css("padding-top"), 10), this.$widget.css({
                    top: u,
                    left: d,
                    zIndex: a
                })
            }
        }, remove: function () {
            t("document").off(".timepicker"), this.$widget && this.$widget.remove(), delete this.$element.data().timepicker
        }, setDefaultTime: function (t) {
            if (this.$element.val()) this.updateFromElementVal(); else if ("current" === t) {
                var e = new Date, i = e.getHours(), o = e.getMinutes(), n = e.getSeconds(), s = "AM";
                0 !== n && 60 == (n = Math.ceil(e.getSeconds() / this.secondStep) * this.secondStep) && (o += 1, n = 0), 0 !== o && 60 == (o = Math.ceil(e.getMinutes() / this.minuteStep) * this.minuteStep) && (i += 1, o = 0), this.showMeridian && (0 === i ? i = 12 : i >= 12 ? (i > 12 && (i -= 12), s = "PM") : s = "AM"), this.hour = i, this.minute = o, this.second = n, this.meridian = s, this.update()
            } else !1 === t ? (this.hour = 0, this.minute = 0, this.second = 0, this.meridian = "AM") : this.setTime(t)
        }, setTime: function (t, e) {
            if (t) {
                var i, o, n, s, r, a;
                if ("object" == typeof t && t.getMonth) n = t.getHours(), s = t.getMinutes(), r = t.getSeconds(), this.showMeridian && (a = "AM", n > 12 && (a = "PM", n %= 12), 12 === n && (a = "PM")); else {
                    if ((i = (/a/i.test(t) ? 1 : 0) + (/p/i.test(t) ? 2 : 0)) > 2) return void this.clear();
                    if (n = (o = t.replace(/[^0-9\:]/g, "").split(":"))[0] ? o[0].toString() : o.toString(), this.explicitMode && n.length > 2 && n.length % 2 != 0) return void this.clear();
                    s = o[1] ? o[1].toString() : "", r = o[2] ? o[2].toString() : "", n.length > 4 && (r = n.slice(-2), n = n.slice(0, -2)), n.length > 2 && (s = n.slice(-2), n = n.slice(0, -2)), s.length > 2 && (r = s.slice(-2), s = s.slice(0, -2)), n = parseInt(n, 10), s = parseInt(s, 10), r = parseInt(r, 10), isNaN(n) && (n = 0), isNaN(s) && (s = 0), isNaN(r) && (r = 0), r > 59 && (r = 59), s > 59 && (s = 59), n >= this.maxHours && (n = this.maxHours - 1), this.showMeridian ? (n > 12 && (i = 2, n -= 12), i || (i = 1), 0 === n && (n = 12), a = 1 === i ? "AM" : "PM") : 12 > n && 2 === i ? n += 12 : n >= this.maxHours ? n = this.maxHours - 1 : (0 > n || 12 === n && 1 === i) && (n = 0)
                }
                this.hour = n, this.snapToStep ? (this.minute = this.changeToNearestStep(s, this.minuteStep), this.second = this.changeToNearestStep(r, this.secondStep)) : (this.minute = s, this.second = r), this.meridian = a, this.update(e)
            } else this.clear()
        }, showWidget: function () {
            this.isOpen || this.$element.is(":disabled") || (this.$widget.appendTo(this.appendWidgetTo), t(i).on("mousedown.timepicker, touchend.timepicker", {scope: this}, this.handleDocumentClick), this.$element.trigger({
                type: "show.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            }), this.place(), this.disableFocus && this.$element.blur(), "" === this.hour && (this.defaultTime ? this.setDefaultTime(this.defaultTime) : this.setTime("0:0:0")), "modal" === this.template && this.$widget.modal ? this.$widget.modal("show").on("hidden", t.proxy(this.hideWidget, this)) : !1 === this.isOpen && this.$widget.addClass("open"), this.isOpen = !0)
        }, toggleMeridian: function () {
            this.meridian = "AM" === this.meridian ? "PM" : "AM"
        }, update: function (t) {
            this.updateElement(), t || this.updateWidget(), this.$element.trigger({
                type: "changeTime.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            })
        }, updateElement: function () {
            this.$element.val(this.getTime()).change()
        }, updateFromElementVal: function () {
            this.setTime(this.$element.val())
        }, updateWidget: function () {
            if (!1 !== this.$widget) {
                var t = this.hour, e = 1 === this.minute.toString().length ? "0" + this.minute : this.minute,
                    i = 1 === this.second.toString().length ? "0" + this.second : this.second;
                this.showInputs ? (this.$widget.find("input.bootstrap-timepicker-hour").val(t), this.$widget.find("input.bootstrap-timepicker-minute").val(e), this.showSeconds && this.$widget.find("input.bootstrap-timepicker-second").val(i), this.showMeridian && this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)) : (this.$widget.find("span.bootstrap-timepicker-hour").text(t), this.$widget.find("span.bootstrap-timepicker-minute").text(e), this.showSeconds && this.$widget.find("span.bootstrap-timepicker-second").text(i), this.showMeridian && this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))
            }
        }, updateFromWidgetInputs: function () {
            if (!1 !== this.$widget) {
                var t = this.$widget.find("input.bootstrap-timepicker-hour").val() + ":" + this.$widget.find("input.bootstrap-timepicker-minute").val() + (this.showSeconds ? ":" + this.$widget.find("input.bootstrap-timepicker-second").val() : "") + (this.showMeridian ? this.$widget.find("input.bootstrap-timepicker-meridian").val() : "");
                this.setTime(t, !0)
            }
        }, widgetClick: function (e) {
            e.stopPropagation(), e.preventDefault();
            var i = t(e.target), o = i.closest("a").data("action");
            o && this[o](), this.update(), i.is("input") && i.get(0).setSelectionRange(0, 2)
        }, widgetKeydown: function (e) {
            var i = t(e.target), o = i.attr("class").replace("bootstrap-timepicker-", "");
            switch (e.which) {
                case 9:
                    if (e.shiftKey) {
                        if ("hour" === o) return this.hideWidget()
                    } else if (this.showMeridian && "meridian" === o || this.showSeconds && "second" === o || !this.showMeridian && !this.showSeconds && "minute" === o) return this.hideWidget();
                    break;
                case 27:
                    this.hideWidget();
                    break;
                case 38:
                    switch (e.preventDefault(), o) {
                        case"hour":
                            this.incrementHour();
                            break;
                        case"minute":
                            this.incrementMinute();
                            break;
                        case"second":
                            this.incrementSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian()
                    }
                    this.setTime(this.getTime()), i.get(0).setSelectionRange(0, 2);
                    break;
                case 40:
                    switch (e.preventDefault(), o) {
                        case"hour":
                            this.decrementHour();
                            break;
                        case"minute":
                            this.decrementMinute();
                            break;
                        case"second":
                            this.decrementSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian()
                    }
                    this.setTime(this.getTime()), i.get(0).setSelectionRange(0, 2)
            }
        }, widgetKeyup: function (t) {
            (65 === t.which || 77 === t.which || 80 === t.which || 46 === t.which || 8 === t.which || t.which >= 48 && t.which <= 57 || t.which >= 96 && t.which <= 105) && this.updateFromWidgetInputs()
        }
    }, t.fn.timepicker = function (e) {
        var i = Array.apply(null, arguments);
        return i.shift(), this.each(function () {
            var n = t(this), s = n.data("timepicker"), r = "object" == typeof e && e;
            s || n.data("timepicker", s = new o(this, t.extend({}, t.fn.timepicker.defaults, r, t(this).data()))), "string" == typeof e && s[e].apply(s, i)
        })
    }, t.fn.timepicker.defaults = {
        defaultTime: "current",
        disableFocus: !1,
        disableMousewheel: !1,
        isOpen: !1,
        minuteStep: 15,
        modalBackdrop: !1,
        orientation: {x: "auto", y: "auto"},
        secondStep: 15,
        snapToStep: !1,
        showSeconds: !1,
        showInputs: !0,
        showMeridian: !0,
        template: "dropdown",
        appendWidgetTo: "body",
        showWidgetOnAddonClick: !0,
        icons: {up: "glyphicon glyphicon-chevron-up", down: "glyphicon glyphicon-chevron-down"},
        maxHours: 24,
        explicitMode: !1
    }, t.fn.timepicker.Constructor = o, t(i).on("focus.timepicker.data-api click.timepicker.data-api", '[data-provide="timepicker"]', function (e) {
        var i = t(this);
        i.data("timepicker") || (e.preventDefault(), i.timepicker())
    })
}(jQuery, window, document);
var $jscomp = {
    scope: {}, findInternal: function (t, e, i) {
        t instanceof String && (t = String(t));
        for (var o = t.length, n = 0; n < o; n++) {
            var s = t[n];
            if (e.call(i, s, n, t)) return {i: n, v: s}
        }
        return {i: -1, v: void 0}
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, i) {
    if (i.get || i.set) throw new TypeError("ES3 does not support getters and setters.");
    t != Array.prototype && t != Object.prototype && (t[e] = i.value)
}, $jscomp.getGlobal = function (t) {
    return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function (t, e, i, o) {
    if (e) {
        for (i = $jscomp.global, t = t.split("."), o = 0; o < t.length - 1; o++) {
            var n = t[o];
            n in i || (i[n] = {}), i = i[n]
        }
        (e = e(o = i[t = t[t.length - 1]])) != o && null != e && $jscomp.defineProperty(i, t, {
            configurable: !0,
            writable: !0,
            value: e
        })
    }
}, $jscomp.polyfill("Array.prototype.find", function (t) {
    return t || function (t, e) {
        return $jscomp.findInternal(this, t, e).v
    }
}, "es6-impl", "es3"), function (t, e, i) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(e || i)
}(function (t) {
    var e = function (e, i, o) {
        var n = {
            invalid: [], getCaret: function () {
                try {
                    var t, i = 0, o = e.get(0), s = document.selection, r = o.selectionStart;
                    return s && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((t = s.createRange()).moveStart("character", -n.val().length), i = t.text.length) : (r || "0" === r) && (i = r), i
                } catch (t) {
                }
            }, setCaret: function (t) {
                try {
                    if (e.is(":focus")) {
                        var i, o = e.get(0);
                        o.setSelectionRange ? o.setSelectionRange(t, t) : ((i = o.createTextRange()).collapse(!0), i.moveEnd("character", t), i.moveStart("character", t), i.select())
                    }
                } catch (t) {
                }
            }, events: function () {
                e.on("keydown.mask", function (t) {
                    e.data("mask-keycode", t.keyCode || t.which), e.data("mask-previus-value", e.val()), e.data("mask-previus-caret-pos", n.getCaret()), n.maskDigitPosMapOld = n.maskDigitPosMap
                }).on(t.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", n.behaviour).on("paste.mask drop.mask", function () {
                    setTimeout(function () {
                        e.keydown().keyup()
                    }, 100)
                }).on("change.mask", function () {
                    e.data("changed", !0)
                }).on("blur.mask", function () {
                    a === n.val() || e.data("changed") || e.trigger("change"), e.data("changed", !1)
                }).on("blur.mask", function () {
                    a = n.val()
                }).on("focus.mask", function (e) {
                    !0 === o.selectOnFocus && t(e.target).select()
                }).on("focusout.mask", function () {
                    o.clearIfNotMatch && !s.test(n.val()) && n.val("")
                })
            }, getRegexMask: function () {
                for (var t, e, o, n, s = [], a = 0; a < i.length; a++) (t = r.translation[i.charAt(a)]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), o = t.optional, (t = t.recursive) ? (s.push(i.charAt(a)), n = {
                    digit: i.charAt(a),
                    pattern: e
                }) : s.push(o || t ? e + "?" : e)) : s.push(i.charAt(a).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                return s = s.join(""), n && (s = s.replace(new RegExp("(" + n.digit + "(.*" + n.digit + ")?)"), "($1)?").replace(new RegExp(n.digit, "g"), n.pattern)), new RegExp(s)
            }, destroyEvents: function () {
                e.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
            }, val: function (t) {
                var i = e.is("input") ? "val" : "text";
                return 0 < arguments.length ? (e[i]() !== t && e[i](t), i = e) : i = e[i](), i
            }, calculateCaretPosition: function () {
                var t = e.data("mask-previus-value") || "", i = n.getMasked(), o = n.getCaret();
                if (t !== i) {
                    var s, r = e.data("mask-previus-caret-pos") || 0, a = (i = i.length, t.length), l = t = 0, c = 0,
                        h = 0;
                    for (s = o; s < i && n.maskDigitPosMap[s]; s++) l++;
                    for (s = o - 1; 0 <= s && n.maskDigitPosMap[s]; s--) t++;
                    for (s = o - 1; 0 <= s; s--) n.maskDigitPosMap[s] && c++;
                    for (s = r - 1; 0 <= s; s--) n.maskDigitPosMapOld[s] && h++;
                    o > a ? o = 10 * i : r >= o && r !== a ? n.maskDigitPosMapOld[o] || (r = o, o = o - (h - c) - t, n.maskDigitPosMap[o] && (o = r)) : o > r && (o = o + (c - h) + l)
                }
                return o
            }, behaviour: function (i) {
                i = i || window.event, n.invalid = [];
                var o = e.data("mask-keycode");
                if (-1 === t.inArray(o, r.byPassKeys)) {
                    o = n.getMasked();
                    var s = n.getCaret();
                    return setTimeout(function () {
                        n.setCaret(n.calculateCaretPosition())
                    }, t.jMaskGlobals.keyStrokeCompensation), n.val(o), n.setCaret(s), n.callbacks(i)
                }
            }, getMasked: function (t, e) {
                var s, a, l, c = [], h = void 0 === e ? n.val() : e + "", d = 0, u = i.length, p = 0, f = h.length,
                    m = 1, g = "push", v = -1, y = 0, w = [];
                for (o.reverse ? (g = "unshift", m = -1, s = 0, d = u - 1, p = f - 1, a = function () {
                    return -1 < d && -1 < p
                }) : (s = u - 1, a = function () {
                    return d < u && p < f
                }); a();) {
                    var b = i.charAt(d), x = h.charAt(p), k = r.translation[b];
                    k ? (x.match(k.pattern) ? (c[g](x), k.recursive && (-1 === v ? v = d : d === s && d !== v && (d = v - m), s === v && (d -= m)), d += m) : x === l ? (y--, l = void 0) : k.optional ? (d += m, p -= m) : k.fallback ? (c[g](k.fallback), d += m, p -= m) : n.invalid.push({
                        p: p,
                        v: x,
                        e: k.pattern
                    }), p += m) : (t || c[g](b), x === b ? (w.push(p), p += m) : (l = b, w.push(p + y), y++), d += m)
                }
                return h = i.charAt(s), u !== f + 1 || r.translation[h] || c.push(h), c = c.join(""), n.mapMaskdigitPositions(c, w, f), c
            }, mapMaskdigitPositions: function (t, e, i) {
                for (t = o.reverse ? t.length - i : 0, n.maskDigitPosMap = {}, i = 0; i < e.length; i++) n.maskDigitPosMap[e[i] + t] = 1
            }, callbacks: function (t) {
                var s = n.val(), r = s !== a, l = [s, t, e, o], c = function (t, e, i) {
                    "function" == typeof o[t] && e && o[t].apply(this, i)
                };
                c("onChange", !0 === r, l), c("onKeyPress", !0 === r, l), c("onComplete", s.length === i.length, l), c("onInvalid", 0 < n.invalid.length, [s, t, e, n.invalid, o])
            }
        };
        e = t(e);
        var s, r = this, a = n.val();
        i = "function" == typeof i ? i(n.val(), void 0, e, o) : i, r.mask = i, r.options = o, r.remove = function () {
            var t = n.getCaret();
            return r.options.placeholder && e.removeAttr("placeholder"), e.data("mask-maxlength") && e.removeAttr("maxlength"), n.destroyEvents(), n.val(r.getCleanVal()), n.setCaret(t), e
        }, r.getCleanVal = function () {
            return n.getMasked(!0)
        }, r.getMaskedVal = function (t) {
            return n.getMasked(!1, t)
        }, r.init = function (a) {
            if (a = a || !1, o = o || {}, r.clearIfNotMatch = t.jMaskGlobals.clearIfNotMatch, r.byPassKeys = t.jMaskGlobals.byPassKeys, r.translation = t.extend({}, t.jMaskGlobals.translation, o.translation), r = t.extend(!0, {}, r, o), s = n.getRegexMask(), a) n.events(), n.val(n.getMasked()); else {
                o.placeholder && e.attr("placeholder", o.placeholder), e.data("mask") && e.attr("autocomplete", "off"), a = 0;
                for (var l = !0; a < i.length; a++) {
                    var c = r.translation[i.charAt(a)];
                    if (c && c.recursive) {
                        l = !1;
                        break
                    }
                }
                l && e.attr("maxlength", i.length).data("mask-maxlength", !0), n.destroyEvents(), n.events(), a = n.getCaret(), n.val(n.getMasked()), n.setCaret(a)
            }
        }, r.init(!e.is("input"))
    };
    t.maskWatchers = {};
    var i = function () {
        var i = t(this), n = {}, s = i.attr("data-mask");
        if (i.attr("data-mask-reverse") && (n.reverse = !0), i.attr("data-mask-clearifnotmatch") && (n.clearIfNotMatch = !0), "true" === i.attr("data-mask-selectonfocus") && (n.selectOnFocus = !0), o(i, s, n)) return i.data("mask", new e(this, s, n))
    }, o = function (e, i, o) {
        o = o || {};
        var n = t(e).data("mask"), s = JSON.stringify;
        e = t(e).val() || t(e).text();
        try {
            return "function" == typeof i && (i = i(e)), "object" != typeof n || s(n.options) !== s(o) || n.mask !== i
        } catch (t) {
        }
    }, n = function (t) {
        var e, i = document.createElement("div");
        return (e = (t = "on" + t) in i) || (i.setAttribute(t, "return;"), e = "function" == typeof i[t]), e
    };
    t.fn.mask = function (i, n) {
        n = n || {};
        var s = this.selector, r = (a = t.jMaskGlobals).watchInterval, a = n.watchInputs || a.watchInputs,
            l = function () {
                if (o(this, i, n)) return t(this).data("mask", new e(this, i, n))
            };
        return t(this).each(l), s && "" !== s && a && (clearInterval(t.maskWatchers[s]), t.maskWatchers[s] = setInterval(function () {
            t(document).find(s).each(l)
        }, r)), this
    }, t.fn.masked = function (t) {
        return this.data("mask").getMaskedVal(t)
    }, t.fn.unmask = function () {
        return clearInterval(t.maskWatchers[this.selector]), delete t.maskWatchers[this.selector], this.each(function () {
            var e = t(this).data("mask");
            e && e.remove().removeData("mask")
        })
    }, t.fn.cleanVal = function () {
        return this.data("mask").getCleanVal()
    }, t.applyDataMask = function (e) {
        ((e = e || t.jMaskGlobals.maskElements) instanceof t ? e : t(e)).filter(t.jMaskGlobals.dataMaskAttr).each(i)
    }, n = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        keyStrokeCompensation: 10,
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && n("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {pattern: /\d/},
            9: {pattern: /\d/, optional: !0},
            "#": {pattern: /\d/, recursive: !0},
            A: {pattern: /[a-zA-Z0-9]/},
            S: {pattern: /[a-zA-Z]/}
        }
    }, t.jMaskGlobals = t.jMaskGlobals || {}, (n = t.jMaskGlobals = t.extend(!0, {}, n, t.jMaskGlobals)).dataMask && t.applyDataMask(), setInterval(function () {
        t.jMaskGlobals.watchDataMask && t.applyDataMask()
    }, n.watchInterval)
}, window.jQuery, window.Zepto), $(document).ready(function () {
    $("input.ckBox:checkbox:not([safari])").checkbox({empty: pageJson.IMG_URL + "checkbox/empty.png"}), $("input.checkbox:checkbox").checkbox({
        cls: "jquery-safari-checkbox",
        empty: pageJson.IMG_URL + "checkbox/empty.png"
    }), $("input.rdo:radio").checkbox({empty: pageJson.IMG_URL + "checkbox/empty.png"})
}), "function" != typeof Object.create && (Object.create = function (t) {
    function e() {
    }

    return e.prototype = t, new e
}), function (t, e, i) {
    var o = {
        init: function (e, i) {
            this.$elem = t(i), this.options = t.extend({}, t.fn.owlCarousel.options, this.$elem.data(), e), this.userOptions = e, this.loadContent()
        }, loadContent: function () {
            var e, i = this;
            "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? (e = i.options.jsonPath, t.getJSON(e, function (t) {
                var e, o = "";
                if ("function" == typeof i.options.jsonSuccess) i.options.jsonSuccess.apply(this, [t]); else {
                    for (e in t.owl) t.owl.hasOwnProperty(e) && (o += t.owl[e].item);
                    i.$elem.html(o)
                }
                i.logIn()
            })) : i.logIn()
        }, logIn: function () {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style")), this.$elem.data("owl-originalClasses", this.$elem.attr("class")), this.$elem.css({opacity: 0}), this.orignalItems = this.options.items, this.checkBrowser(), this.wrapperWidth = 0, this.checkVisible = null, this.setVars()
        }, setVars: function () {
            if (0 === this.$elem.children().length) return !1;
            this.baseClass(), this.eventTypes(), this.$userItems = this.$elem.children(), this.itemsAmount = this.$userItems.length, this.wrapItems(), this.$owlItems = this.$elem.find(".owl-item"), this.$owlWrapper = this.$elem.find(".owl-wrapper"), this.playDirection = "next", this.prevItem = 0, this.prevArr = [0], this.currentItem = 0, this.customEvents(), this.onStartup()
        }, onStartup: function () {
            this.updateItems(), this.calculateAll(), this.buildControls(), this.updateControls(), this.response(), this.moveEvents(), this.stopOnHover(), this.owlStatus(), !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle), !0 === this.options.autoPlay && (this.options.autoPlay = 5e3), this.play(), this.$elem.find(".owl-wrapper").css("display", "block"), this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(), this.onstartup = !1, this.eachMoveUpdate(), "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        }, eachMoveUpdate: function () {
            !0 === this.options.lazyLoad && this.lazyLoad(), !0 === this.options.autoHeight && this.autoHeight(), this.onVisibleItems(), "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        }, updateVars: function () {
            "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]), this.watchVisibility(), this.updateItems(), this.calculateAll(), this.updatePosition(), this.updateControls(), this.eachMoveUpdate(), "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        }, reload: function () {
            var t = this;
            e.setTimeout(function () {
                t.updateVars()
            }, 0)
        }, watchVisibility: function () {
            var t = this;
            if (!1 !== t.$elem.is(":visible")) return !1;
            t.$elem.css({opacity: 0}), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), t.checkVisible = e.setInterval(function () {
                t.$elem.is(":visible") && (t.reload(), t.$elem.animate({opacity: 1}, 200), e.clearInterval(t.checkVisible))
            }, 500)
        }, wrapItems: function () {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"), this.$elem.css("display", "block")
        }, baseClass: function () {
            var t = this.$elem.hasClass(this.options.baseClass), e = this.$elem.hasClass(this.options.theme);
            t || this.$elem.addClass(this.options.baseClass), e || this.$elem.addClass(this.options.theme)
        }, updateItems: function () {
            var e, i;
            if (!1 === this.options.responsive) return !1;
            if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            if ((e = t(this.options.responsiveBaseWidth).width()) > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom) for (this.options.itemsCustom.sort(function (t, e) {
                return t[0] - e[0]
            }), i = 0; i < this.options.itemsCustom.length; i += 1) this.options.itemsCustom[i][0] <= e && (this.options.items = this.options.itemsCustom[i][1]); else e <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), e <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), e <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), e <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), e <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        }, response: function () {
            var i, o, n = this;
            if (!0 !== n.options.responsive) return !1;
            o = t(e).width(), n.resizer = function () {
                t(e).width() !== o && (!1 !== n.options.autoPlay && e.clearInterval(n.autoPlayInterval), e.clearTimeout(i), i = e.setTimeout(function () {
                    o = t(e).width(), n.updateVars()
                }, n.options.responsiveRefreshRate))
            }, t(e).resize(n.resizer)
        }, updatePosition: function () {
            this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp()
        }, appendItemsSizes: function () {
            var e = this, i = 0, o = e.itemsAmount - e.options.items;
            e.$owlItems.each(function (n) {
                var s = t(this);
                s.css({width: e.itemWidth}).data("owl-item", Number(n)), 0 != n % e.options.items && n !== o || n > o || (i += 1), s.data("owl-roundPages", i)
            })
        }, appendWrapperSizes: function () {
            this.$owlWrapper.css({width: this.$owlItems.length * this.itemWidth * 2, left: 0}), this.appendItemsSizes()
        }, calculateAll: function () {
            this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max()
        }, calculateWidth: function () {
            this.itemWidth = Math.round(this.$elem.width() / this.options.items)
        }, max: function () {
            var t = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            return this.options.items > this.itemsAmount ? this.maximumPixels = t = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = t), t
        }, min: function () {
            return 0
        }, loops: function () {
            var e, i, o = 0, n = 0;
            for (this.positionsInArray = [0], this.pagesInArray = [], e = 0; e < this.itemsAmount; e += 1) n += this.itemWidth, this.positionsInArray.push(-n), !0 === this.options.scrollPerPage && (i = t(this.$owlItems[e]), i = i.data("owl-roundPages"), i !== o && (this.pagesInArray[o] = this.positionsInArray[e], o = i))
        }, buildControls: function () {
            !0 !== this.options.navigation && !0 !== this.options.pagination || (this.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)), !0 === this.options.pagination && this.buildPagination(), !0 === this.options.navigation && this.buildButtons()
        }, buildButtons: function () {
            var e = this, i = t('<div class="owl-buttons"/>');
            e.owlControls.append(i), e.buttonPrev = t("<div/>", {
                class: "owl-prev",
                html: e.options.navigationText[0] || ""
            }), e.buttonNext = t("<div/>", {
                class: "owl-next",
                html: e.options.navigationText[1] || ""
            }), i.append(e.buttonPrev).append(e.buttonNext), i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (t) {
                t.preventDefault()
            }), i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (i) {
                i.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
            })
        }, buildPagination: function () {
            var e = this;
            e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (i) {
                i.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
            })
        }, updatePagination: function () {
            var e, i, o, n, s, r;
            if (!1 === this.options.pagination) return !1;
            for (this.paginationWrapper.html(""), e = 0, i = this.itemsAmount - this.itemsAmount % this.options.items, n = 0; n < this.itemsAmount; n += 1) 0 == n % this.options.items && (e += 1, i === n && (o = this.itemsAmount - this.options.items), s = t("<div/>", {class: "owl-page"}), r = t("<span></span>", {
                text: !0 === this.options.paginationNumbers ? e : "",
                class: !0 === this.options.paginationNumbers ? "owl-numbers" : ""
            }), s.append(r), s.data("owl-page", i === n ? o : n), s.data("owl-roundPages", e), this.paginationWrapper.append(s));
            this.checkPagination()
        }, checkPagination: function () {
            var e = this;
            if (!1 === e.options.pagination) return !1;
            e.paginationWrapper.find(".owl-page").each(function () {
                t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
            })
        }, checkNavigation: function () {
            if (!1 === this.options.navigation) return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        }, updateControls: function () {
            this.updatePagination(), this.checkNavigation(), this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        }, destroyControls: function () {
            this.owlControls && this.owlControls.remove()
        }, next: function (t) {
            if (this.isTransition) return !1;
            if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
                if (!0 !== this.options.rewindNav) return this.currentItem = this.maximumItem, !1;
                this.currentItem = 0, t = "rewind"
            }
            this.goTo(this.currentItem, t)
        }, prev: function (t) {
            if (this.isTransition) return !1;
            if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem) {
                if (!0 !== this.options.rewindNav) return this.currentItem = 0, !1;
                this.currentItem = this.maximumItem, t = "rewind"
            }
            this.goTo(this.currentItem, t)
        }, goTo: function (t, i, o) {
            var n = this;
            return !n.isTransition && ("function" == typeof n.options.beforeMove && n.options.beforeMove.apply(this, [n.$elem]), t >= n.maximumItem ? t = n.maximumItem : 0 >= t && (t = 0), n.currentItem = n.owl.currentItem = t, !1 !== n.options.transitionStyle && "drag" !== o && 1 === n.options.items && !0 === n.browser.support3d ? (n.swapSpeed(0), !0 === n.browser.support3d ? n.transition3d(n.positionsInArray[t]) : n.css2slide(n.positionsInArray[t], 1), n.afterGo(), n.singleItemTransition(), !1) : (t = n.positionsInArray[t], !0 === n.browser.support3d ? (n.isCss3Finish = !1, !0 === i ? (n.swapSpeed("paginationSpeed"), e.setTimeout(function () {
                n.isCss3Finish = !0
            }, n.options.paginationSpeed)) : "rewind" === i ? (n.swapSpeed(n.options.rewindSpeed), e.setTimeout(function () {
                n.isCss3Finish = !0
            }, n.options.rewindSpeed)) : (n.swapSpeed("slideSpeed"), e.setTimeout(function () {
                n.isCss3Finish = !0
            }, n.options.slideSpeed)), n.transition3d(t)) : !0 === i ? n.css2slide(t, n.options.paginationSpeed) : "rewind" === i ? n.css2slide(t, n.options.rewindSpeed) : n.css2slide(t, n.options.slideSpeed), void n.afterGo()))
        }, jumpTo: function (t) {
            "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]), t >= this.maximumItem || -1 === t ? t = this.maximumItem : 0 >= t && (t = 0), this.swapSpeed(0), !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[t]) : this.css2slide(this.positionsInArray[t], 1), this.currentItem = this.owl.currentItem = t, this.afterGo()
        }, afterGo: function () {
            this.prevArr.push(this.currentItem), this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2], this.prevArr.shift(0), this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()), "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        }, stop: function () {
            this.apStatus = "stop", e.clearInterval(this.autoPlayInterval)
        }, checkAp: function () {
            "stop" !== this.apStatus && this.play()
        }, play: function () {
            var t = this;
            if (t.apStatus = "play", !1 === t.options.autoPlay) return !1;
            e.clearInterval(t.autoPlayInterval), t.autoPlayInterval = e.setInterval(function () {
                t.next(!0)
            }, t.options.autoPlay)
        }, swapSpeed: function (t) {
            "slideSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof t && this.$owlWrapper.css(this.addCssSpeed(t))
        }, addCssSpeed: function (t) {
            return {
                "-webkit-transition": "all " + t + "ms ease",
                "-moz-transition": "all " + t + "ms ease",
                "-o-transition": "all " + t + "ms ease",
                transition: "all " + t + "ms ease"
            }
        }, removeTransition: function () {
            return {"-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: ""}
        }, doTranslate: function (t) {
            return {
                "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                transform: "translate3d(" + t + "px, 0px,0px)"
            }
        }, transition3d: function (t) {
            this.$owlWrapper.css(this.doTranslate(t))
        }, css2move: function (t) {
            this.$owlWrapper.css({left: t})
        }, css2slide: function (t, e) {
            var i = this;
            i.isCssFinish = !1, i.$owlWrapper.stop(!0, !0).animate({left: t}, {
                duration: e || i.options.slideSpeed,
                complete: function () {
                    i.isCssFinish = !0
                }
            })
        }, checkBrowser: function () {
            var t = i.createElement("div");
            t.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)", t = t.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g), this.browser = {
                support3d: null !== t && 1 === t.length,
                isTouch: "ontouchstart" in e || e.navigator.msMaxTouchPoints
            }
        }, moveEvents: function () {
            !1 === this.options.mouseDrag && !1 === this.options.touchDrag || (this.gestures(), this.disabledEvents())
        }, eventTypes: function () {
            var t = ["s", "e", "x"];
            this.ev_types = {}, !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), this.ev_types.start = t[0], this.ev_types.move = t[1], this.ev_types.end = t[2]
        }, disabledEvents: function () {
            this.$elem.on("dragstart.owl", function (t) {
                t.preventDefault()
            }), this.$elem.on("mousedown.disableTextSelect", function (e) {
                return t(e.target).is("input, textarea, select, option")
            })
        }, gestures: function () {
            function o(t) {
                if (void 0 !== t.touches) return {x: t.touches[0].pageX, y: t.touches[0].pageY};
                if (void 0 === t.touches) {
                    if (void 0 !== t.pageX) return {x: t.pageX, y: t.pageY};
                    if (void 0 === t.pageX) return {x: t.clientX, y: t.clientY}
                }
            }

            function n(e) {
                "on" === e ? (t(i).on(a.ev_types.move, s), t(i).on(a.ev_types.end, r)) : "off" === e && (t(i).off(a.ev_types.move), t(i).off(a.ev_types.end))
            }

            function s(n) {
                n = n.originalEvent || n || e.event, a.newPosX = o(n).x - l.offsetX, a.newPosY = o(n).y - l.offsetY, a.newRelativeX = a.newPosX - l.relativePos, "function" == typeof a.options.startDragging && !0 !== l.dragging && 0 !== a.newRelativeX && (l.dragging = !0, a.options.startDragging.apply(a, [a.$elem])), (8 < a.newRelativeX || -8 > a.newRelativeX) && !0 === a.browser.isTouch && (void 0 !== n.preventDefault ? n.preventDefault() : n.returnValue = !1, l.sliding = !0), (10 < a.newPosY || -10 > a.newPosY) && !1 === l.sliding && t(i).off("touchmove.owl"), a.newPosX = Math.max(Math.min(a.newPosX, a.newRelativeX / 5), a.maximumPixels + a.newRelativeX / 5), !0 === a.browser.support3d ? a.transition3d(a.newPosX) : a.css2move(a.newPosX)
            }

            function r(i) {
                var o;
                (i = i.originalEvent || i || e.event).target = i.target || i.srcElement, l.dragging = !1, !0 !== a.browser.isTouch && a.$owlWrapper.removeClass("grabbing"), a.dragDirection = 0 > a.newRelativeX ? a.owl.dragDirection = "left" : a.owl.dragDirection = "right", 0 !== a.newRelativeX && (o = a.getNewPosition(), a.goTo(o, !1, "drag"), l.targetElement === i.target && !0 !== a.browser.isTouch && (t(i.target).on("click.disable", function (e) {
                    e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
                }), o = (i = t._data(i.target, "events").click).pop(), i.splice(0, 0, o))), n("off")
            }

            var a = this, l = {
                offsetX: 0,
                offsetY: 0,
                baseElWidth: 0,
                relativePos: 0,
                position: null,
                minSwipe: null,
                maxSwipe: null,
                sliding: null,
                dargging: null,
                targetElement: null
            };
            a.isCssFinish = !0, a.$elem.on(a.ev_types.start, ".owl-wrapper", function (i) {
                var s;
                if (3 === (i = i.originalEvent || i || e.event).which) return !1;
                if (!(a.itemsAmount <= a.options.items)) {
                    if (!1 === a.isCssFinish && !a.options.dragBeforeAnimFinish || !1 === a.isCss3Finish && !a.options.dragBeforeAnimFinish) return !1;
                    !1 !== a.options.autoPlay && e.clearInterval(a.autoPlayInterval), !0 === a.browser.isTouch || a.$owlWrapper.hasClass("grabbing") || a.$owlWrapper.addClass("grabbing"), a.newPosX = 0, a.newRelativeX = 0, t(this).css(a.removeTransition()), s = t(this).position(), l.relativePos = s.left, l.offsetX = o(i).x - s.left, l.offsetY = o(i).y - s.top, n("on"), l.sliding = !1, l.targetElement = i.target || i.srcElement
                }
            })
        }, getNewPosition: function () {
            var t = this.closestItem();
            return t > this.maximumItem ? t = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = t = 0), t
        }, closestItem: function () {
            var e = this, i = !0 === e.options.scrollPerPage ? e.pagesInArray : e.positionsInArray, o = e.newPosX,
                n = null;
            return t.each(i, function (s, r) {
                o - e.itemWidth / 20 > i[s + 1] && o - e.itemWidth / 20 < r && "left" === e.moveDirection() ? (n = r, e.currentItem = !0 === e.options.scrollPerPage ? t.inArray(n, e.positionsInArray) : s) : o + e.itemWidth / 20 < r && o + e.itemWidth / 20 > (i[s + 1] || i[s] - e.itemWidth) && "right" === e.moveDirection() && (!0 === e.options.scrollPerPage ? (n = i[s + 1] || i[i.length - 1], e.currentItem = t.inArray(n, e.positionsInArray)) : (n = i[s + 1], e.currentItem = s + 1))
            }), e.currentItem
        }, moveDirection: function () {
            var t;
            return 0 > this.newRelativeX ? (t = "right", this.playDirection = "next") : (t = "left", this.playDirection = "prev"), t
        }, customEvents: function () {
            var t = this;
            t.$elem.on("owl.next", function () {
                t.next()
            }), t.$elem.on("owl.prev", function () {
                t.prev()
            }), t.$elem.on("owl.play", function (e, i) {
                t.options.autoPlay = i, t.play(), t.hoverStatus = "play"
            }), t.$elem.on("owl.stop", function () {
                t.stop(), t.hoverStatus = "stop"
            }), t.$elem.on("owl.goTo", function (e, i) {
                t.goTo(i)
            }), t.$elem.on("owl.jumpTo", function (e, i) {
                t.jumpTo(i)
            })
        }, stopOnHover: function () {
            var t = this;
            !0 === t.options.stopOnHover && !0 !== t.browser.isTouch && !1 !== t.options.autoPlay && (t.$elem.on("mouseover", function () {
                t.stop()
            }), t.$elem.on("mouseout", function () {
                "stop" !== t.hoverStatus && t.play()
            }))
        }, lazyLoad: function () {
            var e, i, o, n;
            if (!1 === this.options.lazyLoad) return !1;
            for (e = 0; e < this.itemsAmount; e += 1) i = t(this.$owlItems[e]), "loaded" !== i.data("owl-loaded") && (o = i.data("owl-item"), n = i.find(".lazyOwl"), "string" != typeof n.data("src") ? i.data("owl-loaded", "loaded") : (void 0 === i.data("owl-loaded") && (n.hide(), i.addClass("loading").data("owl-loaded", "checked")), (!0 !== this.options.lazyFollow || o >= this.currentItem) && o < this.currentItem + this.options.items && n.length && this.lazyPreload(i, n)))
        }, lazyPreload: function (t, i) {
            function o() {
                t.data("owl-loaded", "loaded").removeClass("loading"), i.removeAttr("data-src"), "fade" === s.options.lazyEffect ? i.fadeIn(400) : i.show(), "function" == typeof s.options.afterLazyLoad && s.options.afterLazyLoad.apply(this, [s.$elem])
            }

            var n, s = this, r = 0;
            "DIV" === i.prop("tagName") ? (i.css("background-image", "url(" + i.data("src") + ")"), n = !0) : i[0].src = i.data("src"), function t() {
                r += 1, s.completeImg(i.get(0)) || !0 === n ? o() : 100 >= r ? e.setTimeout(t, 100) : o()
            }()
        }, autoHeight: function () {
            function i() {
                var i = t(n.$owlItems[n.currentItem]).height();
                n.wrapperOuter.css("height", i + "px"), n.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function () {
                    n.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            var o, n = this, s = t(n.$owlItems[n.currentItem]).find("img");
            void 0 !== s.get(0) ? (o = 0, function t() {
                o += 1, n.completeImg(s.get(0)) ? i() : 100 >= o ? e.setTimeout(t, 100) : n.wrapperOuter.css("height", "")
            }()) : i()
        }, completeImg: function (t) {
            return !(!t.complete || void 0 !== t.naturalWidth && 0 === t.naturalWidth)
        }, onVisibleItems: function () {
            var e;
            for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], e = this.currentItem; e < this.currentItem + this.options.items; e += 1) this.visibleItems.push(e), !0 === this.options.addClassActive && t(this.$owlItems[e]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        }, transitionTypes: function (t) {
            this.outClass = "owl-" + t + "-out", this.inClass = "owl-" + t + "-in"
        }, singleItemTransition: function () {
            var t = this, e = t.outClass, i = t.inClass, o = t.$owlItems.eq(t.currentItem),
                n = t.$owlItems.eq(t.prevItem),
                s = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem],
                r = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2;
            t.isTransition = !0, t.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": r + "px",
                "-moz-perspective-origin": r + "px",
                "perspective-origin": r + "px"
            }), n.css({
                position: "relative",
                left: s + "px"
            }).addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                t.endPrev = !0, n.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(n, e)
            }), o.addClass(i).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                t.endCurrent = !0, o.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(o, i)
            })
        }, clearTransStyle: function (t, e) {
            t.css({
                position: "",
                left: ""
            }).removeClass(e), this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        }, owlStatus: function () {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        }, clearEvents: function () {
            this.$elem.off(".owl owl mousedown.disableTextSelect"), t(i).off(".owl owl"), t(e).off("resize", this.resizer)
        }, unWrap: function () {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove()), this.clearEvents(), this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        }, destroy: function () {
            this.stop(), e.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData()
        }, reinit: function (e) {
            e = t.extend({}, this.userOptions, e), this.unWrap(), this.init(e, this.$elem)
        }, addItem: function (t, e) {
            var i;
            return !!t && (0 === this.$elem.children().length ? (this.$elem.append(t), this.setVars(), !1) : (this.unWrap(), (i = void 0 === e || -1 === e ? -1 : e) >= this.$userItems.length || -1 === i ? this.$userItems.eq(-1).after(t) : this.$userItems.eq(i).before(t), void this.setVars()))
        }, removeItem: function (t) {
            if (0 === this.$elem.children().length) return !1;
            t = void 0 === t || -1 === t ? -1 : t, this.unWrap(), this.$userItems.eq(t).remove(), this.setVars()
        }
    };
    t.fn.owlCarousel = function (e) {
        return this.each(function () {
            if (!0 === t(this).data("owl-init")) return !1;
            t(this).data("owl-init", !0);
            var i = Object.create(o);
            i.init(e, this), t.data(this, "owlCarousel", i)
        })
    }, t.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: e,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
}(jQuery, window, document), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e)
    }) : "object" == typeof module && "object" == typeof module.exports ? exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    t.easing.jswing = t.easing.swing;
    var e = Math.pow, i = Math.sqrt, o = Math.sin, n = Math.cos, s = Math.PI, r = 1.70158, a = 1.525 * r, l = 2 * s / 3,
        c = 2 * s / 4.5;

    function h(t) {
        var e = 7.5625, i = 2.75;
        return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
    }

    t.extend(t.easing, {
        def: "easeOutQuad", swing: function (e) {
            return t.easing[t.easing.def](e)
        }, easeInQuad: function (t) {
            return t * t
        }, easeOutQuad: function (t) {
            return 1 - (1 - t) * (1 - t)
        }, easeInOutQuad: function (t) {
            return t < .5 ? 2 * t * t : 1 - e(-2 * t + 2, 2) / 2
        }, easeInCubic: function (t) {
            return t * t * t
        }, easeOutCubic: function (t) {
            return 1 - e(1 - t, 3)
        }, easeInOutCubic: function (t) {
            return t < .5 ? 4 * t * t * t : 1 - e(-2 * t + 2, 3) / 2
        }, easeInQuart: function (t) {
            return t * t * t * t
        }, easeOutQuart: function (t) {
            return 1 - e(1 - t, 4)
        }, easeInOutQuart: function (t) {
            return t < .5 ? 8 * t * t * t * t : 1 - e(-2 * t + 2, 4) / 2
        }, easeInQuint: function (t) {
            return t * t * t * t * t
        }, easeOutQuint: function (t) {
            return 1 - e(1 - t, 5)
        }, easeInOutQuint: function (t) {
            return t < .5 ? 16 * t * t * t * t * t : 1 - e(-2 * t + 2, 5) / 2
        }, easeInSine: function (t) {
            return 1 - n(t * s / 2)
        }, easeOutSine: function (t) {
            return o(t * s / 2)
        }, easeInOutSine: function (t) {
            return -(n(s * t) - 1) / 2
        }, easeInExpo: function (t) {
            return 0 === t ? 0 : e(2, 10 * t - 10)
        }, easeOutExpo: function (t) {
            return 1 === t ? 1 : 1 - e(2, -10 * t)
        }, easeInOutExpo: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? e(2, 20 * t - 10) / 2 : (2 - e(2, -20 * t + 10)) / 2
        }, easeInCirc: function (t) {
            return 1 - i(1 - e(t, 2))
        }, easeOutCirc: function (t) {
            return i(1 - e(t - 1, 2))
        }, easeInOutCirc: function (t) {
            return t < .5 ? (1 - i(1 - e(2 * t, 2))) / 2 : (i(1 - e(-2 * t + 2, 2)) + 1) / 2
        }, easeInElastic: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : -e(2, 10 * t - 10) * o((10 * t - 10.75) * l)
        }, easeOutElastic: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : e(2, -10 * t) * o((10 * t - .75) * l) + 1
        }, easeInOutElastic: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? -e(2, 20 * t - 10) * o((20 * t - 11.125) * c) / 2 : e(2, -20 * t + 10) * o((20 * t - 11.125) * c) / 2 + 1
        }, easeInBack: function (t) {
            return 2.70158 * t * t * t - r * t * t
        }, easeOutBack: function (t) {
            return 1 + 2.70158 * e(t - 1, 3) + r * e(t - 1, 2)
        }, easeInOutBack: function (t) {
            return t < .5 ? e(2 * t, 2) * (7.189819 * t - a) / 2 : (e(2 * t - 2, 2) * ((a + 1) * (2 * t - 2) + a) + 2) / 2
        }, easeInBounce: function (t) {
            return 1 - h(1 - t)
        }, easeOutBounce: h, easeInOutBounce: function (t) {
            return t < .5 ? (1 - h(1 - 2 * t)) / 2 : (1 + h(2 * t - 1)) / 2
        }
    })
}), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function (t, e) {
    "use strict";

    function i(i) {
        var o = e.console;
        s[i] || (s[i] = !0, t.migrateWarnings.push(i), o && o.warn && !t.migrateMute && (o.warn("JQMIGRATE: " + i), t.migrateTrace && o.trace && o.trace()))
    }

    function o(t, e, o, n) {
        Object.defineProperty(t, e, {
            configurable: !0, enumerable: !0, get: function () {
                return i(n), o
            }
        })
    }

    var n;
    t.migrateVersion = "3.0.0", (n = e.console && e.console.log && function () {
        e.console.log.apply(e.console, arguments)
    }) && (t && !/^[12]\./.test(t.fn.jquery) || n("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), t.migrateWarnings && n("JQMIGRATE: Migrate plugin loaded multiple times"), n("JQMIGRATE: Migrate is installed" + (t.migrateMute ? "" : " with logging active") + ", version " + t.migrateVersion));
    var s = {};
    t.migrateWarnings = [], void 0 === t.migrateTrace && (t.migrateTrace = !0), t.migrateReset = function () {
        s = {}, t.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && i("jQuery is not compatible with Quirks Mode");
    var r, a = t.fn.init, l = t.isNumeric, c = t.find, h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        d = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    t.fn.init = function (t) {
        var e = Array.prototype.slice.call(arguments);
        return "string" == typeof t && "#" === t && (i("jQuery( '#' ) is not a valid selector"), e[0] = []), a.apply(this, e)
    }, t.fn.init.prototype = t.fn, t.find = function (t) {
        var e = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && h.test(t)) try {
            document.querySelector(t)
        } catch (o) {
            t = t.replace(d, function (t, e, i, o) {
                return "[" + e + i + '"' + o + '"]'
            });
            try {
                document.querySelector(t), i("Attribute selector with '#' must be quoted: " + e[0]), e[0] = t
            } catch (t) {
                i("Attribute selector with '#' was not fixed: " + e[0])
            }
        }
        return c.apply(this, e)
    };
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t.find[r] = c[r]);
    t.fn.size = function () {
        return i("jQuery.fn.size() is deprecated; use the .length property"), this.length
    }, t.parseJSON = function () {
        return i("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments)
    }, t.isNumeric = function (e) {
        var o, n, s = l(e), r = (n = (o = e) && o.toString(), !t.isArray(o) && n - parseFloat(n) + 1 >= 0);
        return s !== r && i("jQuery.isNumeric() should not be called on constructed objects"), r
    }, o(t, "unique", t.uniqueSort, "jQuery.unique is deprecated, use jQuery.uniqueSort"), o(t.expr, "filters", t.expr.pseudos, "jQuery.expr.filters is now jQuery.expr.pseudos"), o(t.expr, ":", t.expr.pseudos, 'jQuery.expr[":"] is now jQuery.expr.pseudos');
    var u = t.ajax;
    t.ajax = function () {
        var t = u.apply(this, arguments);
        return t.promise && (o(t, "success", t.done, "jQXHR.success is deprecated and removed"), o(t, "error", t.fail, "jQXHR.error is deprecated and removed"), o(t, "complete", t.always, "jQXHR.complete is deprecated and removed")), t
    };
    var p = t.fn.removeAttr, f = t.fn.toggleClass, m = /\S+/g;
    t.fn.removeAttr = function (e) {
        var o = this;
        return t.each(e.match(m), function (e, n) {
            t.expr.match.bool.test(n) && (i("jQuery.fn.removeAttr no longer sets boolean properties: " + n), o.prop(n, !1))
        }), p.apply(this, arguments)
    }, t.fn.toggleClass = function (e) {
        return void 0 !== e && "boolean" != typeof e ? f.apply(this, arguments) : (i("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
            var i = this.getAttribute && this.getAttribute("class") || "";
            i && t.data(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : t.data(this, "__className__") || "")
        }))
    };
    var g = !1;
    t.swap && t.each(["height", "width", "reliableMarginRight"], function (e, i) {
        var o = t.cssHooks[i] && t.cssHooks[i].get;
        o && (t.cssHooks[i].get = function () {
            var t;
            return g = !0, t = o.apply(this, arguments), g = !1, t
        })
    }), t.swap = function (t, e, o, n) {
        var s, r, a = {};
        g || i("jQuery.swap() is undocumented and deprecated");
        for (r in e) a[r] = t.style[r], t.style[r] = e[r];
        s = o.apply(t, n || []);
        for (r in e) t.style[r] = a[r];
        return s
    };
    var v = t.data;
    t.data = function (e, o, n) {
        var s;
        return o && o !== t.camelCase(o) && (s = t.hasData(e) && v.call(this, e)) && o in s ? (i("jQuery.data() always sets/gets camelCased names: " + o), arguments.length > 2 && (s[o] = n), s[o]) : v.apply(this, arguments)
    };
    var y = t.Tween.prototype.run;
    t.Tween.prototype.run = function (e) {
        t.easing[this.easing].length > 1 && (i('easing function "jQuery.easing.' + this.easing.toString() + '" should use only first argument'), t.easing[this.easing] = t.easing[this.easing].bind(t.easing, e, this.options.duration * e, 0, 1, this.options.duration)), y.apply(this, arguments)
    };
    var w = t.fn.load, b = t.event.fix;
    t.event.props = [], t.event.fixHooks = {}, t.event.fix = function (e) {
        var o, n = e.type, s = this.fixHooks[n], r = t.event.props;
        if (r.length) for (i("jQuery.event.props are deprecated and removed: " + r.join()); r.length;) t.event.addProp(r.pop());
        if (s && !s._migrated_ && (s._migrated_ = !0, i("jQuery.event.fixHooks are deprecated and removed: " + n), (r = s.props) && r.length)) for (; r.length;) t.event.addProp(r.pop());
        return o = b.call(this, e), s && s.filter ? s.filter(o, e) : o
    }, t.each(["load", "unload", "error"], function (e, o) {
        t.fn[o] = function () {
            var t = Array.prototype.slice.call(arguments, 0);
            return "load" === o && "string" == typeof t[0] ? w.apply(this, t) : (i("jQuery.fn." + o + "() is deprecated"), t.splice(0, 0, o), arguments.length ? this.on.apply(this, t) : (this.triggerHandler.apply(this, t), this))
        }
    }), t(function () {
        t(document).triggerHandler("ready")
    }), t.event.special.ready = {
        setup: function () {
            this === document && i("'ready' event is deprecated")
        }
    }, t.fn.extend({
        bind: function (t, e, o) {
            return i("jQuery.fn.bind() is deprecated"), this.on(t, null, e, o)
        }, unbind: function (t, e) {
            return i("jQuery.fn.unbind() is deprecated"), this.off(t, null, e)
        }, delegate: function (t, e, o, n) {
            return i("jQuery.fn.delegate() is deprecated"), this.on(e, t, o, n)
        }, undelegate: function (t, e, o) {
            return i("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", o)
        }
    });
    var x = t.fn.offset;
    t.fn.offset = function () {
        var e, o = this[0], n = {top: 0, left: 0};
        return o && o.nodeType ? (e = (o.ownerDocument || document).documentElement, t.contains(e, o) ? x.apply(this, arguments) : (i("jQuery.fn.offset() requires an element connected to a document"), n)) : (i("jQuery.fn.offset() requires a valid DOM element"), n)
    };
    var k = t.param;
    t.param = function (e, o) {
        var n = t.ajaxSettings && t.ajaxSettings.traditional;
        return void 0 === o && n && (i("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), o = n), k.call(this, e, o)
    };
    var _ = t.fn.andSelf || t.fn.addBack;
    t.fn.andSelf = function () {
        return i("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), _.apply(this, arguments)
    };
    var $ = t.Deferred,
        T = [["resolve", "done", t.Callbacks("once memory"), t.Callbacks("once memory"), "resolved"], ["reject", "fail", t.Callbacks("once memory"), t.Callbacks("once memory"), "rejected"], ["notify", "progress", t.Callbacks("memory"), t.Callbacks("memory")]];
    t.Deferred = function (e) {
        var o = $(), n = o.promise();
        return o.pipe = n.pipe = function () {
            var e = arguments;
            return i("deferred.pipe() is deprecated"), t.Deferred(function (i) {
                t.each(T, function (s, r) {
                    var a = t.isFunction(e[s]) && e[s];
                    o[r[1]](function () {
                        var e = a && a.apply(this, arguments);
                        e && t.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, a ? [e] : arguments)
                    })
                }), e = null
            }).promise()
        }, e && e.call(o, o), o
    }
}(jQuery, window), function () {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }

    var e = 0, i = {};
    t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function () {
        return this.enabled = !1, this
    }, t.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function () {
        return this.group.next(this)
    }, t.prototype.previous = function () {
        return this.group.previous(this)
    }, t.invokeAll = function (t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, s = e.length; s > n; n++) e[n][t]()
    }, t.destroyAll = function () {
        t.invokeAll("destroy")
    }, t.disableAll = function () {
        t.invokeAll("disable")
    }, t.enableAll = function () {
        t.Context.refreshAll();
        for (var e in i) i[e].enabled = !0;
        return this
    }, t.refreshAll = function () {
        t.Context.refreshAll()
    }, t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(), function () {
    "use strict";

    function t(n) {
        this.element = n, this.Adapter = o.Adapter, this.adapter = new this.Adapter(n), this.key = "waypoint-context-" + e, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, n.waypointContextKey = this.key, i[n.waypointContextKey] = this, e += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new t(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    var e = 0, i = {}, o = window.Waypoint, n = window.onload;
    t.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, t.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical), o = this.element == this.element.window;
        t && e && !o && (this.adapter.off(".waypoints"), delete i[this.key])
    }, t.prototype.createThrottledResizeHandler = function () {
        function t() {
            e.handleResize(), e.didResize = !1
        }

        var e = this;
        this.adapter.on("resize.waypoints", function () {
            e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
        })
    }, t.prototype.createThrottledScrollHandler = function () {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }

        var e = this;
        this.adapter.on("scroll.waypoints", function () {
            (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
        })
    }, t.prototype.handleResize = function () {
        o.Context.refreshAll()
    }, t.prototype.handleScroll = function () {
        var t = {}, e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var o = e[i], n = o.newScroll > o.oldScroll ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var r = this.waypoints[i][s];
                if (null !== r.triggerPoint) {
                    var a = o.oldScroll < r.triggerPoint, l = o.newScroll >= r.triggerPoint;
                    (a && l || !a && !l) && (r.queueTrigger(n), t[r.group.id] = r.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
    }, t.prototype.innerHeight = function () {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }, t.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, t.prototype.innerWidth = function () {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }, t.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, t.prototype.refresh = function () {
        var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), n = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var s in t) {
            var r = t[s];
            for (var a in this.waypoints[s]) {
                var l, c, h, d, u = this.waypoints[s][a], p = u.options.offset, f = u.triggerPoint, m = 0,
                    g = null == f;
                u.element !== u.element.window && (m = u.adapter.offset()[r.offsetProp]), "function" == typeof p ? p = p.apply(u) : "string" == typeof p && (p = parseFloat(p), u.options.offset.indexOf("%") > -1 && (p = Math.ceil(r.contextDimension * p / 100))), l = r.contextScroll - r.contextOffset, u.triggerPoint = Math.floor(m + l - p), c = f < r.oldScroll, h = u.triggerPoint >= r.oldScroll, d = !c && !h, !g && c && h ? (u.queueTrigger(r.backward), n[u.group.id] = u.group) : !g && d ? (u.queueTrigger(r.forward), n[u.group.id] = u.group) : g && r.oldScroll >= u.triggerPoint && (u.queueTrigger(r.forward), n[u.group.id] = u.group)
            }
        }
        return o.requestAnimationFrame(function () {
            for (var t in n) n[t].flushTriggers()
        }), this
    }, t.findOrCreateByElement = function (e) {
        return t.findByElement(e) || new t(e)
    }, t.refreshAll = function () {
        for (var t in i) i[t].refresh()
    }, t.findByElement = function (t) {
        return i[t.waypointContextKey]
    }, window.onload = function () {
        n && n(), t.refreshAll()
    }, o.requestAnimationFrame = function (t) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
            window.setTimeout(t, 1e3 / 60)
        }).call(window, t)
    }, o.Context = t
}(), function () {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }

    var o = {vertical: {}, horizontal: {}}, n = window.Waypoint;
    i.prototype.add = function (t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []}
    }, i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i], n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var s = 0, r = o.length; r > s; s += 1) {
                var a = o[s];
                (a.options.continuous || s === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function () {
        return this.waypoints[0]
    }, i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(), function () {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }

    var e = window.jQuery, i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
        t.prototype[i] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o]
    }), i.adapters.push({name: "jquery", Adapter: t}), i.Adapter = t
}(), function () {
    "use strict";

    function t(t) {
        return function () {
            var i = [], o = arguments[0];
            return t.isFunction(arguments[0]) && ((o = t.extend({}, arguments[1])).handler = arguments[0]), this.each(function () {
                var n = t.extend({}, o, {element: this});
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }

    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(), function (t, e) {
    "object" == typeof module && module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Spinner = e()
}(this, function () {
    "use strict";

    function t(t, e) {
        var i, o = document.createElement(t || "div");
        for (i in e) o[i] = e[i];
        return o
    }

    function e(t) {
        for (var e = 1, i = arguments.length; i > e; e++) t.appendChild(arguments[e]);
        return t
    }

    function i(t, e) {
        var i, o, n = t.style;
        if (void 0 !== n[e = e.charAt(0).toUpperCase() + e.slice(1)]) return e;
        for (o = 0; o < h.length; o++) if (i = h[o] + e, void 0 !== n[i]) return i
    }

    function o(t, e) {
        for (var o in e) t.style[i(t, o) || o] = e[o];
        return t
    }

    function n(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var o in i) void 0 === t[o] && (t[o] = i[o])
        }
        return t
    }

    function s(t, e) {
        return "string" == typeof t ? t : t[e % t.length]
    }

    function r(t) {
        this.opts = n(t || {}, r.defaults, u)
    }

    var a, l, c, h = ["webkit", "Moz", "ms", "O"], d = {}, u = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        scale: 1,
        corners: 1,
        color: "#000",
        opacity: .25,
        rotate: 0,
        direction: 1,
        speed: 1,
        trail: 100,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "50%",
        left: "50%",
        shadow: !1,
        hwaccel: !1,
        position: "absolute"
    };
    if (r.defaults = {}, n(r.prototype, {
        spin: function (e) {
            this.stop();
            var i = this, n = i.opts, s = i.el = t(null, {className: n.className});
            if (o(s, {
                position: n.position,
                width: 0,
                zIndex: n.zIndex,
                left: n.left,
                top: n.top
            }), e && e.insertBefore(s, e.firstChild || null), s.setAttribute("role", "progressbar"), i.lines(s, i.opts), !a) {
                var r, l = 0, c = (n.lines - 1) * (1 - n.direction) / 2, h = n.fps, d = h / n.speed,
                    u = (1 - n.opacity) / (d * n.trail / 100), p = d / n.lines;
                !function t() {
                    l++;
                    for (var e = 0; e < n.lines; e++) r = Math.max(1 - (l + (n.lines - e) * p) % d * u, n.opacity), i.opacity(s, e * n.direction + c, r, n);
                    i.timeout = i.el && setTimeout(t, ~~(1e3 / h))
                }()
            }
            return i
        }, stop: function () {
            var t = this.el;
            return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this
        }, lines: function (i, n) {
            function r(e, i) {
                return o(t(), {
                    position: "absolute",
                    width: n.scale * (n.length + n.width) + "px",
                    height: n.scale * n.width + "px",
                    background: e,
                    boxShadow: i,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / n.lines * h + n.rotate) + "deg) translate(" + n.scale * n.radius + "px,0)",
                    borderRadius: (n.corners * n.scale * n.width >> 1) + "px"
                })
            }

            for (var c, h = 0, u = (n.lines - 1) * (1 - n.direction) / 2; h < n.lines; h++) c = o(t(), {
                position: "absolute",
                top: 1 + ~(n.scale * n.width / 2) + "px",
                transform: n.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: n.opacity,
                animation: a && (p = n.opacity, f = n.trail, m = u + h * n.direction, g = n.lines, v = ["opacity", f, ~~(100 * p), m, g].join("-"), y = .01 + m / g * 100, w = Math.max(1 - (1 - p) / f * (100 - y), p), b = a.substring(0, a.indexOf("Animation")).toLowerCase(), x = b && "-" + b + "-" || "", d[v] || (l.insertRule("@" + x + "keyframes " + v + "{0%{opacity:" + w + "}" + y + "%{opacity:" + p + "}" + (y + .01) + "%{opacity:1}" + (y + f) % 100 + "%{opacity:" + p + "}100%{opacity:" + w + "}}", l.cssRules.length), d[v] = 1), v + " " + 1 / n.speed + "s linear infinite")
            }), n.shadow && e(c, o(r("#000", "0 0 4px #000"), {top: "2px"})), e(i, e(c, r(s(n.color, h), "0 0 1px rgba(0,0,0,.1)")));
            var p, f, m, g, v, y, w, b, x;
            return i
        }, opacity: function (t, e, i) {
            e < t.childNodes.length && (t.childNodes[e].style.opacity = i)
        }
    }), "undefined" != typeof document) {
        c = t("style", {type: "text/css"}), e(document.getElementsByTagName("head")[0], c), l = c.sheet || c.styleSheet;
        var p = o(t("group"), {behavior: "url(#default#VML)"});
        !i(p, "transform") && p.adj ? function () {
            function i(e, i) {
                return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i)
            }

            l.addRule(".spin-vml", "behavior:url(#default#VML)"), r.prototype.lines = function (t, n) {
                function r() {
                    return o(i("group", {coordsize: h + " " + h, coordorigin: -c + " " + -c}), {width: h, height: h})
                }

                function a(t, a, l) {
                    e(u, e(o(r(), {
                        rotation: 360 / n.lines * t + "deg",
                        left: ~~a
                    }), e(o(i("roundrect", {arcsize: n.corners}), {
                        width: c,
                        height: n.scale * n.width,
                        left: n.scale * n.radius,
                        top: -n.scale * n.width >> 1,
                        filter: l
                    }), i("fill", {color: s(n.color, t), opacity: n.opacity}), i("stroke", {opacity: 0}))))
                }

                var l, c = n.scale * (n.length + n.width), h = 2 * n.scale * c,
                    d = -(n.width + n.length) * n.scale * 2 + "px", u = o(r(), {position: "absolute", top: d, left: d});
                if (n.shadow) for (l = 1; l <= n.lines; l++) a(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (l = 1; l <= n.lines; l++) a(l);
                return e(t, u)
            }, r.prototype.opacity = function (t, e, i, o) {
                var n = t.firstChild;
                o = o.shadow && o.lines || 0, n && e + o < n.childNodes.length && (n = (n = (n = n.childNodes[e + o]) && n.firstChild) && n.firstChild) && (n.opacity = i)
            }
        }() : a = i(p, "animation")
    }
    return r
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function (t) {
    var e = {}, i = function (e) {
        var i = [], o = !1, n = e.dir && "left" === e.dir ? "scrollLeft" : "scrollTop";
        return this.each(function () {
            var e = t(this);
            if (this !== document && this !== window) return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void (e[n]() > 0 ? i.push(this) : (e[n](1), o = e[n]() > 0, o && i.push(this), e[n](0))) : (i.push(document.scrollingElement), !1)
        }), i.length || this.each(function () {
            this === document.documentElement && "smooth" === t(this).css("scrollBehavior") && (i = [this]), i.length || "BODY" !== this.nodeName || (i = [this])
        }), "first" === e.el && i.length > 1 && (i = [i[0]]), i
    };
    t.fn.extend({
        scrollable: function (t) {
            var e = i.call(this, {dir: t});
            return this.pushStack(e)
        }, firstScrollable: function (t) {
            var e = i.call(this, {el: "first", dir: t});
            return this.pushStack(e)
        }, smoothScroll: function (e, i) {
            if ("options" === (e = e || {})) return i ? this.each(function () {
                var e = t(this), o = t.extend(e.data("ssOpts") || {}, i);
                t(this).data("ssOpts", o)
            }) : this.first().data("ssOpts");
            var o = t.extend({}, t.fn.smoothScroll.defaults, e), n = function (e) {
                var i = function (t) {
                        return t.replace(/(:|\.|\/)/g, "\\$1")
                    }, n = this, s = t(this), r = t.extend({}, o, s.data("ssOpts") || {}), a = o.exclude,
                    l = r.excludeWithin, c = 0, h = 0, d = !0, u = {}, p = t.smoothScroll.filterPath(location.pathname),
                    f = t.smoothScroll.filterPath(n.pathname), m = location.hostname === n.hostname || !n.hostname,
                    g = r.scrollTarget || f === p, v = i(n.hash);
                if (v && !t(v).length && (d = !1), r.scrollTarget || m && g && v) {
                    for (; d && c < a.length;) s.is(i(a[c++])) && (d = !1);
                    for (; d && h < l.length;) s.closest(l[h++]).length && (d = !1)
                } else d = !1;
                d && (r.preventDefault && e.preventDefault(), t.extend(u, r, {
                    scrollTarget: r.scrollTarget || v,
                    link: n
                }), t.smoothScroll(u))
            };
            return null !== e.delegateSelector ? this.off("click.smoothscroll", e.delegateSelector).on("click.smoothscroll", e.delegateSelector, n) : this.off("click.smoothscroll").on("click.smoothscroll", n), this
        }
    }), t.smoothScroll = function (i, o) {
        if ("options" === i && "object" == typeof o) return t.extend(e, o);
        var n, s, r, a, l = 0, c = "offset", h = "scrollTop", d = {}, u = {};
        "number" == typeof i ? (n = t.extend({link: null}, t.fn.smoothScroll.defaults, e), r = i) : (n = t.extend({link: null}, t.fn.smoothScroll.defaults, i || {}, e)).scrollElement && (c = "position", "static" === n.scrollElement.css("position") && n.scrollElement.css("position", "relative")), h = "left" === n.direction ? "scrollLeft" : h, n.scrollElement ? (s = n.scrollElement, /^(?:HTML|BODY)$/.test(s[0].nodeName) || (l = s[h]())) : s = t("html, body").firstScrollable(n.direction), n.beforeScroll.call(s, n), r = "number" == typeof i ? i : o || t(n.scrollTarget)[c]() && t(n.scrollTarget)[c]()[n.direction] || 0, d[h] = r + l + n.offset, "auto" === (a = n.speed) && (a = Math.abs(d[h] - s[h]()) / n.autoCoefficient), u = {
            duration: a,
            easing: n.easing,
            complete: function () {
                n.afterScroll.call(n.link, n)
            }
        }, n.step && (u.step = n.step), s.length ? s.stop().animate(d, u) : n.afterScroll.call(n.link, n)
    }, t.smoothScroll.version = "2.0.1", t.smoothScroll.filterPath = function (t) {
        return (t = t || "").replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
    }, t.fn.smoothScroll.defaults = {
        exclude: [],
        excludeWithin: [],
        offset: 0,
        direction: "top",
        delegateSelector: null,
        scrollElement: null,
        scrollTarget: null,
        beforeScroll: function () {
        },
        afterScroll: function () {
        },
        easing: "swing",
        speed: 400,
        autoCoefficient: 2,
        preventDefault: !0
    }
}), function (t, e) {
    "use strict";

    function i(i, n) {
        var s;
        this.$input = t(i), this.$rating = t("<span></span>").css({cursor: "default"}).insertBefore(this.$input), this.options = ((s = t.extend({}, this.$input.data(), n)).start = parseInt(s.start, 10), s.start = isNaN(s.start) ? e : s.start, s.stop = parseInt(s.stop, 10), s.stop = isNaN(s.stop) ? s.start + o || e : s.stop, s.step = parseInt(s.step, 10) || e, s.fractions = Math.abs(parseInt(s.fractions, 10)) || e, s.scale = Math.abs(parseInt(s.scale, 10)) || e, (s = t.extend({}, t.fn.rating.defaults, s)).filledSelected = s.filledSelected || s.filled, s), this._init()
    }

    var o = 5;
    i.prototype = {
        _init: function () {
            for (var i = this, o = this.$input, n = this.$rating, s = function (t) {
                return function (i) {
                    o.prop("disabled") || o.prop("readonly") || o.data("readonly") !== e || t.call(this, i)
                }
            }, r = 1; r <= this._rateToIndex(this.options.stop); r++) {
                var a = t('<div class="rating-symbol"></div>').css({display: "inline-block", position: "relative"});
                t('<div class="rating-symbol-background ' + this.options.empty + '"></div>').appendTo(a), t('<div class="rating-symbol-foreground"></div>').append("<span></span>").css({
                    display: "inline-block",
                    position: "absolute",
                    overflow: "hidden",
                    left: 0,
                    right: 0,
                    width: 0
                }).appendTo(a), n.append(a), this.options.extendSymbol.call(a, this._indexToRate(r))
            }
            this._updateRate(o.val()), o.on("change", function () {
                i._updateRate(t(this).val())
            });
            var l, c = function (e) {
                var o = t(e.currentTarget),
                    n = Math.abs((e.pageX || e.originalEvent.touches[0].pageX) - (("rtl" === o.css("direction") && o.width()) + o.offset().left));
                return n = n > 0 ? n : .1 * i.options.scale, o.index() + n / o.width()
            };
            n.on("mousedown touchstart", ".rating-symbol", s(function (t) {
                o.val(i._indexToRate(c(t))).change()
            })).on("mousemove touchmove", ".rating-symbol", s(function (o) {
                var n = i._roundToFraction(c(o));
                n !== l && (l !== e && t(this).trigger("rating.rateleave"), l = n, t(this).trigger("rating.rateenter", [i._indexToRate(l)])), i._fillUntil(n)
            })).on("mouseleave touchend", ".rating-symbol", s(function () {
                l = e, t(this).trigger("rating.rateleave"), i._fillUntil(i._rateToIndex(parseFloat(o.val())))
            }))
        }, _fillUntil: function (t) {
            var e = this.$rating, i = Math.floor(t);
            e.find(".rating-symbol-background").css("visibility", "visible").slice(0, i).css("visibility", "hidden");
            var o = e.find(".rating-symbol-foreground");
            o.width(0), o.slice(0, i).width("auto").find("span").attr("class", this.options.filled), o.eq(t % 1 ? i : i - 1).find("span").attr("class", this.options.filledSelected), o.eq(i).width(t % 1 * 100 + "%")
        }, _indexToRate: function (t) {
            return this.options.start + Math.floor(t) * this.options.step + this.options.step * this._roundToFraction(t % 1)
        }, _rateToIndex: function (t) {
            return (t - this.options.start) / this.options.step
        }, _roundToFraction: function (t) {
            var e = Math.ceil(t % 1 * this.options.fractions) / this.options.fractions,
                i = Math.pow(10, this.options.scale);
            return Math.floor(t) + Math.floor(e * i) / i
        }, _contains: function (t) {
            var e = this.options.step > 0 ? this.options.start : this.options.stop,
                i = this.options.step > 0 ? this.options.stop : this.options.start;
            return e <= t && t <= i
        }, _updateRate: function (t) {
            var e = parseFloat(t);
            this._contains(e) ? (this._fillUntil(this._rateToIndex(e)), this.$input.val(e)) : "" === t && (this._fillUntil(0), this.$input.val(""))
        }, rate: function (t) {
            return t === e ? this.$input.val() : void this._updateRate(t)
        }
    }, t.fn.rating = function (o) {
        var n, s = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var e = t(this), r = e.data("rating");
            r || e.data("rating", r = new i(this, o)), "string" == typeof o && "_" !== o[0] && (n = r[o].apply(r, s))
        }), n !== e ? n : this
    }, t.fn.rating.defaults = {
        filled: "glyphicon glyphicon-star",
        filledSelected: e,
        empty: "glyphicon glyphicon-star-empty",
        start: 0,
        stop: o,
        step: 1,
        fractions: 1,
        scale: 3,
        extendSymbol: function (t) {
        }
    }, t(function () {
        t("input.rating").rating()
    })
}(jQuery), function (t) {
    "use strict";
    var e = function (e, i) {
        this.el = t(e), this.options = t.extend({}, t.fn.typed.defaults, i), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
    };
    e.prototype = {
        constructor: e, init: function () {
            var t = this;
            t.timeout = setTimeout(function () {
                for (var e = 0; e < t.strings.length; ++e) t.sequence[e] = e;
                t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
            }, t.startDelay)
        }, build: function () {
            var e = this;
            if (!0 === this.showCursor && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children());
                var i = this.stringsElement.children();
                t.each(i, function (i, o) {
                    e.strings.push(t(o).html())
                })
            }
            this.init()
        }, typewrite: function (t, e) {
            if (!0 !== this.stop) {
                var i = Math.round(70 * Math.random()) + this.typeSpeed, o = this;
                o.timeout = setTimeout(function () {
                    var i = 0, n = t.substr(e);
                    if ("^" === n.charAt(0)) {
                        var s = 1;
                        /^\^\d+/.test(n) && (s += (n = /\d+/.exec(n)[0]).length, i = parseInt(n)), t = t.substring(0, e) + t.substring(e + s)
                    }
                    if ("html" === o.contentType) {
                        var r = t.substr(e).charAt(0);
                        if ("<" === r || "&" === r) {
                            var a;
                            for (a = "<" === r ? ">" : ";"; t.substr(e + 1).charAt(0) !== a && (t.substr(e).charAt(0), !(++e + 1 > t.length));) ;
                            e++
                        }
                    }
                    o.timeout = setTimeout(function () {
                        if (e === t.length) {
                            if (o.options.onStringTyped(o.arrayPos), o.arrayPos === o.strings.length - 1 && (o.options.callback(), o.curLoop++, !1 === o.loop || o.curLoop === o.loopCount)) return;
                            o.timeout = setTimeout(function () {
                                o.backspace(t, e)
                            }, o.backDelay)
                        } else {
                            0 === e && o.options.preStringTyped(o.arrayPos);
                            var i = t.substr(0, e + 1);
                            o.attr ? o.el.attr(o.attr, i) : o.isInput ? o.el.val(i) : "html" === o.contentType ? o.el.html(i) : o.el.text(i), e++, o.typewrite(t, e)
                        }
                    }, i)
                }, i)
            }
        }, backspace: function (t, e) {
            if (!0 !== this.stop) {
                var i = Math.round(70 * Math.random()) + this.backSpeed, o = this;
                o.timeout = setTimeout(function () {
                    if ("html" === o.contentType && ">" === t.substr(e).charAt(0)) {
                        for (; "<" !== t.substr(e - 1).charAt(0) && (t.substr(e).charAt(0), !(--e < 0));) ;
                        e--
                    }
                    var i = t.substr(0, e);
                    o.attr ? o.el.attr(o.attr, i) : o.isInput ? o.el.val(i) : "html" === o.contentType ? o.el.html(i) : o.el.text(i), e > o.stopNum ? (e--, o.backspace(t, e)) : e <= o.stopNum && (o.arrayPos++, o.arrayPos === o.strings.length ? (o.arrayPos = 0, o.shuffle && (o.sequence = o.shuffleArray(o.sequence)), o.init()) : o.typewrite(o.strings[o.sequence[o.arrayPos]], e))
                }, i)
            }
        }, shuffleArray: function (t) {
            var e, i, o = t.length;
            if (o) for (; --o;) i = Math.floor(Math.random() * (o + 1)), e = t[i], t[i] = t[o], t[o] = e;
            return t
        }, reset: function () {
            clearInterval(this.timeout), this.el.attr("id"), this.el.empty(), void 0 !== this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
        }
    }, t.fn.typed = function (i) {
        return this.each(function () {
            var o = t(this), n = o.data("typed"), s = "object" == typeof i && i;
            n && n.reset(), o.data("typed", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }, t.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function () {
        },
        preStringTyped: function () {
        },
        onStringTyped: function () {
        },
        resetCallback: function () {
        }
    }
}(window.jQuery), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function (t) {
    function e(e, i) {
        var n = t(this);
        if (this.value === n.attr(r ? "placeholder-x" : "placeholder") && n.hasClass(u.customClass)) if (this.value = "", n.removeClass(u.customClass), n.data("placeholder-password")) {
            if (n = n.hide().nextAll('input[type="password"]:first').show().attr("id", n.removeAttr("id").data("placeholder-id")), !0 === e) return n[0].value = i, i;
            n.focus()
        } else this == o() && this.select()
    }

    function i(i) {
        var o, n, s, a, l = t(this), c = this.id;
        if (!i || "blur" !== i.type || !l.hasClass(u.customClass)) if ("" === this.value) {
            if ("password" === this.type) {
                if (!l.data("placeholder-textinput")) {
                    try {
                        o = l.clone().prop({type: "text"})
                    } catch (e) {
                        o = t("<input>").attr(t.extend((n = this, s = {}, a = /^jQuery\d+$/, t.each(n.attributes, function (t, e) {
                            e.specified && !a.test(e.name) && (s[e.name] = e.value)
                        }), s), {type: "text"}))
                    }
                    o.removeAttr("name").data({
                        "placeholder-enabled": !0,
                        "placeholder-password": l,
                        "placeholder-id": c
                    }).bind("focus.placeholder", e), l.data({"placeholder-textinput": o, "placeholder-id": c}).before(o)
                }
                this.value = "", l = l.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", l.data("placeholder-id")).show()
            } else {
                var h = l.data("placeholder-password");
                h && (h[0].value = "", l.attr("id", l.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
            }
            l.addClass(u.customClass), l[0].value = l.attr(r ? "placeholder-x" : "placeholder")
        } else l.removeClass(u.customClass)
    }

    function o() {
        try {
            return document.activeElement
        } catch (t) {
        }
    }

    var n, s, r = !1, a = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
        l = "placeholder" in document.createElement("input") && !a && !r,
        c = "placeholder" in document.createElement("textarea") && !a && !r, h = t.valHooks, d = t.propHooks, u = {};
    l && c ? ((s = t.fn.placeholder = function () {
        return this
    }).input = !0, s.textarea = !0) : ((s = t.fn.placeholder = function (o) {
        return u = t.extend({}, {customClass: "placeholder"}, o), this.filter((l ? "textarea" : ":input") + "[" + (r ? "placeholder-x" : "placeholder") + "]").not("." + u.customClass).not(":radio, :checkbox, [type=hidden]").bind({
            "focus.placeholder": e,
            "blur.placeholder": i
        }).data("placeholder-enabled", !0).trigger("blur.placeholder")
    }).input = l, s.textarea = c, n = {
        get: function (e) {
            var i = t(e), o = i.data("placeholder-password");
            return o ? o[0].value : i.data("placeholder-enabled") && i.hasClass(u.customClass) ? "" : e.value
        }, set: function (n, s) {
            var r, a, l = t(n);
            return "" !== s && (r = l.data("placeholder-textinput"), a = l.data("placeholder-password"), r ? (e.call(r[0], !0, s) || (n.value = s), r[0].value = s) : a && (e.call(n, !0, s) || (a[0].value = s), n.value = s)), l.data("placeholder-enabled") ? ("" === s ? (n.value = s, n != o() && i.call(n)) : (l.hasClass(u.customClass) && e.call(n), n.value = s), l) : (n.value = s, l)
        }
    }, l || (h.input = n, d.value = n), c || (h.textarea = n, d.value = n), t(function () {
        t(document).delegate("form", "submit.placeholder", function () {
            var o = t("." + u.customClass, this).each(function () {
                e.call(this, !0, "")
            });
            setTimeout(function () {
                o.each(i)
            }, 10)
        })
    }), t(window).bind("beforeunload.placeholder", function () {
        var e = !0;
        try {
            "javascript:void(0)" === document.activeElement.toString() && (e = !1)
        } catch (t) {
        }
        e && t("." + u.customClass).each(function () {
            this.value = ""
        })
    }))
}), function (t, e, i) {
    function o(e, i) {
        this.element = e, this.settings = t.extend({}, n, i), this.settings.duplicate || i.hasOwnProperty("removeIds") || (this.settings.removeIds = !1), this._defaults = n, this._name = s, this.init()
    }

    var n = {
        label: "MENU",
        duplicate: !0,
        duration: 200,
        easingOpen: "swing",
        easingClose: "swing",
        closedSymbol: "&#9658;",
        openedSymbol: "&#9660;",
        prependTo: "body",
        appendTo: "",
        parentTag: "a",
        closeOnClick: !1,
        allowParentLinks: !1,
        nestedParentLinks: !0,
        showChildren: !1,
        removeIds: !0,
        removeClasses: !1,
        removeStyles: !1,
        brand: "",
        animations: "jquery",
        init: function () {
        },
        beforeOpen: function () {
        },
        beforeClose: function () {
        },
        afterOpen: function () {
        },
        afterClose: function () {
        }
    }, s = "slicknav", r = "slicknav";
    o.prototype.init = function () {
        var i, o, n = this, s = t(this.element), a = this.settings;
        if (a.duplicate ? n.mobileNav = s.clone() : n.mobileNav = s, a.removeIds && (n.mobileNav.removeAttr("id"), n.mobileNav.find("*").each(function (e, i) {
            t(i).removeAttr("id")
        })), a.removeClasses && (n.mobileNav.removeAttr("class"), n.mobileNav.find("*").each(function (e, i) {
            t(i).removeAttr("class")
        })), a.removeStyles && (n.mobileNav.removeAttr("style"), n.mobileNav.find("*").each(function (e, i) {
            t(i).removeAttr("style")
        })), i = r + "_icon", "" === a.label && (i += " " + r + "_no-text"), "a" == a.parentTag && (a.parentTag = 'a href="#"'), n.mobileNav.attr("class", r + "_nav"), o = t('<div class="' + r + '_menu"></div>'), "" !== a.brand) {
            var l = t('<div class="' + r + '_brand">' + a.brand + "</div>");
            t(o).append(l)
        }
        n.btn = t(["<" + a.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + r + "_btn " + r + '_collapsed">', '<span class="' + r + '_menutxt">' + a.label + "</span>", '<span class="' + i + '">', '<span class="' + r + '_icon-bar"></span>', '<span class="' + r + '_icon-bar"></span>', '<span class="' + r + '_icon-bar"></span>', "</span>", "</" + a.parentTag + ">"].join("")), t(o).append(n.btn), "" !== a.appendTo ? t(a.appendTo).append(o) : t(a.prependTo).prepend(o), o.append(n.mobileNav);
        var c = n.mobileNav.find("li");
        t(c).each(function () {
            var e = t(this), i = {};
            if (i.children = e.children("ul").attr("role", "menu"), e.data("menu", i), i.children.length > 0) {
                var o = e.contents(), s = !1, l = [];
                t(o).each(function () {
                    return !t(this).is("ul") && (l.push(this), void (t(this).is("a") && (s = !0)))
                });
                var c = t("<" + a.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + r + '_item"/>');
                a.allowParentLinks && !a.nestedParentLinks && s ? t(l).wrapAll('<span class="' + r + "_parent-link " + r + '_row"/>').parent() : t(l).wrapAll(c).parent().addClass(r + "_row"), a.showChildren ? e.addClass(r + "_open") : e.addClass(r + "_collapsed"), e.addClass(r + "_parent");
                var h = t('<span class="' + r + '_arrow">' + (a.showChildren ? a.openedSymbol : a.closedSymbol) + "</span>");
                a.allowParentLinks && !a.nestedParentLinks && s && (h = h.wrap(c).parent()), t(l).last().after(h)
            } else 0 === e.children().length && e.addClass(r + "_txtnode");
            e.children("a").attr("role", "menuitem").click(function (e) {
                a.closeOnClick && !t(e.target).parent().closest("li").hasClass(r + "_parent") && t(n.btn).click()
            }), a.closeOnClick && a.allowParentLinks && (e.children("a").children("a").click(function (e) {
                t(n.btn).click()
            }), e.find("." + r + "_parent-link a:not(." + r + "_item)").click(function (e) {
                t(n.btn).click()
            }))
        }), t(c).each(function () {
            var e = t(this).data("menu");
            a.showChildren || n._visibilityToggle(e.children, null, !1, null, !0)
        }), n._visibilityToggle(n.mobileNav, null, !1, "init", !0), n.mobileNav.attr("role", "menu"), t(e).mousedown(function () {
            n._outlines(!1)
        }), t(e).keyup(function () {
            n._outlines(!0)
        }), t(n.btn).click(function (t) {
            t.preventDefault(), n._menuToggle()
        }), n.mobileNav.on("click", "." + r + "_item", function (e) {
            e.preventDefault(), n._itemClick(t(this))
        }), t(n.btn).keydown(function (e) {
            var i = e || event;
            switch (i.keyCode) {
                case 13:
                case 32:
                case 40:
                    e.preventDefault(), 40 === i.keyCode && t(n.btn).hasClass(r + "_open") || n._menuToggle(), t(n.btn).next().find('[role="menuitem"]').first().focus()
            }
        }), n.mobileNav.on("keydown", "." + r + "_item", function (e) {
            switch ((e || event).keyCode) {
                case 13:
                    e.preventDefault(), n._itemClick(t(e.target));
                    break;
                case 39:
                    e.preventDefault(), t(e.target).parent().hasClass(r + "_collapsed") && n._itemClick(t(e.target)), t(e.target).next().find('[role="menuitem"]').first().focus()
            }
        }), n.mobileNav.on("keydown", '[role="menuitem"]', function (e) {
            switch ((e || event).keyCode) {
                case 40:
                    e.preventDefault();
                    var i = (s = (o = t(e.target).parent().parent().children().children('[role="menuitem"]:visible')).index(e.target)) + 1;
                    o.length <= i && (i = 0), o.eq(i).focus();
                    break;
                case 38:
                    e.preventDefault();
                    var o,
                        s = (o = t(e.target).parent().parent().children().children('[role="menuitem"]:visible')).index(e.target);
                    o.eq(s - 1).focus();
                    break;
                case 37:
                    if (e.preventDefault(), t(e.target).parent().parent().parent().hasClass(r + "_open")) {
                        var a = t(e.target).parent().parent().prev();
                        a.focus(), n._itemClick(a)
                    } else t(e.target).parent().parent().hasClass(r + "_nav") && (n._menuToggle(), t(n.btn).focus());
                    break;
                case 27:
                    e.preventDefault(), n._menuToggle(), t(n.btn).focus()
            }
        }), a.allowParentLinks && a.nestedParentLinks && t("." + r + "_item a").click(function (t) {
            t.stopImmediatePropagation()
        })
    }, o.prototype._menuToggle = function (t) {
        var e = this.btn, i = this.mobileNav;
        e.hasClass(r + "_collapsed") ? (e.removeClass(r + "_collapsed"), e.addClass(r + "_open")) : (e.removeClass(r + "_open"), e.addClass(r + "_collapsed")), e.addClass(r + "_animating"), this._visibilityToggle(i, e.parent(), !0, e)
    }, o.prototype._itemClick = function (t) {
        var e = this.settings, i = t.data("menu");
        i || ((i = {}).arrow = t.children("." + r + "_arrow"), i.ul = t.next("ul"), i.parent = t.parent(), i.parent.hasClass(r + "_parent-link") && (i.parent = t.parent().parent(), i.ul = t.parent().next("ul")), t.data("menu", i)), i.parent.hasClass(r + "_collapsed") ? (i.arrow.html(e.openedSymbol), i.parent.removeClass(r + "_collapsed"), i.parent.addClass(r + "_open"), i.parent.addClass(r + "_animating"), this._visibilityToggle(i.ul, i.parent, !0, t)) : (i.arrow.html(e.closedSymbol), i.parent.addClass(r + "_collapsed"), i.parent.removeClass(r + "_open"), i.parent.addClass(r + "_animating"), this._visibilityToggle(i.ul, i.parent, !0, t))
    }, o.prototype._visibilityToggle = function (e, i, o, n, s) {
        function a(e, i) {
            t(e).removeClass(r + "_animating"), t(i).removeClass(r + "_animating"), s || h.afterOpen(e)
        }

        function l(i, o) {
            e.attr("aria-hidden", "true"), d.attr("tabindex", "-1"), c._setVisAttr(e, !0), e.hide(), t(i).removeClass(r + "_animating"), t(o).removeClass(r + "_animating"), s ? "init" == i && h.init() : h.afterClose(i)
        }

        var c = this, h = c.settings, d = c._getActionItems(e), u = 0;
        o && (u = h.duration), e.hasClass(r + "_hidden") ? (e.removeClass(r + "_hidden"), s || h.beforeOpen(n), "jquery" === h.animations ? e.stop(!0, !0).slideDown(u, h.easingOpen, function () {
            a(n, i)
        }) : "velocity" === h.animations && e.velocity("finish").velocity("slideDown", {
            duration: u,
            easing: h.easingOpen,
            complete: function () {
                a(n, i)
            }
        }), e.attr("aria-hidden", "false"), d.attr("tabindex", "0"), c._setVisAttr(e, !1)) : (e.addClass(r + "_hidden"), s || h.beforeClose(n), "jquery" === h.animations ? e.stop(!0, !0).slideUp(u, this.settings.easingClose, function () {
            l(n, i)
        }) : "velocity" === h.animations && e.velocity("finish").velocity("slideUp", {
            duration: u,
            easing: h.easingClose,
            complete: function () {
                l(n, i)
            }
        }))
    }, o.prototype._setVisAttr = function (e, i) {
        var o = this, n = e.children("li").children("ul").not("." + r + "_hidden");
        i ? n.each(function () {
            var e = t(this);
            e.attr("aria-hidden", "true"), o._getActionItems(e).attr("tabindex", "-1"), o._setVisAttr(e, i)
        }) : n.each(function () {
            var e = t(this);
            e.attr("aria-hidden", "false"), o._getActionItems(e).attr("tabindex", "0"), o._setVisAttr(e, i)
        })
    }, o.prototype._getActionItems = function (t) {
        var e = t.data("menu");
        if (!e) {
            e = {};
            var i = t.children("li"), o = i.find("a");
            e.links = o.add(i.find("." + r + "_item")), t.data("menu", e)
        }
        return e.links
    }, o.prototype._outlines = function (e) {
        e ? t("." + r + "_item, ." + r + "_btn").css("outline", "") : t("." + r + "_item, ." + r + "_btn").css("outline", "none")
    }, o.prototype.toggle = function () {
        this._menuToggle()
    }, o.prototype.open = function () {
        this.btn.hasClass(r + "_collapsed") && this._menuToggle()
    }, o.prototype.close = function () {
        this.btn.hasClass(r + "_open") && this._menuToggle()
    }, t.fn[s] = function (e) {
        var i, n = arguments;
        return void 0 === e || "object" == typeof e ? this.each(function () {
            t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new o(this, e))
        }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? (this.each(function () {
            var r = t.data(this, "plugin_" + s);
            r instanceof o && "function" == typeof r[e] && (i = r[e].apply(r, Array.prototype.slice.call(n, 1)))
        }), void 0 !== i ? i : this) : void 0
    }
}(jQuery, document, window), function (t) {
    "use strict";
    t.fn.placeholderTypewriter = function (e) {
        var i = t.extend({delay: 50, pause: 1e3, text: []}, e);
        return this.each(function () {
            !function t(e, o) {
                e.attr("placeholder", ""), function t(e, o, n, s) {
                    var r = i.text[o], a = e.attr("placeholder");
                    return e.attr("placeholder", a + r[n]), n < r.length - 1 ? (setTimeout(function () {
                        t(e, o, n + 1, s)
                    }, i.delay), !0) : void s()
                }(e, o, 0, function () {
                    setTimeout(function () {
                        !function t(e, o) {
                            var n = e.attr("placeholder"), s = n.length;
                            return e.attr("placeholder", n.substr(0, s - 1)), s > 1 ? (setTimeout(function () {
                                t(e, o)
                            }, i.delay), !0) : void o()
                        }(e, function () {
                            t(e, (o + 1) % i.text.length)
                        })
                    }, i.pause)
                })
            }(t(this), 0)
        })
    }
}(jQuery), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function (t) {
    var e = function () {
        if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var e = t.fn.select2.amd;
        var i, o, n, s;
        return e && e.requirejs || (e ? n = e : e = {}, function (t) {
            function e(t, e) {
                return y.call(t, e)
            }

            function i(t, e) {
                var i, o, n, s, r, a, l, c, h, d, u, p = e && e.split("/"), f = g.map, m = f && f["*"] || {};
                if (t && "." === t.charAt(0)) if (e) {
                    for (r = (t = t.split("/")).length - 1, g.nodeIdCompat && b.test(t[r]) && (t[r] = t[r].replace(b, "")), t = p.slice(0, p.length - 1).concat(t), h = 0; h < t.length; h += 1) if (u = t[h], "." === u) t.splice(h, 1), h -= 1; else if (".." === u) {
                        if (1 === h && (".." === t[2] || ".." === t[0])) break;
                        h > 0 && (t.splice(h - 1, 2), h -= 2)
                    }
                    t = t.join("/")
                } else 0 === t.indexOf("./") && (t = t.substring(2));
                if ((p || m) && f) {
                    for (h = (i = t.split("/")).length; h > 0; h -= 1) {
                        if (o = i.slice(0, h).join("/"), p) for (d = p.length; d > 0; d -= 1) if (n = f[p.slice(0, d).join("/")], n && (n = n[o])) {
                            s = n, a = h;
                            break
                        }
                        if (s) break;
                        !l && m && m[o] && (l = m[o], c = h)
                    }
                    !s && l && (s = l, a = c), s && (i.splice(0, a, s), t = i.join("/"))
                }
                return t
            }

            function r(e, i) {
                return function () {
                    var o = w.call(arguments, 0);
                    return "string" != typeof o[0] && 1 === o.length && o.push(null), d.apply(t, o.concat([e, i]))
                }
            }

            function a(t) {
                return function (e) {
                    f[t] = e
                }
            }

            function l(i) {
                if (e(m, i)) {
                    var o = m[i];
                    delete m[i], v[i] = !0, h.apply(t, o)
                }
                if (!e(f, i) && !e(v, i)) throw new Error("No " + i);
                return f[i]
            }

            function c(t) {
                var e, i = t ? t.indexOf("!") : -1;
                return i > -1 && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t]
            }

            var h, d, u, p, f = {}, m = {}, g = {}, v = {}, y = Object.prototype.hasOwnProperty, w = [].slice,
                b = /\.js$/;
            u = function (t, e) {
                var o, n, s = c(t), r = s[0];
                return t = s[1], r && (o = l(r = i(r, e))), r ? t = o && o.normalize ? o.normalize(t, (n = e, function (t) {
                    return i(t, n)
                })) : i(t, e) : (r = (s = c(t = i(t, e)))[0], t = s[1], r && (o = l(r))), {
                    f: r ? r + "!" + t : t,
                    n: t,
                    pr: r,
                    p: o
                }
            }, p = {
                require: function (t) {
                    return r(t)
                }, exports: function (t) {
                    var e = f[t];
                    return void 0 !== e ? e : f[t] = {}
                }, module: function (t) {
                    return {
                        id: t, uri: "", exports: f[t], config: (e = t, function () {
                            return g && g.config && g.config[e] || {}
                        })
                    };
                    var e
                }
            }, h = function (i, o, n, s) {
                var c, h, d, g, y, w, b = [], x = typeof n;
                if (s = s || i, "undefined" === x || "function" === x) {
                    for (o = !o.length && n.length ? ["require", "exports", "module"] : o, y = 0; y < o.length; y += 1) if (g = u(o[y], s), h = g.f, "require" === h) b[y] = p.require(i); else if ("exports" === h) b[y] = p.exports(i), w = !0; else if ("module" === h) c = b[y] = p.module(i); else if (e(f, h) || e(m, h) || e(v, h)) b[y] = l(h); else {
                        if (!g.p) throw new Error(i + " missing " + h);
                        g.p.load(g.n, r(s, !0), a(h), {}), b[y] = f[h]
                    }
                    d = n ? n.apply(f[i], b) : void 0, i && (c && c.exports !== t && c.exports !== f[i] ? f[i] = c.exports : d === t && w || (f[i] = d))
                } else i && (f[i] = n)
            }, o = n = d = function (e, i, o, n, s) {
                if ("string" == typeof e) return p[e] ? p[e](i) : l(u(e, i).f);
                if (!e.splice) {
                    if ((g = e).deps && d(g.deps, g.callback), !i) return;
                    i.splice ? (e = i, i = o, o = null) : e = t
                }
                return i = i || function () {
                }, "function" == typeof o && (o = n, n = s), n ? h(t, e, i, o) : setTimeout(function () {
                    h(t, e, i, o)
                }, 4), d
            }, d.config = function (t) {
                return d(t)
            }, o._defined = f, (s = function (t, i, o) {
                if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                i.splice || (o = i, i = []), e(f, t) || e(m, t) || (m[t] = [t, i, o])
            }).amd = {jQuery: !0}
        }(), e.requirejs = o, e.require = n, e.define = s), e.define("almond", function () {
        }), e.define("jquery", [], function () {
            var e = t || $;
            return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
        }), e.define("select2/utils", ["jquery"], function (t) {
            function e(t) {
                var e = t.prototype, i = [];
                for (var o in e) "function" == typeof e[o] && "constructor" !== o && i.push(o);
                return i
            }

            var i = {
                Extend: function (t, e) {
                    function i() {
                        this.constructor = t
                    }

                    var o = {}.hasOwnProperty;
                    for (var n in e) o.call(e, n) && (t[n] = e[n]);
                    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
                }, Decorate: function (t, i) {
                    function o() {
                        var e = Array.prototype.unshift, o = i.prototype.constructor.length,
                            n = t.prototype.constructor;
                        o > 0 && (e.call(arguments, t.prototype.constructor), n = i.prototype.constructor), n.apply(this, arguments)
                    }

                    var n = e(i), s = e(t);
                    i.displayName = t.displayName, o.prototype = new function () {
                        this.constructor = o
                    };
                    for (var r = 0; r < s.length; r++) {
                        var a = s[r];
                        o.prototype[a] = t.prototype[a]
                    }
                    for (var l = function (t) {
                        var e = function () {
                        };
                        t in o.prototype && (e = o.prototype[t]);
                        var n = i.prototype[t];
                        return function () {
                            return Array.prototype.unshift.call(arguments, e), n.apply(this, arguments)
                        }
                    }, c = 0; c < n.length; c++) {
                        var h = n[c];
                        o.prototype[h] = l(h)
                    }
                    return o
                }
            }, o = function () {
                this.listeners = {}
            };
            return o.prototype.on = function (t, e) {
                this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
            }, o.prototype.trigger = function (t) {
                var e = Array.prototype.slice, i = e.call(arguments, 1);
                this.listeners = this.listeners || {}, null == i && (i = []), 0 === i.length && i.push({}), i[0]._type = t, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, o.prototype.invoke = function (t, e) {
                for (var i = 0, o = t.length; o > i; i++) t[i].apply(this, e)
            }, i.Observable = o, i.generateChars = function (t) {
                for (var e = "", i = 0; t > i; i++) e += Math.floor(36 * Math.random()).toString(36);
                return e
            }, i.bind = function (t, e) {
                return function () {
                    t.apply(e, arguments)
                }
            }, i._convertData = function (t) {
                for (var e in t) {
                    var i = e.split("-"), o = t;
                    if (1 !== i.length) {
                        for (var n = 0; n < i.length; n++) {
                            var s = i[n];
                            (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in o || (o[s] = {}), n == i.length - 1 && (o[s] = t[e]), o = o[s]
                        }
                        delete t[e]
                    }
                }
                return t
            }, i.hasScroll = function (e, i) {
                var o = t(i), n = i.style.overflowX, s = i.style.overflowY;
                return (n !== s || "hidden" !== s && "visible" !== s) && ("scroll" === n || "scroll" === s || o.innerHeight() < i.scrollHeight || o.innerWidth() < i.scrollWidth)
            }, i.escapeMarkup = function (t) {
                var e = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function (t) {
                    return e[t]
                })
            }, i.appendMany = function (e, i) {
                if ("1.7" === t.fn.jquery.substr(0, 3)) {
                    var o = t();
                    t.map(i, function (t) {
                        o = o.add(t)
                    }), i = o
                }
                e.append(i)
            }, i
        }), e.define("select2/results", ["jquery", "./utils"], function (t, e) {
            function i(t, e, o) {
                this.$element = t, this.data = o, this.options = e, i.__super__.constructor.call(this)
            }

            return e.Extend(i, e.Observable), i.prototype.render = function () {
                var e = t('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e
            }, i.prototype.clear = function () {
                this.$results.empty()
            }, i.prototype.displayMessage = function (e) {
                var i = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var o = t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                    n = this.options.get("translations").get(e.message);
                o.append(i(n(e.args))), o[0].className += " select2-results__message", this.$results.append(o)
            }, i.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove()
            }, i.prototype.append = function (t) {
                this.hideLoading();
                var e = [];
                if (null != t.results && 0 !== t.results.length) {
                    t.results = this.sort(t.results);
                    for (var i = 0; i < t.results.length; i++) {
                        var o = t.results[i], n = this.option(o);
                        e.push(n)
                    }
                    this.$results.append(e)
                } else 0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"})
            }, i.prototype.position = function (t, e) {
                e.find(".select2-results").append(t)
            }, i.prototype.sort = function (t) {
                return this.options.get("sorter")(t)
            }, i.prototype.highlightFirstItem = function () {
                var t = this.$results.find(".select2-results__option[aria-selected]"),
                    e = t.filter("[aria-selected=true]");
                e.length > 0 ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible()
            }, i.prototype.setClasses = function () {
                var e = this;
                this.data.current(function (i) {
                    var o = t.map(i, function (t) {
                        return t.id.toString()
                    });
                    e.$results.find(".select2-results__option[aria-selected]").each(function () {
                        var e = t(this), i = t.data(this, "data"), n = "" + i.id;
                        null != i.element && i.element.selected || null == i.element && t.inArray(n, o) > -1 ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                    })
                })
            }, i.prototype.showLoading = function (t) {
                this.hideLoading();
                var e = {disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(t)},
                    i = this.option(e);
                i.className += " loading-results", this.$results.prepend(i)
            }, i.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, i.prototype.option = function (e) {
                var i = document.createElement("li");
                i.className = "select2-results__option";
                var o = {role: "treeitem", "aria-selected": "false"};
                e.disabled && (delete o["aria-selected"], o["aria-disabled"] = "true"), null == e.id && delete o["aria-selected"], null != e._resultId && (i.id = e._resultId), e.title && (i.title = e.title), e.children && (o.role = "group", o["aria-label"] = e.text, delete o["aria-selected"]);
                for (var n in o) {
                    var s = o[n];
                    i.setAttribute(n, s)
                }
                if (e.children) {
                    var r = t(i), a = document.createElement("strong");
                    a.className = "select2-results__group", t(a), this.template(e, a);
                    for (var l = [], c = 0; c < e.children.length; c++) {
                        var h = e.children[c], d = this.option(h);
                        l.push(d)
                    }
                    var u = t("<ul></ul>", {class: "select2-results__options select2-results__options--nested"});
                    u.append(l), r.append(a), r.append(u)
                } else this.template(e, i);
                return t.data(i, "data", e), i
            }, i.prototype.bind = function (e, i) {
                var o = this, n = e.id + "-results";
                this.$results.attr("id", n), e.on("results:all", function (t) {
                    o.clear(), o.append(t.data), e.isOpen() && (o.setClasses(), o.highlightFirstItem())
                }), e.on("results:append", function (t) {
                    o.append(t.data), e.isOpen() && o.setClasses()
                }), e.on("query", function (t) {
                    o.hideMessages(), o.showLoading(t)
                }), e.on("select", function () {
                    e.isOpen() && (o.setClasses(), o.highlightFirstItem())
                }), e.on("unselect", function () {
                    e.isOpen() && (o.setClasses(), o.highlightFirstItem())
                }), e.on("open", function () {
                    o.$results.attr("aria-expanded", "true"), o.$results.attr("aria-hidden", "false"), o.setClasses(), o.ensureHighlightVisible()
                }), e.on("close", function () {
                    o.$results.attr("aria-expanded", "false"), o.$results.attr("aria-hidden", "true"), o.$results.removeAttr("aria-activedescendant")
                }), e.on("results:toggle", function () {
                    var t = o.getHighlightedResults();
                    0 !== t.length && t.trigger("mouseup")
                }), e.on("results:select", function () {
                    var t = o.getHighlightedResults();
                    if (0 !== t.length) {
                        var e = t.data("data");
                        "true" == t.attr("aria-selected") ? o.trigger("close", {}) : o.trigger("select", {data: e})
                    }
                }), e.on("results:previous", function () {
                    var t = o.getHighlightedResults(), e = o.$results.find("[aria-selected]"), i = e.index(t);
                    if (0 !== i) {
                        var n = i - 1;
                        0 === t.length && (n = 0);
                        var s = e.eq(n);
                        s.trigger("mouseenter");
                        var r = o.$results.offset().top, a = s.offset().top, l = o.$results.scrollTop() + (a - r);
                        0 === n ? o.$results.scrollTop(0) : 0 > a - r && o.$results.scrollTop(l)
                    }
                }), e.on("results:next", function () {
                    var t = o.getHighlightedResults(), e = o.$results.find("[aria-selected]"), i = e.index(t) + 1;
                    if (!(i >= e.length)) {
                        var n = e.eq(i);
                        n.trigger("mouseenter");
                        var s = o.$results.offset().top + o.$results.outerHeight(!1),
                            r = n.offset().top + n.outerHeight(!1), a = o.$results.scrollTop() + r - s;
                        0 === i ? o.$results.scrollTop(0) : r > s && o.$results.scrollTop(a)
                    }
                }), e.on("results:focus", function (t) {
                    t.element.addClass("select2-results__option--highlighted")
                }), e.on("results:message", function (t) {
                    o.displayMessage(t)
                }), t.fn.mousewheel && this.$results.on("mousewheel", function (t) {
                    var e = o.$results.scrollTop(), i = o.$results.get(0).scrollHeight - e + t.deltaY,
                        n = t.deltaY > 0 && e - t.deltaY <= 0, s = t.deltaY < 0 && i <= o.$results.height();
                    n ? (o.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : s && (o.$results.scrollTop(o.$results.get(0).scrollHeight - o.$results.height()), t.preventDefault(), t.stopPropagation())
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (e) {
                    var i = t(this), n = i.data("data");
                    return "true" === i.attr("aria-selected") ? void (o.options.get("multiple") ? o.trigger("unselect", {
                        originalEvent: e,
                        data: n
                    }) : o.trigger("close", {})) : void o.trigger("select", {originalEvent: e, data: n})
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (e) {
                    var i = t(this).data("data");
                    o.getHighlightedResults().removeClass("select2-results__option--highlighted"), o.trigger("results:focus", {
                        data: i,
                        element: t(this)
                    })
                })
            }, i.prototype.getHighlightedResults = function () {
                return this.$results.find(".select2-results__option--highlighted")
            }, i.prototype.destroy = function () {
                this.$results.remove()
            }, i.prototype.ensureHighlightVisible = function () {
                var t = this.getHighlightedResults();
                if (0 !== t.length) {
                    var e = this.$results.find("[aria-selected]").index(t), i = this.$results.offset().top,
                        o = t.offset().top, n = this.$results.scrollTop() + (o - i), s = o - i;
                    n -= 2 * t.outerHeight(!1), 2 >= e ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || 0 > s) && this.$results.scrollTop(n)
                }
            }, i.prototype.template = function (e, i) {
                var o = this.options.get("templateResult"), n = this.options.get("escapeMarkup"), s = o(e, i);
                null == s ? i.style.display = "none" : "string" == typeof s ? i.innerHTML = n(s) : t(i).append(s)
            }, i
        }), e.define("select2/keys", [], function () {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (t, e, i) {
            function o(t, e) {
                this.$element = t, this.options = e, o.__super__.constructor.call(this)
            }

            return e.Extend(o, e.Observable), o.prototype.render = function () {
                var e = t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e, e
            }, o.prototype.bind = function (t, e) {
                var o = this, n = (t.id, t.id + "-results");
                this.container = t, this.$selection.on("focus", function (t) {
                    o.trigger("focus", t)
                }), this.$selection.on("blur", function (t) {
                    o._handleBlur(t)
                }), this.$selection.on("keydown", function (t) {
                    o.trigger("keypress", t), t.which === i.SPACE && t.preventDefault()
                }), t.on("results:focus", function (t) {
                    o.$selection.attr("aria-activedescendant", t.data._resultId)
                }), t.on("selection:update", function (t) {
                    o.update(t.data)
                }), t.on("open", function () {
                    o.$selection.attr("aria-expanded", "true"), o.$selection.attr("aria-owns", n), o._attachCloseHandler(t)
                }), t.on("close", function () {
                    o.$selection.attr("aria-expanded", "false"), o.$selection.removeAttr("aria-activedescendant"), o.$selection.removeAttr("aria-owns"), o.$selection.focus(), o._detachCloseHandler(t)
                }), t.on("enable", function () {
                    o.$selection.attr("tabindex", o._tabindex)
                }), t.on("disable", function () {
                    o.$selection.attr("tabindex", "-1")
                })
            }, o.prototype._handleBlur = function (e) {
                var i = this;
                window.setTimeout(function () {
                    document.activeElement == i.$selection[0] || t.contains(i.$selection[0], document.activeElement) || i.trigger("blur", e)
                }, 1)
            }, o.prototype._attachCloseHandler = function (e) {
                t(document.body).on("mousedown.select2." + e.id, function (e) {
                    var i = t(e.target).closest(".select2");
                    t(".select2.select2-container--open").each(function () {
                        var e = t(this);
                        this != i[0] && e.data("element").select2("close")
                    })
                })
            }, o.prototype._detachCloseHandler = function (e) {
                t(document.body).off("mousedown.select2." + e.id)
            }, o.prototype.position = function (t, e) {
                e.find(".selection").append(t)
            }, o.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, o.prototype.update = function (t) {
                throw new Error("The `update` method must be defined in child classes.")
            }, o
        }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (t, e, i, o) {
            function n() {
                n.__super__.constructor.apply(this, arguments)
            }

            return i.Extend(n, e), n.prototype.render = function () {
                var t = n.__super__.render.call(this);
                return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
            }, n.prototype.bind = function (t, e) {
                var i = this;
                n.__super__.bind.apply(this, arguments);
                var o = t.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", o), this.$selection.attr("aria-labelledby", o), this.$selection.on("mousedown", function (t) {
                    1 === t.which && i.trigger("toggle", {originalEvent: t})
                }), this.$selection.on("focus", function (t) {
                }), this.$selection.on("blur", function (t) {
                }), t.on("focus", function (e) {
                    t.isOpen() || i.$selection.focus()
                }), t.on("selection:update", function (t) {
                    i.update(t.data)
                })
            }, n.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, n.prototype.display = function (t, e) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(t, e))
            }, n.prototype.selectionContainer = function () {
                return t("<span></span>")
            }, n.prototype.update = function (t) {
                if (0 !== t.length) {
                    var e = t[0], i = this.$selection.find(".select2-selection__rendered"), o = this.display(e, i);
                    i.empty().append(o), i.prop("title", e.title || e.text)
                } else this.clear()
            }, n
        }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (t, e, i) {
            function o(t, e) {
                o.__super__.constructor.apply(this, arguments)
            }

            return i.Extend(o, e), o.prototype.render = function () {
                var t = o.__super__.render.call(this);
                return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
            }, o.prototype.bind = function (e, i) {
                var n = this;
                o.__super__.bind.apply(this, arguments), this.$selection.on("click", function (t) {
                    n.trigger("toggle", {originalEvent: t})
                }), this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
                    if (!n.options.get("disabled")) {
                        var i = t(this).parent().data("data");
                        n.trigger("unselect", {originalEvent: e, data: i})
                    }
                })
            }, o.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, o.prototype.display = function (t, e) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(t, e))
            }, o.prototype.selectionContainer = function () {
                return t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
            }, o.prototype.update = function (t) {
                if (this.clear(), 0 !== t.length) {
                    for (var e = [], o = 0; o < t.length; o++) {
                        var n = t[o], s = this.selectionContainer(), r = this.display(n, s);
                        s.append(r), s.prop("title", n.title || n.text), s.data("data", n), e.push(s)
                    }
                    var a = this.$selection.find(".select2-selection__rendered");
                    i.appendMany(a, e)
                }
            }, o
        }), e.define("select2/selection/placeholder", ["../utils"], function (t) {
            function e(t, e, i) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i)
            }

            return e.prototype.normalizePlaceholder = function (t, e) {
                return "string" == typeof e && (e = {id: "", text: e}), e
            }, e.prototype.createPlaceholder = function (t, e) {
                var i = this.selectionContainer();
                return i.html(this.display(e)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i
            }, e.prototype.update = function (t, e) {
                var i = 1 == e.length && e[0].id != this.placeholder.id;
                if (e.length > 1 || i) return t.call(this, e);
                this.clear();
                var o = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(o)
            }, e
        }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function (t, e) {
            function i() {
            }

            return i.prototype.bind = function (t, e, i) {
                var o = this;
                t.call(this, e, i), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (t) {
                    o._handleClear(t)
                }), e.on("keypress", function (t) {
                    o._handleKeyboardClear(t, e)
                })
            }, i.prototype._handleClear = function (t, e) {
                if (!this.options.get("disabled")) {
                    var i = this.$selection.find(".select2-selection__clear");
                    if (0 !== i.length) {
                        e.stopPropagation();
                        for (var o = i.data("data"), n = 0; n < o.length; n++) {
                            var s = {data: o[n]};
                            if (this.trigger("unselect", s), s.prevented) return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                    }
                }
            }, i.prototype._handleKeyboardClear = function (t, i, o) {
                o.isOpen() || (i.which == e.DELETE || i.which == e.BACKSPACE) && this._handleClear(i)
            }, i.prototype.update = function (e, i) {
                if (e.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                    var o = t('<span class="select2-selection__clear">&times;</span>');
                    o.data("data", i), this.$selection.find(".select2-selection__rendered").prepend(o)
                }
            }, i
        }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (t, e, i) {
            function o(t, e, i) {
                t.call(this, e, i)
            }

            return o.prototype.render = function (e) {
                var i = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = i, this.$search = i.find("input");
                var o = e.call(this);
                return this._transferTabIndex(), o
            }, o.prototype.bind = function (t, e, o) {
                var n = this;
                t.call(this, e, o), e.on("open", function () {
                    n.$search.trigger("focus")
                }), e.on("close", function () {
                    n.$search.val(""), n.$search.removeAttr("aria-activedescendant"), n.$search.trigger("focus")
                }), e.on("enable", function () {
                    n.$search.prop("disabled", !1), n._transferTabIndex()
                }), e.on("disable", function () {
                    n.$search.prop("disabled", !0)
                }), e.on("focus", function (t) {
                    n.$search.trigger("focus")
                }), e.on("results:focus", function (t) {
                    n.$search.attr("aria-activedescendant", t.id)
                }), this.$selection.on("focusin", ".select2-search--inline", function (t) {
                    n.trigger("focus", t)
                }), this.$selection.on("focusout", ".select2-search--inline", function (t) {
                    n._handleBlur(t)
                }), this.$selection.on("keydown", ".select2-search--inline", function (t) {
                    if (t.stopPropagation(), n.trigger("keypress", t), n._keyUpPrevented = t.isDefaultPrevented(), t.which === i.BACKSPACE && "" === n.$search.val()) {
                        var e = n.$searchContainer.prev(".select2-selection__choice");
                        if (e.length > 0) {
                            var o = e.data("data");
                            n.searchRemoveChoice(o), t.preventDefault()
                        }
                    }
                });
                var s = document.documentMode, r = s && 11 >= s;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function (t) {
                    return r ? void n.$selection.off("input.search input.searchcheck") : void n.$selection.off("keyup.search")
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (t) {
                    if (r && "input" === t.type) n.$selection.off("input.search input.searchcheck"); else {
                        var e = t.which;
                        e != i.SHIFT && e != i.CTRL && e != i.ALT && e != i.TAB && n.handleSearch(t)
                    }
                })
            }, o.prototype._transferTabIndex = function (t) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
            }, o.prototype.createPlaceholder = function (t, e) {
                this.$search.attr("placeholder", e.text)
            }, o.prototype.update = function (t, e) {
                var i = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), i && this.$search.focus()
            }, o.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {term: t})
                }
                this._keyUpPrevented = !1
            }, o.prototype.searchRemoveChoice = function (t, e) {
                this.trigger("unselect", {data: e}), this.$search.val(e.text), this.handleSearch()
            }, o.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var t = "";
                t = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", t)
            }, o
        }), e.define("select2/selection/eventRelay", ["jquery"], function (t) {
            function e() {
            }

            return e.prototype.bind = function (e, i, o) {
                var n = this,
                    s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                    r = ["opening", "closing", "selecting", "unselecting"];
                e.call(this, i, o), i.on("*", function (e, i) {
                    if (-1 !== t.inArray(e, s)) {
                        i = i || {};
                        var o = t.Event("select2:" + e, {params: i});
                        n.$element.trigger(o), -1 !== t.inArray(e, r) && (i.prevented = o.isDefaultPrevented())
                    }
                })
            }, e
        }), e.define("select2/translation", ["jquery", "require"], function (t, e) {
            function i(t) {
                this.dict = t || {}
            }

            return i.prototype.all = function () {
                return this.dict
            }, i.prototype.get = function (t) {
                return this.dict[t]
            }, i.prototype.extend = function (e) {
                this.dict = t.extend({}, e.all(), this.dict)
            }, i._cache = {}, i.loadPath = function (t) {
                if (!(t in i._cache)) {
                    var o = e(t);
                    i._cache[t] = o
                }
                return new i(i._cache[t])
            }, i
        }), e.define("select2/diacritics", [], function () {
            return {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            }
        }), e.define("select2/data/base", ["../utils"], function (t) {
            function e(t, i) {
                e.__super__.constructor.call(this)
            }

            return t.Extend(e, t.Observable), e.prototype.current = function (t) {
                throw new Error("The `current` method must be defined in child classes.")
            }, e.prototype.query = function (t, e) {
                throw new Error("The `query` method must be defined in child classes.")
            }, e.prototype.bind = function (t, e) {
            }, e.prototype.destroy = function () {
            }, e.prototype.generateResultId = function (e, i) {
                var o = e.id + "-result-";
                return (o += t.generateChars(4)) + (null != i.id ? "-" + i.id.toString() : "-" + t.generateChars(4))
            }, e
        }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function (t, e, i) {
            function o(t, e) {
                this.$element = t, this.options = e, o.__super__.constructor.call(this)
            }

            return e.Extend(o, t), o.prototype.current = function (t) {
                var e = [], o = this;
                this.$element.find(":selected").each(function () {
                    var t = i(this), n = o.item(t);
                    e.push(n)
                }), t(e)
            }, o.prototype.select = function (t) {
                var e = this;
                if (t.selected = !0, i(t.element).is("option")) return t.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function (o) {
                    var n = [];
                    (t = [t]).push.apply(t, o);
                    for (var s = 0; s < t.length; s++) {
                        var r = t[s].id;
                        -1 === i.inArray(r, n) && n.push(r)
                    }
                    e.$element.val(n), e.$element.trigger("change")
                }); else {
                    var o = t.id;
                    this.$element.val(o), this.$element.trigger("change")
                }
            }, o.prototype.unselect = function (t) {
                var e = this;
                if (this.$element.prop("multiple")) return t.selected = !1, i(t.element).is("option") ? (t.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (o) {
                    for (var n = [], s = 0; s < o.length; s++) {
                        var r = o[s].id;
                        r !== t.id && -1 === i.inArray(r, n) && n.push(r)
                    }
                    e.$element.val(n), e.$element.trigger("change")
                })
            }, o.prototype.bind = function (t, e) {
                var i = this;
                this.container = t, t.on("select", function (t) {
                    i.select(t.data)
                }), t.on("unselect", function (t) {
                    i.unselect(t.data)
                })
            }, o.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    i.removeData(this, "data")
                })
            }, o.prototype.query = function (t, e) {
                var o = [], n = this;
                this.$element.children().each(function () {
                    var e = i(this);
                    if (e.is("option") || e.is("optgroup")) {
                        var s = n.item(e), r = n.matches(t, s);
                        null !== r && o.push(r)
                    }
                }), e({results: o})
            }, o.prototype.addOptions = function (t) {
                e.appendMany(this.$element, t)
            }, o.prototype.option = function (t) {
                var e;
                t.children ? (e = document.createElement("optgroup")).label = t.text : void 0 !== (e = document.createElement("option")).textContent ? e.textContent = t.text : e.innerText = t.text, t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title);
                var o = i(e), n = this._normalizeItem(t);
                return n.element = e, i.data(e, "data", n), o
            }, o.prototype.item = function (t) {
                var e = {};
                if (null != (e = i.data(t[0], "data"))) return e;
                if (t.is("option")) e = {
                    id: t.val(),
                    text: t.text(),
                    disabled: t.prop("disabled"),
                    selected: t.prop("selected"),
                    title: t.prop("title")
                }; else if (t.is("optgroup")) {
                    e = {text: t.prop("label"), children: [], title: t.prop("title")};
                    for (var o = t.children("option"), n = [], s = 0; s < o.length; s++) {
                        var r = i(o[s]), a = this.item(r);
                        n.push(a)
                    }
                    e.children = n
                }
                return (e = this._normalizeItem(e)).element = t[0], i.data(t[0], "data", e), e
            }, o.prototype._normalizeItem = function (t) {
                return i.isPlainObject(t) || (t = {
                    id: t,
                    text: t
                }), null != (t = i.extend({}, {text: ""}, t)).id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), i.extend({}, {
                    selected: !1,
                    disabled: !1
                }, t)
            }, o.prototype.matches = function (t, e) {
                return this.options.get("matcher")(t, e)
            }, o
        }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function (t, e, i) {
            function o(t, e) {
                var i = e.get("data") || [];
                o.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(i))
            }

            return e.Extend(o, t), o.prototype.select = function (t) {
                var e = this.$element.find("option").filter(function (e, i) {
                    return i.value == t.id.toString()
                });
                0 === e.length && (e = this.option(t), this.addOptions(e)), o.__super__.select.call(this, t)
            }, o.prototype.convertToOptions = function (t) {
                function o(t) {
                    return function () {
                        return i(this).val() == t.id
                    }
                }

                for (var n = this, s = this.$element.find("option"), r = s.map(function () {
                    return n.item(i(this)).id
                }).get(), a = [], l = 0; l < t.length; l++) {
                    var c = this._normalizeItem(t[l]);
                    if (i.inArray(c.id, r) >= 0) {
                        var h = s.filter(o(c)), d = this.item(h), u = i.extend(!0, {}, c, d), p = this.option(u);
                        h.replaceWith(p)
                    } else {
                        var f = this.option(c);
                        if (c.children) {
                            var m = this.convertToOptions(c.children);
                            e.appendMany(f, m)
                        }
                        a.push(f)
                    }
                }
                return a
            }, o
        }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (t, e, i) {
            function o(t, e) {
                this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), o.__super__.constructor.call(this, t, e)
            }

            return e.Extend(o, t), o.prototype._applyDefaults = function (t) {
                var e = {
                    data: function (t) {
                        return i.extend({}, t, {q: t.term})
                    }, transport: function (t, e, o) {
                        var n = i.ajax(t);
                        return n.then(e), n.fail(o), n
                    }
                };
                return i.extend({}, e, t, !0)
            }, o.prototype.processResults = function (t) {
                return t
            }, o.prototype.query = function (t, e) {
                function o() {
                    var o = s.transport(s, function (o) {
                        var s = n.processResults(o, t);
                        n.options.get("debug") && window.console && console.error && (s && s.results && i.isArray(s.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), e(s)
                    }, function () {
                        o.status && "0" === o.status || n.trigger("results:message", {message: "errorLoading"})
                    });
                    n._request = o
                }

                var n = this;
                null != this._request && (i.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var s = i.extend({type: "GET"}, this.ajaxOptions);
                "function" == typeof s.url && (s.url = s.url.call(this.$element, t)), "function" == typeof s.data && (s.data = s.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(o, this.ajaxOptions.delay)) : o()
            }, o
        }), e.define("select2/data/tags", ["jquery"], function (t) {
            function e(e, i, o) {
                var n = o.get("tags"), s = o.get("createTag");
                void 0 !== s && (this.createTag = s);
                var r = o.get("insertTag");
                if (void 0 !== r && (this.insertTag = r), e.call(this, i, o), t.isArray(n)) for (var a = 0; a < n.length; a++) {
                    var l = n[a], c = this._normalizeItem(l), h = this.option(c);
                    this.$element.append(h)
                }
            }

            return e.prototype.query = function (t, e, i) {
                var o = this;
                return this._removeOldTags(), null == e.term || null != e.page ? void t.call(this, e, i) : void t.call(this, e, function t(n, s) {
                    for (var r = n.results, a = 0; a < r.length; a++) {
                        var l = r[a], c = null != l.children && !t({results: l.children}, !0);
                        if (l.text === e.term || c) return !s && (n.data = r, void i(n))
                    }
                    if (s) return !0;
                    var h = o.createTag(e);
                    if (null != h) {
                        var d = o.option(h);
                        d.attr("data-select2-tag", !0), o.addOptions([d]), o.insertTag(r, h)
                    }
                    n.results = r, i(n)
                })
            }, e.prototype.createTag = function (e, i) {
                var o = t.trim(i.term);
                return "" === o ? null : {id: o, text: o}
            }, e.prototype.insertTag = function (t, e, i) {
                e.unshift(i)
            }, e.prototype._removeOldTags = function (e) {
                (this._lastTag, this.$element.find("option[data-select2-tag]")).each(function () {
                    this.selected || t(this).remove()
                })
            }, e
        }), e.define("select2/data/tokenizer", ["jquery"], function (t) {
            function e(t, e, i) {
                var o = i.get("tokenizer");
                void 0 !== o && (this.tokenizer = o), t.call(this, e, i)
            }

            return e.prototype.bind = function (t, e, i) {
                t.call(this, e, i), this.$search = e.dropdown.$search || e.selection.$search || i.find(".select2-search__field")
            }, e.prototype.query = function (e, i, o) {
                var n = this;
                i.term = i.term || "";
                var s = this.tokenizer(i, this.options, function (e) {
                    var i, o = n._normalizeItem(e);
                    if (!n.$element.find("option").filter(function () {
                        return t(this).val() === o.id
                    }).length) {
                        var s = n.option(o);
                        s.attr("data-select2-tag", !0), n._removeOldTags(), n.addOptions([s])
                    }
                    i = o, n.trigger("select", {data: i})
                });
                s.term !== i.term && (this.$search.length && (this.$search.val(s.term), this.$search.focus()), i.term = s.term), e.call(this, i, o)
            }, e.prototype.tokenizer = function (e, i, o, n) {
                for (var s = o.get("tokenSeparators") || [], r = i.term, a = 0, l = this.createTag || function (t) {
                    return {id: t.term, text: t.term}
                }; a < r.length;) {
                    var c = r[a];
                    if (-1 !== t.inArray(c, s)) {
                        var h = r.substr(0, a), d = l(t.extend({}, i, {term: h}));
                        null != d ? (n(d), r = r.substr(a + 1) || "", a = 0) : a++
                    } else a++
                }
                return {term: r}
            }, e
        }), e.define("select2/data/minimumInputLength", [], function () {
            function t(t, e, i) {
                this.minimumInputLength = i.get("minimumInputLength"), t.call(this, e, i)
            }

            return t.prototype.query = function (t, e, i) {
                return e.term = e.term || "", e.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {minimum: this.minimumInputLength, input: e.term, params: e}
                }) : void t.call(this, e, i)
            }, t
        }), e.define("select2/data/maximumInputLength", [], function () {
            function t(t, e, i) {
                this.maximumInputLength = i.get("maximumInputLength"), t.call(this, e, i)
            }

            return t.prototype.query = function (t, e, i) {
                return e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {maximum: this.maximumInputLength, input: e.term, params: e}
                }) : void t.call(this, e, i)
            }, t
        }), e.define("select2/data/maximumSelectionLength", [], function () {
            function t(t, e, i) {
                this.maximumSelectionLength = i.get("maximumSelectionLength"), t.call(this, e, i)
            }

            return t.prototype.query = function (t, e, i) {
                var o = this;
                this.current(function (n) {
                    var s = null != n ? n.length : 0;
                    return o.maximumSelectionLength > 0 && s >= o.maximumSelectionLength ? void o.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: o.maximumSelectionLength}
                    }) : void t.call(o, e, i)
                })
            }, t
        }), e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
            function i(t, e) {
                this.$element = t, this.options = e, i.__super__.constructor.call(this)
            }

            return e.Extend(i, e.Observable), i.prototype.render = function () {
                var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e
            }, i.prototype.bind = function () {
            }, i.prototype.position = function (t, e) {
            }, i.prototype.destroy = function () {
                this.$dropdown.remove()
            }, i
        }), e.define("select2/dropdown/search", ["jquery", "../utils"], function (t, e) {
            function i() {
            }

            return i.prototype.render = function (e) {
                var i = e.call(this),
                    o = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = o, this.$search = o.find("input"), i.prepend(o), i
            }, i.prototype.bind = function (e, i, o) {
                var n = this;
                e.call(this, i, o), this.$search.on("keydown", function (t) {
                    n.trigger("keypress", t), n._keyUpPrevented = t.isDefaultPrevented()
                }), this.$search.on("input", function (e) {
                    t(this).off("keyup")
                }), this.$search.on("keyup input", function (t) {
                    n.handleSearch(t)
                }), i.on("open", function () {
                    n.$search.attr("tabindex", 0), n.$search.focus(), window.setTimeout(function () {
                        n.$search.focus()
                    }, 0)
                }), i.on("close", function () {
                    n.$search.attr("tabindex", -1), n.$search.val("")
                }), i.on("focus", function () {
                    i.isOpen() && n.$search.focus()
                }), i.on("results:all", function (t) {
                    null != t.query.term && "" !== t.query.term || (n.showSearch(t) ? n.$searchContainer.removeClass("select2-search--hide") : n.$searchContainer.addClass("select2-search--hide"))
                })
            }, i.prototype.handleSearch = function (t) {
                if (!this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {term: e})
                }
                this._keyUpPrevented = !1
            }, i.prototype.showSearch = function (t, e) {
                return !0
            }, i
        }), e.define("select2/dropdown/hidePlaceholder", [], function () {
            function t(t, e, i, o) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i, o)
            }

            return t.prototype.append = function (t, e) {
                e.results = this.removePlaceholder(e.results), t.call(this, e)
            }, t.prototype.normalizePlaceholder = function (t, e) {
                return "string" == typeof e && (e = {id: "", text: e}), e
            }, t.prototype.removePlaceholder = function (t, e) {
                for (var i = e.slice(0), o = e.length - 1; o >= 0; o--) {
                    var n = e[o];
                    this.placeholder.id === n.id && i.splice(o, 1)
                }
                return i
            }, t
        }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function (t) {
            function e(t, e, i, o) {
                this.lastParams = {}, t.call(this, e, i, o), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }

            return e.prototype.append = function (t, e) {
                this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
            }, e.prototype.bind = function (e, i, o) {
                var n = this;
                e.call(this, i, o), i.on("query", function (t) {
                    n.lastParams = t, n.loading = !0
                }), i.on("query:append", function (t) {
                    n.lastParams = t, n.loading = !0
                }), this.$results.on("scroll", function () {
                    var e = t.contains(document.documentElement, n.$loadingMore[0]);
                    !n.loading && e && n.$results.offset().top + n.$results.outerHeight(!1) + 50 >= n.$loadingMore.offset().top + n.$loadingMore.outerHeight(!1) && n.loadMore()
                })
            }, e.prototype.loadMore = function () {
                this.loading = !0;
                var e = t.extend({}, {page: 1}, this.lastParams);
                e.page++, this.trigger("query:append", e)
            }, e.prototype.showLoadingMore = function (t, e) {
                return e.pagination && e.pagination.more
            }, e.prototype.createLoadingMore = function () {
                var e = t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                    i = this.options.get("translations").get("loadingMore");
                return e.html(i(this.lastParams)), e
            }, e
        }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (t, e) {
            function i(e, i, o) {
                this.$dropdownParent = o.get("dropdownParent") || t(document.body), e.call(this, i, o)
            }

            return i.prototype.bind = function (t, e, i) {
                var o = this, n = !1;
                t.call(this, e, i), e.on("open", function () {
                    o._showDropdown(), o._attachPositioningHandler(e), n || (n = !0, e.on("results:all", function () {
                        o._positionDropdown(), o._resizeDropdown()
                    }), e.on("results:append", function () {
                        o._positionDropdown(), o._resizeDropdown()
                    }))
                }), e.on("close", function () {
                    o._hideDropdown(), o._detachPositioningHandler(e)
                }), this.$dropdownContainer.on("mousedown", function (t) {
                    t.stopPropagation()
                })
            }, i.prototype.destroy = function (t) {
                t.call(this), this.$dropdownContainer.remove()
            }, i.prototype.position = function (t, e, i) {
                e.attr("class", i.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = i
            }, i.prototype.render = function (e) {
                var i = t("<span></span>"), o = e.call(this);
                return i.append(o), this.$dropdownContainer = i, i
            }, i.prototype._hideDropdown = function (t) {
                this.$dropdownContainer.detach()
            }, i.prototype._attachPositioningHandler = function (i, o) {
                var n = this, s = "scroll.select2." + o.id, r = "resize.select2." + o.id,
                    a = "orientationchange.select2." + o.id, l = this.$container.parents().filter(e.hasScroll);
                l.each(function () {
                    t(this).data("select2-scroll-position", {x: t(this).scrollLeft(), y: t(this).scrollTop()})
                }), l.on(s, function (e) {
                    var i = t(this).data("select2-scroll-position");
                    t(this).scrollTop(i.y)
                }), t(window).on(s + " " + r + " " + a, function (t) {
                    n._positionDropdown(), n._resizeDropdown()
                })
            }, i.prototype._detachPositioningHandler = function (i, o) {
                var n = "scroll.select2." + o.id, s = "resize.select2." + o.id, r = "orientationchange.select2." + o.id;
                this.$container.parents().filter(e.hasScroll).off(n), t(window).off(n + " " + s + " " + r)
            }, i.prototype._positionDropdown = function () {
                var e = t(window), i = this.$dropdown.hasClass("select2-dropdown--above"),
                    o = this.$dropdown.hasClass("select2-dropdown--below"), n = null, s = this.$container.offset();
                s.bottom = s.top + this.$container.outerHeight(!1);
                var r = {height: this.$container.outerHeight(!1)};
                r.top = s.top, r.bottom = s.top + r.height;
                var a = this.$dropdown.outerHeight(!1), l = e.scrollTop(), c = e.scrollTop() + e.height(),
                    h = l < s.top - a, d = c > s.bottom + a, u = {left: s.left, top: r.bottom},
                    p = this.$dropdownParent;
                "static" === p.css("position") && (p = p.offsetParent());
                var f = p.offset();
                u.top -= f.top, u.left -= f.left, i || o || (n = "below"), d || !h || i ? !h && d && i && (n = "below") : n = "above", ("above" == n || i && "below" !== n) && (u.top = r.top - f.top - a), null != n && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + n), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + n)), this.$dropdownContainer.css(u)
            }, i.prototype._resizeDropdown = function () {
                var t = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t)
            }, i.prototype._showDropdown = function (t) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, i
        }), e.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function t(t, e, i, o) {
                this.minimumResultsForSearch = i.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, i, o)
            }

            return t.prototype.showSearch = function (t, e) {
                return !(function t(e) {
                    for (var i = 0, o = 0; o < e.length; o++) {
                        var n = e[o];
                        n.children ? i += t(n.children) : i++
                    }
                    return i
                }(e.data.results) < this.minimumResultsForSearch) && t.call(this, e)
            }, t
        }), e.define("select2/dropdown/selectOnClose", [], function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, i) {
                var o = this;
                t.call(this, e, i), e.on("close", function (t) {
                    o._handleSelectOnClose(t)
                })
            }, t.prototype._handleSelectOnClose = function (t, e) {
                if (e && null != e.originalSelect2Event) {
                    var i = e.originalSelect2Event;
                    if ("select" === i._type || "unselect" === i._type) return
                }
                var o = this.getHighlightedResults();
                if (!(o.length < 1)) {
                    var n = o.data("data");
                    null != n.element && n.element.selected || null == n.element && n.selected || this.trigger("select", {data: n})
                }
            }, t
        }), e.define("select2/dropdown/closeOnSelect", [], function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, i) {
                var o = this;
                t.call(this, e, i), e.on("select", function (t) {
                    o._selectTriggered(t)
                }), e.on("unselect", function (t) {
                    o._selectTriggered(t)
                })
            }, t.prototype._selectTriggered = function (t, e) {
                var i = e.originalEvent;
                i && i.ctrlKey || this.trigger("close", {originalEvent: i, originalSelect2Event: e})
            }, t
        }), e.define("select2/i18n/en", [], function () {
            return {
                errorLoading: function () {
                    return "The results could not be loaded."
                }, inputTooLong: function (t) {
                    var e = t.input.length - t.maximum, i = "Please delete " + e + " character";
                    return 1 != e && (i += "s"), i
                }, inputTooShort: function (t) {
                    return "Please enter " + (t.minimum - t.input.length) + " or more characters"
                }, loadingMore: function () {
                    return "Loading more results…"
                }, maximumSelected: function (t) {
                    var e = "You can only select " + t.maximum + " item";
                    return 1 != t.maximum && (e += "s"), e
                }, noResults: function () {
                    return "No results found"
                }, searching: function () {
                    return "Searching…"
                }
            }
        }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (t, e, i, o, n, s, r, a, l, c, h, d, u, p, f, m, g, v, y, w, b, x, k, _, $, T, S, C, A) {
            function E() {
                this.reset()
            }

            return E.prototype.apply = function (d) {
                if (null == (d = t.extend(!0, {}, this.defaults, d)).dataAdapter) {
                    if (null != d.ajax ? d.dataAdapter = f : null != d.data ? d.dataAdapter = p : d.dataAdapter = u, d.minimumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, v)), d.maximumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, y)), d.maximumSelectionLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, w)), d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, m)), (null != d.tokenSeparators || null != d.tokenizer) && (d.dataAdapter = c.Decorate(d.dataAdapter, g)), null != d.query) {
                        var A = e(d.amdBase + "compat/query");
                        d.dataAdapter = c.Decorate(d.dataAdapter, A)
                    }
                    if (null != d.initSelection) {
                        var E = e(d.amdBase + "compat/initSelection");
                        d.dataAdapter = c.Decorate(d.dataAdapter, E)
                    }
                }
                if (null == d.resultsAdapter && (d.resultsAdapter = i, null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, _)), null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, k)), d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, S))), null == d.dropdownAdapter) {
                    if (d.multiple) d.dropdownAdapter = b; else {
                        var M = c.Decorate(b, x);
                        d.dropdownAdapter = M
                    }
                    if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, T)), d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, C)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                        var I = e(d.amdBase + "compat/dropdownCss");
                        d.dropdownAdapter = c.Decorate(d.dropdownAdapter, I)
                    }
                    d.dropdownAdapter = c.Decorate(d.dropdownAdapter, $)
                }
                if (null == d.selectionAdapter) {
                    if (d.multiple ? d.selectionAdapter = n : d.selectionAdapter = o, null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)), d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, r)), d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                        var D = e(d.amdBase + "compat/containerCss");
                        d.selectionAdapter = c.Decorate(d.selectionAdapter, D)
                    }
                    d.selectionAdapter = c.Decorate(d.selectionAdapter, l)
                }
                if ("string" == typeof d.language) if (d.language.indexOf("-") > 0) {
                    var O = d.language.split("-")[0];
                    d.language = [d.language, O]
                } else d.language = [d.language];
                if (t.isArray(d.language)) {
                    var P = new h;
                    d.language.push("en");
                    for (var j = d.language, N = 0; N < j.length; N++) {
                        var L = j[N], z = {};
                        try {
                            z = h.loadPath(L)
                        } catch (t) {
                            try {
                                L = this.defaults.amdLanguageBase + L, z = h.loadPath(L)
                            } catch (t) {
                                d.debug && window.console && console.warn && console.warn('Select2: The language file for "' + L + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        P.extend(z)
                    }
                    d.translations = P
                } else {
                    var H = h.loadPath(this.defaults.amdLanguageBase + "en"), R = new h(d.language);
                    R.extend(H), d.translations = R
                }
                return d
            }, E.prototype.reset = function () {
                function e(t) {
                    return t.replace(/[^\u0000-\u007E]/g, function (t) {
                        return d[t] || t
                    })
                }

                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: A,
                    matcher: function i(o, n) {
                        if ("" === t.trim(o.term)) return n;
                        if (n.children && n.children.length > 0) {
                            for (var s = t.extend(!0, {}, n), r = n.children.length - 1; r >= 0; r--) null == i(o, n.children[r]) && s.children.splice(r, 1);
                            return s.children.length > 0 ? s : i(o, s)
                        }
                        var a = e(n.text).toUpperCase(), l = e(o.term).toUpperCase();
                        return a.indexOf(l) > -1 ? n : null
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function (t) {
                        return t
                    },
                    templateResult: function (t) {
                        return t.text
                    },
                    templateSelection: function (t) {
                        return t.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }, E.prototype.set = function (e, i) {
                var o = {};
                o[t.camelCase(e)] = i;
                var n = c._convertData(o);
                t.extend(this.defaults, n)
            }, new E
        }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (t, e, i, o) {
            function n(e, n) {
                if (this.options = e, null != n && this.fromElement(n), this.options = i.apply(this.options), n && n.is("input")) {
                    var s = t(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = o.Decorate(this.options.dataAdapter, s)
                }
            }

            return n.prototype.fromElement = function (t) {
                var i, n = ["select2"];
                null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), t.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), t.data("data", t.data("select2Tags")), t.data("tags", !0)), t.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", t.data("ajaxUrl")), t.data("ajax--url", t.data("ajaxUrl"))), i = e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset ? e.extend(!0, {}, t[0].dataset, t.data()) : t.data();
                var s = e.extend(!0, {}, i);
                s = o._convertData(s);
                for (var r in s) e.inArray(r, n) > -1 || (e.isPlainObject(this.options[r]) ? e.extend(this.options[r], s[r]) : this.options[r] = s[r]);
                return this
            }, n.prototype.get = function (t) {
                return this.options[t]
            }, n.prototype.set = function (t, e) {
                this.options[t] = e
            }, n
        }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (t, e, i, o) {
            var n = function (t, i) {
                null != t.data("select2") && t.data("select2").destroy(), this.$element = t, this.id = this._generateId(t), i = i || {}, this.options = new e(i, t), n.__super__.constructor.call(this);
                var o = t.attr("tabindex") || 0;
                t.data("old-tabindex", o), t.attr("tabindex", "-1");
                var s = this.options.get("dataAdapter");
                this.dataAdapter = new s(t, this.options);
                var r = this.render();
                this._placeContainer(r);
                var a = this.options.get("selectionAdapter");
                this.selection = new a(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
                var l = this.options.get("dropdownAdapter");
                this.dropdown = new l(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
                var c = this.options.get("resultsAdapter");
                this.results = new c(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var h = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (t) {
                    h.trigger("selection:update", {data: t})
                }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), t.data("select2", this)
            };
            return i.Extend(n, i.Observable), n.prototype._generateId = function (t) {
                return "select2-" + (null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + i.generateChars(2) : i.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
            }, n.prototype._placeContainer = function (t) {
                t.insertAfter(this.$element);
                var e = this._resolveWidth(this.$element, this.options.get("width"));
                null != e && t.css("width", e)
            }, n.prototype._resolveWidth = function (t, e) {
                var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == e) {
                    var o = this._resolveWidth(t, "style");
                    return null != o ? o : this._resolveWidth(t, "element")
                }
                if ("element" == e) {
                    var n = t.outerWidth(!1);
                    return 0 >= n ? "auto" : n + "px"
                }
                if ("style" == e) {
                    var s = t.attr("style");
                    if ("string" != typeof s) return null;
                    for (var r = s.split(";"), a = 0, l = r.length; l > a; a += 1) {
                        var c = r[a].replace(/\s/g, "").match(i);
                        if (null !== c && c.length >= 1) return c[1]
                    }
                    return null
                }
                return e
            }, n.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, n.prototype._registerDomEvents = function () {
                var e = this;
                this.$element.on("change.select2", function () {
                    e.dataAdapter.current(function (t) {
                        e.trigger("selection:update", {data: t})
                    })
                }), this.$element.on("focus.select2", function (t) {
                    e.trigger("focus", t)
                }), this._syncA = i.bind(this._syncAttributes, this), this._syncS = i.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var o = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != o ? (this._observer = new o(function (i) {
                    t.each(i, e._syncA), t.each(i, e._syncS)
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
            }, n.prototype._registerDataEvents = function () {
                var t = this;
                this.dataAdapter.on("*", function (e, i) {
                    t.trigger(e, i)
                })
            }, n.prototype._registerSelectionEvents = function () {
                var e = this, i = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                    e.toggleDropdown()
                }), this.selection.on("focus", function (t) {
                    e.focus(t)
                }), this.selection.on("*", function (o, n) {
                    -1 === t.inArray(o, i) && e.trigger(o, n)
                })
            }, n.prototype._registerDropdownEvents = function () {
                var t = this;
                this.dropdown.on("*", function (e, i) {
                    t.trigger(e, i)
                })
            }, n.prototype._registerResultsEvents = function () {
                var t = this;
                this.results.on("*", function (e, i) {
                    t.trigger(e, i)
                })
            }, n.prototype._registerEvents = function () {
                var t = this;
                this.on("open", function () {
                    t.$container.addClass("select2-container--open")
                }), this.on("close", function () {
                    t.$container.removeClass("select2-container--open")
                }), this.on("enable", function () {
                    t.$container.removeClass("select2-container--disabled")
                }), this.on("disable", function () {
                    t.$container.addClass("select2-container--disabled")
                }), this.on("blur", function () {
                    t.$container.removeClass("select2-container--focus")
                }), this.on("query", function (e) {
                    t.isOpen() || t.trigger("open", {}), this.dataAdapter.query(e, function (i) {
                        t.trigger("results:all", {data: i, query: e})
                    })
                }), this.on("query:append", function (e) {
                    this.dataAdapter.query(e, function (i) {
                        t.trigger("results:append", {data: i, query: e})
                    })
                }), this.on("keypress", function (e) {
                    var i = e.which;
                    t.isOpen() ? i === o.ESC || i === o.TAB || i === o.UP && e.altKey ? (t.close(), e.preventDefault()) : i === o.ENTER ? (t.trigger("results:select", {}), e.preventDefault()) : i === o.SPACE && e.ctrlKey ? (t.trigger("results:toggle", {}), e.preventDefault()) : i === o.UP ? (t.trigger("results:previous", {}), e.preventDefault()) : i === o.DOWN && (t.trigger("results:next", {}), e.preventDefault()) : (i === o.ENTER || i === o.SPACE || i === o.DOWN && e.altKey) && (t.open(), e.preventDefault())
                })
            }, n.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
            }, n.prototype._syncSubtree = function (t, e) {
                var i = !1, o = this;
                if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                    if (e) if (e.addedNodes && e.addedNodes.length > 0) for (var n = 0; n < e.addedNodes.length; n++) e.addedNodes[n].selected && (i = !0); else e.removedNodes && e.removedNodes.length > 0 && (i = !0); else i = !0;
                    i && this.dataAdapter.current(function (t) {
                        o.trigger("selection:update", {data: t})
                    })
                }
            }, n.prototype.trigger = function (t, e) {
                var i = n.__super__.trigger,
                    o = {open: "opening", close: "closing", select: "selecting", unselect: "unselecting"};
                if (void 0 === e && (e = {}), t in o) {
                    var s = o[t], r = {prevented: !1, name: t, args: e};
                    if (i.call(this, s, r), r.prevented) return void (e.prevented = !0)
                }
                i.call(this, t, e)
            }, n.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, n.prototype.open = function () {
                this.isOpen() || this.trigger("query", {})
            }, n.prototype.close = function () {
                this.isOpen() && this.trigger("close", {})
            }, n.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open")
            }, n.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus")
            }, n.prototype.focus = function (t) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
            }, n.prototype.enable = function (t) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == t || 0 === t.length) && (t = [!0]);
                var e = !t[0];
                this.$element.prop("disabled", e)
            }, n.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var t = [];
                return this.dataAdapter.current(function (e) {
                    t = e
                }), t
            }, n.prototype.val = function (e) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                var i = e[0];
                t.isArray(i) && (i = t.map(i, function (t) {
                    return t.toString()
                })), this.$element.val(i).trigger("change")
            }, n.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, n.prototype.render = function () {
                var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
            }, n
        }), e.define("select2/compat/utils", ["jquery"], function (t) {
            return {
                syncCssClasses: function (e, i, o) {
                    var n, s, r = [];
                    (n = t.trim(e.attr("class"))) && t((n = "" + n).split(/\s+/)).each(function () {
                        0 === this.indexOf("select2-") && r.push(this)
                    }), (n = t.trim(i.attr("class"))) && t((n = "" + n).split(/\s+/)).each(function () {
                        0 !== this.indexOf("select2-") && null != (s = o(this)) && r.push(s)
                    }), e.attr("class", r.join(" "))
                }
            }
        }), e.define("select2/compat/containerCss", ["jquery", "./utils"], function (t, e) {
            function i(t) {
                return null
            }

            function o() {
            }

            return o.prototype.render = function (o) {
                var n = o.call(this), s = this.options.get("containerCssClass") || "";
                t.isFunction(s) && (s = s(this.$element));
                var r = this.options.get("adaptContainerCssClass");
                if (r = r || i, -1 !== s.indexOf(":all:")) {
                    s = s.replace(":all:", "");
                    var a = r;
                    r = function (t) {
                        var e = a(t);
                        return null != e ? e + " " + t : t
                    }
                }
                var l = this.options.get("containerCss") || {};
                return t.isFunction(l) && (l = l(this.$element)), e.syncCssClasses(n, this.$element, r), n.css(l), n.addClass(s), n
            }, o
        }), e.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (t, e) {
            function i(t) {
                return null
            }

            function o() {
            }

            return o.prototype.render = function (o) {
                var n = o.call(this), s = this.options.get("dropdownCssClass") || "";
                t.isFunction(s) && (s = s(this.$element));
                var r = this.options.get("adaptDropdownCssClass");
                if (r = r || i, -1 !== s.indexOf(":all:")) {
                    s = s.replace(":all:", "");
                    var a = r;
                    r = function (t) {
                        var e = a(t);
                        return null != e ? e + " " + t : t
                    }
                }
                var l = this.options.get("dropdownCss") || {};
                return t.isFunction(l) && (l = l(this.$element)), e.syncCssClasses(n, this.$element, r), n.css(l), n.addClass(s), n
            }, o
        }), e.define("select2/compat/initSelection", ["jquery"], function (t) {
            function e(t, e, i) {
                i.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = i.get("initSelection"), this._isInitialized = !1, t.call(this, e, i)
            }

            return e.prototype.current = function (e, i) {
                var o = this;
                return this._isInitialized ? void e.call(this, i) : void this.initSelection.call(null, this.$element, function (e) {
                    o._isInitialized = !0, t.isArray(e) || (e = [e]), i(e)
                })
            }, e
        }), e.define("select2/compat/inputData", ["jquery"], function (t) {
            function e(t, e, i) {
                this._currentData = [], this._valueSeparator = i.get("valueSeparator") || ",", "hidden" === e.prop("type") && i.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), t.call(this, e, i)
            }

            return e.prototype.current = function (e, i) {
                function o(e, i) {
                    var n = [];
                    return e.selected || -1 !== t.inArray(e.id, i) ? (e.selected = !0, n.push(e)) : e.selected = !1, e.children && n.push.apply(n, o(e.children, i)), n
                }

                for (var n = [], s = 0; s < this._currentData.length; s++) {
                    var r = this._currentData[s];
                    n.push.apply(n, o(r, this.$element.val().split(this._valueSeparator)))
                }
                i(n)
            }, e.prototype.select = function (e, i) {
                if (this.options.get("multiple")) {
                    var o = this.$element.val();
                    o += this._valueSeparator + i.id, this.$element.val(o), this.$element.trigger("change")
                } else this.current(function (e) {
                    t.map(e, function (t) {
                        t.selected = !1
                    })
                }), this.$element.val(i.id), this.$element.trigger("change")
            }, e.prototype.unselect = function (t, e) {
                var i = this;
                e.selected = !1, this.current(function (t) {
                    for (var o = [], n = 0; n < t.length; n++) {
                        var s = t[n];
                        e.id != s.id && o.push(s.id)
                    }
                    i.$element.val(o.join(i._valueSeparator)), i.$element.trigger("change")
                })
            }, e.prototype.query = function (t, e, i) {
                for (var o = [], n = 0; n < this._currentData.length; n++) {
                    var s = this._currentData[n], r = this.matches(e, s);
                    null !== r && o.push(r)
                }
                i({results: o})
            }, e.prototype.addOptions = function (e, i) {
                var o = t.map(i, function (e) {
                    return t.data(e[0], "data")
                });
                this._currentData.push.apply(this._currentData, o)
            }, e
        }), e.define("select2/compat/matcher", ["jquery"], function (t) {
            return function (e) {
                return function (i, o) {
                    var n = t.extend(!0, {}, o);
                    if (null == i.term || "" === t.trim(i.term)) return n;
                    if (o.children) {
                        for (var s = o.children.length - 1; s >= 0; s--) {
                            var r = o.children[s];
                            e(i.term, r.text, r) || n.children.splice(s, 1)
                        }
                        if (n.children.length > 0) return n
                    }
                    return e(i.term, o.text, o) ? n : null
                }
            }
        }), e.define("select2/compat/query", [], function () {
            function t(t, e, i) {
                i.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), t.call(this, e, i)
            }

            return t.prototype.query = function (t, e, i) {
                e.callback = i, this.options.get("query").call(null, e)
            }, t
        }), e.define("select2/dropdown/attachContainer", [], function () {
            function t(t, e, i) {
                t.call(this, e, i)
            }

            return t.prototype.position = function (t, e, i) {
                i.find(".dropdown-wrapper").append(e), e.addClass("select2-dropdown--below"), i.addClass("select2-container--below")
            }, t
        }), e.define("select2/dropdown/stopPropagation", [], function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, i) {
                t.call(this, e, i), this.$dropdown.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function (t) {
                    t.stopPropagation()
                })
            }, t
        }), e.define("select2/selection/stopPropagation", [], function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, i) {
                t.call(this, e, i), this.$selection.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function (t) {
                    t.stopPropagation()
                })
            }, t
        }), i = function (t) {
            function e(e) {
                var r = e || window.event, a = l.call(arguments, 1), c = 0, d = 0, u = 0, p = 0, f = 0, m = 0;
                if ((e = t.event.fix(r)).type = "mousewheel", "detail" in r && (u = -1 * r.detail), "wheelDelta" in r && (u = r.wheelDelta), "wheelDeltaY" in r && (u = r.wheelDeltaY), "wheelDeltaX" in r && (d = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (d = -1 * u, u = 0), c = 0 === u ? d : u, "deltaY" in r && (c = u = -1 * r.deltaY), "deltaX" in r && (d = r.deltaX, 0 === u && (c = -1 * d)), 0 !== u || 0 !== d) {
                    if (1 === r.deltaMode) {
                        var g = t.data(this, "mousewheel-line-height");
                        c *= g, u *= g, d *= g
                    } else if (2 === r.deltaMode) {
                        var v = t.data(this, "mousewheel-page-height");
                        c *= v, u *= v, d *= v
                    }
                    if (p = Math.max(Math.abs(u), Math.abs(d)), (!s || s > p) && (s = p, o(r, p) && (s /= 40)), o(r, p) && (c /= 40, d /= 40, u /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / s), d = Math[d >= 1 ? "floor" : "ceil"](d / s), u = Math[u >= 1 ? "floor" : "ceil"](u / s), h.settings.normalizeOffset && this.getBoundingClientRect) {
                        var y = this.getBoundingClientRect();
                        f = e.clientX - y.left, m = e.clientY - y.top
                    }
                    return e.deltaX = d, e.deltaY = u, e.deltaFactor = s, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, a.unshift(e, c, d, u), n && clearTimeout(n), n = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, a)
                }
            }

            function i() {
                s = null
            }

            function o(t, e) {
                return h.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
            }

            var n, s, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                l = Array.prototype.slice;
            if (t.event.fixHooks) for (var c = r.length; c;) t.event.fixHooks[r[--c]] = t.event.mouseHooks;
            var h = t.event.special.mousewheel = {
                version: "3.1.12", setup: function () {
                    if (this.addEventListener) for (var i = a.length; i;) this.addEventListener(a[--i], e, !1); else this.onmousewheel = e;
                    t.data(this, "mousewheel-line-height", h.getLineHeight(this)), t.data(this, "mousewheel-page-height", h.getPageHeight(this))
                }, teardown: function () {
                    if (this.removeEventListener) for (var i = a.length; i;) this.removeEventListener(a[--i], e, !1); else this.onmousewheel = null;
                    t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
                }, getLineHeight: function (e) {
                    var i = t(e), o = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                    return o.length || (o = t("body")), parseInt(o.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
                }, getPageHeight: function (e) {
                    return t(e).height()
                }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
            };
            t.fn.extend({
                mousewheel: function (t) {
                    return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
                }, unmousewheel: function (t) {
                    return this.unbind("mousewheel", t)
                }
            })
        }, "function" == typeof e.define && e.define.amd ? e.define("jquery-mousewheel", ["jquery"], i) : "object" == typeof exports ? module.exports = i : i(t), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (t, e, i, o) {
            if (null == t.fn.select2) {
                var n = ["open", "close", "destroy"];
                t.fn.select2 = function (e) {
                    if ("object" == typeof (e = e || {})) return this.each(function () {
                        var o = t.extend(!0, {}, e);
                        new i(t(this), o)
                    }), this;
                    if ("string" == typeof e) {
                        var o, s = Array.prototype.slice.call(arguments, 1);
                        return this.each(function () {
                            var i = t(this).data("select2");
                            null == i && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), o = i[e].apply(i, s)
                        }), t.inArray(e, n) > -1 ? this : o
                    }
                    throw new Error("Invalid arguments for Select2: " + e)
                }
            }
            return null == t.fn.select2.defaults && (t.fn.select2.defaults = o), i
        }), {define: e.define, require: e.require}
    }(), i = e.require("jquery.select2");
    return t.fn.select2.amd = e, i
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        t(e, document, window, navigator)
    }) : t(jQuery, document, window, navigator)
}(function (t, e, i, o, n) {
    var s, r, a = 0,
        l = (r = /msie\s\d+/i, 0 < (s = o.userAgent).search(r) && 9 > (s = (s = r.exec(s).toString()).split(" ")[1]) && (t("html").addClass("lt-ie9"), !0));
    Function.prototype.bind || (Function.prototype.bind = function (t) {
        var e = this, i = [].slice;
        if ("function" != typeof e) throw new TypeError;
        var o = i.call(arguments, 1), n = function () {
            if (this instanceof n) {
                (s = function () {
                }).prototype = e.prototype;
                var s = new s, r = e.apply(s, o.concat(i.call(arguments)));
                return Object(r) === r ? r : s
            }
            return e.apply(t, o.concat(i.call(arguments)))
        };
        return n
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
        var i;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var o = Object(this), n = o.length >>> 0;
        if (0 === n) return -1;
        if (i = +e || 0, 1 / 0 === Math.abs(i) && (i = 0), i >= n) return -1;
        for (i = Math.max(0 <= i ? i : n - Math.abs(i), 0); i < n;) {
            if (i in o && o[i] === t) return i;
            i++
        }
        return -1
    });
    var c = function (o, n, s) {
        this.VERSION = "2.1.4", this.input = o, this.plugin_count = s, this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0, this.raf_id = this.old_min_interval = null, this.is_update = this.is_key = this.no_diapason = this.force_redraw = this.dragging = !1, this.is_start = !0, this.is_click = this.is_resize = this.is_active = this.is_finish = !1, this.$cache = {
            win: t(i),
            body: t(e.body),
            input: t(o),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        }, this.coords = {
            x_gap: 0,
            x_pointer: 0,
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single_fake: 0,
            p_single_real: 0,
            p_from_fake: 0,
            p_from_real: 0,
            p_to_fake: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        }, this.labels = {
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,
            p_min: 0,
            p_max: 0,
            p_from_fake: 0,
            p_from_left: 0,
            p_to_fake: 0,
            p_to_left: 0,
            p_single_fake: 0,
            p_single_left: 0
        };
        var r, a = this.$cache.input;
        o = a.prop("value"), s = {
            type: "single",
            min: 10,
            max: 100,
            from: null,
            to: null,
            step: 1,
            min_interval: 0,
            max_interval: 0,
            drag_interval: !1,
            values: [],
            p_values: [],
            from_fixed: !1,
            from_min: null,
            from_max: null,
            from_shadow: !1,
            to_fixed: !1,
            to_min: null,
            to_max: null,
            to_shadow: !1,
            prettify_enabled: !0,
            prettify_separator: " ",
            prettify: null,
            force_edges: !1,
            keyboard: !1,
            keyboard_step: 5,
            grid: !1,
            grid_margin: !0,
            grid_num: 4,
            grid_snap: !1,
            hide_min_max: !1,
            hide_from_to: !1,
            prefix: "",
            postfix: "",
            max_postfix: "",
            decorate_both: !0,
            values_separator: " — ",
            input_values_separator: ";",
            disable: !1,
            onStart: null,
            onChange: null,
            onFinish: null,
            onUpdate: null
        }, (a = {
            type: a.data("type"),
            min: a.data("min"),
            max: a.data("max"),
            from: a.data("from"),
            to: a.data("to"),
            step: a.data("step"),
            min_interval: a.data("minInterval"),
            max_interval: a.data("maxInterval"),
            drag_interval: a.data("dragInterval"),
            values: a.data("values"),
            from_fixed: a.data("fromFixed"),
            from_min: a.data("fromMin"),
            from_max: a.data("fromMax"),
            from_shadow: a.data("fromShadow"),
            to_fixed: a.data("toFixed"),
            to_min: a.data("toMin"),
            to_max: a.data("toMax"),
            to_shadow: a.data("toShadow"),
            prettify_enabled: a.data("prettifyEnabled"),
            prettify_separator: a.data("prettifySeparator"),
            force_edges: a.data("forceEdges"),
            keyboard: a.data("keyboard"),
            keyboard_step: a.data("keyboardStep"),
            grid: a.data("grid"),
            grid_margin: a.data("gridMargin"),
            grid_num: a.data("gridNum"),
            grid_snap: a.data("gridSnap"),
            hide_min_max: a.data("hideMinMax"),
            hide_from_to: a.data("hideFromTo"),
            prefix: a.data("prefix"),
            postfix: a.data("postfix"),
            max_postfix: a.data("maxPostfix"),
            decorate_both: a.data("decorateBoth"),
            values_separator: a.data("valuesSeparator"),
            input_values_separator: a.data("inputValuesSeparator"),
            disable: a.data("disable")
        }).values = a.values && a.values.split(",");
        for (r in a) a.hasOwnProperty(r) && (a[r] || 0 === a[r] || delete a[r]);
        o && ((o = o.split(a.input_values_separator || n.input_values_separator || ";"))[0] && o[0] == +o[0] && (o[0] = +o[0]), o[1] && o[1] == +o[1] && (o[1] = +o[1]), n && n.values && n.values.length ? (s.from = o[0] && n.values.indexOf(o[0]), s.to = o[1] && n.values.indexOf(o[1])) : (s.from = o[0] && +o[0], s.to = o[1] && +o[1])), t.extend(s, n), t.extend(s, a), this.options = s, this.validate(), this.result = {
            input: this.$cache.input,
            slider: null,
            min: this.options.min,
            max: this.options.max,
            from: this.options.from,
            from_percent: 0,
            from_value: null,
            to: this.options.to,
            to_percent: 0,
            to_value: null
        }, this.init()
    };
    c.prototype = {
        init: function (t) {
            this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
        }, append: function () {
            this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + '"></span>'), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.cont.removeClass("irs-disabled"), this.$cache.input[0].disabled = !1, this.bindEvents()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
        }, setTopHandler: function () {
            var t = this.options.max, e = this.options.to;
            this.options.from > this.options.min && e === t ? this.$cache.s_from.addClass("type_last") : e < t && this.$cache.s_to.addClass("type_last")
        }, changeLevel: function (t) {
            switch (t) {
                case"single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
                    break;
                case"from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                    break;
                case"to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                    break;
                case"both":
                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
            }
        }, appendDisableMask: function () {
            this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
        }, remove: function () {
            this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), l && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
        }, bindEvents: function () {
            this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), l && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
        }, pointerMove: function (t) {
            this.dragging && (this.coords.x_pointer = (t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX) - this.coords.x_gap, this.calc())
        }, pointerUp: function (e) {
            this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, l && t("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (t.contains(this.$cache.cont[0], e.target) || this.dragging) && (this.is_finish = !0, this.callOnFinish()), this.dragging = !1)
        }, pointerDown: function (e, i) {
            i.preventDefault();
            var o = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
            2 !== i.button && ("both" === e && this.setTempMinInterval(), e || (e = this.target), this.current_plugin = this.plugin_count, this.target = e, this.dragging = this.is_active = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = o - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(e), l && t("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
        }, pointerClick: function (t, e) {
            e.preventDefault();
            var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            2 !== e.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
        }, key: function (t, e) {
            if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                switch (e.which) {
                    case 83:
                    case 65:
                    case 40:
                    case 37:
                        e.preventDefault(), this.moveByKey(!1);
                        break;
                    case 87:
                    case 68:
                    case 38:
                    case 39:
                        e.preventDefault(), this.moveByKey(!0)
                }
                return !0
            }
        }, moveByKey: function (t) {
            var e = this.coords.p_pointer;
            e = t ? e + this.options.keyboard_step : e - this.options.keyboard_step, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * e), this.is_key = !0, this.calc()
        }, setMinMax: function () {
            this.options && (this.options.hide_min_max ? (this.$cache.min[0].style.display = "none", this.$cache.max[0].style.display = "none") : (this.options.values.length ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))) : (this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min)), this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max))), this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)))
        }, setTempMinInterval: function () {
            var t = this.result.to - this.result.from;
            null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t
        }, restoreOriginalMinInterval: function () {
            null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
        }, calc: function (t) {
            if (this.options && (this.calc_count++, (10 === this.calc_count || t) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                switch (this.calcPointerPercent(), t = this.getHandleX(), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, t = this.getHandleX(), this.target = this.options.drag_interval ? "both_one" : this.chooseHandle(t)), this.target) {
                    case"base":
                        var e = (this.options.max - this.options.min) / 100;
                        t = (this.result.from - this.options.min) / e, e = (this.result.to - this.options.min) / e, this.coords.p_single_real = this.toFixed(t), this.coords.p_from_real = this.toFixed(t), this.coords.p_to_real = this.toFixed(e), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                        break;
                    case"single":
                        if (this.options.from_fixed) break;
                        this.coords.p_single_real = this.convertToRealPercent(t), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                        break;
                    case"from":
                        if (this.options.from_fixed) break;
                        this.coords.p_from_real = this.convertToRealPercent(t), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                        break;
                    case"to":
                        if (this.options.to_fixed) break;
                        this.coords.p_to_real = this.convertToRealPercent(t), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both":
                        if (this.options.from_fixed || this.options.to_fixed) break;
                        t = this.toFixed(t + .1 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(t) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(t) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both_one":
                        if (!this.options.from_fixed && !this.options.to_fixed) {
                            var i = this.convertToRealPercent(t),
                                o = (t = this.result.to_percent - this.result.from_percent) / 2;
                            e = i - o, i += o, 0 > e && (i = (e = 0) + t), 100 < i && (e = (i = 100) - t), this.coords.p_from_real = this.calcWithStep(e), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(i), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                        }
                }
                "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
            }
        }, calcPointerPercent: function () {
            this.coords.w_rs ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
        }, convertToRealPercent: function (t) {
            return t / (100 - this.coords.p_handle) * 100
        }, convertToFakePercent: function (t) {
            return t / 100 * (100 - this.coords.p_handle)
        }, getHandleX: function () {
            var t = 100 - this.coords.p_handle, e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
            return 0 > e ? e = 0 : e > t && (e = t), e
        }, calcHandlePercent: function () {
            this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
        }, chooseHandle: function (t) {
            return "single" === this.options.type ? "single" : t >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
        }, calcMinMax: function () {
            this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
        }, calcLabels: function () {
            this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
        }, updateScene: function () {
            this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
        }, drawHandles: function () {
            this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%", this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%"), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to)), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || this.$cache.input.trigger("change"), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_click = this.is_key = !1, this.callOnFinish()), this.is_finish = this.is_resize = this.is_update = !1), this.force_redraw = this.is_click = this.is_key = this.is_start = !1))
        }, drawLabels: function () {
            if (this.options) {
                var t, e = this.options.values.length, i = this.options.p_values;
                if (!this.options.hide_from_to) if ("single" === this.options.type) e = e ? this.decorate(i[this.result.from]) : this.decorate(this._prettify(this.result.from), this.result.from), this.$cache.single.html(e), this.calcLabels(), this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? "hidden" : "visible"; else {
                    e ? (this.options.decorate_both ? (e = this.decorate(i[this.result.from]), e += this.options.values_separator, e += this.decorate(i[this.result.to])) : e = this.decorate(i[this.result.from] + this.options.values_separator + i[this.result.to]), t = this.decorate(i[this.result.from]), i = this.decorate(i[this.result.to])) : (this.options.decorate_both ? (e = this.decorate(this._prettify(this.result.from), this.result.from), e += this.options.values_separator, e += this.decorate(this._prettify(this.result.to), this.result.to)) : e = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to), t = this.decorate(this._prettify(this.result.from), this.result.from), i = this.decorate(this._prettify(this.result.to), this.result.to)), this.$cache.single.html(e), this.$cache.from.html(t), this.$cache.to.html(i), this.calcLabels(), i = Math.min(this.labels.p_single_left, this.labels.p_from_left), e = this.labels.p_single_left + this.labels.p_single_fake, t = this.labels.p_to_left + this.labels.p_to_fake;
                    var o = Math.max(e, t);
                    this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", o = t) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", o = Math.max(e, t))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), this.$cache.min[0].style.visibility = i < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = o > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
                }
            }
        }, drawShadow: function () {
            var t = this.options, e = this.$cache, i = "number" == typeof t.from_min && !isNaN(t.from_min),
                o = "number" == typeof t.from_max && !isNaN(t.from_max),
                n = "number" == typeof t.to_min && !isNaN(t.to_min),
                s = "number" == typeof t.to_max && !isNaN(t.to_max);
            "single" === t.type ? t.from_shadow && (i || o) ? (i = this.convertToPercent(i ? t.from_min : t.min), o = this.convertToPercent(o ? t.from_max : t.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), o = this.toFixed(o - this.coords.p_handle / 100 * o), i += this.coords.p_handle / 2, e.shad_single[0].style.display = "block", e.shad_single[0].style.left = i + "%", e.shad_single[0].style.width = o + "%") : e.shad_single[0].style.display = "none" : (t.from_shadow && (i || o) ? (i = this.convertToPercent(i ? t.from_min : t.min), o = this.convertToPercent(o ? t.from_max : t.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), o = this.toFixed(o - this.coords.p_handle / 100 * o), i += this.coords.p_handle / 2, e.shad_from[0].style.display = "block", e.shad_from[0].style.left = i + "%", e.shad_from[0].style.width = o + "%") : e.shad_from[0].style.display = "none", t.to_shadow && (n || s) ? (n = this.convertToPercent(n ? t.to_min : t.min), t = this.convertToPercent(s ? t.to_max : t.max) - n, n = this.toFixed(n - this.coords.p_handle / 100 * n), t = this.toFixed(t - this.coords.p_handle / 100 * t), n += this.coords.p_handle / 2, e.shad_to[0].style.display = "block", e.shad_to[0].style.left = n + "%", e.shad_to[0].style.width = t + "%") : e.shad_to[0].style.display = "none")
        }, callOnStart: function () {
            this.options.onStart && "function" == typeof this.options.onStart && this.options.onStart(this.result)
        }, callOnChange: function () {
            this.options.onChange && "function" == typeof this.options.onChange && this.options.onChange(this.result)
        }, callOnFinish: function () {
            this.options.onFinish && "function" == typeof this.options.onFinish && this.options.onFinish(this.result)
        }, callOnUpdate: function () {
            this.options.onUpdate && "function" == typeof this.options.onUpdate && this.options.onUpdate(this.result)
        }, toggleInput: function () {
            this.$cache.input.toggleClass("irs-hidden-input")
        }, convertToPercent: function (t, e) {
            var i = this.options.max - this.options.min;
            return i ? this.toFixed((e ? t : t - this.options.min) / (i / 100)) : (this.no_diapason = !0, 0)
        }, convertToValue: function (t) {
            var e, i, o = this.options.min, n = this.options.max, s = o.toString().split(".")[1],
                r = n.toString().split(".")[1], a = 0, l = 0;
            return 0 === t ? this.options.min : 100 === t ? this.options.max : (s && (a = e = s.length), r && (a = i = r.length), e && i && (a = e >= i ? e : i), 0 > o && (o = +(o + (l = Math.abs(o))).toFixed(a), n = +(n + l).toFixed(a)), t = (n - o) / 100 * t + o, (o = this.options.step.toString().split(".")[1]) ? t = +t.toFixed(o.length) : (t /= this.options.step, t = +(t *= this.options.step).toFixed(0)), l && (t -= l), (l = o ? +t.toFixed(o.length) : this.toFixed(t)) < this.options.min ? l = this.options.min : l > this.options.max && (l = this.options.max), l)
        }, calcWithStep: function (t) {
            var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
            return 100 < e && (e = 100), 100 === t && (e = 100), this.toFixed(e)
        }, checkMinInterval: function (t, e, i) {
            var o = this.options;
            return o.min_interval ? (t = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - t < o.min_interval && (t = e - o.min_interval) : t - e < o.min_interval && (t = e + o.min_interval), this.convertToPercent(t)) : t
        }, checkMaxInterval: function (t, e, i) {
            var o = this.options;
            return o.max_interval ? (t = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - t > o.max_interval && (t = e - o.max_interval) : t - e > o.max_interval && (t = e + o.max_interval), this.convertToPercent(t)) : t
        }, checkDiapason: function (t, e, i) {
            t = this.convertToValue(t);
            var o = this.options;
            return "number" != typeof e && (e = o.min), "number" != typeof i && (i = o.max), t < e && (t = e), t > i && (t = i), this.convertToPercent(t)
        }, toFixed: function (t) {
            return +(t = t.toFixed(9))
        }, _prettify: function (t) {
            return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t
        }, prettify: function (t) {
            return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
        }, checkEdges: function (t, e) {
            return this.options.force_edges ? (0 > t ? t = 0 : t > 100 - e && (t = 100 - e), this.toFixed(t)) : this.toFixed(t)
        }, validate: function () {
            var t, e, i = this.options, o = this.result, n = i.values, s = n.length;
            if ("string" == typeof i.min && (i.min = +i.min), "string" == typeof i.max && (i.max = +i.max), "string" == typeof i.from && (i.from = +i.from), "string" == typeof i.to && (i.to = +i.to), "string" == typeof i.step && (i.step = +i.step), "string" == typeof i.from_min && (i.from_min = +i.from_min), "string" == typeof i.from_max && (i.from_max = +i.from_max), "string" == typeof i.to_min && (i.to_min = +i.to_min), "string" == typeof i.to_max && (i.to_max = +i.to_max), "string" == typeof i.keyboard_step && (i.keyboard_step = +i.keyboard_step), "string" == typeof i.grid_num && (i.grid_num = +i.grid_num), i.max < i.min && (i.max = i.min), s) for (i.p_values = [], i.min = 0, i.max = s - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, e = 0; e < s; e++) t = +n[e], isNaN(t) ? t = n[e] : (n[e] = t, t = this._prettify(t)), i.p_values.push(t);
            ("number" != typeof i.from || isNaN(i.from)) && (i.from = i.min), ("number" != typeof i.to || isNaN(i.from)) && (i.to = i.max), "single" === i.type ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max)) : ((i.from < i.min || i.from > i.max) && (i.from = i.min), (i.to > i.max || i.to < i.min) && (i.to = i.max), i.from > i.to && (i.from = i.to)), ("number" != typeof i.step || isNaN(i.step) || !i.step || 0 > i.step) && (i.step = 1), ("number" != typeof i.keyboard_step || isNaN(i.keyboard_step) || !i.keyboard_step || 0 > i.keyboard_step) && (i.keyboard_step = 5), "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min), "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max), "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min), "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max), o && (o.min !== i.min && (o.min = i.min), o.max !== i.max && (o.max = i.max), (o.from < o.min || o.from > o.max) && (o.from = i.from), (o.to < o.min || o.to > o.max) && (o.to = i.to)), ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || 0 > i.min_interval) && (i.min_interval = 0), ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || 0 > i.max_interval) && (i.max_interval = 0), i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min), i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min)
        }, decorate: function (t, e) {
            var i = "", o = this.options;
            return o.prefix && (i += o.prefix), i += t, o.max_postfix && (o.values.length && t === o.p_values[o.max] ? (i += o.max_postfix, o.postfix && (i += " ")) : e === o.max && (i += o.max_postfix, o.postfix && (i += " "))), o.postfix && (i += o.postfix), i
        }, updateFrom: function () {
            this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
        }, updateTo: function () {
            this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
        }, updateResult: function () {
            this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
        }, appendGrid: function () {
            if (this.options.grid) {
                var t, e, i = this.options;
                t = i.max - i.min;
                var o, n, s = i.grid_num, r = 0, a = 0, l = 4, c = 0, h = "";
                for (this.calcGridMargin(), i.grid_snap ? (s = t / i.step, r = this.toFixed(i.step / (t / 100))) : r = this.toFixed(100 / s), 4 < s && (l = 3), 7 < s && (l = 2), 14 < s && (l = 1), 28 < s && (l = 0), t = 0; t < s + 1; t++) {
                    for (o = l, 100 < (a = this.toFixed(r * t)) && (a = 100, 0 > (o -= 2) && (o = 0)), this.coords.big[t] = a, n = (a - r * (t - 1)) / (o + 1), e = 1; e <= o && 0 !== a; e++) c = this.toFixed(a - n * e), h += '<span class="irs-grid-pol small" style="left: ' + c + '%"></span>';
                    h += '<span class="irs-grid-pol" style="left: ' + a + '%"></span>', c = this.convertToValue(a), h += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + a + '%">' + (c = i.values.length ? i.p_values[c] : this._prettify(c)) + "</span>"
                }
                this.coords.big_num = Math.ceil(s + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(h), this.cacheGridLabels()
            }
        }, cacheGridLabels: function () {
            var t, e, i = this.coords.big_num;
            for (e = 0; e < i; e++) t = this.$cache.grid.find(".js-grid-text-" + e), this.$cache.grid_labels.push(t);
            this.calcGridLabels()
        }, calcGridLabels: function () {
            var t, e;
            e = [];
            var i = [], o = this.coords.big_num;
            for (t = 0; t < o; t++) this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), e[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), i[t] = this.toFixed(e[t] + this.coords.big_p[t]);
            for (this.options.force_edges && (e[0] < -this.coords.grid_gap && (e[0] = -this.coords.grid_gap, i[0] = this.toFixed(e[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), i[o - 1] > 100 + this.coords.grid_gap && (i[o - 1] = 100 + this.coords.grid_gap, e[o - 1] = this.toFixed(i[o - 1] - this.coords.big_p[o - 1]), this.coords.big_x[o - 1] = this.toFixed(this.coords.big_p[o - 1] - this.coords.grid_gap))), this.calcGridCollision(2, e, i), this.calcGridCollision(4, e, i), t = 0; t < o; t++) e = this.$cache.grid_labels[t][0], e.style.marginLeft = -this.coords.big_x[t] + "%"
        }, calcGridCollision: function (t, e, i) {
            var o, n, s = this.coords.big_num;
            for (o = 0; o < s && !((n = o + t / 2) >= s); o += t) this.$cache.grid_labels[n][0].style.visibility = i[o] <= e[n] ? "visible" : "hidden"
        }, calcGridMargin: function () {
            this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
        }, update: function (e) {
            this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.options = t.extend(this.options, e), this.validate(), this.updateResult(e), this.toggleInput(), this.remove(), this.init(!0))
        }, reset: function () {
            this.input && (this.updateResult(), this.update())
        }, destroy: function () {
            this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), t.data(this.input, "ionRangeSlider", null), this.remove(), this.options = this.input = null)
        }
    }, t.fn.ionRangeSlider = function (e) {
        return this.each(function () {
            t.data(this, "ionRangeSlider") || t.data(this, "ionRangeSlider", new c(this, e, a++))
        })
    }, function () {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], o = 0; o < e.length && !i.requestAnimationFrame; ++o) i.requestAnimationFrame = i[e[o] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[o] + "CancelAnimationFrame"] || i[e[o] + "CancelRequestAnimationFrame"];
        i.requestAnimationFrame || (i.requestAnimationFrame = function (e, o) {
            var n = (new Date).getTime(), s = Math.max(0, 16 - (n - t)), r = i.setTimeout(function () {
                e(n + s)
            }, s);
            return t = n + s, r
        }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (t) {
            clearTimeout(t)
        })
    }()
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    "use strict";

    function e(t) {
        var e = t.clone().css({height: "auto", width: t.width(), maxHeight: "none", overflow: "hidden"}).insertAfter(t),
            i = e.outerHeight(), o = parseInt(e.css({maxHeight: ""}).css("max-height").replace(/[^-\d\.]/g, ""), 10),
            n = t.data("defaultHeight");
        e.remove();
        var s = o || t.data("collapsedHeight") || n;
        t.data({expandedHeight: i, maxHeight: o, collapsedHeight: s}).css({maxHeight: "none"})
    }

    function i(e, i) {
        this.element = e, this.options = t.extend({}, r, i), function (t) {
            if (!a[t.selector]) {
                var e = " ";
                t.embedCSS && "" !== t.blockCSS && (e += t.selector + " + [data-readmore-toggle], " + t.selector + "[data-readmore]{" + t.blockCSS + "}"), o = e += t.selector + "[data-readmore]{transition: height " + t.speed + "ms;overflow: hidden;}", (n = (i = document).createElement("style")).type = "text/css", n.styleSheet ? n.styleSheet.cssText = o : n.appendChild(i.createTextNode(o)), i.getElementsByTagName("head")[0].appendChild(n), a[t.selector] = !0
            }
            var i, o, n
        }(this.options), this._defaults = r, this._name = s, this.init(), window.addEventListener ? (window.addEventListener("load", c), window.addEventListener("resize", c)) : (window.attachEvent("load", c), window.attachEvent("resize", c))
    }

    var o, n, s = "readmore", r = {
        speed: 100,
        collapsedHeight: 200,
        heightMargin: 16,
        moreLink: '<a href="#">Read More</a>',
        lessLink: '<a href="#">Close</a>',
        embedCSS: !0,
        blockCSS: "display: block; width: 100%;",
        startOpen: !1,
        blockProcessed: function () {
        },
        beforeToggle: function () {
        },
        afterToggle: function () {
        }
    }, a = {}, l = 0, c = (o = function () {
        t("[data-readmore]").each(function () {
            var i = t(this), o = "true" === i.attr("aria-expanded");
            e(i), i.css({height: i.data(o ? "expandedHeight" : "collapsedHeight")})
        })
    }, 100, function () {
        var t = this, e = arguments;
        clearTimeout(n), n = setTimeout(function () {
            n = null, o.apply(t, e)
        }, 100)
    });
    i.prototype = {
        init: function () {
            var i = t(this.element);
            i.data({defaultHeight: this.options.collapsedHeight, heightMargin: this.options.heightMargin}), e(i);
            var o = i.data("collapsedHeight"), n = i.data("heightMargin");
            if (i.outerHeight(!0) <= o + n) return this.options.blockProcessed && "function" == typeof this.options.blockProcessed && this.options.blockProcessed(i, !1), !0;
            var s, r, a = i.attr("id") || (s = ++l, String("rmjs-") + s),
                c = this.options.startOpen ? this.options.lessLink : this.options.moreLink;
            i.attr({
                "data-readmore": "",
                "aria-expanded": this.options.startOpen,
                id: a
            }), i.after(t(c).on("click", (r = this, function (t) {
                r.toggle(this, i[0], t)
            })).attr({
                "data-readmore-toggle": a,
                "aria-controls": a
            })), this.options.startOpen || i.css({height: o}), this.options.blockProcessed && "function" == typeof this.options.blockProcessed && this.options.blockProcessed(i, !0)
        }, toggle: function (e, i, o) {
            o && o.preventDefault(), e || (e = t('[aria-controls="' + this.element.id + '"]')[0]), i || (i = this.element);
            var n, s, r = t(i), a = "", l = "", c = !1, h = r.data("collapsedHeight");
            r.height() <= h ? (a = r.data("expandedHeight") + "px", l = "lessLink", c = !0) : (a = h, l = "moreLink"), this.options.beforeToggle && "function" == typeof this.options.beforeToggle && this.options.beforeToggle(e, r, !c), r.css({height: a}), r.on("transitionend", (s = this, function () {
                s.options.afterToggle && "function" == typeof s.options.afterToggle && s.options.afterToggle(e, r, c), t(this).attr({"aria-expanded": c}).off("transitionend")
            })), t(e).replaceWith(t(this.options[l]).on("click", (n = this, function (t) {
                n.toggle(this, i, t)
            })).attr({"data-readmore-toggle": r.attr("id"), "aria-controls": r.attr("id")}))
        }, destroy: function () {
            t(this.element).each(function () {
                var e = t(this);
                e.attr({"data-readmore": null, "aria-expanded": null}).css({
                    maxHeight: "",
                    height: ""
                }).next("[data-readmore-toggle]").remove(), e.removeData()
            })
        }
    }, t.fn.readmore = function (e) {
        var o = arguments, n = this.selector;
        return "object" == typeof (e = e || {}) ? this.each(function () {
            if (t.data(this, "plugin_" + s)) {
                var o = t.data(this, "plugin_" + s);
                o.destroy.apply(o)
            }
            e.selector = n, t.data(this, "plugin_" + s, new i(this, e))
        }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function () {
            var n = t.data(this, "plugin_" + s);
            n instanceof i && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(o, 1))
        }) : void 0
    }
}), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    "use strict";
    var e, i = window.Slick || {};
    (e = 0, i = function (i, o) {
        var n, s = this;
        s.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: t(i),
            appendDots: t(i),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (e, i) {
                return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, s.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, n = t(i).data("slick") || {}, s.options = t.extend({}, s.defaults, o, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = e++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
    }).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, i.prototype.addSlide = i.prototype.slickAdd = function (e, i, o) {
        var n = this;
        if ("boolean" == typeof i) o = i, i = null; else if (0 > i || i >= n.slideCount) return !1;
        n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? t(e).appendTo(n.$slideTrack) : o ? t(e).insertBefore(n.$slides.eq(i)) : t(e).insertAfter(n.$slides.eq(i)) : !0 === o ? t(e).prependTo(n.$slideTrack) : t(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function (e, i) {
            t(i).attr("data-slick-index", e)
        }), n.$slidesCache = n.$slides, n.reinit()
    }, i.prototype.animateHeight = function () {
        if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
            var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
            this.$list.animate({height: t}, this.options.speed)
        }
    }, i.prototype.animateSlide = function (e, i) {
        var o = {}, n = this;
        n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({left: e}, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({top: e}, n.options.speed, n.options.easing, i) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), t({animStart: n.currentLeft}).animate({animStart: e}, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function (t) {
                t = Math.ceil(t), !1 === n.options.vertical ? (o[n.animType] = "translate(" + t + "px, 0px)", n.$slideTrack.css(o)) : (o[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(o))
            },
            complete: function () {
                i && i.call()
            }
        })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? o[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(o), i && setTimeout(function () {
            n.disableTransition(), i.call()
        }, n.options.speed))
    }, i.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e
    }, i.prototype.asNavFor = function (e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function () {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, i.prototype.applyTransition = function (t) {
        var e = this, i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, i.prototype.autoPlay = function () {
        this.autoPlayClear(), this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed))
    }, i.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, i.prototype.autoPlayIterator = function () {
        var t = this, e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, i.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, i.prototype.buildDots = function () {
        var e, i, o = this;
        if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
            for (o.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) i.append(t("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = i.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, i.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, i.prototype.buildRows = function () {
        var t, e, i, o, n, s, r, a = this;
        if (o = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(s.length / r), t = 0; n > t; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var h = t * r + (e * a.options.slidesPerRow + i);
                        s.get(h) && c.appendChild(s.get(h))
                    }
                    l.appendChild(c)
                }
                o.appendChild(l)
            }
            a.$slider.empty().append(o), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, i.prototype.checkResponsive = function (e, i) {
        var o, n, s, r = this, a = !1, l = r.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            n = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[o] && (n = r.breakpoints[o]) : s > r.breakpoints[o] && (n = r.breakpoints[o]));
            null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || i) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = n), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, i.prototype.changeSlide = function (e, i) {
        var o, n, s = this, r = t(e.currentTarget);
        switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), o = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
            case"previous":
                n = 0 === o ? s.options.slidesToScroll : s.options.slidesToShow - o, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - n, !1, i);
                break;
            case"next":
                n = 0 === o ? s.options.slidesToScroll : o, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + n, !1, i);
                break;
            case"index":
                var a = 0 === e.data.index ? 0 : e.data.index || r.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(a), !1, i), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, i.prototype.checkNavigable = function (t) {
        var e, i;
        if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1]; else for (var o in e) {
            if (t < e[o]) {
                t = i;
                break
            }
            i = e[o]
        }
        return t
    }, i.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, i.prototype.cleanUpSlideEvents = function () {
        this.$list.off("mouseenter.slick", t.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", t.proxy(this.interrupt, this, !1))
    }, i.prototype.cleanUpRows = function () {
        var t;
        this.options.rows > 1 && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
    }, i.prototype.clickHandler = function (t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, i.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, i.prototype.disableTransition = function (t) {
        var e = {};
        e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
    }, i.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({zIndex: i.options.zIndex}), i.$slides.eq(t).animate({opacity: 1}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function () {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, i.prototype.fadeSlideOut = function (t) {
        !1 === this.cssTransitions ? this.$slides.eq(t).animate({
            opacity: 0,
            zIndex: this.options.zIndex - 2
        }, this.options.speed, this.options.easing) : (this.applyTransition(t), this.$slides.eq(t).css({
            opacity: 0,
            zIndex: this.options.zIndex - 2
        }))
    }, i.prototype.filterSlides = i.prototype.slickFilter = function (t) {
        null !== t && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(t).appendTo(this.$slideTrack), this.reinit())
    }, i.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (i) {
            i.stopImmediatePropagation();
            var o = t(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, i.prototype.getCurrent = i.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, i.prototype.getDotCount = function () {
        var t = this, e = 0, i = 0, o = 0;
        if (!0 === t.options.infinite) for (; e < t.slideCount;) ++o, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (!0 === t.options.centerMode) o = t.slideCount; else if (t.options.asNavFor) for (; e < t.slideCount;) ++o, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else o = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return o - 1
    }, i.prototype.getLeft = function (t) {
        var e, i, o, n = this, s = 0;
        return n.slideOffset = 0, i = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = i * n.options.slidesToShow * -1), n.slideCount % n.options.slidesToScroll != 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (t > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth * -1, s = (n.options.slidesToShow - (t - n.slideCount)) * i * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, s = n.slideCount % n.options.slidesToScroll * i * -1))) : t + n.options.slidesToShow > n.slideCount && (n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth, s = (t + n.options.slidesToShow - n.slideCount) * i), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, s = 0), !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? t * n.slideWidth * -1 + n.slideOffset : t * i * -1 + s, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, i.prototype.getOption = i.prototype.slickGetOption = function (t) {
        return this.options[t]
    }, i.prototype.getNavigableIndexes = function () {
        var t, e = this, i = 0, o = 0, n = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) n.push(i), i = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return n
    }, i.prototype.getSlick = function () {
        return this
    }, i.prototype.getSlideCount = function () {
        var e, i, o = this;
        return i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (n, s) {
            return s.offsetLeft - i + t(s).outerWidth() / 2 > -1 * o.swipeLeft ? (e = s, !1) : void 0
        }), Math.abs(t(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, i.prototype.goTo = i.prototype.slickGoTo = function (t, e) {
        this.changeSlide({data: {message: "index", index: parseInt(t)}}, e)
    }, i.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, i.prototype.initADA = function () {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
            t(this).attr({role: "option", "aria-describedby": "slick-slide" + e.instanceUid + i})
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function (i) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, i.prototype.initArrowEvents = function () {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, this.changeSlide), this.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, this.changeSlide))
    }, i.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, i.prototype.initSlideEvents = function () {
        this.options.pauseOnHover && (this.$list.on("mouseenter.slick", t.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", t.proxy(this.interrupt, this, !1)))
    }, i.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, i.prototype.initUI = function () {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show()
    }, i.prototype.keyHandler = function (t) {
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === this.options.accessibility ? this.changeSlide({data: {message: !0 === this.options.rtl ? "next" : "previous"}}) : 39 === t.keyCode && !0 === this.options.accessibility && this.changeSlide({data: {message: !0 === this.options.rtl ? "previous" : "next"}}))
    }, i.prototype.lazyLoad = function () {
        function e(e) {
            t("img[data-lazy]", e).each(function () {
                var e = t(this), i = t(this).attr("data-lazy"), o = document.createElement("img");
                o.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        e.attr("src", i).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, i])
                    })
                }, o.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, i])
                }, o.src = i
            })
        }

        var i, o, n = this;
        !0 === n.options.centerMode ? !0 === n.options.infinite ? o = (i = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (i = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), o = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (i = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, o = Math.ceil(i + n.options.slidesToShow), !0 === n.options.fade && (i > 0 && i--, o <= n.slideCount && o++)), e(n.$slider.find(".slick-slide").slice(i, o)), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, i.prototype.loadSlider = function () {
        this.setPosition(), this.$slideTrack.css({opacity: 1}), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
    }, i.prototype.next = i.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, i.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, i.prototype.pause = i.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, i.prototype.play = i.prototype.slickPlay = function () {
        this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, this.interrupted = !1
    }, i.prototype.postSlide = function (t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
    }, i.prototype.prev = i.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, i.prototype.preventDefault = function (t) {
        t.preventDefault()
    }, i.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var i, o, n, s = this, r = t("img[data-lazy]", s.$slider);
        r.length ? (i = r.first(), o = i.attr("data-lazy"), (n = document.createElement("img")).onload = function () {
            i.attr("src", o).removeAttr("data-lazy").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, i, o]), s.progressiveLazyLoad()
        }, n.onerror = function () {
            3 > e ? setTimeout(function () {
                s.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, o]), s.progressiveLazyLoad())
        }, n.src = o) : s.$slider.trigger("allImagesLoaded", [s])
    }, i.prototype.refresh = function (e) {
        var i, o, n = this;
        o = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > o && (n.currentSlide = o), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), t.extend(n, n.initials, {currentSlide: i}), n.init(), e || n.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, i.prototype.registerBreakpoints = function () {
        var e, i, o, n = this, s = n.options.responsive || null;
        if ("array" === t.type(s) && s.length) {
            n.respondTo = n.options.respondTo || "window";
            for (e in s) if (o = n.breakpoints.length - 1, i = s[e].breakpoint, s.hasOwnProperty(e)) {
                for (; o >= 0;) n.breakpoints[o] && n.breakpoints[o] === i && n.breakpoints.splice(o, 1), o--;
                n.breakpoints.push(i), n.breakpointSettings[i] = s[e].settings
            }
            n.breakpoints.sort(function (t, e) {
                return n.options.mobileFirst ? t - e : e - t
            })
        }
    }, i.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, i.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, i.prototype.removeSlide = i.prototype.slickRemove = function (t, e, i) {
        var o = this;
        return t = "boolean" == typeof t ? !0 === (e = t) ? 0 : o.slideCount - 1 : !0 === e ? --t : t, !(o.slideCount < 1 || 0 > t || t > o.slideCount - 1) && (o.unload(), !0 === i ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(t).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
    }, i.prototype.setCSS = function (t) {
        var e, i, o = this, n = {};
        !0 === o.options.rtl && (t = -t), e = "left" == o.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(t) + "px" : "0px", n[o.positionProp] = t, !1 === o.transformsEnabled ? o.$slideTrack.css(n) : (n = {}, !1 === o.cssTransitions ? (n[o.animType] = "translate(" + e + ", " + i + ")", o.$slideTrack.css(n)) : (n[o.animType] = "translate3d(" + e + ", " + i + ", 0px)", o.$slideTrack.css(n)))
    }, i.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({padding: "0px " + t.options.centerPadding}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({padding: t.options.centerPadding + " 0px"})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, i.prototype.setFade = function () {
        var e, i = this;
        i.$slides.each(function (o, n) {
            e = i.slideWidth * o * -1, !0 === i.options.rtl ? t(n).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(n).css({position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0})
        }), i.$slides.eq(i.currentSlide).css({zIndex: i.options.zIndex - 1, opacity: 1})
    }, i.prototype.setHeight = function () {
        if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
            var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
            this.$list.css("height", t)
        }
    }, i.prototype.setOption = i.prototype.slickSetOption = function () {
        var e, i, o, n, s, r = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (o = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (o = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[o] = n; else if ("multiple" === s) t.each(o, function (t, e) {
            r.options[t] = e
        }); else if ("responsive" === s) for (i in n) if ("array" !== t.type(r.options.responsive)) r.options.responsive = [n[i]]; else {
            for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === n[i].breakpoint && r.options.responsive.splice(e, 1), e--;
            r.options.responsive.push(n[i])
        }
        a && (r.unload(), r.reinit())
    }, i.prototype.setPosition = function () {
        this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this])
    }, i.prototype.setProps = function () {
        var t = this, e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, i.prototype.setSlideClasses = function (t) {
        var e, i, o, n, s = this;
        i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode ? (e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = s.options.slidesToShow + t, i.slice(o - e + 1, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = s.slideCount % s.options.slidesToShow, o = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(o - (s.options.slidesToShow - n), o + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
    }, i.prototype.setupInfinite = function () {
        var e, i, o, n = this;
        if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (i = null, n.slideCount > n.options.slidesToShow)) {
            for (o = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - o; e -= 1) i = e - 1, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (e = 0; o > e; e += 1) i = e, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                t(this).attr("id", "")
            })
        }
    }, i.prototype.interrupt = function (t) {
        t || this.autoPlay(), this.interrupted = t
    }, i.prototype.selectHandler = function (e) {
        var i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        return o || (o = 0), this.slideCount <= this.options.slidesToShow ? (this.setSlideClasses(o), void this.asNavFor(o)) : void this.slideHandler(o)
    }, i.prototype.slideHandler = function (t, e, i) {
        var o, n, s, r, a, l = null, c = this;
        return e = e || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === e && c.asNavFor(t), o = t, l = c.getLeft(o), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) ? void (!1 === c.options.fade && (o = c.currentSlide, !0 !== i ? c.animateSlide(r, function () {
            c.postSlide(o)
        }) : c.postSlide(o))) : !1 === c.options.infinite && !0 === c.options.centerMode && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void (!1 === c.options.fade && (o = c.currentSlide, !0 !== i ? c.animateSlide(r, function () {
            c.postSlide(o)
        }) : c.postSlide(o))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), n = 0 > o ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + o : o >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : o - c.slideCount : o, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, n]), s = c.currentSlide, c.currentSlide = n, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(n, function () {
            c.postSlide(n)
        })) : c.postSlide(n), void c.animateHeight()) : void (!0 !== i ? c.animateSlide(l, function () {
            c.postSlide(n)
        }) : c.postSlide(n))))
    }, i.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, i.prototype.swipeDirection = function () {
        var t, e, i, o;
        return t = this.touchObject.startX - this.touchObject.curX, e = this.touchObject.startY - this.touchObject.curY, i = Math.atan2(e, t), 0 > (o = Math.round(180 * i / Math.PI)) && (o = 360 - Math.abs(o)), 45 >= o && o >= 0 ? !1 === this.options.rtl ? "left" : "right" : 360 >= o && o >= 315 ? !1 === this.options.rtl ? "left" : "right" : o >= 135 && 225 >= o ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? o >= 35 && 135 >= o ? "down" : "up" : "vertical"
    }, i.prototype.swipeEnd = function (t) {
        var e, i, o = this;
        if (o.dragging = !1, o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (i = o.swipeDirection()) {
                case"left":
                case"down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != i && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, i]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, i.prototype.swipeHandler = function (t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case"start":
                e.swipeStart(t);
                break;
            case"move":
                e.swipeMove(t);
                break;
            case"end":
                e.swipeEnd(t)
        }
    }, i.prototype.swipeMove = function (t) {
        var e, i, o, n, s, r = this;
        return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), "vertical" !== (i = r.swipeDirection()) ? (void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && t.preventDefault(), n = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (n = r.touchObject.curY > r.touchObject.startY ? 1 : -1), o = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (o = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = e + o * n : r.swipeLeft = e + o * (r.$list.height() / r.listWidth) * n, !0 === r.options.verticalSwiping && (r.swipeLeft = e + o * n), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
    }, i.prototype.swipeStart = function (t) {
        var e, i = this;
        return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void (i.dragging = !0))
    }, i.prototype.unfilterSlides = i.prototype.slickUnfilter = function () {
        null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit())
    }, i.prototype.unload = function () {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, i.prototype.unslick = function (t) {
        this.$slider.trigger("unslick", [this, t]), this.destroy()
    }, i.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, i.prototype.updateDots = function () {
        null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, i.prototype.visibility = function () {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, t.fn.slick = function () {
        var t, e, o = arguments[0], n = Array.prototype.slice.call(arguments, 1), s = this.length;
        for (t = 0; s > t; t++) if ("object" == typeof o || void 0 === o ? this[t].slick = new i(this[t], o) : e = this[t].slick[o].apply(this[t].slick, n), void 0 !== e) return e;
        return this
    }
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    var e = !1, i = !1, o = 0, n = 2e3, s = 0, r = ["webkit", "ms", "moz", "o"], a = window.requestAnimationFrame || !1,
        l = window.cancelAnimationFrame || !1;
    if (!a) for (var c in r) {
        var h = r[c];
        if (a = window[h + "RequestAnimationFrame"]) {
            l = window[h + "CancelAnimationFrame"] || window[h + "CancelRequestAnimationFrame"];
            break
        }
    }
    var d, u = window.MutationObserver || window.WebKitMutationObserver || !1, p = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "6px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 60,
        mousescrollstep: 24,
        touchbehavior: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        railhoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {top: 0, right: 0, left: 0, bottom: 0},
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: .3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: 0 < (d = (d = document.getElementsByTagName("script")).length ? d[d.length - 1].src.split("?")[0] : "").split("/").length ? d.split("/").slice(0, -1).join("/") + "/" : "",
        preventmultitouchscrolling: !0,
        disablemutationobserver: !1
    }, f = !1, m = function (t) {
        var e = this;
        this.nc = t, this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0, this.snapy = this.snapx = !1, this.demuly = this.demulx = 0, this.lastscrolly = this.lastscrollx = -1, this.timer = this.chky = this.chkx = 0, this.time = function () {
            return +new Date
        }, this.reset = function (t, i) {
            e.stop();
            var o = e.time();
            e.steptime = 0, e.lasttime = o, e.speedx = 0, e.speedy = 0, e.lastx = t, e.lasty = i, e.lastscrollx = -1, e.lastscrolly = -1
        }, this.update = function (t, i) {
            var o = e.time();
            e.steptime = o - e.lasttime, e.lasttime = o, o = i - e.lasty;
            var n = t - e.lastx, s = (s = e.nc.getScrollTop()) + o, r = (r = e.nc.getScrollLeft()) + n;
            e.snapx = 0 > r || r > e.nc.page.maxw, e.snapy = 0 > s || s > e.nc.page.maxh, e.speedx = n, e.speedy = o, e.lastx = t, e.lasty = i
        }, this.stop = function () {
            e.nc.unsynched("domomentum2d"), e.timer && clearTimeout(e.timer), e.timer = 0, e.lastscrollx = -1, e.lastscrolly = -1
        }, this.doSnapy = function (t, i) {
            var o = !1;
            0 > i ? (i = 0, o = !0) : i > e.nc.page.maxh && (i = e.nc.page.maxh, o = !0), 0 > t ? (t = 0, o = !0) : t > e.nc.page.maxw && (t = e.nc.page.maxw, o = !0), o ? e.nc.doScrollPos(t, i, e.nc.opt.snapbackspeed) : e.nc.triggerScrollEnd()
        }, this.doMomentum = function (t) {
            var i = e.time(), o = t ? i + t : e.lasttime;
            t = e.nc.getScrollLeft();
            var n = e.nc.getScrollTop(), s = e.nc.page.maxh, r = e.nc.page.maxw;
            if (e.speedx = 0 < r ? Math.min(60, e.speedx) : 0, e.speedy = 0 < s ? Math.min(60, e.speedy) : 0, o = o && 60 >= i - o, (0 > n || n > s || 0 > t || t > r) && (o = !1), t = !(!e.speedx || !o) && e.speedx, e.speedy && o && e.speedy || t) {
                var a = Math.max(16, e.steptime);
                50 < a && (t = a / 50, e.speedx *= t, e.speedy *= t, a = 50), e.demulxy = 0, e.lastscrollx = e.nc.getScrollLeft(), e.chkx = e.lastscrollx, e.lastscrolly = e.nc.getScrollTop(), e.chky = e.lastscrolly;
                var l = e.lastscrollx, c = e.lastscrolly, h = function () {
                    var t = 600 < e.time() - i ? .04 : .02;
                    e.speedx && (l = Math.floor(e.lastscrollx - e.speedx * (1 - e.demulxy)), e.lastscrollx = l, 0 > l || l > r) && (t = .1), e.speedy && (c = Math.floor(e.lastscrolly - e.speedy * (1 - e.demulxy)), e.lastscrolly = c, 0 > c || c > s) && (t = .1), e.demulxy = Math.min(1, e.demulxy + t), e.nc.synched("domomentum2d", function () {
                        e.speedx && (e.nc.getScrollLeft(), e.chkx = l, e.nc.setScrollLeft(l)), e.speedy && (e.nc.getScrollTop(), e.chky = c, e.nc.setScrollTop(c)), e.timer || (e.nc.hideCursor(), e.doSnapy(l, c))
                    }), 1 > e.demulxy ? e.timer = setTimeout(h, a) : (e.stop(), e.nc.hideCursor(), e.doSnapy(l, c))
                };
                h()
            } else e.doSnapy(e.nc.getScrollLeft(), e.nc.getScrollTop())
        }
    }, g = t.fn.scrollTop;
    t.cssHooks.pageYOffset = {
        get: function (e, i, o) {
            return (i = t.data(e, "__nicescroll") || !1) && i.ishwscroll ? i.getScrollTop() : g.call(e)
        }, set: function (e, i) {
            var o = t.data(e, "__nicescroll") || !1;
            return o && o.ishwscroll ? o.setScrollTop(parseInt(i)) : g.call(e, i), this
        }
    }, t.fn.scrollTop = function (e) {
        if (void 0 === e) {
            var i = this[0] && t.data(this[0], "__nicescroll") || !1;
            return i && i.ishwscroll ? i.getScrollTop() : g.call(this)
        }
        return this.each(function () {
            var i = t.data(this, "__nicescroll") || !1;
            i && i.ishwscroll ? i.setScrollTop(parseInt(e)) : g.call(t(this), e)
        })
    };
    var v = t.fn.scrollLeft;
    t.cssHooks.pageXOffset = {
        get: function (e, i, o) {
            return (i = t.data(e, "__nicescroll") || !1) && i.ishwscroll ? i.getScrollLeft() : v.call(e)
        }, set: function (e, i) {
            var o = t.data(e, "__nicescroll") || !1;
            return o && o.ishwscroll ? o.setScrollLeft(parseInt(i)) : v.call(e, i), this
        }
    }, t.fn.scrollLeft = function (e) {
        if (void 0 === e) {
            var i = this[0] && t.data(this[0], "__nicescroll") || !1;
            return i && i.ishwscroll ? i.getScrollLeft() : v.call(this)
        }
        return this.each(function () {
            var i = t.data(this, "__nicescroll") || !1;
            i && i.ishwscroll ? i.setScrollLeft(parseInt(e)) : v.call(t(this), e)
        })
    };
    var y = function (e) {
        var i = this;
        if (this.length = 0, this.name = "nicescrollarray", this.each = function (e) {
            return t.each(i, e), i
        }, this.push = function (t) {
            i[i.length] = t, i.length++
        }, this.eq = function (t) {
            return i[t]
        }, e) for (var o = 0; o < e.length; o++) {
            var n = t.data(e[o], "__nicescroll") || !1;
            n && (this[this.length] = n, this.length++)
        }
        return this
    };
    !function (t, e, i) {
        for (var o = 0; o < e.length; o++) i(t, e[o])
    }(y.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function (t, e) {
        t[e] = function () {
            var t = arguments;
            return this.each(function () {
                this[e].apply(this, t)
            })
        }
    }), t.fn.getNiceScroll = function (e) {
        return void 0 === e ? new y(this) : this[e] && t.data(this[e], "__nicescroll") || !1
    }, t.expr[":"].nicescroll = function (e) {
        return void 0 !== t.data(e, "__nicescroll")
    }, t.fn.niceScroll = function (r, c) {
        void 0 !== c || "object" != typeof r || "jquery" in r || (c = r, r = !1), c = t.extend({}, c);
        var h = new y;
        void 0 === c && (c = {}), r && (c.doc = t(r), c.win = t(this));
        var d = !("doc" in c);
        return d || "win" in c || (c.win = t(this)), this.each(function () {
            var r = t(this).data("__nicescroll") || !1;
            r || (c.doc = d ? t(this) : c.doc, r = new function (r, c) {
                function h() {
                    var t = y.doc.css(x.trstyle);
                    return !(!t || "matrix" != t.substr(0, 6)) && t.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
                }

                function d(t, e, i) {
                    return e = t.css(e), t = parseFloat(e), isNaN(t) ? (i = 3 == (t = T[e] || 0) ? i ? y.win.outerHeight() - y.win.innerHeight() : y.win.outerWidth() - y.win.innerWidth() : 1, y.isie8 && t && (t += 1), i ? t : 0) : t
                }

                function g(t, e, i, o) {
                    y._bind(t, e, function (o) {
                        var n = {
                            original: o = o || window.event,
                            target: o.target || o.srcElement,
                            type: "wheel",
                            deltaMode: "MozMousePixelScroll" == o.type ? 0 : 1,
                            deltaX: 0,
                            deltaZ: 0,
                            preventDefault: function () {
                                return o.preventDefault ? o.preventDefault() : o.returnValue = !1, !1
                            },
                            stopImmediatePropagation: function () {
                                o.stopImmediatePropagation ? o.stopImmediatePropagation() : o.cancelBubble = !0
                            }
                        };
                        return "mousewheel" == e ? (o.wheelDeltaX && (n.deltaX = -.025 * o.wheelDeltaX), o.wheelDeltaY && (n.deltaY = -.025 * o.wheelDeltaY), n.deltaY || n.deltaX || (n.deltaY = -.025 * o.wheelDelta)) : n.deltaY = o.detail, i.call(t, n)
                    }, o)
                }

                function v(t, e, i) {
                    var o, n;
                    if (0 == t.deltaMode ? (o = -Math.floor(y.opt.mousescrollstep / 54 * t.deltaX), n = -Math.floor(y.opt.mousescrollstep / 54 * t.deltaY)) : 1 == t.deltaMode && (o = -Math.floor(t.deltaX * y.opt.mousescrollstep), n = -Math.floor(t.deltaY * y.opt.mousescrollstep)), e && y.opt.oneaxismousemode && 0 == o && n && (o = n, n = 0, i && (0 > o ? y.getScrollLeft() >= y.page.maxw : 0 >= y.getScrollLeft()) && (n = o, o = 0)), y.isrtlmode && (o = -o), o && (y.scrollmom && y.scrollmom.stop(), y.lastdeltax += o, y.debounced("mousewheelx", function () {
                        var t = y.lastdeltax;
                        y.lastdeltax = 0, y.rail.drag || y.doScrollLeftBy(t)
                    }, 15)), n) {
                        if (y.opt.nativeparentscrolling && i && !y.ispage && !y.zoomactive) if (0 > n) {
                            if (y.getScrollTop() >= y.page.maxh) return !0
                        } else if (0 >= y.getScrollTop()) return !0;
                        y.scrollmom && y.scrollmom.stop(), y.lastdeltay += n, y.synched("mousewheely", function () {
                            var t = y.lastdeltay;
                            y.lastdeltay = 0, y.rail.drag || y.doScrollBy(t)
                        }, 15)
                    }
                    return t.stopImmediatePropagation(), t.preventDefault()
                }

                var y = this;
                if (this.version = "3.6.8", this.name = "nicescroll", this.me = c, this.opt = {
                    doc: t("body"),
                    win: !1
                }, t.extend(this.opt, p), this.opt.snapbackspeed = 80, r) for (var w in y.opt) void 0 !== r[w] && (y.opt[w] = r[w]);
                if (y.opt.disablemutationobserver && (u = !1), this.iddoc = (this.doc = y.opt.doc) && this.doc[0] && this.doc[0].id || "", this.ispage = /^BODY|HTML/.test(y.opt.win ? y.opt.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== y.opt.win, this.win = y.opt.win || (this.ispage ? t(window) : this.doc), this.docscroll = this.ispage && !this.haswrapper ? t(window) : this.win, this.body = t("body"), this.iframe = this.isfixed = this.viewport = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != y.opt.autohidemode, this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1, this.scroll = {
                    x: 0,
                    y: 0
                }, this.scrollratio = {
                    x: 0,
                    y: 0
                }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == this.opt.rtlmode) {
                    var b = (w = this.win[0] == window ? this.body : this.win).css("writing-mode") || w.css("-webkit-writing-mode") || w.css("-ms-writing-mode") || w.css("-moz-writing-mode");
                    "horizontal-tb" == b || "lr-tb" == b || "" == b ? (this.isrtlmode = "rtl" == w.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == b || "tb" == b || "tb-rl" == b || "rl-tb" == b, this.isvertical = "vertical-rl" == b || "tb" == b || "tb-rl" == b)
                } else this.isrtlmode = !0 === this.opt.rtlmode, this.isvertical = !1;
                this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1;
                do {
                    this.id = "ascrail" + n++
                } while (document.getElementById(this.id));
                this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1, this.visibility = !0, this.hidden = this.locked = this.railslocked = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = y.opt.overflowx, this.overflowy = y.opt.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltay = this.lastdeltax = 0, this.detected = function () {
                    if (f) return f;
                    var t = document.createElement("DIV"), e = t.style, i = navigator.userAgent, o = navigator.platform,
                        n = {haspointerlock: "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document};
                    n.isopera = "opera" in window, n.isopera12 = n.isopera && "getUserMedia" in navigator, n.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), n.isie = "all" in document && "attachEvent" in t && !n.isopera, n.isieold = n.isie && !("msInterpolationMode" in e), n.isie7 = n.isie && !n.isieold && (!("documentMode" in document) || 7 == document.documentMode), n.isie8 = n.isie && "documentMode" in document && 8 == document.documentMode, n.isie9 = n.isie && "performance" in window && 9 == document.documentMode, n.isie10 = n.isie && "performance" in window && 10 == document.documentMode, n.isie11 = "msRequestFullscreen" in t && 11 <= document.documentMode, n.isieedge12 = navigator.userAgent.match(/Edge\/12\./), n.isieedge = "msOverflowStyle" in t, n.ismodernie = n.isie11 || n.isieedge, n.isie9mobile = /iemobile.9/i.test(i), n.isie9mobile && (n.isie9 = !1), n.isie7mobile = !n.isie9mobile && n.isie7 && /iemobile/i.test(i), n.ismozilla = "MozAppearance" in e, n.iswebkit = "WebkitAppearance" in e, n.ischrome = "chrome" in window, n.ischrome38 = n.ischrome && "touchAction" in e, n.ischrome22 = !n.ischrome38 && n.ischrome && n.haspointerlock, n.ischrome26 = !n.ischrome38 && n.ischrome && "transition" in e, n.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window, n.hasw3ctouch = !!window.PointerEvent && (0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints), n.hasmstouch = !n.hasw3ctouch && (window.MSPointerEvent || !1), n.ismac = /^mac$/i.test(o), n.isios = n.cantouch && /iphone|ipad|ipod/i.test(o), n.isios4 = n.isios && !("seal" in Object), n.isios7 = n.isios && "webkitHidden" in document, n.isios8 = n.isios && "hidden" in document, n.isandroid = /android/i.test(i), n.haseventlistener = "addEventListener" in t, n.trstyle = !1, n.hastransform = !1, n.hastranslate3d = !1, n.transitionstyle = !1, n.hastransition = !1, n.transitionend = !1, o = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
                    for (i = 0; i < o.length; i++) if (void 0 !== e[o[i]]) {
                        n.trstyle = o[i];
                        break
                    }
                    n.hastransform = !!n.trstyle, n.hastransform && (e[n.trstyle] = "translate3d(1px,2px,3px)", n.hastranslate3d = /translate3d/.test(e[n.trstyle])), n.transitionstyle = !1, n.prefixstyle = "", n.transitionend = !1, o = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" ");
                    var s = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "),
                        r = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" ");
                    for (i = 0; i < o.length; i++) if (o[i] in e) {
                        n.transitionstyle = o[i], n.prefixstyle = s[i], n.transitionend = r[i];
                        break
                    }
                    n.ischrome26 && (n.prefixstyle = s[1]), n.hastransition = n.transitionstyle;
                    t:{
                        for (i = ["grab", "-webkit-grab", "-moz-grab"], (n.ischrome && !n.ischrome38 || n.isie) && (i = []), o = 0; o < i.length; o++) if (s = i[o], e.cursor = s, e.cursor == s) {
                            e = s;
                            break t
                        }
                        e = "url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize"
                    }
                    return n.cursorgrabvalue = e, n.hasmousecapture = "setCapture" in t, n.hasMutationObserver = !1 !== u, f = n
                }();
                var x = t.extend({}, this.detected);
                this.ishwscroll = (this.canhwscroll = x.hastransform && y.opt.hwacceleration) && y.haswrapper, this.hasreversehr = !(!this.isrtlmode || (this.isvertical ? x.iswebkit || x.isie || x.isie11 : x.iswebkit || x.isie && !x.isie10 && !x.isie11)), this.istouchcapable = !1, (x.cantouch || !x.hasw3ctouch && !x.hasmstouch) && (!x.cantouch || x.isios || x.isandroid || !x.iswebkit && !x.ismozilla) || (this.istouchcapable = !0), y.opt.enablemouselockapi || (x.hasmousecapture = !1, x.haspointerlock = !1), this.debounced = function (t, e, i) {
                    y && (y.delaylist[t] || (e.call(y), y.delaylist[t] = {
                        h: a(function () {
                            y.delaylist[t].fn.call(y), y.delaylist[t] = !1
                        }, i)
                    }), y.delaylist[t].fn = e)
                };
                var k = !1;
                this.synched = function (t, e) {
                    return y.synclist[t] = e, k || (a(function () {
                        if (y) {
                            k = !1;
                            for (var t in y.synclist) {
                                var e = y.synclist[t];
                                e && e.call(y), y.synclist[t] = !1
                            }
                        }
                    }), k = !0), t
                }, this.unsynched = function (t) {
                    y.synclist[t] && (y.synclist[t] = !1)
                }, this.css = function (t, e) {
                    for (var i in e) y.saved.css.push([t, i, t.css(i)]), t.css(i, e[i])
                }, this.scrollTop = function (t) {
                    return void 0 === t ? y.getScrollTop() : y.setScrollTop(t)
                }, this.scrollLeft = function (t) {
                    return void 0 === t ? y.getScrollLeft() : y.setScrollLeft(t)
                };
                var _ = function (t, e, i, o, n, s, r) {
                    this.st = t, this.ed = e, this.spd = i, this.p1 = o || 0, this.p2 = n || 1, this.p3 = s || 0, this.p4 = r || 1, this.ts = (new Date).getTime(), this.df = this.ed - this.st
                };
                if (_.prototype = {
                    B2: function (t) {
                        return 3 * t * t * (1 - t)
                    }, B3: function (t) {
                        return 3 * t * (1 - t) * (1 - t)
                    }, B4: function (t) {
                        return (1 - t) * (1 - t) * (1 - t)
                    }, getNow: function () {
                        var t = 1 - ((new Date).getTime() - this.ts) / this.spd,
                            e = this.B2(t) + this.B3(t) + this.B4(t);
                        return 0 > t ? this.ed : this.st + Math.round(this.df * e)
                    }, update: function (t, e) {
                        return this.st = this.getNow(), this.ed = t, this.spd = e, this.ts = (new Date).getTime(), this.df = this.ed - this.st, this
                    }
                }, this.ishwscroll) {
                    this.doc.translate = {
                        x: 0,
                        y: 0,
                        tx: "0px",
                        ty: "0px"
                    }, x.hastranslate3d && x.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function (t) {
                        if (!t) {
                            if (t = h()) return 16 == t.length ? -t[13] : -t[5];
                            if (y.timerscroll && y.timerscroll.bz) return y.timerscroll.bz.getNow()
                        }
                        return y.doc.translate.y
                    }, this.getScrollLeft = function (t) {
                        if (!t) {
                            if (t = h()) return 16 == t.length ? -t[12] : -t[4];
                            if (y.timerscroll && y.timerscroll.bh) return y.timerscroll.bh.getNow()
                        }
                        return y.doc.translate.x
                    }, this.notifyScrollEvent = function (t) {
                        var e = document.createEvent("UIEvents");
                        e.initUIEvent("scroll", !1, !0, window, 1), e.niceevent = !0, t.dispatchEvent(e)
                    };
                    var $ = this.isrtlmode ? 1 : -1;
                    x.hastranslate3d && y.opt.enabletranslate3d ? (this.setScrollTop = function (t, e) {
                        y.doc.translate.y = t, y.doc.translate.ty = -1 * t + "px", y.doc.css(x.trstyle, "translate3d(" + y.doc.translate.tx + "," + y.doc.translate.ty + ",0px)"), e || y.notifyScrollEvent(y.win[0])
                    }, this.setScrollLeft = function (t, e) {
                        y.doc.translate.x = t, y.doc.translate.tx = t * $ + "px", y.doc.css(x.trstyle, "translate3d(" + y.doc.translate.tx + "," + y.doc.translate.ty + ",0px)"), e || y.notifyScrollEvent(y.win[0])
                    }) : (this.setScrollTop = function (t, e) {
                        y.doc.translate.y = t, y.doc.translate.ty = -1 * t + "px", y.doc.css(x.trstyle, "translate(" + y.doc.translate.tx + "," + y.doc.translate.ty + ")"), e || y.notifyScrollEvent(y.win[0])
                    }, this.setScrollLeft = function (t, e) {
                        y.doc.translate.x = t, y.doc.translate.tx = t * $ + "px", y.doc.css(x.trstyle, "translate(" + y.doc.translate.tx + "," + y.doc.translate.ty + ")"), e || y.notifyScrollEvent(y.win[0])
                    })
                } else this.getScrollTop = function () {
                    return y.docscroll.scrollTop()
                }, this.setScrollTop = function (t) {
                    return setTimeout(function () {
                        y && y.docscroll.scrollTop(t)
                    }, 1)
                }, this.getScrollLeft = function () {
                    return y.hasreversehr ? y.detected.ismozilla ? y.page.maxw - Math.abs(y.docscroll.scrollLeft()) : y.page.maxw - y.docscroll.scrollLeft() : y.docscroll.scrollLeft()
                }, this.setScrollLeft = function (t) {
                    return setTimeout(function () {
                        if (y) return y.hasreversehr && (t = y.detected.ismozilla ? -(y.page.maxw - t) : y.page.maxw - t), y.docscroll.scrollLeft(t)
                    }, 1)
                };
                this.getTarget = function (t) {
                    return !!t && (t.target ? t.target : !!t.srcElement && t.srcElement)
                }, this.hasParent = function (t, e) {
                    if (!t) return !1;
                    for (var i = t.target || t.srcElement || t || !1; i && i.id != e;) i = i.parentNode || !1;
                    return !1 !== i
                };
                var T = {thin: 1, medium: 3, thick: 5};
                this.getDocumentScrollOffset = function () {
                    return {
                        top: window.pageYOffset || document.documentElement.scrollTop,
                        left: window.pageXOffset || document.documentElement.scrollLeft
                    }
                }, this.getOffset = function () {
                    if (y.isfixed) {
                        var t = y.win.offset(), e = y.getDocumentScrollOffset();
                        return t.top -= e.top, t.left -= e.left, t
                    }
                    return t = y.win.offset(), y.viewport ? (e = y.viewport.offset(), {
                        top: t.top - e.top,
                        left: t.left - e.left
                    }) : t
                }, this.updateScrollBar = function (t) {
                    var e, i, o;
                    if (y.ishwscroll) y.rail.css({height: y.win.innerHeight() - (y.opt.railpadding.top + y.opt.railpadding.bottom)}), y.railh && y.railh.css({width: y.win.innerWidth() - (y.opt.railpadding.left + y.opt.railpadding.right)}); else {
                        var n = y.getOffset();
                        e = n.top, i = n.left - (y.opt.railpadding.left + y.opt.railpadding.right), e += d(y.win, "border-top-width", !0), i += y.rail.align ? y.win.outerWidth() - d(y.win, "border-right-width") - y.rail.width : d(y.win, "border-left-width"), (o = y.opt.railoffset) && (o.top && (e += o.top), o.left && (i += o.left)), y.railslocked || y.rail.css({
                            top: e,
                            left: i,
                            height: (t ? t.h : y.win.innerHeight()) - (y.opt.railpadding.top + y.opt.railpadding.bottom)
                        }), y.zoom && y.zoom.css({
                            top: e + 1,
                            left: 1 == y.rail.align ? i - 20 : i + y.rail.width + 4
                        }), y.railh && !y.railslocked && (e = n.top, i = n.left, (o = y.opt.railhoffset) && (o.top && (e += o.top), o.left && (i += o.left)), t = y.railh.align ? e + d(y.win, "border-top-width", !0) + y.win.innerHeight() - y.railh.height : e + d(y.win, "border-top-width", !0), i += d(y.win, "border-left-width"), y.railh.css({
                            top: t - (y.opt.railpadding.top + y.opt.railpadding.bottom),
                            left: i,
                            width: y.railh.width
                        }))
                    }
                }, this.doRailClick = function (t, e, i) {
                    var o;
                    y.railslocked || (y.cancelEvent(t), e ? (e = i ? y.doScrollLeft : y.doScrollTop)(o = i ? (t.pageX - y.railh.offset().left - y.cursorwidth / 2) * y.scrollratio.x : (t.pageY - y.rail.offset().top - y.cursorheight / 2) * y.scrollratio.y) : (e = i ? y.doScrollLeftBy : y.doScrollBy, o = i ? y.scroll.x : y.scroll.y, t = i ? t.pageX - y.railh.offset().left : t.pageY - y.rail.offset().top, i = i ? y.view.w : y.view.h, e(o >= t ? i : -i)))
                }, y.hasanimationframe = a, y.hascancelanimationframe = l, y.hasanimationframe ? y.hascancelanimationframe || (l = function () {
                    y.cancelAnimationFrame = !0
                }) : (a = function (t) {
                    return setTimeout(t, 15 - Math.floor(+new Date / 1e3) % 16)
                }, l = clearTimeout), this.init = function () {
                    if (y.saved.css = [], x.isie7mobile || x.isoperamini) return !0;
                    x.hasmstouch && y.css(y.ispage ? t("html") : y.win, {_touchaction: "none"});
                    var n = x.ismodernie || x.isie10 ? {"-ms-overflow-style": "none"} : {"overflow-y": "hidden"};
                    if (y.zindex = "auto", y.zindex = y.ispage || "auto" != y.opt.zindex ? y.opt.zindex : function () {
                        var t = y.win;
                        if ("zIndex" in t) return t.zIndex();
                        for (; 0 < t.length && 9 != t[0].nodeType;) {
                            var e = t.css("zIndex");
                            if (!isNaN(e) && 0 != e) return parseInt(e);
                            t = t.parent()
                        }
                        return !1
                    }() || "auto", !y.ispage && "auto" != y.zindex && y.zindex > s && (s = y.zindex), y.isie && 0 == y.zindex && "auto" == y.opt.zindex && (y.zindex = "auto"), !y.ispage || !x.cantouch && !x.isieold && !x.isie9mobile) {
                        var r = y.docscroll;
                        y.ispage && (r = y.haswrapper ? y.win : y.doc), x.isie9mobile || y.css(r, n), y.ispage && x.isie7 && ("BODY" == y.doc[0].nodeName ? y.css(t("html"), {"overflow-y": "hidden"}) : "HTML" == y.doc[0].nodeName && y.css(t("body"), n)), !x.isios || y.ispage || y.haswrapper || y.css(t("body"), {"-webkit-overflow-scrolling": "touch"});
                        var a = t(document.createElement("div"));
                        a.css({
                            position: "relative",
                            top: 0,
                            float: "right",
                            width: y.opt.cursorwidth,
                            height: 0,
                            "background-color": y.opt.cursorcolor,
                            border: y.opt.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": y.opt.cursorborderradius,
                            "-moz-border-radius": y.opt.cursorborderradius,
                            "border-radius": y.opt.cursorborderradius
                        }), a.hborder = parseFloat(a.outerHeight() - a.innerHeight()), a.addClass("nicescroll-cursors"), y.cursor = a, (w = t(document.createElement("div"))).attr("id", y.id), w.addClass("nicescroll-rails nicescroll-rails-vr");
                        var l, c, h, d, p = ["left", "right", "top", "bottom"];
                        for (h in p) c = p[h], (l = y.opt.railpadding[c]) ? w.css("padding-" + c, l + "px") : y.opt.railpadding[c] = 0;
                        if (w.append(a), w.width = Math.max(parseFloat(y.opt.cursorwidth), a.outerWidth()), w.css({
                            width: w.width + "px",
                            zIndex: y.zindex,
                            background: y.opt.background,
                            cursor: "default"
                        }), w.visibility = !0, w.scrollable = !0, w.align = "left" == y.opt.railalign ? 0 : 1, y.rail = w, a = y.rail.drag = !1, !y.opt.boxzoom || y.ispage || x.isieold || (a = document.createElement("div"), y.bind(a, "click", y.doZoom), y.bind(a, "mouseenter", function () {
                            y.zoom.css("opacity", y.opt.cursoropacitymax)
                        }), y.bind(a, "mouseleave", function () {
                            y.zoom.css("opacity", y.opt.cursoropacitymin)
                        }), y.zoom = t(a), y.zoom.css({
                            cursor: "pointer",
                            zIndex: y.zindex,
                            backgroundImage: "url(" + y.opt.scriptpath + "zoomico.png)",
                            height: 18,
                            width: 18,
                            backgroundPosition: "0px 0px"
                        }), y.opt.dblclickzoom && y.bind(y.win, "dblclick", y.doZoom), x.cantouch && y.opt.gesturezoom && (y.ongesturezoom = function (t) {
                            return 1.5 < t.scale && y.doZoomIn(t), .8 > t.scale && y.doZoomOut(t), y.cancelEvent(t)
                        }, y.bind(y.win, "gestureend", y.ongesturezoom))), y.railh = !1, y.opt.horizrailenabled && (y.css(r, {overflowX: "hidden"}), (a = t(document.createElement("div"))).css({
                            position: "absolute",
                            top: 0,
                            height: y.opt.cursorwidth,
                            width: 0,
                            backgroundColor: y.opt.cursorcolor,
                            border: y.opt.cursorborder,
                            backgroundClip: "padding-box",
                            "-webkit-border-radius": y.opt.cursorborderradius,
                            "-moz-border-radius": y.opt.cursorborderradius,
                            "border-radius": y.opt.cursorborderradius
                        }), x.isieold && a.css("overflow", "hidden"), a.wborder = parseFloat(a.outerWidth() - a.innerWidth()), a.addClass("nicescroll-cursors"), y.cursorh = a, (d = t(document.createElement("div"))).attr("id", y.id + "-hr"), d.addClass("nicescroll-rails nicescroll-rails-hr"), d.height = Math.max(parseFloat(y.opt.cursorwidth), a.outerHeight()), d.css({
                            height: d.height + "px",
                            zIndex: y.zindex,
                            background: y.opt.background
                        }), d.append(a), d.visibility = !0, d.scrollable = !0, d.align = "top" == y.opt.railvalign ? 0 : 1, y.railh = d, y.railh.drag = !1), y.ispage ? (w.css({
                            position: "fixed",
                            top: 0,
                            height: "100%"
                        }), w.align ? w.css({right: 0}) : w.css({left: 0}), y.body.append(w), y.railh && (d.css({
                            position: "fixed",
                            left: 0,
                            width: "100%"
                        }), d.align ? d.css({bottom: 0}) : d.css({top: 0}), y.body.append(d))) : (y.ishwscroll ? ("static" == y.win.css("position") && y.css(y.win, {position: "relative"}), r = "HTML" == y.win[0].nodeName ? y.body : y.win, t(r).scrollTop(0).scrollLeft(0), y.zoom && (y.zoom.css({
                            position: "absolute",
                            top: 1,
                            right: 0,
                            "margin-right": w.width + 4
                        }), r.append(y.zoom)), w.css({
                            position: "absolute",
                            top: 0
                        }), w.align ? w.css({right: 0}) : w.css({left: 0}), r.append(w), d && (d.css({
                            position: "absolute",
                            left: 0,
                            bottom: 0
                        }), d.align ? d.css({bottom: 0}) : d.css({top: 0}), r.append(d))) : (y.isfixed = "fixed" == y.win.css("position"), r = y.isfixed ? "fixed" : "absolute", y.isfixed || (y.viewport = y.getViewport(y.win[0])), y.viewport && (y.body = y.viewport, 0 == /fixed|absolute/.test(y.viewport.css("position")) && y.css(y.viewport, {position: "relative"})), w.css({position: r}), y.zoom && y.zoom.css({position: r}), y.updateScrollBar(), y.body.append(w), y.zoom && y.body.append(y.zoom), y.railh && (d.css({position: r}), y.body.append(d))), x.isios && y.css(y.win, {
                            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                            "-webkit-touch-callout": "none"
                        }), x.isie && y.opt.disableoutline && y.win.attr("hideFocus", "true"), x.iswebkit && y.opt.disableoutline && y.win.css("outline", "none")), !1 === y.opt.autohidemode ? (y.autohidedom = !1, y.rail.css({opacity: y.opt.cursoropacitymax}), y.railh && y.railh.css({opacity: y.opt.cursoropacitymax})) : !0 === y.opt.autohidemode || "leave" === y.opt.autohidemode ? (y.autohidedom = t().add(y.rail), x.isie8 && (y.autohidedom = y.autohidedom.add(y.cursor)), y.railh && (y.autohidedom = y.autohidedom.add(y.railh)), y.railh && x.isie8 && (y.autohidedom = y.autohidedom.add(y.cursorh))) : "scroll" == y.opt.autohidemode ? (y.autohidedom = t().add(y.rail), y.railh && (y.autohidedom = y.autohidedom.add(y.railh))) : "cursor" == y.opt.autohidemode ? (y.autohidedom = t().add(y.cursor), y.railh && (y.autohidedom = y.autohidedom.add(y.cursorh))) : "hidden" == y.opt.autohidemode && (y.autohidedom = !1, y.hide(), y.railslocked = !1), x.isie9mobile) y.scrollmom = new m(y), y.onmangotouch = function () {
                            var t = y.getScrollTop(), e = y.getScrollLeft();
                            if (t == y.scrollmom.lastscrolly && e == y.scrollmom.lastscrollx) return !0;
                            var i = t - y.mangotouch.sy, o = e - y.mangotouch.sx;
                            if (0 != Math.round(Math.sqrt(Math.pow(o, 2) + Math.pow(i, 2)))) {
                                var n = 0 > i ? -1 : 1, s = 0 > o ? -1 : 1, r = +new Date;
                                y.mangotouch.lazy && clearTimeout(y.mangotouch.lazy), 80 < r - y.mangotouch.tm || y.mangotouch.dry != n || y.mangotouch.drx != s ? (y.scrollmom.stop(), y.scrollmom.reset(e, t), y.mangotouch.sy = t, y.mangotouch.ly = t, y.mangotouch.sx = e, y.mangotouch.lx = e, y.mangotouch.dry = n, y.mangotouch.drx = s, y.mangotouch.tm = r) : (y.scrollmom.stop(), y.scrollmom.update(y.mangotouch.sx - o, y.mangotouch.sy - i), y.mangotouch.tm = r, i = Math.max(Math.abs(y.mangotouch.ly - t), Math.abs(y.mangotouch.lx - e)), y.mangotouch.ly = t, y.mangotouch.lx = e, 2 < i && (y.mangotouch.lazy = setTimeout(function () {
                                    y.mangotouch.lazy = !1, y.mangotouch.dry = 0, y.mangotouch.drx = 0, y.mangotouch.tm = 0, y.scrollmom.doMomentum(30)
                                }, 100)))
                            }
                        }, w = y.getScrollTop(), d = y.getScrollLeft(), y.mangotouch = {
                            sy: w,
                            ly: w,
                            dry: 0,
                            sx: d,
                            lx: d,
                            drx: 0,
                            lazy: !1,
                            tm: 0
                        }, y.bind(y.docscroll, "scroll", y.onmangotouch); else {
                            if (x.cantouch || y.istouchcapable || y.opt.touchbehavior || x.hasmstouch) {
                                y.scrollmom = new m(y), y.ontouchstart = function (e) {
                                    if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType) return !1;
                                    if (y.hasmoving = !1, !y.railslocked) {
                                        var i;
                                        if (x.hasmstouch) for (i = !!e.target && e.target; i && !(0 < (o = t(i).getNiceScroll()).length && o[0].me == y.me);) {
                                            if (0 < o.length) return !1;
                                            if ("DIV" == i.nodeName && i.id == y.id) break;
                                            i = !!i.parentNode && i.parentNode
                                        }
                                        if (y.cancelScroll(), (i = y.getTarget(e)) && /INPUT/i.test(i.nodeName) && /range/i.test(i.type)) return y.stopPropagation(e);
                                        if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), y.forcescreen && (o = e, (e = {original: e.original ? e.original : e}).clientX = o.screenX, e.clientY = o.screenY), y.rail.drag = {
                                            x: e.clientX,
                                            y: e.clientY,
                                            sx: y.scroll.x,
                                            sy: y.scroll.y,
                                            st: y.getScrollTop(),
                                            sl: y.getScrollLeft(),
                                            pt: 2,
                                            dl: !1
                                        }, y.ispage || !y.opt.directionlockdeadzone) y.rail.drag.dl = "f"; else {
                                            var o = t(window).width(), n = t(window).height();
                                            n = Math.max(0, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - n), o = Math.max(0, Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) - o), y.rail.drag.ck = !y.rail.scrollable && y.railh.scrollable ? 0 < n && "v" : !(!y.rail.scrollable || y.railh.scrollable) && 0 < o && "h", y.rail.drag.ck || (y.rail.drag.dl = "f")
                                        }
                                        if (y.opt.touchbehavior && y.isiframe && x.isie && (o = y.win.position(), y.rail.drag.x += o.left, y.rail.drag.y += o.top), y.hasmoving = !1, y.lastmouseup = !1, y.scrollmom.reset(e.clientX, e.clientY), !x.cantouch && !this.istouchcapable && !e.pointerType) {
                                            if (!i || !/INPUT|SELECT|TEXTAREA/i.test(i.nodeName)) return !y.ispage && x.hasmousecapture && i.setCapture(), y.opt.touchbehavior ? (i.onclick && !i._onclick && (i._onclick = i.onclick, i.onclick = function (t) {
                                                if (y.hasmoving) return !1;
                                                i._onclick.call(this, t)
                                            }), y.cancelEvent(e)) : y.stopPropagation(e);
                                            /SUBMIT|CANCEL|BUTTON/i.test(t(i).attr("type")) && (pc = {
                                                tg: i,
                                                click: !1
                                            }, y.preventclick = pc)
                                        }
                                    }
                                }, y.ontouchend = function (t) {
                                    if (!y.rail.drag) return !0;
                                    if (2 == y.rail.drag.pt) {
                                        if (t.pointerType && 2 != t.pointerType && "touch" != t.pointerType) return !1;
                                        if (y.scrollmom.doMomentum(), y.rail.drag = !1, y.hasmoving && (y.lastmouseup = !0, y.hideCursor(), x.hasmousecapture && document.releaseCapture(), !x.cantouch)) return y.cancelEvent(t)
                                    } else if (1 == y.rail.drag.pt) return y.onmouseup(t)
                                };
                                var f = y.opt.touchbehavior && y.isiframe && !x.hasmousecapture;
                                y.ontouchmove = function (e, i) {
                                    if (!y.rail.drag || e.targetTouches && y.opt.preventmultitouchscrolling && 1 < e.targetTouches.length || e.pointerType && 2 != e.pointerType && "touch" != e.pointerType) return !1;
                                    if (2 == y.rail.drag.pt) {
                                        if (x.cantouch && x.isios && void 0 === e.original) return !0;
                                        if (y.hasmoving = !0, y.preventclick && !y.preventclick.click && (y.preventclick.click = y.preventclick.tg.onclick || !1, y.preventclick.tg.onclick = y.onpreventclick), "changedTouches" in (e = t.extend({original: e}, e)) && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), y.forcescreen) {
                                            var o = e;
                                            (e = {original: e.original ? e.original : e}).clientX = o.screenX, e.clientY = o.screenY
                                        }
                                        var n;
                                        o = n = 0, f && !i && (o = -(n = y.win.position()).left, n = -n.top);
                                        var s = e.clientY + n;
                                        n = s - y.rail.drag.y;
                                        var r, a = e.clientX + o, l = a - y.rail.drag.x, c = y.rail.drag.st - n;
                                        if (y.ishwscroll && y.opt.bouncescroll ? 0 > c ? c = Math.round(c / 2) : c > y.page.maxh && (c = y.page.maxh + Math.round((c - y.page.maxh) / 2)) : (0 > c && (s = c = 0), c > y.page.maxh && (c = y.page.maxh, s = 0)), y.railh && y.railh.scrollable && (r = y.isrtlmode ? l - y.rail.drag.sl : y.rail.drag.sl - l, y.ishwscroll && y.opt.bouncescroll ? 0 > r ? r = Math.round(r / 2) : r > y.page.maxw && (r = y.page.maxw + Math.round((r - y.page.maxw) / 2)) : (0 > r && (a = r = 0), r > y.page.maxw && (r = y.page.maxw, a = 0))), o = !1, y.rail.drag.dl) o = !0, "v" == y.rail.drag.dl ? r = y.rail.drag.sl : "h" == y.rail.drag.dl && (c = y.rail.drag.st); else {
                                            n = Math.abs(n), l = Math.abs(l);
                                            var h = y.opt.directionlockdeadzone;
                                            if ("v" == y.rail.drag.ck) {
                                                if (n > h && l <= .3 * n) return y.rail.drag = !1, !0;
                                                l > h && (y.rail.drag.dl = "f", t("body").scrollTop(t("body").scrollTop()))
                                            } else if ("h" == y.rail.drag.ck) {
                                                if (l > h && n <= .3 * l) return y.rail.drag = !1, !0;
                                                n > h && (y.rail.drag.dl = "f", t("body").scrollLeft(t("body").scrollLeft()))
                                            }
                                        }
                                        if (y.synched("touchmove", function () {
                                            y.rail.drag && 2 == y.rail.drag.pt && (y.prepareTransition && y.prepareTransition(0), y.rail.scrollable && y.setScrollTop(c), y.scrollmom.update(a, s), y.railh && y.railh.scrollable ? (y.setScrollLeft(r), y.showCursor(c, r)) : y.showCursor(c), x.isie10 && document.selection.clear())
                                        }), x.ischrome && y.istouchcapable && (o = !1), o) return y.cancelEvent(e)
                                    } else if (1 == y.rail.drag.pt) return y.onmousemove(e)
                                }
                            }
                            if (y.onmousedown = function (t, e) {
                                if (!y.rail.drag || 1 == y.rail.drag.pt) {
                                    if (y.railslocked) return y.cancelEvent(t);
                                    y.cancelScroll(), y.rail.drag = {
                                        x: t.clientX,
                                        y: t.clientY,
                                        sx: y.scroll.x,
                                        sy: y.scroll.y,
                                        pt: 1,
                                        hr: !!e
                                    };
                                    var i = y.getTarget(t);
                                    return !y.ispage && x.hasmousecapture && i.setCapture(), y.isiframe && !x.hasmousecapture && (y.saved.csspointerevents = y.doc.css("pointer-events"), y.css(y.doc, {"pointer-events": "none"})), y.hasmoving = !1, y.cancelEvent(t)
                                }
                            }, y.onmouseup = function (t) {
                                if (y.rail.drag) return 1 != y.rail.drag.pt || (x.hasmousecapture && document.releaseCapture(), y.isiframe && !x.hasmousecapture && y.doc.css("pointer-events", y.saved.csspointerevents), y.rail.drag = !1, y.hasmoving && y.triggerScrollEnd(), y.cancelEvent(t))
                            }, y.onmousemove = function (t) {
                                if (y.rail.drag) {
                                    if (1 == y.rail.drag.pt) {
                                        if (x.ischrome && 0 == t.which) return y.onmouseup(t);
                                        if (y.cursorfreezed = !0, y.hasmoving = !0, y.rail.drag.hr) {
                                            y.scroll.x = y.rail.drag.sx + (t.clientX - y.rail.drag.x), 0 > y.scroll.x && (y.scroll.x = 0);
                                            var e = y.scrollvaluemaxw;
                                            y.scroll.x > e && (y.scroll.x = e)
                                        } else y.scroll.y = y.rail.drag.sy + (t.clientY - y.rail.drag.y), 0 > y.scroll.y && (y.scroll.y = 0), e = y.scrollvaluemax, y.scroll.y > e && (y.scroll.y = e);
                                        return y.synched("mousemove", function () {
                                            y.rail.drag && 1 == y.rail.drag.pt && (y.showCursor(), y.rail.drag.hr ? y.hasreversehr ? y.doScrollLeft(y.scrollvaluemaxw - Math.round(y.scroll.x * y.scrollratio.x), y.opt.cursordragspeed) : y.doScrollLeft(Math.round(y.scroll.x * y.scrollratio.x), y.opt.cursordragspeed) : y.doScrollTop(Math.round(y.scroll.y * y.scrollratio.y), y.opt.cursordragspeed))
                                        }), y.cancelEvent(t)
                                    }
                                } else y.checkarea = 0
                            }, x.cantouch || y.opt.touchbehavior) y.onpreventclick = function (t) {
                                if (y.preventclick) return y.preventclick.tg.onclick = y.preventclick.click, y.preventclick = !1, y.cancelEvent(t)
                            }, y.bind(y.win, "mousedown", y.ontouchstart), y.onclick = !x.isios && function (t) {
                                return !y.lastmouseup || (y.lastmouseup = !1, y.cancelEvent(t))
                            }, y.opt.grabcursorenabled && x.cursorgrabvalue && (y.css(y.ispage ? y.doc : y.win, {cursor: x.cursorgrabvalue}), y.css(y.rail, {cursor: x.cursorgrabvalue})); else {
                                var g = function (t) {
                                    if (y.selectiondrag) {
                                        if (t) {
                                            var e = y.win.outerHeight();
                                            0 < (t = t.pageY - y.selectiondrag.top) && t < e && (t = 0), t >= e && (t -= e), y.selectiondrag.df = t
                                        }
                                        0 != y.selectiondrag.df && (y.doScrollBy(2 * -Math.floor(y.selectiondrag.df / 6)), y.debounced("doselectionscroll", function () {
                                            g()
                                        }, 50))
                                    }
                                };
                                y.hasTextSelected = "getSelection" in document ? function () {
                                    return 0 < document.getSelection().rangeCount
                                } : "selection" in document ? function () {
                                    return "None" != document.selection.type
                                } : function () {
                                    return !1
                                }, y.onselectionstart = function (t) {
                                    y.ispage || (y.selectiondrag = y.win.offset())
                                }, y.onselectionend = function (t) {
                                    y.selectiondrag = !1
                                }, y.onselectiondrag = function (t) {
                                    y.selectiondrag && y.hasTextSelected() && y.debounced("selectionscroll", function () {
                                        g(t)
                                    }, 250)
                                }
                            }
                            x.hasw3ctouch ? (y.css(y.rail, {"touch-action": "none"}), y.css(y.cursor, {"touch-action": "none"}), y.bind(y.win, "pointerdown", y.ontouchstart), y.bind(document, "pointerup", y.ontouchend), y.bind(document, "pointermove", y.ontouchmove)) : x.hasmstouch ? (y.css(y.rail, {"-ms-touch-action": "none"}), y.css(y.cursor, {"-ms-touch-action": "none"}), y.bind(y.win, "MSPointerDown", y.ontouchstart), y.bind(document, "MSPointerUp", y.ontouchend), y.bind(document, "MSPointerMove", y.ontouchmove), y.bind(y.cursor, "MSGestureHold", function (t) {
                                t.preventDefault()
                            }), y.bind(y.cursor, "contextmenu", function (t) {
                                t.preventDefault()
                            })) : this.istouchcapable && (y.bind(y.win, "touchstart", y.ontouchstart), y.bind(document, "touchend", y.ontouchend), y.bind(document, "touchcancel", y.ontouchend), y.bind(document, "touchmove", y.ontouchmove)), (y.opt.cursordragontouch || !x.cantouch && !y.opt.touchbehavior) && (y.rail.css({cursor: "default"}), y.railh && y.railh.css({cursor: "default"}), y.jqbind(y.rail, "mouseenter", function () {
                                if (!y.ispage && !y.win.is(":visible")) return !1;
                                y.canshowonmouseevent && y.showCursor(), y.rail.active = !0
                            }), y.jqbind(y.rail, "mouseleave", function () {
                                y.rail.active = !1, y.rail.drag || y.hideCursor()
                            }), y.opt.sensitiverail && (y.bind(y.rail, "click", function (t) {
                                y.doRailClick(t, !1, !1)
                            }), y.bind(y.rail, "dblclick", function (t) {
                                y.doRailClick(t, !0, !1)
                            }), y.bind(y.cursor, "click", function (t) {
                                y.cancelEvent(t)
                            }), y.bind(y.cursor, "dblclick", function (t) {
                                y.cancelEvent(t)
                            })), y.railh && (y.jqbind(y.railh, "mouseenter", function () {
                                if (!y.ispage && !y.win.is(":visible")) return !1;
                                y.canshowonmouseevent && y.showCursor(), y.rail.active = !0
                            }), y.jqbind(y.railh, "mouseleave", function () {
                                y.rail.active = !1, y.rail.drag || y.hideCursor()
                            }), y.opt.sensitiverail && (y.bind(y.railh, "click", function (t) {
                                y.doRailClick(t, !1, !0)
                            }), y.bind(y.railh, "dblclick", function (t) {
                                y.doRailClick(t, !0, !0)
                            }), y.bind(y.cursorh, "click", function (t) {
                                y.cancelEvent(t)
                            }), y.bind(y.cursorh, "dblclick", function (t) {
                                y.cancelEvent(t)
                            })))), x.cantouch || y.opt.touchbehavior ? (y.bind(x.hasmousecapture ? y.win : document, "mouseup", y.ontouchend), y.bind(document, "mousemove", y.ontouchmove), y.onclick && y.bind(document, "click", y.onclick), y.opt.cursordragontouch ? (y.bind(y.cursor, "mousedown", y.onmousedown), y.bind(y.cursor, "mouseup", y.onmouseup), y.cursorh && y.bind(y.cursorh, "mousedown", function (t) {
                                y.onmousedown(t, !0)
                            }), y.cursorh && y.bind(y.cursorh, "mouseup", y.onmouseup)) : (y.bind(y.rail, "mousedown", function (t) {
                                t.preventDefault()
                            }), y.railh && y.bind(y.railh, "mousedown", function (t) {
                                t.preventDefault()
                            }))) : (y.bind(x.hasmousecapture ? y.win : document, "mouseup", y.onmouseup), y.bind(document, "mousemove", y.onmousemove), y.onclick && y.bind(document, "click", y.onclick), y.bind(y.cursor, "mousedown", y.onmousedown), y.bind(y.cursor, "mouseup", y.onmouseup), y.railh && (y.bind(y.cursorh, "mousedown", function (t) {
                                y.onmousedown(t, !0)
                            }), y.bind(y.cursorh, "mouseup", y.onmouseup)), !y.ispage && y.opt.enablescrollonselection && (y.bind(y.win[0], "mousedown", y.onselectionstart), y.bind(document, "mouseup", y.onselectionend), y.bind(y.cursor, "mouseup", y.onselectionend), y.cursorh && y.bind(y.cursorh, "mouseup", y.onselectionend), y.bind(document, "mousemove", y.onselectiondrag)), y.zoom && (y.jqbind(y.zoom, "mouseenter", function () {
                                y.canshowonmouseevent && y.showCursor(), y.rail.active = !0
                            }), y.jqbind(y.zoom, "mouseleave", function () {
                                y.rail.active = !1, y.rail.drag || y.hideCursor()
                            }))), y.opt.enablemousewheel && (y.isiframe || y.mousewheel(x.isie && y.ispage ? document : y.win, y.onmousewheel), y.mousewheel(y.rail, y.onmousewheel), y.railh && y.mousewheel(y.railh, y.onmousewheelhr)), y.ispage || x.cantouch || /HTML|^BODY/.test(y.win[0].nodeName) || (y.win.attr("tabindex") || y.win.attr({tabindex: o++}), y.jqbind(y.win, "focus", function (t) {
                                e = y.getTarget(t).id || !0, y.hasfocus = !0, y.canshowonmouseevent && y.noticeCursor()
                            }), y.jqbind(y.win, "blur", function (t) {
                                e = !1, y.hasfocus = !1
                            }), y.jqbind(y.win, "mouseenter", function (t) {
                                i = y.getTarget(t).id || !0, y.hasmousefocus = !0, y.canshowonmouseevent && y.noticeCursor()
                            }), y.jqbind(y.win, "mouseleave", function () {
                                i = !1, y.hasmousefocus = !1, y.rail.drag || y.hideCursor()
                            }))
                        }
                        if (y.onkeypress = function (o) {
                            if (y.railslocked && 0 == y.page.maxh) return !0;
                            o = o || window.e;
                            var n = y.getTarget(o);
                            if (n && /INPUT|TEXTAREA|SELECT|OPTION/.test(n.nodeName) && (!n.getAttribute("type") && !n.type || !/submit|button|cancel/i.tp) || t(n).attr("contenteditable")) return !0;
                            if (y.hasfocus || y.hasmousefocus && !e || y.ispage && !e && !i) {
                                if (n = o.keyCode, y.railslocked && 27 != n) return y.cancelEvent(o);
                                var s = o.ctrlKey || !1, r = o.shiftKey || !1, a = !1;
                                switch (n) {
                                    case 38:
                                    case 63233:
                                        y.doScrollBy(72), a = !0;
                                        break;
                                    case 40:
                                    case 63235:
                                        y.doScrollBy(-72), a = !0;
                                        break;
                                    case 37:
                                    case 63232:
                                        y.railh && (s ? y.doScrollLeft(0) : y.doScrollLeftBy(72), a = !0);
                                        break;
                                    case 39:
                                    case 63234:
                                        y.railh && (s ? y.doScrollLeft(y.page.maxw) : y.doScrollLeftBy(-72), a = !0);
                                        break;
                                    case 33:
                                    case 63276:
                                        y.doScrollBy(y.view.h), a = !0;
                                        break;
                                    case 34:
                                    case 63277:
                                        y.doScrollBy(-y.view.h), a = !0;
                                        break;
                                    case 36:
                                    case 63273:
                                        y.railh && s ? y.doScrollPos(0, 0) : y.doScrollTo(0), a = !0;
                                        break;
                                    case 35:
                                    case 63275:
                                        y.railh && s ? y.doScrollPos(y.page.maxw, y.page.maxh) : y.doScrollTo(y.page.maxh), a = !0;
                                        break;
                                    case 32:
                                        y.opt.spacebarenabled && (r ? y.doScrollBy(y.view.h) : y.doScrollBy(-y.view.h), a = !0);
                                        break;
                                    case 27:
                                        y.zoomactive && (y.doZoom(), a = !0)
                                }
                                if (a) return y.cancelEvent(o)
                            }
                        }, y.opt.enablekeyboard && y.bind(document, x.isopera && !x.isopera12 ? "keypress" : "keydown", y.onkeypress), y.bind(document, "keydown", function (t) {
                            t.ctrlKey && (y.wheelprevented = !0)
                        }), y.bind(document, "keyup", function (t) {
                            t.ctrlKey || (y.wheelprevented = !1)
                        }), y.bind(window, "blur", function (t) {
                            y.wheelprevented = !1
                        }), y.bind(window, "resize", y.lazyResize), y.bind(window, "orientationchange", y.lazyResize), y.bind(window, "load", y.lazyResize), x.ischrome && !y.ispage && !y.haswrapper) {
                            var v = y.win.attr("style"), w = parseFloat(y.win.css("width")) + 1;
                            y.win.css("width", w), y.synched("chromefix", function () {
                                y.win.attr("style", v)
                            })
                        }
                        y.onAttributeChange = function (t) {
                            y.lazyResize(y.isieold ? 250 : 30)
                        }, y.isie11 || !1 === u || (y.observerbody = new u(function (e) {
                            if (e.forEach(function (e) {
                                if ("attributes" == e.type) return t("body").hasClass("modal-open") && t("body").hasClass("modal-dialog") && !t.contains(t(".modal-dialog")[0], y.doc[0]) ? y.hide() : y.show()
                            }), document.body.scrollHeight != y.page.maxh) return y.lazyResize(30)
                        }), y.observerbody.observe(document.body, {
                            childList: !0,
                            subtree: !0,
                            characterData: !1,
                            attributes: !0,
                            attributeFilter: ["class"]
                        })), y.ispage || y.haswrapper || (!1 !== u ? (y.observer = new u(function (t) {
                            t.forEach(y.onAttributeChange)
                        }), y.observer.observe(y.win[0], {
                            childList: !0,
                            characterData: !1,
                            attributes: !0,
                            subtree: !1
                        }), y.observerremover = new u(function (t) {
                            t.forEach(function (t) {
                                if (0 < t.removedNodes.length) for (var e in t.removedNodes) if (y && t.removedNodes[e] == y.win[0]) return y.remove()
                            })
                        }), y.observerremover.observe(y.win[0].parentNode, {
                            childList: !0,
                            characterData: !1,
                            attributes: !1,
                            subtree: !1
                        })) : (y.bind(y.win, x.isie && !x.isie9 ? "propertychange" : "DOMAttrModified", y.onAttributeChange), x.isie9 && y.win[0].attachEvent("onpropertychange", y.onAttributeChange), y.bind(y.win, "DOMNodeRemoved", function (t) {
                            t.target == y.win[0] && y.remove()
                        }))), !y.ispage && y.opt.boxzoom && y.bind(window, "resize", y.resizeZoom), y.istextarea && (y.bind(y.win, "keydown", y.lazyResize), y.bind(y.win, "mouseup", y.lazyResize)), y.lazyResize(30)
                    }
                    if ("IFRAME" == this.doc[0].nodeName) {
                        var b = function () {
                            var e;
                            y.iframexd = !1;
                            try {
                                e = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
                            } catch (t) {
                                y.iframexd = !0, e = !1
                            }
                            if (y.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                            if (y.forcescreen = !0, y.isiframe && (y.iframe = {
                                doc: t(e),
                                html: y.doc.contents().find("html")[0],
                                body: y.doc.contents().find("body")[0]
                            }, y.getContentSize = function () {
                                return {
                                    w: Math.max(y.iframe.html.scrollWidth, y.iframe.body.scrollWidth),
                                    h: Math.max(y.iframe.html.scrollHeight, y.iframe.body.scrollHeight)
                                }
                            }, y.docscroll = t(y.iframe.body)), !x.isios && y.opt.iframeautoresize && !y.isiframe) {
                                y.win.scrollTop(0), y.doc.height("");
                                var i = Math.max(e.getElementsByTagName("html")[0].scrollHeight, e.body.scrollHeight);
                                y.doc.height(i)
                            }
                            y.lazyResize(30), x.isie7 && y.css(t(y.iframe.html), n), y.css(t(y.iframe.body), n), x.isios && y.haswrapper && y.css(t(e.body), {"-webkit-transform": "translate3d(0,0,0)"}), "contentWindow" in this ? y.bind(this.contentWindow, "scroll", y.onscroll) : y.bind(e, "scroll", y.onscroll), y.opt.enablemousewheel && y.mousewheel(e, y.onmousewheel), y.opt.enablekeyboard && y.bind(e, x.isopera ? "keypress" : "keydown", y.onkeypress), (x.cantouch || y.opt.touchbehavior) && (y.bind(e, "mousedown", y.ontouchstart), y.bind(e, "mousemove", function (t) {
                                return y.ontouchmove(t, !0)
                            }), y.opt.grabcursorenabled && x.cursorgrabvalue && y.css(t(e.body), {cursor: x.cursorgrabvalue})), y.bind(e, "mouseup", y.ontouchend), y.zoom && (y.opt.dblclickzoom && y.bind(e, "dblclick", y.doZoom), y.ongesturezoom && y.bind(e, "gestureend", y.ongesturezoom))
                        };
                        this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () {
                            b.call(y.doc[0], !1)
                        }, 500), y.bind(this.doc, "load", b)
                    }
                }, this.showCursor = function (t, e) {
                    if (y.cursortimeout && (clearTimeout(y.cursortimeout), y.cursortimeout = 0), y.rail) {
                        if (y.autohidedom && (y.autohidedom.stop().css({opacity: y.opt.cursoropacitymax}), y.cursoractive = !0), y.rail.drag && 1 == y.rail.drag.pt || (void 0 !== t && !1 !== t && (y.scroll.y = Math.round(1 * t / y.scrollratio.y)), void 0 !== e && (y.scroll.x = Math.round(1 * e / y.scrollratio.x))), y.cursor.css({
                            height: y.cursorheight,
                            top: y.scroll.y
                        }), y.cursorh) {
                            var i = y.hasreversehr ? y.scrollvaluemaxw - y.scroll.x : y.scroll.x;
                            !y.rail.align && y.rail.visibility ? y.cursorh.css({
                                width: y.cursorwidth,
                                left: i + y.rail.width
                            }) : y.cursorh.css({width: y.cursorwidth, left: i}), y.cursoractive = !0
                        }
                        y.zoom && y.zoom.stop().css({opacity: y.opt.cursoropacitymax})
                    }
                }, this.hideCursor = function (t) {
                    y.cursortimeout || !y.rail || !y.autohidedom || y.hasmousefocus && "leave" == y.opt.autohidemode || (y.cursortimeout = setTimeout(function () {
                        y.rail.active && y.showonmouseevent || (y.autohidedom.stop().animate({opacity: y.opt.cursoropacitymin}), y.zoom && y.zoom.stop().animate({opacity: y.opt.cursoropacitymin}), y.cursoractive = !1), y.cursortimeout = 0
                    }, t || y.opt.hidecursordelay))
                }, this.noticeCursor = function (t, e, i) {
                    y.showCursor(e, i), y.rail.active || y.hideCursor(t)
                }, this.getContentSize = y.ispage ? function () {
                    return {
                        w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                        h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }
                } : y.haswrapper ? function () {
                    return {
                        w: y.doc.outerWidth() + parseInt(y.win.css("paddingLeft")) + parseInt(y.win.css("paddingRight")),
                        h: y.doc.outerHeight() + parseInt(y.win.css("paddingTop")) + parseInt(y.win.css("paddingBottom"))
                    }
                } : function () {
                    return {w: y.docscroll[0].scrollWidth, h: y.docscroll[0].scrollHeight}
                }, this.onResize = function (t, e) {
                    if (!y || !y.win) return !1;
                    if (!y.haswrapper && !y.ispage) {
                        if ("none" == y.win.css("display")) return y.visibility && y.hideRail().hideRailHr(), !1;
                        y.hidden || y.visibility || y.showRail().showRailHr()
                    }
                    var i = y.page.maxh, o = y.page.maxw, n = y.view.h, s = y.view.w;
                    if (y.view = {
                        w: y.ispage ? y.win.width() : parseInt(y.win[0].clientWidth),
                        h: y.ispage ? y.win.height() : parseInt(y.win[0].clientHeight)
                    }, y.page = e || y.getContentSize(), y.page.maxh = Math.max(0, y.page.h - y.view.h), y.page.maxw = Math.max(0, y.page.w - y.view.w), y.page.maxh == i && y.page.maxw == o && y.view.w == s && y.view.h == n) {
                        if (y.ispage) return y;
                        if (i = y.win.offset(), y.lastposition && (o = y.lastposition).top == i.top && o.left == i.left) return y;
                        y.lastposition = i
                    }
                    return 0 == y.page.maxh ? (y.hideRail(), y.scrollvaluemax = 0, y.scroll.y = 0, y.scrollratio.y = 0, y.cursorheight = 0, y.setScrollTop(0), y.rail && (y.rail.scrollable = !1)) : (y.page.maxh -= y.opt.railpadding.top + y.opt.railpadding.bottom, y.rail.scrollable = !0), 0 == y.page.maxw ? (y.hideRailHr(), y.scrollvaluemaxw = 0, y.scroll.x = 0, y.scrollratio.x = 0, y.cursorwidth = 0, y.setScrollLeft(0), y.railh && (y.railh.scrollable = !1)) : (y.page.maxw -= y.opt.railpadding.left + y.opt.railpadding.right, y.railh && (y.railh.scrollable = y.opt.horizrailenabled)), y.railslocked = y.locked || 0 == y.page.maxh && 0 == y.page.maxw, y.railslocked ? (y.ispage || y.updateScrollBar(y.view), !1) : (y.hidden || y.visibility ? !y.railh || y.hidden || y.railh.visibility || y.showRailHr() : y.showRail().showRailHr(), y.istextarea && y.win.css("resize") && "none" != y.win.css("resize") && (y.view.h -= 20), y.cursorheight = Math.min(y.view.h, Math.round(y.view.h / y.page.h * y.view.h)), y.cursorheight = y.opt.cursorfixedheight ? y.opt.cursorfixedheight : Math.max(y.opt.cursorminheight, y.cursorheight), y.cursorwidth = Math.min(y.view.w, Math.round(y.view.w / y.page.w * y.view.w)), y.cursorwidth = y.opt.cursorfixedheight ? y.opt.cursorfixedheight : Math.max(y.opt.cursorminheight, y.cursorwidth), y.scrollvaluemax = y.view.h - y.cursorheight - y.cursor.hborder - (y.opt.railpadding.top + y.opt.railpadding.bottom), y.railh && (y.railh.width = 0 < y.page.maxh ? y.view.w - y.rail.width : y.view.w, y.scrollvaluemaxw = y.railh.width - y.cursorwidth - y.cursorh.wborder - (y.opt.railpadding.left + y.opt.railpadding.right)), y.ispage || y.updateScrollBar(y.view), y.scrollratio = {
                        x: y.page.maxw / y.scrollvaluemaxw,
                        y: y.page.maxh / y.scrollvaluemax
                    }, y.getScrollTop() > y.page.maxh ? y.doScrollTop(y.page.maxh) : (y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)), y.scroll.x = Math.round(y.getScrollLeft() * (1 / y.scrollratio.x)), y.cursoractive && y.noticeCursor()), y.scroll.y && 0 == y.getScrollTop() && y.doScrollTo(Math.floor(y.scroll.y * y.scrollratio.y)), y)
                }, this.resize = y.onResize, this.hlazyresize = 0, this.lazyResize = function (t) {
                    return y.haswrapper || y.hide(), y.hlazyresize && clearTimeout(y.hlazyresize), y.hlazyresize = setTimeout(function () {
                        y && y.show().resize()
                    }, 240), y
                }, this.jqbind = function (e, i, o) {
                    y.events.push({e: e, n: i, f: o, q: !0}), t(e).bind(i, o)
                }, this.mousewheel = function (t, e, i) {
                    if (t = "jquery" in t ? t[0] : t, "onwheel" in document.createElement("div")) y._bind(t, "wheel", e, i || !1); else {
                        var o = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                        g(t, o, e, i || !1), "DOMMouseScroll" == o && g(t, "MozMousePixelScroll", e, i || !1)
                    }
                }, x.haseventlistener ? (this.bind = function (t, e, i, o) {
                    y._bind("jquery" in t ? t[0] : t, e, i, o || !1)
                }, this._bind = function (t, e, i, o) {
                    y.events.push({e: t, n: e, f: i, b: o, q: !1}), t.addEventListener(e, i, o || !1)
                }, this.cancelEvent = function (t) {
                    return !!t && ((t = t.original ? t.original : t).cancelable && t.preventDefault(), t.stopPropagation(), t.preventManipulation && t.preventManipulation(), !1)
                }, this.stopPropagation = function (t) {
                    return !!t && ((t = t.original ? t.original : t).stopPropagation(), !1)
                }, this._unbind = function (t, e, i, o) {
                    t.removeEventListener(e, i, o)
                }) : (this.bind = function (t, e, i, o) {
                    var n = "jquery" in t ? t[0] : t;
                    y._bind(n, e, function (t) {
                        return (t = t || window.event || !1) && t.srcElement && (t.target = t.srcElement), "pageY" in t || (t.pageX = t.clientX + document.documentElement.scrollLeft, t.pageY = t.clientY + document.documentElement.scrollTop), !1 !== i.call(n, t) && !1 !== o || y.cancelEvent(t)
                    })
                }, this._bind = function (t, e, i, o) {
                    y.events.push({
                        e: t,
                        n: e,
                        f: i,
                        b: o,
                        q: !1
                    }), t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
                }, this.cancelEvent = function (t) {
                    return !!(t = window.event || !1) && (t.cancelBubble = !0, t.cancel = !0, t.returnValue = !1)
                }, this.stopPropagation = function (t) {
                    return !!(t = window.event || !1) && (t.cancelBubble = !0, !1)
                }, this._unbind = function (t, e, i, o) {
                    t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = !1
                }), this.unbindAll = function () {
                    for (var t = 0; t < y.events.length; t++) {
                        var e = y.events[t];
                        e.q ? e.e.unbind(e.n, e.f) : y._unbind(e.e, e.n, e.f, e.b)
                    }
                }, this.showRail = function () {
                    return 0 == y.page.maxh || !y.ispage && "none" == y.win.css("display") || (y.visibility = !0, y.rail.visibility = !0, y.rail.css("display", "block")), y
                }, this.showRailHr = function () {
                    return y.railh ? (0 == y.page.maxw || !y.ispage && "none" == y.win.css("display") || (y.railh.visibility = !0, y.railh.css("display", "block")), y) : y
                }, this.hideRail = function () {
                    return y.visibility = !1, y.rail.visibility = !1, y.rail.css("display", "none"), y
                }, this.hideRailHr = function () {
                    return y.railh ? (y.railh.visibility = !1, y.railh.css("display", "none"), y) : y
                }, this.show = function () {
                    return y.hidden = !1, y.railslocked = !1, y.showRail().showRailHr()
                }, this.hide = function () {
                    return y.hidden = !0, y.railslocked = !0, y.hideRail().hideRailHr()
                }, this.toggle = function () {
                    return y.hidden ? y.show() : y.hide()
                }, this.remove = function () {
                    y.stop(), y.cursortimeout && clearTimeout(y.cursortimeout);
                    for (var e in y.delaylist) y.delaylist[e] && l(y.delaylist[e].h);
                    for (y.doZoomOut(), y.unbindAll(), x.isie9 && y.win[0].detachEvent("onpropertychange", y.onAttributeChange), !1 !== y.observer && y.observer.disconnect(), !1 !== y.observerremover && y.observerremover.disconnect(), !1 !== y.observerbody && y.observerbody.disconnect(), y.events = null, y.cursor && y.cursor.remove(), y.cursorh && y.cursorh.remove(), y.rail && y.rail.remove(), y.railh && y.railh.remove(), y.zoom && y.zoom.remove(), e = 0; e < y.saved.css.length; e++) {
                        var i = y.saved.css[e];
                        i[0].css(i[1], void 0 === i[2] ? "" : i[2])
                    }
                    y.saved = !1, y.me.data("__nicescroll", "");
                    var o = t.nicescroll;
                    o.each(function (t) {
                        if (this && this.id === y.id) {
                            delete o[t];
                            for (var e = ++t; e < o.length; e++, t++) o[t] = o[e];
                            o.length--, o.length && delete o[o.length]
                        }
                    });
                    for (var n in y) y[n] = null, delete y[n];
                    y = null
                }, this.scrollstart = function (t) {
                    return this.onscrollstart = t, y
                }, this.scrollend = function (t) {
                    return this.onscrollend = t, y
                }, this.scrollcancel = function (t) {
                    return this.onscrollcancel = t, y
                }, this.zoomin = function (t) {
                    return this.onzoomin = t, y
                }, this.zoomout = function (t) {
                    return this.onzoomout = t, y
                }, this.isScrollable = function (e) {
                    if ("OPTION" == (e = e.target ? e.target : e).nodeName) return !0;
                    for (; e && 1 == e.nodeType && !/^BODY|HTML/.test(e.nodeName);) {
                        var i = (i = t(e)).css("overflowY") || i.css("overflowX") || i.css("overflow") || "";
                        if (/scroll|auto/.test(i)) return e.clientHeight != e.scrollHeight;
                        e = !!e.parentNode && e.parentNode
                    }
                    return !1
                }, this.getViewport = function (e) {
                    for (e = !(!e || !e.parentNode) && e.parentNode; e && 1 == e.nodeType && !/^BODY|HTML/.test(e.nodeName);) {
                        var i = t(e);
                        if (/fixed|absolute/.test(i.css("position"))) return i;
                        var o = i.css("overflowY") || i.css("overflowX") || i.css("overflow") || "";
                        if (/scroll|auto/.test(o) && e.clientHeight != e.scrollHeight || 0 < i.getNiceScroll().length) return i;
                        e = !!e.parentNode && e.parentNode
                    }
                    return !1
                }, this.triggerScrollEnd = function () {
                    if (y.onscrollend) {
                        var t = y.getScrollLeft(), e = y.getScrollTop();
                        y.onscrollend.call(y, {type: "scrollend", current: {x: t, y: e}, end: {x: t, y: e}})
                    }
                }, this.onmousewheel = function (t) {
                    if (!y.wheelprevented) {
                        if (y.railslocked) return y.debounced("checkunlock", y.resize, 250), !0;
                        if (y.rail.drag) return y.cancelEvent(t);
                        if ("auto" == y.opt.oneaxismousemode && 0 != t.deltaX && (y.opt.oneaxismousemode = !1), y.opt.oneaxismousemode && 0 == t.deltaX && !y.rail.scrollable) return !y.railh || !y.railh.scrollable || y.onmousewheelhr(t);
                        var e = +new Date, i = !1;
                        return y.opt.preservenativescrolling && y.checkarea + 600 < e && (y.nativescrollingarea = y.isScrollable(t), i = !0), y.checkarea = e, !!y.nativescrollingarea || ((t = v(t, !1, i)) && (y.checkarea = 0), t)
                    }
                }, this.onmousewheelhr = function (t) {
                    if (!y.wheelprevented) {
                        if (y.railslocked || !y.railh.scrollable) return !0;
                        if (y.rail.drag) return y.cancelEvent(t);
                        var e = +new Date, i = !1;
                        return y.opt.preservenativescrolling && y.checkarea + 600 < e && (y.nativescrollingarea = y.isScrollable(t), i = !0), y.checkarea = e, !!y.nativescrollingarea || (y.railslocked ? y.cancelEvent(t) : v(t, !0, i))
                    }
                }, this.stop = function () {
                    return y.cancelScroll(), y.scrollmon && y.scrollmon.stop(), y.cursorfreezed = !1, y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)), y.noticeCursor(), y
                }, this.getTransitionSpeed = function (t) {
                    return 20 < (t = Math.min(Math.round(10 * y.opt.scrollspeed), Math.round(t / 20 * y.opt.scrollspeed))) ? t : 0
                }, y.opt.smoothscroll ? y.ishwscroll && x.hastransition && y.opt.usetransition && y.opt.smoothscroll ? (this.prepareTransition = function (t, e) {
                    var i = e ? 20 < t ? t : 0 : y.getTransitionSpeed(t),
                        o = i ? x.prefixstyle + "transform " + i + "ms ease-out" : "";
                    return y.lasttransitionstyle && y.lasttransitionstyle == o || (y.lasttransitionstyle = o, y.doc.css(x.transitionstyle, o)), i
                }, this.doScrollLeft = function (t, e) {
                    var i = y.scrollrunning ? y.newscrolly : y.getScrollTop();
                    y.doScrollPos(t, i, e)
                }, this.doScrollTop = function (t, e) {
                    var i = y.scrollrunning ? y.newscrollx : y.getScrollLeft();
                    y.doScrollPos(i, t, e)
                }, this.doScrollPos = function (t, e, i) {
                    var o = y.getScrollTop(), n = y.getScrollLeft();
                    return (0 > (y.newscrolly - o) * (e - o) || 0 > (y.newscrollx - n) * (t - n)) && y.cancelScroll(), 0 == y.opt.bouncescroll && (0 > e ? e = 0 : e > y.page.maxh && (e = y.page.maxh), 0 > t ? t = 0 : t > y.page.maxw && (t = y.page.maxw)), (!y.scrollrunning || t != y.newscrollx || e != y.newscrolly) && (y.newscrolly = e, y.newscrollx = t, y.newscrollspeed = i || !1, !y.timer && void (y.timer = setTimeout(function () {
                        var i = y.getScrollTop(), o = y.getScrollLeft(),
                            n = Math.round(Math.sqrt(Math.pow(t - o, 2) + Math.pow(e - i, 2)));
                        n = y.newscrollspeed && 1 < y.newscrollspeed ? y.newscrollspeed : y.getTransitionSpeed(n), y.newscrollspeed && 1 >= y.newscrollspeed && (n *= y.newscrollspeed), y.prepareTransition(n, !0), y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm), 0 < n && (!y.scrollrunning && y.onscrollstart && y.onscrollstart.call(y, {
                            type: "scrollstart",
                            current: {x: o, y: i},
                            request: {x: t, y: e},
                            end: {x: y.newscrollx, y: y.newscrolly},
                            speed: n
                        }), x.transitionend ? y.scrollendtrapped || (y.scrollendtrapped = !0, y.bind(y.doc, x.transitionend, y.onScrollTransitionEnd, !1)) : (y.scrollendtrapped && clearTimeout(y.scrollendtrapped), y.scrollendtrapped = setTimeout(y.onScrollTransitionEnd, n)), y.timerscroll = {
                            bz: new _(i, y.newscrolly, n, 0, 0, .58, 1),
                            bh: new _(o, y.newscrollx, n, 0, 0, .58, 1)
                        }, y.cursorfreezed || (y.timerscroll.tm = setInterval(function () {
                            y.showCursor(y.getScrollTop(), y.getScrollLeft())
                        }, 60))), y.synched("doScroll-set", function () {
                            y.timer = 0, y.scrollendtrapped && (y.scrollrunning = !0), y.setScrollTop(y.newscrolly), y.setScrollLeft(y.newscrollx), y.scrollendtrapped || y.onScrollTransitionEnd()
                        })
                    }, 50)))
                }, this.cancelScroll = function () {
                    if (!y.scrollendtrapped) return !0;
                    var t = y.getScrollTop(), e = y.getScrollLeft();
                    return y.scrollrunning = !1, x.transitionend || clearTimeout(x.transitionend), y.scrollendtrapped = !1, y._unbind(y.doc[0], x.transitionend, y.onScrollTransitionEnd), y.prepareTransition(0), y.setScrollTop(t), y.railh && y.setScrollLeft(e), y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm), y.timerscroll = !1, y.cursorfreezed = !1, y.showCursor(t, e), y
                }, this.onScrollTransitionEnd = function () {
                    y.scrollendtrapped && y._unbind(y.doc[0], x.transitionend, y.onScrollTransitionEnd), y.scrollendtrapped = !1, y.prepareTransition(0), y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm), y.timerscroll = !1;
                    var t = y.getScrollTop(), e = y.getScrollLeft();
                    if (y.setScrollTop(t), y.railh && y.setScrollLeft(e), y.noticeCursor(!1, t, e), y.cursorfreezed = !1, 0 > t ? t = 0 : t > y.page.maxh && (t = y.page.maxh), 0 > e ? e = 0 : e > y.page.maxw && (e = y.page.maxw), t != y.newscrolly || e != y.newscrollx) return y.doScrollPos(e, t, y.opt.snapbackspeed);
                    y.onscrollend && y.scrollrunning && y.triggerScrollEnd(), y.scrollrunning = !1
                }) : (this.doScrollLeft = function (t, e) {
                    var i = y.scrollrunning ? y.newscrolly : y.getScrollTop();
                    y.doScrollPos(t, i, e)
                }, this.doScrollTop = function (t, e) {
                    var i = y.scrollrunning ? y.newscrollx : y.getScrollLeft();
                    y.doScrollPos(i, t, e)
                }, this.doScrollPos = function (t, e, i) {
                    if (e = void 0 === e || !1 === e ? y.getScrollTop(!0) : e, y.timer && y.newscrolly == e && y.newscrollx == t) return !0;
                    y.timer && l(y.timer), y.timer = 0;
                    var o = y.getScrollTop(), n = y.getScrollLeft();
                    (0 > (y.newscrolly - o) * (e - o) || 0 > (y.newscrollx - n) * (t - n)) && y.cancelScroll(), y.newscrolly = e, y.newscrollx = t, y.bouncescroll && y.rail.visibility || (0 > y.newscrolly ? y.newscrolly = 0 : y.newscrolly > y.page.maxh && (y.newscrolly = y.page.maxh)), y.bouncescroll && y.railh.visibility || (0 > y.newscrollx ? y.newscrollx = 0 : y.newscrollx > y.page.maxw && (y.newscrollx = y.page.maxw)), y.dst = {}, y.dst.x = t - n, y.dst.y = e - o, y.dst.px = n, y.dst.py = o;
                    var s = Math.round(Math.sqrt(Math.pow(y.dst.x, 2) + Math.pow(y.dst.y, 2)));
                    y.dst.ax = y.dst.x / s, y.dst.ay = y.dst.y / s;
                    var r = 0, c = s;
                    if (0 == y.dst.x ? (r = o, c = e, y.dst.ay = 1, y.dst.py = 0) : 0 == y.dst.y && (r = n, c = t, y.dst.ax = 1, y.dst.px = 0), s = y.getTransitionSpeed(s), i && 1 >= i && (s *= i), y.bzscroll = 0 < s && (y.bzscroll ? y.bzscroll.update(c, s) : new _(r, c, s, 0, 1, 0, 1)), !y.timer) {
                        (o == y.page.maxh && e >= y.page.maxh || n == y.page.maxw && t >= y.page.maxw) && y.checkContentSize();
                        var h = 1;
                        y.cancelAnimationFrame = !1, y.timer = 1, y.onscrollstart && !y.scrollrunning && y.onscrollstart.call(y, {
                            type: "scrollstart",
                            current: {x: n, y: o},
                            request: {x: t, y: e},
                            end: {x: y.newscrollx, y: y.newscrolly},
                            speed: s
                        }), function t() {
                            if (y.cancelAnimationFrame) return !0;
                            if (y.scrollrunning = !0, h = 1 - h) return y.timer = a(t) || 1;
                            var e, i, o = 0, n = i = y.getScrollTop();
                            y.dst.ay ? ((0 > (e = (n = y.bzscroll ? y.dst.py + y.bzscroll.getNow() * y.dst.ay : y.newscrolly) - i) && n < y.newscrolly || 0 < e && n > y.newscrolly) && (n = y.newscrolly), y.setScrollTop(n), n == y.newscrolly && (o = 1)) : o = 1, i = e = y.getScrollLeft(), y.dst.ax ? ((0 > (e = (i = y.bzscroll ? y.dst.px + y.bzscroll.getNow() * y.dst.ax : y.newscrollx) - e) && i < y.newscrollx || 0 < e && i > y.newscrollx) && (i = y.newscrollx), y.setScrollLeft(i), i == y.newscrollx && (o += 1)) : o += 1, 2 == o ? (y.timer = 0, y.cursorfreezed = !1, y.bzscroll = !1, y.scrollrunning = !1, 0 > n ? n = 0 : n > y.page.maxh && (n = Math.max(0, y.page.maxh)), 0 > i ? i = 0 : i > y.page.maxw && (i = y.page.maxw), i != y.newscrollx || n != y.newscrolly ? y.doScrollPos(i, n) : y.onscrollend && y.triggerScrollEnd()) : y.timer = a(t) || 1
                        }(), (o == y.page.maxh && e >= o || n == y.page.maxw && t >= n) && y.checkContentSize(), y.noticeCursor()
                    }
                }, this.cancelScroll = function () {
                    return y.timer && l(y.timer), y.timer = 0, y.bzscroll = !1, y.scrollrunning = !1, y
                }) : (this.doScrollLeft = function (t, e) {
                    var i = y.getScrollTop();
                    y.doScrollPos(t, i, e)
                }, this.doScrollTop = function (t, e) {
                    var i = y.getScrollLeft();
                    y.doScrollPos(i, t, e)
                }, this.doScrollPos = function (t, e, i) {
                    var o = t > y.page.maxw ? y.page.maxw : t;
                    0 > o && (o = 0);
                    var n = e > y.page.maxh ? y.page.maxh : e;
                    0 > n && (n = 0), y.synched("scroll", function () {
                        y.setScrollTop(n), y.setScrollLeft(o)
                    })
                }, this.cancelScroll = function () {
                }), this.doScrollBy = function (t, e) {
                    var i = 0;
                    if (i = e ? Math.floor((y.scroll.y - t) * y.scrollratio.y) : (y.timer ? y.newscrolly : y.getScrollTop(!0)) - t, y.bouncescroll) {
                        var o = Math.round(y.view.h / 2);
                        i < -o ? i = -o : i > y.page.maxh + o && (i = y.page.maxh + o)
                    }
                    return y.cursorfreezed = !1, o = y.getScrollTop(!0), 0 > i && 0 >= o ? y.noticeCursor() : i > y.page.maxh && o >= y.page.maxh ? (y.checkContentSize(), y.noticeCursor()) : void y.doScrollTop(i)
                }, this.doScrollLeftBy = function (t, e) {
                    var i = 0;
                    if (i = e ? Math.floor((y.scroll.x - t) * y.scrollratio.x) : (y.timer ? y.newscrollx : y.getScrollLeft(!0)) - t, y.bouncescroll) {
                        var o = Math.round(y.view.w / 2);
                        i < -o ? i = -o : i > y.page.maxw + o && (i = y.page.maxw + o)
                    }
                    if (y.cursorfreezed = !1, o = y.getScrollLeft(!0), 0 > i && 0 >= o || i > y.page.maxw && o >= y.page.maxw) return y.noticeCursor();
                    y.doScrollLeft(i)
                }, this.doScrollTo = function (t, e) {
                    y.cursorfreezed = !1, y.doScrollTop(t)
                }, this.checkContentSize = function () {
                    var t = y.getContentSize();
                    t.h == y.page.h && t.w == y.page.w || y.resize(!1, t)
                }, y.onscroll = function (t) {
                    y.rail.drag || y.cursorfreezed || y.synched("scroll", function () {
                        y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)), y.railh && (y.scroll.x = Math.round(y.getScrollLeft() * (1 / y.scrollratio.x))), y.noticeCursor()
                    })
                }, y.bind(y.docscroll, "scroll", y.onscroll), this.doZoomIn = function (e) {
                    if (!y.zoomactive) {
                        y.zoomactive = !0, y.zoomrestore = {style: {}};
                        var i,
                            o = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
                            n = y.win[0].style;
                        for (i in o) {
                            var r = o[i];
                            y.zoomrestore.style[r] = void 0 !== n[r] ? n[r] : ""
                        }
                        return y.zoomrestore.style.width = y.win.css("width"), y.zoomrestore.style.height = y.win.css("height"), y.zoomrestore.padding = {
                            w: y.win.outerWidth() - y.win.width(),
                            h: y.win.outerHeight() - y.win.height()
                        }, x.isios4 && (y.zoomrestore.scrollTop = t(window).scrollTop(), t(window).scrollTop(0)), y.win.css({
                            position: x.isios4 ? "absolute" : "fixed",
                            top: 0,
                            left: 0,
                            zIndex: s + 100,
                            margin: 0
                        }), ("" == (o = y.win.css("backgroundColor")) || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(o)) && y.win.css("backgroundColor", "#fff"), y.rail.css({zIndex: s + 101}), y.zoom.css({zIndex: s + 102}), y.zoom.css("backgroundPosition", "0px -18px"), y.resizeZoom(), y.onzoomin && y.onzoomin.call(y), y.cancelEvent(e)
                    }
                }, this.doZoomOut = function (e) {
                    if (y.zoomactive) return y.zoomactive = !1, y.win.css("margin", ""), y.win.css(y.zoomrestore.style), x.isios4 && t(window).scrollTop(y.zoomrestore.scrollTop), y.rail.css({"z-index": y.zindex}), y.zoom.css({"z-index": y.zindex}), y.zoomrestore = !1, y.zoom.css("backgroundPosition", "0px 0px"), y.onResize(), y.onzoomout && y.onzoomout.call(y), y.cancelEvent(e)
                }, this.doZoom = function (t) {
                    return y.zoomactive ? y.doZoomOut(t) : y.doZoomIn(t)
                }, this.resizeZoom = function () {
                    if (y.zoomactive) {
                        var e = y.getScrollTop();
                        y.win.css({
                            width: t(window).width() - y.zoomrestore.padding.w + "px",
                            height: t(window).height() - y.zoomrestore.padding.h + "px"
                        }), y.onResize(), y.setScrollTop(Math.min(y.page.maxh, e))
                    }
                }, this.init(), t.nicescroll.push(this)
            }(c, t(this)), t(this).data("__nicescroll", r)), h.push(r)
        }), 1 == h.length ? h[0] : h
    }, window.NiceScroll = {
        getjQuery: function () {
            return t
        }
    }, t.nicescroll || (t.nicescroll = new y, t.nicescroll.options = p)
}), function (t) {
    "use strict";

    function e(t) {
        return function (e) {
            if (e && this === e.target) return t.apply(this, arguments)
        }
    }

    var i = function (t, e) {
        this.init(t, e)
    };
    i.prototype = {
        constructor: i, init: function (e, i) {
            if (this.$element = t(e), this.options = t.extend({}, t.fn.modalmanager.defaults, this.$element.data(), "object" == typeof i && i), this.stack = [], this.backdropCount = 0, this.options.resize) {
                var o, n = this;
                t(window).on("resize.modal", function () {
                    o && clearTimeout(o), o = setTimeout(function () {
                        for (var t = 0; t < n.stack.length; t++) n.stack[t].isShown && n.stack[t].layout()
                    }, 10)
                })
            }
        }, createModal: function (e, i) {
            t(e).modal(t.extend({manager: this}, i))
        }, appendModal: function (i) {
            this.stack.push(i);
            var o = this;
            i.$element.on("show.modalmanager", e(function (e) {
                var n = function () {
                    i.isShown = !0;
                    var e = t.support.transition && i.$element.hasClass("fade");
                    o.$element.toggleClass("modal-open", o.hasOpenModal()).toggleClass("page-overflow", t(window).height() < o.$element.height()), i.$parent = i.$element.parent(), i.$container = o.createContainer(i), i.$element.appendTo(i.$container), o.backdrop(i, function () {
                        i.$element.show(), e && i.$element[0].offsetWidth, i.layout(), i.$element.addClass("in").attr("aria-hidden", !1);
                        var n = function () {
                            o.setFocus(), i.$element.trigger("shown")
                        };
                        e ? i.$element.one(t.support.transition.end, n) : n()
                    })
                };
                i.options.replace ? o.replace(n) : n()
            })), i.$element.on("hidden.modalmanager", e(function (e) {
                o.backdrop(i), i.$element.parent().length ? i.$backdrop ? (t.support.transition && i.$element.hasClass("fade") && i.$element[0].offsetWidth, t.support.transition && i.$element.hasClass("fade") ? i.$backdrop.one(t.support.transition.end, function () {
                    i.destroy()
                }) : i.destroy()) : i.destroy() : o.destroyModal(i)
            })), i.$element.on("destroyed.modalmanager", e(function (t) {
                o.destroyModal(i)
            }))
        }, getOpenModals: function () {
            for (var t = [], e = 0; e < this.stack.length; e++) this.stack[e].isShown && t.push(this.stack[e]);
            return t
        }, hasOpenModal: function () {
            return this.getOpenModals().length > 0
        }, setFocus: function () {
            for (var t, e = 0; e < this.stack.length; e++) this.stack[e].isShown && (t = this.stack[e]);
            t && t.focus()
        }, destroyModal: function (t) {
            t.$element.off(".modalmanager"), t.$backdrop && this.removeBackdrop(t), this.stack.splice(this.getIndexOfModal(t), 1);
            var e = this.hasOpenModal();
            this.$element.toggleClass("modal-open", e), e || this.$element.removeClass("page-overflow"), this.removeContainer(t), this.setFocus()
        }, getModalAt: function (t) {
            return this.stack[t]
        }, getIndexOfModal: function (t) {
            for (var e = 0; e < this.stack.length; e++) if (t === this.stack[e]) return e
        }, replace: function (i) {
            for (var o, n = 0; n < this.stack.length; n++) this.stack[n].isShown && (o = this.stack[n]);
            o ? (this.$backdropHandle = o.$backdrop, o.$backdrop = null, i && o.$element.one("hidden", e(t.proxy(i, this))), o.hide()) : i && i()
        }, removeBackdrop: function (t) {
            t.$backdrop.remove(), t.$backdrop = null
        }, createBackdrop: function (e, i) {
            var o;
            return this.$backdropHandle ? ((o = this.$backdropHandle).off(".modalmanager"), this.$backdropHandle = null, this.isLoading && this.removeSpinner()) : o = t(i).addClass(e).appendTo(this.$element), o
        }, removeContainer: function (t) {
            t.$container.remove(), t.$container = null
        }, createContainer: function (i) {
            var o;
            return o = t('<div class="modal-scrollable">').css("z-index", s("modal", this.getOpenModals().length)).appendTo(this.$element), i && "static" != i.options.backdrop ? o.on("click.modal", e(function (t) {
                i.hide()
            })) : i && o.on("click.modal", e(function (t) {
                i.attention()
            })), o
        }, backdrop: function (e, i) {
            var o = e.$element.hasClass("fade") ? "fade" : "",
                n = e.options.backdrop && this.backdropCount < this.options.backdropLimit;
            if (e.isShown && n) {
                var r = t.support.transition && o && !this.$backdropHandle;
                e.$backdrop = this.createBackdrop(o, e.options.backdropTemplate), e.$backdrop.css("z-index", s("backdrop", this.getOpenModals().length)), r && e.$backdrop[0].offsetWidth, e.$backdrop.addClass("in"), this.backdropCount += 1, r ? e.$backdrop.one(t.support.transition.end, i) : i()
            } else if (!e.isShown && e.$backdrop) {
                e.$backdrop.removeClass("in"), this.backdropCount -= 1;
                var a = this;
                t.support.transition && e.$element.hasClass("fade") ? e.$backdrop.one(t.support.transition.end, function () {
                    a.removeBackdrop(e)
                }) : a.removeBackdrop(e)
            } else i && i()
        }, removeSpinner: function () {
            this.$spinner && this.$spinner.remove(), this.$spinner = null, this.isLoading = !1
        }, removeLoading: function () {
            this.$backdropHandle && this.$backdropHandle.remove(), this.$backdropHandle = null, this.removeSpinner()
        }, loading: function (e) {
            if (e = e || function () {
            }, this.$element.toggleClass("modal-open", !this.isLoading || this.hasOpenModal()).toggleClass("page-overflow", t(window).height() < this.$element.height()), this.isLoading) if (this.isLoading && this.$backdropHandle) {
                this.$backdropHandle.removeClass("in");
                var i = this;
                t.support.transition ? this.$backdropHandle.one(t.support.transition.end, function () {
                    i.removeLoading()
                }) : i.removeLoading()
            } else e && e(this.isLoading); else {
                this.$backdropHandle = this.createBackdrop("fade", this.options.backdropTemplate), this.$backdropHandle[0].offsetWidth;
                var o = this.getOpenModals();
                this.$backdropHandle.css("z-index", s("backdrop", o.length + 1)).addClass("in");
                var n = t(this.options.spinner).css("z-index", s("modal", o.length + 1)).appendTo(this.$element).addClass("in");
                this.$spinner = t(this.createContainer()).append(n).on("click.modalmanager", t.proxy(this.loading, this)), this.isLoading = !0, t.support.transition ? this.$backdropHandle.one(t.support.transition.end, e) : e()
            }
        }
    };
    var o, n, s = (n = {}, function (e, i) {
        if (void 0 === o) {
            var s = t('<div class="modal hide" />').appendTo("body"),
                r = t('<div class="modal-backdrop hide" />').appendTo("body");
            n.modal = +s.css("z-index"), n.backdrop = +r.css("z-index"), o = n.modal - n.backdrop, s.remove(), r.remove(), r = s = null
        }
        return n[e] + o * i
    });
    t.fn.modalmanager = function (e, o) {
        return this.each(function () {
            var n = t(this), s = n.data("modalmanager");
            s || n.data("modalmanager", s = new i(this, e)), "string" == typeof e && s[e].apply(s, [].concat(o))
        })
    }, t.fn.modalmanager.defaults = {
        backdropLimit: 999,
        resize: !0,
        spinner: '<div class="loading-spinner fade" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>',
        backdropTemplate: '<div class="modal-backdrop" />'
    }, t.fn.modalmanager.Constructor = i, t(function () {
        t(document).off("show.bs.modal").off("hidden.bs.modal")
    })
}(jQuery), function (t) {
    "use strict";
    var e = function (t, e) {
        this.init(t, e)
    };
    e.prototype = {
        constructor: e, init: function (e, i) {
            var o = this;
            this.options = i, this.$element = t(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", t.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote, function () {
                var e = t.Event("loaded");
                o.$element.trigger(e)
            });
            var n = "function" == typeof this.options.manager ? this.options.manager.call(this) : this.options.manager;
            (n = n.appendModal ? n : t(n).modalmanager().data("modalmanager")).appendModal(this)
        }, toggle: function () {
            return this[this.isShown ? "hide" : "show"]()
        }, show: function () {
            var e = t.Event("show");
            this.isShown || (this.$element.trigger(e), e.isDefaultPrevented() || (this.escape(), this.tab(), this.options.loading && this.loading()))
        }, hide: function (e) {
            e && e.preventDefault(), e = t.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.tab(), this.isLoading && this.loading(), t(document).off("focusin.modal"), this.$element.removeClass("in").removeClass("animated").removeClass(this.options.attentionAnimation).removeClass("modal-overflow").attr("aria-hidden", !0), t.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        }, layout: function () {
            var e = this.options.height ? "height" : "max-height", i = this.options.height || this.options.maxHeight;
            if (this.options.width) {
                this.$element.css("width", this.options.width);
                var o = this;
                this.$element.css("margin-left", function () {
                    return /%/gi.test(o.options.width) ? -parseInt(o.options.width) / 2 + "%" : -t(this).width() / 2 + "px"
                })
            } else this.$element.css("width", ""), this.$element.css("margin-left", "");
            this.$element.find(".modal-body").css("overflow", "").css(e, ""), i && this.$element.find(".modal-body").css("overflow", "auto").css(e, i), t(window).height() - 10 < this.$element.height() || this.options.modalOverflow ? this.$element.css("margin-top", 0).addClass("modal-overflow") : this.$element.css("margin-top", 0 - this.$element.height() / 2).removeClass("modal-overflow")
        }, tab: function () {
            var e = this;
            this.isShown && this.options.consumeTab ? this.$element.on("keydown.tabindex.modal", "[data-tabindex]", function (i) {
                if (i.keyCode && 9 == i.keyCode) {
                    var o = [], n = Number(t(this).data("tabindex"));
                    e.$element.find("[data-tabindex]:enabled:visible:not([readonly])").each(function (e) {
                        o.push(Number(t(this).data("tabindex")))
                    }), o.sort(function (t, e) {
                        return t - e
                    });
                    var s = t.inArray(n, o);
                    i.shiftKey ? 0 == s ? e.$element.find("[data-tabindex=" + o[o.length - 1] + "]").focus() : e.$element.find("[data-tabindex=" + o[s - 1] + "]").focus() : s < o.length - 1 ? e.$element.find("[data-tabindex=" + o[s + 1] + "]").focus() : e.$element.find("[data-tabindex=" + o[0] + "]").focus(), i.preventDefault()
                }
            }) : this.isShown || this.$element.off("keydown.tabindex.modal")
        }, escape: function () {
            var t = this;
            this.isShown && this.options.keyboard ? (this.$element.attr("tabindex") || this.$element.attr("tabindex", -1), this.$element.on("keyup.dismiss.modal", function (e) {
                27 == e.which && t.hide()
            })) : this.isShown || this.$element.off("keyup.dismiss.modal")
        }, hideWithTransition: function () {
            var e = this, i = setTimeout(function () {
                e.$element.off(t.support.transition.end), e.hideModal()
            }, 500);
            this.$element.one(t.support.transition.end, function () {
                clearTimeout(i), e.hideModal()
            })
        }, hideModal: function () {
            var t = this.options.height ? "height" : "max-height";
            (this.options.height || this.options.maxHeight) && this.$element.find(".modal-body").css("overflow", "").css(t, ""), this.$element.hide().trigger("hidden")
        }, removeLoading: function () {
            this.$loading.remove(), this.$loading = null, this.isLoading = !1
        }, loading: function (e) {
            e = e || function () {
            };
            var i = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isLoading) if (this.isLoading && this.$loading) {
                this.$loading.removeClass("in");
                var o = this;
                t.support.transition && this.$element.hasClass("fade") ? this.$loading.one(t.support.transition.end, function () {
                    o.removeLoading()
                }) : o.removeLoading()
            } else e && e(this.isLoading); else {
                var n = t.support.transition && i;
                this.$loading = t('<div class="loading-mask ' + i + '">').append(this.options.spinner).appendTo(this.$element), n && this.$loading[0].offsetWidth, this.$loading.addClass("in"), this.isLoading = !0, n ? this.$loading.one(t.support.transition.end, e) : e()
            }
        }, focus: function () {
            var t = this.$element.find(this.options.focusOn);
            (t = t.length ? t : this.$element).focus()
        }, attention: function () {
            if (this.options.attentionAnimation) {
                this.$element.removeClass("animated").removeClass(this.options.attentionAnimation);
                var t = this;
                setTimeout(function () {
                    t.$element.addClass("animated").addClass(t.options.attentionAnimation)
                }, 0)
            }
            this.focus()
        }, destroy: function () {
            var e = t.Event("destroy");
            this.$element.trigger(e), e.isDefaultPrevented() || (this.$element.off(".modal").removeData("modal").removeClass("in").attr("aria-hidden", !0), this.$parent !== this.$element.parent() ? this.$element.appendTo(this.$parent) : this.$parent.length || (this.$element.remove(), this.$element = null), this.$element.trigger("destroyed"))
        }
    }, t.fn.modal = function (i, o) {
        return this.each(function () {
            var n = t(this), s = n.data("modal"),
                r = t.extend({}, t.fn.modal.defaults, n.data(), "object" == typeof i && i);
            s || n.data("modal", s = new e(this, r)), "string" == typeof i ? s[i].apply(s, [].concat(o)) : r.show && s.show()
        })
    }, t.fn.modal.defaults = {
        keyboard: !0,
        backdrop: !0,
        loading: !1,
        show: !0,
        width: null,
        height: null,
        maxHeight: null,
        modalOverflow: !1,
        consumeTab: !0,
        focusOn: null,
        replace: !1,
        resize: !1,
        attentionAnimation: "shake",
        manager: "body",
        spinner: '<div class="loading-spinner" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>',
        backdropTemplate: '<div class="modal-backdrop" />'
    }, t.fn.modal.Constructor = e, t(function () {
        t(document).off("click.modal").on("click.modal.data-api", '[data-toggle="modal"]', function (e) {
            var i = t(this), o = i.attr("href"), n = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                s = n.data("modal") ? "toggle" : t.extend({remote: !/#/.test(o) && o}, n.data(), i.data());
            e.preventDefault(), n.modal(s).one("hide", function () {
                i.focus()
            })
        })
    })
}(window.jQuery);