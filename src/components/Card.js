import { Grid,Typography } from '@mui/material'
import React from 'react'
import styles from './style'
import { makeStyles  } from '@mui/styles';
import { Box } from '@mui/system';
import Website from '../assets/Globe.svg'
import Discord from '../assets/discord.svg'
import Twitter from '../assets/twitter.svg'

const useStyles = makeStyles(styles)

function Card({data}) {
  
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.bannerOuter}>
        <div style={{backgroundImage:`url(${data.banner})`}} className={classes.banner}></div>
      </Grid>
      
      <Grid item xs={12} className={classes.cardContent} >
        <Box className={classes.partnerImage}>
          <img src={data.image} alt="partner-logo"/>
        </Box>
        <Typography variant="h4" component="h4" mt={5} className={classes.title}>
          {data.name}
        </Typography>
        <Typography variant="p" component="p" mt={4} className={classes.para}>
          {data.description}
        </Typography>
        <Box mt={5} className={classes.footerIcons}>
          <a href={data.websiteLink}>
            <img src={Website} className={classes.socials} alt="globe-icon"/>
          </a>
          <a href={data.discordLink}>
            <img src={Discord} className={classes.socials} alt="discord-icon"/>
          </a>
          <a href={data.twitterLink}>
            <img src={Twitter} className={classes.socials} alt="twitter-icon"/>
          </a>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Card