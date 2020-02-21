import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const RecentAdded = ({ userData }) => {
  return (
    <React.Fragment>
      <div style={{ padding: '20px', border: '1px solid black', marginBottom: '20px' }}>
        <Typography gutterBottom variant="h5" component="h2">
            Recently Added
          </Typography>
          <Divider />
          <br />
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
            : 'No Recents'
          }
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default RecentAdded;