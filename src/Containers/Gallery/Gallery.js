import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
// import classes from './tab1.module.css';

import RecentAdded from './RecentAdded';
import GalleryView from './GalleryView';
import { deleteGalleryImage } from '../store/actions/simpleAction';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Tab2 = (props) => {
  const classes = useStyles();
  const { userData, initialData, deleteGalleryImage } = props;
  const deleteImageHandler = (id) => {
    deleteGalleryImage(id);
  }
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
        deleteImage={deleteImageHandler}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteGalleryImage: (id) => dispatch(deleteGalleryImage({ id }))
})

const mapStateToProps = state => ({
  userData: state.simpleReducer.userData,
  initialData: state.simpleReducer.initialData
})

export default connect(mapStateToProps, mapDispatchToProps)(Tab2);
