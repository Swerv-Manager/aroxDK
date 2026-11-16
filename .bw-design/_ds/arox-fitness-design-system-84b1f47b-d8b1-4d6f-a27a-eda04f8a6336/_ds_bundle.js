/* @ds-bundle: {"format":4,"namespace":"AroxFitnessDesignSystem_84b1f4","components":[{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"QuantityPicker","sourcePath":"components/commerce/QuantityPicker.jsx"},{"name":"VariantPicker","sourcePath":"components/commerce/VariantPicker.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Price","sourcePath":"components/core/Price.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"AnnouncementBar","sourcePath":"components/layout/AnnouncementBar.jsx"},{"name":"HeroBanner","sourcePath":"components/layout/HeroBanner.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"},{"name":"UspRow","sourcePath":"components/layout/UspRow.jsx"},{"name":"CartDrawer","sourcePath":"ui_kits/webshop/CartDrawer.jsx"},{"name":"AROX_PRODUCTS","sourcePath":"ui_kits/webshop/HomeScreen.jsx"},{"name":"HomeScreen","sourcePath":"ui_kits/webshop/HomeScreen.jsx"},{"name":"ProductScreen","sourcePath":"ui_kits/webshop/ProductScreen.jsx"}],"sourceHashes":{"components/commerce/ProductCard.jsx":"8cc14be4788b","components/commerce/QuantityPicker.jsx":"52dbb24e6aa0","components/commerce/VariantPicker.jsx":"91a847bf8eb6","components/core/Badge.jsx":"c86ec5352d13","components/core/Button.jsx":"52133e704814","components/core/Icon.jsx":"d691d989b0c2","components/core/Price.jsx":"e58cc7cd08b3","components/core/SectionHeading.jsx":"49cbd425abad","components/layout/AnnouncementBar.jsx":"7f21b5c9fa07","components/layout/HeroBanner.jsx":"70253af11d7d","components/layout/SiteFooter.jsx":"0c71ab93c180","components/layout/SiteHeader.jsx":"55261a9f612a","components/layout/UspRow.jsx":"9a848ff026af","mockups/black-week/BlackWeek.jsx":"583e3f29920b","mockups/black-week/image-slot.js":"fff26d081c8d","mockups/black-week/v4/BW4Pages.jsx":"b422df16f3dc","mockups/black-week/v4/BW4Parts.jsx":"ededda511f87","mockups/black-week/v4/BW4Sections.jsx":"c2639d089549","ui_kits/webshop/CartDrawer.jsx":"51beade06b21","ui_kits/webshop/HomeScreen.jsx":"3ed7c7bac0cd","ui_kits/webshop/ProductScreen.jsx":"6704f15658f1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AroxFitnessDesignSystem_84b1f4 = window.AroxFitnessDesignSystem_84b1f4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/VariantPicker.jsx
try { (() => {
/** Variant chips for Farve / Størrelse — rectangular chips, selected gets strong black border. */
function VariantPicker({
  label,
  options,
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)',
      marginBottom: 'var(--space-2)'
    }
  }, label, ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-body)',
      color: 'var(--text-muted)'
    }
  }, value)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, options.map(opt => {
    const selected = opt === value;
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      onClick: () => onChange && onChange(opt),
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: selected ? 'var(--weight-semibold)' : 'var(--weight-body)',
        color: 'var(--text-heading)',
        background: selected ? 'var(--surface-card)' : 'var(--surface-sunken)',
        border: selected ? '1.5px solid var(--line-strong)' : 'var(--border-thin)',
        borderRadius: 'var(--radius-sm)',
        padding: '8px 16px',
        cursor: 'pointer',
        transition: 'border-color var(--duration-fast) var(--ease-out)'
      }
    }, opt);
  })));
}
Object.assign(__ds_scope, { VariantPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/VariantPicker.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const LOOKS = {
  default: {
    background: 'var(--badge-default-bg)',
    color: 'var(--badge-default-fg)',
    border: 'none'
  },
  sale: {
    background: 'var(--badge-sale-bg)',
    color: 'var(--badge-sale-fg)',
    border: 'none'
  },
  soft: {
    background: 'var(--badge-soft-bg)',
    color: 'var(--badge-soft-fg)',
    border: 'var(--border-thin)'
  }
};

/** Product status chip: Bestseller, NYHED, Spar 17%, Kundernes favorit. */
function Badge({
  variant = 'default',
  children,
  style
}) {
  const look = LOOKS[variant] || LOOKS.default;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...look,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
const SIZES = {
  sm: {
    height: 36,
    padding: '0 18px',
    fontSize: 12
  },
  md: {
    height: 44,
    padding: '0 26px',
    fontSize: 13
  },
  lg: {
    height: 52,
    padding: '0 34px',
    fontSize: 14
  }
};

/** Brand button. primary = solid black pill; secondary = outline pill; link = underlined text. */
function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  disabled = false,
  fullWidth = false,
  style
}) {
  const [hover, setHover] = useState(false);
  const s = SIZES[size] || SIZES.md;
  let look;
  if (variant === 'link') {
    look = {
      background: 'none',
      border: 'none',
      padding: 0,
      height: 'auto',
      color: 'var(--text-heading)',
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      opacity: hover ? 0.65 : 1
    };
  } else if (variant === 'secondary') {
    look = {
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      background: hover ? 'var(--ink-900)' : 'transparent',
      color: hover ? 'var(--white)' : 'var(--btn-secondary-fg)',
      border: '1px solid var(--btn-secondary-border)',
      borderRadius: 'var(--radius-pill)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontWeight: 'var(--weight-bold)'
    };
  } else if (variant === 'inverse') {
    look = {
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      background: hover ? 'var(--grey-200)' : 'var(--white)',
      color: 'var(--ink-900)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontWeight: 'var(--weight-bold)'
    };
  } else {
    look = {
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      background: hover ? 'var(--btn-primary-bg-hover)' : 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-fg)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontWeight: 'var(--weight-bold)'
    };
  }
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-sans)',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.4 : look.opacity,
    transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), opacity var(--duration-fast) var(--ease-out)',
    boxSizing: 'border-box',
    textDecoration: look.textDecoration || 'none',
    ...look,
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: href ? undefined : disabled,
    style: base
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const PATHS = {
  search: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })),
  user: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  })),
  bag: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  })),
  menu: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "6",
    x2: "20",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "12",
    x2: "20",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "18",
    x2: "20",
    y2: "18"
  })),
  chevronDown: /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }),
  chevronLeft: /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }),
  chevronRight: /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  }),
  x: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })),
  plus: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  })),
  minus: /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }),
  truck: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 18H9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "18",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "18",
    r: "2"
  })),
  mapPin: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  chat: /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  })
};

/** Functional line icon (Lucide-style, 1.5px stroke, currentColor). */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  style
}) {
  const path = PATHS[name];
  if (!path) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true"
  }, path);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/commerce/QuantityPicker.jsx
try { (() => {
/** Quantity stepper: − count + in a hairline-bordered pill row. */
function QuantityPicker({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  style
}) {
  const btn = {
    width: 40,
    height: 42,
    display: 'grid',
    placeItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--text-heading)',
    padding: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: 'var(--border-thin)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "F\xE6rre",
    style: btn,
    onClick: () => onChange && onChange(Math.max(min, value - 1))
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 28,
      textAlign: 'center',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Flere",
    style: btn,
    onClick: () => onChange && onChange(Math.min(max, value + 1))
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 16
  })));
}
Object.assign(__ds_scope, { QuantityPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/QuantityPicker.jsx", error: String((e && e.message) || e) }); }

// components/core/Price.jsx
try { (() => {
/** Danish-format price: "399,00 kr" with optional struck-through Normalpris and "Fra" prefix. */
function Price({
  price,
  compareAt,
  from = false,
  size = 'md',
  showLabel = false,
  style
}) {
  const fs = size === 'lg' ? 'var(--text-lg)' : size === 'sm' ? 'var(--text-sm)' : 'var(--text-md)';
  const onSale = compareAt != null && compareAt !== '';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Salgspris"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: fs,
      fontWeight: 'var(--weight-bold)',
      color: onSale ? 'var(--text-sale)' : 'var(--text-price)'
    }
  }, from ? 'Fra ' : '', price), onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-compare)',
      textDecoration: 'line-through'
    }
  }, compareAt));
}
Object.assign(__ds_scope, { Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Price.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
const {
  useState
} = React;
/** Shop product card: white tile, hover image swap, badges top-left, swatch dots, Danish price. */
function ProductCard({
  image,
  hoverImage,
  title,
  price,
  compareAt,
  from = false,
  badges = [],
  saleBadge,
  colors = [],
  moreColors = 0,
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: hover && hoverImage ? 0 : 1,
      transition: 'opacity var(--duration-base) var(--ease-out)'
    }
  }), hoverImage && /*#__PURE__*/React.createElement("img", {
    src: hoverImage,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: hover ? 1 : 0,
      transition: 'opacity var(--duration-base) var(--ease-out)'
    }
  }), (badges.length > 0 || saleBadge) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, badges.map(b => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: b
  }, b)), saleBadge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "sale"
  }, saleBadge))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-3)',
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-heading)',
      textDecoration: hover ? 'underline' : 'none',
      textUnderlineOffset: '3px'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Price, {
    price: price,
    compareAt: compareAt,
    from: from,
    size: "sm",
    showLabel: true
  }), colors.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 2
    }
  }, colors.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    title: c.name,
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: c.hex,
      border: '1px solid rgba(0,0,0,0.18)'
    }
  })), moreColors > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "+", moreColors))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/** Section heading row: uppercase title left, "Se alle" link right. */
function SectionHeading({
  title,
  linkLabel = 'Se alle',
  onLink,
  href,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), (onLink || href) && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "link",
    onClick: onLink,
    href: href
  }, linkLabel));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/layout/AnnouncementBar.jsx
try { (() => {
const DEFAULT_ITEMS = ['1-3 dages levering med GLS', 'Over 20.000 glade kunder', 'Fri fragt v. køb over 799,-'];

/** Black trust-signal ticker pinned above the header. Items separated by ∙, scrolling continuously. */
function AnnouncementBar({
  items = DEFAULT_ITEMS,
  scrolling = true,
  style
}) {
  const row = key => /*#__PURE__*/React.createElement("div", {
    key: key,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: 0
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 28px'
    }
  }, item), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "\u2219"))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-inverse)',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      height: 36,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes arox-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      animation: scrolling ? 'arox-ticker 28s linear infinite' : 'none',
      justifyContent: scrolling ? undefined : 'center',
      width: scrolling ? undefined : '100%'
    }
  }, row('a'), scrolling && row('b')));
}
Object.assign(__ds_scope, { AnnouncementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// components/layout/HeroBanner.jsx
try { (() => {
/** Full-bleed hero/promo band: dark gym photo, scrim, white uppercase copy, inverse pill CTA. */
function HeroBanner({
  image,
  overline,
  title,
  ctaLabel,
  onCta,
  height = 480,
  align = 'center',
  style
}) {
  const alignment = align === 'left' ? {
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: '0 6%'
  } : {
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 24px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      overflow: 'hidden',
      background: 'var(--bg-inverse)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(10,10,10,0.35)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'var(--space-4)',
      color: 'var(--text-inverse)',
      ...alignment
    }
  }, overline && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      opacity: 0.9
    }
  }, overline), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(32px, 5vw, var(--text-3xl))',
      fontWeight: 'var(--weight-black)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--text-inverse)',
      maxWidth: '16ch'
    }
  }, title), ctaLabel && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "inverse",
    onClick: onCta
  }, ctaLabel))));
}
Object.assign(__ds_scope, { HeroBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/HeroBanner.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
const {
  useState
} = React;
const MENU_LINKS = ['Tryk af logo på tøj?', 'Bliv B2B forhandler', 'Find en butik nær dig', 'Ofte Stillede Spørgsmål', 'Handelsbetingelser', 'Blog', 'Returportal'];
function FooterLink({
  label
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: 'var(--text-inverse)',
      opacity: hover ? 1 : 0.72,
      textDecoration: hover ? 'underline' : 'none',
      textUnderlineOffset: '3px',
      fontSize: 'var(--text-sm)',
      transition: 'opacity var(--duration-fast) var(--ease-out)'
    }
  }, label);
}

