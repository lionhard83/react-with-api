import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Character, User } from '../../models/User';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: 10,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MediaCard = (props: {character: Character}) => {
  const [elevation, setElevation] = useState(2 as 2 | 13)
  const {root, media} = useStyles();
  const character = props.character;
  const {name, image, status} = character;

  return (
    <Grid item xs={1} md={6} xl={8}>
        <Card 
        onMouseEnter={(_) => setElevation(13)} 
        onMouseLeave={(_) => setElevation(2)} 
        onClick={()=> console.log('ciao')} 
        elevation={elevation} 
        className={root}>
        <CardActionArea>
            <CardMedia
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
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button variant='contained' size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    </Grid>
  );
}

export default MediaCard;