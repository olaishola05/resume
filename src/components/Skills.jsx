import React from 'react'
import { Container , Grid, Typography, Button, Input} from '@material-ui/core'
import useStyles from './styles'

const Skills = () => {
    const skills = ['HTML', 'CSS', "JavaScript", 'React', 'NodeJS', 'Bootstrap', "Material UI", 'Git', 'GitHub', 'API']

    const classes = useStyles()
    return (
        <div>
             <Container maxWidth='md' className={classes.tech}>
                <Typography variant='h4' align='center'>Tech Skills</Typography>
                <div className={classes.skills}>
                {skills.map((skill, idx) => {
                    return(
                        <React.Fragment key={idx}>
                            <Grid
                            // item
                            // xs={12}
                            // sm={6}
                            // md={4}
                            >

                            <div>
                            <Button color='primary' variant='outlined'>
                                {skill}
                            </Button>
                            </div>
                            
                            </Grid>
                            
                        </React.Fragment>

                
                    )
                })}
                </div>
            </Container>

        </div>
    )
}

export default Skills
