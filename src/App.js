import React from 'react';
import logo from './logo.svg';
import './App.css';
import DogsListContainer from './components/DogsListContainer'
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
/*{if you don't import your new components, it will give an error of:
ex: DogBreedImages is not a function, because App.js can't find the definition}*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
        <Route exact path="/" component={DogsListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} /> 
        </main>
      </header>
    </div>
  );
}


/*{render it inside the App component's render method
    --> this is a function App which have a render method 
    inside it's return statement} that looks like line 22:
     <main><DogsList /></main>
     
      <Route path="/dog-breeds/:breed" component={DogBreedImages} /> 
      in line 28, I changed the above line, to our new Container Component, I also changed
      the import from DogBreedImages --> DogBreedImagesContainer (which in turn imports from DogBreedImages now instead!)
     
     
     
     */ 



export default App;
