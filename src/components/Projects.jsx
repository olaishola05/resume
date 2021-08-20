import React from 'react'
import { Container , Grid, Typography, Button, Card, CardActions, CardMedia, CardContent} from '@material-ui/core'
import useStyles from './styles'
import catering from '../utils/img/catering.png'
import meal from '../utils/img/meal.png'
import nomination from '../utils/img/nominations.png'
import tabify from '../utils/img/tabify-home.png'
import todo from '../utils/img/todoApp.png'

const Projects = () => {
    const projects = [
        {
            id: '1',
            title: 'Tabify',
            desc: 'A one-stop bookmark management tool for the users. It is a chrome extension that capture all your tabs in the current window under a defined category and group to restore tabs as and when required.',
            url: '',
            imageSrc: tabify,
            gitHub: 'https://github.com/MLH-Fellowship/pod-3.1.0-DevBuddy'
        },

        {
            id: '2',
            title: 'Movie Nomination',
            desc: 'An app for nominating a movie title of your choice. The app allows nominating of five movie titles also users can delete any title and replace it with another. When the user add nominations, the lists are stored in a localStorage for persistency.',
            url: '',
            imageSrc: nomination,
            gitHub: 'https://github.com/netman5/Shoppies-app'
        },

        {
            id: '3',
            title: 'Todo App',
            desc: 'A Todo app for organizing day to day tasks. If the tasks are ticked as completed, it puts a line through it. It also filtered for active todos.',
            url: 'https://mytodos-app.netlify.app/',
            imageSrc: todo,
            gitHub: 'https://github.com/netman5/TodoApp'
        },

        {
            id: '4',
            title: 'Recipe Generator',
            desc: 'A recipe app that generates random meal at every click, including details about the meal such as Country of origin, instructions on how to cook it, a YouTube video showing the chef cooking the actual meal and etc.',
            url: 'https://randomrecipegenerator.netlify.app/',
            imageSrc: meal,
            gitHub: 'https://github.com/netman5/Random-Meal-Generator'
        },

        {
            id: '5',
            title: 'Signet Catering',
            desc: 'A catering website',
            url: 'https://netman5.github.io/netman5-signet-catering/',
            imageSrc: catering,
            gitHub: 'https://github.com/netman5/netman5-signet-catering'
        }

    ]
    const classes = useStyles()
    return (
        <div>
            <Container maxWidth='md' className={classes.projects}>
            <Typography variant='h4' align='center' gutterBottom className={classes.projectTitle}>Projects</Typography>
            <Grid container spacing={4}>
            
            </Grid>
            </Container>
            
            <Container align='center' maxWidth='md'>
            <div className={classes.projectCard}>
            {projects.map((project) => {
                return(
                    <React.Fragment key={project.id}>
                        <div className={classes.projectCards}>
                        <div className={classes.card}>
                        <h1>{project.title}</h1>
                        <img src={project.imageSrc} alt={project.title} className={classes.img} />
                        <span>{project.desc}</span>
                        <div>
                            <Button size='small' color='primary'>
                                <a  className={classes.btn} href={project.gitHub}>GitHub</a>
                            </Button>
                            <Button size='small' color='primary'>
                                <a className={classes.btn} href={project.url}>Live</a>
                            </Button>
                        </div>
                        </div>
                        </div>
                    </React.Fragment>
                )
            })}
            </div>
            </Container>
        </div>
    )
}

export default Projects
