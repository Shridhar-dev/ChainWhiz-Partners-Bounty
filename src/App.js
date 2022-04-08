import './App.css';
import { Container, Grid, Typography} from '@mui/material';
import { makeStyles  } from '@mui/styles';
import style from './style';
import CardCarousel from './components/CardCarousel';
import data from './data';

const useStyles = makeStyles(style)
function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="5xl" className={classes.section}>
      <Typography variant="h3" component="h3" className={classes.heading}>
        Our <span className={classes.heading__color}>Partners</span>
      </Typography>
      <CardCarousel data={data}/>
    </Container>
  );
}

export default App;
