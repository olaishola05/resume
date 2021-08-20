import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Container, Typography } from '@material-ui/core';
import useStyles from './styles'

const Footer = () => {
    const classes = useStyles()
    return (
        <div>   
            <Container maxWidth='md'align='center'>
                <Typography variant='h4' className={classes.foot}>
                    Get In Touch
                </Typography>
                <div className={classes.socio}>
                    <TwitterIcon color='primary'/>
                    <GitHubIcon color='primary'/>
                    <LinkedInIcon color='primary'/>
                </div>
            </Container>
        </div>
    )
}

export default Footer
