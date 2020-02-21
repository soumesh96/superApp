import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
// import classes from './tab1.module.css';

import RecentAdded from './RecentAdded';
import GalleryView from './GalleryView';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Tab2 = (props) => {
  const classes = useStyles();
  const { userData, initialData } = props;
  return (
    <div className={classes.root}>
      <Typography align='center' variant="h5" component="h2">
        Gallery
      </Typography>
      <Divider />
      <br />
      <RecentAdded
        userData={userData}
      />
      <GalleryView
        initialData={initialData}
      />
    </div>
  )
}

// const mapDispatchToProps = dispatch => ({
//   simpleAction: (data) => dispatch(simpleAction({ data }))
// })

const mapStateToProps = state => ({
  userData: state.simpleReducer.userData,
  initialData: state.simpleReducer.initialData
})

export default connect(mapStateToProps, null)(Tab2);
