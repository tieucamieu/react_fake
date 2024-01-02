import main from "./main.js";
(function render() {
    let rootEl = document.getElementById("root");
    rootEl.innerHTML = main()
})()

