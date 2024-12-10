!(function (n) {
  function s(t) {
    if (i[t]) return i[t].exports;
    var e = (i[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, s), (e.l = !0), e.exports;
  }
  var i = {};
  (s.m = n),
    (s.c = i),
    (s.d = function (t, e, n) {
      s.o(t, e) ||
        Object.defineProperty(t, e, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (s.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = ""),
    s((s.s = 35));
})({
  35: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    n = n(4);
    (window.preloader = new n.a({ active: !0 })), preloader.start();
  },
  4: function (t, e, n) {
    "use strict";
    function s(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return i(t);
        })(t) ||
        (function (t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        (function (t, e) {
          if (t) {
            if ("string" == typeof t) return i(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Map" ===
              (n = "Object" === n && t.constructor ? t.constructor.name : n) ||
              "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(t, e)
              : void 0;
          }
        })(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function i(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, s = new Array(e); n < e; n++) s[n] = t[n];
      return s;
    }
    function o(t, e) {
      for (var n = 0; n < e.length; n++) {
        var s = e[n];
        (s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          "value" in s && (s.writable = !0),
          Object.defineProperty(t, s.key, s);
      }
    }
    function r(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    n.d(e, "a", function () {
      return d;
    });
    function a(t, e, n) {
      return (1 - n) * t + n * e;
    }
    var u,
      c,
      m,
      d =
        ((u = h),
        (c = [
          { key: "exit", value: function () {} },
          {
            key: "start",
            value: function () {
              var t = this;
              this.settings.active &&
                ((this.settings.anim.active = 1),
                this.exit(),
                requestAnimationFrame(function () {
                  return t.render();
                }),
                setTimeout(function () {
                  document.body.classList.add("m-anim-loader__m2"),
                    setTimeout(function () {
                      t.settings.m2.classList.add("page-loader__m2--text"),
                        setTimeout(function () {
                          (t.settings.m2.bounds =
                            t.settings.m2.getBoundingClientRect()),
                            (t.settings.m2.bounds.scale = 1),
                            (t.settings.m2.style.transition = "none"),
                            (t.settings.m2.style.left = "0"),
                            (t.settings.m2.style.top = "0"),
                            (t.settings.anim.start = 1),
                            (t.settings.anim.playCount = 1);
                        }, 1e3);
                    }, 1e3);
                }, 500));
            },
          },
          {
            key: "count",
            value: function () {
              if (this.settings.anim.playCount) {
                var t = this.counter.currentFrame(),
                  e = Math.floor(t * this.counter.num.max);
                if (this.settings.anim.playEnd && 5 < e)
                  return (
                    (this.settings.anim.playCount = 0),
                    void (this.settings.anim.counter = 1)
                  );
                (this.settings.text.innerHTML = "".concat(e, "%")),
                  (this.counter.num.current = a(
                    this.counter.num.current,
                    this.counter.num.max,
                    t
                  ));
              }
            },
          },
          {
            key: "playEnd",
            value: function () {
              var t = this;
              (this.settings.text.innerHTML = "100%"),
                this.settings.m2.classList.remove("page-loader__m2--text"),
                setTimeout(function () {
                  (t.settings.anim.end = 1),
                    document.body.classList.remove("m-is-loading"),
                    setTimeout(function () {
                      document.body.classList.remove("m-anim-loader__m2"),
                        s(
                          document.querySelectorAll(
                            ".js-preloader,.css-preloader"
                          )
                        ).forEach(function (t) {
                          t.remove();
                        });
                    }, 1e3);
                }, 300);
            },
          },
          {
            key: "end",
            value: function () {
              this.settings.active && (this.settings.anim.playEnd = 1);
            },
          },
          {
            key: "startRender",
            value: function () {
              var t, e;
              this.settings.anim.start &&
                (this.settings.anim.playEnd &&
                  !this.settings.anim.endPlayed &&
                  this.settings.anim.counter &&
                  ((this.settings.anim.endPlayed = 1), this.playEnd()),
                this.count(),
                (t = 0.08),
                this.settings.anim.end && (t = 0.22),
                (e =
                  window.appConfig &&
                  window.appConfig.cursor.mouse.x &&
                  window.appConfig.cursor.mouse.y),
                this.settings.m2.bounds.heightTo &&
                  this.settings.m2.bounds.widthTo &&
                  ((this.settings.m2.bounds.width = a(
                    this.settings.m2.bounds.width,
                    this.settings.m2.bounds.widthTo,
                    t
                  )),
                  (this.settings.m2.bounds.height = a(
                    this.settings.m2.bounds.height,
                    this.settings.m2.bounds.heightTo,
                    t
                  )),
                  e
                    ? ((this.settings.m2.style.width = "".concat(
                        this.settings.m2.bounds.width,
                        "px"
                      )),
                      (this.settings.m2.style.height = "".concat(
                        this.settings.m2.bounds.height,
                        "px"
                      )))
                    : ((this.settings.m2.bounds.scale = a(
                        this.settings.m2.bounds.scale,
                        0,
                        t
                      )),
                      (this.settings.m2.style.transform = "scale(".concat(
                        this.settings.m2.bounds.scale,
                        ")"
                      ))),
                  Math.floor(this.settings.m2.bounds.width) ===
                    Math.floor(this.settings.m2.bounds.widthTo) &&
                    ((this.settings.anim.active = 0),
                    this.exitTimer && clearTimeout(this.exitTimer))),
                e &&
                  ((this.settings.m2.bounds.x = a(
                    this.settings.m2.bounds.x,
                    window.appConfig.cursor.mouse.x -
                      this.settings.m2.bounds.width / 2,
                    t
                  )),
                  (this.settings.m2.bounds.y = a(
                    this.settings.m2.bounds.y,
                    window.appConfig.cursor.mouse.y -
                      this.settings.m2.bounds.height / 2,
                    t
                  ))),
                (this.settings.m2.style.transform = "matrix3d("
                  .concat(this.settings.m2.bounds.scale, ",0,0.00,0,0.00,")
                  .concat(this.settings.m2.bounds.scale, ",0.00,0,0,0,1,0,")
                  .concat(this.settings.m2.bounds.x, ",")
                  .concat(this.settings.m2.bounds.y, ",0,1)")));
            },
          },
          {
            key: "endRender",
            value: function () {
              this.settings.anim.end &&
                this.settings.m2 &&
                this.settings.m2.bounds &&
                ((this.settings.m2.bounds.widthTo = 32),
                (this.settings.m2.bounds.heightTo = 32));
            },
          },
          {
            key: "render",
            value: function () {
              var t = this;
              this.settings.anim.active &&
                (this.startRender(),
                this.endRender(),
                requestAnimationFrame(function () {
                  return t.render();
                }));
            },
          },
        ]) && o(u.prototype, c),
        m && o(u, m),
        h);
    function h(t) {
      (function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, h),
        r(this, "settings", {
          active: 1,
          anim: {
            active: 1,
            start: 0,
            end: 0,
            playEnd: 0,
            counter: 0,
            playCount: 0,
          },
        }),
        r(this, "counter", {
          end: 0,
          num: { current: 0, max: 100 },
          frames: { tick: 0, max: 1800 },
          currentFrame: function () {
            return this.frames.tick >= this.frames.max
              ? ((this.frames.tick = this.frames.max), (this.end = 1))
              : ++this.frames.tick / this.frames.max;
          },
        }),
        t && (t.active || (this.settings.active = 0)),
        (this.settings.text = document.querySelector(".page-loader__text")),
        (this.settings.m2 = document.querySelector(".page-loader__m2")),
        (this.settings.isMob =
          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) ||
          ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) ||
          window.innerWidth < 1024),
        this.settings.active ||
          ((t = document.querySelector(".page-loader")) &&
            (t.style.display = "none"));
    }
  },
});
