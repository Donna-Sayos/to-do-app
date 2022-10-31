import { v4 as uuidV4 } from "uuid";

type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>('#list'); //default is <Element> if you don't specify; this is to make it easier to work with HTML elements.
const form = document.querySelector<HTMLFormElement>('#new-task-form');
const input = document.getElementById('new-task-title') as HTMLInputElement | null;

form?.addEventListener("submit", e => {
  e.preventDefault();

  if (input?.value == "" || input?.value == null) return; //to make sure input is not null;

  const newTask = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  addListItem(newTask)
  input.value = ""
})

function addListItem (task : Task) {
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}