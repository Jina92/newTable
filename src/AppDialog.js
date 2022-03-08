import React, { useState } from "react";
// import { Theme}  from "@mui/material";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
// import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
// import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import DialogContent from "@mui/material/DialogContent";
import Close from "@mui/icons-material/Close";
// import Fullscreen from "@mui/icons-material/Fullscreen";
// import FullscreenExit from "@mui/icons-material/FullscreenExit";
import Done from "@mui/icons-material/Done";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

// interface State {
// 	hover: boolean;
// 	focus: boolean;
// 	open: boolean;
// 	fullScreen: boolean;
// 	edited: boolean;
// }

function AppDialog(props) {
  // const [reactflowInstance, setReactflowInstance] = useState(null);
  // const [elements, setElements] = useState([]);
  const [open, setOpen] = useState(props.open);
  // const [fullScreen, setFullScreen] = useState(false);

  function onClickOpen() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={onClickOpen}> Open Dialog </Button>
      <Dialog
        open={open}
        // fullScreen={fullScreen}
        // fullWidth
        // maxWidth={"lg"}
      >
        <DialogContent style={{ height: "85vh", width: "100vw" }}>
          <Toolbar>
            <Typography variant="h6">Table Name</Typography>
            <TextField />
            {/* <Tooltip title="exit">
              <IconButton onClick={fullScreen ? this.closeFullScreen : this.openFullScreen}>
                <FullscreenExit /> 
              <IconButton> */}
            {/* <Tooltip title={(fullScreen ? "Exit " : "") + "Fullscreen"}> */}
            {/* <IconButton onClick={fullScreen ? this.closeFullScreen : this.openFullScreen}> */}
            {/* <IconButton>
                {fullScreen ? <FullscreenExit /> : <Fullscreen />}
              </IconButton> */}
            {/* </Tooltip> */}
            <Tooltip title="Cancel">
              <IconButton onClick={onClose}>
                <Close />
              </IconButton>
            </Tooltip>
            <Tooltip title="Save">
              {/* <IconButton onClick={this.onOk}> */}
              <IconButton>
                <Done />
              </IconButton>
            </Tooltip>
          </Toolbar>
          <Divider />

          <Divider />
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormGroup>
              <TextField label="Name" variant="outlined" />
              <TextField label="Type" variant="outlined" />
              <TextField label="Size" variant="outlined" />
              <TextField label="Default" variant="outlined" />
              <FormControlLabel
                label="Primary Key"
                control={
                  <Checkbox
                  // checked="checked"
                  // indeterminate={checked[0] !== checked[1]}
                  // onChange={handleChange1}
                  />
                }
              />
              <FormControlLabel
                label="Unique"
                control={
                  <Checkbox
                  // checked="checked"
                  // indeterminate={checked[0] !== checked[1]}
                  // onChange={handleChange1}
                  />
                }
              />
              <FormControlLabel
                label="Not Null"
                control={
                  <Checkbox
                  // checked="checked"
                  // indeterminate={checked[0] !== checked[1]}
                  // onChange={handleChange1}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AppDialog;
