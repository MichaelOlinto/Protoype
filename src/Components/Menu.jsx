import { Drawer, List, ListItemButton, ListItemIcon } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import * as React from 'react';


const Menu = () => {
  return (
    <Drawer variant='permanentgi' sx={{
      backgroundColor: '#2196f3'
      }}>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <MenuRoundedIcon color='inherent'/>
          </ListItemIcon>
        </ListItemButton>
      </List>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <img src={require('../Assets/IMG/menu/Home - Iconly---Bold.png')} />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <img src={require('../Assets/IMG/menu/ copy.png')} />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <img src={require('../Assets/IMG/menu/ copy.png')} />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <img src={require('../Assets/IMG/menu/ copy.png')} />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <img src={require('../Assets/IMG/menu/ copy.png')} />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default Menu;