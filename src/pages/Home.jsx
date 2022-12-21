import { Container, Typography, Box } from '@mui/material';
import Featured from '../components/home/Featured';

const Home = () => {
    return (

        <>
            <Container>
                <Box component="header"
                    height={300}
                    backgroundsize="cover"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography variant='h1'>Hello World!</Typography>
                </Box>
                <Featured />
            </Container>
            <img className='img-fluid d-block w-100' src="hero2.png" alt="hero2 component background" />
        </>

    );
}

export default Home;