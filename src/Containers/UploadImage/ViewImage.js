import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const ViewImage = ({ click, submitData }) => {
  const [values, setValues] = useState({
    title: '',
    desc: '',
    imgUrl: '',
    header: ''
  });

  const changeValueHandler = (e, type) => {
    setValues({ ...values, [type]: e.target.value });
  }

  const submithandler = () => {
    submitData(values);
    const clearValues = {
      title: '',
      desc: '',
      imgUrl: '',
      header: ''
    }
    setValues(clearValues);
  }

  return (
    <React.Fragment>
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
          <Button
            onClick={click}
            style={{ position: 'absolute', bottom: '10px', left: '10px' }}
            variant="contained"
            color="secondary"
          >
            Go Back
        </Button>
          <Button
            disabled={!values.title || !values.desc || !values.header || !values.imgUrl}
            onClick={submithandler}
            style={{ position: 'absolute', bottom: '10px', right: '10px' }}
            variant="contained"
            color="primary"
          >
            Submit
        </Button>
        </div>
      </Grid>
    </React.Fragment>
  );
}

export default ViewImage;