/** Black site footer: white wordmark + VIP newsletter, letter-spaced M E N U / K U N D E S E R V I C E columns. */
function SiteFooter({
  logoSrc,
  menuLinks = MENU_LINKS,
  style
}) {
  const [email, setEmail] = useState('');
  const heading = {
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: 'var(--tracking-menu)',
    textTransform: 'uppercase',
    color: 'var(--text-inverse)',
    marginBottom: 'var(--space-4)'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-inverse)',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--gutter) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", null, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "AROX",
    style: {
      height: 24,
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-black)',
      fontSize: 26,
      fontStyle: 'italic',
      letterSpacing: '0.04em'
    }
  }, "AROX\xAE"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "Tilmeld dig VIP nyhedsbrevet"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-1)',
      fontSize: 'var(--text-sm)',
      opacity: 0.72,
      maxWidth: '36ch'
    }
  }, "Modtag rabatkoder, fri fragt kampagner, eksklusive tilbud og meget mere"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "E-mail",
    style: {
      flex: 1,
      maxWidth: 260,
      height: 44,
      padding: '0 16px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(255,255,255,0.3)',
      background: 'transparent',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      outline: 'none',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "inverse"
  }, "Abonn\xE9r"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: heading
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, menuLinks.map(label => /*#__PURE__*/React.createElement(FooterLink, {
    key: label,
    label: label
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: heading
  }, "Kundeservice"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Email:"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.72
    }
  }, "support@aroxfitness.com")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Telefon:"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.72
    }
  }, "+45 21 71 62 75")), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.72
    }
  }, "Hverdage: 12:00 - 15:00")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--gutter) var(--space-6)',
      fontSize: 'var(--text-xs)',
      opacity: 0.5
    }
  }, "\xA9 2026, Arox Fitness Denmark"));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
const {
  useState
} = React;
const DEFAULT_NAV = ['Træningsudstyr', 'Træningstøj'];
function NavItem({
  label,
  active,
  onClick
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      padding: '6px 0',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-heading)',
      borderBottom: active || hover ? '2px solid var(--ink-900)' : '2px solid transparent'
    }
  }, label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 14
  }));
}
function IconBtn({
  name,
  onClick,
  badge
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      background: 'none',
      border: 'none',
      padding: 6,
      cursor: 'pointer',
      color: 'var(--text-heading)',
      opacity: hover ? 0.6 : 1,
      transition: 'opacity var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: 21
  }), badge != null && badge > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      right: -2,
      minWidth: 16,
      height: 16,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ink-900)',
      color: 'var(--white)',
      fontSize: 10,
      fontWeight: 'var(--weight-bold)',
      display: 'grid',
      placeItems: 'center',
      padding: '0 4px',
      fontFamily: 'var(--font-sans)'
    }
  }, badge));
}

/** White sticky shop header: nav left, AROX wordmark center, search/account/cart right. */
function SiteHeader({
  logoSrc,
  nav = DEFAULT_NAV,
  activeNav,
  cartCount = 0,
  onNav,
  onLogo,
  onSearch,
  onAccount,
  onCart,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: 'var(--border-thin)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 64,
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, nav.map(label => /*#__PURE__*/React.createElement(NavItem, {
    key: label,
    label: label,
    active: label === activeNav,
    onClick: () => onNav && onNav(label)
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: onLogo,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'block'
    },
    "aria-label": "Arox Fitness Denmark"
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "AROX",
    style: {
      height: 22,
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-black)',
      fontSize: 24,
      letterSpacing: '0.04em',
      color: 'var(--text-heading)',
      fontStyle: 'italic'
    }
  }, "AROX", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      verticalAlign: 'super'
    }
  }, "\xAE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    name: "search",
    onClick: onSearch
  }), /*#__PURE__*/React.createElement(IconBtn, {
    name: "user",
    onClick: onAccount
  }), /*#__PURE__*/React.createElement(IconBtn, {
    name: "bag",
    onClick: onCart,
    badge: cartCount
  }))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/UspRow.jsx
