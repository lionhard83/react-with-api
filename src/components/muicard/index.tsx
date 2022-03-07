import React, { useState, FC }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Character } from '../../models/User';
import { Grid } from '@material-ui/core';
import { Song } from '../../models/Song';

const useStyles = makeStyles({
  root: {
    margin: 10,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
type OnSelectedItemFunction =  (_: number) => void;

type MediaCardProps = {
  character: Character, 
  removeItem: OnSelectedItemFunction,
  onSelectedItem: OnSelectedItemFunction,
};

type MediaCardSong= {
  song: Song
};


const MediaCard: FC<MediaCardProps> = ({character, removeItem, onSelectedItem, children}) => {
  const [elevation, setElevation] = useState<2 | 13>(2)
  const {root, media} = useStyles();
  const {name, image, status, id} = character;

  return (
    <Grid item >
        <Card 
        onMouseEnter={(_) => setElevation(13)} 
        onMouseLeave={(_) => setElevation(2)} 
        elevation={elevation} 
        style={{width: 200}}
        className={root}>
        <CardActionArea>
            <CardMedia
            style={{width: 200}}
            className={media}
            image={image}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Your status is {status}
            </Typography>
            {children}
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button onClick={() => removeItem(id)} variant='contained' size="small" color="primary">
            Delete
            </Button>
            <Button onClick={() => onSelectedItem(id)} size="small" color="primary">
            Switch
            </Button>
        </CardActions>
        </Card>
    </Grid>
  );
}

const MediaSong: FC<MediaCardSong> = ({song}) => {
  const [elevation, setElevation] = useState<2 | 13>(2)
  const {root, media} = useStyles();
  const {trackId, artworkUrl100, trackName, artistName } = song;

  return (
    <Grid item >
        <Card 
        onMouseEnter={(_) => setElevation(13)} 
        onMouseLeave={(_) => setElevation(2)} 
        elevation={elevation} 
        style={{width: 200}}
        className={root}>
        <CardActionArea>
            <CardMedia
            style={{width: 200}}
            className={media}
            image={artworkUrl100}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {trackName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Your status is {artistName}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            {/* <Button onClick={() => removeItem(id)} variant='contained' size="small" color="primary">
            Delete
            </Button>
            <Button onClick={() => onSelectedItem(id)} size="small" color="primary">
            Switch
            </Button> */}
        </CardActions>
        </Card>
    </Grid>
  );
}

export { MediaCard, MediaSong};