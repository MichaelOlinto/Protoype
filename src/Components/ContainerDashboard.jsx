import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    margin: 2,
    backgroundColor: 'inherit',
    boxShadow: "inherit",
  }));

const ContainerDashboard = () => {
    return(
        <Paper container 
            elevation={0}
            sx={{
            p: 2,
            margin: 13,
            border: 0,
            Width: 1093,
            flexGrow: 1,
            height: 30,
            paddingRight: 0,
            marginRight: 90,
            paddingBottom: 0,
            marginBottom: 0,
            }}>
            <Stack direction="row" justifyContent="space-between">
                <Paper container
                    elevation={0}
                    sx={{
                        margin: 1,
                        height:90,
                        width: 850,
                    }}>
                    <Item>
                        <Typography variant="h2">
                            Dashboard
                        </Typography>
                    </Item>
                </Paper>
                <Paper container
                    elevation={0}
                    sx={{
                        margin:1,
                    }}>
                    <Stack direction="column">
                        <Item>
                            <Typography variant="body1" fontSize={11}>
                                Currently learning
                            </Typography>
                        </Item>
                        <Stack direction="row">
                            <Item>
                                <img src={require('../Assets/IMG/Screen Shot 2020-09-24 at 3.34.23 PM.png')} />
                            </Item>
                            <Item>
                                English
                            </Item>
                        </Stack>
                    </Stack>
                </Paper>
            </Stack>
        </Paper>
    );
};

export default ContainerDashboard;