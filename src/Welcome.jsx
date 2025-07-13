import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
  ListItemIcon,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function Welcome() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Welcome to Coding in React - CRUD Application!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Today {new Date().toLocaleDateString()} you will learn:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                To install and use{" "}
                <Link
                  href="https://material-ui.com/"
                  target="_blank"
                  rel="noopener"
                >
                  Material Design
                </Link>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="To divide an application into components" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="To use tables and popups" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="To understand what is the Children prop and when can be used" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="To create and submit Forms" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="To perform Conditional Rendering" />
        </ListItem>
      </List>
    </>
  );
}