try { (() => {
const DEFAULT_ITEMS = [{
  icon: 'truck',
  title: 'Fri fragt over 799,- kr',
  body: 'Vi leverer med GLS hos Arox Fitness'
}, {
  icon: 'mapPin',
  title: 'Over 50 danske forhandlere',
  body: 'Shop Arox hos en af vores forhandlere'
}, {
  icon: 'chat',
  title: 'Live-chat hver dag 09-15',
  body: 'Vi sidder klar til at hjælpe dig!'
}];

/** Row of trust USPs (icon + bold title + one-liner) shown above the footer. */
function UspRow({
  items = DEFAULT_ITEMS,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      gap: 'var(--space-6)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      justifyItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-2)'
    }
  }, item.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: item.icon,
    size: 26,
    style: {
      color: 'var(--text-heading)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, item.body))));
}
Object.assign(__ds_scope, { UspRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/UspRow.jsx", error: String((e && e.message) || e) }); }

// mockups/black-week/BlackWeek.jsx
try { (() => {
const {
  Button,
  Badge,
  Icon,
  SiteFooter
} = window.AroxFitnessDesignSystem_84b1f4;
const A = '../../assets/';
const DATES = 'Mandag 23.11 – søndag 29.11.2026 kl. 23.59';
const bw = {
  display: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-display)',
    lineHeight: 0.95,
    margin: 0,
    color: 'var(--text-inverse)',
    textWrap: 'balance'
  },
  over: {
    fontSize: 'var(--text-xs)',
    fontWeight: 700,
    letterSpacing: 'var(--tracking-wide)',
    textTransform: 'uppercase',
    color: 'var(--text-inverse)'
  },
  body: {
    fontSize: 'var(--text-base)',
    lineHeight: 'var(--leading-body)',
    color: 'var(--ink-300)',
    margin: 0,
    textWrap: 'pretty'
  },
  wrap: m => ({
    maxWidth: 'var(--page-max)',
    margin: '0 auto',
    padding: m ? '0 20px' : '0 var(--gutter)',
    boxSizing: 'border-box',
    width: '100%'
  })
};
function SaleChip({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--red-600)',
      color: 'var(--white)',
      fontSize: 'var(--text-xs)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, children);
}
function OutlineInverse({
  children,
  size = 'md',
  onClick
}) {
  const [h, setH] = React.useState(false);
  const pad = size === 'lg' ? '0 28px' : '0 22px';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      height: size === 'lg' ? 52 : 44,
      padding: pad,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--white)',
      background: h ? 'var(--white)' : 'transparent',
      color: h ? 'var(--ink-900)' : 'var(--white)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all var(--duration-fast) var(--ease-out)'
    }
  }, children);
}
function BWAnnouncement({
  m
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--black)',
      borderBottom: '1px solid #222',
      color: 'var(--white)',
      fontSize: m ? 11 : 'var(--text-sm)',
      minHeight: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      padding: '6px 12px',
      textAlign: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--white)',
      background: 'var(--red-600)',
      padding: '2px 8px',
      borderRadius: 'var(--radius-sm)'
    }
  }, "BLACK WEEK"), /*#__PURE__*/React.createElement("span", null, m ? 'Man 23.11 – søn 29.11 kl. 23.59' : DATES));
}
function BWHeader({
  m,
  cart,
  onCart
}) {
  const icon = (name, onClick, badge) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      position: 'relative',
      background: 'none',
      border: 'none',
      padding: 10,
      color: 'var(--white)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: 21
  }), badge > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 2,
      minWidth: 16,
      height: 16,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      color: 'var(--ink-900)',
      fontSize: 10,
      fontWeight: 700,
      display: 'grid',
      placeItems: 'center'
    }
  }, badge));
  const nav = ['Træningsudstyr', 'Træningstøj'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--black)',
      borderBottom: '1px solid #222'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw.wrap(m),
      height: m ? 56 : 68,
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center'
    }
  }, m ? /*#__PURE__*/React.createElement("div", null, icon('menu')) : /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'center'
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--white)',
      fontWeight: 500,
      fontSize: 'var(--text-base)'
    }
  }, n, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 14
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--white)',
      fontWeight: 800,
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--tracking-wide)',
      borderBottom: '2px solid var(--red-600)',
      paddingBottom: 2
    }
  }, "BLACK WEEK")), /*#__PURE__*/React.createElement("img", {
    src: A + 'arox-logo-white.png',
    alt: "AROX",
    style: {
      height: m ? 18 : 22,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, !m && icon('search'), !m && icon('user'), icon('bag', onCart, cart))));
}
function BWHero({
  m,
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: m ? 620 : 720,
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      background: 'var(--black)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'black-week/hero-ringdip.jpg',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: m ? '60% center' : 'center 25%',
      filter: 'grayscale(1) contrast(1.1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: m ? 'linear-gradient(180deg, rgba(10,10,10,.35) 0%, rgba(10,10,10,.55) 45%, rgba(10,10,10,.96) 100%)' : 'linear-gradient(90deg, rgba(10,10,10,.92) 0%, rgba(10,10,10,.6) 55%, rgba(10,10,10,.25) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw.wrap(m),
      position: 'relative',
      padding: m ? '96px 20px 40px' : '160px var(--gutter) 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SaleChip, null, "23.11 \u2013 29.11"), /*#__PURE__*/React.createElement("span", {
    style: bw.over
  }, "Slutter s\xF8ndag kl. 23.59")), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...bw.display,
      fontSize: m ? 76 : 160,
      marginTop: m ? 18 : 24,
      lineHeight: 0.92,
      paddingTop: '0.06em'
    }
  }, "Black", /*#__PURE__*/React.createElement("br", null), "Week."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...bw.display,
      fontSize: m ? 22 : 32,
      lineHeight: 1.1,
      marginTop: m ? 20 : 28,
      maxWidth: '22ch'
    }
  }, "3 for 2 og 4 for 2 p\xE5 tr\xE6ningst\xF8j. Limited gear, kun denne uge."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: m ? 28 : 36,
      flexDirection: m ? 'column' : 'row'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    fullWidth: m,
    onClick: () => go('toej')
  }, "Se tr\xE6ningst\xF8jet"), /*#__PURE__*/React.createElement(OutlineInverse, {
    size: "lg",
    onClick: () => go('limited')
  }, "Se carbon grips"))));
}
const OFFERS = [{
  n: '01',
  kicker: 'Træningstøj',
  big: '3 for 2',
  body: 'Vælg tre stykker træningstøj. Betal for to.',
  cta: 'Vælg tre stykker tøj',
  to: 'toej'
}, {
  n: '02',
  kicker: 'Træningstøj',
  big: '4 for 2',
  body: 'Vælg fire stykker træningstøj. Betal for to.',
  cta: 'Vælg fire stykker tøj',
  to: 'toej'
}, {
  n: '03',
  kicker: 'Single offer',
  big: 'Carbon grips',
  small: true,
  body: 'Udvalgte items, der kun kommer i Black Week.',
  cta: 'Se carbon grips',
  to: 'limited'
}];
function BWOffers({
  m,
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...bw.wrap(m),
      padding: m ? '48px 20px' : '96px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3, minmax(0,1fr))',
      gap: m ? 12 : 'var(--space-5)'
    }
  }, OFFERS.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.n,
    style: {
      background: 'var(--ink-900)',
      border: '1px solid #262626',
      borderRadius: 'var(--radius-md)',
      padding: m ? 24 : 32,
      display: 'flex',
      flexDirection: 'column',
      gap: m ? 14 : 20,
      minHeight: m ? 0 : 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...bw.over,
      color: 'var(--ink-300)'
    }
  }, o.n, " / ", o.kicker), /*#__PURE__*/React.createElement(SaleChip, null, "Tilbud")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw.display,
      fontSize: o.small ? m ? 44 : 54 : m ? 56 : 80,
      marginTop: m ? 6 : 'auto'
    }
  }, o.big), /*#__PURE__*/React.createElement("p", {
    style: {
      ...bw.body,
      color: 'var(--grey-200)',
      fontSize: 'var(--text-md)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--white)'
    }
  }, "[PROPOSAL]"), " ", o.body), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OutlineInverse, {
    onClick: () => go(o.to)
  }, o.cta))))));
}
const APPAREL = [{
  id: 'sportstech-tshirt',
  title: 'SportsTech T-shirt',
  img: 'sportstech-t-shirt-sort.png',
  pos: 'center'
}, {
  id: 'dri-tech-shorts',
  title: 'Dri tech shorts',
  img: 'dri-tech-shorts-sort.png',
  pos: 'center'
}, {
  id: 'performance-tights',
  title: 'Performance tights',
  img: 'performance-tights-sort.jpg',
  pos: 'center'
}, {
  id: 'sportstech-top',
  title: 'SportsTech top',
  img: 'toej-04312.jpg',
  pos: 'center 30%'
}];
function SectionHead({
  m,
  over,
  title,
  link
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 16,
      marginBottom: m ? 20 : 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw.over,
      color: 'var(--ink-300)',
      marginBottom: 10
    }
  }, over), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...bw.display,
      fontSize: m ? 34 : 'var(--text-2xl)'
    }
  }, title)), link && !m && /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--white)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      textUnderlineOffset: 3
    }
  }, link));
}
function ApparelCard({
  m,
  p,
  prefix
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'black-week/' + p.img,
    alt: p.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: p.pos,
      display: 'block',
      transform: h ? 'scale(1.03)' : 'none',
      transition: 'transform var(--duration-base, 300ms) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(SaleChip, null, "[PROPOSAL] 3 for 2 \xB7 4 for 2"))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--white)',
      fontSize: m ? 'var(--text-sm)' : 'var(--text-md)',
      fontWeight: 500,
      textDecoration: h ? 'underline' : 'none',
      textUnderlineOffset: 3
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--grey-200)',
      fontSize: m ? 'var(--text-sm)' : 'var(--text-base)',
      fontWeight: 600
    }
  }, "[PRIS]"));
}
function BWApparel({
  m,
  prefix,
  refEl
}) {
  return /*#__PURE__*/React.createElement("section", {
    ref: refEl,
    style: {
      ...bw.wrap(m),
      paddingBottom: m ? 56 : 112
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    m: m,
    over: "3 for 2 \xB7 4 for 2",
    title: "Tr\xE6ningst\xF8j",
    link: "Se alt tr\xE6ningst\xF8j"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? 'repeat(2, minmax(0,1fr))' : 'repeat(4, minmax(0,1fr))',
      gap: m ? '24px 12px' : 'var(--space-5)'
    }
  }, APPAREL.map(p => /*#__PURE__*/React.createElement(ApparelCard, {
    key: p.id,
    m: m,
    p: p,
    prefix: prefix
  }))), m && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(OutlineInverse, null, "Se alt tr\xE6ningst\xF8j")));
}
function BWBand({
  m
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--black)',
      borderTop: '1px solid #2a2a2a',
      borderBottom: '1px solid #2a2a2a',
      padding: m ? '28px 20px' : '44px var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw.display,
      fontSize: m ? 40 : 96
    }
  }, "Lavet til at holde."));
}
function BWLimited({
  m,
  prefix,
  refEl,
  onAdd
}) {
  const [size, setSize] = React.useState(null);
  const [added, setAdded] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    ref: refEl,
    style: {
      ...bw.wrap(m),
      padding: m ? '56px 20px' : '112px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.1fr) minmax(0,1fr)',
      gap: m ? 28 : 72,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: '#f0f0f0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'black-week/grips-carbon-limited.png',
    alt: "Carbon limited sort grips pro",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: m ? 16 : 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SaleChip, null, "Single offer"), /*#__PURE__*/React.createElement(Badge, {
    variant: "soft"
  }, "Limited")), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...bw.display,
      fontSize: m ? 40 : 64
    }
  }, "Tilbud kun i Black Week.", /*#__PURE__*/React.createElement("br", null), "I sort carbon."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--white)',
      fontSize: 'var(--text-md)',
      fontWeight: 500
    }
  }, "Carbon limited sort grips pro"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--white)',
      fontSize: 'var(--text-xl)',
      fontWeight: 800
    }
  }, "299 kr")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw.over,
      color: 'var(--ink-300)',
      marginBottom: 10
    }
  }, "St\xF8rrelse"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['M', 'L', 'XL'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => {
      setSize(s);
      setAdded(false);
    },
    style: {
      width: 56,
      height: 48,
      borderRadius: 'var(--radius-md)',
      border: size === s ? '1px solid var(--white)' : '1px solid #3a3a3a',
      background: size === s ? 'var(--white)' : 'transparent',
      color: size === s ? 'var(--ink-900)' : 'var(--white)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    fullWidth: m,
    disabled: !size,
    onClick: () => {
      onAdd();
      setAdded(true);
    }
  }, size ? `Læg grips i ${size} i kurven` : 'Vælg din størrelse'), added && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--grey-200)',
      fontSize: 'var(--text-sm)'
    }
  }, "Lagt i kurven.")))));
}
function BWSebastian({
  m
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)',
      borderTop: '1px solid #222',
      borderBottom: '1px solid #222'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw.wrap(m),
      padding: m ? '56px 20px' : '112px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: m ? 16 : 24,
      maxWidth: 680,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw.over,
      color: 'var(--ink-300)'
    }
  }, "Fra Sebastian"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...bw.display,
      fontSize: m ? 36 : 56
    }
  }, "\xC9n uge.", /*#__PURE__*/React.createElement("br", null), "\xC9n farve."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...bw.body,
      color: 'var(--grey-200)',
      fontSize: 'var(--text-md)',
      maxWidth: '52ch'
    }
  }, "Jeg ville lave noget til Black Week, som ikke bare er en rabatkode. Derfor har vi lavet vores grips pro i sort carbon. De kommer kun i Black Week."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...bw.body,
      color: 'var(--grey-200)',
      fontSize: 'var(--text-md)',
      maxWidth: '52ch'
    }
  }, "Er du i tvivl om model eller st\xF8rrelse, s\xE5 skriv til mig p\xE5 live-chatten. Jeg hj\xE6lper gerne."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--white)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.5
    }
  }, "De bedste hilsner,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Sebastian"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-300)'
    }
  }, "Arox Fitness")))));
}
const TRUST = [{
  icon: 'truck',
  title: 'GLS-levering'
}, {
  icon: 'mapPin',
  title: 'Dansk udviklet'
}, {
  icon: 'chat',
  title: 'Live chat'
}, {
  icon: 'user',
  title: 'Over 20.000 kunder'
}, {
  icon: 'bag',
  title: 'Fri fragt over 799 kr.'
}];
function BWTrust({
  m
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...bw.wrap(m),
      padding: m ? '48px 20px' : '80px var(--gutter)',
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(5, minmax(0,1fr))',
      gap: m ? 24 : 'var(--space-6)'
    }
  }, TRUST.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.title,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid #3a3a3a',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--white)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--white)',
      fontWeight: 700,
      fontSize: 'var(--text-base)'
    }
  }, t.title)))));
}
function BWMobileFooter() {
  const head = {
    fontSize: 'var(--text-sm)',
    fontWeight: 600,
    letterSpacing: 'var(--tracking-menu)',
    textTransform: 'uppercase',
    color: 'var(--white)',
    marginBottom: 12
  };
  const links = ['Ofte Stillede Spørgsmål', 'Handelsbetingelser', 'Returportal', 'Find en butik nær dig'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--black)',
      borderTop: '1px solid #222',
      color: 'var(--white)',
      padding: '48px 20px 24px',
      display: 'grid',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'arox-logo-white.png',
    alt: "AROX",
    style: {
      height: 20
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, "Tilmeld dig VIP nyhedsbrevet"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-300)',
      marginTop: 4
    }
  }, "Modtag rabatkoder, fri fragt kampagner, eksklusive tilbud og meget mere"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "E-mail",
    style: {
      flex: 1,
      minWidth: 0,
      height: 44,
      padding: '0 16px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(255,255,255,.3)',
      background: 'transparent',
      color: 'var(--white)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse"
  }, "Abonn\xE9r"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--grey-200)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Kundeservice"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--grey-200)',
      display: 'grid',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "support@aroxfitness.com"), /*#__PURE__*/React.createElement("span", null, "+45 21 71 62 75"), /*#__PURE__*/React.createElement("span", null, "Hverdage: 12:00 - 15:00"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)'
    }
  }, "\xA9 2026, Arox Fitness Denmark"));
}
function BlackWeekHome({
  mobile: m = false,
  prefix = 'd'
}) {
  const [cart, setCart] = React.useState(0);
  const root = React.useRef(null),
    toej = React.useRef(null),
    limited = React.useRef(null);
  const go = k => {
    const el = (k === 'toej' ? toej : limited).current;
    const sc = root.current;
    if (el && sc && m) sc.scrollTo({
      top: el.offsetTop - 56,
      behavior: 'smooth'
    });else if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 68,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: root,
    "data-screen-label": m ? 'Black Week mobil' : 'Black Week desktop',
    style: {
      height: m ? '100%' : 'auto',
      overflowY: m ? 'auto' : 'visible',
      background: 'var(--black)',
      fontFamily: 'var(--font-sans)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(BWAnnouncement, {
    m: m
  }), /*#__PURE__*/React.createElement(BWHeader, {
    m: m,
    cart: cart
  }), /*#__PURE__*/React.createElement(BWHero, {
    m: m,
    go: go
  }), /*#__PURE__*/React.createElement(BWOffers, {
    m: m,
    go: go
  }), /*#__PURE__*/React.createElement(BWApparel, {
    m: m,
    prefix: prefix,
    refEl: toej
  }), /*#__PURE__*/React.createElement(BWBand, {
    m: m
  }), /*#__PURE__*/React.createElement(BWLimited, {
    m: m,
    prefix: prefix,
    refEl: limited,
    onAdd: () => setCart(c => c + 1)
  }), /*#__PURE__*/React.createElement(BWSebastian, {
    m: m
  }), /*#__PURE__*/React.createElement(BWTrust, {
    m: m
  }), m ? /*#__PURE__*/React.createElement(BWMobileFooter, null) : /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: A + 'arox-logo-white.png',
    style: {
      borderTop: '1px solid #222'
    }
  }));
}
Object.assign(window, {
  BlackWeekHome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "mockups/black-week/BlackWeek.jsx", error: String((e && e.message) || e) }); }

