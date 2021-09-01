import {useRef} from 'react'
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";
import classes from "./NewMovie.module.css";

function NewMovie(props) {
   const titleRef = useRef();
   const descRef = useRef();
   const imgRef = useRef();
   const dateRef = useRef();
  
  const submitHandler = (event) => {
     event.preventDefault()

     const title = titleRef.current.value;
     const description = descRef.current.value;
     const image = imgRef.current.value;
     const releasedate = dateRef.current.value;

     console.log(title)

     const movieData = {
       title,
       description,
       image,
       releasedate
     }
     console.log(movieData)

     props.onAddMovie(movieData)
  }

  return (
    <div className={classes.newcard}>
      <h2>Add New Movie</h2>
      <form onSubmit={submitHandler}>
        <FormGroup>
          <FormControl className={classes.control}>
            <label>Title</label>
            <Input
              type="text"
              required
              inputRef={titleRef}
            />
          </FormControl>

          <FormControl className={classes.control}>
            <label>Description</label>
            <Input
              type="text"
              inputRef={descRef}
              required
            />
          </FormControl>

          <FormControl className={classes.control}>
            <label>Image Link</label>
            <Input
              type="text"
              inputRef={imgRef}
              required
            />
          </FormControl>

          <FormControl className={classes.control}>
            <label>Release Date</label>
            <Input
              type="date"
              inputRef={dateRef}
              required
            />
          </FormControl>
          <Button variant="contained" color="primary" type="submit">
            Add Movie
          </Button>
        </FormGroup>
      </form>
    </div>
  );
}

export default NewMovie;
