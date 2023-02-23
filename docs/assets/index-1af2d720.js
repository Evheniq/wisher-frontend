import {
  d as b,
  o as s,
  c as o,
  t as y,
  _ as B,
  r,
  a as N,
  b as t,
  w as m,
  v as f,
  e as u,
  f as h,
  u as v,
  g as U,
  F as V,
  h as $,
  i as L,
  n as M,
  j as k,
  k as q,
  l as D,
  p as K,
  m as E,
  q as F,
} from "./index-9e4ba7b4.js";

const R = ["disabled"],
  T = b({
    __name: "ButtonCustom",
    props: {
      text: { type: String, required: !0 },
      disabled: { type: Boolean, default: !1 },
    },
    setup(n) {
      const a = n;
      return (p, i) => (
        s(),
        o(
          "button",
          { type: "button", class: "default-button", disabled: a.disabled },
          y(a.text),
          9,
          R
        )
      );
    },
  });
const j = B(T, [["__scopeId", "data-v-3406c88b"]]),
  W = (n) => (K("data-v-a8a68a42"), (n = n()), E(), n),
  z = ["onClick"],
  P = { class: "container-base" },
  G = { class: "wishlist" },
  H = { class: "text-center" },
  J = { key: 0, class: "title-input" },
  O = { class: "wish-block wish-container" },
  Q = { key: 0, class: "left-position-wish-item wish-item text-center" },
  X = W(() => t("div", { class: "separator" }, null, -1)),
  Y = ["onClick"],
  Z = ["onUpdate:modelValue"],
  ee = ["onClick"],
  te = { class: "text" },
  se = { key: 1 },
  oe = ["onUpdate:modelValue"],
  ae = ["onClick"],
  ne = W(() => t("div", { class: "separator" }, null, -1)),
  le = { key: 2, class: "separator" },
  ie = ["onKeyup"],
  de = { key: 1, class: "wish-container" },
  ce = b({
    __name: "Wishlist",
    props: {
      enableEditingWishes: { type: Boolean, default: !1 },
      title: { type: String, require: !0 },
    },
    setup(n) {
      const a = n,
        p = r(""),
        i = r(""),
        x = r(),
        A = r([]);
      let d = r([
        { id: 1, name: "car", completed: !1 },
        { id: 2, name: "car", completed: !1 },
      ]);

      function C() {
        i.value.length < 3 ||
          (d.value.push({ id: Date.now(), name: i.value, completed: !1 }),
          (i.value = ""));
      }

      function I(_) {
        d.value = d.value.filter((l) => l.id !== _);
      }

      function w(_) {
        a.enableEditingWishes && (x.value = _);
      }

      const S = N(() => !d.value.length);
      return (_, l) => {
        const g = D("font-awesome-icon");
        return (
          s(),
          o(
            "main",
            { onClick: h(w, ["stop"]) },
            [
              t("div", P, [
                t("div", G, [
                  t("h1", H, y(a.title), 1),
                  a.enableEditingWishes
                    ? (s(),
                      o("div", J, [
                        m(
                          t(
                            "input",
                            {
                              type: "text",
                              placeholder: "Write title here",
                              "onUpdate:modelValue":
                                l[0] || (l[0] = (e) => (p.value = e)),
                            },
                            null,
                            512
                          ),
                          [[f, p.value]]
                        ),
                      ]))
                    : u("", !0),
                  t("div", O, [
                    t(
                      "div",
                      {
                        class: "wish-items-list",
                        onClick: l[1] || (l[1] = h(() => {}, ["stop"])),
                      },
                      [
                        v(S)
                          ? (s(), o("div", Q, [U(" No wishes yet "), X]))
                          : (s(!0),
                            o(
                              V,
                              { key: 1 },
                              $(
                                v(d),
                                (e) => (
                                  s(),
                                  o(
                                    "div",
                                    {
                                      key: e.id,
                                      class: "wish-item",
                                      onClick: h((c) => w(e.id), ["stop"]),
                                      ref_for: !0,
                                      ref_key: "itemRefs",
                                      ref: A,
                                    },
                                    [
                                      m(
                                        t(
                                          "input",
                                          {
                                            type: "checkbox",
                                            "onUpdate:modelValue": (c) =>
                                              (e.completed = c),
                                          },
                                          null,
                                          8,
                                          Z
                                        ),
                                        [[L, e.completed]]
                                      ),
                                      t(
                                        "span",
                                        {
                                          class: "checkmark",
                                          onClick: h(
                                            (c) => (e.completed = !e.completed),
                                            ["stop"]
                                          ),
                                        },
                                        null,
                                        8,
                                        ee
                                      ),
                                      t("div", te, [
                                        e.id !== x.value
                                          ? (s(),
                                            o(
                                              "span",
                                              {
                                                key: 0,
                                                style: {
                                                  display: "inline-block",
                                                },
                                                class: M({
                                                  "line-through": e.completed,
                                                }),
                                              },
                                              y(e.name),
                                              3
                                            ))
                                          : (s(),
                                            o("span", se, [
                                              m(
                                                t(
                                                  "input",
                                                  {
                                                    type: "text",
                                                    "onUpdate:modelValue": (
                                                      c
                                                    ) => (e.name = c),
                                                    autofocus: "",
                                                  },
                                                  null,
                                                  8,
                                                  oe
                                                ),
                                                [[f, e.name]]
                                              ),
                                            ])),
                                      ]),
                                      a.enableEditingWishes
                                        ? (s(),
                                          o(
                                            "span",
                                            {
                                              key: 0,
                                              class: "delete",
                                              onClick: (c) => I(e.id),
                                            },
                                            [
                                              k(g, {
                                                icon: "fa-solid fa-xmark",
                                                class: "icon",
                                              }),
                                            ],
                                            8,
                                            ae
                                          ))
                                        : u("", !0),
                                      ne,
                                    ],
                                    8,
                                    Y
                                  )
                                )
                              ),
                              128
                            )),
                        a.enableEditingWishes ? (s(), o("div", le)) : u("", !0),
                      ]
                    ),
                    a.enableEditingWishes
                      ? (s(),
                        o(
                          V,
                          { key: 0 },
                          [
                            m(
                              t(
                                "input",
                                {
                                  class: "w-10/12",
                                  type: "text",
                                  placeholder: "Write what you want...",
                                  "onUpdate:modelValue":
                                    l[2] || (l[2] = (e) => (i.value = e)),
                                  onKeyup: q(C, ["enter"]),
                                },
                                null,
                                40,
                                ie
                              ),
                              [[f, i.value]]
                            ),
                            t(
                              "span",
                              {
                                class:
                                  "wish-item-add-btn text-amber-50 text-center",
                                onClick: C,
                              },
                              [k(g, { icon: "fa-solid fa-plus" })]
                            ),
                          ],
                          64
                        ))
                      : u("", !0),
                  ]),
                  a.enableEditingWishes
                    ? (s(),
                      o("div", de, [
                        k(
                          j,
                          { text: "Share", disabled: !v(d).length },
                          null,
                          8,
                          ["disabled"]
                        ),
                      ]))
                    : u("", !0),
                ]),
              ]),
            ],
            8,
            z
          )
        );
      };
    },
  });
const re = B(ce, [["__scopeId", "data-v-a8a68a42"]]),
  pe = b({
    __name: "MainPage",
    setup(n) {
      return (a, p) => (
        s(), F(v(re), { title: "Create Wishlist", "enable-add-items": !0 })
      );
    },
  });
export { pe as default };
