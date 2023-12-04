console.log("js is connected, yo.")

let form = document.querySelector('#task-form')
let input = document.querySelector('#task-input')
let taskContainer = document.querySelector('#task-container')

// need a fxn that will handle a submit of the form

let handleSubmit = (evt) => {
    // if it's a form, you need event as parameter and use evt.preventDefault as first line in fxn
    evt.preventDefault()
    // console.log("submit")
    let newTask = input.value
    let task = document.createElement('h4')
    task.className = "task"
    task.textContent = newTask
    // console.log(newTask)
    console.log(task) 
    // to see in live console if you created new task element
    taskContainer.appendChild(task)
    input.value = ""
    input.focus()
}

form.addEventListener('submit', handleSubmit)
// do lines 11, 12, 15 then test in live server console
// then continue with rest of fxn

// then create new var to access value of input and test in console