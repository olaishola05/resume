import React from 'react'
// import data from '../utils/data'
import { Container , Grid, Typography, Avatar} from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import useStyles from './styles'
import '../components/styles'

const Bio = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
          <Container align='center' className={classes.bio} maxWidth='md'>
              <Grid container className={classes.gridbio}>
                  <Grid container className={classes.info}>
                      <Grid className={classes.image} align='center'>
                          <Avatar className={classes.large}/>
                    <Grid className={classes.text}>
                    <Typography variant='h4'>
                         Ola Ishola 
                      </Typography>
                      <Typography variant='h5' className={classes.para}>
                        Front-End Developer
                      </Typography>
                    </Grid>
                      </Grid>
                  </Grid>

                  
              </Grid>

              <Container maxWidth='md' className={classes.info2}>
                      <div className={classes.social}>
                      <EmailIcon/>
                      <Typography align='right'>
                        emailaxocncnnxcn@mail.com 
                      </Typography>
                      </div>

                      <div className={classes.social}>
                      <LocationOnIcon/>
                      <Typography align='right'>
                          Oluyole Ibadan.
                      </Typography>
                      </div>
                      <div className={classes.social}>
                      <PhoneIphoneIcon/> 
                      <Typography align='right'>
                          0585855758555 
                      </Typography>
                      </div>
                  </Container>

            </Container>  

            <Container align='center' maxWidth='md' className={classes.summary}>
                  <Typography align='justify'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia perferendis suscipit alias, ratione est repellendus corrupti id aliquam neque error sint exercitationem recusandae ullam laborum modi laboriosam repellat beatae!
                      </Typography>
                  </Container>
        </div>
    )
}

export default Bio
