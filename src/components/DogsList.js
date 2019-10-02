import React, {Component} from 'react'
import { Link } from 'react-router-dom'
/// import * as request from 'superagent' --> needed this at one point!

//const data = null

// if the left hand side of the && operator is true
// the whole expression will evaluate to 
// what is on the right hand side -> which is loading
//const display = data === null && 'Loading' // 'Loading'

// in this case data === null is true 
// so const display will be 'Loading'
// const data = 'Hello World'

// if the left hand side of the && operator is false, because of line 13.
// data is not null but "Hello World"
// the whole expression will evaluate to 
// what is on the left hand side

/// const display = data === null && 'Loading' // false
// In this case data === null is false
// so const display will be false

// if false is inside JSX it doesn't show up 
// So if we have data, 'Loading' is no longer displayed!


export default class DogsList extends Component {
  renderDogBreed(breed) {
  return <li key={breed}><Link to={ `/dog-breeds/${breed}` }>{breed}</Link></li>
    /*{return <li key={breed}>{breed}</li>}*/
    /*{And use the Link component when you're rendering a <li> for a dog breed: below!!!}*/
  }

  render() {
    const { dogBreeds } = this.props
    /*{this.props, refer to all the props that dogBreeds have, not visible in this file}*/
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        { !dogBreeds && 'Loading...' }
        {
          dogBreeds &&
          <ul>{ dogBreeds.map(this.renderDogBreed) }</ul>
        }
      </div>
    )
  }
}

/*{line 40: will evaluate from left to right: so if dogBreeds is not falsy, it will continue to the next and the function will return "Loading..."

line 41-44 sas that if dogBreeds (which is true, as we did setState --> this will go on to the next (after &&) and therefore the breeds will be mapped over. }*/

/*{ See below for my own solution to using an if/else statement instead of ! and && operators!!)

      renderList() {
        console.log(this.state.dogBreeds);
        if (this.state.dogBreeds === null) {
            return "Loading..."
        } else {
          return ( 
            <ul>
            { this.state.dogBreeds.map(breed => <li key={breed}>{breed}</li>) }
            </ul>
          )  
      }
    }

     render() {
      return (
        <div className="dogs-list">
          <h1>DogsList</h1>
          {this.renderList()}
          </div>
       ) }
    }}*/
      


/*{Add the DogsList component in a folder src/components and render 
    it inside the App component  --> App.js file
    render method. Make sure the DogsList is inside a pair of <main> tags.}*/

