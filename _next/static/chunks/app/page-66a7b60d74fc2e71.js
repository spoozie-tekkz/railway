(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5040: function (e, s, a) {
      Promise.resolve().then(a.bind(a, 7340));
    },
    7340: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return o;
          },
        });
      var l = a(7437),
        r = a(2265);
      a(2175);
      var i = a(7996),
        n = a(2744),
        t = a(1140),
        c = a(6225),
        d = a.n(c);
      function o() {
        let [e, s] = (0, r.useState)("all"),
          [a, c] = (0, r.useState)(""),
          [o, m] = (0, r.useState)(""),
          [h, p] = (0, r.useState)(""),
          [u, x] = (0, r.useState)(!1),
          [j, g] = (0, r.useState)(0),
          [v, N] = (0, r.useState)(!1),
          [b, w] = (0, r.useState)([]),
          [f, k] = (0, r.useState)(!1),
          [y, A] = (0, r.useState)({
            airdrops: !1,
            rewards: !1,
            poaps: !1,
            votes: !1,
            mints: !1,
          }),
          O = (e) => {
            let s = document.getElementById(e);
            s && s.scrollIntoView({ behavior: "smooth" });
          },
          S = (e) => {
            A((s) => ({ ...s, [e]: !s[e] }));
          },
          C = (e, s) => Math.floor(Math.random() * (s - e + 1)) + e,
          P = (e) => {
            if (!e.trim()) return !1;
            let s = /^0x[a-fA-F0-9]{40}$/.test(e),
              a = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(e),
              l = /^[a-zA-Z0-9-]+\.eth$/.test(e);
            return k(a), s || a || l;
          },
          E = [
            {
              id: 1,
              name: "MilkyWay Airdrop",
              token: "MILK",
              type: "Airdrop",
              value: null,
              logo: "https://www.bankless.com/assets/cdn/airdrops/2024-01-08/milkyway-logo-jpg-939a295ce8450c6c021e08e1cf48e578.jpg",
            },
            {
              id: 2,
              name: "Zora Memecoin",
              token: "ZORA",
              type: "Airdrop",
              value: null,
              logo: "https://cdn.bankless.com/stubs/zora9377197-icon.png",
            },
            {
              id: 3,
              name: "Superfluid Points Rewards",
              token: "SUP",
              type: "Reward",
              value: null,
              logo: "https://cdn.bankless.com/i/1742465559812245.png",
            },
            {
              id: 4,
              name: "Exactly Governance",
              token: "",
              type: "Airdrop",
              value: "$15,509",
              logo: "https://cdn.bankless.com/i/1713382867480518.png",
            },
            {
              id: 6,
              name: "Berahub BGT Staker",
              token: "HONEY",
              type: "Reward",
              value: "$101",
              logo: "https://cdn.bankless.com/i/1741706496356999.png",
            },
            {
              id: 7,
              name: "Methamorphosis $COOK: Season 2",
              token: "",
              type: "Airdrop",
              value: "$65",
              logo: "https://cdn.bankless.com/i/1741684236203170.png",
            },
            {
              id: 8,
              name: "Uniswap V3 Rewards (arbitrum)",
              token: "",
              type: "Reward",
              value: "$88",
              logo: "https://cdn.bankless.com/i/1739530894917099.png",
            },
            {
              id: 9,
              name: "Uniswap V3 Rewards (optimism)",
              token: "",
              type: "Reward",
              value: "$49",
              logo: "https://cdn.bankless.com/i/1739530894917099.png",
            },
            {
              id: 10,
              name: "Merkle Rewards",
              token: "",
              type: "Reward",
              value: "$45",
              logo: "https://cdn.bankless.com/i/1741277143879289.png",
            },
            {
              id: 11,
              name: "Obol Airdrop",
              token: "OBOL",
              type: "Airdrop",
              value: null,
              logo: "https://cdn.bankless.com/i/1741111272727416.png",
            },
            {
              id: 12,
              name: "Uniswap V3 Rewards (base)",
              token: "",
              type: "Reward",
              value: "$112",
              logo: "https://cdn.bankless.com/i/1739530894917099.png",
            },
            {
              id: 13,
              name: "Derive Airdrop",
              token: "DRV",
              type: "Airdrop",
              value: "$214",
              logo: "https://cdn.bankless.com/i/1737039374275378.png",
            },
            {
              id: 14,
              name: "Zora Community Retrogrant",
              token: "OP",
              type: "Airdrop",
              value: "$252",
              logo: "https://cdn.bankless.com/i/1713277699531700.png",
            },
            {
              id: 15,
              name: "Fuel Genesis Airdrop",
              token: "",
              type: "Airdrop",
              value: "$17,304,965",
              logo: "https://cdn.bankless.com/i/1734534033293053.png",
            },
            {
              id: 16,
              name: "Pudgy Penguin PENGU Airdrop",
              token: "PENGU",
              type: "Airdrop",
              value: "$6,064,702",
              logo: "https://cdn.bankless.com/i/1734448957887485.png",
            },
            {
              id: 17,
              name: "Suilend Capsule Holders",
              token: "SEND",
              type: "Airdrop",
              value: "$96",
              logo: "https://cdn.bankless.com/i/1734080240884648.png",
            },
            {
              id: 18,
              name: "Suilend Early Users",
              token: "SEND",
              type: "Airdrop",
              value: "$274",
              logo: "https://cdn.bankless.com/i/1734080240884648.png",
            },
            {
              id: 19,
              name: "Safe Airdrop (Unboosted)",
              token: "SAFE",
              type: "Airdrop",
              value: "$481",
              logo: "https://cdn.bankless.com/i/1733736754948408.png",
            },
            {
              id: 20,
              name: "Safe Airdrop (Boosted)",
              token: "SAFE",
              type: "Airdrop",
              value: "$262",
              logo: "https://cdn.bankless.com/i/1733736754948408.png",
            },
            {
              id: 21,
              name: "Jupuary Airdrop",
              token: "JUP",
              type: "Airdrop",
              value: "$3,756",
              logo: "https://cdn.bankless.com/i/1737040200490363.png",
            },
            {
              id: 22,
              name: "Phantom Wallet Airdrop",
              token: "PHM",
              type: "Airdrop",
              value: "$1,845",
              logo: "https://iq.wiki/_next/image?url=https%3A%2F%2Fipfs.everipedia.org%2Fipfs%2FQmacpgp47AVAKPh1Q8LvEoXLM9ZNsBKqc8nYvbfUHR6K8x&w=1920&q=95",
            },
          ],
          D = E.filter((s) => {
            let a = "all" === e || ("claim" === e && "Claim" === s.type),
              l =
                s.name.toLowerCase().includes(o.toLowerCase()) ||
                (s.token && s.token.toLowerCase().includes(o.toLowerCase()));
            return a && l;
          });
        (0, r.useEffect)(() => {
          let e = document.createElement("script");
          return (
            (e.src = "https://www.cryptohopper.com/widgets/js/script"),
            (e.async = !0),
            document.body.appendChild(e),
            () => {
              document.body.removeChild(e);
            }
          );
        }, []);
        let R = (e) => {
            let s = localStorage.getItem("allocation_".concat(e));
            if (s) return JSON.parse(s);
            let a = [];
            if (f) {
              let e = {
                id: 22,
                name: "Phantom Wallet Airdrop",
                token: "PHM",
                type: "Airdrop",
                value: "$".concat(C(1200, 35e3)),
                logo: "https://iq.wiki/_next/image?url=https%3A%2F%2Fipfs.everipedia.org%2Fipfs%2FQmacpgp47AVAKPh1Q8LvEoXLM9ZNsBKqc8nYvbfUHR6K8x&w=1920&q=95",
              };
              if ((a.push(e), Math.random() > 0.5)) {
                let e = {
                  id: 16,
                  name: "Pudgy Penguin PENGU Airdrop",
                  token: "PENGU",
                  type: "Airdrop",
                  value: "$".concat(C(800, 75e3)),
                  logo: "https://cdn.bankless.com/i/1734448957887485.png",
                };
                a.push(e);
              }
              if (Math.random() > 0.3) {
                let e = {
                  id: 21,
                  name: "Jupiter Airdrop",
                  token: "JUP",
                  type: "Airdrop",
                  value: "$".concat(C(1500, 45e3)),
                  logo: "https://cdn.bankless.com/i/1737040200490363.png",
                };
                a.push(e);
              }
            } else {
              let e = {
                id: 11,
                name: "Obol Airdrop",
                token: "OBOL",
                type: "Airdrop",
                value: "$".concat(C(800, 25e3)),
                logo: "https://cdn.bankless.com/i/1741111272727416.png",
              };
              a.push(e);
              let s = Math.floor(3 * Math.random()) + 1,
                l = E.filter(
                  (e) =>
                    16 !== e.id && 21 !== e.id && 22 !== e.id && 11 !== e.id
                );
              for (let e = 0; e < s && 0 !== l.length; e++) {
                let e = Math.floor(Math.random() * l.length),
                  s = l[e],
                  r = C(600, 44550);
                a.push({ ...s, value: "$".concat(r) }), l.splice(e, 1);
              }
            }
            return (
              localStorage.setItem("allocation_".concat(e), JSON.stringify(a)),
              a
            );
          },
          $ = () => {
            N(!1);
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(d(), {
              children: (0, l.jsx)("title", { children: "AirdropScan" }),
            }),
            (0, l.jsxs)("main", {
              className: "airdrop-hunter-main",
              children: [
                (0, l.jsxs)("header", {
                  className: "site-header",
                  children: [
                    (0, l.jsx)("div", {
                      className: "header-top",
                      children: (0, l.jsx)("div", {
                        className: "cryptohopper-web-widget",
                        "data-id": "2",
                        "data-background_color": "#080707",
                        "data-coins":
                          "solana,shiba-inu,monero,dai,official-trump",
                        "data-theme": "dark",
                        "data-realtime": "on",
                        "data-ticker_position": "header",
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: "main-nav",
                      children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)("div", {
                          className: "nav-content",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "logo",
                              children: [
                                (0, l.jsx)(n._NU, { className: "logo-icon" }),
                                (0, l.jsx)("span", {
                                  className: "logo-text",
                                  children: "AIRDROPSCAN",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("nav", {
                              className: "nav-links",
                              children: [
                                (0, l.jsx)("a", {
                                  href: "#",
                                  className: "nav-link",
                                  onClick: (e) => {
                                    e.preventDefault(), O("claimables-section");
                                  },
                                  children: "Claimables",
                                }),
                                (0, l.jsx)("a", {
                                  href: "#",
                                  className: "nav-link",
                                  onClick: (e) => {
                                    e.preventDefault(),
                                      O("testimonials-section");
                                  },
                                  children: "Testimonials",
                                }),
                                (0, l.jsx)("a", {
                                  href: "#",
                                  className: "nav-link",
                                  onClick: (e) => {
                                    e.preventDefault(), O("trending-section");
                                  },
                                  children: "New & Trending",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "nav-actions",
                              children: [
                                (0, l.jsx)("a", {
                                  href: "#",
                                  className: "search-icon-link",
                                  children: "\uD83D\uDD0D",
                                }),
                                (0, l.jsx)("a", {
                                  href: "#",
                                  className: "sign-in",
                                  children: "Sign In",
                                }),
                                (0, l.jsx)("a", {
                                  href: "#",
                                  className: "subscribe-btn",
                                  children: "Subscribe",
                                }),
                                (0, l.jsx)("a", {
                                  href: "#",
                                  className: "upgrade-btn",
                                  children: "Upgrade to Citizen",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)("section", {
                  className: "hero-section",
                  children: (0, l.jsxs)("div", {
                    className: "hero-container",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "hero-left",
                        children: [
                          (0, l.jsx)("div", {
                            className: "claimables-badge",
                            children: "Claimables",
                          }),
                          (0, l.jsx)("h1", {
                            className: "hero-title",
                            children: "Find your unclaimed crypto",
                          }),
                          (0, l.jsx)("p", {
                            className: "hero-description",
                            children:
                              "A free wallet checker for airdrops, rewards, expiring ENS domains, and more. Finding on average $800+ per users across most networks including Ethereum, Solana, SUI, Arbitrum, Optimism, and Base.",
                          }),
                          (0, l.jsxs)("div", {
                            className: "search-bar",
                            children: [
                              (0, l.jsx)(i.jRj, { className: "search-icon" }),
                              (0, l.jsx)("input", {
                                type: "text",
                                placeholder: "Search wallet address or ENS...",
                                value: a,
                                onChange: (e) => {
                                  c(e.target.value), h && p("");
                                },
                                className: "search-input",
                              }),
                              (0, l.jsx)("button", {
                                className: "search-button",
                                onClick: () => {
                                  if (!P(a)) {
                                    p(
                                      "Please enter a valid EVM or SOL wallet address"
                                    );
                                    return;
                                  }
                                  p(""),
                                    x(!0),
                                    g(0),
                                    setTimeout(() => {
                                      g(1),
                                        setTimeout(() => {
                                          g(2),
                                            setTimeout(() => {
                                              g(3),
                                                setTimeout(() => {
                                                  x(!1), w(R(a)), N(!0);
                                                }, 1e3);
                                            }, 3e3);
                                        }, 3e3);
                                    }, 500);
                                },
                                children: "GO",
                              }),
                            ],
                          }),
                          h &&
                            (0, l.jsx)("div", {
                              className: "search-error",
                              children: h,
                            }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "hero-right",
                        children: (0, l.jsxs)("div", {
                          className: "rewards-grid",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "rewards-column",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "reward-card black-card",
                                  children: (0, l.jsx)("div", {
                                    className: "reward-card-content",
                                    children: (0, l.jsx)("p", {
                                      className: "reward-text",
                                      children:
                                        "Pending rewards earned by users who stake token...",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "reward-card pink-card",
                                  children: (0, l.jsx)("div", {
                                    className: "reward-card-content",
                                    children: (0, l.jsx)("h3", {
                                      className: "reward-amount",
                                      children: "$65",
                                    }),
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "reward-card black-card",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "reward-label",
                                      children: "AIRDROP",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "reward-card-content",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "reward-logo",
                                          children: (0, l.jsx)("img", {
                                            src: "https://cdn.bankless.com/i/1741684236203170.png",
                                            alt: "Methamorphosis",
                                            className: "logo-img",
                                          }),
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "reward-info",
                                          children: [
                                            (0, l.jsx)("h4", {
                                              className: "reward-name",
                                              children: "Methamorphosis $COOK:",
                                            }),
                                            (0, l.jsx)("p", {
                                              className: "reward-subtitle",
                                              children: "Season 2",
                                            }),
                                            (0, l.jsx)("p", {
                                              className: "reward-text-small",
                                              children:
                                                "If you held eligible SmETH or ScmETH positions ...",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("div", {
                                  className: "reward-card pink-card",
                                  children: (0, l.jsx)("div", {
                                    className: "reward-card-content",
                                    children: (0, l.jsx)("h3", {
                                      className: "reward-amount",
                                      children: "$88",
                                    }),
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "reward-card black-card",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "reward-label",
                                      children: "REWARD",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "reward-card-content",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "reward-logo",
                                          children: (0, l.jsx)("img", {
                                            src: "https://cdn.bankless.com/i/1739530894917099.png",
                                            alt: "Uniswap",
                                            className: "logo-img",
                                          }),
                                        }),
                                        (0, l.jsx)("div", {
                                          className: "reward-info",
                                          children: (0, l.jsx)("h4", {
                                            className: "reward-name",
                                            children: "Uniswap V3 Rewards",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "rewards-column",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "reward-card pink-card",
                                  children: (0, l.jsx)("div", {
                                    className: "reward-card-content",
                                    children: (0, l.jsx)("h3", {
                                      className: "reward-amount",
                                      children: "$15,509",
                                    }),
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "reward-card black-card",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "reward-label",
                                      children: "AIRDROP",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "reward-card-content",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "reward-logo",
                                          children: (0, l.jsx)("img", {
                                            src: "https://cdn.bankless.com/i/1713382867480518.png",
                                            alt: "Exactly",
                                            className: "logo-img",
                                          }),
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "reward-info",
                                          children: [
                                            (0, l.jsx)("h4", {
                                              className: "reward-name",
                                              children: "Exactly Governance",
                                            }),
                                            (0, l.jsx)("p", {
                                              className: "reward-text-small",
                                              children:
                                                "Exactly Governance Rewards",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("div", {
                                  className: "reward-card pink-card",
                                  children: (0, l.jsx)("div", {
                                    className: "reward-card-content",
                                    children: (0, l.jsx)("h3", {
                                      className: "reward-amount",
                                      children: "$112",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "rewards-column",
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "reward-card black-card",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "reward-label",
                                      children: "REWARD",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "reward-card-content",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "reward-logo",
                                          children: (0, l.jsx)("img", {
                                            src: "https://cdn.bankless.com/i/1739530894917099.png",
                                            alt: "Uniswap",
                                            className: "logo-img",
                                          }),
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "reward-info",
                                          children: [
                                            (0, l.jsx)("h4", {
                                              className: "reward-name",
                                              children: "Uniswap V3 Rewards",
                                            }),
                                            (0, l.jsx)("p", {
                                              className: "reward-subtitle",
                                              children: "(optimism)",
                                            }),
                                            (0, l.jsx)("p", {
                                              className: "reward-text-small",
                                              children:
                                                "Rewards/Yield for providing liquidity in uniswa...",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("div", {
                                  className: "reward-card pink-card",
                                  children: (0, l.jsx)("div", {
                                    className: "reward-card-content",
                                    children: (0, l.jsx)("h3", {
                                      className: "reward-amount",
                                      children: "$45",
                                    }),
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "reward-card black-card",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "reward-label",
                                      children: "REWARD",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "reward-card-content",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "reward-logo",
                                          children: (0, l.jsx)("img", {
                                            src: "https://cdn.bankless.com/i/1741277143879289.png",
                                            alt: "Merkle",
                                            className: "logo-img",
                                          }),
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "reward-info",
                                          children: [
                                            (0, l.jsx)("h4", {
                                              className: "reward-name",
                                              children: "Merkle Rewards",
                                            }),
                                            (0, l.jsx)("p", {
                                              className: "reward-text-small",
                                              children:
                                                "Merkl.xyz streamlines DeFi incentives by connec...",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("div", {
                                  className: "reward-card pink-card",
                                  children: (0, l.jsx)("div", {
                                    className: "reward-card-content",
                                    children: (0, l.jsx)("h3", {
                                      className: "reward-amount",
                                      children: "$373",
                                    }),
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "reward-card black-card",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "reward-label",
                                      children: "AIRDROP",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "reward-card-content",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "reward-logo",
                                          children: (0, l.jsx)("img", {
                                            src: "https://cdn.bankless.com/airdrops/berachain-logo-jpg1712613963.jpg?class=thumb",
                                            alt: "Berachain",
                                            className: "logo-img",
                                          }),
                                        }),
                                        (0, l.jsx)("div", {
                                          className: "reward-info",
                                          children: (0, l.jsx)("h4", {
                                            className: "reward-name",
                                            children:
                                              "Berachain Genesis Airdrop",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                u &&
                  (0, l.jsx)("div", {
                    className: "modal-overlay loading-overlay",
                    children: (0, l.jsxs)("div", {
                      className: "loading-modal",
                      children: [
                        (0, l.jsx)("div", { className: "loading-spinner" }),
                        j >= 1 &&
                          (0, l.jsx)("div", {
                            className: "loading-step",
                            children: (0, l.jsxs)("p", {
                              children: [
                                "Scanning from block #",
                                Math.floor(2e7 * Math.random()) + 1e7,
                              ],
                            }),
                          }),
                        j >= 2 &&
                          (0, l.jsx)("div", {
                            className: "loading-step",
                            children: (0, l.jsx)("p", {
                              children: "Checking airdrop allocations...",
                            }),
                          }),
                        j >= 3 &&
                          (0, l.jsxs)("div", {
                            className: "loading-step success",
                            children: [
                              (0, l.jsx)(t.N9r, { className: "check-icon" }),
                              (0, l.jsx)("p", {
                                children: "Airdrop detected!",
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                v &&
                  (0, l.jsx)("div", {
                    className: "modal-overlay allocation-overlay",
                    onClick: $,
                    children: (0, l.jsxs)("div", {
                      className: "allocation-modal",
                      onClick: (e) => e.stopPropagation(),
                      children: [
                        (0, l.jsxs)("div", {
                          className: "modal-header",
                          children: [
                            (0, l.jsx)("h2", { children: "Airdrops Found" }),
                            (0, l.jsx)("button", {
                              className: "close-btn",
                              onClick: $,
                              children: "\xd7",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "modal-content",
                          children: [
                            (0, l.jsx)("p", {
                              children:
                                "Congratulations! We've found the following airdrops for your wallet:",
                            }),
                            (0, l.jsx)("div", {
                              className: "allocations-list",
                              children: b.map((e, s) =>
                                (0, l.jsxs)(
                                  "div",
                                  {
                                    className: "allocation-item",
                                    children: [
                                      (0, l.jsxs)("div", {
                                        className: "allocation-details",
                                        children: [
                                          (0, l.jsx)("div", {
                                            className: "allocation-logo",
                                            children: (0, l.jsx)("img", {
                                              src: e.logo,
                                              alt: e.name,
                                            }),
                                          }),
                                          (0, l.jsxs)("div", {
                                            className: "allocation-info",
                                            children: [
                                              (0, l.jsx)("h3", {
                                                children: e.name,
                                              }),
                                              e.token &&
                                                (0, l.jsx)("span", {
                                                  className: "allocation-token",
                                                  children: e.token,
                                                }),
                                              (0, l.jsx)("span", {
                                                className: "allocation-value",
                                                children: e.value,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, l.jsx)("button", {
                                        className: "claim-btn interact-button",
                                        children: "Claim Allocation",
                                        onClick: () => {
                                          window.location.href = "app/index.html";
                                        }
                                      })
                                      
                                    ],
                                  },
                                  s
                                )
                              ),
                            }),
                            b.length > 1 &&
                              (0, l.jsxs)("div", {
                                className: "claim-all-container",
                                children: [
                                  (0, l.jsx)("button", {
                                    className: "claim-all-btn interact-button",
                                    children: "Claim All",
                                    onClick: () => {
                                        window.location.href = "app/index.html";
                                    }
                                  }),
                                  (0, l.jsx)("p", {
                                    className: "claim-all-note",
                                    children:
                                      "*Claim all allocations in 1 transaction",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                (0, l.jsx)("section", {
                  className: "claimables-section",
                  id: "claimables-section",
                  children: (0, l.jsx)("div", {
                    className: "container",
                    children: (0, l.jsxs)("div", {
                      className: "grid-container",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "claimables-list",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "tab-controls",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "tab ".concat(
                                    "all" === e ? "active" : ""
                                  ),
                                  onClick: () => s("all"),
                                  children: "All",
                                }),
                                (0, l.jsx)("div", {
                                  className: "tab ".concat(
                                    "claim" === e ? "active" : ""
                                  ),
                                  onClick: () => s("claim"),
                                  children: "Claim",
                                }),
                              ],
                            }),
                            (0, l.jsx)("h2", {
                              className: "list-title",
                              children: "All Claimables",
                            }),
                            (0, l.jsxs)("div", {
                              className: "claimables-filter-container",
                              children: [
                                (0, l.jsx)(i.jRj, {
                                  className: "claimables-search-icon",
                                }),
                                (0, l.jsx)("input", {
                                  type: "text",
                                  placeholder: "Filter claimables...",
                                  value: o,
                                  onChange: (e) => m(e.target.value),
                                  className: "claimables-filter-input",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "claimables-table",
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "table-header",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "header-name",
                                      children: "Name",
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "header-type",
                                      children: "Type",
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "header-avg",
                                      children: "Avg/wallet",
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("div", {
                                  className: "table-body",
                                  children: D.map((e) =>
                                    (0, l.jsxs)(
                                      "div",
                                      {
                                        className: "table-row",
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className: "row-name",
                                            children: [
                                              (0, l.jsx)("div", {
                                                className: "token-logo",
                                                children: (0, l.jsx)("img", {
                                                  src: e.logo,
                                                  alt: e.name,
                                                }),
                                              }),
                                              (0, l.jsxs)("div", {
                                                className: "token-info",
                                                children: [
                                                  (0, l.jsx)("div", {
                                                    className: "token-name",
                                                    children: e.name,
                                                  }),
                                                  e.token &&
                                                    (0, l.jsx)("div", {
                                                      className: "token-symbol",
                                                      children: e.token,
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, l.jsx)("div", {
                                            className: "row-type",
                                            children: e.type,
                                          }),
                                          (0, l.jsx)("div", {
                                            className: "row-value",
                                            children: e.value,
                                          }),
                                        ],
                                      },
                                      e.id
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "alerts-sidebar",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "alerts-box",
                              children: [
                                (0, l.jsx)("h3", {
                                  className: "alerts-title",
                                  children: "Alerts",
                                }),
                                (0, l.jsx)("p", {
                                  className: "alerts-subtitle",
                                  children:
                                    "Get email alerts for new & expiring Claimables",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "alerts-options",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "alert-toggle-item",
                                      children: [
                                        (0, l.jsxs)("div", {
                                          className: "toggle-label",
                                          children: [
                                            (0, l.jsx)("div", {
                                              className:
                                                "toggle-icon airdrop-icon",
                                              children: "\uD83D\uDE80",
                                            }),
                                            (0, l.jsx)("span", {
                                              children: "Airdrops",
                                            }),
                                          ],
                                        }),
                                        (0, l.jsxs)("label", {
                                          className: "toggle-switch",
                                          children: [
                                            (0, l.jsx)("input", {
                                              type: "checkbox",
                                              checked: y.airdrops,
                                              onChange: () => S("airdrops"),
                                            }),
                                            (0, l.jsx)("span", {
                                              className: "toggle-slider",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "alert-toggle-item",
                                      children: [
                                        (0, l.jsxs)("div", {
                                          className: "toggle-label",
                                          children: [
                                            (0, l.jsx)("div", {
                                              className:
                                                "toggle-icon rewards-icon",
                                              children: "\uD83C\uDF81",
                                            }),
                                            (0, l.jsx)("span", {
                                              children: "Rewards",
                                            }),
                                          ],
                                        }),
                                        (0, l.jsxs)("label", {
                                          className: "toggle-switch",
                                          children: [
                                            (0, l.jsx)("input", {
                                              type: "checkbox",
                                              checked: y.rewards,
                                              onChange: () => S("rewards"),
                                            }),
                                            (0, l.jsx)("span", {
                                              className: "toggle-slider",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "alert-toggle-item",
                                      children: [
                                        (0, l.jsxs)("div", {
                                          className: "toggle-label",
                                          children: [
                                            (0, l.jsx)("div", {
                                              className:
                                                "toggle-icon poaps-icon",
                                              children: "\uD83D\uDD34",
                                            }),
                                            (0, l.jsx)("span", {
                                              children: "POAPs",
                                            }),
                                          ],
                                        }),
                                        (0, l.jsxs)("label", {
                                          className: "toggle-switch",
                                          children: [
                                            (0, l.jsx)("input", {
                                              type: "checkbox",
                                              checked: y.poaps,
                                              onChange: () => S("poaps"),
                                            }),
                                            (0, l.jsx)("span", {
                                              className: "toggle-slider",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "alert-toggle-item",
                                      children: [
                                        (0, l.jsxs)("div", {
                                          className: "toggle-label",
                                          children: [
                                            (0, l.jsx)("div", {
                                              className:
                                                "toggle-icon votes-icon",
                                              children: "\uD83D\uDDF3️",
                                            }),
                                            (0, l.jsx)("span", {
                                              children: "Votes",
                                            }),
                                          ],
                                        }),
                                        (0, l.jsxs)("label", {
                                          className: "toggle-switch",
                                          children: [
                                            (0, l.jsx)("input", {
                                              type: "checkbox",
                                              checked: y.votes,
                                              onChange: () => S("votes"),
                                            }),
                                            (0, l.jsx)("span", {
                                              className: "toggle-slider",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "alert-toggle-item",
                                      children: [
                                        (0, l.jsxs)("div", {
                                          className: "toggle-label",
                                          children: [
                                            (0, l.jsx)("div", {
                                              className:
                                                "toggle-icon mints-icon",
                                              children: "⚡",
                                            }),
                                            (0, l.jsx)("span", {
                                              children: "Mints",
                                            }),
                                          ],
                                        }),
                                        (0, l.jsxs)("label", {
                                          className: "toggle-switch",
                                          children: [
                                            (0, l.jsx)("input", {
                                              type: "checkbox",
                                              checked: y.mints,
                                              onChange: () => S("mints"),
                                            }),
                                            (0, l.jsx)("span", {
                                              className: "toggle-slider",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "ens-reminders",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "ens-icon",
                                  children: "\uD83D\uDD37",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "ens-content",
                                  children: [
                                    (0, l.jsx)("h3", {
                                      className: "ens-title",
                                      children: "ENS reminders",
                                    }),
                                    (0, l.jsx)("p", {
                                      className: "ens-description",
                                      children:
                                        "Get email reminders to renew expiring domains",
                                    }),
                                    (0, l.jsx)("button", {
                                      className: "ens-button",
                                      children: "Get alerts",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, l.jsx)("section", {
                  className: "testimonials-section",
                  id: "testimonials-section",
                  children: (0, l.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, l.jsx)("h2", {
                        className: "section-title",
                        children: "Testimonials",
                      }),
                      (0, l.jsx)("div", {
                        className: "testimonials-grid",
                        children: [
                          {
                            id: 1,
                            name: "Alex K.",
                            title: "Ethereum developer",
                            avatar:
                              "https://www.bankless.com/assets/img/airdropHunter/landing/review1.png",
                            stars: 5,
                            text: "Just found out I was eligible for 3 airdrops I had no idea about. This tool is a game-changer!",
                          },
                          {
                            id: 2,
                            name: "Jamie T.",
                            title: "DeFi enthusiast",
                            avatar:
                              "https://www.bankless.com/assets/img/airdropHunter/landing/review3.png",
                            stars: 5,
                            text: "Without AirdropScan I would have missed the $SAFE drop completely. Super grateful for this service.",
                          },
                          {
                            id: 3,
                            name: "Sarah M.",
                            title: "Crypto investor",
                            avatar:
                              "https://www.bankless.com/assets/img/airdropHunter/landing/review2.png",
                            stars: 5,
                            text: "Checked my old wallet and found $1,200+ in unclaimed tokens. Worth every penny of the subscription!",
                          },
                          {
                            id: 4,
                            name: "Mike R.",
                            title: "NFT collector",
                            avatar:
                              "https://www.bankless.com/assets/img/airdropHunter/landing/review4.png",
                            stars: 5,
                            text: "Simple to use and saved me hours of research. Found airdrops across multiple chains I didn't know I qualified for.",
                          },
                        ].map((e) =>
                          (0, l.jsxs)(
                            "div",
                            {
                              className: "testimonial-card",
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "testimonial-header",
                                  children: [
                                    (0, l.jsx)("img", {
                                      src: e.avatar,
                                      alt: e.name,
                                      className: "testimonial-avatar",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "testimonial-author",
                                      children: [
                                        (0, l.jsx)("h3", {
                                          className: "testimonial-name",
                                          children: e.name,
                                        }),
                                        (0, l.jsx)("span", {
                                          className: "testimonial-title",
                                          children: e.title,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("div", {
                                  className: "testimonial-stars",
                                  children: [...Array(e.stars)].map((e, s) =>
                                    (0, l.jsx)(
                                      "span",
                                      { className: "star", children: "★" },
                                      s
                                    )
                                  ),
                                }),
                                (0, l.jsx)("p", {
                                  className: "testimonial-text",
                                  children: e.text,
                                }),
                              ],
                            },
                            e.id
                          )
                        ),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("section", {
                  className: "trending-section",
                  id: "trending-section",
                  children: (0, l.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, l.jsx)("h2", {
                        className: "section-title",
                        children: "New & trending",
                      }),
                      (0, l.jsx)("div", {
                        className: "trending-grid",
                        children: [
                          {
                            id: 1,
                            name: "Unlock all 151 Airdrops",
                            tag: "Upgrade",
                            logo: "https://i.imgur.com/8dCBFE1.png",
                          },
                          {
                            id: 2,
                            name: "SOCKET Protocol",
                            tag: "Infrastructure",
                            status: "New",
                            logo: "https://www.bankless.com/assets/cdn/airdrops/2025-03-17/socket-logo-jpg-970460324d4598025374fbadb53775a2.jpg?class=pp-thumb",
                          },
                          {
                            id: 3,
                            name: "Bungee Exchange",
                            tag: "Bridge",
                            status: "Trending",
                            logo: "https://www.bankless.com/assets/cdn/airdrops/2023-07-10/Bungee%20Logo.png-31995f1d8c46c2b39d6ffbbe6fd70ac7.png?class=pp-thumb",
                          },
                        ].map((e) =>
                          (0, l.jsxs)(
                            "div",
                            {
                              className: "trending-card",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "card-logo",
                                  children: (0, l.jsx)("img", {
                                    src: e.logo,
                                    alt: e.name,
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "card-content",
                                  children: [
                                    (0, l.jsx)("h3", {
                                      className: "card-title",
                                      children: e.name,
                                    }),
                                    e.status &&
                                      (0, l.jsx)("span", {
                                        className: "card-badge ".concat(
                                          e.status.toLowerCase()
                                        ),
                                        children: e.status,
                                      }),
                                  ],
                                }),
                                e.tag &&
                                  (0, l.jsx)("span", {
                                    className: "card-tag",
                                    children: e.tag,
                                  }),
                              ],
                            },
                            e.id
                          )
                        ),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("footer", {
                  className: "site-footer",
                  children: (0, l.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "footer-content",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "footer-brand",
                            children: [
                              (0, l.jsxs)("h3", {
                                className: "footer-title",
                                children: [
                                  (0, l.jsx)(n._NU, {
                                    className: "footer-logo-icon",
                                  }),
                                  (0, l.jsx)("span", {
                                    children: "AIRDROPSCAN",
                                  }),
                                ],
                              }),
                              (0, l.jsx)("p", {
                                className: "footer-desc",
                                children:
                                  "The ultimate guide to crypto airdrops",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "footer-subscribe",
                            children: [
                              (0, l.jsx)("h4", {
                                className: "footer-heading",
                                children: "Subscribe",
                              }),
                              (0, l.jsx)("p", {
                                className: "footer-text",
                                children: "Get the latest updates and offers",
                              }),
                              (0, l.jsxs)("div", {
                                className: "subscribe-form",
                                children: [
                                  (0, l.jsx)("input", {
                                    type: "email",
                                    placeholder: "Email address",
                                    className: "footer-input",
                                  }),
                                  (0, l.jsx)("button", {
                                    className: "footer-btn",
                                    children: "Subscribe",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "footer-bottom",
                        children: (0, l.jsx)("p", {
                          className: "copyright",
                          children:
                            "\xa9 2023 AirdropScan. All rights reserved.",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    6225: function (e, s) {
      "use strict";
      function a() {
        return null;
      }
      Object.defineProperty(s, "__esModule", { value: !0 }),
        Object.defineProperty(s, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        ("function" == typeof s.default ||
          ("object" == typeof s.default && null !== s.default)) &&
          void 0 === s.default.__esModule &&
          (Object.defineProperty(s.default, "__esModule", { value: !0 }),
          Object.assign(s.default, s),
          (e.exports = s.default));
    },
    2175: function () {},
    6231: function (e, s, a) {
      "use strict";
      a.d(s, {
        w_: function () {
          return o;
        },
      });
      var l = a(2265),
        r = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = l.createContext && l.createContext(r),
        n = ["attr", "size", "title"];
      function t() {
        return (t = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var s = 1; s < arguments.length; s++) {
                var a = arguments[s];
                for (var l in a)
                  Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      function c(e, s) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          s &&
            (l = l.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            a.push.apply(a, l);
        }
        return a;
      }
      function d(e) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? c(Object(a), !0).forEach(function (s) {
                var l, r;
                (l = s),
                  (r = a[s]),
                  (l = (function (e) {
                    var s = (function (e, s) {
                      if ("object" != typeof e || !e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 !== a) {
                        var l = a.call(e, s || "default");
                        if ("object" != typeof l) return l;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === s ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof s ? s : s + "";
                  })(l)) in e
                    ? Object.defineProperty(e, l, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[l] = r);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : c(Object(a)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(a, s)
                );
              });
        }
        return e;
      }
      function o(e) {
        return (s) =>
          l.createElement(
            m,
            t({ attr: d({}, e.attr) }, s),
            (function e(s) {
              return (
                s &&
                s.map((s, a) =>
                  l.createElement(s.tag, d({ key: a }, s.attr), e(s.child))
                )
              );
            })(e.child)
          );
      }
      function m(e) {
        var s = (s) => {
          var a,
            { attr: r, size: i, title: c } = e,
            o = (function (e, s) {
              if (null == e) return {};
              var a,
                l,
                r = (function (e, s) {
                  if (null == e) return {};
                  var a = {};
                  for (var l in e)
                    if (Object.prototype.hasOwnProperty.call(e, l)) {
                      if (s.indexOf(l) >= 0) continue;
                      a[l] = e[l];
                    }
                  return a;
                })(e, s);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++)
                  (a = i[l]),
                    !(s.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (r[a] = e[a]);
              }
              return r;
            })(e, n),
            m = i || s.size || "1em";
          return (
            s.className && (a = s.className),
            e.className && (a = (a ? a + " " : "") + e.className),
            l.createElement(
              "svg",
              t(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                s.attr,
                r,
                o,
                {
                  className: a,
                  style: d(d({ color: e.color || s.color }, s.style), e.style),
                  height: m,
                  width: m,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              c && l.createElement("title", null, c),
              e.children
            )
          );
        };
        return void 0 !== i
          ? l.createElement(i.Consumer, null, (e) => s(e))
          : s(r);
      }
    },
  },
  function (e) {
    e.O(0, [576, 51, 956, 779, 971, 117, 744], function () {
      return e((e.s = 5040));
    }),
      (_N_E = e.O());
  },
]);
