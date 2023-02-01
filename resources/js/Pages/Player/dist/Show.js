"use strict";
exports.__esModule = true;
var inertia_react_1 = require("@inertiajs/inertia-react");
var Layout_1 = require("@/Layouts/Layout");
function PlayerShow(_a) {
    var player = _a.player;
    console.log('🚀 ~ file: Show.tsx ~ line 5 ~ PlayerShow ~ player', player);
    return (React.createElement(Layout_1["default"], null,
        React.createElement(inertia_react_1.Head, { title: player.know_as }),
        React.createElement("section", { style: { background: 'linear-gradient(90deg,#ebff00,#ff6900)' }, className: "relative" },
            React.createElement("div", { className: "absolute overflow-hidden w-full bottom-0 left-0 top-0" },
                React.createElement("svg", { style: { fill: '#ebff00' }, className: "hidden md:block absolute w-full overflow-hidden bottom-0", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1496 270" },
                    React.createElement("path", { d: "M1496 6.3c-194.1 93.7-427.6 160.3-645.2 183.2L993.8 46C884.6 66.3 806.4 69.9 691.4 69.9c-66.4 0-129.7-3.4-192-10.1s-123.6-16.9-186-30.3L342.7 0H0v67.3c68.3 26.5 138.4 49.4 208.5 67.5l-85.1 85.5C184.5 240 249.3 256.5 316 270h1180V6.3z", fillRule: "evenodd", clipRule: "evenodd" })),
                React.createElement("svg", { className: "md:hidden", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 375 188", enableBackground: "new 0 0 375 188" },
                    React.createElement("filter", { filterUnits: "objectBoundingBox", height: "100%", id: "a", width: "100%", x: "0%", y: "0%" },
                        React.createElement("feGaussianBlur", { "in": "SourceGraphic" })),
                    React.createElement("path", { d: "M375 188V47.5c-16.3.9-33.2 1.2-52.8 1.2-53.2 0-101.4-5.4-151.4-16.3L202.9 0H0v28.4c41.1 18.8 85 34.9 128.8 46.3l-34.1 34.4c80.2 25.9 175.7 38.2 264.4 38.2L318.7 188H375z", fillRule: "evenodd", clipRule: "evenodd", filter: "url(#a)" }))),
            React.createElement("div", { className: "container mx-auto" },
                React.createElement("div", { className: "flex relative pt-2" },
                    React.createElement("div", { className: "pl-16 pt-4 w-72 h-60 mt-auto" },
                        React.createElement("img", { src: player.image_url.replace('22_60', '22_240'), alt: player.know_as })),
                    React.createElement("div", { className: "pt-2 pb-28 pl-16" },
                        React.createElement("div", { className: "text-6xl" }, "-"),
                        React.createElement("h1", { className: "font-bold text-4xl" }, player.know_as),
                        React.createElement("h2", { className: "font-bold text-xl" }, player.full_name))))),
        React.createElement("div", { className: "relative" },
            React.createElement("nav", { className: "absolute -top-20", style: { left: '37rem' } },
                React.createElement("ul", null,
                    React.createElement("li", { className: "inline-block" }, "Ovewview"),
                    React.createElement("li", { className: "inline-block" }, "Stats")))),
        React.createElement("div", null),
        React.createElement("div", { className: "container mx-auto" },
            React.createElement("div", { className: "flex" },
                React.createElement("nav", { className: "w-72 pt-12 pr-10 pb-2 pl-2" }, "sidebar"),
                React.createElement("div", { className: "w-full pl-7 relative" },
                    React.createElement("div", { className: "w-full" },
                        React.createElement("div", { className: "relative -mt-12 pl-10 pt-12 rounded-tl-md bg-white" },
                            React.createElement("div", null,
                                React.createElement("h3", { className: "text-2xl font-bold mb-2" }, "Detalhes do Jogador"),
                                React.createElement("div", { className: "rounded flex justify-between border border-gray-200 p-2 mt-6" },
                                    React.createElement("div", { className: "flex justify-between py-3 px-2 w-1/3 border-r border-gray-200 items-center" },
                                        React.createElement("span", { className: "font-light text-xs" }, "Nacionalidade"),
                                        React.createElement("div", { className: "font-bold" }, player.nation.name)),
                                    React.createElement("div", { className: "flex justify-between py-3 px-2 w-1/3 border-r border-gray-200 items-center" },
                                        React.createElement("span", { className: "font-light text-xs" }, "Idade"),
                                        React.createElement("div", { className: "font-bold" },
                                            "(",
                                            player.age,
                                            ")")),
                                    React.createElement("div", { className: "flex justify-between py-3 px-2 w-1/3 items-center" },
                                        React.createElement("span", { className: "font-light text-xs" }, "Altura"),
                                        React.createElement("div", { className: "font-bold" },
                                            player.length,
                                            "cm")))))))))));
}
exports["default"] = PlayerShow;
