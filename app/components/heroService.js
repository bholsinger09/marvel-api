import Hero from "../models/hero";

//Private
//api used for our getters
let _marvelAPI = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public'
})

let _characters = 'characters?limit=50'
let _offset = 200
let _apiKey = '99cf791372929227dca40908cdbf5968'

///sandbox below where we post data
let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Mark/pokemon'
})





let _state = { // data
  apiMarvel: [],
  activeHero: {},
  myHero: []
}

let _subscribers = { //functions to run when data changes
  apiMarvel: [],
  myHeros: [],
  activeHero: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}

//Public
export default class HeroService {
  //this has a default constructor 
  //add subscribers first 
  addSubscribers(propName, fn) {
    _subscribers[propName].push(fn)
  }
  //below are the getters 
  //getters will be marvelapi , method to get list of heros, method to get active list
  get ApiHeros() {
    return _state.apiMarvel
  }

  // get MyHero() {
  //   return _state.myHero.map(h => new Hero(h))
  // }

  // get ActiveHero() {
  //   return new Hero(_state.activeHero)
  // }

  getMarvelData() {
    _marvelAPI.get(`${_characters}&offset=${_offset}&apikey=${_apiKey}`)
      .then(res => {
        //your code here
      })
      .catch(err => {
        console.error(err)
      })
  }


  // getMyHeros() {
  //   //set getter and catch
  //   //this is where we map over the data from api to set the functions
  //   // _sandbox.get()
  //   //   .then(response => {
  //   //     let hero = response.data.data.map(p => new Hero(p))
  //   //     _setState('myHero', hero)
  //   //   })
  //   //   .catch(err => {
  //   //     console.error(err)
  //   //   })
  // }


  // addHero() {
  //   // working with sand box
  //   // .post to add activeHero 
  //   // _sandbox.post('', _state.activeHero) //create pokemon in database
  //   //   .then(response => {
  //   //     this.getMyHero()
  //   //   })
  //   //   .catch(err => {
  //   //     console.error(err)
  //   //   })
  // }

  // removeHero(id) {
  //   _sandbox.delete(id)
  //     .then(response => {
  //       this.getMyHeros()
  //     })
  // }

}