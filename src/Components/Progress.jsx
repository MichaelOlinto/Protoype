import React from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { width } from "@mui/system";
import Image from "../Assets/IMG/Oval + Oval + Oval Mask.png"

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    margin: 2,
    backgroundColor: 'inherit',
    boxShadow: "inherit",
  }));

const Progress = () => {
    return (
        <Paper container
            elevation={24}
            sx={{
            p: 2,
            margin: 13,
            marginTop: 0,
            marginBottom: 0,
            border: 0,
            maxWidth: 'auto',
            flexGrow: 1,
            height: 380,
            backgroundColor: 'inherit',
            }}>
            <Stack direction="row">
                <Paper elevation={24} sx={{
                    width:'30%',
                }}>
                    <Item>
                        <Typography >
                            Progress Over view
                        </Typography>
                    </Item>
                </Paper>
                <Paper elevation={24} sx={{
                    width: '70%'
                }}>
                    <Stack direction="column">
                        <Item>
                            <Typography>
                                Progress
                            </Typography>
                        </Item>
                        <Paper elevation={24}>
                            <Stack direction="column">
                                <Grid container sx={4} spacing={12}>
                                    <Grid item>
                                        <Stack direction="row">
                                            <Item>
                                                <Typography>
                                                    Total Webinar
                                                </Typography>                                        
                                            </Item>
                                            <Item>
                                                <Typography>
                                                    9
                                                </Typography>
                                            </Item>
                                        </Stack>
                                    </Grid>
                                    <Grid item>
                                        <Stack direction="row">
                                            <Item>
                                                <Typography>
                                                    Pending Assigments
                                                </Typography>
                                            </Item>
                                            <Item>
                                                <Typography>
                                                    0
                                                </Typography>
                                            </Item>
                                        </Stack>
                                    </Grid>
                                    <Grid item>
                                        <Stack direction="row">
                                            <Item>
                                                <Typography>
                                                    Total Units
                                                </Typography>
                                            </Item>
                                            <Item>
                                                <Typography>
                                                    5
                                                </Typography>
                                            </Item>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                <Grid item spacing={12}>
                                        <Stack direction="row">
                                            <Item>
                                                <Typography>
                                                    Total Readings
                                                </Typography>                                        
                                            </Item>
                                            <Item>
                                                <Typography>
                                                    14
                                                </Typography>
                                            </Item>
                                        </Stack>
                                    </Grid>
                                    <Grid item>
                                        <Stack direction="row">
                                            <Item>
                                                <Typography>
                                                    Total Videos
                                                </Typography>
                                            </Item>
                                            <Item>
                                                <Typography>
                                                    5
                                                </Typography>
                                            </Item>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </Paper>
                        <Paper elevation={24} sx={{
                            backgroundImage: `url(${Image})`,
                            backgroundColor: 'inherit',
                        }}>
                            <Item>
                                <Typography>
                                    Confirm your account details Please confirm your email and phone number
                                </Typography>
                            </Item>
                        </Paper>
                    </Stack>
                </Paper>
            </Stack>
        </Paper>
    );
};

export default Progress;