import { Grid,  Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import Image from "../Assets/IMG/Headers/header-4.png"

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    margin: 0,
    backgroundColor: 'inherit',
    boxShadow: "inherit",
  }));

const ContainerDashboard2 = () =>{
    return(
        <Paper container elevation={24}
            sx={{
            p: 2,
            margin: 12,
            width: 1100,
            flexGrow: 1,
            height: 110,
            backgroundImage: `url(${Image})`,
            paddingTop: 0,
            }}
            >
            <Stack direction="row" justifyContent="flex-start">
                <Paper elevation={0}
                    sx={{
                        p: 2,
                        margin: 0,
                        border: 0,
                        padding: 0,
                        width: 240,
                        backgroundColor: 'inherit',
                    }}>
                    <Item>
                        <img src={require('../Assets/IMG/Group 9.png')} />
                    </Item>
                </Paper>
                <Paper elevation={0}
                    sx={{
                        p2: 2,
                        margin: 0,
                        border: 0,
                        padding: 0,
                        width: 400,
                        backgroundColor: 'inherit',
                        justifyContent: "flex-start"
                    }}>
                        <Stack alignItems="center">
                            <Item>
                                <Typography>
                                    Welcome back, Clarence
                                </Typography>
                            </Item>
                            <Item>
                                <Typography>
                                    Ta-da! You're up to date
                                </Typography>
                            </Item>
                        </Stack>
                </Paper>
            </Stack>
        </Paper>
    );
};

export default ContainerDashboard2;