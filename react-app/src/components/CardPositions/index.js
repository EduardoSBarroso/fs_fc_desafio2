import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './index.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      display: 'inline-block',
      width: 280,
      height: 'auto',
      backgroundColor: '#F0F8FF'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }),
);

export default ({data}) => {
  const classes = useStyles();

  return (
    <Card 
        className={classes.root}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
              <img src="https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/logo-top.png" />
          </Avatar>
        }
        title={data.title}
        subheader="Full Cycle Event"
        style={{color:'#000'}}
      />
      <CardMedia
        className={classes.media}
        image={data.image}
        title={data.location}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            <div className="location">
              <div className="latitude">
                  {
                    `Start position:
                    Latitude - ${data.startPosition.latitude}
                    Longitude - ${data.startPosition.longitude}`
                  }
              </div>
              <div className="longitude">
                {
                  `End position:
                    Latitude - ${data.endPosition.latitude}
                    Longitude - ${data.endPosition.longitude}`
                }
              </div>
            </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{color:'#FF0000'}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
