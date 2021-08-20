import React from 'react'
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
                        olaishola@hotmail.co.uk 
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
                          +234-8110837448
                      </Typography>
                      </div>
                  </Container>

            </Container>  

            <Container align='center' maxWidth='md' className={classes.summary}>
                  <Typography align='justify'>
                    I am a JavaScript developer with experience in ReactJS and hands-on experience collaborating on
                    projects with a team spread around the globe. I am considered a people builder with an attention to
                    detail and a relationship builder. I’m looking for new challenges and opportunities to grow in a com-
                    pany environment. I possess good teamwork skills, problem-solving abilities, and excellent com-
                    munication skills, which qualify me as a good fit for the software development sector.
                    </Typography>
                  </Container>
        </div>
    )
}

export default Bio
