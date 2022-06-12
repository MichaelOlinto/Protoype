import { AppBar, Toolbar, Typography, styled, IconButton, ThemeProvider, createTheme, Button, InputLabel, OutlinedInput, FormControl } from "@mui/material";
import { grey } from "@mui/material/colors";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React from "react";

const useStyles = styled(theme =>({
    offset: theme.mixins.toolbar,
}))

const backgroundTheme = createTheme({
    palette: {
        primary: {
            main: grey[50],
        },
    },
});

const Navbar = () => {
    const classes = useStyles()
    return(
        <ThemeProvider theme={backgroundTheme}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton sx={{ mr: 30 }}>
                        <img src={require('../Assets/IMG/Group.png')} />
                    </IconButton>
                    <FormControl sx={{ m: 1, width: '35ch', mr: 20 }} variant="filled">
                        <InputLabel htmlFor="outlined-adornment-password">Search and Find</InputLabel>
                        <OutlinedInput type='text' endAdornment={
                            <IconButton>
                                <SearchRoundedIcon />                            
                            </IconButton>
                        }
                        label="Password"
                        />
                    </FormControl>
                    <IconButton>
                        <Button variant="contained" color="inherit" size="large">+ADD</Button>
                    </IconButton>
                    <IconButton>
                        <img src={require('../Assets/IMG/Notification - Iconly---Bold.png')} />
                    </IconButton>
                    <IconButton>
                        <img src={require('../Assets/IMG/Chat - Iconly---Bold.png')} />
                    </IconButton>
                    <Typography sx={{ mr: 2}}>
                        Clarence Russell
                    </Typography>
                    <img src={require('../Assets/IMG/Placeholders/Profile/Picture.png')} />
                    <IconButton>
                        <img src={require('../Assets/IMG/Arrow---Down-2 - Iconly---Bold.png')} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </ThemeProvider>
    )
}

export default Navbar;