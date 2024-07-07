import React from 'react';
import { AppBar, Toolbar, Button, Container, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

const Navbar = () => {
    return (
        <AppBar position="fixed" color="default" elevation={3}>
            <Container maxWidth="lg">
                <Toolbar className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <img
                            src="https://static.souenergy.com.br/logo/stores/1/Dimens_o-da-logo-da-Sou--180x60-px.png"
                            alt="logo"
                            className="w-32"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            href="/offers"
                            className="text-black rounded-lg px-4 py-2 font-bold md:text-base sm:text-sm xl:text-xl text-xs mx-2"
                        >
                            Offers
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            href="/adm"
                            className="text-black rounded-lg px-4 py-2 font-bold md:text-base sm:text-sm xl:text-xl text-xs mx-2"
                        >
                            Dashboard
                        </Button>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
