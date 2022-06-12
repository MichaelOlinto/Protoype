import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import { List, ListItem, ThemeProvider, Typography } from '@mui/material';
import theme from './themeConfig';
import ContainerDashboard2 from './Components/ContainerDashboard2';
import ContainerDashboard from './Components/ContainerDashboard';
import ContainerEvents from './Components/ContainerEvents';
import Activity from './Components/Activity';
import Progress from './Components/Progress';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <List>
        <ListItem>
          <Navbar />
        </ListItem>
        <ListItem>
          <Menu />
        </ListItem>
        <ListItem>
          <ContainerDashboard />
        </ListItem>
        <ListItem>
          <ContainerDashboard2 />
        </ListItem>
        <ListItem>
          <ContainerEvents />
        </ListItem>
        <ListItem>
          <Activity />
        </ListItem>
        <ListItem>
          <Progress />
        </ListItem>
      </List>
      
    </ThemeProvider> 
  );
}

export default App;
