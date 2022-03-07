import { Button, CircularProgress, Grid } from '@material-ui/core';
import { Skeleton } from '@mui/material';
import React, { Fragment, useEffect, useReducer, useState } from 'react';
import './App.css';
import {MediaCard} from './components/muicard';
import { RootObject, Character } from './models/User';


type Scorer = {minute: number; player: string, team: 'home' | 'away'};

type Score = {
  golHome: number;
  golAway: number;
  scorers: Scorer[]
}
const initialState: Score = {
  golHome: 0,
  golAway: 0,
  scorers: [],
}

type Action = {
  type: 'gol' | 'redCard' | 'yellowCard',
  payload: Scorer
}

const reducer = (state: Score, action: Action) => {
  console.log('reducer');
  switch (action.type) {
    case 'gol': {
      state.golHome = state.golHome + (action.payload.team === 'home' ? 1 : 0);
      state.golAway = state.golAway + (action.payload.team === 'away' ? 1 : 0);
      state.scorers.push(action.payload);
      console.log('state:', state);
      return {...state};
    }
    default:
      return {...state};
  }
}

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([] as Character[])
  const [favourites, setFavourites] = useState([] as Character[])
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadData = async () => {
    const responseFetch = await fetch('https://rickandmortyapi.com/api/character');
    const {results} = await responseFetch.json() as RootObject;
    setCharacters(results);
    console.timeEnd();
    setLoading(false);
    
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
  const remove = (idToRemove: number) => {
    const index = characters.findIndex(({id}) => idToRemove === id);
    if (index !== -1) {
      characters.splice(index, 1);
      setCharacters([...characters]);
    }
  }
  const onSelectedItem = (idSelected: number) => {
    const indexInCharacters = characters.findIndex(({id}) => idSelected === id);
    const indexInFavourites = favourites.findIndex(({id}) => idSelected === id);
    if (indexInCharacters >= 0) {
      setFavourites([characters[indexInCharacters], ...favourites]);
      characters.splice(indexInCharacters, 1);
      setCharacters([...characters]);
    } else if (indexInFavourites >= 0) {
      setCharacters([favourites[indexInFavourites], ...characters]);
      favourites.splice(indexInFavourites, 1);
      setFavourites([...favourites]);
    }
  } 

  return (
    <>
      <p>{state.golHome}</p>
      <p>{state.golAway}</p>
      <Button onClick={() => dispatch({type: 'gol', payload: {minute: 5, player: 'Mimmo', team: 'home'}})} >Aumenta gol home</Button>
      <Button onClick={() => dispatch({type: 'gol', payload: {minute: 5, player: 'Gino', team: 'away'}})}>Aumenta gol away</Button>
      {/* {isLoading ? 
          (new Array(3)).fill(null).map((_, index) => <Grid key={index} style={{marginBottom: 2}} container><Skeleton  variant="rectangular" width={210} height={118} /></Grid>)
      :
      <>
        <p>Favourites</p>
        <Grid container>
          {favourites.map(character => 
            <MediaCard key={character.id} character={character} removeItem={remove} onSelectedItem={onSelectedItem}>
              <p>Ciao</p>
            </MediaCard>
          )}
        </Grid>
        <p>All</p>
        <Grid container>
          {characters.map(character => 
            <MediaCard key={character.id} character={character} removeItem={remove} onSelectedItem={onSelectedItem}>
              <p>Ciao</p>
            </MediaCard>
          )}
        </Grid>
      
      
      </>} */
    
    }
      
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
