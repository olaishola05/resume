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
                {skills.map((skill, idx) => {
                    return(
                        // <Grid container spacing={4} key={idx}>
                        //     <Grid
                        //     className={classes.skills}
                        //     item
                        //     xs={12}
                        //     sm={6}
                        //     md={4}
                        //     >

                        //     <div>
                        //     <Button color='primary' variant='outlined'>
                        //         {skill}
                        //     </Button>
                        //     </div>
                            
                        //     </Grid>
                            
                        // </Grid>

                        <div  key={idx}>
                            {/* <ul className={classes.lists}>
                                
                            </ul> */}
                            <span className={classes.skills} >{skill}</span>
                        </div>
                    )
                })}
            </Container>

        </div>
    )
}

export default Skills
