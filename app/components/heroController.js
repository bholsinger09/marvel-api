import HeroService from "./heroService.js";

//Private
let _heroService = new HeroService


function _drawApiMarvel() {
  let heros = _heroService.ApiHeros
  let template = ''
  for (let i = 0; i < heros.length; i++) {
    let hero = heros[i];
    template += _heroService.
  }
  document.getElementById('api-pokemon').innerHTML = template

}

function _drawActiveHero() {

}

function _drawMyHeroList() {

  //let heros = 
  //let template = ''
  //for loop
  //select element 
}

//Public
export default class HeroController {
  constructor() {

    //Register Subscribers
    _heroService.addSubscribers('apiMarvel', _drawApiMarvel)
    //not needed yet _heroService.addSubscribers('myHeros', _drawMyHeroList)
    //not needed yet _heroService.addSubscribers('activeHero', _drawActiveHero)

    //getData
    _heroService.getMarvelData()
  }

  getDetails() {
    _heroService.ApiHeros()

  }

  // addHero() {

  // }

  // removeHero(id) {

  // }
}