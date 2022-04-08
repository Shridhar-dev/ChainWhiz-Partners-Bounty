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
    <Carousel className={classes.carousel}>
      {
        data.map((slide,index)=>{
          return(
            <Grid container spacing={8}>
              {
                slide.map((card,index)=>{
                  return(
                    <Grid item xs={12} md={6}>
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