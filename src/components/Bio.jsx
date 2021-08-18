import React from 'react'
// import data from '../utils/data'
import { Container , Grid, Typography, Avatar, Button} from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import useStyles from './styles'
import '../components/styles'

const Bio = () => {
    const classes = useStyles()
    const skills = ['HTML', 'CSS', "JavaScript", 'React', 'NodeJS', 'Bootstrap', "Material UI", 'Git', 'GitHub', 'API']
    return (
        <div className={classes.container}>
          <Container align='center' className='bio' maxWidth='md'>
              <Grid container className={classes.gridbio}>
                  <div className='info'>
                      <Grid className={classes.image}>
                          <Avatar className={classes.large}/>
                    <Grid className={classes.text}>
                    <Typography variant='h4'>
                         Oladipupo Ishola 
                      </Typography>
                      <Typography variant='h5' className={classes.para}>
                        Front-End Developer
                      </Typography>
                    </Grid>
                      </Grid>
                  </div>

                  
              </Grid>

              <div className={classes.info2}>
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
                  </div>

                  <Typography align='justify' className={classes.summary}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia perferendis suscipit alias, ratione est repellendus corrupti id aliquam neque error sint exercitationem recusandae ullam laborum modi laboriosam repellat beatae!
                      </Typography>

            </Container>  

            <Container maxWidth='md' className={classes.tech}>
                <Typography variant='h4' align='center'>Tech Skills</Typography>
                {skills.map((skill, idx) => {
                    return(
                        <Grid container spacing={4} key={idx}>
                            <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            >

                            <div className={classes.skills}>
                            <Button color='primary' variant='outlined'>
                                {skill}
                            </Button>
                            </div>
                            
                            </Grid>
                            
                        </Grid>
                    )
                })}
            </Container>

            <Container>
                <Typography variant='h4' align='center'>
                    Projects
                </Typography>
            </Container>
        </div>
    )
}

export default Bio
