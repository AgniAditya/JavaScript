const container = document.querySelector(".container");
const input = document.querySelector('input');
const loading = document.querySelector(".loading");

function getUsers(amount = 3){
    loading.className = "text-center text-gray-700 text-lg font-medium"
    container.innerHTML = "";
    loading.textContent = "Loading..."

    fetch(`https://randomuser.me/api/?results=${amount}`)
    .then(rawData => rawData.json())
    .then((users) => {
        loading.className = "hidden"
        users.results.forEach((user) => {
            showUser(user)
        });
    })
    .catch((err) => {
        loading.textContent = "failed to get users"
        console.log(err)
    })
}

function showUser(user) {
    const card = document.createElement("div");
    card.className = "bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-80";

    const top = document.createElement("div");
    top.className = "flex items-center gap-4";

    const img = document.createElement("img");
    img.className = "w-16 h-16 rounded-full border border-neutral-700";
    img.src = user.picture.large;

    const info = document.createElement("div");

    const name = document.createElement("h2");
    name.className = "font-semibold text-sm";
    name.textContent = `${user.name.title}. ${user.name.first} ${user.name.last}`;

    const email = document.createElement("p");
    email.className = "text-neutral-400 text-xs";
    email.textContent = user.email;

    info.appendChild(name);
    info.appendChild(email);

    top.appendChild(img);
    top.appendChild(info);

    const bottom = document.createElement("div");
    bottom.className = "mt-4 flex justify-between text-sm text-neutral-300";

    const age = document.createElement("p");
    age.innerHTML = `<span class="text-neutral-500">Age:</span> ${user.dob.age}`;

    const city = document.createElement("p");
    city.innerHTML = `<span class="text-neutral-500">City:</span> ${user.location.city}`;

    const country = document.createElement("p");
    country.innerHTML = `<span class="text-neutral-500">Country:</span> ${user.location.country}`;

    bottom.appendChild(age);
    bottom.appendChild(city);
    bottom.appendChild(country);

    card.appendChild(top);
    card.appendChild(bottom);

    container.appendChild(card);
}

function handleSearch(){
    const inp = input.value.trim();
    const isNumber = inp * 1 !== NaN;
    if(inp === "" || (isNumber && inp * 1 === 0)) {
        container.innerHTML = "";
        return;
    }
    if(isNumber && inp * 1 > 0)getUsers(inp)
    else alert("Range: 1 to 5000")
}

document.querySelector("button").addEventListener('click', handleSearch)
input.addEventListener('keydown', (event) => {
    if(event.key.toLowerCase() === "enter"){
        handleSearch()
    }
})

getUsers()