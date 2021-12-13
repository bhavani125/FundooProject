import React, { useState } from "react";
import './Collaborator.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import addContact from '../../Assests/Note2/addContact.png'
import { GetSearchList } from "../../Service/DataService";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';


function Colloborator(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState(false);


    const [searchemails, setsearchemails] = useState([])
    // const [input, setInput] = useState('')

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);

        let SearchObj = {
            searchWord: event.target.value
        };

        setExactEmail(event.target.value)

        GetSearchList(SearchObj)
            .then((response) => {
                console.log(response)
                // setsearchemailUsers(response.data.data.details);
                let filteringArray = response.data.data.details.filter(function (info) {
                    if (info.email.includes(event.target.value)) {
                        return info
                    }

                })
                setsearchemails(filteringArray);

            })
            .catch((error) => {
                console.log(error)
            })
    };

    const CloseCollaborator = () => {
        props.ListenToCollaborator(true)

    }

    const [exactEmail, setExactEmail] = useState("")

    const EmailSelectOption = (search) => {
        // console.log(search.email)
        setExactEmail(search.email)
        setAnchorEl(null)
    }
    // const [moveToCollArray, setmoveToCollArray] = useState([])

    const SaveEmail = () => {
        let filterEmailArray= searchemails.filter(function(user) {
            if(exactEmail === user.email){
                return user
            }
        })
        props.allSelectedEmails([...props.moveToCollArray, filterEmailArray[0]])
        setExactEmail("")
        props.ListenToCollaborator(true)

    }

    return (
        <div>
            <div className="Collaborator">
                <div className="inputformes" >
                    <Paper
                        component="forms"
                        sx={{ border: "2px solid red", p: '1px 2px', display: 'flex', flexDirection: 'column', width: 600, maxHeight: 550 }}
                    >
                        <div className="MainHead">
                            <h2> Collaborators</h2>
                        </div>
                        <div className="MainName">
                            <img id="itemlogo" src={addContact} alt="" />
                            <div className="rowname">
                                <h>Bhavani Girineni(Owner)</h>
                                <h>girinenibhavani12 @gmail.com</h>

                            </div>

                        </div>
                        <div className="AddingEmails">
                            {

                                props.moveToCollArray.map((search) =>

                                    <div className="repetating">
                                        <img id="itemlogo" src={addContact} alt="" />

                                        {search.email}
                                    </div>)
                            }
                        </div>



                        <div className="secondField">
                            <img id="itemlogo" src={addContact} alt="" />
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Person or email to share with?" onChange={handleClick('bottom')}
                                inputProps={{ 'aria-label': 'search ' }}
                                value={exactEmail}
                            />
                        </div>
                        <div className="footerdown">
                            <div className="mains">
                                <button onClick={CloseCollaborator}>Cancel</button>
                                <button onClick={SaveEmail}>save</button>
                            </div>
                        </div>

                    </Paper>
                </div>
            </div >
            {/* <Box sx={{ width: 200 }}> */}

            < Popper open={open} anchorEl={anchorEl} placement={placement} style={{ display: "flex", border: "2px solid lightgrey" }} transition >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper  >
                            <Typography sx={{ p: 4 }}  >
                                {
                                    searchemails.map((search) =>
                                        <div onClick={() => EmailSelectOption(search)} style={{ cursor: "pointer", borderBottom: "1px solid lightgrey", padding: "2px" }}>
                                            {search.email}
                                        </div>)
                                }


                            </Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper >
            {/* </Box> */}
        </div >
    )
}
export default Colloborator