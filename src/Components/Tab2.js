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
          userData.map((ele, index) => (
            <Grid item xs={4} key={index}>
              <Card style={{ flexGrow: '1' }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: '250px' }}
                    image={ele.imgUrl}
                    title={ele.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {ele.header}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {ele.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
          : 'No Things Found'
        }
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
