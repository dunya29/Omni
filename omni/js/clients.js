
const Sc = (e, t) => Math.random() * (t - e) + e;
class _c {
    constructor(e) {
        this.containerSelector = e.containerSelector,
            this.elements = [...e.elements],
            this.restitution = e.restitution || .4,
            this.gravity = e.gravity || .2,
            this.interactCallback = e.interactCallback || null,
            this.updateCallback = e.updateCallback || null,
            this.triggerSelector = e.triggerSelector || null,
            this.element = document.querySelector(this.containerSelector),
            this.width = this.element.getBoundingClientRect().width,
            this.height = this.element.getBoundingClientRect().height,
            this.engine = Matter.Engine.create({
                gravity: {
                    y: this.gravity
                }
            }),
            this.world = this.engine.world,
            this.render = Matter.Render.create({
                element: this.element,
                engine: this.engine,
                options: {
                    width: this.width,
                    height: this.height,
                    wireframes: !1,
                    background: "transparent"
                }
            }),
            this.setupMouse(),
            this.addWalls(),
            Matter.Render.run(this.render),
            this.runner = Matter.Runner.create(),
            Matter.Runner.run(this.runner, this.engine),
            this.addElements(),
            this.updateBodies()
    }
    addElements() {
        if (!Array.isArray(this.elements))
            return void console.error("Elements should be an array.");
        const e = this.elements.map((e => {
            const t = e.getBoundingClientRect()
                , n = parseFloat(window.getComputedStyle(e).borderRadius)
                , r = Matter.Bodies.rectangle(-200, -200, t.width, t.height, {
                    isStatic: !1,
                    restitution: this.restitution,
                    label: e.getAttribute("data-target"),
                    render: {
                        fillStyle: "transparent",
                        strokeStyle: "transparent"
                    },
                    chamfer: {
                        radius: n
                    }
                });
            return Matter.Events.on(this.runner, null === this.triggerSelector || void 0 === this.triggerSelector ? "beforeUpdate" : "tick", (() => {
                e.style.top = `${r.position.y}px`,
                    e.style.left = `${r.position.x}px`,
                    e.style.transform = `translate(-50%, -50%) rotate(${r.angle}rad)`
            }
            )),
                r
        }
        ));
        Matter.Composite.add(this.world, e)
    }
    addWalls() {
        const e = {
            label: "wall",
            isStatic: !0,
            render: {
                fillStyle: "transparent",
                strokeStyle: "transparent"
            }
        }
            , t = [Matter.Bodies.rectangle(0, -150, 2 * this.width, 300, e), Matter.Bodies.rectangle(0, this.height + 25, 2 * this.width, 60, e), Matter.Bodies.rectangle(-150, 0, 300, 2 * this.height, e), Matter.Bodies.rectangle(this.width + 150, 0, 300, 2 * this.height, e)];
        Matter.Composite.add(this.world, [...t])
    }
    setupMouse() {
        const e = Matter.Mouse.create(this.render.canvas)
            , t = Matter.MouseConstraint.create(this.engine, {
                mouse: e,
                constraint: {
                    stiffness: .1,
                    render: {
                        visible: !1
                    }
                }
            });
        Matter.Composite.add(this.world, t),
            this.render.mouse = e,
            e.element.removeEventListener("mousewheel", e.mousewheel),
            e.element.removeEventListener("DOMMouseScroll", e.mousewheel),
            this.interactCallback && this.interactCallback(t)
    }
    updateBodies() {
        if (null === this.triggerSelector || void 0 === this.triggerSelector) {
            const e = Matter.Composite.allBodies(this.engine.world)
                , t = "wall"
                , n = this.height
                , r = this.width - 10;
            let i = 0;
            const o = setInterval((() => {
                i++,
                    e[i]?.label !== t && e[i] && (Matter.Body.setStatic(e[i], !1),
                        Matter.Body.setPosition(e[i], {
                            x: Sc(0, r),
                            y: 0
                        }),
                        Matter.Body.setVelocity(e[i], {
                            x: Sc(0, 10),
                            y: Sc(0, 5)
                        }),
                        e[i].position.y > n && Matter.Body.setPosition(e[i], {
                            x: Sc(0, r),
                            y: 0
                        })),
                    i === e.length && clearInterval(o)
            }
            ), 100)
        } else
            ml.create({
                trigger: this.triggerSelector,
                once: !0,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: () => {
                    const e = Matter.Composite.allBodies(this.engine.world)
                        , t = Math.floor(this.width);
                    let n = 1;
                    const r = setInterval((() => {
                        n += 1;
                        const i = Sc(0, t - 50)
                            , o = e[n];
                        if ("wall" !== o?.label && o) {
                            Matter.Body.setStatic(o, !1),
                                Matter.Body.setPosition(o, {
                                    x: i,
                                    y: 0
                                }),
                                Matter.Body.setVelocity(o, {
                                    x: Sc(0, 10),
                                    y: Sc(0, 5)
                                });
                            const e = o.bounds.max.x - o.bounds.min.x;
                            o.position.x < e ? Matter.Body.setPosition(o, {
                                x: e,
                                y: o.position.y
                            }) : o.position.x > this.width - e && Matter.Body.setPosition(o, {
                                x: this.width - e,
                                y: o.position.y
                            })
                        }
                        n === e.length && clearInterval(r)
                    }
                    ), 100)
                }
            })
    }
}
if (document.querySelector(".sv-matter")) {
    const C = {
        containerSelector: ".sv-matter",
        elements: document.querySelectorAll(".sv-matter__btn"),
        restitution: .4,
        gravity: .2,
        interactCallback: function (e) {
            const t = ["btn--swap-color-1", "btn--swap-color-2", "btn--swap-color-3"];
            document.querySelectorAll("[data-target^='button']").forEach((n => {
                const r = n.getAttribute("data-target");
                Matter.Events.on(e, "mousedown", (function () {
                    const i = e.body?.label;
                    i && i === r && (e => {
                        const n = t.findIndex((t => e.classList.contains(t)));
                        if (-1 !== n) {
                            const r = (n + 1) % t.length;
                            e.classList.remove(t[n]),
                                e.classList.add(t[r])
                        }
                    }
                    )(n)
                }
                ))
            }
            ))
        },
        updateCallback: function () { }
    };
    new _c(C)
} 