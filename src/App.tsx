import { Button, Grid } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import MediaCard from './components/muicard';
import { RootObject, Character } from './models/User';

const App = () => {
  const [characters, setCharacters] = useState([] as Character[])


  const loadData = async () => {
    
    const responseFetch = await fetch('https://rickandmortyapi.com/api/character');
    const {results} = await responseFetch.json() as RootObject;
    setCharacters(results);
    console.timeEnd();
  }

  useEffect(() => {
    console.time();
    setTimeout(loadData, 2000);
  }, [])

  // ,[]) solo all'avvio
  // ,[isNew]) solo dipendenze + avvio
  // null tutte le dipendenze + avvio
  
  // const isLowNumber = (x: number): x is 0 | 1 | 2 | 3 => x >= 0 && x <= 3;
  

  // const increment = (inc: number) => {
  //   const x = counter + inc;
  //   isLowNumber(x) && setCounter(x);    
  // }
  
  // const stamp = () => {
  //   console.log('stamp:', counter);
  // }
  return (
    <>

      <Grid container>
        {characters.map((character, index) => 
        <span key={character.id}  onClick={() => {
          console.log('index:', index);
          characters.splice(index, 1);
          console.log('characters:', characters.length);
          setCharacters([...characters]);
        }}>
          <MediaCard key={character.id} character={character}></MediaCard>
        </span>
        )}
      </Grid>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Prova React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
