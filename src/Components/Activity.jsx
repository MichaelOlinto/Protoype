import { Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    margin: 2,
    backgroundColor: 'inherit',
    boxShadow: "inherit",
  }));

const Activity = () => {
    return(
        <Paper container elevation={24} sx={{
            p: 2,
            margin: 13,
            marginTop: 0,
            marginBottom: 0,
            border: 0,
            maxWidth: 'auto',
            flexGrow: 1,
            height: 220,
            backgroundColor: 'inherit',
            }}>
            <Stack direction="column" spacing={2}>
                <Item elevation={24}>
                    <Typography>
                        Activity
                    </Typography>
                </Item>
                <Item>
                    <Paper>
                        <Stack direction="row">
                            <img src={require('../Assets/IMG/ic-followers.png')}/>
                            <Item>
                                <Typography>
                                    You have new 5 followers inncluiding Kathryn Crawford and Piper Shaw
                                </Typography>
                            </Item>
                        </Stack>
                    </Paper>
                    <Paper>
                        <Stack direction="row">
                            <img src={require('../Assets/IMG/ic-events.png')} />
                            <Item>
                                <Typography>
                                    3 new events were added to your calendar
                                </Typography>
                            </Item>
                        </Stack>
                    </Paper>
                    <Paper>
                        <Stack direction="row">
                            <img src={require('../Assets/IMG/ic-assignments.png')} />
                            <Item>
                                <Typography>
                                    You have 3pending readings to complete
                                </Typography>
                            </Item>
                        </Stack>
                    </Paper>
                </Item>
            </Stack>
        </Paper>
    );
};

export default Activity;