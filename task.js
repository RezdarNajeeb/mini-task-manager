export default class Task {
  #title;
  #dueDate;
  #priority;

  constructor({title, dueDate, priority} = {}) {
    this.#title = title;
    this.#dueDate = dueDate;
    this.#priority = priority;
  }

  get title() {
    return this.#title;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get priority() {
    return this.#priority;
  }
}