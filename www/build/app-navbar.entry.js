import { r as registerInstance, h } from './index-6daa3064.js';

const navbarCss = ".navbar{display:flex;align-items:center;padding:16px 48px;background:rgba(255, 255, 255, 0.8);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);position:fixed;top:0;left:0;right:0;z-index:100;height:80px;box-sizing:border-box;transition:all 0.3s ease;user-select:none}.navbar::before{content:'';position:absolute;left:0;right:0;bottom:-80px;height:80px;background:linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, transparent 100%);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);pointer-events:none;z-index:-1}.navbar::after{content:'';position:absolute;top:0;left:0;right:0;height:80px;background:rgba(255, 255, 255, 0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:-1;pointer-events:none}.navbar-logo{height:48px;width:auto;object-fit:contain;user-select:none;cursor:default}";

const Navbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("nav", { key: '49175e6b0d97b7afdb7179976c7df059a862ecbe', class: "navbar" }, h("img", { key: 'a7290569773735d613073ea095ec8afd65cb54fc', src: "/assets/image/Vanguard logo.png", alt: "Logo", class: "navbar-logo" })));
    }
};
Navbar.style = navbarCss;

export { Navbar as app_navbar };

//# sourceMappingURL=app-navbar.entry.js.map