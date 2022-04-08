import { Grid } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Card from './Card'
import styles from './style'
import { makeStyles  } from '@mui/styles';

const useStyles = makeStyles(styles)
function CardCarousel({data}) {
  const classes = useStyles();

  return (
    <Carousel 
      className={classes.carousel}
      indicatorIconButtonProps={{
        style: {
            color: '#DCDCDC',
            opacity:0.6,
            margin:"0rem 0.5rem"
        }
      }}
      activeIndicatorIconButtonProps={{
          style: {
              opacity:1 
          }
      }}
      
    >
      {
        data.map((slide,i)=>{
          return(
            <Grid container spacing={8} key={i}>
              {
                slide.map((card,j)=>{
                  return(
                    <Grid item xs={12} md={6} key={j}>
                      <Card data={card}/>
                    </Grid>
                  )   
                })
              }
            
            </Grid>
          )
        })
      }
     
    </Carousel>

  )
}

export default CardCarousel