import { r as registerInstance, h } from './index-6daa3064.js';

const navbarCss = ".navbar{display:flex;align-items:center;padding:16px 48px;background:rgba(255, 255, 255, 0.8);backdrop-filter:blur(8px);border-bottom:1px solid rgba(224, 224, 224, 0.5);position:fixed;top:0;left:0;right:0;z-index:1000;height:80px;box-sizing:border-box;box-shadow:0 2px 8px rgba(0, 0, 0, 0.04);transition:all 0.3s ease}.navbar-logo{height:48px;width:auto;object-fit:contain;user-select:none;cursor:default}";

const Navbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("nav", { key: 'ccafe9940cd528b7f3d00c3cf4870225f882aa80', class: "navbar" }, h("img", { key: '30a794af0b25a41404877e54c15f4a94d07d12d1', src: "/assets/image/Vanguard logo.png", alt: "Logo", class: "navbar-logo" })));
    }
};
Navbar.style = navbarCss;

export { Navbar as app_navbar };

//# sourceMappingURL=app-navbar.entry.js.map