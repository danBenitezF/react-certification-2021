import React, { useContext } from 'react';
import { VideoMiniature } from './VideoMiniature/VideoMiniature.component';
import { VideosContext } from '../../providers/Videos/Videos.provider';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));
export const VideosLayout = ({videos}) => {
    const classes = useStyles();
    const { gridLayout } = useContext(VideosContext);
    const { direction } = gridLayout;
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
