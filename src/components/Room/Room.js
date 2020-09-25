import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import './Room.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
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
  avatar: {
    
  },
}));

export default function Room({room}){
  const classes = useStyles();
  const history = useHistory()
    const handleBook = (bedType) => {
        history.push(`/book/${bedType}`);
    }
  return (
    <Card className={classes.root}>
      <CardHeader
        
      />
      <CardMedia
        className={classes.media}
        image={room.imgUrl}
      />
      <img src={`/images/${room.bedType}.png`} alt=""/>
      <CardContent className="text">
        <Typography variant="body2" color="textSecondary" component="p">
            {room.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {room.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {room.other}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {room.extra}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {room.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <Button onClick={() => handleBook(room.bedType)} variant="contained" color="primary">
            Book
        </Button> */}
      </CardActions>
    </Card>
  );
}
