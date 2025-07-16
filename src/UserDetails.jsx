import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function UserDetails(props) {
  const [userData, setUserData] = useState({ result: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.userId <= 0) return;

    const fetchUser = async () => {
      let response = await fetch(props.apiUrl + "/" + props.userId);
      response = await response.json();
      setUserData({ result: { response } });
      setLoading(false);
    };
    fetchUser();

    /*The clean up is executed before the next useEffect but only 
     if this is going to be executed.
     If this cleanup is not used, you will will the previous 
     value from the previous fetch.*/
    return setLoading(true);
  }, [props.userId]);

  return (
    <Dialog open={props.show}>
      <DialogTitle id="alert-dialog-title">User Details</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {loading ? (
            <CircularProgress />
          ) : (
            <table>
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td>{userData.result.response.name}</td>
                </tr>
                <tr>
                  <td>User Name: </td>
                  <td>{userData.result.response.username}</td>
                </tr>
                <tr>
                  <td>Website: </td>
                  <td>{userData.result.response.website}</td>
                </tr>
                <tr>
                  <td>Address: </td>
                  <td>
                    {userData.result.response.address.street +
                      " - " +
                      userData.result.response.address.city}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
