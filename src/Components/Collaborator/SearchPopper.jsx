// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Popper from '@mui/material/Popper';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Fade from '@mui/material/Fade';
// import Paper from '@mui/material/Paper';

// export default function PositionedPopper() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [open, setOpen] = React.useState(false);
//   const [placement, setPlacement] = React.useState();

//   const handleClick = (newPlacement) => (event) => {
//     setAnchorEl(event.currentTarget);
//     setOpen((prev) => placement !== newPlacement || !prev);
//     setPlacement(newPlacement);
//   };

//   return (
//     <Box sx={{ width: 700 }}>

//       <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
//         {({ TransitionProps }) => (
//           <Fade {...TransitionProps} timeout={350}>
//             <Paper>
//               <Typography sx={{ p: 2 }}>
//                 all email names here
//               </Typography>
//             </Paper>
//           </Fade>
//         )}
//       </Popper>
//       <InputBase
//         sx={{ ml: 1, flex: 1 }}
//         placeholder="Person or email to share with?" onChange={SearchSimilarName} 
//         inputProps={{ 'aria-label': 'search ' }}

//       />
//       <Button onClick={handleClick('bottom')}>bottom</Button>
//     </Box>
//   );
// }


