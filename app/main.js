import HeroController from "./components/heroController.js";

class App {
  constructor() {
    this.controllers = {
      pokeController: new HeroController()
    }
  }
}

window['app'] = new App()