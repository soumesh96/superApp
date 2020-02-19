import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 250,
  },
}));

const Tab2 = (props) => {
  const classes = useStyles();
  const { userData } = props;
  console.log('props', props)
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {userData && userData.length > 0
        ?
        userData.map(ele => (
          <Grid item xs={4}>
          <Card style={{ flexGrow: '1' }}>
            <CardActionArea>
              <CardMedia
                style={{ height: '250px' }}
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
        ))
        : 'No Things Found'
      }
        Hello
      </Grid>
    </div>
  )
}

// const mapDispatchToProps = dispatch => ({
//   simpleAction: (data) => dispatch(simpleAction({ data }))
// })

const mapStateToProps = state => ({
  userData: state.simpleReducer.userData
})

export default connect(mapStateToProps, null)(Tab2);
