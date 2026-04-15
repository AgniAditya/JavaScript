let users = [
    {
        name: "amisha rathore",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    },
    {
        name: "amita mehta",
        pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
        name: "isha oberoi",
        pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
        bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
    },
    {
        name: "Ojin Oklawa",
        pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
        bio: "too glam to give a damn 💅 | filter free soul",
    },
    {
        name: "diya bansal",
        pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
        bio: "a little chaos, a lot of art 🎨✨ | just vibes",
    },
    {
        name: "tanay rawat",
        pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
        bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
    },
    {
        name: "mohit chhabra",
        pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
        bio: "aesthetic overload 📸🕊️ | living in lowercase",
    },

    {
        name: "riya sharma",
        pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
        bio: "sunshine mixed with a little hurricane 🌤️🌪️",
    },
    {
        name: "arjun singh",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        bio: "quiet grind, loud success 💻🔥",
    },
    {
        name: "neha kapoor",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        bio: "dancing through chaos 💃✨ | coffee addicted",
    },
    {
        name: "karan malhotra",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
        bio: "built different 🧠⚡ | focus mode always on",
    },
    {
        name: "sneha verma",
        pic: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=800",
        bio: "soft heart, strong mind 🌸🖤",
    },
    {
        name: "priya desai",
        pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
        bio: "chaotic good energy 😈✨",
    },
    {
        name: "rohan mehra",
        pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800",
        bio: "late nights, big dreams 🌌💭",
    },
    {
        name: "ananya gupta",
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        bio: "creating my own universe 🎨🌍",
    },
    {
        name: "vishal yadav",
        pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        bio: "calm mind, focused life 🧘‍♂️⚡",
    }
];

function showUsers(arr){
    document.querySelector('#cards').textContent = "";
    if(arr.length === 0){
        document.querySelector('.no-user').style.display = 'initial';
        return;
    }
    document.querySelector('.no-user').style.display = 'none';
    arr.forEach((user) => {
        const card = document.createElement("div")
        card.classList.add('card')
    
        const img = document.createElement('img')
        img.src = user.pic;
        img.classList.add('bg-img')

        const blurredLayer = document.createElement("div")
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add('blurred-layer')

        const content = document.createElement('div')
        content.classList.add("content")

        const h3 = document.createElement('h3')
        h3.textContent = user.name;

        const bio = document.createElement('p')
        bio.textContent = user.bio

        content.append(h3)
        content.append(bio)

        card.append(img)
        card.append(blurredLayer)
        card.append(content)

        document.querySelector("#cards").append(card)
    })
}

showUsers(users)
function debounce(fn,delay){
    let timer;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args)
        },delay)
    }
}

function handleSearch(e) {
    let newUsers = users.filter((user) => {
        return user.name.startsWith(e.target.value.toLowerCase().trim());
    })
    showUsers(newUsers)
}

let inp = document.querySelector(".inp")
inp.addEventListener("input", debounce(handleSearch,500))