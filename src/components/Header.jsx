import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

import HomeIcon from '@material-ui/icons/Home';

import { Link } from 'react-router-dom';

export default function Header() {
  
    return (
        <AppBar position="static">
          <Toolbar>
            <IconButton component={Link} to="/" edge="start"  color="inherit" aria-label="home">
            <img src="/pokemonlogo.png" alt="Pokemon logo" />
            </IconButton>
            <Typography variant="h6">
                Pokedex
            </Typography>
          </Toolbar>
        </AppBar>  
    );
  }