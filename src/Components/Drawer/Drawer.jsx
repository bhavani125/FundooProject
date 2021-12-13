import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ChangeToArchive, ChangeToNote, ChangeToTrash } from '../../Redux/Actions';
import {connect} from 'react-redux';

const drawerWidth = 240;
// const drawerheight=80;
const marginTop = 80;

const openedMixin = (theme) => ({
    width: drawerWidth,
    marginTop: marginTop,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: marginTop,
    transition: theme.transitions.create('width',
        {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),

    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



 function MiniDrawer(props) {

    const [open, setOpen] = React.useState(false);


    React.useEffect(() => {
        if (props.displayoption == true) {
            setOpen(true);
        } else if (props.displayoption == false) {
            setOpen(false);
        }
    }, [props.displayoption])


    const displayNormalNotes = () => {
        props.ListenToParticularLists("allnotes")
        props.dispatch(ChangeToNote())
    }
    const displayArchaiveList = () => {
        props.ListenToParticularLists("isArchived")
        props.dispatch(ChangeToArchive())
    }
    const displayTrashList = () => {
        props.ListenToParticularLists("isDeleted")
        props.dispatch(ChangeToTrash())

    }

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open} >
                <List>

                    <ListItem button onClick={displayNormalNotes}>
                        <ListItemIcon >
                            <img src="https://img.icons8.com/material-outlined/24/000000/light.png"   />
                        </ListItemIcon>
                        <ListItemText primary="Notes" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <img src="https://img.icons8.com/material-outlined/24/000000/filled-appointment-reminders.png" />
                        </ListItemIcon>
                        <ListItemText primary="Remainder" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <img src="https://img.icons8.com/fluency-systems-regular/24/000000/ball-point-pen.png" />
                        </ListItemIcon>
                        <ListItemText primary="Edit labels" />
                    </ListItem>
                    <ListItem button onClick={displayArchaiveList}>
                        <ListItemIcon>
                            <img src="https://img.icons8.com/material-outlined/24/000000/downloads.png"  />
                        </ListItemIcon>
                        <ListItemText primary="Archeive"  />
                    </ListItem>
                    <ListItem button onClick={displayTrashList}>
                        <ListItemIcon>
                            <img src="https://img.icons8.com/material-outlined/24/000000/delete-trash.png"  />
                        </ListItemIcon>
                        <ListItemText primary="Trash" />
                    </ListItem>

                </List>
            </Drawer>
        </Box >
    );
}
export default  connect()(MiniDrawer) 