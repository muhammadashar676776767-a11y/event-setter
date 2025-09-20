function saveData(data) {
    localStorage.setItem("tasks", JSON.stringify(data))
}

function loadData() {
    let data = localStorage.getItem("tasks")
    return data ? JSON.parse(data) : []
}

function renderTasks() {
    const container = document.getElementById('display')
    container.innerHTML = ""  

    tasks.forEach((task, index) => {
        const wrapper = document.createElement("div")

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = task.checked  

        const label = document.createElement("label")
        label.textContent = `name: ${task.name} description: ${task.age} date: ${task.date}`

        checkbox.addEventListener("change", function() {
            tasks[index].checked = checkbox.checked
            saveData(tasks)
        })

        wrapper.appendChild(checkbox)
        wrapper.appendChild(label)
        container.appendChild(wrapper)
    })
}

let tasks = loadData()
renderTasks()

document.getElementById("button").onclick = function() {
    let name = document.getElementById("input1").value
    let age = document.getElementById("input2").value
    let date = document.getElementById("date123").value

    tasks.push({ name, age, date, checked: false })
    saveData(tasks)
    renderTasks()
}

document.getElementById("delete").onclick = function() {
    tasks = tasks.filter(task => !task.checked)
    saveData(tasks)
    renderTasks()
}
function renderTasks() {
    const container = document.getElementById('display')
    container.innerHTML = ""  
    container.style.display = "flex"
    container.style.flexDirection = "column"
    container.style.gap = "8px"

    tasks.forEach((task, index) => {
        const wrapper = document.createElement("div")
        wrapper.style.display = "flex"
        wrapper.style.alignItems = "center"
        wrapper.style.justifyContent = "flex-start"
        wrapper.style.background = "background-color: hsl(180, 100%, 60%);"
        wrapper.style.borderRadius = "8px"
        wrapper.style.padding = "8px 12px"
        wrapper.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)"
        wrapper.style.width = "fit-content"

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = task.checked  
        checkbox.style.width = "18px"
        checkbox.style.height = "18px"
        checkbox.style.marginRight = "10px"
        checkbox.style.cursor = "pointer"
        checkbox.style.accentColor = "#4CAF50"

        const label = document.createElement("label")
        label.textContent = `name: ${task.name} description: ${task.age} date: ${task.date}`
        label.style.fontSize = "14px"
        label.style.color = "#333"
        label.style.cursor = "pointer"

        checkbox.addEventListener("change", function() {
            tasks[index].checked = checkbox.checked
            saveData(tasks)
        })

        wrapper.appendChild(checkbox)
        wrapper.appendChild(label)
        container.appendChild(wrapper)
    })
}
