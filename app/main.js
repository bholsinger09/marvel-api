import HeroController from "./components/heroController";

class App {
  constructor() {
    this.controllers = {
      pokeController: new HeroController()
    }
  }
}

window['app'] = new App()