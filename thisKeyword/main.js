const form = document.querySelector("form")
const name = document.querySelector("#name")
const role = document.querySelector("#role")
const bio = document.querySelector("#bio")
const imageUrl = document.querySelector("#photo")

const userManager = {
    users: [],
    init: function() {
        this.renderAllUsers();
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            this.addUser()
        })
    },
    addUser: function() {
        const user = {
            name: name.value,
            role: role.value,
            bio: bio.value,
            imageUrl: imageUrl.value
        }
        this.users.push(user)
        this.renderUser(user)
        form.reset()
    },
    renderUser: function(user) {
        const card = document.createElement("div")
        card.className = "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col item-center border border-blue-100 hover:scale-105 transition"

        const image = document.createElement("img");
        image.className = "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
        image.src = user.imageUrl;
        image.alt = "User Photo";
        card.appendChild(image);

        const name = document.createElement("h2");
        name.className = "text-2xl font-bold mb-1 text-blue-700"
        name.textContent = user.name
        card.appendChild(name)

        const role = document.createElement("p")
        role.className = "text-purple-500 mb-2 font-medium"
        role.textContent = user.role;
        card.appendChild(role)

        const bio = document.createElement("p")
        bio.className = "text-gray-700 text-center"
        bio.textContent = user.bio
        card.appendChild(bio)

        document.querySelector(".users").appendChild(card)
    },
    renderAllUsers: function() {
        this.users.forEach((user) => this.renderUser(user))
    }
}

userManager.init()