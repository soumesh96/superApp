import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import Modal from '../ui/modal/modal';
import { simpleAction } from './store/actions/simpleAction';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 250,
  },
}));

const Tab1 = ({ simpleAction, userData }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState({
    title: '',
    desc: '',
    imgUrl: '',
    header: ''
  });

  const changeValueHandler = (e, type) => {
    setValues({ ...values, [type]: e.target.value });
  }

  const closeModalHandler = () => {
    setShowModal(false);
  }

  const submitHandler = () => {
    console.log(values);
    const data = userData ? [...userData] : [];
    data.push(values);
    simpleAction(data);
  }

  console.log('data', userData)

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.incimages.com/uploaded_files/image/970x450/getty_175138996_97986.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://image.coolblue.be/840x473/content/8ffaf7fede218c80fbb670998d60c7d5"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <button onClick={() => { setShowModal(true) }}>Click Me</button>
          <Modal style={{ padding: '10px' }} open={showModal} click={closeModalHandler}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="filled-start-adornment"
                  label="Title*"
                  value={values.title}
                  onChange={(e) => { changeValueHandler(e, 'title') }}
                  type='text'
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="filled-start-adornment"
                  label="Description*"
                  value={values.desc}
                  onChange={(e) => { changeValueHandler(e, 'desc') }}
                  type='text'
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="filled-start-adornment"
                  label="Heading*"
                  value={values.header}
                  onChange={(e) => { changeValueHandler(e, 'header') }}
                  type='text'
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="filled-start-adornment"
                  label="Image Url*"
                  value={values.imgUrl}
                  onChange={(e) => { changeValueHandler(e, 'imgUrl') }}
                  type='text'
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <br />
              <div>
                <Button onClick={closeModalHandler} style={{ position: 'absolute', bottom: '10px', left: '10px' }} variant="contained" color="secondary">
                  Go Back
              </Button>
                <Button
                  disabled={!values.title || !values.desc || !values.header || !values.imgUrl}
                  onClick={submitHandler}
                  style={{ position: 'absolute', bottom: '10px', right: '10px' }}
                  variant="contained"
                  color="primary"
                >
                  Submit
              </Button>
              </div>
            </Grid>
            {/* <button onClick={submitHandler}>Submit</button> */}
            <div style={{ position: 'relative' }}>

            </div>
          </Modal>
        </Grid>
      </Grid>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  simpleAction: (data) => dispatch(simpleAction({ data }))
})

const mapStateToProps = state => ({
  userData: state.simpleReducer.userData
})

export default connect(mapStateToProps, mapDispatchToProps)(Tab1);