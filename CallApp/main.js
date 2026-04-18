// All DOM
const addNote = document.querySelector("#add-note")
const formContainer = document.querySelector(".form-container")
const closeForm = document.querySelector(".closeForm")
const imageUrlInput = document.querySelector('#imageUrl');
const fullNameInput = document.querySelector('#fullName');
const homeTownInput = document.querySelector('#homeTown');
const purposeInput = document.querySelector('#purpose');
const catEmergency = document.querySelector('#catEmergency');
const catImportant = document.querySelector('#catImportant');
const catUrgent = document.querySelector('#catUrgent');
const catNoRush = document.querySelector('#catNoRush');
const submitBtn = document.querySelector('#submitBtn');
const form = document.querySelector('#noteForm');
const stack = document.querySelector(".stack");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn")

// main logic
function saveToLocalStorage(obj){
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    if(tasks === null) tasks = [];
    tasks.push(obj)
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

addNote.addEventListener("click", () => {
    formContainer.style.display = "initial"
})

closeForm.addEventListener("click", () => {
    formContainer.style.display = "none"
})

form.addEventListener("submit",(evt) => {
    evt.preventDefault()
    
    const imageURLValue = imageUrlInput.value;
    const fullNameValue = fullNameInput.value;
    const homeTownValue = homeTownInput.value;
    const purposeValue = purposeInput.value;
    const isCategorySelected = catEmergency.checked || catImportant.checked || 
                            catUrgent.checked || catNoRush.checked;

    if(imageURLValue.trim() === "") {
        alert("image url is required");
        return;
    }
    if(fullNameValue.trim() === ""){
        alert("full name is required");
        return;
    }
    if(homeTownValue.trim() === "") {
        alert("home town is required");
        return;
    }
    if(purposeValue.trim() === "") {
        alert("purpose is required");
        return;
    }
    if(!isCategorySelected){
        alert("category is required");
        return;
    }

    let categoryValue = null;
    if (catEmergency.checked) categoryValue = catEmergency.value;
    else if (catImportant.checked) categoryValue = catImportant.value;
    else if (catUrgent.checked) categoryValue = catUrgent.value;
    else if (catNoRush.checked) categoryValue = catNoRush.value;

    const obj = {
        imageURL: imageURLValue,
        name: fullNameValue,
        homeTown: homeTownValue,
        purpose: purposeValue,
        category: categoryValue
    }

    saveToLocalStorage(obj)
    form.reset();
    formContainer.style.display = "none";
    showCards()
})

function showCards() {
    stack.innerHTML = "";
    let allTasks = JSON.parse(localStorage.getItem("tasks"))
    if(allTasks !== null){

        allTasks.forEach((task) => {
            const card = document.createElement("div")
            card.classList.add("card")
        
            const avatar = document.createElement("img")
            avatar.src = task.imageURL
            avatar.alt = "profile"
            avatar.classList.add("avatar")
            card.appendChild(avatar)
        
            const name = document.createElement("h2")
            name.textContent = task.name
            card.appendChild(name)
        
            const homeTownInfo = document.createElement("div")
            homeTownInfo.classList.add("info")
        
            const homeTownLabel = document.createElement("span")
            homeTownLabel.textContent = "Home Town";
            const homeTownValue = document.createElement("span");
            homeTownValue.textContent = task.homeTown;
        
            homeTownInfo.appendChild(homeTownLabel);
            homeTownInfo.appendChild(homeTownValue);
            card.appendChild(homeTownInfo)
        
            const bookingsInfo = document.createElement("div");
            bookingsInfo.classList.add("info");
        
            const bookingsLabel = document.createElement("span");
            bookingsLabel.textContent = "Purpose";
        
            const bookingsValue = document.createElement("span");
            bookingsValue.textContent = task.purpose;
        
            bookingsInfo.appendChild(bookingsLabel);
            bookingsInfo.appendChild(bookingsValue);
            card.appendChild(bookingsInfo);
        
            const buttonsDiv = document.createElement("div");
            buttonsDiv.classList.add("buttons");
        
            const callBtn = document.createElement("button")
            callBtn.classList.add("call")
            callBtn.innerHTML = '<i class="ri-phone-line"></i> Call'
        
            const msgBtn = document.createElement("button")
            msgBtn.classList.add("msg")
            msgBtn.textContent = "Message"
        
            buttonsDiv.appendChild(callBtn)
            buttonsDiv.appendChild(msgBtn)
        
            card.appendChild(buttonsDiv)
        
            document.querySelector(".stack").appendChild(card)
        })
    }
}
showCards()

upBtn.addEventListener("click", () => {
    let lastChild = stack.lastElementChild;
    if(lastChild){
        stack.prepend(lastChild)
    }
})

downBtn.addEventListener('click',() => {
    let firstChild = stack.firstElementChild;
    if(firstChild){
        stack.appendChild(firstChild)
    }
})