import HeroService from "./heroService.js";

//Private
let _heroService = new HeroService


function _drawApiMarvel() {

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
    _heroService.addSubscribers('myHeros', _drawMyHeroList)
    _heroService.addSubscribers('activeHero', _drawActiveHero)

    //getData
    _heroService.getMarvelData()
  }

  // getDetails(name) {

  // }

  // addHero() {

  // }

  // removeHero(id) {

  // }
}