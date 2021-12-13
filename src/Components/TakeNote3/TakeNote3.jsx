import React, { useRef } from "react";
import './TakeNote3.css';
import TakeNoteFour from "./TakeNote4";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { GetNotes } from "../../Service/DataService";
import { UpdateNotes } from "../../Service/DataService";
import remainder2 from '../../Assests/Note2/remainder2.png'
import addContact from '../../Assests/Note2/addContact.png'
import Galleryimg from '../../Assests/Note2/Galleryimg.png'
import colorIcon2 from '../../Assests/Note2/colorIcon2.png'
import archeive from '../../Assests/Note2/archeive.png'
import Option from '../../Assests/Note2/Option.png'
import undo from '../../Assests/Note2/undo.png'
import redo from '../../Assests/Note2/redo.png'


function TakeNoteThree(props) {
    // console.log(props)
    const [displayicon, setdisplayicon] = React.useState(false)


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);


    const titleinput = useRef(null);
    const descriptioninput = useRef(null);


    const handleClose = () => {
        // console.log(titleinput.current.value)
        // console.log(descriptioninput.current.value)
        // console.log(props.note.id)


        const data = new FormData()
        data.append("noteId", props.note.id)
        data.append("title", titleinput.current.value)
        data.append("description", descriptioninput.current.value)

        UpdateNotes(data)
            .then((response) => {
                console.log(response)
                props.updatingNote(true)

            })
            .catch((error) => {
                console.log(error)
            })
        setOpen(false);

    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 200,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    return (
        <div className="MainNote">
            <div className="Container3"
                onMouseEnter={() => setdisplayicon(true)}
                onMouseLeave={() => setdisplayicon(false)}
                style={{ backgroundColor: props.note.color }}
            >

                <div className="inputform3">

                    <input className="input3"
                        type='text'
                        placeholder={props.note.title}
                        style={{ backgroundColor: props.note.color }}
                        onClick={handleOpen}
                    />

                    <input className="input3"
                        type='text'
                        placeholder={props.note.description}
                        style={{ backgroundColor: props.note.color }}
                        onClick={handleOpen}

                    />
                    {
                        props.note.collaborators.length !== 0 ? (
                            <div className="multipleIcons" >
                                {
                                    props.note.collaborators.map(() =>
                                        <div>
                                            <img id="itemlogo" src={addContact} alt="" />
                                        </div>)
                                }
                            </div>
                        ) : null
                    }


                </div>


                <div className="symbols" style={{ backgroundColor: props.note.color }} >
                    {displayicon && <TakeNoteFour noteId={props.note.id} updatingArchaive={props.updatingArchaive} updatingColor={props.updatingColor} updatingTrash={props.updatingTrash} />}
                </div>

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style} style={{ backgroundColor: props.note.color }} id="mainbg">
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        {/* {props.note.title} */}
                        <input className="title1"
                            type="text"
                            defaultValue={props.note.title}
                            ref={titleinput}
                            style={{ backgroundColor: props.note.color, minWidth: "100%", border: "none", outline: "none" }}
                        />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} >
                        <input className="description1"
                            type="text"
                            defaultValue={props.note.description}
                            ref={descriptioninput}
                            style={{ backgroundColor: props.note.color, minWidth: "100%", border: "none", outline: "none" }}
                        />
                    </Typography>

                    <div className="iconBox" style={{ marginTop: "30px", display: "flex", justifyContent: "space-between" }}>
                        <div className="sym">
                            <img id="items1" src={remainder2} alt="" />
                            <img id="items2" src={addContact} alt="" />
                            <img id="items3" src={colorIcon2} alt="" style={{ width: "20px", height: "20px", color: "black" }} />
                            <img id="items4" src={Galleryimg} alt="" />
                            <img id="items5" src={archeive} alt="" />
                            <img id="items6" src={Option} alt="" />
                            <img id="items7" src={undo} alt="" />
                            <img id="items8" src={redo} alt="" />
                        </div>
                        <div className="updateButton">
                            <button onClick={handleClose} action="update"  > close </button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div >
    )
}
export default TakeNoteThree;

