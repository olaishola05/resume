import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import useStyles from './styles'

const NavBar = () => {
    const classes = useStyles()
    return (
      <div>
        <AppBar position="relative" className={classes.bar}>
          <Toolbar>
            <LocalLibraryIcon className={classes.icon} />
            <Typography variant="h4">Online Resume</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default NavBar
