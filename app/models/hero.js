export default class Hero {
  constructor(data) {
    this.name = data.name
    this.img = data.thumbnail
    this.description = data.description || ''
    this.user = data._id || ''

  }

  getTemplate(button) {
    return `
    <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">Height: ${this.user}</p>
                <p class="card-text">Weight: ${this.description}</p>
                ${button}
        </div>
      </div>   `



  }
}



// name: { type: String, required: true },
// img: { type: String, required: true },
// description: { type: String, required: true },
// user: { type: String, required: true }