import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

import Modal from '../../Components/modal/modal';
import EditUserData from './EditUserData';
import { simpleAction, fetchInitialData, updateUserData } from '../store/actions/simpleAction';
import ViewImage from './ViewImage';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 250,
  },
}));

const UploadImage = ({ simpleAction, userData, fetchInitialData, initialData, updateUserData }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState('');

  useEffect(() => {
    if (!initialData.length > 0) {
      fetchInitialData();
    }
  }, [fetchInitialData, initialData]);

  useEffect(() => {
    console.log('initialData', initialData)
  })

  const closeModalHandler = () => {
    setShowModal(false);
  }

  const showEditModalHandler = (id) => {
    const selectedData = initialData.filter(ele => ele.id === id)[0];
    setSelectedData(selectedData);
    setEditModal(true);
  }

  const closeEditModalHandler = () => {
    setEditModal(false);
  }

  const submitHandler = (values) => {
    const selectedData = userData ? [...userData] : [];
    console.log('selectedData', selectedData);
    const data = {
      id: initialData.length + 1,
      title: values.title,
      header: values.header,
      desc: values.desc,
      imgUrl: values.imgUrl
    }
    selectedData.push(data);
    simpleAction(selectedData);
    closeModalHandler();
  }

  const updateDataHandler = (data, id) => {
    const dataToSend = {
      id: id,
      title: data.title,
      header: data.header,
      desc: data.desc,
      imgUrl: data.imgUrl
    }
    updateUserData(dataToSend);
    closeEditModalHandler();
  }


  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {initialData && initialData.length > 0
          ?
          initialData.map((ele, index) => (
            <Grid item xs={4} key={index}>
              <Card style={{ flexGrow: '1' }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: '250px' }}
                    image={ele.imgUrl}
                    title={ele.title}
                    onClick={() => { showEditModalHandler(ele.id) }}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))
          : 'No Things Found'
        }
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<LibraryAddIcon />}
            style={{ display: 'flex', margin: '0 auto' }}
            onClick={() => { setShowModal(true) }}
          >
            Add Image To Gallery
          </Button>
        </Grid>
      </Grid>
      {showModal &&
        <Modal style={{ padding: '10px' }} open={showModal} click={closeModalHandler}>
          <ViewImage
            submitData={submitHandler}
            click={closeModalHandler}
          />
        </Modal>
      }
      {editModal && selectedData &&
        <Modal style={{ padding: '10px' }} open={editModal} click={closeEditModalHandler}>
          <EditUserData
            selectedData={selectedData}
            click={closeEditModalHandler}
            updateData={updateDataHandler}
          />
        </Modal>
      }
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  simpleAction: (data) => dispatch(simpleAction({ data })),
  updateUserData: (data) => dispatch(updateUserData({ data })),
  fetchInitialData: () => dispatch(fetchInitialData())
})

const mapStateToProps = state => ({
  userData: state.simpleReducer.userData,
  initialData: state.simpleReducer.initialData
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);