import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
    maxWidth: 410,
  },
  media: {
    height: 150,
  },
});

export const VideoMiniature = ( { video } ) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://c.tenor.com/gu_WB1ls-7oAAAAd/spiderman-we.gif"
          title={video.snippet.title}
        />
        <CardContent>
          <Tooltip title={ video.snippet.title }>
            <Typography noWrap gutterBottom component="h4">
              { video.snippet.title }
            </Typography>
          </Tooltip>
          <Typography variant="body2" color="textSecondary" component="p">
            { video.snippet.channelTitle }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
