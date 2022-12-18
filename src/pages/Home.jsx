import { Container, Typography, Box } from '@mui/material';

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
                <Typography>Home Routing </Typography>
            </Container>
        </>

    );
}

export default Home;