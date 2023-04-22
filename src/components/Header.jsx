import React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';

import { Link } from 'react-router-dom';

export default function Header() {
  
    return (
        <AppBar position="static" style={{ marginBottom: '50px' }}>
          <Toolbar>
            <IconButton component={Link} to="/" edge="start"  color="inherit" aria-label="home">
            <img src="/pikachu.png" alt="Pokemon logo" style={{ width: '25%', height: 'auto' }} />
            </IconButton>
            <Typography variant="h3">
                Pokedex
            </Typography>
          </Toolbar>
        </AppBar>  
    );
  }