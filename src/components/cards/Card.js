import { Slide ,Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";
import cx from 'classnames';


function Cards(props) {
  console.log(props);
  return ( 
    <div className='CardContainer'>
      <Grid container spacing={3} justify="center">
         <Grid item component={Card} className='CardGrid infected'>
          <CardContent className='Card' >
            <Typography>INFECTED</Typography>
            <Typography variant="h5">
            <Countup
                start={0}
                end={props.data.recovered}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography>{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              number of active cases in covid
            </Typography>
          </CardContent>
       </Grid>
 
        <Grid item component={Card} className='CardGrid recovered'>
        <CardContent className='Card'>
            <Typography color="textSecoundary">RECOVERED</Typography>
            <Typography variant="h5">
                <Countup
                start={0}
                end={props.data.deaths}
                duration={2}
                separator=","
              /></Typography>
            <Typography>{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              number of active cases in covid
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className='CardGrid deaths'>
        <CardContent className='Card'>
            <Typography color="textSecoundary">DEATHS</Typography>
            <Typography variant="h5"><Countup
                start={0}
                end={props.data.confirmed}
                duration={2}
                separator=","
              /></Typography>
            <Typography>{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              number of active cases in covid
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