// mockups/black-week/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "mockups/black-week/image-slot.js", error: String((e && e.message) || e) }); }

// mockups/black-week/v4/BW4Pages.jsx
try { (() => {
const {
  SiteHeader: BW4SiteHeader,
  SiteFooter: BW4SiteFooter,
  AnnouncementBar: BW4Announcement,
  CartDrawer: BW4CartDrawer,
  ProductCard: BW4PCard
} = window.AroxFitnessDesignSystem_84b1f4;
const BW4_COLL = {
  limited: {
    title: 'Limited drops',
    over: 'Single offer · kun i Black Week',
    body: 'Blackout-udgaver i sort carbon, der kun kommer i Black Week.',
    steps: ['Vælg dit limited drop', 'Vælg størrelse', 'Kommer ikke tilbage efter Black Week']
  },
  '3for2': {
    title: '3 for 2',
    over: 'Træningstøj',
    body: '[PROPOSAL] Vælg tre stykker træningstøj. Betal for to.',
    steps: ['Vælg tre stykker træningstøj', 'Læg dem i kurven', '[PROPOSAL] Rabatten trækkes i kassen']
  },
  '4for2': {
    title: '4 for 2',
    over: 'Mix alt',
    body: 'Mix alt i 4 for 2. [PROPOSAL] Vælg fire, betal for to.',
    steps: ['Mix alt, du vil have', 'Læg fire i kurven', '[PROPOSAL] Rabatten trækkes i kassen']
  }
};
function BW4CrossTile({
  m,
  o,
  go
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => go(o.k),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      minHeight: m ? 180 : 260,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'flex-end',
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: bw4img(o.img),
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: o.pos,
      transform: h ? 'scale(1.03)' : 'none',
      transition: 'transform var(--duration-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(10,10,10,.1) 20%, rgba(10,10,10,.85) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: m ? 16 : 24,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.over,
      color: 'var(--grey-200)',
      marginBottom: 6
    }
  }, "Hop videre"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.display,
      color: 'var(--white)',
      fontSize: m ? 32 : 52,
      lineHeight: 0.9
    }
  }, o.big)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: m ? 40 : 48,
      height: m ? 40 : 48,
      borderRadius: 999,
      background: h ? 'var(--white)' : 'transparent',
      border: '1px solid var(--white)',
      color: h ? 'var(--ink-900)' : 'var(--white)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0,
      transition: 'all var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(BW4NS.Icon, {
    name: "chevronRight",
    size: 18
  }))));
}
function BW4LimitedPlaceholder({
  m,
  n
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--white)',
      border: '1px dashed var(--ink-300)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: `bw4-limited-${n}-${m ? 'm' : 'd'}`,
    shape: "rect",
    placeholder: `Limited drop ${n}: afventer`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, "[LIMITED DROP AFVENTER]"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--ink-500)'
    }
  }, "[PRIS AFVENTER]"));
}
function BW4Collection({
  m,
  st,
  k,
  go,
  onAdd
}) {
  const c = BW4_COLL[k];
  const others = BW4_CATS.filter(x => x.k !== k).map(x => BW4_OFFERS[x.k]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--black)',
      borderBottom: '1px solid #222'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.wrap(m),
      padding: m ? '28px 16px 32px' : '56px var(--gutter) 64px',
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) auto',
      gap: m ? 20 : 48,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: m ? 12 : 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-300)',
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      textDecoration: 'underline',
      textUnderlineOffset: 2
    }
  }, "Black Week"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--white)'
    }
  }, c.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(BW4SaleChip, {
    tone: k === 'limited' ? 'white' : 'sale'
  }, k === 'limited' ? 'Limited' : 'Tilbud'), /*#__PURE__*/React.createElement("span", {
    style: {
      ...bw4.over,
      color: 'var(--ink-300)',
      alignSelf: 'center'
    }
  }, c.over)), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...bw4.display,
      color: 'var(--white)',
      fontSize: m ? 64 : 120,
      lineHeight: 0.88,
      paddingTop: '0.04em'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...bw4.body,
      color: 'var(--grey-200)',
      fontSize: m ? 'var(--text-base)' : 'var(--text-md)',
      maxWidth: '48ch'
    }
  }, c.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...bw4.over,
      color: 'var(--ink-300)'
    }
  }, st.countLabel), /*#__PURE__*/React.createElement(BW4Countdown, {
    st: st,
    m: m,
    size: m ? 'sm' : 'lg'
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--white)',
      borderBottom: 'var(--border-thin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.wrap(m),
      padding: m ? '16px' : '20px var(--gutter)',
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3, minmax(0,1fr))',
      gap: m ? 10 : 24
    }
  }, c.steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 999,
      background: 'var(--ink-900)',
      color: 'var(--white)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 13,
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, s))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.wrap(m),
      padding: m ? '24px 16px 48px' : '40px var(--gutter) 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: m ? 16 : 24,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", null, k === 'limited' ? '1 produkt' : `${BW4_APPAREL.length} produkter`), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, "Sort\xE9r: Anbefalet ", /*#__PURE__*/React.createElement(BW4NS.Icon, {
    name: "chevronDown",
    size: 14
  }))), k === 'limited' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? 'repeat(2, minmax(0,1fr))' : 'repeat(4, minmax(0,1fr))',
      gap: m ? '20px 10px' : 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: m ? 'span 2' : 'span 2',
      background: 'var(--black)',
      borderRadius: 'var(--radius-lg)',
      padding: m ? 16 : 32,
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1fr)',
      gap: m ? 16 : 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--grey-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BW4_GRIPS.image,
    alt: BW4_GRIPS.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement(BW4LimitedBuy, {
    m: m,
    st: st,
    onAdd: onAdd
  })), /*#__PURE__*/React.createElement(BW4LimitedPlaceholder, {
    m: m,
    n: 2
  }), /*#__PURE__*/React.createElement(BW4LimitedPlaceholder, {
    m: m,
    n: 3
  })) : /*#__PURE__*/React.createElement(BW4ApparelGrid, {
    m: m,
    onAdd: onAdd
  }))), /*#__PURE__*/React.createElement(BW4GiftBanner, {
    m: m,
    compact: true
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.wrap(m),
      padding: m ? '48px 16px' : '96px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(BW4SectionHead, {
    m: m,
    over: "Flere Black Week-tilbud",
    title: "Hop til n\xE6ste kategori"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(2, minmax(0,1fr))',
      gap: m ? 10 : 'var(--space-4)'
    }
  }, others.map(o => /*#__PURE__*/React.createElement(BW4CrossTile, {
    key: o.k,
    m: m,
    o: o,
    go: go
  }))))));
}
function BW4Home({
  m,
  st,
  go,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BW4Hero, {
    m: m,
    st: st,
    go: go
  }), /*#__PURE__*/React.createElement(BW4Marquee, {
    m: m
  }), /*#__PURE__*/React.createElement(BW4Timeline, {
    m: m,
    st: st
  }), /*#__PURE__*/React.createElement(BW4Offers, {
    m: m,
    go: go,
    st: st
  }), /*#__PURE__*/React.createElement(BW4GiftBanner, {
    m: m
  }), /*#__PURE__*/React.createElement(BW4Apparel, {
    m: m,
    go: go,
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement(BW4Limited, {
    m: m,
    st: st,
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement(BW4Athlete, {
    m: m,
    go: go
  }));
}
function BlackWeekV4({
  state = 'open',
  mobile: m = false,
  startView = 'home'
}) {
  const st = BW4_STATES[state];
  const [view, setView] = React.useState(startView);
  const [cart, setCart] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const sc = React.useRef(null);
  const go = v => {
    setView(v);
    if (sc.current) sc.current.scrollTo({
      top: 0
    });
  };
  const onAdd = (p, size) => {
    setCart(c => {
      const i = c.findIndex(it => it.product.id === p.id && it.størrelse === size);
      if (i >= 0) return c.map((it, j) => j === i ? {
        ...it,
        antal: it.antal + 1
      } : it);
      return [...c, {
        product: p,
        antal: 1,
        størrelse: size
      }];
    });
    setOpen(true);
  };
  const count = cart.reduce((s, it) => s + it.antal, 0);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": `${state} ${m ? 'mobil' : 'desktop'} ${view}`,
    style: {
      position: 'relative',
      height: '100%',
      overflow: 'hidden',
      transform: 'translateZ(0)',
      background: 'var(--grey-100)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: sc,
    style: {
      height: '100%',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(BW4Announcement, {
    items: st.ann
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30
    }
  }, m ? /*#__PURE__*/React.createElement(BW4MobileHeader, {
    cart: count,
    onCart: () => setOpen(true),
    onLogo: () => go('home')
  }) : /*#__PURE__*/React.createElement(BW4SiteHeader, {
    logoSrc: BW4A + 'arox-logo-black.png',
    cartCount: count,
    onCart: () => setOpen(true),
    onLogo: () => go('home')
  }), /*#__PURE__*/React.createElement(BW4CategoryBar, {
    m: m,
    st: st,
    view: view,
    onView: go
  })), view === 'home' ? /*#__PURE__*/React.createElement(BW4Home, {
    m: m,
    st: st,
    go: go,
    onAdd: onAdd
  }) : /*#__PURE__*/React.createElement(BW4Collection, {
    m: m,
    st: st,
    k: view,
    go: go,
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement(BW4Trust, {
    m: m
  }), m ? /*#__PURE__*/React.createElement(BW4MobileFooter, null) : /*#__PURE__*/React.createElement(BW4SiteFooter, {
    logoSrc: BW4A + 'arox-logo-white.png'
  })), /*#__PURE__*/React.createElement(BW4CartDrawer, {
    open: open,
    items: cart,
    onClose: () => setOpen(false),
    onQty: (i, v) => setCart(c => c.map((it, j) => j === i ? {
      ...it,
      antal: v
    } : it).filter(it => it.antal > 0)),
    onRemove: i => setCart(c => c.filter((_, j) => j !== i))
  }));
}
Object.assign(window, {
  BlackWeekV4
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "mockups/black-week/v4/BW4Pages.jsx", error: String((e && e.message) || e) }); }

// mockups/black-week/v4/BW4Parts.jsx
try { (() => {
const BW4NS = window.AroxFitnessDesignSystem_84b1f4;
const BW4A = '../../assets/';
const bw4img = f => BW4A + 'black-week/' + f;
const BW4_D = {
  presale: new Date(2026, 10, 20, 12, 0, 0),
  open: new Date(2026, 10, 22, 20, 0, 0),
  end: new Date(2026, 10, 30, 23, 59, 0)
};
const BW4_STATES = {
  teaser: {
    key: 'teaser',
    simNow: null,
    target: BW4_D.presale,
    countLabel: 'Early access åbner om',
    barNote: 'Early access fre 20.11 kl. 12:00',
    ann: ['Black Week early access: tilmeld dig senest torsdag 19.11', 'Tilmeldte shopper først: fredag 20.11 kl. 12:00']
  },
  presale: {
    key: 'presale',
    simNow: BW4_D.presale,
    target: BW4_D.open,
    countLabel: 'Åbner for alle om',
    barNote: 'Early access · kun for tilmeldte',
    ann: ['Early access er åben: kun for tilmeldte', 'Åben for alle søndag 22.11 kl. 20:00']
  },
  open: {
    key: 'open',
    simNow: BW4_D.open,
    target: BW4_D.end,
    countLabel: 'Black Week slutter om',
    barNote: 'Til og med man 30.11 kl. 23:59',
    ann: ['Black Week er åben for alle', 'Til og med Cyber Monday, mandag 30.11 kl. 23:59']
  }
};
const BW4_CATS = [{
  k: 'limited',
  label: 'Limited drops'
}, {
  k: '3for2',
  label: '3 for 2'
}, {
  k: '4for2',
  label: '4 for 2'
}];
const BW4_APPAREL = [{
  id: 'sportstech-tshirt',
  title: 'SportsTech T-shirt',
  image: bw4img('sportstech-t-shirt-sort.png'),
  hoverImage: bw4img('toej-04012.jpg')
}, {
  id: 'dri-tech-shorts',
  title: 'Dri tech shorts',
  image: bw4img('dri-tech-shorts-sort.png'),
  hoverImage: bw4img('toej-04063.jpg')
}, {
  id: 'performance-tights',
  title: 'Performance tights',
  image: bw4img('performance-tights-sort.jpg'),
  hoverImage: bw4img('toej-04293.jpg')
}, {
  id: 'sportstech-top',
  title: 'SportsTech top',
  image: bw4img('toej-04312.jpg')
}];
const BW4_GRIPS = {
  id: 'carbon-grips',
  title: 'Carbon limited sort grips pro',
  price: '[PRIS AFVENTER]',
  image: bw4img('grips-carbon-limited.png')
};
const bw4 = {
  display: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-display)',
    lineHeight: 0.95,
    margin: 0,
    textWrap: 'balance'
  },
  over: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-xs)',
    fontWeight: 700,
    letterSpacing: 'var(--tracking-wide)',
    textTransform: 'uppercase'
  },
  body: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-base)',
    lineHeight: 'var(--leading-body)',
    margin: 0,
    textWrap: 'pretty'
  },
  wrap: m => ({
    maxWidth: 'var(--page-max)',
    margin: '0 auto',
    padding: m ? '0 16px' : '0 var(--gutter)',
    boxSizing: 'border-box',
    width: '100%'
  })
};
function useBW4Now(simNow) {
  const off = React.useRef(simNow ? simNow.getTime() - Date.now() : 0);
  const [t, setT] = React.useState(() => Date.now() + off.current);
  React.useEffect(() => {
    const i = setInterval(() => setT(Date.now() + off.current), 1000);
    return () => clearInterval(i);
  }, []);
  return t;
}
function BW4Countdown({
  st,
  m,
  size = 'lg',
  tone = 'dark'
}) {
  const now = useBW4Now(st.simNow);
  const d = Math.max(0, st.target.getTime() - now);
  const parts = [[Math.floor(d / 864e5), 'Dage'], [Math.floor(d / 36e5) % 24, 'Timer'], [Math.floor(d / 6e4) % 60, 'Min'], [Math.floor(d / 1e3) % 60, 'Sek']];
  const big = size === 'lg';
  const w = big ? m ? 64 : 84 : 46;
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: big ? 8 : 6
    }
  }, parts.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      width: w,
      padding: big ? '10px 0 8px' : '6px 0 5px',
      borderRadius: 'var(--radius-md)',
      background: dark ? 'var(--ink-900)' : 'var(--white)',
      border: dark ? '1px solid #2e2e2e' : '1px solid var(--line)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: big ? m ? 28 : 36 : 18,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      color: dark ? 'var(--white)' : 'var(--ink-900)'
    }
  }, String(v).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.over,
      fontSize: big ? 10 : 9,
      marginTop: 4,
      color: dark ? 'var(--ink-300)' : 'var(--ink-500)'
    }
  }, l))));
}
function BW4SaleChip({
  children,
  tone = 'sale'
}) {
  const bg = tone === 'sale' ? 'var(--red-600)' : tone === 'white' ? 'var(--white)' : 'var(--ink-900)';
  const fg = tone === 'white' ? 'var(--ink-900)' : 'var(--white)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-sm)',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, children);
}
function BW4Outline({
  children,
  onClick,
  size = 'md',
  tone = 'light'
}) {
  const [h, setH] = React.useState(false);
  const c = tone === 'light' ? 'var(--white)' : 'var(--ink-900)';
  const inv = tone === 'light' ? 'var(--ink-900)' : 'var(--white)';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      height: size === 'lg' ? 52 : size === 'sm' ? 36 : 44,
      padding: size === 'sm' ? '0 16px' : '0 24px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${c}`,
      background: h ? c : 'transparent',
      color: h ? inv : c,
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)',
      fontWeight: 600,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'all var(--duration-fast) var(--ease-out)'
    }
  }, children);
}
function BW4MobileHeader({
  cart,
  onCart,
  onLogo
}) {
  const btn = {
    background: 'none',
    border: 'none',
    padding: 10,
    color: 'var(--ink-900)',
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    position: 'relative'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--white)',
      borderBottom: 'var(--border-thin)',
      height: 56,
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '0 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn
  }, /*#__PURE__*/React.createElement(BW4NS.Icon, {
    name: "menu",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    style: btn
  }, /*#__PURE__*/React.createElement(BW4NS.Icon, {
    name: "search",
    size: 20
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: onLogo,
    style: {
      ...btn,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BW4A + 'arox-logo-black.png',
    alt: "AROX",
    style: {
      height: 18,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    style: btn
  }, /*#__PURE__*/React.createElement(BW4NS.Icon, {
    name: "bag",
    size: 21
  }), cart > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 4,
      minWidth: 16,
      height: 16,
      borderRadius: 999,
      background: 'var(--ink-900)',
      color: 'var(--white)',
      fontSize: 10,
      fontWeight: 700,
      display: 'grid',
      placeItems: 'center'
    }
  }, cart))));
}
function BW4Chip({
  active,
  onClick,
  children,
  sub
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      flexShrink: 0,
      height: 36,
      padding: '0 16px',
      borderRadius: 'var(--radius-pill)',
      border: active ? '1px solid var(--white)' : `1px solid ${h ? 'var(--white)' : '#3a3a3a'}`,
      background: active ? 'var(--white)' : 'transparent',
      color: active ? 'var(--ink-900)' : 'var(--white)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      transition: 'all var(--duration-fast) var(--ease-out)'
    }
  }, children, sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 11,
      color: active ? 'var(--ink-500)' : 'var(--ink-300)'
    }
  }, sub));
}
function BW4CategoryBar({
  m,
  st,
  view,
  onView
}) {
  const sub = st.key === 'teaser' ? '20.11' : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--black)',
      borderBottom: '1px solid #222'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.wrap(m),
      height: m ? 56 : 60,
      display: 'flex',
      alignItems: 'center',
      gap: m ? 8 : 10,
      overflowX: m ? 'auto' : 'visible',
      scrollbarWidth: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onView('home'),
    style: {
      flexShrink: 0,
      background: 'none',
      border: 'none',
      padding: '0 12px 0 0',
      marginRight: m ? 0 : 6,
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: m ? 14 : 16,
      letterSpacing: 'var(--tracking-wide)',
      color: view === 'home' ? 'var(--white)' : 'var(--ink-300)',
      borderRight: '1px solid #333',
      height: 24,
      display: 'flex',
      alignItems: 'center'
    }
  }, "BLACK WEEK"), BW4_CATS.map(c => /*#__PURE__*/React.createElement(BW4Chip, {
    key: c.k,
    active: view === c.k,
    onClick: () => onView(c.k),
    sub: sub
  }, c.label)), !m && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...bw4.over,
      color: 'var(--ink-300)'
    }
  }, st.barNote))));
}
function BW4Marquee({
  m
}) {
  const items = ['Black Week', 'Limited drops', '3 for 2', '4 for 2', 'Early access fre 20.11 kl. 12:00', 'Åben for alle søn 22.11 kl. 20:00', 'Slutter man 30.11 kl. 23:59'];
  const row = items.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: m ? 18 : 28
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-300)'
    }
  }, "/")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      background: 'var(--white)',
      borderTop: '1px solid var(--ink-900)',
      borderBottom: '1px solid var(--ink-900)',
      overflow: 'hidden',
      height: m ? 44 : 56,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: m ? 18 : 28,
      whiteSpace: 'nowrap',
      animation: 'bw4-marquee 40s linear infinite',
      ...bw4.display,
      fontSize: m ? 15 : 20,
      color: 'var(--ink-900)',
      lineHeight: 1
    }
  }, row, row, row));
}
const BW4_TRUST = [{
  icon: 'truck',
  title: 'GLS-levering'
}, {
  icon: 'user',
  title: 'Over 20.000 kunder'
}, {
  icon: 'bag',
  title: 'Fri fragt over 799 kr.'
}, {
  icon: 'mapPin',
  title: 'Dansk udviklet'
}, {
  icon: 'chat',
  title: 'Live chat'
}];
function BW4Trust({
  m
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--white)',
      borderTop: 'var(--border-thin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.wrap(m),
      padding: m ? '28px 16px' : '36px var(--gutter)',
      display: 'grid',
      gridTemplateColumns: m ? 'repeat(2, minmax(0,1fr))' : 'repeat(5, minmax(0,1fr))',
      gap: m ? '18px 12px' : 'var(--space-6)'
    }
  }, BW4_TRUST.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.title,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      justifyContent: m ? 'flex-start' : 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: 'var(--grey-100)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--ink-900)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(BW4NS.Icon, {
    name: t.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: m ? 'var(--text-sm)' : 'var(--text-base)',
      color: 'var(--ink-900)'
    }
  }, t.title)))));
}
function BW4MobileFooter() {
  const head = {
    ...bw4.over,
    fontSize: 'var(--text-sm)',
    color: 'var(--white)',
    marginBottom: 12
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--black)',
      color: 'var(--white)',
      padding: '48px 16px 24px',
      display: 'grid',
      gap: 32,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BW4A + 'arox-logo-white.png',
    alt: "AROX",
    style: {
      height: 20,
      justifySelf: 'start'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, "Tilmeld dig VIP nyhedsbrevet"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-300)',
      marginTop: 4
    }
  }, "Modtag rabatkoder, fri fragt kampagner, eksklusive tilbud og meget mere"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "E-mail",
    style: {
      flex: 1,
      minWidth: 0,
      height: 44,
      padding: '0 16px',
      borderRadius: 999,
      border: '1px solid rgba(255,255,255,.3)',
      background: 'transparent',
      color: 'var(--white)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(BW4NS.Button, {
    variant: "inverse"
  }, "Abonn\xE9r"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, ['Ofte Stillede Spørgsmål', 'Handelsbetingelser', 'Returportal', 'Find en butik nær dig'].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--grey-200)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Kundeservice"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--grey-200)',
      display: 'grid',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "support@aroxfitness.com"), /*#__PURE__*/React.createElement("span", null, "+45 21 71 62 75"), /*#__PURE__*/React.createElement("span", null, "Hverdage: 12:00 - 15:00"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)'
    }
  }, "\xA9 2026, Arox Fitness Denmark"));
}
function BW4SectionHead({
  m,
  over,
  title,
  link,
  onLink,
  tone = 'light'
}) {
  const fg = tone === 'light' ? 'var(--ink-900)' : 'var(--white)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 16,
      marginBottom: m ? 20 : 32
    }
  }, /*#__PURE__*/React.createElement("div", null, over && /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.over,
      color: tone === 'light' ? 'var(--ink-500)' : 'var(--ink-300)',
      marginBottom: 10
    }
  }, over), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...bw4.display,
      fontSize: m ? 34 : 'var(--text-2xl)',
      color: fg
    }
  }, title)), link && /*#__PURE__*/React.createElement("button", {
    onClick: onLink,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      whiteSpace: 'nowrap'
    }
  }, link));
}
Object.assign(window, {
  BW4NS,
  BW4A,
  bw4img,
  BW4_D,
  BW4_STATES,
  BW4_CATS,
  BW4_APPAREL,
  BW4_GRIPS,
  bw4,
  BW4Countdown,
  BW4SaleChip,
  BW4Outline,
  BW4MobileHeader,
  BW4CategoryBar,
  BW4Marquee,
  BW4Trust,
  BW4MobileFooter,
  BW4SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "mockups/black-week/v4/BW4Parts.jsx", error: String((e && e.message) || e) }); }

