import Hero from "../models/hero";

//Private
let _marvelApi = axios.create({
  baseURL: ''
})

let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/BenH/pokemon'
})


let _state = { // data
  apiMarvel: [],
  activeHero: {},
  myHero: []
}

let _subscribers = { //functions to run when data changes
  apiMarvel: [],
  myHero: [],
  activeHero: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}

//Public
export default class PokemonService {
  //this has a default constructor 
  //add subscribers first 
  addSubscribers(propName, fn) {
    _subscribers[propName].push(fn)
  }
  //below are the getters 
  //getters will be marvelapi , method to get list of heros, method to get active list
  get ApiPokemon() {
    return _state.apiMarvel
  }

  get MyPokemon() {
    return _state.myHero.map(h => new Hero(h))
  }

  get ActivePokemon() {
    return new Hero(_state.activeHero)
  }


  getApiMarvel(name) {
    name = name || ''
    _marvelApi.get(name) //send request to api
      .then(response => {
        let heroData = response.data
        //conditional statement to set state here 
      })
  }

  getMyHeros() {
    //set getter and catch
    //this is where we map over the data from api to set the functions
    // _sandbox.get()
    //   .then(response => {
    //     let hero = response.data.data.map(p => new Hero(p))
    //     _setState('myHero', hero)
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })
  }


  addHero() {
    // working with sand box
    // .post to add activeHero 
    // _sandbox.post('', _state.activeHero) //create pokemon in database
    //   .then(response => {
    //     this.getMyHero()
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })
  }

  removePokemon(id) {
    _sandbox.delete(id)
      .then(response => {
        this.getMyHeros()
      })
  }

}