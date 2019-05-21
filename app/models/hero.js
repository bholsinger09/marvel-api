export default class Hero {
  constructor(data) {
    this.name = data.name
    this.img = data.img
    this.description = data.description
    this.user = data.user

  }

  getTemplate(button) {
    return ``
  }
}



// name: { type: String, required: true },
// img: { type: String, required: true },
// description: { type: String, required: true },
// user: { type: String, required: true }