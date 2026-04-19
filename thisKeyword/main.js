const form = document.querySelector("form")
const name = document.querySelector("#name")
const role = document.querySelector("#role")
const bio = document.querySelector("#bio")
const imageUrl = document.querySelector("#photo")

const userManager = {
    users: [
        {
            name: "Aditya Agnihotri",
            role: "Software Engineer",
            bio: "B.Tech Computer Science student with strong problem-solving skills (600+ DSA problems solved) and hands-on experience building AI-powered full-stack and automation systems. Interested in Backend Engineering, Systems Design, and AI-driven software applications.",
            imageUrl: "https://i.postimg.cc/d3G0SnH8/Portfolio-Image-final.png"
        }
    ],
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

        const remove = document.createElement("button")
        remove.textContent = "remove"
        remove.className = "w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition shadow-lg"
        remove.onclick = () => this.removeUser(user)
        card.appendChild(remove)

        document.querySelector(".users").appendChild(card)
    },
    renderAllUsers: function() {
        document.querySelector(".users").innerHTML = "";
        this.users.forEach((user) => this.renderUser(user))
    },
    removeUser: function(removedUser) {
        this.users = this.users.filter((user) => user !== removedUser)
        this.renderAllUsers();
    }
}

userManager.init()