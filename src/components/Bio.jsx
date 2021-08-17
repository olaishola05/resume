import React from 'react'
// import data from '../utils/data'
import { Container , Grid, Typography, Avatar} from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import useStyles from './styles'

const Bio = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
          <Container className={classes.bio} maxWidth='md'>
              <Grid container justifyContent='space-around'>
                  <div className={classes.info}>
                      <div className={classes.image}>
                          <Avatar className={classes.large}/>
                    <div className={classes.text}>
                    <Typography variant='h4'>
                         Oladipupo Ishola 
                      </Typography>
                      <Typography variant='h5' className={classes.para}>
                        Front-End Developer
                      </Typography>
                    </div>
                      </div>
                  </div>

                  <div className={classes.info}>
                      <Typography align='right'>
                        emailaxocncnnxcn@mail.com <EmailIcon/>
                      </Typography>
                  </div>

                  <Typography align='justify' className={classes.summary}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia perferendis suscipit alias, ratione est repellendus corrupti id aliquam neque error sint exercitationem recusandae ullam laborum modi laboriosam repellat beatae!
                      </Typography>

              </Grid>
            </Container>  
        </div>
    )
}

export default Bio
