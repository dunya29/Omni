function (e, t, n) {
    var r;
    r = function () {
        return function (e) {
            var t = {};
            function n(r) {
                if (t[r])
                    return t[r].exports;
                var i = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(i.exports, i, i.exports, n),
                    i.l = !0,
                    i.exports
            }
            return n.m = e,
                n.c = t,
                n.d = function (e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                }
                ,
                n.r = function (e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                }
                ,
                n.t = function (e, t) {
                    if (1 & t && (e = n(e)),
                        8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var r = Object.create(null);
                    if (n.r(r),
                        Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }),
                        2 & t && "string" != typeof e)
                        for (var i in e)
                            n.d(r, i, function (t) {
                                return e[t]
                            }
                                .bind(null, i));
                    return r
                }
                ,
                n.n = function (e) {
                    var t = e && e.__esModule ? function () {
                        return e.default
                    }
                        : function () {
                            return e
                        }
                        ;
                    return n.d(t, "a", t),
                        t
                }
                ,
                n.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                n.p = "",
                n(n.s = 21)
        }([function (e, t) {
            var r = {};
            e.exports = r,
                function () {
                    r._nextId = 0,
                        r._seed = 0,
                        r._nowStartTime = +new Date,
                        r._warnedOnce = {},
                        r._decomp = null,
                        r.extend = function (e, t) {
                            var n, i;
                            "boolean" == typeof t ? (n = 2,
                                i = t) : (n = 1,
                                    i = !0);
                            for (var o = n; o < arguments.length; o++) {
                                var s = arguments[o];
                                if (s)
                                    for (var a in s)
                                        i && s[a] && s[a].constructor === Object ? e[a] && e[a].constructor !== Object ? e[a] = s[a] : (e[a] = e[a] || {},
                                            r.extend(e[a], i, s[a])) : e[a] = s[a]
                            }
                            return e
                        }
                        ,
                        r.clone = function (e, t) {
                            return r.extend({}, t, e)
                        }
                        ,
                        r.keys = function (e) {
                            if (Object.keys)
                                return Object.keys(e);
                            var t = [];
                            for (var n in e)
                                t.push(n);
                            return t
                        }
                        ,
                        r.values = function (e) {
                            var t = [];
                            if (Object.keys) {
                                for (var n = Object.keys(e), r = 0; r < n.length; r++)
                                    t.push(e[n[r]]);
                                return t
                            }
                            for (var i in e)
                                t.push(e[i]);
                            return t
                        }
                        ,
                        r.get = function (e, t, n, r) {
                            t = t.split(".").slice(n, r);
                            for (var i = 0; i < t.length; i += 1)
                                e = e[t[i]];
                            return e
                        }
                        ,
                        r.set = function (e, t, n, i, o) {
                            var s = t.split(".").slice(i, o);
                            return r.get(e, t, 0, -1)[s[s.length - 1]] = n,
                                n
                        }
                        ,
                        r.shuffle = function (e) {
                            for (var t = e.length - 1; t > 0; t--) {
                                var n = Math.floor(r.random() * (t + 1))
                                    , i = e[t];
                                e[t] = e[n],
                                    e[n] = i
                            }
                            return e
                        }
                        ,
                        r.choose = function (e) {
                            return e[Math.floor(r.random() * e.length)]
                        }
                        ,
                        r.isElement = function (e) {
                            return "undefined" != typeof HTMLElement ? e instanceof HTMLElement : !!(e && e.nodeType && e.nodeName)
                        }
                        ,
                        r.isArray = function (e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        }
                        ,
                        r.isFunction = function (e) {
                            return "function" == typeof e
                        }
                        ,
                        r.isPlainObject = function (e) {
                            return "object" == typeof e && e.constructor === Object
                        }
                        ,
                        r.isString = function (e) {
                            return "[object String]" === toString.call(e)
                        }
                        ,
                        r.clamp = function (e, t, n) {
                            return e < t ? t : e > n ? n : e
                        }
                        ,
                        r.sign = function (e) {
                            return e < 0 ? -1 : 1
                        }
                        ,
                        r.now = function () {
                            if ("undefined" != typeof window && window.performance) {
                                if (window.performance.now)
                                    return window.performance.now();
                                if (window.performance.webkitNow)
                                    return window.performance.webkitNow()
                            }
                            return Date.now ? Date.now() : new Date - r._nowStartTime
                        }
                        ,
                        r.random = function (t, n) {
                            return n = void 0 !== n ? n : 1,
                                (t = void 0 !== t ? t : 0) + e() * (n - t)
                        }
                        ;
                    var e = function () {
                        return r._seed = (9301 * r._seed + 49297) % 233280,
                            r._seed / 233280
                    };
                    r.colorToNumber = function (e) {
                        return 3 == (e = e.replace("#", "")).length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)),
                            parseInt(e, 16)
                    }
                        ,
                        r.logLevel = 1,
                        r.log = function () {
                            console && r.logLevel > 0 && r.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                        }
                        ,
                        r.info = function () {
                            console && r.logLevel > 0 && r.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                        }
                        ,
                        r.warn = function () {
                            console && r.logLevel > 0 && r.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                        }
                        ,
                        r.warnOnce = function () {
                            var e = Array.prototype.slice.call(arguments).join(" ");
                            r._warnedOnce[e] || (r.warn(e),
                                r._warnedOnce[e] = !0)
                        }
                        ,
                        r.deprecated = function (e, t, n) {
                            e[t] = r.chain((function () {
                                r.warnOnce("🔅 deprecated 🔅", n)
                            }
                            ), e[t])
                        }
                        ,
                        r.nextId = function () {
                            return r._nextId++
                        }
                        ,
                        r.indexOf = function (e, t) {
                            if (e.indexOf)
                                return e.indexOf(t);
                            for (var n = 0; n < e.length; n++)
                                if (e[n] === t)
                                    return n;
                            return -1
                        }
                        ,
                        r.map = function (e, t) {
                            if (e.map)
                                return e.map(t);
                            for (var n = [], r = 0; r < e.length; r += 1)
                                n.push(t(e[r]));
                            return n
                        }
                        ,
                        r.topologicalSort = function (e) {
                            var t = []
                                , n = []
                                , i = [];
                            for (var o in e)
                                n[o] || i[o] || r._topologicalSort(o, n, i, e, t);
                            return t
                        }
                        ,
                        r._topologicalSort = function (e, t, n, i, o) {
                            var s = i[e] || [];
                            n[e] = !0;
                            for (var a = 0; a < s.length; a += 1) {
                                var l = s[a];
                                n[l] || t[l] || r._topologicalSort(l, t, n, i, o)
                            }
                            n[e] = !1,
                                t[e] = !0,
                                o.push(e)
                        }
                        ,
                        r.chain = function () {
                            for (var e = [], t = 0; t < arguments.length; t += 1) {
                                var n = arguments[t];
                                n._chained ? e.push.apply(e, n._chained) : e.push(n)
                            }
                            var r = function () {
                                for (var t, n = new Array(arguments.length), r = 0, i = arguments.length; r < i; r++)
                                    n[r] = arguments[r];
                                for (r = 0; r < e.length; r += 1) {
                                    var o = e[r].apply(t, n);
                                    void 0 !== o && (t = o)
                                }
                                return t
                            };
                            return r._chained = e,
                                r
                        }
                        ,
                        r.chainPathBefore = function (e, t, n) {
                            return r.set(e, t, r.chain(n, r.get(e, t)))
                        }
                        ,
                        r.chainPathAfter = function (e, t, n) {
                            return r.set(e, t, r.chain(r.get(e, t), n))
                        }
                        ,
                        r.setDecomp = function (e) {
                            r._decomp = e
                        }
                        ,
                        r.getDecomp = function () {
                            var e = r._decomp;
                            try {
                                e || "undefined" == typeof window || (e = window.decomp),
                                    e || void 0 === n.g || (e = n.g.decomp)
                            } catch (t) {
                                e = null
                            }
                            return e
                        }
                }()
        }
            , function (e, t) {
                var n = {};
                e.exports = n,
                    n.create = function (e) {
                        var t = {
                            min: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: 0,
                                y: 0
                            }
                        };
                        return e && n.update(t, e),
                            t
                    }
                    ,
                    n.update = function (e, t, n) {
                        e.min.x = 1 / 0,
                            e.max.x = -1 / 0,
                            e.min.y = 1 / 0,
                            e.max.y = -1 / 0;
                        for (var r = 0; r < t.length; r++) {
                            var i = t[r];
                            i.x > e.max.x && (e.max.x = i.x),
                                i.x < e.min.x && (e.min.x = i.x),
                                i.y > e.max.y && (e.max.y = i.y),
                                i.y < e.min.y && (e.min.y = i.y)
                        }
                        n && (n.x > 0 ? e.max.x += n.x : e.min.x += n.x,
                            n.y > 0 ? e.max.y += n.y : e.min.y += n.y)
                    }
                    ,
                    n.contains = function (e, t) {
                        return t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y
                    }
                    ,
                    n.overlaps = function (e, t) {
                        return e.min.x <= t.max.x && e.max.x >= t.min.x && e.max.y >= t.min.y && e.min.y <= t.max.y
                    }
                    ,
                    n.translate = function (e, t) {
                        e.min.x += t.x,
                            e.max.x += t.x,
                            e.min.y += t.y,
                            e.max.y += t.y
                    }
                    ,
                    n.shift = function (e, t) {
                        var n = e.max.x - e.min.x
                            , r = e.max.y - e.min.y;
                        e.min.x = t.x,
                            e.max.x = t.x + n,
                            e.min.y = t.y,
                            e.max.y = t.y + r
                    }
            }
            , function (e, t) {
                var n = {};
                e.exports = n,
                    n.create = function (e, t) {
                        return {
                            x: e || 0,
                            y: t || 0
                        }
                    }
                    ,
                    n.clone = function (e) {
                        return {
                            x: e.x,
                            y: e.y
                        }
                    }
                    ,
                    n.magnitude = function (e) {
                        return Math.sqrt(e.x * e.x + e.y * e.y)
                    }
                    ,
                    n.magnitudeSquared = function (e) {
                        return e.x * e.x + e.y * e.y
                    }
                    ,
                    n.rotate = function (e, t, n) {
                        var r = Math.cos(t)
                            , i = Math.sin(t);
                        n || (n = {});
                        var o = e.x * r - e.y * i;
                        return n.y = e.x * i + e.y * r,
                            n.x = o,
                            n
                    }
                    ,
                    n.rotateAbout = function (e, t, n, r) {
                        var i = Math.cos(t)
                            , o = Math.sin(t);
                        r || (r = {});
                        var s = n.x + ((e.x - n.x) * i - (e.y - n.y) * o);
                        return r.y = n.y + ((e.x - n.x) * o + (e.y - n.y) * i),
                            r.x = s,
                            r
                    }
                    ,
                    n.normalise = function (e) {
                        var t = n.magnitude(e);
                        return 0 === t ? {
                            x: 0,
                            y: 0
                        } : {
                            x: e.x / t,
                            y: e.y / t
                        }
                    }
                    ,
                    n.dot = function (e, t) {
                        return e.x * t.x + e.y * t.y
                    }
                    ,
                    n.cross = function (e, t) {
                        return e.x * t.y - e.y * t.x
                    }
                    ,
                    n.cross3 = function (e, t, n) {
                        return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x)
                    }
                    ,
                    n.add = function (e, t, n) {
                        return n || (n = {}),
                            n.x = e.x + t.x,
                            n.y = e.y + t.y,
                            n
                    }
                    ,
                    n.sub = function (e, t, n) {
                        return n || (n = {}),
                            n.x = e.x - t.x,
                            n.y = e.y - t.y,
                            n
                    }
                    ,
                    n.mult = function (e, t) {
                        return {
                            x: e.x * t,
                            y: e.y * t
                        }
                    }
                    ,
                    n.div = function (e, t) {
                        return {
                            x: e.x / t,
                            y: e.y / t
                        }
                    }
                    ,
                    n.perp = function (e, t) {
                        return {
                            x: (t = !0 === t ? -1 : 1) * -e.y,
                            y: t * e.x
                        }
                    }
                    ,
                    n.neg = function (e) {
                        return {
                            x: -e.x,
                            y: -e.y
                        }
                    }
                    ,
                    n.angle = function (e, t) {
                        return Math.atan2(t.y - e.y, t.x - e.x)
                    }
                    ,
                    n._temp = [n.create(), n.create(), n.create(), n.create(), n.create(), n.create()]
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(2)
                    , o = n(0);
                r.create = function (e, t) {
                    for (var n = [], r = 0; r < e.length; r++) {
                        var i = e[r]
                            , o = {
                                x: i.x,
                                y: i.y,
                                index: r,
                                body: t,
                                isInternal: !1
                            };
                        n.push(o)
                    }
                    return n
                }
                    ,
                    r.fromPath = function (e, t) {
                        var n = [];
                        return e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi, (function (e, t, r) {
                            n.push({
                                x: parseFloat(t),
                                y: parseFloat(r)
                            })
                        }
                        )),
                            r.create(n, t)
                    }
                    ,
                    r.centre = function (e) {
                        for (var t, n, o, s = r.area(e, !0), a = {
                            x: 0,
                            y: 0
                        }, l = 0; l < e.length; l++)
                            o = (l + 1) % e.length,
                                t = i.cross(e[l], e[o]),
                                n = i.mult(i.add(e[l], e[o]), t),
                                a = i.add(a, n);
                        return i.div(a, 6 * s)
                    }
                    ,
                    r.mean = function (e) {
                        for (var t = {
                            x: 0,
                            y: 0
                        }, n = 0; n < e.length; n++)
                            t.x += e[n].x,
                                t.y += e[n].y;
                        return i.div(t, e.length)
                    }
                    ,
                    r.area = function (e, t) {
                        for (var n = 0, r = e.length - 1, i = 0; i < e.length; i++)
                            n += (e[r].x - e[i].x) * (e[r].y + e[i].y),
                                r = i;
                        return t ? n / 2 : Math.abs(n) / 2
                    }
                    ,
                    r.inertia = function (e, t) {
                        for (var n, r, o = 0, s = 0, a = e, l = 0; l < a.length; l++)
                            r = (l + 1) % a.length,
                                o += (n = Math.abs(i.cross(a[r], a[l]))) * (i.dot(a[r], a[r]) + i.dot(a[r], a[l]) + i.dot(a[l], a[l])),
                                s += n;
                        return t / 6 * (o / s)
                    }
                    ,
                    r.translate = function (e, t, n) {
                        n = void 0 !== n ? n : 1;
                        var r, i = e.length, o = t.x * n, s = t.y * n;
                        for (r = 0; r < i; r++)
                            e[r].x += o,
                                e[r].y += s;
                        return e
                    }
                    ,
                    r.rotate = function (e, t, n) {
                        if (0 !== t) {
                            var r, i, o, s, a = Math.cos(t), l = Math.sin(t), c = n.x, u = n.y, d = e.length;
                            for (s = 0; s < d; s++)
                                i = (r = e[s]).x - c,
                                    o = r.y - u,
                                    r.x = c + (i * a - o * l),
                                    r.y = u + (i * l + o * a);
                            return e
                        }
                    }
                    ,
                    r.contains = function (e, t) {
                        for (var n, r = t.x, i = t.y, o = e.length, s = e[o - 1], a = 0; a < o; a++) {
                            if (n = e[a],
                                (r - s.x) * (n.y - s.y) + (i - s.y) * (s.x - n.x) > 0)
                                return !1;
                            s = n
                        }
                        return !0
                    }
                    ,
                    r.scale = function (e, t, n, o) {
                        if (1 === t && 1 === n)
                            return e;
                        var s, a;
                        o = o || r.centre(e);
                        for (var l = 0; l < e.length; l++)
                            s = e[l],
                                a = i.sub(s, o),
                                e[l].x = o.x + a.x * t,
                                e[l].y = o.y + a.y * n;
                        return e
                    }
                    ,
                    r.chamfer = function (e, t, n, r, s) {
                        t = "number" == typeof t ? [t] : t || [8],
                            n = void 0 !== n ? n : -1,
                            r = r || 2,
                            s = s || 14;
                        for (var a = [], l = 0; l < e.length; l++) {
                            var c = e[l - 1 >= 0 ? l - 1 : e.length - 1]
                                , u = e[l]
                                , d = e[(l + 1) % e.length]
                                , p = t[l < t.length ? l : t.length - 1];
                            if (0 !== p) {
                                var f = i.normalise({
                                    x: u.y - c.y,
                                    y: c.x - u.x
                                })
                                    , h = i.normalise({
                                        x: d.y - u.y,
                                        y: u.x - d.x
                                    })
                                    , m = Math.sqrt(2 * Math.pow(p, 2))
                                    , v = i.mult(o.clone(f), p)
                                    , g = i.normalise(i.mult(i.add(f, h), .5))
                                    , y = i.sub(u, i.mult(g, m))
                                    , x = n;
                                -1 === n && (x = 1.75 * Math.pow(p, .32)),
                                    (x = o.clamp(x, r, s)) % 2 == 1 && (x += 1);
                                for (var b = Math.acos(i.dot(f, h)) / x, w = 0; w < x; w++)
                                    a.push(i.add(i.rotate(v, b * w), y))
                            } else
                                a.push(u)
                        }
                        return a
                    }
                    ,
                    r.clockwiseSort = function (e) {
                        var t = r.mean(e);
                        return e.sort((function (e, n) {
                            return i.angle(t, e) - i.angle(t, n)
                        }
                        )),
                            e
                    }
                    ,
                    r.isConvex = function (e) {
                        var t, n, r, i, o = 0, s = e.length;
                        if (s < 3)
                            return null;
                        for (t = 0; t < s; t++)
                            if (r = (t + 2) % s,
                                i = (e[n = (t + 1) % s].x - e[t].x) * (e[r].y - e[n].y),
                                (i -= (e[n].y - e[t].y) * (e[r].x - e[n].x)) < 0 ? o |= 1 : i > 0 && (o |= 2),
                                3 === o)
                                return !1;
                        return 0 !== o || null
                    }
                    ,
                    r.hull = function (e) {
                        var t, n, r = [], o = [];
                        for ((e = e.slice(0)).sort((function (e, t) {
                            var n = e.x - t.x;
                            return 0 !== n ? n : e.y - t.y
                        }
                        )),
                            n = 0; n < e.length; n += 1) {
                            for (t = e[n]; o.length >= 2 && i.cross3(o[o.length - 2], o[o.length - 1], t) <= 0;)
                                o.pop();
                            o.push(t)
                        }
                        for (n = e.length - 1; n >= 0; n -= 1) {
                            for (t = e[n]; r.length >= 2 && i.cross3(r[r.length - 2], r[r.length - 1], t) <= 0;)
                                r.pop();
                            r.push(t)
                        }
                        return r.pop(),
                            o.pop(),
                            r.concat(o)
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(0);
                r.on = function (e, t, n) {
                    for (var r, i = t.split(" "), o = 0; o < i.length; o++)
                        r = i[o],
                            e.events = e.events || {},
                            e.events[r] = e.events[r] || [],
                            e.events[r].push(n);
                    return n
                }
                    ,
                    r.off = function (e, t, n) {
                        if (t) {
                            "function" == typeof t && (n = t,
                                t = i.keys(e.events).join(" "));
                            for (var r = t.split(" "), o = 0; o < r.length; o++) {
                                var s = e.events[r[o]]
                                    , a = [];
                                if (n && s)
                                    for (var l = 0; l < s.length; l++)
                                        s[l] !== n && a.push(s[l]);
                                e.events[r[o]] = a
                            }
                        } else
                            e.events = {}
                    }
                    ,
                    r.trigger = function (e, t, n) {
                        var r, o, s, a, l = e.events;
                        if (l && i.keys(l).length > 0) {
                            n || (n = {}),
                                r = t.split(" ");
                            for (var c = 0; c < r.length; c++)
                                if (s = l[o = r[c]]) {
                                    (a = i.clone(n, !1)).name = o,
                                        a.source = e;
                                    for (var u = 0; u < s.length; u++)
                                        s[u].apply(e, [a])
                                }
                        }
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(4)
                    , o = n(0)
                    , s = n(1)
                    , a = n(6);
                r.create = function (e) {
                    return o.extend({
                        id: o.nextId(),
                        type: "composite",
                        parent: null,
                        isModified: !1,
                        bodies: [],
                        constraints: [],
                        composites: [],
                        label: "Composite",
                        plugin: {},
                        cache: {
                            allBodies: null,
                            allConstraints: null,
                            allComposites: null
                        }
                    }, e)
                }
                    ,
                    r.setModified = function (e, t, n, i) {
                        if (e.isModified = t,
                            t && e.cache && (e.cache.allBodies = null,
                                e.cache.allConstraints = null,
                                e.cache.allComposites = null),
                            n && e.parent && r.setModified(e.parent, t, n, i),
                            i)
                            for (var o = 0; o < e.composites.length; o++) {
                                var s = e.composites[o];
                                r.setModified(s, t, n, i)
                            }
                    }
                    ,
                    r.add = function (e, t) {
                        var n = [].concat(t);
                        i.trigger(e, "beforeAdd", {
                            object: t
                        });
                        for (var s = 0; s < n.length; s++) {
                            var a = n[s];
                            switch (a.type) {
                                case "body":
                                    if (a.parent !== a) {
                                        o.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                                        break
                                    }
                                    r.addBody(e, a);
                                    break;
                                case "constraint":
                                    r.addConstraint(e, a);
                                    break;
                                case "composite":
                                    r.addComposite(e, a);
                                    break;
                                case "mouseConstraint":
                                    r.addConstraint(e, a.constraint)
                            }
                        }
                        return i.trigger(e, "afterAdd", {
                            object: t
                        }),
                            e
                    }
                    ,
                    r.remove = function (e, t, n) {
                        var o = [].concat(t);
                        i.trigger(e, "beforeRemove", {
                            object: t
                        });
                        for (var s = 0; s < o.length; s++) {
                            var a = o[s];
                            switch (a.type) {
                                case "body":
                                    r.removeBody(e, a, n);
                                    break;
                                case "constraint":
                                    r.removeConstraint(e, a, n);
                                    break;
                                case "composite":
                                    r.removeComposite(e, a, n);
                                    break;
                                case "mouseConstraint":
                                    r.removeConstraint(e, a.constraint)
                            }
                        }
                        return i.trigger(e, "afterRemove", {
                            object: t
                        }),
                            e
                    }
                    ,
                    r.addComposite = function (e, t) {
                        return e.composites.push(t),
                            t.parent = e,
                            r.setModified(e, !0, !0, !1),
                            e
                    }
                    ,
                    r.removeComposite = function (e, t, n) {
                        var i = o.indexOf(e.composites, t);
                        if (-1 !== i && r.removeCompositeAt(e, i),
                            n)
                            for (var s = 0; s < e.composites.length; s++)
                                r.removeComposite(e.composites[s], t, !0);
                        return e
                    }
                    ,
                    r.removeCompositeAt = function (e, t) {
                        return e.composites.splice(t, 1),
                            r.setModified(e, !0, !0, !1),
                            e
                    }
                    ,
                    r.addBody = function (e, t) {
                        return e.bodies.push(t),
                            r.setModified(e, !0, !0, !1),
                            e
                    }
                    ,
                    r.removeBody = function (e, t, n) {
                        var i = o.indexOf(e.bodies, t);
                        if (-1 !== i && r.removeBodyAt(e, i),
                            n)
                            for (var s = 0; s < e.composites.length; s++)
                                r.removeBody(e.composites[s], t, !0);
                        return e
                    }
                    ,
                    r.removeBodyAt = function (e, t) {
                        return e.bodies.splice(t, 1),
                            r.setModified(e, !0, !0, !1),
                            e
                    }
                    ,
                    r.addConstraint = function (e, t) {
                        return e.constraints.push(t),
                            r.setModified(e, !0, !0, !1),
                            e
                    }
                    ,
                    r.removeConstraint = function (e, t, n) {
                        var i = o.indexOf(e.constraints, t);
                        if (-1 !== i && r.removeConstraintAt(e, i),
                            n)
                            for (var s = 0; s < e.composites.length; s++)
                                r.removeConstraint(e.composites[s], t, !0);
                        return e
                    }
                    ,
                    r.removeConstraintAt = function (e, t) {
                        return e.constraints.splice(t, 1),
                            r.setModified(e, !0, !0, !1),
                            e
                    }
                    ,
                    r.clear = function (e, t, n) {
                        if (n)
                            for (var i = 0; i < e.composites.length; i++)
                                r.clear(e.composites[i], t, !0);
                        return t ? e.bodies = e.bodies.filter((function (e) {
                            return e.isStatic
                        }
                        )) : e.bodies.length = 0,
                            e.constraints.length = 0,
                            e.composites.length = 0,
                            r.setModified(e, !0, !0, !1),
                            e
                    }
                    ,
                    r.allBodies = function (e) {
                        if (e.cache && e.cache.allBodies)
                            return e.cache.allBodies;
                        for (var t = [].concat(e.bodies), n = 0; n < e.composites.length; n++)
                            t = t.concat(r.allBodies(e.composites[n]));
                        return e.cache && (e.cache.allBodies = t),
                            t
                    }
                    ,
                    r.allConstraints = function (e) {
                        if (e.cache && e.cache.allConstraints)
                            return e.cache.allConstraints;
                        for (var t = [].concat(e.constraints), n = 0; n < e.composites.length; n++)
                            t = t.concat(r.allConstraints(e.composites[n]));
                        return e.cache && (e.cache.allConstraints = t),
                            t
                    }
                    ,
                    r.allComposites = function (e) {
                        if (e.cache && e.cache.allComposites)
                            return e.cache.allComposites;
                        for (var t = [].concat(e.composites), n = 0; n < e.composites.length; n++)
                            t = t.concat(r.allComposites(e.composites[n]));
                        return e.cache && (e.cache.allComposites = t),
                            t
                    }
                    ,
                    r.get = function (e, t, n) {
                        var i, o;
                        switch (n) {
                            case "body":
                                i = r.allBodies(e);
                                break;
                            case "constraint":
                                i = r.allConstraints(e);
                                break;
                            case "composite":
                                i = r.allComposites(e).concat(e)
                        }
                        return i ? 0 === (o = i.filter((function (e) {
                            return e.id.toString() === t.toString()
                        }
                        ))).length ? null : o[0] : null
                    }
                    ,
                    r.move = function (e, t, n) {
                        return r.remove(e, t),
                            r.add(n, t),
                            e
                    }
                    ,
                    r.rebase = function (e) {
                        for (var t = r.allBodies(e).concat(r.allConstraints(e)).concat(r.allComposites(e)), n = 0; n < t.length; n++)
                            t[n].id = o.nextId();
                        return e
                    }
                    ,
                    r.translate = function (e, t, n) {
                        for (var i = n ? r.allBodies(e) : e.bodies, o = 0; o < i.length; o++)
                            a.translate(i[o], t);
                        return e
                    }
                    ,
                    r.rotate = function (e, t, n, i) {
                        for (var o = Math.cos(t), s = Math.sin(t), l = i ? r.allBodies(e) : e.bodies, c = 0; c < l.length; c++) {
                            var u = l[c]
                                , d = u.position.x - n.x
                                , p = u.position.y - n.y;
                            a.setPosition(u, {
                                x: n.x + (d * o - p * s),
                                y: n.y + (d * s + p * o)
                            }),
                                a.rotate(u, t)
                        }
                        return e
                    }
                    ,
                    r.scale = function (e, t, n, i, o) {
                        for (var s = o ? r.allBodies(e) : e.bodies, l = 0; l < s.length; l++) {
                            var c = s[l]
                                , u = c.position.x - i.x
                                , d = c.position.y - i.y;
                            a.setPosition(c, {
                                x: i.x + u * t,
                                y: i.y + d * n
                            }),
                                a.scale(c, t, n)
                        }
                        return e
                    }
                    ,
                    r.bounds = function (e) {
                        for (var t = r.allBodies(e), n = [], i = 0; i < t.length; i += 1) {
                            var o = t[i];
                            n.push(o.bounds.min, o.bounds.max)
                        }
                        return s.create(n)
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(3)
                    , o = n(2)
                    , s = n(7)
                    , a = (n(16),
                        n(0))
                    , l = n(1)
                    , c = n(11);
                !function () {
                    r._inertiaScale = 4,
                        r._nextCollidingGroupId = 1,
                        r._nextNonCollidingGroupId = -1,
                        r._nextCategory = 1,
                        r.create = function (t) {
                            var n = {
                                id: a.nextId(),
                                type: "body",
                                label: "Body",
                                parts: [],
                                plugin: {},
                                angle: 0,
                                vertices: i.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                                position: {
                                    x: 0,
                                    y: 0
                                },
                                force: {
                                    x: 0,
                                    y: 0
                                },
                                torque: 0,
                                positionImpulse: {
                                    x: 0,
                                    y: 0
                                },
                                constraintImpulse: {
                                    x: 0,
                                    y: 0,
                                    angle: 0
                                },
                                totalContacts: 0,
                                speed: 0,
                                angularSpeed: 0,
                                velocity: {
                                    x: 0,
                                    y: 0
                                },
                                angularVelocity: 0,
                                isSensor: !1,
                                isStatic: !1,
                                isSleeping: !1,
                                motion: 0,
                                sleepThreshold: 60,
                                density: .001,
                                restitution: 0,
                                friction: .1,
                                frictionStatic: .5,
                                frictionAir: .01,
                                collisionFilter: {
                                    category: 1,
                                    mask: 4294967295,
                                    group: 0
                                },
                                slop: .05,
                                timeScale: 1,
                                render: {
                                    visible: !0,
                                    opacity: 1,
                                    strokeStyle: null,
                                    fillStyle: null,
                                    lineWidth: null,
                                    sprite: {
                                        xScale: 1,
                                        yScale: 1,
                                        xOffset: 0,
                                        yOffset: 0
                                    }
                                },
                                events: null,
                                bounds: null,
                                chamfer: null,
                                circleRadius: 0,
                                positionPrev: null,
                                anglePrev: 0,
                                parent: null,
                                axes: null,
                                area: 0,
                                mass: 0,
                                inertia: 0,
                                _original: null
                            }
                                , r = a.extend(n, t);
                            return e(r, t),
                                r
                        }
                        ,
                        r.nextGroup = function (e) {
                            return e ? r._nextNonCollidingGroupId-- : r._nextCollidingGroupId++
                        }
                        ,
                        r.nextCategory = function () {
                            return r._nextCategory = r._nextCategory << 1,
                                r._nextCategory
                        }
                        ;
                    var e = function (e, t) {
                        t = t || {},
                            r.set(e, {
                                bounds: e.bounds || l.create(e.vertices),
                                positionPrev: e.positionPrev || o.clone(e.position),
                                anglePrev: e.anglePrev || e.angle,
                                vertices: e.vertices,
                                parts: e.parts || [e],
                                isStatic: e.isStatic,
                                isSleeping: e.isSleeping,
                                parent: e.parent || e
                            }),
                            i.rotate(e.vertices, e.angle, e.position),
                            c.rotate(e.axes, e.angle),
                            l.update(e.bounds, e.vertices, e.velocity),
                            r.set(e, {
                                axes: t.axes || e.axes,
                                area: t.area || e.area,
                                mass: t.mass || e.mass,
                                inertia: t.inertia || e.inertia
                            });
                        var n = e.isStatic ? "#14151f" : a.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"])
                            , s = e.isStatic ? "#555" : "#ccc"
                            , u = e.isStatic && null === e.render.fillStyle ? 1 : 0;
                        e.render.fillStyle = e.render.fillStyle || n,
                            e.render.strokeStyle = e.render.strokeStyle || s,
                            e.render.lineWidth = e.render.lineWidth || u,
                            e.render.sprite.xOffset += -(e.bounds.min.x - e.position.x) / (e.bounds.max.x - e.bounds.min.x),
                            e.render.sprite.yOffset += -(e.bounds.min.y - e.position.y) / (e.bounds.max.y - e.bounds.min.y)
                    };
                    r.set = function (e, t, n) {
                        var i;
                        for (i in "string" == typeof t && (i = t,
                            (t = {})[i] = n),
                            t)
                            if (Object.prototype.hasOwnProperty.call(t, i))
                                switch (n = t[i],
                                i) {
                                    case "isStatic":
                                        r.setStatic(e, n);
                                        break;
                                    case "isSleeping":
                                        s.set(e, n);
                                        break;
                                    case "mass":
                                        r.setMass(e, n);
                                        break;
                                    case "density":
                                        r.setDensity(e, n);
                                        break;
                                    case "inertia":
                                        r.setInertia(e, n);
                                        break;
                                    case "vertices":
                                        r.setVertices(e, n);
                                        break;
                                    case "position":
                                        r.setPosition(e, n);
                                        break;
                                    case "angle":
                                        r.setAngle(e, n);
                                        break;
                                    case "velocity":
                                        r.setVelocity(e, n);
                                        break;
                                    case "angularVelocity":
                                        r.setAngularVelocity(e, n);
                                        break;
                                    case "parts":
                                        r.setParts(e, n);
                                        break;
                                    case "centre":
                                        r.setCentre(e, n);
                                        break;
                                    default:
                                        e[i] = n
                                }
                    }
                        ,
                        r.setStatic = function (e, t) {
                            for (var n = 0; n < e.parts.length; n++) {
                                var r = e.parts[n];
                                r.isStatic = t,
                                    t ? (r._original = {
                                        restitution: r.restitution,
                                        friction: r.friction,
                                        mass: r.mass,
                                        inertia: r.inertia,
                                        density: r.density,
                                        inverseMass: r.inverseMass,
                                        inverseInertia: r.inverseInertia
                                    },
                                        r.restitution = 0,
                                        r.friction = 1,
                                        r.mass = r.inertia = r.density = 1 / 0,
                                        r.inverseMass = r.inverseInertia = 0,
                                        r.positionPrev.x = r.position.x,
                                        r.positionPrev.y = r.position.y,
                                        r.anglePrev = r.angle,
                                        r.angularVelocity = 0,
                                        r.speed = 0,
                                        r.angularSpeed = 0,
                                        r.motion = 0) : r._original && (r.restitution = r._original.restitution,
                                            r.friction = r._original.friction,
                                            r.mass = r._original.mass,
                                            r.inertia = r._original.inertia,
                                            r.density = r._original.density,
                                            r.inverseMass = r._original.inverseMass,
                                            r.inverseInertia = r._original.inverseInertia,
                                            r._original = null)
                            }
                        }
                        ,
                        r.setMass = function (e, t) {
                            var n = e.inertia / (e.mass / 6);
                            e.inertia = n * (t / 6),
                                e.inverseInertia = 1 / e.inertia,
                                e.mass = t,
                                e.inverseMass = 1 / e.mass,
                                e.density = e.mass / e.area
                        }
                        ,
                        r.setDensity = function (e, t) {
                            r.setMass(e, t * e.area),
                                e.density = t
                        }
                        ,
                        r.setInertia = function (e, t) {
                            e.inertia = t,
                                e.inverseInertia = 1 / e.inertia
                        }
                        ,
                        r.setVertices = function (e, t) {
                            t[0].body === e ? e.vertices = t : e.vertices = i.create(t, e),
                                e.axes = c.fromVertices(e.vertices),
                                e.area = i.area(e.vertices),
                                r.setMass(e, e.density * e.area);
                            var n = i.centre(e.vertices);
                            i.translate(e.vertices, n, -1),
                                r.setInertia(e, r._inertiaScale * i.inertia(e.vertices, e.mass)),
                                i.translate(e.vertices, e.position),
                                l.update(e.bounds, e.vertices, e.velocity)
                        }
                        ,
                        r.setParts = function (e, t, n) {
                            var o;
                            for (t = t.slice(0),
                                e.parts.length = 0,
                                e.parts.push(e),
                                e.parent = e,
                                o = 0; o < t.length; o++) {
                                var s = t[o];
                                s !== e && (s.parent = e,
                                    e.parts.push(s))
                            }
                            if (1 !== e.parts.length) {
                                if (n = void 0 === n || n) {
                                    var a = [];
                                    for (o = 0; o < t.length; o++)
                                        a = a.concat(t[o].vertices);
                                    i.clockwiseSort(a);
                                    var l = i.hull(a)
                                        , c = i.centre(l);
                                    r.setVertices(e, l),
                                        i.translate(e.vertices, c)
                                }
                                var u = r._totalProperties(e);
                                e.area = u.area,
                                    e.parent = e,
                                    e.position.x = u.centre.x,
                                    e.position.y = u.centre.y,
                                    e.positionPrev.x = u.centre.x,
                                    e.positionPrev.y = u.centre.y,
                                    r.setMass(e, u.mass),
                                    r.setInertia(e, u.inertia),
                                    r.setPosition(e, u.centre)
                            }
                        }
                        ,
                        r.setCentre = function (e, t, n) {
                            n ? (e.positionPrev.x += t.x,
                                e.positionPrev.y += t.y,
                                e.position.x += t.x,
                                e.position.y += t.y) : (e.positionPrev.x = t.x - (e.position.x - e.positionPrev.x),
                                    e.positionPrev.y = t.y - (e.position.y - e.positionPrev.y),
                                    e.position.x = t.x,
                                    e.position.y = t.y)
                        }
                        ,
                        r.setPosition = function (e, t) {
                            var n = o.sub(t, e.position);
                            e.positionPrev.x += n.x,
                                e.positionPrev.y += n.y;
                            for (var r = 0; r < e.parts.length; r++) {
                                var s = e.parts[r];
                                s.position.x += n.x,
                                    s.position.y += n.y,
                                    i.translate(s.vertices, n),
                                    l.update(s.bounds, s.vertices, e.velocity)
                            }
                        }
                        ,
                        r.setAngle = function (e, t) {
                            var n = t - e.angle;
                            e.anglePrev += n;
                            for (var r = 0; r < e.parts.length; r++) {
                                var s = e.parts[r];
                                s.angle += n,
                                    i.rotate(s.vertices, n, e.position),
                                    c.rotate(s.axes, n),
                                    l.update(s.bounds, s.vertices, e.velocity),
                                    r > 0 && o.rotateAbout(s.position, n, e.position, s.position)
                            }
                        }
                        ,
                        r.setVelocity = function (e, t) {
                            e.positionPrev.x = e.position.x - t.x,
                                e.positionPrev.y = e.position.y - t.y,
                                e.velocity.x = t.x,
                                e.velocity.y = t.y,
                                e.speed = o.magnitude(e.velocity)
                        }
                        ,
                        r.setAngularVelocity = function (e, t) {
                            e.anglePrev = e.angle - t,
                                e.angularVelocity = t,
                                e.angularSpeed = Math.abs(e.angularVelocity)
                        }
                        ,
                        r.translate = function (e, t) {
                            r.setPosition(e, o.add(e.position, t))
                        }
                        ,
                        r.rotate = function (e, t, n) {
                            if (n) {
                                var i = Math.cos(t)
                                    , o = Math.sin(t)
                                    , s = e.position.x - n.x
                                    , a = e.position.y - n.y;
                                r.setPosition(e, {
                                    x: n.x + (s * i - a * o),
                                    y: n.y + (s * o + a * i)
                                }),
                                    r.setAngle(e, e.angle + t)
                            } else
                                r.setAngle(e, e.angle + t)
                        }
                        ,
                        r.scale = function (e, t, n, o) {
                            var s = 0
                                , a = 0;
                            o = o || e.position;
                            for (var u = 0; u < e.parts.length; u++) {
                                var d = e.parts[u];
                                i.scale(d.vertices, t, n, o),
                                    d.axes = c.fromVertices(d.vertices),
                                    d.area = i.area(d.vertices),
                                    r.setMass(d, e.density * d.area),
                                    i.translate(d.vertices, {
                                        x: -d.position.x,
                                        y: -d.position.y
                                    }),
                                    r.setInertia(d, r._inertiaScale * i.inertia(d.vertices, d.mass)),
                                    i.translate(d.vertices, {
                                        x: d.position.x,
                                        y: d.position.y
                                    }),
                                    u > 0 && (s += d.area,
                                        a += d.inertia),
                                    d.position.x = o.x + (d.position.x - o.x) * t,
                                    d.position.y = o.y + (d.position.y - o.y) * n,
                                    l.update(d.bounds, d.vertices, e.velocity)
                            }
                            e.parts.length > 1 && (e.area = s,
                                e.isStatic || (r.setMass(e, e.density * s),
                                    r.setInertia(e, a))),
                                e.circleRadius && (t === n ? e.circleRadius *= t : e.circleRadius = null)
                        }
                        ,
                        r.update = function (e, t, n, r) {
                            var s = Math.pow(t * n * e.timeScale, 2)
                                , a = 1 - e.frictionAir * n * e.timeScale
                                , u = e.position.x - e.positionPrev.x
                                , d = e.position.y - e.positionPrev.y;
                            e.velocity.x = u * a * r + e.force.x / e.mass * s,
                                e.velocity.y = d * a * r + e.force.y / e.mass * s,
                                e.positionPrev.x = e.position.x,
                                e.positionPrev.y = e.position.y,
                                e.position.x += e.velocity.x,
                                e.position.y += e.velocity.y,
                                e.angularVelocity = (e.angle - e.anglePrev) * a * r + e.torque / e.inertia * s,
                                e.anglePrev = e.angle,
                                e.angle += e.angularVelocity,
                                e.speed = o.magnitude(e.velocity),
                                e.angularSpeed = Math.abs(e.angularVelocity);
                            for (var p = 0; p < e.parts.length; p++) {
                                var f = e.parts[p];
                                i.translate(f.vertices, e.velocity),
                                    p > 0 && (f.position.x += e.velocity.x,
                                        f.position.y += e.velocity.y),
                                    0 !== e.angularVelocity && (i.rotate(f.vertices, e.angularVelocity, e.position),
                                        c.rotate(f.axes, e.angularVelocity),
                                        p > 0 && o.rotateAbout(f.position, e.angularVelocity, e.position, f.position)),
                                    l.update(f.bounds, f.vertices, e.velocity)
                            }
                        }
                        ,
                        r.applyForce = function (e, t, n) {
                            e.force.x += n.x,
                                e.force.y += n.y;
                            var r = t.x - e.position.x
                                , i = t.y - e.position.y;
                            e.torque += r * n.y - i * n.x
                        }
                        ,
                        r._totalProperties = function (e) {
                            for (var t = {
                                mass: 0,
                                area: 0,
                                inertia: 0,
                                centre: {
                                    x: 0,
                                    y: 0
                                }
                            }, n = 1 === e.parts.length ? 0 : 1; n < e.parts.length; n++) {
                                var r = e.parts[n]
                                    , i = r.mass !== 1 / 0 ? r.mass : 1;
                                t.mass += i,
                                    t.area += r.area,
                                    t.inertia += r.inertia,
                                    t.centre = o.add(t.centre, o.mult(r.position, i))
                            }
                            return t.centre = o.div(t.centre, t.mass),
                                t
                        }
                }()
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(4);
                r._motionWakeThreshold = .18,
                    r._motionSleepThreshold = .08,
                    r._minBias = .9,
                    r.update = function (e, t) {
                        for (var n = t * t * t, i = 0; i < e.length; i++) {
                            var o = e[i]
                                , s = o.speed * o.speed + o.angularSpeed * o.angularSpeed;
                            if (0 === o.force.x && 0 === o.force.y) {
                                var a = Math.min(o.motion, s)
                                    , l = Math.max(o.motion, s);
                                o.motion = r._minBias * a + (1 - r._minBias) * l,
                                    o.sleepThreshold > 0 && o.motion < r._motionSleepThreshold * n ? (o.sleepCounter += 1,
                                        o.sleepCounter >= o.sleepThreshold && r.set(o, !0)) : o.sleepCounter > 0 && (o.sleepCounter -= 1)
                            } else
                                r.set(o, !1)
                        }
                    }
                    ,
                    r.afterCollisions = function (e, t) {
                        for (var n = t * t * t, i = 0; i < e.length; i++) {
                            var o = e[i];
                            if (o.isActive) {
                                var s = o.collision
                                    , a = s.bodyA.parent
                                    , l = s.bodyB.parent;
                                if (!(a.isSleeping && l.isSleeping || a.isStatic || l.isStatic) && (a.isSleeping || l.isSleeping)) {
                                    var c = a.isSleeping && !a.isStatic ? a : l
                                        , u = c === a ? l : a;
                                    !c.isStatic && u.motion > r._motionWakeThreshold * n && r.set(c, !1)
                                }
                            }
                        }
                    }
                    ,
                    r.set = function (e, t) {
                        var n = e.isSleeping;
                        t ? (e.isSleeping = !0,
                            e.sleepCounter = e.sleepThreshold,
                            e.positionImpulse.x = 0,
                            e.positionImpulse.y = 0,
                            e.positionPrev.x = e.position.x,
                            e.positionPrev.y = e.position.y,
                            e.anglePrev = e.angle,
                            e.speed = 0,
                            e.angularSpeed = 0,
                            e.motion = 0,
                            n || i.trigger(e, "sleepStart")) : (e.isSleeping = !1,
                                e.sleepCounter = 0,
                                n && i.trigger(e, "sleepEnd"))
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i, o, s, a = n(3), l = n(9);
                i = [],
                    o = {
                        overlap: 0,
                        axis: null
                    },
                    s = {
                        overlap: 0,
                        axis: null
                    },
                    r.create = function (e, t) {
                        return {
                            pair: null,
                            collided: !1,
                            bodyA: e,
                            bodyB: t,
                            parentA: e.parent,
                            parentB: t.parent,
                            depth: 0,
                            normal: {
                                x: 0,
                                y: 0
                            },
                            tangent: {
                                x: 0,
                                y: 0
                            },
                            penetration: {
                                x: 0,
                                y: 0
                            },
                            supports: []
                        }
                    }
                    ,
                    r.collides = function (e, t, n) {
                        if (r._overlapAxes(o, e.vertices, t.vertices, e.axes),
                            o.overlap <= 0)
                            return null;
                        if (r._overlapAxes(s, t.vertices, e.vertices, t.axes),
                            s.overlap <= 0)
                            return null;
                        var i, c, u = n && n.table[l.id(e, t)];
                        u ? i = u.collision : ((i = r.create(e, t)).collided = !0,
                            i.bodyA = e.id < t.id ? e : t,
                            i.bodyB = e.id < t.id ? t : e,
                            i.parentA = i.bodyA.parent,
                            i.parentB = i.bodyB.parent),
                            e = i.bodyA,
                            t = i.bodyB,
                            c = o.overlap < s.overlap ? o : s;
                        var d = i.normal
                            , p = i.supports
                            , f = c.axis
                            , h = f.x
                            , m = f.y;
                        h * (t.position.x - e.position.x) + m * (t.position.y - e.position.y) < 0 ? (d.x = h,
                            d.y = m) : (d.x = -h,
                                d.y = -m),
                            i.tangent.x = -d.y,
                            i.tangent.y = d.x,
                            i.depth = c.overlap,
                            i.penetration.x = d.x * i.depth,
                            i.penetration.y = d.y * i.depth;
                        var v = r._findSupports(e, t, d, 1)
                            , g = 0;
                        if (a.contains(e.vertices, v[0]) && (p[g++] = v[0]),
                            a.contains(e.vertices, v[1]) && (p[g++] = v[1]),
                            g < 2) {
                            var y = r._findSupports(t, e, d, -1);
                            a.contains(t.vertices, y[0]) && (p[g++] = y[0]),
                                g < 2 && a.contains(t.vertices, y[1]) && (p[g++] = y[1])
                        }
                        return 0 === g && (p[g++] = v[0]),
                            p.length = g,
                            i
                    }
                    ,
                    r._overlapAxes = function (e, t, n, r) {
                        var i, o, s, a, l, c, u = t.length, d = n.length, p = t[0].x, f = t[0].y, h = n[0].x, m = n[0].y, v = r.length, g = Number.MAX_VALUE, y = 0;
                        for (l = 0; l < v; l++) {
                            var x = r[l]
                                , b = x.x
                                , w = x.y
                                , _ = p * b + f * w
                                , S = h * b + m * w
                                , T = _
                                , C = S;
                            for (c = 1; c < u; c += 1)
                                (a = t[c].x * b + t[c].y * w) > T ? T = a : a < _ && (_ = a);
                            for (c = 1; c < d; c += 1)
                                (a = n[c].x * b + n[c].y * w) > C ? C = a : a < S && (S = a);
                            if ((i = (o = T - S) < (s = C - _) ? o : s) < g && (g = i,
                                y = l,
                                i <= 0))
                                break
                        }
                        e.axis = r[y],
                            e.overlap = g
                    }
                    ,
                    r._projectToAxis = function (e, t, n) {
                        for (var r = t[0].x * n.x + t[0].y * n.y, i = r, o = 1; o < t.length; o += 1) {
                            var s = t[o].x * n.x + t[o].y * n.y;
                            s > i ? i = s : s < r && (r = s)
                        }
                        e.min = r,
                            e.max = i
                    }
                    ,
                    r._findSupports = function (e, t, n, r) {
                        var o, s, a, l, c, u = t.vertices, d = u.length, p = e.position.x, f = e.position.y, h = n.x * r, m = n.y * r, v = Number.MAX_VALUE;
                        for (c = 0; c < d; c += 1)
                            (l = h * (p - (s = u[c]).x) + m * (f - s.y)) < v && (v = l,
                                o = s);
                        return v = h * (p - (a = u[(d + o.index - 1) % d]).x) + m * (f - a.y),
                            h * (p - (s = u[(o.index + 1) % d]).x) + m * (f - s.y) < v ? (i[0] = o,
                                i[1] = s,
                                i) : (i[0] = o,
                                    i[1] = a,
                                    i)
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(17);
                r.create = function (e, t) {
                    var n = e.bodyA
                        , i = e.bodyB
                        , o = {
                            id: r.id(n, i),
                            bodyA: n,
                            bodyB: i,
                            collision: e,
                            contacts: [],
                            activeContacts: [],
                            separation: 0,
                            isActive: !0,
                            confirmedActive: !0,
                            isSensor: n.isSensor || i.isSensor,
                            timeCreated: t,
                            timeUpdated: t,
                            inverseMass: 0,
                            friction: 0,
                            frictionStatic: 0,
                            restitution: 0,
                            slop: 0
                        };
                    return r.update(o, e, t),
                        o
                }
                    ,
                    r.update = function (e, t, n) {
                        var r = e.contacts
                            , o = t.supports
                            , s = e.activeContacts
                            , a = t.parentA
                            , l = t.parentB
                            , c = a.vertices.length;
                        e.isActive = !0,
                            e.timeUpdated = n,
                            e.collision = t,
                            e.separation = t.depth,
                            e.inverseMass = a.inverseMass + l.inverseMass,
                            e.friction = a.friction < l.friction ? a.friction : l.friction,
                            e.frictionStatic = a.frictionStatic > l.frictionStatic ? a.frictionStatic : l.frictionStatic,
                            e.restitution = a.restitution > l.restitution ? a.restitution : l.restitution,
                            e.slop = a.slop > l.slop ? a.slop : l.slop,
                            t.pair = e,
                            s.length = 0;
                        for (var u = 0; u < o.length; u++) {
                            var d = o[u]
                                , p = d.body === a ? d.index : c + d.index
                                , f = r[p];
                            f ? s.push(f) : s.push(r[p] = i.create(d))
                        }
                    }
                    ,
                    r.setActive = function (e, t, n) {
                        t ? (e.isActive = !0,
                            e.timeUpdated = n) : (e.isActive = !1,
                                e.activeContacts.length = 0)
                    }
                    ,
                    r.id = function (e, t) {
                        return e.id < t.id ? "A" + e.id + "B" + t.id : "A" + t.id + "B" + e.id
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(3)
                    , o = n(2)
                    , s = n(7)
                    , a = n(1)
                    , l = n(11)
                    , c = n(0);
                r._warming = .4,
                    r._torqueDampen = 1,
                    r._minLength = 1e-6,
                    r.create = function (e) {
                        var t = e;
                        t.bodyA && !t.pointA && (t.pointA = {
                            x: 0,
                            y: 0
                        }),
                            t.bodyB && !t.pointB && (t.pointB = {
                                x: 0,
                                y: 0
                            });
                        var n = t.bodyA ? o.add(t.bodyA.position, t.pointA) : t.pointA
                            , r = t.bodyB ? o.add(t.bodyB.position, t.pointB) : t.pointB
                            , i = o.magnitude(o.sub(n, r));
                        t.length = void 0 !== t.length ? t.length : i,
                            t.id = t.id || c.nextId(),
                            t.label = t.label || "Constraint",
                            t.type = "constraint",
                            t.stiffness = t.stiffness || (t.length > 0 ? 1 : .7),
                            t.damping = t.damping || 0,
                            t.angularStiffness = t.angularStiffness || 0,
                            t.angleA = t.bodyA ? t.bodyA.angle : t.angleA,
                            t.angleB = t.bodyB ? t.bodyB.angle : t.angleB,
                            t.plugin = {};
                        var s = {
                            visible: !0,
                            lineWidth: 2,
                            strokeStyle: "#ffffff",
                            type: "line",
                            anchors: !0
                        };
                        return 0 === t.length && t.stiffness > .1 ? (s.type = "pin",
                            s.anchors = !1) : t.stiffness < .9 && (s.type = "spring"),
                            t.render = c.extend(s, t.render),
                            t
                    }
                    ,
                    r.preSolveAll = function (e) {
                        for (var t = 0; t < e.length; t += 1) {
                            var n = e[t]
                                , r = n.constraintImpulse;
                            n.isStatic || 0 === r.x && 0 === r.y && 0 === r.angle || (n.position.x += r.x,
                                n.position.y += r.y,
                                n.angle += r.angle)
                        }
                    }
                    ,
                    r.solveAll = function (e, t) {
                        for (var n = 0; n < e.length; n += 1) {
                            var i = e[n]
                                , o = !i.bodyA || i.bodyA && i.bodyA.isStatic
                                , s = !i.bodyB || i.bodyB && i.bodyB.isStatic;
                            (o || s) && r.solve(e[n], t)
                        }
                        for (n = 0; n < e.length; n += 1)
                            o = !(i = e[n]).bodyA || i.bodyA && i.bodyA.isStatic,
                                s = !i.bodyB || i.bodyB && i.bodyB.isStatic,
                                o || s || r.solve(e[n], t)
                    }
                    ,
                    r.solve = function (e, t) {
                        var n = e.bodyA
                            , i = e.bodyB
                            , s = e.pointA
                            , a = e.pointB;
                        if (n || i) {
                            n && !n.isStatic && (o.rotate(s, n.angle - e.angleA, s),
                                e.angleA = n.angle),
                                i && !i.isStatic && (o.rotate(a, i.angle - e.angleB, a),
                                    e.angleB = i.angle);
                            var l = s
                                , c = a;
                            if (n && (l = o.add(n.position, s)),
                                i && (c = o.add(i.position, a)),
                                l && c) {
                                var u = o.sub(l, c)
                                    , d = o.magnitude(u);
                                d < r._minLength && (d = r._minLength);
                                var p, f, h, m, v, g = (d - e.length) / d, y = e.stiffness < 1 ? e.stiffness * t : e.stiffness, x = o.mult(u, g * y), b = (n ? n.inverseMass : 0) + (i ? i.inverseMass : 0), w = b + ((n ? n.inverseInertia : 0) + (i ? i.inverseInertia : 0));
                                if (e.damping) {
                                    var _ = o.create();
                                    h = o.div(u, d),
                                        v = o.sub(i && o.sub(i.position, i.positionPrev) || _, n && o.sub(n.position, n.positionPrev) || _),
                                        m = o.dot(h, v)
                                }
                                n && !n.isStatic && (f = n.inverseMass / b,
                                    n.constraintImpulse.x -= x.x * f,
                                    n.constraintImpulse.y -= x.y * f,
                                    n.position.x -= x.x * f,
                                    n.position.y -= x.y * f,
                                    e.damping && (n.positionPrev.x -= e.damping * h.x * m * f,
                                        n.positionPrev.y -= e.damping * h.y * m * f),
                                    p = o.cross(s, x) / w * r._torqueDampen * n.inverseInertia * (1 - e.angularStiffness),
                                    n.constraintImpulse.angle -= p,
                                    n.angle -= p),
                                    i && !i.isStatic && (f = i.inverseMass / b,
                                        i.constraintImpulse.x += x.x * f,
                                        i.constraintImpulse.y += x.y * f,
                                        i.position.x += x.x * f,
                                        i.position.y += x.y * f,
                                        e.damping && (i.positionPrev.x += e.damping * h.x * m * f,
                                            i.positionPrev.y += e.damping * h.y * m * f),
                                        p = o.cross(a, x) / w * r._torqueDampen * i.inverseInertia * (1 - e.angularStiffness),
                                        i.constraintImpulse.angle += p,
                                        i.angle += p)
                            }
                        }
                    }
                    ,
                    r.postSolveAll = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t]
                                , c = n.constraintImpulse;
                            if (!(n.isStatic || 0 === c.x && 0 === c.y && 0 === c.angle)) {
                                s.set(n, !1);
                                for (var u = 0; u < n.parts.length; u++) {
                                    var d = n.parts[u];
                                    i.translate(d.vertices, c),
                                        u > 0 && (d.position.x += c.x,
                                            d.position.y += c.y),
                                        0 !== c.angle && (i.rotate(d.vertices, c.angle, n.position),
                                            l.rotate(d.axes, c.angle),
                                            u > 0 && o.rotateAbout(d.position, c.angle, n.position, d.position)),
                                        a.update(d.bounds, d.vertices, n.velocity)
                                }
                                c.angle *= r._warming,
                                    c.x *= r._warming,
                                    c.y *= r._warming
                            }
                        }
                    }
                    ,
                    r.pointAWorld = function (e) {
                        return {
                            x: (e.bodyA ? e.bodyA.position.x : 0) + e.pointA.x,
                            y: (e.bodyA ? e.bodyA.position.y : 0) + e.pointA.y
                        }
                    }
                    ,
                    r.pointBWorld = function (e) {
                        return {
                            x: (e.bodyB ? e.bodyB.position.x : 0) + e.pointB.x,
                            y: (e.bodyB ? e.bodyB.position.y : 0) + e.pointB.y
                        }
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(2)
                    , o = n(0);
                r.fromVertices = function (e) {
                    for (var t = {}, n = 0; n < e.length; n++) {
                        var r = (n + 1) % e.length
                            , s = i.normalise({
                                x: e[r].y - e[n].y,
                                y: e[n].x - e[r].x
                            })
                            , a = 0 === s.y ? 1 / 0 : s.x / s.y;
                        t[a = a.toFixed(3).toString()] = s
                    }
                    return o.values(t)
                }
                    ,
                    r.rotate = function (e, t) {
                        if (0 !== t)
                            for (var n = Math.cos(t), r = Math.sin(t), i = 0; i < e.length; i++) {
                                var o, s = e[i];
                                o = s.x * n - s.y * r,
                                    s.y = s.x * r + s.y * n,
                                    s.x = o
                            }
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(3)
                    , o = n(0)
                    , s = n(6)
                    , a = n(1)
                    , l = n(2);
                r.rectangle = function (e, t, n, r, a) {
                    a = a || {};
                    var l = {
                        label: "Rectangle Body",
                        position: {
                            x: e,
                            y: t
                        },
                        vertices: i.fromPath("L 0 0 L " + n + " 0 L " + n + " " + r + " L 0 " + r)
                    };
                    if (a.chamfer) {
                        var c = a.chamfer;
                        l.vertices = i.chamfer(l.vertices, c.radius, c.quality, c.qualityMin, c.qualityMax),
                            delete a.chamfer
                    }
                    return s.create(o.extend({}, l, a))
                }
                    ,
                    r.trapezoid = function (e, t, n, r, a, l) {
                        l = l || {};
                        var c, u = n * (a *= .5), d = u + (1 - 2 * a) * n, p = d + u;
                        c = a < .5 ? "L 0 0 L " + u + " " + -r + " L " + d + " " + -r + " L " + p + " 0" : "L 0 0 L " + d + " " + -r + " L " + p + " 0";
                        var f = {
                            label: "Trapezoid Body",
                            position: {
                                x: e,
                                y: t
                            },
                            vertices: i.fromPath(c)
                        };
                        if (l.chamfer) {
                            var h = l.chamfer;
                            f.vertices = i.chamfer(f.vertices, h.radius, h.quality, h.qualityMin, h.qualityMax),
                                delete l.chamfer
                        }
                        return s.create(o.extend({}, f, l))
                    }
                    ,
                    r.circle = function (e, t, n, i, s) {
                        i = i || {};
                        var a = {
                            label: "Circle Body",
                            circleRadius: n
                        };
                        s = s || 25;
                        var l = Math.ceil(Math.max(10, Math.min(s, n)));
                        return l % 2 == 1 && (l += 1),
                            r.polygon(e, t, l, n, o.extend({}, a, i))
                    }
                    ,
                    r.polygon = function (e, t, n, a, l) {
                        if (l = l || {},
                            n < 3)
                            return r.circle(e, t, a, l);
                        for (var c = 2 * Math.PI / n, u = "", d = .5 * c, p = 0; p < n; p += 1) {
                            var f = d + p * c
                                , h = Math.cos(f) * a
                                , m = Math.sin(f) * a;
                            u += "L " + h.toFixed(3) + " " + m.toFixed(3) + " "
                        }
                        var v = {
                            label: "Polygon Body",
                            position: {
                                x: e,
                                y: t
                            },
                            vertices: i.fromPath(u)
                        };
                        if (l.chamfer) {
                            var g = l.chamfer;
                            v.vertices = i.chamfer(v.vertices, g.radius, g.quality, g.qualityMin, g.qualityMax),
                                delete l.chamfer
                        }
                        return s.create(o.extend({}, v, l))
                    }
                    ,
                    r.fromVertices = function (e, t, n, r, c, u, d, p) {
                        var f, h, m, v, g, y, x, b, w, _, S = o.getDecomp();
                        for (f = Boolean(S && S.quickDecomp),
                            r = r || {},
                            m = [],
                            c = void 0 !== c && c,
                            u = void 0 !== u ? u : .01,
                            d = void 0 !== d ? d : 10,
                            p = void 0 !== p ? p : .01,
                            o.isArray(n[0]) || (n = [n]),
                            w = 0; w < n.length; w += 1)
                            if (g = n[w],
                                !(v = i.isConvex(g)) && !f && o.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),
                                v || !f)
                                g = v ? i.clockwiseSort(g) : i.hull(g),
                                    m.push({
                                        position: {
                                            x: e,
                                            y: t
                                        },
                                        vertices: g
                                    });
                            else {
                                var T = g.map((function (e) {
                                    return [e.x, e.y]
                                }
                                ));
                                S.makeCCW(T),
                                    !1 !== u && S.removeCollinearPoints(T, u),
                                    !1 !== p && S.removeDuplicatePoints && S.removeDuplicatePoints(T, p);
                                var C = S.quickDecomp(T);
                                for (y = 0; y < C.length; y++) {
                                    var E = C[y].map((function (e) {
                                        return {
                                            x: e[0],
                                            y: e[1]
                                        }
                                    }
                                    ));
                                    d > 0 && i.area(E) < d || m.push({
                                        position: i.centre(E),
                                        vertices: E
                                    })
                                }
                            }
                        for (y = 0; y < m.length; y++)
                            m[y] = s.create(o.extend(m[y], r));
                        if (c)
                            for (y = 0; y < m.length; y++) {
                                var k = m[y];
                                for (x = y + 1; x < m.length; x++) {
                                    var M = m[x];
                                    if (a.overlaps(k.bounds, M.bounds)) {
                                        var A = k.vertices
                                            , P = M.vertices;
                                        for (b = 0; b < k.vertices.length; b++)
                                            for (_ = 0; _ < M.vertices.length; _++) {
                                                var O = l.magnitudeSquared(l.sub(A[(b + 1) % A.length], P[_]))
                                                    , L = l.magnitudeSquared(l.sub(A[b], P[(_ + 1) % P.length]));
                                                O < 5 && L < 5 && (A[b].isInternal = !0,
                                                    P[_].isInternal = !0)
                                            }
                                    }
                                }
                            }
                        return m.length > 1 ? (h = s.create(o.extend({
                            parts: m.slice(0)
                        }, r)),
                            s.setPosition(h, {
                                x: e,
                                y: t
                            }),
                            h) : m[0]
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(0);
                r.create = function (e) {
                    var t = {};
                    return e || i.log("Mouse.create: element was undefined, defaulting to document.body", "warn"),
                        t.element = e || document.body,
                        t.absolute = {
                            x: 0,
                            y: 0
                        },
                        t.position = {
                            x: 0,
                            y: 0
                        },
                        t.mousedownPosition = {
                            x: 0,
                            y: 0
                        },
                        t.mouseupPosition = {
                            x: 0,
                            y: 0
                        },
                        t.offset = {
                            x: 0,
                            y: 0
                        },
                        t.scale = {
                            x: 1,
                            y: 1
                        },
                        t.wheelDelta = 0,
                        t.button = -1,
                        t.pixelRatio = parseInt(t.element.getAttribute("data-pixel-ratio"), 10) || 1,
                        t.sourceEvents = {
                            mousemove: null,
                            mousedown: null,
                            mouseup: null,
                            mousewheel: null
                        },
                        t.mousemove = function (e) {
                            var n = r._getRelativeMousePosition(e, t.element, t.pixelRatio);
                            e.changedTouches && (t.button = 0,
                                e.preventDefault()),
                                t.absolute.x = n.x,
                                t.absolute.y = n.y,
                                t.position.x = t.absolute.x * t.scale.x + t.offset.x,
                                t.position.y = t.absolute.y * t.scale.y + t.offset.y,
                                t.sourceEvents.mousemove = e
                        }
                        ,
                        t.mousedown = function (e) {
                            var n = r._getRelativeMousePosition(e, t.element, t.pixelRatio);
                            e.changedTouches ? (t.button = 0,
                                e.preventDefault()) : t.button = e.button,
                                t.absolute.x = n.x,
                                t.absolute.y = n.y,
                                t.position.x = t.absolute.x * t.scale.x + t.offset.x,
                                t.position.y = t.absolute.y * t.scale.y + t.offset.y,
                                t.mousedownPosition.x = t.position.x,
                                t.mousedownPosition.y = t.position.y,
                                t.sourceEvents.mousedown = e
                        }
                        ,
                        t.mouseup = function (e) {
                            var n = r._getRelativeMousePosition(e, t.element, t.pixelRatio);
                            e.changedTouches && e.preventDefault(),
                                t.button = -1,
                                t.absolute.x = n.x,
                                t.absolute.y = n.y,
                                t.position.x = t.absolute.x * t.scale.x + t.offset.x,
                                t.position.y = t.absolute.y * t.scale.y + t.offset.y,
                                t.mouseupPosition.x = t.position.x,
                                t.mouseupPosition.y = t.position.y,
                                t.sourceEvents.mouseup = e
                        }
                        ,
                        t.mousewheel = function (e) {
                            t.wheelDelta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)),
                                e.preventDefault()
                        }
                        ,
                        r.setElement(t, t.element),
                        t
                }
                    ,
                    r.setElement = function (e, t) {
                        e.element = t,
                            t.addEventListener("mousemove", e.mousemove),
                            t.addEventListener("mousedown", e.mousedown),
                            t.addEventListener("mouseup", e.mouseup),
                            t.addEventListener("mousewheel", e.mousewheel),
                            t.addEventListener("DOMMouseScroll", e.mousewheel),
                            t.addEventListener("touchmove", e.mousemove),
                            t.addEventListener("touchstart", e.mousedown),
                            t.addEventListener("touchend", e.mouseup)
                    }
                    ,
                    r.clearSourceEvents = function (e) {
                        e.sourceEvents.mousemove = null,
                            e.sourceEvents.mousedown = null,
                            e.sourceEvents.mouseup = null,
                            e.sourceEvents.mousewheel = null,
                            e.wheelDelta = 0
                    }
                    ,
                    r.setOffset = function (e, t) {
                        e.offset.x = t.x,
                            e.offset.y = t.y,
                            e.position.x = e.absolute.x * e.scale.x + e.offset.x,
                            e.position.y = e.absolute.y * e.scale.y + e.offset.y
                    }
                    ,
                    r.setScale = function (e, t) {
                        e.scale.x = t.x,
                            e.scale.y = t.y,
                            e.position.x = e.absolute.x * e.scale.x + e.offset.x,
                            e.position.y = e.absolute.y * e.scale.y + e.offset.y
                    }
                    ,
                    r._getRelativeMousePosition = function (e, t, n) {
                        var r, i, o = t.getBoundingClientRect(), s = document.documentElement || document.body.parentNode || document.body, a = void 0 !== window.pageXOffset ? window.pageXOffset : s.scrollLeft, l = void 0 !== window.pageYOffset ? window.pageYOffset : s.scrollTop, c = e.changedTouches;
                        return c ? (r = c[0].pageX - o.left - a,
                            i = c[0].pageY - o.top - l) : (r = e.pageX - o.left - a,
                                i = e.pageY - o.top - l),
                        {
                            x: r / (t.clientWidth / (t.width || t.clientWidth) * n),
                            y: i / (t.clientHeight / (t.height || t.clientHeight) * n)
                        }
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(0)
                    , o = n(8);
                r.create = function (e) {
                    return i.extend({
                        bodies: [],
                        pairs: null
                    }, e)
                }
                    ,
                    r.setBodies = function (e, t) {
                        e.bodies = t.slice(0)
                    }
                    ,
                    r.clear = function (e) {
                        e.bodies = []
                    }
                    ,
                    r.collisions = function (e) {
                        var t, n, i = [], s = e.pairs, a = e.bodies, l = a.length, c = r.canCollide, u = o.collides;
                        for (a.sort(r._compareBoundsX),
                            t = 0; t < l; t++) {
                            var d = a[t]
                                , p = d.bounds
                                , f = d.bounds.max.x
                                , h = d.bounds.max.y
                                , m = d.bounds.min.y
                                , v = d.isStatic || d.isSleeping
                                , g = d.parts.length
                                , y = 1 === g;
                            for (n = t + 1; n < l; n++) {
                                var x = a[n];
                                if ((k = x.bounds).min.x > f)
                                    break;
                                if (!(h < k.min.y || m > k.max.y) && (!v || !x.isStatic && !x.isSleeping) && c(d.collisionFilter, x.collisionFilter)) {
                                    var b = x.parts.length;
                                    if (y && 1 === b)
                                        (C = u(d, x, s)) && i.push(C);
                                    else
                                        for (var w = b > 1 ? 1 : 0, _ = g > 1 ? 1 : 0; _ < g; _++)
                                            for (var S = d.parts[_], T = (p = S.bounds,
                                                w); T < b; T++) {
                                                var C, E = x.parts[T], k = E.bounds;
                                                p.min.x > k.max.x || p.max.x < k.min.x || p.max.y < k.min.y || p.min.y > k.max.y || (C = u(S, E, s)) && i.push(C)
                                            }
                                }
                            }
                        }
                        return i
                    }
                    ,
                    r.canCollide = function (e, t) {
                        return e.group === t.group && 0 !== e.group ? e.group > 0 : 0 != (e.mask & t.category) && 0 != (t.mask & e.category)
                    }
                    ,
                    r._compareBoundsX = function (e, t) {
                        return e.bounds.min.x - t.bounds.min.x
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(0);
                r._registry = {},
                    r.register = function (e) {
                        if (r.isPlugin(e) || i.warn("Plugin.register:", r.toString(e), "does not implement all required fields."),
                            e.name in r._registry) {
                            var t = r._registry[e.name]
                                , n = r.versionParse(e.version).number
                                , o = r.versionParse(t.version).number;
                            n > o ? (i.warn("Plugin.register:", r.toString(t), "was upgraded to", r.toString(e)),
                                r._registry[e.name] = e) : n < o ? i.warn("Plugin.register:", r.toString(t), "can not be downgraded to", r.toString(e)) : e !== t && i.warn("Plugin.register:", r.toString(e), "is already registered to different plugin object")
                        } else
                            r._registry[e.name] = e;
                        return e
                    }
                    ,
                    r.resolve = function (e) {
                        return r._registry[r.dependencyParse(e).name]
                    }
                    ,
                    r.toString = function (e) {
                        return "string" == typeof e ? e : (e.name || "anonymous") + "@" + (e.version || e.range || "0.0.0")
                    }
                    ,
                    r.isPlugin = function (e) {
                        return e && e.name && e.version && e.install
                    }
                    ,
                    r.isUsed = function (e, t) {
                        return e.used.indexOf(t) > -1
                    }
                    ,
                    r.isFor = function (e, t) {
                        var n = e.for && r.dependencyParse(e.for);
                        return !e.for || t.name === n.name && r.versionSatisfies(t.version, n.range)
                    }
                    ,
                    r.use = function (e, t) {
                        if (e.uses = (e.uses || []).concat(t || []),
                            0 !== e.uses.length) {
                            for (var n = r.dependencies(e), o = i.topologicalSort(n), s = [], a = 0; a < o.length; a += 1)
                                if (o[a] !== e.name) {
                                    var l = r.resolve(o[a]);
                                    l ? r.isUsed(e, l.name) || (r.isFor(l, e) || (i.warn("Plugin.use:", r.toString(l), "is for", l.for, "but installed on", r.toString(e) + "."),
                                        l._warned = !0),
                                        l.install ? l.install(e) : (i.warn("Plugin.use:", r.toString(l), "does not specify an install function."),
                                            l._warned = !0),
                                        l._warned ? (s.push("🔶 " + r.toString(l)),
                                            delete l._warned) : s.push("✅ " + r.toString(l)),
                                        e.used.push(l.name)) : s.push("❌ " + o[a])
                                }
                            s.length > 0 && i.info(s.join("  "))
                        } else
                            i.warn("Plugin.use:", r.toString(e), "does not specify any dependencies to install.")
                    }
                    ,
                    r.dependencies = function (e, t) {
                        var n = r.dependencyParse(e)
                            , o = n.name;
                        if (!(o in (t = t || {}))) {
                            e = r.resolve(e) || e,
                                t[o] = i.map(e.uses || [], (function (t) {
                                    r.isPlugin(t) && r.register(t);
                                    var o = r.dependencyParse(t)
                                        , s = r.resolve(t);
                                    return s && !r.versionSatisfies(s.version, o.range) ? (i.warn("Plugin.dependencies:", r.toString(s), "does not satisfy", r.toString(o), "used by", r.toString(n) + "."),
                                        s._warned = !0,
                                        e._warned = !0) : s || (i.warn("Plugin.dependencies:", r.toString(t), "used by", r.toString(n), "could not be resolved."),
                                            e._warned = !0),
                                        o.name
                                }
                                ));
                            for (var s = 0; s < t[o].length; s += 1)
                                r.dependencies(t[o][s], t);
                            return t
                        }
                    }
                    ,
                    r.dependencyParse = function (e) {
                        return i.isString(e) ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(e) || i.warn("Plugin.dependencyParse:", e, "is not a valid dependency string."),
                        {
                            name: e.split("@")[0],
                            range: e.split("@")[1] || "*"
                        }) : {
                            name: e.name,
                            range: e.range || e.version
                        }
                    }
                    ,
                    r.versionParse = function (e) {
                        var t = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                        t.test(e) || i.warn("Plugin.versionParse:", e, "is not a valid version or range.");
                        var n = t.exec(e)
                            , r = Number(n[4])
                            , o = Number(n[5])
                            , s = Number(n[6]);
                        return {
                            isRange: Boolean(n[1] || n[2]),
                            version: n[3],
                            range: e,
                            operator: n[1] || n[2] || "",
                            major: r,
                            minor: o,
                            patch: s,
                            parts: [r, o, s],
                            prerelease: n[7],
                            number: 1e8 * r + 1e4 * o + s
                        }
                    }
                    ,
                    r.versionSatisfies = function (e, t) {
                        t = t || "*";
                        var n = r.versionParse(t)
                            , i = r.versionParse(e);
                        if (n.isRange) {
                            if ("*" === n.operator || "*" === e)
                                return !0;
                            if (">" === n.operator)
                                return i.number > n.number;
                            if (">=" === n.operator)
                                return i.number >= n.number;
                            if ("~" === n.operator)
                                return i.major === n.major && i.minor === n.minor && i.patch >= n.patch;
                            if ("^" === n.operator)
                                return n.major > 0 ? i.major === n.major && i.number >= n.number : n.minor > 0 ? i.minor === n.minor && i.patch >= n.patch : i.patch === n.patch
                        }
                        return e === t || "*" === e
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(0)
                    , o = n(5)
                    , s = n(1)
                    , a = n(4)
                    , l = n(2)
                    , c = n(13);
                !function () {
                    var e, t;
                    "undefined" != typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                        window.setTimeout((function () {
                            e(i.now())
                        }
                        ), 1e3 / 60)
                    }
                        ,
                        t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame),
                        r._goodFps = 30,
                        r._goodDelta = 1e3 / 60,
                        r.create = function (e) {
                            var t = {
                                controller: r,
                                engine: null,
                                element: null,
                                canvas: null,
                                mouse: null,
                                frameRequestId: null,
                                timing: {
                                    historySize: 60,
                                    delta: 0,
                                    deltaHistory: [],
                                    lastTime: 0,
                                    lastTimestamp: 0,
                                    lastElapsed: 0,
                                    timestampElapsed: 0,
                                    timestampElapsedHistory: [],
                                    engineDeltaHistory: [],
                                    engineElapsedHistory: [],
                                    elapsedHistory: []
                                },
                                options: {
                                    width: 800,
                                    height: 600,
                                    pixelRatio: 1,
                                    background: "#14151f",
                                    wireframeBackground: "#14151f",
                                    hasBounds: !!e.bounds,
                                    enabled: !0,
                                    wireframes: !0,
                                    showSleeping: !0,
                                    showDebug: !1,
                                    showStats: !1,
                                    showPerformance: !1,
                                    showBounds: !1,
                                    showVelocity: !1,
                                    showCollisions: !1,
                                    showSeparations: !1,
                                    showAxes: !1,
                                    showPositions: !1,
                                    showAngleIndicator: !1,
                                    showIds: !1,
                                    showVertexNumbers: !1,
                                    showConvexHulls: !1,
                                    showInternalEdges: !1,
                                    showMousePosition: !1
                                }
                            }
                                , n = i.extend(t, e);
                            return n.canvas && (n.canvas.width = n.options.width || n.canvas.width,
                                n.canvas.height = n.options.height || n.canvas.height),
                                n.mouse = e.mouse,
                                n.engine = e.engine,
                                n.canvas = n.canvas || d(n.options.width, n.options.height),
                                n.context = n.canvas.getContext("2d"),
                                n.textures = {},
                                n.bounds = n.bounds || {
                                    min: {
                                        x: 0,
                                        y: 0
                                    },
                                    max: {
                                        x: n.canvas.width,
                                        y: n.canvas.height
                                    }
                                },
                                n.options.showBroadphase = !1,
                                1 !== n.options.pixelRatio && r.setPixelRatio(n, n.options.pixelRatio),
                                i.isElement(n.element) ? n.element.appendChild(n.canvas) : n.canvas.parentNode || i.log("Render.create: options.element was undefined, render.canvas was created but not appended", "warn"),
                                n
                        }
                        ,
                        r.run = function (t) {
                            !function i(o) {
                                t.frameRequestId = e(i),
                                    n(t, o),
                                    r.world(t, o),
                                    (t.options.showStats || t.options.showDebug) && r.stats(t, t.context, o),
                                    (t.options.showPerformance || t.options.showDebug) && r.performance(t, t.context, o)
                            }()
                        }
                        ,
                        r.stop = function (e) {
                            t(e.frameRequestId)
                        }
                        ,
                        r.setPixelRatio = function (e, t) {
                            var n = e.options
                                , r = e.canvas;
                            "auto" === t && (t = p(r)),
                                n.pixelRatio = t,
                                r.setAttribute("data-pixel-ratio", t),
                                r.width = n.width * t,
                                r.height = n.height * t,
                                r.style.width = n.width + "px",
                                r.style.height = n.height + "px"
                        }
                        ,
                        r.lookAt = function (e, t, n, r) {
                            r = void 0 === r || r,
                                t = i.isArray(t) ? t : [t],
                                n = n || {
                                    x: 0,
                                    y: 0
                                };
                            for (var o = {
                                min: {
                                    x: 1 / 0,
                                    y: 1 / 0
                                },
                                max: {
                                    x: -1 / 0,
                                    y: -1 / 0
                                }
                            }, s = 0; s < t.length; s += 1) {
                                var a = t[s]
                                    , l = a.bounds ? a.bounds.min : a.min || a.position || a
                                    , u = a.bounds ? a.bounds.max : a.max || a.position || a;
                                l && u && (l.x < o.min.x && (o.min.x = l.x),
                                    u.x > o.max.x && (o.max.x = u.x),
                                    l.y < o.min.y && (o.min.y = l.y),
                                    u.y > o.max.y && (o.max.y = u.y))
                            }
                            var d = o.max.x - o.min.x + 2 * n.x
                                , p = o.max.y - o.min.y + 2 * n.y
                                , f = e.canvas.height
                                , h = e.canvas.width / f
                                , m = d / p
                                , v = 1
                                , g = 1;
                            m > h ? g = m / h : v = h / m,
                                e.options.hasBounds = !0,
                                e.bounds.min.x = o.min.x,
                                e.bounds.max.x = o.min.x + d * v,
                                e.bounds.min.y = o.min.y,
                                e.bounds.max.y = o.min.y + p * g,
                                r && (e.bounds.min.x += .5 * d - d * v * .5,
                                    e.bounds.max.x += .5 * d - d * v * .5,
                                    e.bounds.min.y += .5 * p - p * g * .5,
                                    e.bounds.max.y += .5 * p - p * g * .5),
                                e.bounds.min.x -= n.x,
                                e.bounds.max.x -= n.x,
                                e.bounds.min.y -= n.y,
                                e.bounds.max.y -= n.y,
                                e.mouse && (c.setScale(e.mouse, {
                                    x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                                    y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height
                                }),
                                    c.setOffset(e.mouse, e.bounds.min))
                        }
                        ,
                        r.startViewTransform = function (e) {
                            var t = e.bounds.max.x - e.bounds.min.x
                                , n = e.bounds.max.y - e.bounds.min.y
                                , r = t / e.options.width
                                , i = n / e.options.height;
                            e.context.setTransform(e.options.pixelRatio / r, 0, 0, e.options.pixelRatio / i, 0, 0),
                                e.context.translate(-e.bounds.min.x, -e.bounds.min.y)
                        }
                        ,
                        r.endViewTransform = function (e) {
                            e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0)
                        }
                        ,
                        r.world = function (e, t) {
                            var n, u = i.now(), d = e.engine, p = d.world, f = e.canvas, m = e.context, v = e.options, g = e.timing, y = o.allBodies(p), x = o.allConstraints(p), b = v.wireframes ? v.wireframeBackground : v.background, w = [], _ = [], S = {
                                timestamp: d.timing.timestamp
                            };
                            if (a.trigger(e, "beforeRender", S),
                                e.currentBackground !== b && h(e, b),
                                m.globalCompositeOperation = "source-in",
                                m.fillStyle = "transparent",
                                m.fillRect(0, 0, f.width, f.height),
                                m.globalCompositeOperation = "source-over",
                                v.hasBounds) {
                                for (n = 0; n < y.length; n++) {
                                    var T = y[n];
                                    s.overlaps(T.bounds, e.bounds) && w.push(T)
                                }
                                for (n = 0; n < x.length; n++) {
                                    var C = x[n]
                                        , E = C.bodyA
                                        , k = C.bodyB
                                        , M = C.pointA
                                        , A = C.pointB;
                                    E && (M = l.add(E.position, C.pointA)),
                                        k && (A = l.add(k.position, C.pointB)),
                                        M && A && (s.contains(e.bounds, M) || s.contains(e.bounds, A)) && _.push(C)
                                }
                                r.startViewTransform(e),
                                    e.mouse && (c.setScale(e.mouse, {
                                        x: (e.bounds.max.x - e.bounds.min.x) / e.options.width,
                                        y: (e.bounds.max.y - e.bounds.min.y) / e.options.height
                                    }),
                                        c.setOffset(e.mouse, e.bounds.min))
                            } else
                                _ = x,
                                    w = y,
                                    1 !== e.options.pixelRatio && e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0);
                            !v.wireframes || d.enableSleeping && v.showSleeping ? r.bodies(e, w, m) : (v.showConvexHulls && r.bodyConvexHulls(e, w, m),
                                r.bodyWireframes(e, w, m)),
                                v.showBounds && r.bodyBounds(e, w, m),
                                (v.showAxes || v.showAngleIndicator) && r.bodyAxes(e, w, m),
                                v.showPositions && r.bodyPositions(e, w, m),
                                v.showVelocity && r.bodyVelocity(e, w, m),
                                v.showIds && r.bodyIds(e, w, m),
                                v.showSeparations && r.separations(e, d.pairs.list, m),
                                v.showCollisions && r.collisions(e, d.pairs.list, m),
                                v.showVertexNumbers && r.vertexNumbers(e, w, m),
                                v.showMousePosition && r.mousePosition(e, e.mouse, m),
                                r.constraints(_, m),
                                v.hasBounds && r.endViewTransform(e),
                                a.trigger(e, "afterRender", S),
                                g.lastElapsed = i.now() - u
                        }
                        ,
                        r.stats = function (e, t, n) {
                            for (var r = e.engine, i = r.world, s = o.allBodies(i), a = 0, l = 0, c = 0; c < s.length; c += 1)
                                a += s[c].parts.length;
                            var u = {
                                Part: a,
                                Body: s.length,
                                Cons: o.allConstraints(i).length,
                                Comp: o.allComposites(i).length,
                                Pair: r.pairs.list.length
                            };
                            for (var d in t.fillStyle = "#0e0f19",
                                t.fillRect(l, 0, 302.5, 44),
                                t.font = "12px Arial",
                                t.textBaseline = "top",
                                t.textAlign = "right",
                                u) {
                                var p = u[d];
                                t.fillStyle = "#aaa",
                                    t.fillText(d, l + 55, 8),
                                    t.fillStyle = "#eee",
                                    t.fillText(p, l + 55, 26),
                                    l += 55
                            }
                        }
                        ,
                        r.performance = function (e, t) {
                            var n = e.engine
                                , i = e.timing
                                , o = i.deltaHistory
                                , s = i.elapsedHistory
                                , a = i.timestampElapsedHistory
                                , l = i.engineDeltaHistory
                                , c = i.engineElapsedHistory
                                , d = n.timing.lastDelta
                                , p = u(o)
                                , f = u(s)
                                , h = u(l)
                                , m = u(c)
                                , v = u(a) / p || 0
                                , g = 1e3 / p || 0;
                            t.fillStyle = "#0e0f19",
                                t.fillRect(0, 50, 370, 34),
                                r.status(t, 10, 69, 60, 4, o.length, Math.round(g) + " fps", g / r._goodFps, (function (e) {
                                    return o[e] / p - 1
                                }
                                )),
                                r.status(t, 82, 69, 60, 4, l.length, d.toFixed(2) + " dt", r._goodDelta / d, (function (e) {
                                    return l[e] / h - 1
                                }
                                )),
                                r.status(t, 154, 69, 60, 4, c.length, m.toFixed(2) + " ut", 1 - m / r._goodFps, (function (e) {
                                    return c[e] / m - 1
                                }
                                )),
                                r.status(t, 226, 69, 60, 4, s.length, f.toFixed(2) + " rt", 1 - f / r._goodFps, (function (e) {
                                    return s[e] / f - 1
                                }
                                )),
                                r.status(t, 298, 69, 60, 4, a.length, v.toFixed(2) + " x", v * v * v, (function (e) {
                                    return (a[e] / o[e] / v || 0) - 1
                                }
                                ))
                        }
                        ,
                        r.status = function (e, t, n, r, o, s, a, l, c) {
                            e.strokeStyle = "#888",
                                e.fillStyle = "#444",
                                e.lineWidth = 1,
                                e.fillRect(t, n + 7, r, 1),
                                e.beginPath(),
                                e.moveTo(t, n + 7 - o * i.clamp(.4 * c(0), -2, 2));
                            for (var u = 0; u < r; u += 1)
                                e.lineTo(t + u, n + 7 - (u < s ? o * i.clamp(.4 * c(u), -2, 2) : 0));
                            e.stroke(),
                                e.fillStyle = "hsl(" + i.clamp(25 + 95 * l, 0, 120) + ",100%,60%)",
                                e.fillRect(t, n - 7, 4, 4),
                                e.font = "12px Arial",
                                e.textBaseline = "middle",
                                e.textAlign = "right",
                                e.fillStyle = "#eee",
                                e.fillText(a, t + r, n - 5)
                        }
                        ,
                        r.constraints = function (e, t) {
                            for (var n = t, r = 0; r < e.length; r++) {
                                var o = e[r];
                                if (o.render.visible && o.pointA && o.pointB) {
                                    var s, a, c = o.bodyA, u = o.bodyB;
                                    if (s = c ? l.add(c.position, o.pointA) : o.pointA,
                                        "pin" === o.render.type)
                                        n.beginPath(),
                                            n.arc(s.x, s.y, 3, 0, 2 * Math.PI),
                                            n.closePath();
                                    else {
                                        if (a = u ? l.add(u.position, o.pointB) : o.pointB,
                                            n.beginPath(),
                                            n.moveTo(s.x, s.y),
                                            "spring" === o.render.type)
                                            for (var d, p = l.sub(a, s), f = l.perp(l.normalise(p)), h = Math.ceil(i.clamp(o.length / 5, 12, 20)), m = 1; m < h; m += 1)
                                                d = m % 2 == 0 ? 1 : -1,
                                                    n.lineTo(s.x + p.x * (m / h) + f.x * d * 4, s.y + p.y * (m / h) + f.y * d * 4);
                                        n.lineTo(a.x, a.y)
                                    }
                                    o.render.lineWidth && (n.lineWidth = o.render.lineWidth,
                                        n.strokeStyle = o.render.strokeStyle,
                                        n.stroke()),
                                        o.render.anchors && (n.fillStyle = o.render.strokeStyle,
                                            n.beginPath(),
                                            n.arc(s.x, s.y, 3, 0, 2 * Math.PI),
                                            n.arc(a.x, a.y, 3, 0, 2 * Math.PI),
                                            n.closePath(),
                                            n.fill())
                                }
                            }
                        }
                        ,
                        r.bodies = function (e, t, n) {
                            var r, i, o, s, a = n, l = (e.engine,
                                e.options), c = l.showInternalEdges || !l.wireframes;
                            for (o = 0; o < t.length; o++)
                                if ((r = t[o]).render.visible)
                                    for (s = r.parts.length > 1 ? 1 : 0; s < r.parts.length; s++)
                                        if ((i = r.parts[s]).render.visible) {
                                            if (l.showSleeping && r.isSleeping ? a.globalAlpha = .5 * i.render.opacity : 1 !== i.render.opacity && (a.globalAlpha = i.render.opacity),
                                                i.render.sprite && i.render.sprite.texture && !l.wireframes) {
                                                var u = i.render.sprite
                                                    , d = f(e, u.texture);
                                                a.translate(i.position.x, i.position.y),
                                                    a.rotate(i.angle),
                                                    a.drawImage(d, d.width * -u.xOffset * u.xScale, d.height * -u.yOffset * u.yScale, d.width * u.xScale, d.height * u.yScale),
                                                    a.rotate(-i.angle),
                                                    a.translate(-i.position.x, -i.position.y)
                                            } else {
                                                if (i.circleRadius)
                                                    a.beginPath(),
                                                        a.arc(i.position.x, i.position.y, i.circleRadius, 0, 2 * Math.PI);
                                                else {
                                                    a.beginPath(),
                                                        a.moveTo(i.vertices[0].x, i.vertices[0].y);
                                                    for (var p = 1; p < i.vertices.length; p++)
                                                        !i.vertices[p - 1].isInternal || c ? a.lineTo(i.vertices[p].x, i.vertices[p].y) : a.moveTo(i.vertices[p].x, i.vertices[p].y),
                                                            i.vertices[p].isInternal && !c && a.moveTo(i.vertices[(p + 1) % i.vertices.length].x, i.vertices[(p + 1) % i.vertices.length].y);
                                                    a.lineTo(i.vertices[0].x, i.vertices[0].y),
                                                        a.closePath()
                                                }
                                                l.wireframes ? (a.lineWidth = 1,
                                                    a.strokeStyle = "#bbb",
                                                    a.stroke()) : (a.fillStyle = i.render.fillStyle,
                                                        i.render.lineWidth && (a.lineWidth = i.render.lineWidth,
                                                            a.strokeStyle = i.render.strokeStyle,
                                                            a.stroke()),
                                                        a.fill())
                                            }
                                            a.globalAlpha = 1
                                        }
                        }
                        ,
                        r.bodyWireframes = function (e, t, n) {
                            var r, i, o, s, a, l = n, c = e.options.showInternalEdges;
                            for (l.beginPath(),
                                o = 0; o < t.length; o++)
                                if ((r = t[o]).render.visible)
                                    for (a = r.parts.length > 1 ? 1 : 0; a < r.parts.length; a++) {
                                        for (i = r.parts[a],
                                            l.moveTo(i.vertices[0].x, i.vertices[0].y),
                                            s = 1; s < i.vertices.length; s++)
                                            !i.vertices[s - 1].isInternal || c ? l.lineTo(i.vertices[s].x, i.vertices[s].y) : l.moveTo(i.vertices[s].x, i.vertices[s].y),
                                                i.vertices[s].isInternal && !c && l.moveTo(i.vertices[(s + 1) % i.vertices.length].x, i.vertices[(s + 1) % i.vertices.length].y);
                                        l.lineTo(i.vertices[0].x, i.vertices[0].y)
                                    }
                            l.lineWidth = 1,
                                l.strokeStyle = "#bbb",
                                l.stroke()
                        }
                        ,
                        r.bodyConvexHulls = function (e, t, n) {
                            var r, i, o, s = n;
                            for (s.beginPath(),
                                i = 0; i < t.length; i++)
                                if ((r = t[i]).render.visible && 1 !== r.parts.length) {
                                    for (s.moveTo(r.vertices[0].x, r.vertices[0].y),
                                        o = 1; o < r.vertices.length; o++)
                                        s.lineTo(r.vertices[o].x, r.vertices[o].y);
                                    s.lineTo(r.vertices[0].x, r.vertices[0].y)
                                }
                            s.lineWidth = 1,
                                s.strokeStyle = "rgba(255,255,255,0.2)",
                                s.stroke()
                        }
                        ,
                        r.vertexNumbers = function (e, t, n) {
                            var r, i, o, s = n;
                            for (r = 0; r < t.length; r++) {
                                var a = t[r].parts;
                                for (o = a.length > 1 ? 1 : 0; o < a.length; o++) {
                                    var l = a[o];
                                    for (i = 0; i < l.vertices.length; i++)
                                        s.fillStyle = "rgba(255,255,255,0.2)",
                                            s.fillText(r + "_" + i, l.position.x + .8 * (l.vertices[i].x - l.position.x), l.position.y + .8 * (l.vertices[i].y - l.position.y))
                                }
                            }
                        }
                        ,
                        r.mousePosition = function (e, t, n) {
                            var r = n;
                            r.fillStyle = "rgba(255,255,255,0.8)",
                                r.fillText(t.position.x + "  " + t.position.y, t.position.x + 5, t.position.y - 5)
                        }
                        ,
                        r.bodyBounds = function (e, t, n) {
                            var r = n
                                , i = (e.engine,
                                    e.options);
                            r.beginPath();
                            for (var o = 0; o < t.length; o++)
                                if (t[o].render.visible)
                                    for (var s = t[o].parts, a = s.length > 1 ? 1 : 0; a < s.length; a++) {
                                        var l = s[a];
                                        r.rect(l.bounds.min.x, l.bounds.min.y, l.bounds.max.x - l.bounds.min.x, l.bounds.max.y - l.bounds.min.y)
                                    }
                            i.wireframes ? r.strokeStyle = "rgba(255,255,255,0.08)" : r.strokeStyle = "rgba(0,0,0,0.1)",
                                r.lineWidth = 1,
                                r.stroke()
                        }
                        ,
                        r.bodyAxes = function (e, t, n) {
                            var r, i, o, s, a = n, l = (e.engine,
                                e.options);
                            for (a.beginPath(),
                                i = 0; i < t.length; i++) {
                                var c = t[i]
                                    , u = c.parts;
                                if (c.render.visible)
                                    if (l.showAxes)
                                        for (o = u.length > 1 ? 1 : 0; o < u.length; o++)
                                            for (r = u[o],
                                                s = 0; s < r.axes.length; s++) {
                                                var d = r.axes[s];
                                                a.moveTo(r.position.x, r.position.y),
                                                    a.lineTo(r.position.x + 20 * d.x, r.position.y + 20 * d.y)
                                            }
                                    else
                                        for (o = u.length > 1 ? 1 : 0; o < u.length; o++)
                                            for (r = u[o],
                                                s = 0; s < r.axes.length; s++)
                                                a.moveTo(r.position.x, r.position.y),
                                                    a.lineTo((r.vertices[0].x + r.vertices[r.vertices.length - 1].x) / 2, (r.vertices[0].y + r.vertices[r.vertices.length - 1].y) / 2)
                            }
                            l.wireframes ? (a.strokeStyle = "indianred",
                                a.lineWidth = 1) : (a.strokeStyle = "rgba(255, 255, 255, 0.4)",
                                    a.globalCompositeOperation = "overlay",
                                    a.lineWidth = 2),
                                a.stroke(),
                                a.globalCompositeOperation = "source-over"
                        }
                        ,
                        r.bodyPositions = function (e, t, n) {
                            var r, i, o, s, a = n, l = (e.engine,
                                e.options);
                            for (a.beginPath(),
                                o = 0; o < t.length; o++)
                                if ((r = t[o]).render.visible)
                                    for (s = 0; s < r.parts.length; s++)
                                        i = r.parts[s],
                                            a.arc(i.position.x, i.position.y, 3, 0, 2 * Math.PI, !1),
                                            a.closePath();
                            for (l.wireframes ? a.fillStyle = "indianred" : a.fillStyle = "rgba(0,0,0,0.5)",
                                a.fill(),
                                a.beginPath(),
                                o = 0; o < t.length; o++)
                                (r = t[o]).render.visible && (a.arc(r.positionPrev.x, r.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                                    a.closePath());
                            a.fillStyle = "rgba(255,165,0,0.8)",
                                a.fill()
                        }
                        ,
                        r.bodyVelocity = function (e, t, n) {
                            var r = n;
                            r.beginPath();
                            for (var i = 0; i < t.length; i++) {
                                var o = t[i];
                                o.render.visible && (r.moveTo(o.position.x, o.position.y),
                                    r.lineTo(o.position.x + 2 * (o.position.x - o.positionPrev.x), o.position.y + 2 * (o.position.y - o.positionPrev.y)))
                            }
                            r.lineWidth = 3,
                                r.strokeStyle = "cornflowerblue",
                                r.stroke()
                        }
                        ,
                        r.bodyIds = function (e, t, n) {
                            var r, i, o = n;
                            for (r = 0; r < t.length; r++)
                                if (t[r].render.visible) {
                                    var s = t[r].parts;
                                    for (i = s.length > 1 ? 1 : 0; i < s.length; i++) {
                                        var a = s[i];
                                        o.font = "12px Arial",
                                            o.fillStyle = "rgba(255,255,255,0.5)",
                                            o.fillText(a.id, a.position.x + 10, a.position.y - 10)
                                    }
                                }
                        }
                        ,
                        r.collisions = function (e, t, n) {
                            var r, i, o, s, a = n, l = e.options;
                            for (a.beginPath(),
                                o = 0; o < t.length; o++)
                                if ((r = t[o]).isActive)
                                    for (i = r.collision,
                                        s = 0; s < r.activeContacts.length; s++) {
                                        var c = r.activeContacts[s].vertex;
                                        a.rect(c.x - 1.5, c.y - 1.5, 3.5, 3.5)
                                    }
                            for (l.wireframes ? a.fillStyle = "rgba(255,255,255,0.7)" : a.fillStyle = "orange",
                                a.fill(),
                                a.beginPath(),
                                o = 0; o < t.length; o++)
                                if ((r = t[o]).isActive && (i = r.collision,
                                    r.activeContacts.length > 0)) {
                                    var u = r.activeContacts[0].vertex.x
                                        , d = r.activeContacts[0].vertex.y;
                                    2 === r.activeContacts.length && (u = (r.activeContacts[0].vertex.x + r.activeContacts[1].vertex.x) / 2,
                                        d = (r.activeContacts[0].vertex.y + r.activeContacts[1].vertex.y) / 2),
                                        i.bodyB === i.supports[0].body || !0 === i.bodyA.isStatic ? a.moveTo(u - 8 * i.normal.x, d - 8 * i.normal.y) : a.moveTo(u + 8 * i.normal.x, d + 8 * i.normal.y),
                                        a.lineTo(u, d)
                                }
                            l.wireframes ? a.strokeStyle = "rgba(255,165,0,0.7)" : a.strokeStyle = "orange",
                                a.lineWidth = 1,
                                a.stroke()
                        }
                        ,
                        r.separations = function (e, t, n) {
                            var r, i, o, s, a, l = n, c = e.options;
                            for (l.beginPath(),
                                a = 0; a < t.length; a++)
                                if ((r = t[a]).isActive) {
                                    o = (i = r.collision).bodyA;
                                    var u = 1;
                                    (s = i.bodyB).isStatic || o.isStatic || (u = .5),
                                        s.isStatic && (u = 0),
                                        l.moveTo(s.position.x, s.position.y),
                                        l.lineTo(s.position.x - i.penetration.x * u, s.position.y - i.penetration.y * u),
                                        u = 1,
                                        s.isStatic || o.isStatic || (u = .5),
                                        o.isStatic && (u = 0),
                                        l.moveTo(o.position.x, o.position.y),
                                        l.lineTo(o.position.x + i.penetration.x * u, o.position.y + i.penetration.y * u)
                                }
                            c.wireframes ? l.strokeStyle = "rgba(255,165,0,0.5)" : l.strokeStyle = "orange",
                                l.stroke()
                        }
                        ,
                        r.inspector = function (e, t) {
                            e.engine;
                            var n, r = e.selected, i = e.render, o = i.options;
                            if (o.hasBounds) {
                                var s = i.bounds.max.x - i.bounds.min.x
                                    , a = i.bounds.max.y - i.bounds.min.y
                                    , l = s / i.options.width
                                    , c = a / i.options.height;
                                t.scale(1 / l, 1 / c),
                                    t.translate(-i.bounds.min.x, -i.bounds.min.y)
                            }
                            for (var u = 0; u < r.length; u++) {
                                var d = r[u].data;
                                switch (t.translate(.5, .5),
                                t.lineWidth = 1,
                                t.strokeStyle = "rgba(255,165,0,0.9)",
                                t.setLineDash([1, 2]),
                                d.type) {
                                    case "body":
                                        n = d.bounds,
                                            t.beginPath(),
                                            t.rect(Math.floor(n.min.x - 3), Math.floor(n.min.y - 3), Math.floor(n.max.x - n.min.x + 6), Math.floor(n.max.y - n.min.y + 6)),
                                            t.closePath(),
                                            t.stroke();
                                        break;
                                    case "constraint":
                                        var p = d.pointA;
                                        d.bodyA && (p = d.pointB),
                                            t.beginPath(),
                                            t.arc(p.x, p.y, 10, 0, 2 * Math.PI),
                                            t.closePath(),
                                            t.stroke()
                                }
                                t.setLineDash([]),
                                    t.translate(-.5, -.5)
                            }
                            null !== e.selectStart && (t.translate(.5, .5),
                                t.lineWidth = 1,
                                t.strokeStyle = "rgba(255,165,0,0.6)",
                                t.fillStyle = "rgba(255,165,0,0.1)",
                                n = e.selectBounds,
                                t.beginPath(),
                                t.rect(Math.floor(n.min.x), Math.floor(n.min.y), Math.floor(n.max.x - n.min.x), Math.floor(n.max.y - n.min.y)),
                                t.closePath(),
                                t.stroke(),
                                t.fill(),
                                t.translate(-.5, -.5)),
                                o.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0)
                        }
                        ;
                    var n = function (e, t) {
                        var n = e.engine
                            , i = e.timing
                            , o = i.historySize
                            , s = n.timing.timestamp;
                        i.delta = t - i.lastTime || r._goodDelta,
                            i.lastTime = t,
                            i.timestampElapsed = s - i.lastTimestamp || 0,
                            i.lastTimestamp = s,
                            i.deltaHistory.unshift(i.delta),
                            i.deltaHistory.length = Math.min(i.deltaHistory.length, o),
                            i.engineDeltaHistory.unshift(n.timing.lastDelta),
                            i.engineDeltaHistory.length = Math.min(i.engineDeltaHistory.length, o),
                            i.timestampElapsedHistory.unshift(i.timestampElapsed),
                            i.timestampElapsedHistory.length = Math.min(i.timestampElapsedHistory.length, o),
                            i.engineElapsedHistory.unshift(n.timing.lastElapsed),
                            i.engineElapsedHistory.length = Math.min(i.engineElapsedHistory.length, o),
                            i.elapsedHistory.unshift(i.lastElapsed),
                            i.elapsedHistory.length = Math.min(i.elapsedHistory.length, o)
                    }
                        , u = function (e) {
                            for (var t = 0, n = 0; n < e.length; n += 1)
                                t += e[n];
                            return t / e.length || 0
                        }
                        , d = function (e, t) {
                            var n = document.createElement("canvas");
                            return n.width = e,
                                n.height = t,
                                n.oncontextmenu = function () {
                                    return !1
                                }
                                ,
                                n.onselectstart = function () {
                                    return !1
                                }
                                ,
                                n
                        }
                        , p = function (e) {
                            var t = e.getContext("2d");
                            return (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)
                        }
                        , f = function (e, t) {
                            var n = e.textures[t];
                            return n || ((n = e.textures[t] = new Image).src = t,
                                n)
                        }
                        , h = function (e, t) {
                            var n = t;
                            /(jpg|gif|png)$/.test(t) && (n = "url(" + t + ")"),
                                e.canvas.style.background = n,
                                e.canvas.style.backgroundSize = "contain",
                                e.currentBackground = t
                        }
                }()
            }
            , function (e, t) {
                var n = {};
                e.exports = n,
                    n.create = function (e) {
                        return {
                            vertex: e,
                            normalImpulse: 0,
                            tangentImpulse: 0
                        }
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(7)
                    , o = n(19)
                    , s = n(14)
                    , a = n(20)
                    , l = n(4)
                    , c = n(5)
                    , u = n(10)
                    , d = n(0)
                    , p = n(6);
                r.create = function (e) {
                    e = e || {};
                    var t = d.extend({
                        positionIterations: 6,
                        velocityIterations: 4,
                        constraintIterations: 2,
                        enableSleeping: !1,
                        events: [],
                        plugin: {},
                        gravity: {
                            x: 0,
                            y: 1,
                            scale: .001
                        },
                        timing: {
                            timestamp: 0,
                            timeScale: 1,
                            lastDelta: 0,
                            lastElapsed: 0
                        }
                    }, e);
                    return t.world = e.world || c.create({
                        label: "World"
                    }),
                        t.pairs = e.pairs || a.create(),
                        t.detector = e.detector || s.create(),
                        t.grid = {
                            buckets: []
                        },
                        t.world.gravity = t.gravity,
                        t.broadphase = t.grid,
                        t.metrics = {},
                        t
                }
                    ,
                    r.update = function (e, t, n) {
                        var p = d.now();
                        t = t || 1e3 / 60,
                            n = n || 1;
                        var f, h = e.world, m = e.detector, v = e.pairs, g = e.timing, y = g.timestamp;
                        g.timestamp += t * g.timeScale,
                            g.lastDelta = t * g.timeScale;
                        var x = {
                            timestamp: g.timestamp
                        };
                        l.trigger(e, "beforeUpdate", x);
                        var b = c.allBodies(h)
                            , w = c.allConstraints(h);
                        for (h.isModified && s.setBodies(m, b),
                            h.isModified && c.setModified(h, !1, !1, !0),
                            e.enableSleeping && i.update(b, g.timeScale),
                            r._bodiesApplyGravity(b, e.gravity),
                            r._bodiesUpdate(b, t, g.timeScale, n, h.bounds),
                            u.preSolveAll(b),
                            f = 0; f < e.constraintIterations; f++)
                            u.solveAll(w, g.timeScale);
                        u.postSolveAll(b),
                            m.pairs = e.pairs;
                        var _ = s.collisions(m);
                        for (a.update(v, _, y),
                            e.enableSleeping && i.afterCollisions(v.list, g.timeScale),
                            v.collisionStart.length > 0 && l.trigger(e, "collisionStart", {
                                pairs: v.collisionStart
                            }),
                            o.preSolvePosition(v.list),
                            f = 0; f < e.positionIterations; f++)
                            o.solvePosition(v.list, g.timeScale);
                        for (o.postSolvePosition(b),
                            u.preSolveAll(b),
                            f = 0; f < e.constraintIterations; f++)
                            u.solveAll(w, g.timeScale);
                        for (u.postSolveAll(b),
                            o.preSolveVelocity(v.list),
                            f = 0; f < e.velocityIterations; f++)
                            o.solveVelocity(v.list, g.timeScale);
                        return v.collisionActive.length > 0 && l.trigger(e, "collisionActive", {
                            pairs: v.collisionActive
                        }),
                            v.collisionEnd.length > 0 && l.trigger(e, "collisionEnd", {
                                pairs: v.collisionEnd
                            }),
                            r._bodiesClearForces(b),
                            l.trigger(e, "afterUpdate", x),
                            e.timing.lastElapsed = d.now() - p,
                            e
                    }
                    ,
                    r.merge = function (e, t) {
                        if (d.extend(e, t),
                            t.world) {
                            e.world = t.world,
                                r.clear(e);
                            for (var n = c.allBodies(e.world), o = 0; o < n.length; o++) {
                                var s = n[o];
                                i.set(s, !1),
                                    s.id = d.nextId()
                            }
                        }
                    }
                    ,
                    r.clear = function (e) {
                        a.clear(e.pairs),
                            s.clear(e.detector)
                    }
                    ,
                    r._bodiesClearForces = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.force.x = 0,
                                n.force.y = 0,
                                n.torque = 0
                        }
                    }
                    ,
                    r._bodiesApplyGravity = function (e, t) {
                        var n = void 0 !== t.scale ? t.scale : .001;
                        if ((0 !== t.x || 0 !== t.y) && 0 !== n)
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                i.isStatic || i.isSleeping || (i.force.y += i.mass * t.y * n,
                                    i.force.x += i.mass * t.x * n)
                            }
                    }
                    ,
                    r._bodiesUpdate = function (e, t, n, r, i) {
                        for (var o = 0; o < e.length; o++) {
                            var s = e[o];
                            s.isStatic || s.isSleeping || p.update(s, t, n, r)
                        }
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(3)
                    , o = n(1);
                r._restingThresh = 4,
                    r._restingThreshTangent = 6,
                    r._positionDampen = .9,
                    r._positionWarming = .8,
                    r._frictionNormalMultiplier = 5,
                    r.preSolvePosition = function (e) {
                        var t, n, r, i = e.length;
                        for (t = 0; t < i; t++)
                            (n = e[t]).isActive && (r = n.activeContacts.length,
                                n.collision.parentA.totalContacts += r,
                                n.collision.parentB.totalContacts += r)
                    }
                    ,
                    r.solvePosition = function (e, t) {
                        var n, i, o, s, a, l, c, u, d = r._positionDampen, p = e.length;
                        for (n = 0; n < p; n++)
                            (i = e[n]).isActive && !i.isSensor && (s = (o = i.collision).parentA,
                                a = o.parentB,
                                l = o.normal,
                                i.separation = l.x * (a.positionImpulse.x + o.penetration.x - s.positionImpulse.x) + l.y * (a.positionImpulse.y + o.penetration.y - s.positionImpulse.y));
                        for (n = 0; n < p; n++)
                            (i = e[n]).isActive && !i.isSensor && (s = (o = i.collision).parentA,
                                a = o.parentB,
                                l = o.normal,
                                u = (i.separation - i.slop) * t,
                                (s.isStatic || a.isStatic) && (u *= 2),
                                s.isStatic || s.isSleeping || (c = d / s.totalContacts,
                                    s.positionImpulse.x += l.x * u * c,
                                    s.positionImpulse.y += l.y * u * c),
                                a.isStatic || a.isSleeping || (c = d / a.totalContacts,
                                    a.positionImpulse.x -= l.x * u * c,
                                    a.positionImpulse.y -= l.y * u * c))
                    }
                    ,
                    r.postSolvePosition = function (e) {
                        for (var t = r._positionWarming, n = e.length, s = i.translate, a = o.update, l = 0; l < n; l++) {
                            var c = e[l]
                                , u = c.positionImpulse
                                , d = u.x
                                , p = u.y
                                , f = c.velocity;
                            if (c.totalContacts = 0,
                                0 !== d || 0 !== p) {
                                for (var h = 0; h < c.parts.length; h++) {
                                    var m = c.parts[h];
                                    s(m.vertices, u),
                                        a(m.bounds, m.vertices, f),
                                        m.position.x += d,
                                        m.position.y += p
                                }
                                c.positionPrev.x += d,
                                    c.positionPrev.y += p,
                                    d * f.x + p * f.y < 0 ? (u.x = 0,
                                        u.y = 0) : (u.x *= t,
                                            u.y *= t)
                            }
                        }
                    }
                    ,
                    r.preSolveVelocity = function (e) {
                        var t, n, r = e.length;
                        for (t = 0; t < r; t++) {
                            var i = e[t];
                            if (i.isActive && !i.isSensor) {
                                var o = i.activeContacts
                                    , s = o.length
                                    , a = i.collision
                                    , l = a.parentA
                                    , c = a.parentB
                                    , u = a.normal
                                    , d = a.tangent;
                                for (n = 0; n < s; n++) {
                                    var p = o[n]
                                        , f = p.vertex
                                        , h = p.normalImpulse
                                        , m = p.tangentImpulse;
                                    if (0 !== h || 0 !== m) {
                                        var v = u.x * h + d.x * m
                                            , g = u.y * h + d.y * m;
                                        l.isStatic || l.isSleeping || (l.positionPrev.x += v * l.inverseMass,
                                            l.positionPrev.y += g * l.inverseMass,
                                            l.anglePrev += l.inverseInertia * ((f.x - l.position.x) * g - (f.y - l.position.y) * v)),
                                            c.isStatic || c.isSleeping || (c.positionPrev.x -= v * c.inverseMass,
                                                c.positionPrev.y -= g * c.inverseMass,
                                                c.anglePrev -= c.inverseInertia * ((f.x - c.position.x) * g - (f.y - c.position.y) * v))
                                    }
                                }
                            }
                        }
                    }
                    ,
                    r.solveVelocity = function (e, t) {
                        var n, i, o, s, a = t * t, l = r._restingThresh * a, c = r._frictionNormalMultiplier, u = r._restingThreshTangent * a, d = Number.MAX_VALUE, p = e.length;
                        for (o = 0; o < p; o++) {
                            var f = e[o];
                            if (f.isActive && !f.isSensor) {
                                var h = f.collision
                                    , m = h.parentA
                                    , v = h.parentB
                                    , g = m.velocity
                                    , y = v.velocity
                                    , x = h.normal.x
                                    , b = h.normal.y
                                    , w = h.tangent.x
                                    , _ = h.tangent.y
                                    , S = f.activeContacts
                                    , T = S.length
                                    , C = 1 / T
                                    , E = m.inverseMass + v.inverseMass
                                    , k = f.friction * f.frictionStatic * c * a;
                                for (g.x = m.position.x - m.positionPrev.x,
                                    g.y = m.position.y - m.positionPrev.y,
                                    y.x = v.position.x - v.positionPrev.x,
                                    y.y = v.position.y - v.positionPrev.y,
                                    m.angularVelocity = m.angle - m.anglePrev,
                                    v.angularVelocity = v.angle - v.anglePrev,
                                    s = 0; s < T; s++) {
                                    var M = S[s]
                                        , A = M.vertex
                                        , P = A.x - m.position.x
                                        , O = A.y - m.position.y
                                        , L = A.x - v.position.x
                                        , I = A.y - v.position.y
                                        , D = g.x - O * m.angularVelocity
                                        , B = g.y + P * m.angularVelocity
                                        , j = D - (y.x - I * v.angularVelocity)
                                        , z = B - (y.y + L * v.angularVelocity)
                                        , R = x * j + b * z
                                        , N = w * j + _ * z
                                        , F = f.separation + R
                                        , H = Math.min(F, 1)
                                        , q = (H = F < 0 ? 0 : H) * k;
                                    N > q || -N > q ? (i = N > 0 ? N : -N,
                                        (n = f.friction * (N > 0 ? 1 : -1) * a) < -i ? n = -i : n > i && (n = i)) : (n = N,
                                            i = d);
                                    var W = P * b - O * x
                                        , V = L * b - I * x
                                        , X = C / (E + m.inverseInertia * W * W + v.inverseInertia * V * V)
                                        , Y = (1 + f.restitution) * R * X;
                                    if (n *= X,
                                        R * R > l && R < 0)
                                        M.normalImpulse = 0;
                                    else {
                                        var G = M.normalImpulse;
                                        M.normalImpulse += Y,
                                            M.normalImpulse = Math.min(M.normalImpulse, 0),
                                            Y = M.normalImpulse - G
                                    }
                                    if (N * N > u)
                                        M.tangentImpulse = 0;
                                    else {
                                        var $ = M.tangentImpulse;
                                        M.tangentImpulse += n,
                                            M.tangentImpulse < -i && (M.tangentImpulse = -i),
                                            M.tangentImpulse > i && (M.tangentImpulse = i),
                                            n = M.tangentImpulse - $
                                    }
                                    var U = x * Y + w * n
                                        , K = b * Y + _ * n;
                                    m.isStatic || m.isSleeping || (m.positionPrev.x += U * m.inverseMass,
                                        m.positionPrev.y += K * m.inverseMass,
                                        m.anglePrev += (P * K - O * U) * m.inverseInertia),
                                        v.isStatic || v.isSleeping || (v.positionPrev.x -= U * v.inverseMass,
                                            v.positionPrev.y -= K * v.inverseMass,
                                            v.anglePrev -= (L * K - I * U) * v.inverseInertia)
                                }
                            }
                        }
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(9)
                    , o = n(0);
                r.create = function (e) {
                    return o.extend({
                        table: {},
                        list: [],
                        collisionStart: [],
                        collisionActive: [],
                        collisionEnd: []
                    }, e)
                }
                    ,
                    r.update = function (e, t, n) {
                        var r, o, s, a, l = e.list, c = l.length, u = e.table, d = t.length, p = e.collisionStart, f = e.collisionEnd, h = e.collisionActive;
                        for (p.length = 0,
                            f.length = 0,
                            h.length = 0,
                            a = 0; a < c; a++)
                            l[a].confirmedActive = !1;
                        for (a = 0; a < d; a++)
                            (s = (r = t[a]).pair) ? (s.isActive ? h.push(s) : p.push(s),
                                i.update(s, r, n),
                                s.confirmedActive = !0) : (u[(s = i.create(r, n)).id] = s,
                                    p.push(s),
                                    l.push(s));
                        var m = [];
                        for (c = l.length,
                            a = 0; a < c; a++)
                            (s = l[a]).confirmedActive || (i.setActive(s, !1, n),
                                f.push(s),
                                s.collision.bodyA.isSleeping || s.collision.bodyB.isSleeping || m.push(a));
                        for (a = 0; a < m.length; a++)
                            s = l[o = m[a] - a],
                                l.splice(o, 1),
                                delete u[s.id]
                    }
                    ,
                    r.clear = function (e) {
                        return e.table = {},
                            e.list.length = 0,
                            e.collisionStart.length = 0,
                            e.collisionActive.length = 0,
                            e.collisionEnd.length = 0,
                            e
                    }
            }
            , function (e, t, n) {
                var r = e.exports = n(22);
                r.Axes = n(11),
                    r.Bodies = n(12),
                    r.Body = n(6),
                    r.Bounds = n(1),
                    r.Collision = n(8),
                    r.Common = n(0),
                    r.Composite = n(5),
                    r.Composites = n(23),
                    r.Constraint = n(10),
                    r.Contact = n(17),
                    r.Detector = n(14),
                    r.Engine = n(18),
                    r.Events = n(4),
                    r.Grid = n(24),
                    r.Mouse = n(13),
                    r.MouseConstraint = n(25),
                    r.Pair = n(9),
                    r.Pairs = n(20),
                    r.Plugin = n(15),
                    r.Query = n(26),
                    r.Render = n(16),
                    r.Resolver = n(19),
                    r.Runner = n(27),
                    r.SAT = n(28),
                    r.Sleeping = n(7),
                    r.Svg = n(29),
                    r.Vector = n(2),
                    r.Vertices = n(3),
                    r.World = n(30),
                    r.Engine.run = r.Runner.run,
                    r.Common.deprecated(r.Engine, "run", "Engine.run ➤ use Matter.Runner.run(engine) instead")
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(15)
                    , o = n(0);
                r.name = "matter-js",
                    r.version = "0.18.0",
                    r.uses = [],
                    r.used = [],
                    r.use = function () {
                        i.use(r, Array.prototype.slice.call(arguments))
                    }
                    ,
                    r.before = function (e, t) {
                        return e = e.replace(/^Matter./, ""),
                            o.chainPathBefore(r, e, t)
                    }
                    ,
                    r.after = function (e, t) {
                        return e = e.replace(/^Matter./, ""),
                            o.chainPathAfter(r, e, t)
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(5)
                    , o = n(10)
                    , s = n(0)
                    , a = n(6)
                    , l = n(12)
                    , c = s.deprecated;
                r.stack = function (e, t, n, r, o, s, l) {
                    for (var c, u = i.create({
                        label: "Stack"
                    }), d = e, p = t, f = 0, h = 0; h < r; h++) {
                        for (var m = 0, v = 0; v < n; v++) {
                            var g = l(d, p, v, h, c, f);
                            if (g) {
                                var y = g.bounds.max.y - g.bounds.min.y
                                    , x = g.bounds.max.x - g.bounds.min.x;
                                y > m && (m = y),
                                    a.translate(g, {
                                        x: .5 * x,
                                        y: .5 * y
                                    }),
                                    d = g.bounds.max.x + o,
                                    i.addBody(u, g),
                                    c = g,
                                    f += 1
                            } else
                                d += o
                        }
                        p += m + s,
                            d = e
                    }
                    return u
                }
                    ,
                    r.chain = function (e, t, n, r, a, l) {
                        for (var c = e.bodies, u = 1; u < c.length; u++) {
                            var d = c[u - 1]
                                , p = c[u]
                                , f = d.bounds.max.y - d.bounds.min.y
                                , h = d.bounds.max.x - d.bounds.min.x
                                , m = p.bounds.max.y - p.bounds.min.y
                                , v = {
                                    bodyA: d,
                                    pointA: {
                                        x: h * t,
                                        y: f * n
                                    },
                                    bodyB: p,
                                    pointB: {
                                        x: (p.bounds.max.x - p.bounds.min.x) * r,
                                        y: m * a
                                    }
                                }
                                , g = s.extend(v, l);
                            i.addConstraint(e, o.create(g))
                        }
                        return e.label += " Chain",
                            e
                    }
                    ,
                    r.mesh = function (e, t, n, r, a) {
                        var l, c, u, d, p, f = e.bodies;
                        for (l = 0; l < n; l++) {
                            for (c = 1; c < t; c++)
                                u = f[c - 1 + l * t],
                                    d = f[c + l * t],
                                    i.addConstraint(e, o.create(s.extend({
                                        bodyA: u,
                                        bodyB: d
                                    }, a)));
                            if (l > 0)
                                for (c = 0; c < t; c++)
                                    u = f[c + (l - 1) * t],
                                        d = f[c + l * t],
                                        i.addConstraint(e, o.create(s.extend({
                                            bodyA: u,
                                            bodyB: d
                                        }, a))),
                                        r && c > 0 && (p = f[c - 1 + (l - 1) * t],
                                            i.addConstraint(e, o.create(s.extend({
                                                bodyA: p,
                                                bodyB: d
                                            }, a)))),
                                        r && c < t - 1 && (p = f[c + 1 + (l - 1) * t],
                                            i.addConstraint(e, o.create(s.extend({
                                                bodyA: p,
                                                bodyB: d
                                            }, a))))
                        }
                        return e.label += " Mesh",
                            e
                    }
                    ,
                    r.pyramid = function (e, t, n, i, o, s, l) {
                        return r.stack(e, t, n, i, o, s, (function (t, r, s, c, u, d) {
                            var p = Math.min(i, Math.ceil(n / 2))
                                , f = u ? u.bounds.max.x - u.bounds.min.x : 0;
                            if (!(c > p || s < (c = p - c) || s > n - 1 - c))
                                return 1 === d && a.translate(u, {
                                    x: (s + (n % 2 == 1 ? 1 : -1)) * f,
                                    y: 0
                                }),
                                    l(e + (u ? s * f : 0) + s * o, r, s, c, u, d)
                        }
                        ))
                    }
                    ,
                    r.newtonsCradle = function (e, t, n, r, s) {
                        for (var a = i.create({
                            label: "Newtons Cradle"
                        }), c = 0; c < n; c++) {
                            var u = l.circle(e + c * (1.9 * r), t + s, r, {
                                inertia: 1 / 0,
                                restitution: 1,
                                friction: 0,
                                frictionAir: 1e-4,
                                slop: 1
                            })
                                , d = o.create({
                                    pointA: {
                                        x: e + c * (1.9 * r),
                                        y: t
                                    },
                                    bodyB: u
                                });
                            i.addBody(a, u),
                                i.addConstraint(a, d)
                        }
                        return a
                    }
                    ,
                    c(r, "newtonsCradle", "Composites.newtonsCradle ➤ moved to newtonsCradle example"),
                    r.car = function (e, t, n, r, s) {
                        var c = a.nextGroup(!0)
                            , u = .5 * -n + 20
                            , d = .5 * n - 20
                            , p = i.create({
                                label: "Car"
                            })
                            , f = l.rectangle(e, t, n, r, {
                                collisionFilter: {
                                    group: c
                                },
                                chamfer: {
                                    radius: .5 * r
                                },
                                density: 2e-4
                            })
                            , h = l.circle(e + u, t + 0, s, {
                                collisionFilter: {
                                    group: c
                                },
                                friction: .8
                            })
                            , m = l.circle(e + d, t + 0, s, {
                                collisionFilter: {
                                    group: c
                                },
                                friction: .8
                            })
                            , v = o.create({
                                bodyB: f,
                                pointB: {
                                    x: u,
                                    y: 0
                                },
                                bodyA: h,
                                stiffness: 1,
                                length: 0
                            })
                            , g = o.create({
                                bodyB: f,
                                pointB: {
                                    x: d,
                                    y: 0
                                },
                                bodyA: m,
                                stiffness: 1,
                                length: 0
                            });
                        return i.addBody(p, f),
                            i.addBody(p, h),
                            i.addBody(p, m),
                            i.addConstraint(p, v),
                            i.addConstraint(p, g),
                            p
                    }
                    ,
                    c(r, "car", "Composites.car ➤ moved to car example"),
                    r.softBody = function (e, t, n, i, o, a, c, u, d, p) {
                        d = s.extend({
                            inertia: 1 / 0
                        }, d),
                            p = s.extend({
                                stiffness: .2,
                                render: {
                                    type: "line",
                                    anchors: !1
                                }
                            }, p);
                        var f = r.stack(e, t, n, i, o, a, (function (e, t) {
                            return l.circle(e, t, u, d)
                        }
                        ));
                        return r.mesh(f, n, i, c, p),
                            f.label = "Soft Body",
                            f
                    }
                    ,
                    c(r, "softBody", "Composites.softBody ➤ moved to softBody and cloth examples")
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(9)
                    , o = n(0)
                    , s = o.deprecated;
                r.create = function (e) {
                    return o.extend({
                        buckets: {},
                        pairs: {},
                        pairsList: [],
                        bucketWidth: 48,
                        bucketHeight: 48
                    }, e)
                }
                    ,
                    r.update = function (e, t, n, i) {
                        var o, s, a, l, c, u = n.world, d = e.buckets, p = !1;
                        for (o = 0; o < t.length; o++) {
                            var f = t[o];
                            if ((!f.isSleeping || i) && (!u.bounds || !(f.bounds.max.x < u.bounds.min.x || f.bounds.min.x > u.bounds.max.x || f.bounds.max.y < u.bounds.min.y || f.bounds.min.y > u.bounds.max.y))) {
                                var h = r._getRegion(e, f);
                                if (!f.region || h.id !== f.region.id || i) {
                                    f.region && !i || (f.region = h);
                                    var m = r._regionUnion(h, f.region);
                                    for (s = m.startCol; s <= m.endCol; s++)
                                        for (a = m.startRow; a <= m.endRow; a++) {
                                            l = d[c = r._getBucketId(s, a)];
                                            var v = s >= h.startCol && s <= h.endCol && a >= h.startRow && a <= h.endRow
                                                , g = s >= f.region.startCol && s <= f.region.endCol && a >= f.region.startRow && a <= f.region.endRow;
                                            !v && g && g && l && r._bucketRemoveBody(e, l, f),
                                                (f.region === h || v && !g || i) && (l || (l = r._createBucket(d, c)),
                                                    r._bucketAddBody(e, l, f))
                                        }
                                    f.region = h,
                                        p = !0
                                }
                            }
                        }
                        p && (e.pairsList = r._createActivePairsList(e))
                    }
                    ,
                    s(r, "update", "Grid.update ➤ replaced by Matter.Detector"),
                    r.clear = function (e) {
                        e.buckets = {},
                            e.pairs = {},
                            e.pairsList = []
                    }
                    ,
                    s(r, "clear", "Grid.clear ➤ replaced by Matter.Detector"),
                    r._regionUnion = function (e, t) {
                        var n = Math.min(e.startCol, t.startCol)
                            , i = Math.max(e.endCol, t.endCol)
                            , o = Math.min(e.startRow, t.startRow)
                            , s = Math.max(e.endRow, t.endRow);
                        return r._createRegion(n, i, o, s)
                    }
                    ,
                    r._getRegion = function (e, t) {
                        var n = t.bounds
                            , i = Math.floor(n.min.x / e.bucketWidth)
                            , o = Math.floor(n.max.x / e.bucketWidth)
                            , s = Math.floor(n.min.y / e.bucketHeight)
                            , a = Math.floor(n.max.y / e.bucketHeight);
                        return r._createRegion(i, o, s, a)
                    }
                    ,
                    r._createRegion = function (e, t, n, r) {
                        return {
                            id: e + "," + t + "," + n + "," + r,
                            startCol: e,
                            endCol: t,
                            startRow: n,
                            endRow: r
                        }
                    }
                    ,
                    r._getBucketId = function (e, t) {
                        return "C" + e + "R" + t
                    }
                    ,
                    r._createBucket = function (e, t) {
                        return e[t] = []
                    }
                    ,
                    r._bucketAddBody = function (e, t, n) {
                        var r, o = e.pairs, s = i.id, a = t.length;
                        for (r = 0; r < a; r++) {
                            var l = t[r];
                            if (!(n.id === l.id || n.isStatic && l.isStatic)) {
                                var c = s(n, l)
                                    , u = o[c];
                                u ? u[2] += 1 : o[c] = [n, l, 1]
                            }
                        }
                        t.push(n)
                    }
                    ,
                    r._bucketRemoveBody = function (e, t, n) {
                        var r, s = e.pairs, a = i.id;
                        t.splice(o.indexOf(t, n), 1);
                        var l = t.length;
                        for (r = 0; r < l; r++) {
                            var c = s[a(n, t[r])];
                            c && (c[2] -= 1)
                        }
                    }
                    ,
                    r._createActivePairsList = function (e) {
                        var t, n, r = e.pairs, i = o.keys(r), s = i.length, a = [];
                        for (n = 0; n < s; n++)
                            (t = r[i[n]])[2] > 0 ? a.push(t) : delete r[i[n]];
                        return a
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(3)
                    , o = n(7)
                    , s = n(13)
                    , a = n(4)
                    , l = n(14)
                    , c = n(10)
                    , u = n(5)
                    , d = n(0)
                    , p = n(1);
                r.create = function (e, t) {
                    var n = (e ? e.mouse : null) || (t ? t.mouse : null);
                    n || (e && e.render && e.render.canvas ? n = s.create(e.render.canvas) : t && t.element ? n = s.create(t.element) : (n = s.create(),
                        d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
                    var i = {
                        type: "mouseConstraint",
                        mouse: n,
                        element: null,
                        body: null,
                        constraint: c.create({
                            label: "Mouse Constraint",
                            pointA: n.position,
                            pointB: {
                                x: 0,
                                y: 0
                            },
                            length: .01,
                            stiffness: .1,
                            angularStiffness: 1,
                            render: {
                                strokeStyle: "#90EE90",
                                lineWidth: 3
                            }
                        }),
                        collisionFilter: {
                            category: 1,
                            mask: 4294967295,
                            group: 0
                        }
                    }
                        , o = d.extend(i, t);
                    return a.on(e, "beforeUpdate", (function () {
                        var t = u.allBodies(e.world);
                        r.update(o, t),
                            r._triggerEvents(o)
                    }
                    )),
                        o
                }
                    ,
                    r.update = function (e, t) {
                        var n = e.mouse
                            , r = e.constraint
                            , s = e.body;
                        if (0 === n.button) {
                            if (r.bodyB)
                                o.set(r.bodyB, !1),
                                    r.pointA = n.position;
                            else
                                for (var c = 0; c < t.length; c++)
                                    if (s = t[c],
                                        p.contains(s.bounds, n.position) && l.canCollide(s.collisionFilter, e.collisionFilter))
                                        for (var u = s.parts.length > 1 ? 1 : 0; u < s.parts.length; u++) {
                                            var d = s.parts[u];
                                            if (i.contains(d.vertices, n.position)) {
                                                r.pointA = n.position,
                                                    r.bodyB = e.body = s,
                                                    r.pointB = {
                                                        x: n.position.x - s.position.x,
                                                        y: n.position.y - s.position.y
                                                    },
                                                    r.angleB = s.angle,
                                                    o.set(s, !1),
                                                    a.trigger(e, "startdrag", {
                                                        mouse: n,
                                                        body: s
                                                    });
                                                break
                                            }
                                        }
                        } else
                            r.bodyB = e.body = null,
                                r.pointB = null,
                                s && a.trigger(e, "enddrag", {
                                    mouse: n,
                                    body: s
                                })
                    }
                    ,
                    r._triggerEvents = function (e) {
                        var t = e.mouse
                            , n = t.sourceEvents;
                        n.mousemove && a.trigger(e, "mousemove", {
                            mouse: t
                        }),
                            n.mousedown && a.trigger(e, "mousedown", {
                                mouse: t
                            }),
                            n.mouseup && a.trigger(e, "mouseup", {
                                mouse: t
                            }),
                            s.clearSourceEvents(t)
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(2)
                    , o = n(8)
                    , s = n(1)
                    , a = n(12)
                    , l = n(3);
                r.collides = function (e, t) {
                    for (var n = [], r = t.length, i = e.bounds, a = o.collides, l = s.overlaps, c = 0; c < r; c++) {
                        var u = t[c]
                            , d = u.parts.length
                            , p = 1 === d ? 0 : 1;
                        if (l(u.bounds, i))
                            for (var f = p; f < d; f++) {
                                var h = u.parts[f];
                                if (l(h.bounds, i)) {
                                    var m = a(h, e);
                                    if (m) {
                                        n.push(m);
                                        break
                                    }
                                }
                            }
                    }
                    return n
                }
                    ,
                    r.ray = function (e, t, n, o) {
                        o = o || 1e-100;
                        for (var s = i.angle(t, n), l = i.magnitude(i.sub(t, n)), c = .5 * (n.x + t.x), u = .5 * (n.y + t.y), d = a.rectangle(c, u, l, o, {
                            angle: s
                        }), p = r.collides(d, e), f = 0; f < p.length; f += 1) {
                            var h = p[f];
                            h.body = h.bodyB = h.bodyA
                        }
                        return p
                    }
                    ,
                    r.region = function (e, t, n) {
                        for (var r = [], i = 0; i < e.length; i++) {
                            var o = e[i]
                                , a = s.overlaps(o.bounds, t);
                            (a && !n || !a && n) && r.push(o)
                        }
                        return r
                    }
                    ,
                    r.point = function (e, t) {
                        for (var n = [], r = 0; r < e.length; r++) {
                            var i = e[r];
                            if (s.contains(i.bounds, t))
                                for (var o = 1 === i.parts.length ? 0 : 1; o < i.parts.length; o++) {
                                    var a = i.parts[o];
                                    if (s.contains(a.bounds, t) && l.contains(a.vertices, t)) {
                                        n.push(i);
                                        break
                                    }
                                }
                        }
                        return n
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i, o, s, a = n(4), l = n(18), c = n(0);
                "undefined" != typeof window && (i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame,
                    o = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame),
                    i || (i = function (e) {
                        s = setTimeout((function () {
                            e(c.now())
                        }
                        ), 1e3 / 60)
                    }
                        ,
                        o = function () {
                            clearTimeout(s)
                        }
                    ),
                    r.create = function (e) {
                        var t = c.extend({
                            fps: 60,
                            correction: 1,
                            deltaSampleSize: 60,
                            counterTimestamp: 0,
                            frameCounter: 0,
                            deltaHistory: [],
                            timePrev: null,
                            timeScalePrev: 1,
                            frameRequestId: null,
                            isFixed: !1,
                            enabled: !0
                        }, e);
                        return t.delta = t.delta || 1e3 / t.fps,
                            t.deltaMin = t.deltaMin || 1e3 / t.fps,
                            t.deltaMax = t.deltaMax || 1e3 / (.5 * t.fps),
                            t.fps = 1e3 / t.delta,
                            t
                    }
                    ,
                    r.run = function (e, t) {
                        return void 0 !== e.positionIterations && (t = e,
                            e = r.create()),
                            function n(o) {
                                e.frameRequestId = i(n),
                                    o && e.enabled && r.tick(e, t, o)
                            }(),
                            e
                    }
                    ,
                    r.tick = function (e, t, n) {
                        var r, i = t.timing, o = 1, s = {
                            timestamp: i.timestamp
                        };
                        a.trigger(e, "beforeTick", s),
                            e.isFixed ? r = e.delta : (r = n - e.timePrev || e.delta,
                                e.timePrev = n,
                                e.deltaHistory.push(r),
                                e.deltaHistory = e.deltaHistory.slice(-e.deltaSampleSize),
                                o = (r = (r = (r = Math.min.apply(null, e.deltaHistory)) < e.deltaMin ? e.deltaMin : r) > e.deltaMax ? e.deltaMax : r) / e.delta,
                                e.delta = r),
                            0 !== e.timeScalePrev && (o *= i.timeScale / e.timeScalePrev),
                            0 === i.timeScale && (o = 0),
                            e.timeScalePrev = i.timeScale,
                            e.correction = o,
                            e.frameCounter += 1,
                            n - e.counterTimestamp >= 1e3 && (e.fps = e.frameCounter * ((n - e.counterTimestamp) / 1e3),
                                e.counterTimestamp = n,
                                e.frameCounter = 0),
                            a.trigger(e, "tick", s),
                            a.trigger(e, "beforeUpdate", s),
                            l.update(t, r, o),
                            a.trigger(e, "afterUpdate", s),
                            a.trigger(e, "afterTick", s)
                    }
                    ,
                    r.stop = function (e) {
                        o(e.frameRequestId)
                    }
                    ,
                    r.start = function (e, t) {
                        r.run(e, t)
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(8)
                    , o = n(0).deprecated;
                r.collides = function (e, t) {
                    return i.collides(e, t)
                }
                    ,
                    o(r, "collides", "SAT.collides ➤ replaced by Collision.collides")
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r,
                    n(1);
                var i = n(0);
                r.pathToVertices = function (e, t) {
                    "undefined" == typeof window || "SVGPathSeg" in window || i.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                    var n, o, s, a, l, c, u, d, p, f, h, m = [], v = 0, g = 0, y = 0;
                    t = t || 15;
                    var x = function (e, t, n) {
                        var r = n % 2 == 1 && n > 1;
                        if (!p || e != p.x || t != p.y) {
                            p && r ? (f = p.x,
                                h = p.y) : (f = 0,
                                    h = 0);
                            var i = {
                                x: f + e,
                                y: h + t
                            };
                            !r && p || (p = i),
                                m.push(i),
                                g = f + e,
                                y = h + t
                        }
                    }
                        , b = function (e) {
                            var t = e.pathSegTypeAsLetter.toUpperCase();
                            if ("Z" !== t) {
                                switch (t) {
                                    case "M":
                                    case "L":
                                    case "T":
                                    case "C":
                                    case "S":
                                    case "Q":
                                        g = e.x,
                                            y = e.y;
                                        break;
                                    case "H":
                                        g = e.x;
                                        break;
                                    case "V":
                                        y = e.y
                                }
                                x(g, y, e.pathSegType)
                            }
                        };
                    for (r._svgPathToAbsolute(e),
                        s = e.getTotalLength(),
                        c = [],
                        n = 0; n < e.pathSegList.numberOfItems; n += 1)
                        c.push(e.pathSegList.getItem(n));
                    for (u = c.concat(); v < s;) {
                        if ((l = c[e.getPathSegAtLength(v)]) != d) {
                            for (; u.length && u[0] != l;)
                                b(u.shift());
                            d = l
                        }
                        switch (l.pathSegTypeAsLetter.toUpperCase()) {
                            case "C":
                            case "T":
                            case "S":
                            case "Q":
                            case "A":
                                a = e.getPointAtLength(v),
                                    x(a.x, a.y, 0)
                        }
                        v += t
                    }
                    for (n = 0,
                        o = u.length; n < o; ++n)
                        b(u[n]);
                    return m
                }
                    ,
                    r._svgPathToAbsolute = function (e) {
                        for (var t, n, r, i, o, s, a = e.pathSegList, l = 0, c = 0, u = a.numberOfItems, d = 0; d < u; ++d) {
                            var p = a.getItem(d)
                                , f = p.pathSegTypeAsLetter;
                            if (/[MLHVCSQTA]/.test(f))
                                "x" in p && (l = p.x),
                                    "y" in p && (c = p.y);
                            else
                                switch ("x1" in p && (r = l + p.x1),
                                "x2" in p && (o = l + p.x2),
                                "y1" in p && (i = c + p.y1),
                                "y2" in p && (s = c + p.y2),
                                "x" in p && (l += p.x),
                                "y" in p && (c += p.y),
                                f) {
                                    case "m":
                                        a.replaceItem(e.createSVGPathSegMovetoAbs(l, c), d);
                                        break;
                                    case "l":
                                        a.replaceItem(e.createSVGPathSegLinetoAbs(l, c), d);
                                        break;
                                    case "h":
                                        a.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(l), d);
                                        break;
                                    case "v":
                                        a.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c), d);
                                        break;
                                    case "c":
                                        a.replaceItem(e.createSVGPathSegCurvetoCubicAbs(l, c, r, i, o, s), d);
                                        break;
                                    case "s":
                                        a.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(l, c, o, s), d);
                                        break;
                                    case "q":
                                        a.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(l, c, r, i), d);
                                        break;
                                    case "t":
                                        a.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(l, c), d);
                                        break;
                                    case "a":
                                        a.replaceItem(e.createSVGPathSegArcAbs(l, c, p.r1, p.r2, p.angle, p.largeArcFlag, p.sweepFlag), d);
                                        break;
                                    case "z":
                                    case "Z":
                                        l = t,
                                            c = n
                                }
                            "M" != f && "m" != f || (t = l,
                                n = c)
                        }
                    }
            }
            , function (e, t, n) {
                var r = {};
                e.exports = r;
                var i = n(5);
                n(0),
                    r.create = i.create,
                    r.add = i.add,
                    r.remove = i.remove,
                    r.clear = i.clear,
                    r.addComposite = i.addComposite,
                    r.addBody = i.addBody,
                    r.addConstraint = i.addConstraint
            }
        ])
    }
        ,
        e.exports = r()
}