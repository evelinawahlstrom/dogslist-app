/*{
    Spliting up the data and the logic into DogsList.js and this component
    The new DogsList will only contain markup and retrieve the dogs via the props
    --> checkout DogsList.js for this   
    -->  the DogsListContainer will retrieve the data from the API.
}*/


import React, {Component} from 'react'
import request from 'superagent'
import DogsList from './DogsList'

export default class DogsListContainer extends Component {
  state = { dogBreeds: null }

  componentDidMount() {
    /*{DidMount MEANS the component is rendered into the real DOM. "It's showtime"}*/
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const breeds = Object.keys(response.body.message)
        this.updateBreeds(breeds)
      })
      .catch(console.error)
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />
  }
}