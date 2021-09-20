import React from 'react';
import { VideoMiniature } from './VideoMiniature/VideoMiniature.component';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));
export const VideosLayout = ({videos}) => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
          <Grid 
            container spacing={2}
            justifyContent="center"
            alignItems="flex-start"
          >
            {
              videos.map( (video, idx) => (
                <Grid key={`${video.key}${idx}`} item xs={12} xm={6} sm={3} xl={3}>
              videos.map( (video, id) => (
                <Grid key={`${video.id}${id}`} item xs={12} xm={6} sm={size} xl={size} className={classes.grid}>
                  <VideoMiniature key={video.etag} video={video} />
                </Grid>
              ))
            }
          </Grid>
        </div>
      );
}
