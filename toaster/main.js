function createToaster(config) {
    return function(text) {
        let parent = document.querySelector(".parent");
        let div = document.createElement("div");

        div.classList = `px-6 py-3 rounded shadow-lg pointer-event-none ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`
        div.textContent = text;

        parent.classList.add(`${config.posX === "right" ? "right-5" : "left-5"}`)
        parent.classList.add(`${config.posY === "top" ? "top-5" : "bottom-5"}`)
        parent.appendChild(div)

        setTimeout(() => {
            parent.removeChild(div)
        }, config.duration * 1000)
    }
}

let toaster = createToaster({
    posX: "left",
    posY: "bottom",
    theme: "light",
    duration: 3
})

toaster("toaster notification.")