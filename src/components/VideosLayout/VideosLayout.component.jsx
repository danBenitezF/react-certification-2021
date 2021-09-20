import React from 'react';
import { VideoMiniature } from './VideoMiniature/VideoMiniature.component';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({theme}) => ({
  root: {
    flexGrow: 1,
  }, 
  grid: {
    width: '100%',
  }
}));
export const VideosLayout = ({videos, direction}) => {
    const classes = useStyles();
    const size = direction === 'column' ? 12 : 3
    return (
        <div className={classes.root}>
          <Grid 
            container spacing={2}
            justifyContent="center"
            alignItems="flex-start"
            direction={direction}
          >
            {
              videos.map( (video, idx) => (
                <Grid key={`${video.id}${idx}`} item xs={12} xm={6} sm={size} xl={size} className={classes.grid}>
                  <VideoMiniature key={video.etag} video={video} />
                </Grid>
              ))
            }
          </Grid>
        </div>
      );
}
