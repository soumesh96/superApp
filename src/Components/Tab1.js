import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

import Modal from '../ui/modal/modal';
import EditUserData from './EditUserData';
import { simpleAction, fetchInitialData, updateUserData } from './store/actions/simpleAction';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 250,
  },
}));

const Tab1 = ({ simpleAction, userData, fetchInitialData, initialData, updateUserData }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState('');
  const [values, setValues] = useState({
    title: '',
    desc: '',
    imgUrl: '',
    header: ''
  });

  useEffect(() => {
    fetchInitialData();
    console.log('iam here')
  }, []);

  const changeValueHandler = (e, type) => {
    setValues({ ...values, [type]: e.target.value });
  }

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

  const submitHandler = () => {
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
  }

  const updateDataHandler = (data, id) => {
    const dataToSend = {
      id: id,
      title: data.title,
      header: data.header,
      desc: data.desc,
      imgUrl: data.imgUrl
    }
    console.log(dataToSend)
    updateUserData(dataToSend);
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
                  {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {ele.header}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {ele.desc}
                    </Typography>
                  </CardContent> */}
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
          <Modal style={{ padding: '10px' }} open={showModal} click={closeModalHandler}>
            <Typography align='center' variant="h5" component="h2">
              Enter details
            </Typography>
            <Divider />
            <Grid style={{ marginTop: '25px' }} container spacing={2}>
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
          </Modal>
        </Grid>
      </Grid>
      {editModal && selectedData &&
        <Modal style={{ padding: '10px' }} open={editModal} click={closeEditModalHandler}>
          <EditUserData selectedData={selectedData} click={closeEditModalHandler} updateData={updateDataHandler} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Tab1);