import React from 'react';
import { VideoMiniature } from './VideoMiniature/VideoMiniature.component';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { videosData } from '../../videos-mock';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));
export const VideosLayout = () => {
    const classes = useStyles();
    const { items: videos } = videosData;
    return (
        <div className={classes.root}>
          <Grid 
            container spacing={2}
            justifyContent="center"
            alignItems="flex-start"
          >
            {
              videos.map( video => (
                <Grid key={video.key} item xs={12} xm={6} sm={3} xl={3}>
                  <VideoMiniature key={video.id} video={video} />
                </Grid>
              ))
            }
          </Grid>
        </div>
      );
}