// mockups/black-week/v4/BW4Sections.jsx
try { (() => {
const {
  Button: BW4Button,
  Badge: BW4Badge,
  Icon: BW4Icon,
  ProductCard: BW4ProductCard
} = window.AroxFitnessDesignSystem_84b1f4;
const BW4_HERO_COPY = {
  teaser: {
    over: 'Limited blackout drop · early access',
    line: 'Tilmeldte shopper først: fredag 20.11 kl. 12:00. Åben for alle søndag 22.11 kl. 20:00.'
  },
  presale: {
    over: 'Early access er åben',
    line: 'Kun for tilmeldte. Åben for alle søndag 22.11 kl. 20:00.'
  },
  open: {
    over: 'Åben for alle',
    line: 'Limited drops, 3 for 2 og 4 for 2 til og med Cyber Monday, mandag 30.11 kl. 23.59.'
  }
};
function BW4Signup({
  m
}) {
  const [v, setV] = React.useState('');
  const [done, setDone] = React.useState(false);
  if (done) return /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.body,
      color: 'var(--white)',
      fontWeight: 600,
      padding: '14px 0'
    }
  }, "Tak. Du er tilmeldt early access.");
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (v.includes('@')) setDone(true);
    },
    style: {
      display: 'flex',
      gap: 8,
      flexDirection: m ? 'column' : 'row',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: v,
    onChange: e => setV(e.target.value),
    placeholder: "Din e-mail",
    style: {
      flex: 1,
      minWidth: 0,
      height: 52,
      padding: '0 20px',
      borderRadius: 999,
      border: '1px solid rgba(255,255,255,.4)',
      background: 'rgba(255,255,255,.06)',
      color: 'var(--white)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(BW4Button, {
    variant: "inverse",
    size: "lg",
    fullWidth: m
  }, "Tilmeld mig early access"));
}
function BW4PackCard({
  m,
  onClick,
  w
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: w,
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      padding: m ? 8 : 10,
      boxShadow: '0 24px 60px rgba(0,0,0,.45)',
      cursor: 'pointer',
      transform: h ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--grey-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BW4_GRIPS.image,
    alt: BW4_GRIPS.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8
    }
  }, /*#__PURE__*/React.createElement(BW4SaleChip, {
    tone: "ink"
  }, "Limited"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: m ? '8px 4px 2px' : '12px 6px 4px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: m ? 12 : 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--ink-900)',
      lineHeight: 1.3
    }
  }, BW4_GRIPS.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: m ? 12 : 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--ink-500)',
      marginTop: 4
    }
  }, BW4_GRIPS.price)));
}
function BW4Hero({
  m,
  st,
  go
}) {
  const c = BW4_HERO_COPY[st.key];
  const ctas = st.key === 'teaser' ? /*#__PURE__*/React.createElement(BW4Signup, {
    m: m
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexDirection: m ? 'column' : 'row'
    }
  }, /*#__PURE__*/React.createElement(BW4Button, {
    variant: "inverse",
    size: "lg",
    fullWidth: m,
    onClick: () => go('limited')
  }, st.key === 'presale' ? 'Log ind og shop early access' : 'Shop limited drops'), /*#__PURE__*/React.createElement(BW4Outline, {
    size: "lg",
    onClick: () => go(st.key === 'presale' ? 'limited' : '3for2')
  }, st.key === 'presale' ? 'Se limited drops' : 'Se 3 for 2'));
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: m ? 18 : 24,
      maxWidth: m ? 'none' : 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(BW4SaleChip, {
    tone: "white"
  }, c.over)), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...bw4.display,
      color: 'var(--white)',
      fontSize: m ? 72 : 156,
      lineHeight: 0.88,
      paddingTop: '0.04em'
    }
  }, "Black", /*#__PURE__*/React.createElement("br", null), "Week"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...bw4.body,
      color: 'var(--grey-200)',
      fontSize: m ? 'var(--text-base)' : 'var(--text-md)',
      maxWidth: '44ch'
    }
  }, c.line), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...bw4.over,
      color: 'var(--ink-300)'
    }
  }, st.countLabel), /*#__PURE__*/React.createElement(BW4Countdown, {
    st: st,
    m: m
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: m ? 4 : 8
    }
  }, ctas));
  if (m) return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--black)',
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 360,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: bw4img('carbon-grips.jpg'),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 30%',
      filter: 'grayscale(1) contrast(1.15) brightness(.85)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(10,10,10,0) 40%, rgba(10,10,10,1) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 16,
      top: 20,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(BW4PackCard, {
    m: true,
    onClick: () => go('limited'),
    w: 138
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      marginTop: -96
    }
  }, text));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--black)',
      minHeight: 780,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '62%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: bw4img('carbon-grips.jpg'),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 35%',
      filter: 'grayscale(1) contrast(1.15) brightness(.9)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(10,10,10,.55) 30%, rgba(10,10,10,0) 65%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 56,
      bottom: -64,
      zIndex: 3,
      transform: 'rotate(-2deg)'
    }
  }, /*#__PURE__*/React.createElement(BW4PackCard, {
    onClick: () => go('limited'),
    w: 280
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.wrap(false),
      padding: '96px var(--gutter) 112px'
    }
  }, text));
}
const BW4_TIMELINE = [{
  k: 'teaser',
  chip: 'Tilmelding',
  day: 'Nu – torsdag',
  date: '19.11',
  title: 'Tilmeld dig early access',
  body: 'Skriv dig op og få adgang før alle andre.'
}, {
  k: 'presale',
  chip: 'Early access',
  day: 'Fredag · kl. 12:00',
  date: '20.11',
  title: 'Presale for tilmeldte',
  body: 'Limited drops og tilbud åbner for tilmeldte.'
}, {
  k: 'open',
  chip: 'Åben for alle',
  day: 'Søndag · kl. 20:00',
  date: '22.11',
  title: 'Black Week for alle',
  body: 'Hele kampagnen åbner for alle.'
}, {
  k: 'end',
  chip: 'Sidste chance',
  day: 'Cyber Monday · kl. 23:59',
  date: '30.11',
  title: 'Black Week slutter',
  body: 'Herefter gælder de normale priser igen.'
}];
function BW4Timeline({
  m,
  st
}) {
  const ai = BW4_TIMELINE.findIndex(t => t.k === st.key);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.wrap(m),
      padding: m ? '48px 16px' : '120px var(--gutter) 96px'
    }
  }, /*#__PURE__*/React.createElement(BW4SectionHead, {
    m: m,
    over: "Kampagnen dag for dag",
    title: "S\xE5dan k\xF8rer Black Week"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? 'repeat(2, minmax(0,1fr))' : 'repeat(4, minmax(0,1fr))',
      gap: m ? 10 : 'var(--space-4)'
    }
  }, BW4_TIMELINE.map((t, i) => {
    const on = i === ai,
      past = i < ai;
    return /*#__PURE__*/React.createElement("div", {
      key: t.k,
      style: {
        background: on ? 'var(--ink-900)' : 'var(--white)',
        borderRadius: 'var(--radius-md)',
        padding: m ? 16 : 24,
        display: 'flex',
        flexDirection: 'column',
        gap: m ? 6 : 8,
        opacity: past ? 0.5 : 1,
        border: on ? '1px solid var(--ink-900)' : '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 6,
        marginBottom: m ? 6 : 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...bw4.over,
        fontSize: m ? 10 : 'var(--text-xs)',
        color: on ? 'var(--ink-300)' : 'var(--ink-500)'
      }
    }, t.chip), on && /*#__PURE__*/React.createElement(BW4SaleChip, {
      tone: "white"
    }, "Nu")), /*#__PURE__*/React.createElement("div", {
      style: {
        ...bw4.over,
        fontSize: m ? 10 : 11,
        color: on ? 'var(--grey-200)' : 'var(--ink-700)'
      }
    }, t.day), /*#__PURE__*/React.createElement("div", {
      style: {
        ...bw4.display,
        fontSize: m ? 40 : 64,
        color: on ? 'var(--white)' : 'var(--ink-900)',
        lineHeight: 0.9
      }
    }, t.date), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: m ? 'var(--text-sm)' : 'var(--text-base)',
        color: on ? 'var(--white)' : 'var(--ink-900)',
        marginTop: m ? 4 : 8
      }
    }, t.title), /*#__PURE__*/React.createElement("div", {
      style: {
        ...bw4.body,
        fontSize: m ? 12 : 'var(--text-sm)',
        color: on ? 'var(--ink-300)' : 'var(--ink-500)'
      }
    }, t.body));
  }))));
}
const BW4_OFFERS = {
  limited: {
    k: 'limited',
    over: 'Single offer',
    big: 'Limited drops',
    body: 'Blackout-udgaver, der kun kommer i Black Week. Første drop: Carbon limited sort grips pro.',
    img: 'carbon-hybrid-09075.jpg',
    pos: 'center 40%',
    chip: ['Limited', 'white'],
    cta: 'Se limited drops'
  },
  '3for2': {
    k: '3for2',
    over: 'Træningstøj',
    big: '3 for 2',
    body: '[PROPOSAL] Vælg tre stykker træningstøj. Betal for to.',
    img: 'toej-04012.jpg',
    pos: 'center 25%',
    chip: ['Tilbud', 'sale'],
    cta: 'Se 3 for 2'
  },
  '4for2': {
    k: '4for2',
    over: 'Mix alt',
    big: '4 for 2',
    body: 'Mix alt i 4 for 2. [PROPOSAL] Vælg fire, betal for to.',
    img: 'hero-ringdip.jpg',
    pos: 'center 30%',
    chip: ['Tilbud', 'sale'],
    cta: 'Se 4 for 2'
  }
};
function BW4OfferTile({
  m,
  o,
  go,
  tall,
  st
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => go(o.k),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--ink-900)',
      minHeight: m ? 320 : tall ? 640 : 312,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'flex-end',
      gridRow: tall && !m ? 'span 2' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: bw4img(o.img),
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: o.pos,
      transform: h ? 'scale(1.03)' : 'none',
      transition: 'transform var(--duration-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(10,10,10,.05) 25%, rgba(10,10,10,.88) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: m ? 14 : 20,
      left: m ? 14 : 20
    }
  }, /*#__PURE__*/React.createElement(BW4SaleChip, {
    tone: o.chip[1]
  }, o.chip[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: m ? 20 : tall ? 36 : 28,
      display: 'flex',
      flexDirection: 'column',
      gap: m ? 10 : 12,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...bw4.over,
      color: 'var(--grey-200)'
    }
  }, o.over), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.display,
      color: 'var(--white)',
      fontSize: m ? 52 : tall ? 104 : 72,
      lineHeight: 0.88
    }
  }, o.big), /*#__PURE__*/React.createElement("p", {
    style: {
      ...bw4.body,
      color: 'var(--grey-200)',
      maxWidth: '40ch'
    }
  }, o.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(BW4Outline, {
    size: "sm"
  }, o.cta), st.key === 'teaser' && /*#__PURE__*/React.createElement("span", {
    style: {
      ...bw4.over,
      color: 'var(--ink-300)'
    }
  }, "\xC5bner fre 20.11"))));
}
function BW4Offers({
  m,
  go,
  st
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.wrap(m),
      paddingBottom: m ? 56 : 120
    }
  }, /*#__PURE__*/React.createElement(BW4SectionHead, {
    m: m,
    over: "Tre m\xE5der at spare",
    title: "V\xE6lg dit Black Week-tilbud"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.25fr) minmax(0,1fr)',
      gridAutoRows: 'auto',
      gap: m ? 10 : 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(BW4OfferTile, {
    m: m,
    o: BW4_OFFERS.limited,
    go: go,
    tall: true,
    st: st
  }), /*#__PURE__*/React.createElement(BW4OfferTile, {
    m: m,
    o: BW4_OFFERS['3for2'],
    go: go,
    st: st
  }), /*#__PURE__*/React.createElement(BW4OfferTile, {
    m: m,
    o: BW4_OFFERS['4for2'],
    go: go,
    st: st
  }))));
}
function BW4GiftBanner({
  m,
  compact
}) {
  const step = (n, title, body, slot) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-900)',
      border: '1px solid #2a2a2a',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: m ? '112px minmax(0,1fr)' : '160px minmax(0,1fr)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      minHeight: m ? 112 : 160
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: `bw4-gift-${slot}-${m ? 'm' : 'd'}`,
    shape: "rect",
    placeholder: slot === 'vand' ? 'Foto: vandflaske' : 'Foto: stålflaske'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: m ? 16 : 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...bw4.over,
      color: 'var(--ink-300)'
    }
  }, "Gave ", n), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.display,
      color: 'var(--white)',
      fontSize: m ? 20 : 28,
      lineHeight: 1.05
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.body,
      color: 'var(--ink-300)',
      fontSize: 'var(--text-sm)'
    }
  }, body)));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--black)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.wrap(m),
      padding: m ? '48px 16px' : compact ? '64px var(--gutter)' : '104px var(--gutter)',
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1.15fr)',
      gap: m ? 24 : 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: m ? 14 : 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BW4SaleChip, null, "Gratis gave")), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...bw4.display,
      color: 'var(--white)',
      fontSize: m ? 40 : 72,
      lineHeight: 0.92
    }
  }, "Tr\xE6n med en gave i kurven"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...bw4.body,
      color: 'var(--grey-200)',
      fontSize: 'var(--text-md)',
      maxWidth: '40ch'
    }
  }, "To gaver i Black Week. Du f\xE5r dem automatisk med i pakken."), /*#__PURE__*/React.createElement("span", {
    style: {
      ...bw4.body,
      color: 'var(--ink-300)',
      fontSize: 'var(--text-xs)'
    }
  }, "[VILK\xC5R AFVENTER]")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: m ? 10 : 'var(--space-4)'
    }
  }, step('01', 'Gratis vandflaske til de første 100 ordrer', 'Gælder de første 100 ordrer i Black Week.', 'vand'), step('02', 'Stålflaske ved køb over 999 kr.', 'Læg for over 999 kr. i kurven, så følger stålflasken med.', 'staal'))));
}
function BW4ApparelGrid({
  m,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? 'repeat(2, minmax(0,1fr))' : 'repeat(4, minmax(0,1fr))',
      gap: m ? '20px 10px' : 'var(--space-4)'
    }
  }, BW4_APPAREL.map(p => /*#__PURE__*/React.createElement(BW4ProductCard, {
    key: p.id,
    image: p.image,
    hoverImage: p.hoverImage,
    title: p.title,
    price: "[PRIS]",
    saleBadge: "[PROPOSAL] 3 for 2 \xB7 4 for 2",
    onClick: () => onAdd({
      ...p,
      price: '[PRIS]'
    })
  })));
}
function BW4Apparel({
  m,
  go,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--grey-100)',
      borderTop: 'var(--border-thin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.wrap(m),
      padding: m ? '48px 16px' : '96px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(BW4SectionHead, {
    m: m,
    over: "3 for 2 \xB7 4 for 2",
    title: "Tr\xE6ningst\xF8j",
    link: m ? 'Se alt' : 'Se alt i 4 for 2',
    onLink: () => go('4for2')
  }), /*#__PURE__*/React.createElement(BW4ApparelGrid, {
    m: m,
    onAdd: onAdd
  })));
}
function BW4LimitedBuy({
  m,
  st,
  onAdd
}) {
  const [size, setSize] = React.useState(null);
  const locked = st.key === 'teaser';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: m ? 16 : 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(BW4SaleChip, {
    tone: "white"
  }, "Limited blackout drop")), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...bw4.display,
      color: 'var(--white)',
      fontSize: m ? 40 : 72,
      lineHeight: 0.92
    }
  }, "Kun i Black Week. I sort carbon."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--white)',
      fontSize: 'var(--text-md)',
      fontWeight: 500
    }
  }, BW4_GRIPS.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--grey-200)',
      fontSize: 'var(--text-lg)',
      fontWeight: 800
    }
  }, BW4_GRIPS.price), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.over,
      color: 'var(--ink-300)',
      marginBottom: 10
    }
  }, "St\xF8rrelse"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['M', 'L', 'XL'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSize(s),
    style: {
      width: 56,
      height: 48,
      borderRadius: 'var(--radius-md)',
      border: size === s ? '1px solid var(--white)' : '1px solid #3a3a3a',
      background: size === s ? 'var(--white)' : 'transparent',
      color: size === s ? 'var(--ink-900)' : 'var(--white)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(BW4Button, {
    variant: "inverse",
    size: "lg",
    fullWidth: m,
    disabled: locked || !size,
    onClick: () => onAdd({
      ...BW4_GRIPS
    }, size)
  }, locked ? 'Åbner fre 20.11 kl. 12:00' : size ? `Læg grips i ${size} i kurven` : 'Vælg din størrelse')), locked && /*#__PURE__*/React.createElement("span", {
    style: {
      ...bw4.body,
      color: 'var(--ink-300)',
      fontSize: 'var(--text-sm)'
    }
  }, "Tilmeldte kan k\xF8be fra fredag 20.11 kl. 12:00."));
}
function BW4Limited({
  m,
  st,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--black)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.wrap(m),
      padding: m ? '56px 16px 64px' : '120px var(--gutter)',
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.1fr) minmax(0,1fr)',
      gap: m ? 40 : 88,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingBottom: m ? 48 : 64,
      paddingRight: m ? 40 : 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: bw4img('carbon-hybrid-09075.jpg'),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: m ? 150 : 240,
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      padding: m ? 6 : 10,
      boxShadow: '0 24px 60px rgba(0,0,0,.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--grey-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BW4_GRIPS.image,
    alt: BW4_GRIPS.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement(BW4LimitedBuy, {
    m: m,
    st: st,
    onAdd: onAdd
  })));
}
function BW4Athlete({
  m,
  go
}) {
  if (m) return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--black)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 520,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: bw4img('atlet-08299.jpg'),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '60% center',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(10,10,10,0) 35%, rgba(10,10,10,.95) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...bw4.over,
      color: 'var(--grey-200)'
    }
  }, "Skabt af atleter"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...bw4.display,
      color: 'var(--white)',
      fontSize: 44,
      lineHeight: 0.9
    }
  }, "Lavet til at holde."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...bw4.body,
      color: 'var(--grey-200)'
    }
  }, "Udviklet i Danmark og testet i boksen, hvor udstyret skal holde til mere end \xE9t WOD."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BW4Outline, {
    onClick: () => go('3for2')
  }, "Se tr\xE6ningst\xF8jet")))));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--black)',
      minHeight: 760,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: bw4img('atlet-08299.jpg'),
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 30%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(270deg, rgba(10,10,10,.92) 0%, rgba(10,10,10,.7) 38%, rgba(10,10,10,0) 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bw4.wrap(false),
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      paddingLeft: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...bw4.over,
      color: 'var(--grey-200)'
    }
  }, "Skabt af atleter"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...bw4.display,
      color: 'var(--white)',
      fontSize: 96,
      lineHeight: 0.88
    }
  }, "Lavet til at holde."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...bw4.body,
      color: 'var(--grey-200)',
      fontSize: 'var(--text-md)',
      maxWidth: '42ch'
    }
  }, "Udviklet i Danmark og testet i boksen, hvor udstyret skal holde til mere end \xE9t WOD."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(BW4Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => go('3for2')
  }, "Se tr\xE6ningst\xF8jet"), /*#__PURE__*/React.createElement(BW4Outline, {
    size: "lg",
    onClick: () => go('limited')
  }, "Se limited drops")))));
}
Object.assign(window, {
  BW4Hero,
  BW4Timeline,
  BW4Offers,
  BW4OfferTile,
  BW4_OFFERS,
  BW4GiftBanner,
  BW4Apparel,
  BW4ApparelGrid,
  BW4Limited,
  BW4LimitedBuy,
  BW4Athlete,
  BW4PackCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "mockups/black-week/v4/BW4Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/CartDrawer.jsx
try { (() => {
const FREE_SHIPPING_LIMIT = 799;
function parsePrice(str) {
  return parseFloat(String(str).replace(/\./g, '').replace(',', '.')) || 0;
}
function formatPrice(n) {
  return n.toLocaleString('da-DK', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + ' kr';
}

/** Slide-over cart drawer: "Din kurv", free-shipping progress, line items, checkout CTA. */
function CartDrawer({
  open = false,
  items = [],
  onClose = () => {},
  onQty = () => {},
  onRemove = () => {}
}) {
  const subtotal = items.reduce((sum, it) => sum + parsePrice(it.product.price) * it.antal, 0);
  const remaining = Math.max(0, FREE_SHIPPING_LIMIT - subtotal);
  const progress = Math.min(1, subtotal / FREE_SHIPPING_LIMIT);
  const count = items.reduce((sum, it) => sum + it.antal, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      pointerEvents: open ? 'auto' : 'none',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(10,10,10,0.45)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--duration-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 420,
      maxWidth: '92vw',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-drawer)',
      transform: open ? 'translateX(0)' : 'translateX(105%)',
      transition: 'transform var(--duration-slow) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-4) var(--space-5)',
      borderBottom: 'var(--border-thin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, "Din kurv \xB7 ", count, " vare", count === 1 ? '' : '(r)'), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Luk",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 6,
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-3) var(--space-5)',
      borderBottom: 'var(--border-thin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      marginBottom: 'var(--space-2)'
    }
  }, remaining > 0 ? /*#__PURE__*/React.createElement("span", null, "K\xF8b for ", /*#__PURE__*/React.createElement("strong", null, formatPrice(remaining)), " mere og f\xE5 fri fragt") : /*#__PURE__*/React.createElement("strong", null, "Du har fri fragt")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'var(--grey-200)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${progress * 100}%`,
      background: 'var(--ink-900)',
      transition: 'width var(--duration-base) var(--ease-out)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-4) var(--space-5)'
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)',
      textTransform: 'uppercase'
    }
  }, "Din kurv er tom"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: onClose
  }, "Forts\xE6t med at handle"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 1fr auto',
      gap: 'var(--space-3)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.product.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-heading)'
    }
  }, it.product.title), (it.farve || it.størrelse) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, [it.farve, it.størrelse].filter(Boolean).join(' / ')), /*#__PURE__*/React.createElement(__ds_scope.QuantityPicker, {
    value: it.antal,
    onChange: v => onQty(i, v),
    style: {
      transform: 'scale(0.85)',
      transformOrigin: 'left top'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6,
      justifyItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, it.product.price), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(i),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 2,
      color: 'var(--text-muted)'
    },
    "aria-label": "Fjern"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  }))))))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      borderTop: 'var(--border-thin)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, formatPrice(subtotal))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    fullWidth: true,
    size: "lg"
  }, "G\xE5 til kassen"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Dankort \xB7 Visa \xB7 Mastercard \xB7 MobilePay"))));
}
Object.assign(__ds_scope, { CartDrawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://aroxfitness.dk/cdn/shop/files';
const AROX_PRODUCTS = {
  antiSlip: {
    id: 'anti-slip',
    title: 'Arox - Anti slip grips pro',
    price: '399,00 kr',
    badges: ['Bestseller'],
    image: `${CDN}/7D8F2DA5-30EA-4415-AB0D-5C87B7BE695E.png?v=1769000189&width=720`,
    hoverImage: `${CDN}/4_2187e0e2-a9cf-40a4-a8b4-5b5df43cbb2b.png?v=1769000189&width=720`,
    gallery: [`${CDN}/7D8F2DA5-30EA-4415-AB0D-5C87B7BE695E.png?v=1769000189&width=720`, `${CDN}/4_2187e0e2-a9cf-40a4-a8b4-5b5df43cbb2b.png?v=1769000189&width=720`, `${CDN}/390.png?v=1769000189&width=720`, `${CDN}/5_cb89e36d-de90-4226-bada-22792711ddbd.png?v=1769000189&width=720`],
    colors: [{
      name: 'Grå',
      hex: '#8a8d92'
    }, {
      name: 'Gul',
      hex: '#d6b94a'
    }, {
      name: 'Lilla',
      hex: '#7a6a9c'
    }],
    sizes: ['M', 'L', 'XL'],
    description: 'Anti slip grips er vores mest klæbrende model af grips til dato. Vores nye anti slip teknologi er udviklet af materialet hypalon, lavet i et mønster som optimerer friktionen mellem materialet og pull-up barren — så selv den glatteste pull-up bar kan blive din bedste ven.',
    features: ['3 lag konstruktion for komfort, styrke og grebsoptimerende egenskaber', 'Gør selv den glatteste pull-up bar grebsstærk igen', 'Ergonomisk design som øger komfort og holdbarhed'],
    featureIcons: [`${CDN}/Lag.svg?v=3601285686096368459`, `${CDN}/Pull_up_bar.svg?v=6306661982061529582`, `${CDN}/haand.png?v=15459149609108554179`]
  },
  speedRope: {
    id: 'speed-rope',
    title: 'Speed rope elite 2.0',
    price: '399,00 kr',
    badges: ['NYHED'],
    image: `${CDN}/8_d6853ba8-c0b8-49a6-8be2-cfa919b9c365.png?v=1775233105&width=720`,
    hoverImage: `${CDN}/AROX_PRODUKT_BILLEDER-69.png?v=1775334959&width=720`
  },
  knaebind: {
    id: 'knaebind-sort',
    title: '5 MM - Hybrid knæbind sort',
    price: '389,00 kr',
    image: `${CDN}/194.png?v=1724245379&width=720`,
    hoverImage: `${CDN}/IMG-5627.png?v=1724394700&width=720`
  },
  svedbaand: {
    id: 'svedbaand',
    title: 'Arox - Svedbånd',
    price: '99,00 kr',
    compareAt: '119,00 kr',
    badges: ['Bestseller'],
    saleBadge: 'Spar 17%',
    image: `${CDN}/170.png?v=1706695802&width=720`,
    hoverImage: `${CDN}/Billede-00748.jpg?v=1747818587&width=720`,
    colors: [{
      name: 'Camo',
      hex: '#5b6048'
    }, {
      name: 'Sort',
      hex: '#1a1a1a'
    }, {
      name: 'Dustygreen',
      hex: '#7d8a72'
    }, {
      name: 'Mørkblå',
      hex: '#27314a'
    }],
    moreColors: 5
  },
  carbonGrips: {
    id: 'carbon-grips',
    title: 'Carbon grips pro Navy blå',
    price: '329,00 kr',
    image: `${CDN}/16_e72d0411-0683-4447-8c85-78c2c697d886.png?v=1700558409&width=720`,
    hoverImage: `${CDN}/17_2bc29193-ac1a-4294-a318-e761706b55c6.png?v=1700558409&width=720`
  },
  endureGrips: {
    id: 'endure-grips',
    title: 'Arox - Endure grips pro',
    price: '329,00 kr',
    image: `${CDN}/311EFF5C-43FB-4242-9B03-43EA5868250B.png?v=1729958319&width=720`,
    hoverImage: `${CDN}/Billede-08431_c2413a7b-6dfc-42df-9b99-e1990905d132.jpg?v=1748351208&width=720`
  },
  carbon360: {
    id: 'carbon-360',
    title: 'Arox - 360 carbon grips 3-hul pro',
    price: '249,00 kr',
    compareAt: '299,00 kr',
    saleBadge: 'Spar 17%',
    image: `${CDN}/26_e0f102af-b46b-4c4b-b083-6bf000764854.png?v=1689366609&width=720`,
    hoverImage: `${CDN}/27_d4259254-9a81-43c1-9339-ded659b663e9.png?v=1689366609&width=720`,
    colors: [{
      name: 'Navy',
      hex: '#27314a'
    }, {
      name: 'Lilla',
      hex: '#7a6a9c'
    }]
  },
  hybridGrips: {
    id: 'hybrid-grips',
    title: 'Arox - Hybrid grips 4.0',
    price: '199,00 kr',
    compareAt: '299,00 kr',
    saleBadge: 'Spar 33%',
    image: `${CDN}/2_e676cc12-d9d2-41ca-b5bb-27af7fc7fbda.png?v=1734520385&width=720`,
    hoverImage: `${CDN}/DSCF2869-2.jpg?v=1734520385&width=720`
  }
};
const P = AROX_PRODUCTS;
const heroImage = `${CDN}/Design_uden_navn-261.png?v=1775043343&width=2000`;
function ProductRow({
  title,
  products,
  onOpenProduct
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    title: title,
    onLink: () => {},
    style: {
      marginBottom: 'var(--space-5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, products.map(p => /*#__PURE__*/React.createElement(__ds_scope.ProductCard, _extends({
    key: p.id
  }, p, {
    onClick: () => onOpenProduct(p)
  })))));
}

