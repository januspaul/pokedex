import{Container,Typography,Box} from '@mui/material';
import Navbar from '../Navbar';
const Home = () => {
    return(
        
        <>
            <Navbar/>
            <Container>
            <Box component="header"
            height={300}
            backgroundSize="cover"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Typography variant='h1'>Hello World!</Typography>
              
            </Box>
           <Typography>Home Routing </Typography>
        </Container>
        </>
        
    );
}

export default Home;