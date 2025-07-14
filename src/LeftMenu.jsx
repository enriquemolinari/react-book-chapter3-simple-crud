import {
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import AddBox from "@mui/icons-material/AddBox";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";

export default function LeftMenu(props) {
  function handleListItemClick(item) {
    props.handleMenu(item);
  }

  return (
    <List>
      <ListItemButton
        selected={props.valueItem === props.items.WELCOME}
        onClick={() => handleListItemClick(props.items.WELCOME)}
      >
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Welcome" />
      </ListItemButton>
      <ListItemButton
        selected={props.valueItem === props.items.USERSLIST}
        onClick={() => handleListItemClick(props.items.USERSLIST)}
      >
        <ListItemIcon>
          <PeopleRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="User Lists" />
      </ListItemButton>
      <ListItemButton
        selected={props.valueItem === props.items.USERFORM}
        onClick={() => handleListItemClick(props.items.USERFORM)}
      >
        <ListItemIcon>
          <AddBox />
        </ListItemIcon>
        <ListItemText primary="Add User" />
      </ListItemButton>
    </List>
  );
}
