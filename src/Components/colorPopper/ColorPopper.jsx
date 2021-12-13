import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import CircleIcon from "@mui/icons-material/Circle";
import IconButton from "@mui/material/IconButton";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import { ColorNotes } from '../../Service/DataService';
import colorIcon2 from '../../Assests/Note2/colorIcon2.png'


export default function ColorPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState(false);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const allcolors = ["#fff", "#f08080 ", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb", "#fdcfe8", "#e6c9a8", "#e8eaed"]

  const sendColor = (color) => {
    // console.log(color)
    // props.ListenToColor(color)
    if (props.action === "create") {
      //  console.log(props.action)    it wil display in console create
      props.ListenToColor(color);
    }
    else if (props.action === "update") {
      // console.log("this is prop", props)
      let colorObj = {
        noteIdList: [props.id],
        color: color
      };
      ColorNotes(colorObj)
        .then((response) => {
          console.log(response)
          props.updatingColor(true)
        })
        .catch((error) => {
          console.log(error)
        })

    }
  }

  return (

    <Box onMouseLeave={() => setOpen(false)}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Typography style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", backgroundColor: "white", border: "1px solid grey", boxShadow: "30px" }} sx={{ p: 1 }}>

              {allcolors.map((color) => (
                <CircleIcon onClick={() => sendColor(color)}
                  // id={color}
                  style={{
                    border: "1px solid black",
                    color: color,
                    borderRadius: "90%",
                    marginRight: "5px",
                    marginBottom: "5px"
                  }}
                />
              ))}
            </Typography>
          </Fade>
        )}
      </Popper>

      <img id="items3" src={colorIcon2} onMouseEnter={handleClick("top-start")}alt="" style={{ width:"20px", height:"20px",color: "black" }}/>

      {/* <IconButton size="small" onMouseEnter={handleClick("top-start")}>
        <ColorLensOutlinedIcon style={{ color: "black" ,  position:"relative",bottom:"6px"}} />
      </IconButton> */}

    </Box>
  );
}
