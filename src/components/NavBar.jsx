import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import zuri from '../utils/img/zuri.svg'
import useStyles from './styles'

const NavBar = () => {
    const classes = useStyles()
    return (
      <div>
        <AppBar position="relative" className={classes.bar}>
          <Toolbar>
          <a href="https://internship.zuri.team/">
          <img src={zuri} className={classes.icon} />
            </a>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default NavBar
