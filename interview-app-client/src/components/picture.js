import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: '2%'
  },
});

export default function PictureContainer(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.src}
          title="Contemplative Reptile"
        />
        <CardContent>

          <Typography variant="body2" size="small" align="left" color="textSecondary" component="p">
            {props.title}
          </Typography>
          <CardActions align="right" >
            <div style={{backgroundColor:'transparent',border:'none'}} id="ex1" class="modal">
              <img src={props.image} alt="image"></img>
              <a href="#" rel="modal:close">Close</a>
            </div>


            <Button><a href="#ex1" rel="modal:open">Open Modal</a></Button>
            <Button size="small"  color="primary">
              delete {props.delete}
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}