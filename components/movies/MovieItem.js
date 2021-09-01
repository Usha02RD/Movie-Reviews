import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classes from './MovieItem.module.css'
import Link from 'next/link';

function MovieItem(props) {
  const movie = props.movie
  return (
    <Card className={classes.rootcard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movie.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.description.substr(0, 50)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Link href={`/movies/${movie._id}`}> Show Details</Link>
        <Button size="small" color="primary">
          Add Fav
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieItem