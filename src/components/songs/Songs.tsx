import { Button, TextField } from '@mui/material';
import React, { FC, useState, useEffect, KeyboardEvent, ChangeEvent }from 'react';
import { useSongs } from '../../hooks/useSongs';
import { MediaCard, MediaSong } from '../muicard';


const Songs: FC = () => {

    const [term, setTerm] = useState('');
    const [tempTerm, setTempTerm] = useState('');
    const [songs] = useSongs(term);


    const setInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTempTerm(event.target.value);
    }
    // const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    //     event.key === 'Enter' && setTerm(tempTerm);
    // }
    


    return <div style={{marginTop: 30, marginLeft: 20}}>
        <TextField onKeyDown={({key}:  KeyboardEvent<HTMLDivElement>) =>  key === 'Enter' && setTerm(tempTerm)} onChange={setInputChange} id="outlined-basic" label="Outlined" variant="outlined" />
        <Button onClick={() => setTerm(tempTerm)}>Cerca</Button>
        <p>Sto vedendo il componente songs</p>
        {
            songs.map((song) => (<MediaSong key={song.trackId} song={song}></MediaSong>))
        }
    </div>
}

export { Songs };