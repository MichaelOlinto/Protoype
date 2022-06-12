import React from "react";
import { Button, ButtonBase, Paper, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from "../Assets/IMG/3000434.png";
import { grey } from "@mui/material/colors";


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    margin: 2,
    backgroundColor: 'inherit',
    boxShadow: "inherit",
  }));



const ContainerEvents = () => {
    return(
        <Paper container
            elevation={0}
            sx={{
            p: 2,
            margin: 13,
            marginBottom: 0,
            border: 0,
            maxWidth: 'auto',
            flexGrow: 1,
            height: 380,
            backgroundColor: 'inherit',
            }}
            >
            <Stack>
                <Item elevation={0}>
                    <Typography variant="h4" color="#283593">Events</Typography>
                </Item>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Paper container elevation={0}
                    sx={{
                        margin: 1,
                        height: 280,
                        width: 802,
                        backgroundImage: `url(${Image})`,
                        alignItems: 'center',
                    }}>
                    <Stack direction="row" justifyContent="space-around" alignItems="stretch">
                        <Stack direction="row" justifyContent="center">
                            <Button variant="contained" >
                                <ArrowBackIcon color="disabled"/>
                            </Button>
                            <Item>
                                <Typography variant="h3">
                                    Youth Talent Y Education
                                </Typography>
                            </Item>
                        </Stack>
                        <Stack direction="row">
                            <Item>
                                <Typography variant="h4">
                                    May, 20
                                </Typography>
                            </Item>
                            <Button variant="contained" >
                                <ArrowForwardIcon color="disabled" />
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>
                <Paper container elevation={0}
                    sx={{
                        margin: 1,
                        height: 280,
                        width: 259,
                        backgroundColor: 'inherit',
                        alignItems: 'center',
                    }}>
                    <Stack direction="column">
                        <Item>
                            <Typography variant="h6" >
                                EVENTS TODAY
                            </Typography>
                        </Item>
                        <Paper container elevation={0}
                            sx={{
                                margin: 1,
                            }}>
                            <Stack direction="row">
                                <Stack sx={{
                                    margin: "auto",
                                    marginLeft: "0",
                                    marginRight: "10",
                                    }}>
                                    <img src={require('../Assets/IMG/thumbnail.png')} />
                                </Stack>
                                <Stack direction="column" margin="auto">
                                    <Item >
                                        <Typography variant="button" >
                                            10:30 AM
                                        </Typography>
                                    </Item>
                                    <Item padding="0">
                                        <Typography variant="button" fontSize={10}>
                                            Webinar:the basics of...
                                        </Typography>
                                    </Item>
                                </Stack>
                            </Stack>
                        </Paper>
                        <Paper container elevation={0}
                            sx={{
                                margin: 1,
                            }}>
                            <Stack direction="row">
                                <Stack sx={{
                                    margin: "auto",
                                    marginLeft: "0",
                                    marginRight: "10",
                                    }}>
                                    <img src={require('../Assets/IMG/thumbnail.png')} />
                                </Stack>
                                <Stack direction="column" margin="auto">
                                    <Item>
                                        <Typography variant="button">
                                            2:15 PM
                                        </Typography>
                                    </Item>
                                    <Item>
                                        <Typography variant="button" fontSize={10}>
                                            Team Building Activity
                                        </Typography>
                                    </Item>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Stack>
                </Paper>
            </Stack>

        </Paper>
    );
};

export default ContainerEvents;