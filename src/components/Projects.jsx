import React from 'react'
import { Container , Grid, Typography, Button, Card, CardActions, CardMedia, CardContent} from '@material-ui/core'
import useStyles from './styles'


const Projects = () => {
    const projects = [
        {
            id: '1',
            title: 'Tabify',
            desc: ' A chrome extesnion tab manager',
            url: '',
            imageSrc: './utils/img/catering.png',
            gitHub: ''
        },

        {
            id: '2',
            title: 'Movie Nomination',
            desc: 'A movie nomination app',
            url: '',
            imageSrc: './utils/img/nominations.png',
            gitHub: ''
        },

        {
            id: '3',
            title: 'Todo App',
            desc: '',
            url: '',
            imageSrc: '',
            gitHub: ''
        },

        {
            id: '4',
            title: 'Recipe Generator',
            desc: 'An app for generating random meal recipe',
            url: '',
            imageSrc: './utils/img/meal.png',
            gitHub: ''
        }

    ]
    const classes = useStyles()
    {console.log(projects)}
    return (
        <div>
            <Container maxWidth='md' className={classes.projects}>
            <Typography variant='h4' align='center' gutterBottom>Projects</Typography>
            <Grid container spacing={4}>
            {projects.map((project) => {
                
                <Grid 
                item 
                key={project.id}
                xs={12}
                sm={6}
                md={4}
                >
                <Card 
                className={classes.card} 
                >
                    
                    <CardMedia
                        className={classes.cardMedia}
                        component='img'
                        image={project.imageSrc}
                        title= {project.title}
                    />

                        {console.log(project.title)}
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant='h5'>
                            {project.title}
                            {console.log(project.title)}
                        </Typography>

                        <Typography>
                            {project.desc}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size='small' color='primary'>
                            <a href={project.gitHub}>GitHub</a>
                        </Button>
                        <Button size='small' color='primary'>
                            <a href={project.url}>Live</a>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            // <p>{project.title}</p>
         
            })}
            </Grid>
            </Container>
        </div>
    )
}

export default Projects
