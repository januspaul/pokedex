import {AppBar, Toolbar, IconButton, Button,Typography, Grid } from '@mui/material';
import {Link} from 'react-router-dom';



const Navbar = () => {
    
    return (

        <AppBar position="absolute" style={{ backgroundImage: `linear-gradient(#2a2a72,#009ffd)` }}>
            <Toolbar>
                <Grid container spacing={5} m={1} mx={5}>
                    <IconButton size="small" edge="start" sx={{mx:5}}>
                        <img src="logoPokemon.png" alt='Pokemon Logo' style={{"height":"90px","width":"80px"}}/>
                    </IconButton> 
                    <Button variant="text" sx={{mx:5}} >
                        <Link to="/">
                            <Typography color="common.white">
                                Home
                            </Typography>
                        </Link>
                        
                    </Button>
                    <Button variant="text" sx={{mx:5}}>
                        <Link to="/Pokedex">
                            <Typography color="common.white">
                            Pokedex
                        </Typography>
                        </Link>
                    </Button>
                    <Button variant="text" sx={{mx:5}}>
                        <Typography color="common.white">News</Typography>
                    </Button>
                    <Button variant="text" sx={{mx:5}}>
                        <Typography color="common.white">About</Typography>
                    </Button>
                    <Button variant="text" sx={{mx:5}}>
                        <Typography color="common.white">Contact</Typography>
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>

    );
}
export default Navbar;