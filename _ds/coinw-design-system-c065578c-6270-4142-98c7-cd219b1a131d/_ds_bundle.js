/* @ds-bundle: {"format":3,"namespace":"CoinWDesignSystem_c06557","components":[],"sourceHashes":{"ui_kits/app/AppMarkets.jsx":"98b77d141258","ui_kits/app/ios-frame.jsx":"d67eb3ffe562","ui_kits/web/WebFooter.jsx":"17997e030458","ui_kits/web/WebHeader.jsx":"c2af86f8163b","ui_kits/web/WebHero.jsx":"f6d685d15c03","ui_kits/web/WebMarketTable.jsx":"f63396bcb8af"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CoinWDesignSystem_c06557 = window.CoinWDesignSystem_c06557 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/app/AppMarkets.jsx
try { (() => {
// CoinW App — Markets list screen
// Vertical list of tradeable pairs with sticky search + filter chips.

function AppMarkets({
  onSelectPair
}) {
  const [tab, setTab] = React.useState("All");
  const tabs = ["Favorites", "All", "Spot", "Futures", "New"];
  const rows = [{
    sym: "BTC",
    name: "Bitcoin",
    price: 68421.20,
    ch: 2.41
  }, {
    sym: "ETH",
    name: "Ethereum",
    price: 3512.08,
    ch: -0.82
  }, {
    sym: "SOL",
    name: "Solana",
    price: 148.51,
    ch: 5.66
  }, {
    sym: "BNB",
    name: "BNB",
    price: 612.30,
    ch: 1.08
  }, {
    sym: "XRP",
    name: "Ripple",
    price: 0.6122,
    ch: -1.32
  }, {
    sym: "DOGE",
    name: "Dogecoin",
    price: 0.1568,
    ch: 8.91
  }, {
    sym: "TON",
    name: "Toncoin",
    price: 5.412,
    ch: -2.18
  }, {
    sym: "ADA",
    name: "Cardano",
    price: 0.4825,
    ch: 0.42
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "app-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-top"
  }, /*#__PURE__*/React.createElement("h1", null, "Markets"), /*#__PURE__*/React.createElement("div", {
    className: "app-top__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "app-iconbtn"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search"
  })), /*#__PURE__*/React.createElement("button", {
    className: "app-iconbtn"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "app-search"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search BTC, ETH, \u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "app-chips"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: `app-chip${tab === t ? " is-on" : ""}`,
    onClick: () => setTab(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "app-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-list__head"
  }, /*#__PURE__*/React.createElement("span", null, "Pair / 24h Vol"), /*#__PURE__*/React.createElement("span", null, "Last Price"), /*#__PURE__*/React.createElement("span", null, "24h")), rows.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.sym,
    className: "app-list__row",
    onClick: () => onSelectPair(r)
  }, /*#__PURE__*/React.createElement("span", {
    className: "app-list__pair"
  }, /*#__PURE__*/React.createElement("span", {
    className: "app-avatar"
  }, r.sym.slice(0, 1)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, r.sym, "/USDT"), /*#__PURE__*/React.createElement("em", null, "Vol  ", (Math.random() * 200 + 10).toFixed(1), "M"))), /*#__PURE__*/React.createElement("span", {
    className: "app-list__price"
  }, r.price.toLocaleString(undefined, {
    minimumFractionDigits: r.price < 1 ? 4 : 2
  })), /*#__PURE__*/React.createElement("span", {
    className: `app-list__delta ${r.ch >= 0 ? "is-up" : "is-down"}`
  }, r.ch >= 0 ? "+" : "", r.ch.toFixed(2), "%")))));
}
window.AppMarkets = AppMarkets;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppMarkets.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/WebFooter.jsx
try { (() => {
// CoinW Web — Product strip + Footer
// Footer.jsx in the Figma is large; this is a condensed version with the
// four product groups + legal line that appears in every Footer variant.

function WebProductStrip() {
  const items = [{
    t: "Spot",
    d: "Buy and sell over 600 cryptos."
  }, {
    t: "Futures",
    d: "Up to 100× leverage. Linear & inverse."
  }, {
    t: "Copy",
    d: "Mirror top traders automatically."
  }, {
    t: "Earn",
    d: "Stake, lend, dual-invest."
  }, {
    t: "Card",
    d: "Spend crypto with the CoinW Card."
  }, {
    t: "Ventures",
    d: "Capital for the next 1 000 chains."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "cw-strip"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cw-strip__title"
  }, "All of crypto, in one place."), /*#__PURE__*/React.createElement("div", {
    className: "cw-strip__grid"
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    className: "cw-strip__cell",
    key: i.t,
    href: "#"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cw-strip__cell-title"
  }, "CoinW ", /*#__PURE__*/React.createElement("b", null, i.t)), /*#__PURE__*/React.createElement("span", {
    className: "cw-strip__cell-d"
  }, i.d), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    className: "cw-strip__cell-arrow"
  })))));
}
function WebFooter() {
  const cols = [{
    h: "Products",
    links: ["Spot", "Futures", "Copy trading", "Earn", "CoinW verity", "CoinW earn", "CoinW ventures"]
  }, {
    h: "Service",
    links: ["Fee schedule", "VIP", "API", "Status", "Coupons"]
  }, {
    h: "Support",
    links: ["Help center", "Submit ticket", "Listing", "Verify", "Security"]
  }, {
    h: "Legal",
    links: ["Terms", "Privacy", "Cookie policy", "AML"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "cw-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/coinw-horizontal-white.svg",
    alt: "CoinW"
  }), /*#__PURE__*/React.createElement("p", null, "Trade crypto the way you want \u2014 on a desk built for serious traders."), /*#__PURE__*/React.createElement("div", {
    className: "cw-footer__social"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "twitter"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "send"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "message-circle"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "youtube"
  })))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    className: "cw-footer__col",
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", null, c.h), /*#__PURE__*/React.createElement("ul", null, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    className: "cw-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "CopyRight \xA9 2017 \u2013 2023 CoinW.com. All Rights Reserved."), /*#__PURE__*/React.createElement("span", {
    className: "cw-footer__lang"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "globe"
  }), " English")));
}
window.WebProductStrip = WebProductStrip;
window.WebFooter = WebFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/WebFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/WebHeader.jsx
try { (() => {
// CoinW Web — Top navigation
// Recreated from /page/Navigation--Eric/Footer/* and the header components in
// /page/components/TopNavigation, which include a CW wordmark on the left,
// a flat row of product nav items (Markets, Spot, Futures, etc), language /
// theme / wallet utilities on the right, and a brand "Sign Up" CTA.

function WebHeader({
  onSignUp
}) {
  const navItems = ["Markets", "Spot", "Futures", "Copy", "Earn", "More"];
  return /*#__PURE__*/React.createElement("header", {
    className: "cw-header"
  }, /*#__PURE__*/React.createElement("a", {
    className: "cw-header__brand",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/coinw-horizontal-purple.svg",
    alt: "CoinW"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "cw-header__nav"
  }, navItems.map((n, i) => /*#__PURE__*/React.createElement("a", {
    className: `cw-header__navitem${i === 1 ? " is-active" : ""}`,
    key: n,
    href: "#"
  }, n))), /*#__PURE__*/React.createElement("div", {
    className: "cw-header__util"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cw-iconbtn",
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search"
  })), /*#__PURE__*/React.createElement("button", {
    className: "cw-iconbtn",
    "aria-label": "Language"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "globe"
  })), /*#__PURE__*/React.createElement("button", {
    className: "cw-iconbtn",
    "aria-label": "Dark mode"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "moon"
  })), /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn--ghost"
  }, "Log In"), /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn--brand",
    onClick: onSignUp
  }, "Sign Up")));
}
window.WebHeader = WebHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/WebHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/WebHero.jsx
try { (() => {
// CoinW Web — Hero
// Anchored on a 90px-padded brand-violet container (the Figma "card inset"),
// with a Bold 57/68 display headline, a lime tag for highlight, and the
// canonical "Get Started" + "Trade Now" CTA pair.

function WebHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cw-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-hero__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cw-hero__tag"
  }, "2 000+ trading pairs"), /*#__PURE__*/React.createElement("h1", {
    className: "cw-hero__title"
  }, "Trade crypto", /*#__PURE__*/React.createElement("br", null), "the way you want."), /*#__PURE__*/React.createElement("p", {
    className: "cw-hero__sub"
  }, "Spot, futures, and copy trading on one desk. Spreads as tight as 0.02%. Withdrawals in under 60 seconds."), /*#__PURE__*/React.createElement("div", {
    className: "cw-hero__cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn--brand cw-btn--xl"
  }, "Get Started"), /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn--ghost-on-brand cw-btn--xl"
  }, "Explore markets")), /*#__PURE__*/React.createElement("div", {
    className: "cw-hero__stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "$3.4 B"), /*#__PURE__*/React.createElement("span", null, "24h volume")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "14 M"), /*#__PURE__*/React.createElement("span", null, "Users")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "200+"), /*#__PURE__*/React.createElement("span", null, "Countries")))), /*#__PURE__*/React.createElement("div", {
    className: "cw-hero__art",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/coinw-mark-white.svg",
    alt: ""
  })));
}
window.WebHero = WebHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/WebHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/WebMarketTable.jsx
try { (() => {
// CoinW Web — Market table
// Mirrors the spot listing pattern in the Figma "Table" / List-Item
// component — ranked rows with name + ticker, last price, 24h change,
// market cap, and a per-row Trade button.

function WebMarketTable() {
  const rows = [{
    rank: 1,
    sym: "BTC",
    name: "Bitcoin",
    price: 68421.20,
    ch: 2.41,
    cap: "1.35 T"
  }, {
    rank: 2,
    sym: "ETH",
    name: "Ethereum",
    price: 3512.08,
    ch: -0.82,
    cap: "423.8 B"
  }, {
    rank: 3,
    sym: "SOL",
    name: "Solana",
    price: 148.51,
    ch: 5.66,
    cap: "67.4 B"
  }, {
    rank: 4,
    sym: "BNB",
    name: "BNB",
    price: 612.30,
    ch: 1.08,
    cap: "92.1 B"
  }, {
    rank: 5,
    sym: "XRP",
    name: "Ripple",
    price: 0.6122,
    ch: -1.32,
    cap: "33.6 B"
  }, {
    rank: 6,
    sym: "ADA",
    name: "Cardano",
    price: 0.4825,
    ch: 0.42,
    cap: "17.1 B"
  }, {
    rank: 7,
    sym: "DOGE",
    name: "Dogecoin",
    price: 0.1568,
    ch: 8.91,
    cap: "22.6 B"
  }, {
    rank: 8,
    sym: "TON",
    name: "Toncoin",
    price: 5.412,
    ch: -2.18,
    cap: "13.6 B"
  }];
  const tabs = ["Favorites", "All", "Gainers", "Losers", "New listings", "Trending"];
  const [active, setActive] = React.useState(1);
  return /*#__PURE__*/React.createElement("section", {
    className: "cw-mkt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-mkt__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cw-mkt__title"
  }, "Markets"), /*#__PURE__*/React.createElement("div", {
    className: "cw-mkt__tabs"
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: `cw-mkt__tab${i === active ? " is-active" : ""}`,
    onClick: () => setActive(i)
  }, t)))), /*#__PURE__*/React.createElement("table", {
    className: "cw-mkt__table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "#"), /*#__PURE__*/React.createElement("th", null, "Pair"), /*#__PURE__*/React.createElement("th", {
    className: "num"
  }, "Last price"), /*#__PURE__*/React.createElement("th", {
    className: "num"
  }, "24h change"), /*#__PURE__*/React.createElement("th", {
    className: "num"
  }, "Market cap"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.sym
  }, /*#__PURE__*/React.createElement("td", {
    className: "num cw-mkt__rank"
  }, r.rank), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "cw-mkt__pair"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cw-mkt__avatar"
  }, r.sym.slice(0, 1)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, r.sym, "/USDT"), /*#__PURE__*/React.createElement("em", null, r.name)))), /*#__PURE__*/React.createElement("td", {
    className: "num cw-mkt__price"
  }, r.price.toLocaleString(undefined, {
    minimumFractionDigits: r.price < 1 ? 4 : 2
  })), /*#__PURE__*/React.createElement("td", {
    className: `num cw-mkt__delta ${r.ch >= 0 ? "is-up" : "is-down"}`
  }, r.ch >= 0 ? "+" : "", r.ch.toFixed(2), "%"), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, r.cap), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn--brand cw-btn--s"
  }, "Trade")))))));
}
window.WebMarketTable = WebMarketTable;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/WebMarketTable.jsx", error: String((e && e.message) || e) }); }

})();