/** Homepage recreation: hero, bestseller row, promo band, grips row, USP row. */
function HomeScreen({
  onOpenProduct = () => {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-16)',
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.HeroBanner, {
    image: heroImage,
    overline: "Udviklet af danske atleter",
    title: "Funktionelt t\xF8j og udstyr",
    ctaLabel: "Se udvalget her",
    height: 520
  }), /*#__PURE__*/React.createElement(ProductRow, {
    title: "Bestsellere lige nu",
    products: [P.antiSlip, P.speedRope, P.knaebind, P.svedbaand],
    onOpenProduct: onOpenProduct
  }), /*#__PURE__*/React.createElement(__ds_scope.HeroBanner, {
    image: "../../assets/hero-anti-slip-grips.webp",
    overline: "Hold fast i selv den glatteste pull-up bar",
    title: "Arox\xAE Anti slip grips",
    ctaLabel: "Shop nu",
    onCta: () => onOpenProduct(P.antiSlip),
    height: 380,
    align: "left"
  }), /*#__PURE__*/React.createElement(ProductRow, {
    title: "Shop grips",
    products: [P.carbonGrips, P.endureGrips, P.carbon360, P.hybridGrips],
    onOpenProduct: onOpenProduct
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Arox er dansk & det er vi stolte af \u2014 sammen med"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      marginTop: 'var(--space-2)'
    }
  }, "Over 20.000 danske kunder")), /*#__PURE__*/React.createElement(__ds_scope.UspRow, null)));
}
Object.assign(__ds_scope, { AROX_PRODUCTS, HomeScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/ProductScreen.jsx
try { (() => {
const {
  useState
} = React;
/** Product detail page recreation: gallery left, buy box right. */
function ProductScreen({
  product,
  onAddToCart = () => {}
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const [farve, setFarve] = useState(product.colors ? product.colors[0].name : null);
  const [str, setStr] = useState(product.sizes ? product.sizes[0] : null);
  const [antal, setAntal] = useState(1);
  const gallery = product.gallery || [product.image, product.hoverImage].filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--gutter) var(--space-16)',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: gallery[imgIndex],
    alt: product.title,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), gallery.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-3)'
    }
  }, gallery.map((src, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setImgIndex(i),
    style: {
      width: 72,
      height: 72,
      padding: 0,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: i === imgIndex ? '1.5px solid var(--line-strong)' : 'var(--border-thin)',
      background: 'var(--surface-card)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      justifyItems: 'start'
    }
  }, product.badges && product.badges.map(b => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: b
  }, b)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-2xl)',
      textTransform: 'none',
      letterSpacing: 0,
      fontWeight: 'var(--weight-bold)'
    }
  }, product.title), /*#__PURE__*/React.createElement(__ds_scope.Price, {
    price: product.price,
    compareAt: product.compareAt,
    size: "lg",
    showLabel: true
  })), product.features && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, product.features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, product.featureIcons && product.featureIcons[i] ? /*#__PURE__*/React.createElement("img", {
    src: product.featureIcons[i],
    alt: "",
    style: {
      width: 26,
      height: 26,
      objectFit: 'contain',
      flexShrink: 0
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 16,
    style: {
      color: 'var(--text-heading)'
    }
  }), f))), product.description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      maxWidth: '58ch'
    }
  }, product.description), product.colors && /*#__PURE__*/React.createElement(__ds_scope.VariantPicker, {
    label: "Farve",
    options: product.colors.map(c => c.name),
    value: farve,
    onChange: setFarve
  }), product.sizes && /*#__PURE__*/React.createElement(__ds_scope.VariantPicker, {
    label: "St\xF8rrelse",
    options: product.sizes,
    value: str,
    onChange: setStr
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, "Antal:"), /*#__PURE__*/React.createElement(__ds_scope.QuantityPicker, {
    value: antal,
    onChange: setAntal
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    fullWidth: true,
    size: "lg",
    onClick: () => onAddToCart(product, {
      farve,
      størrelse: str,
      antal
    })
  }, "F\xF8j til indk\xF8bskurv"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Dankort \xB7 Visa \xB7 Mastercard \xB7 MobilePay"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, "4.9/5 p\xE5 Trustpilot")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-thin)',
      paddingTop: 'var(--space-4)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, "Levering & returnering"), /*#__PURE__*/React.createElement("div", null, "Levering: Gratis for ordrer over 799 kr. med GLS pakkeshop. For ordrer under 799 kr. f\xE5s levering fra 35 kr."))));
}
Object.assign(__ds_scope, { ProductScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/ProductScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.QuantityPicker = __ds_scope.QuantityPicker;

__ds_ns.VariantPicker = __ds_scope.VariantPicker;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Price = __ds_scope.Price;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.HeroBanner = __ds_scope.HeroBanner;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.UspRow = __ds_scope.UspRow;

__ds_ns.CartDrawer = __ds_scope.CartDrawer;

__ds_ns.AROX_PRODUCTS = __ds_scope.AROX_PRODUCTS;

__ds_ns.HomeScreen = __ds_scope.HomeScreen;

__ds_ns.ProductScreen = __ds_scope.ProductScreen;

})();
