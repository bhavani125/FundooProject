import React, { useState } from "react";
import './TakeNote2.css';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Addnotes } from "../../Service/DataService";

import remainder2 from '../../Assests/Note2/remainder2.png'
import addContact from '../../Assests/Note2/addContact.png'
import Galleryimg from '../../Assests/Note2/Galleryimg.png'
import archeive from '../../Assests/Note2/archeive.png'
import Option from '../../Assests/Note2/Option.png'
import undo from '../../Assests/Note2/undo.png'
import redo from '../../Assests/Note2/redo.png'
import ColorPopper from "../colorPopper/ColorPopper";
import Colloborator from "../Collaborator/Collaborator";

// import Colloborator from "../Collaborator/Collaborator";

function TakeNoteTwo(props) {
    const handleClickAway = () => {
        // console.log("hii")
        props.ListentoTakeNote1("TakeNoteOne")

    }

    const [noteObj, setnoteObj] = React.useState({ title: "", description: "", isArchived: false, color: ""})

    const taketitle = (e) => {
        setnoteObj({ ...noteObj, title: e.target.value })
    }
    const takedescription = (e) => {
        setnoteObj({ ...noteObj, description: e.target.value })

    }

    //creating a method for line66
    const takeArcheived = () => {
        setnoteObj({ ...noteObj, isArchived: !noteObj.isArchived })
    }

    const ListenToColor = (color1) => {
        // console.log(color)
        setnoteObj({ ...noteObj, color: color1 })
    }
    // const ListenToCollaberatorEmail = (emailobj) => {
    //     setnoteObj({ ...noteObj, collaberators: emailobj })
    // }
    const submit = () => {
        // console.log(noteObj)
        const data = new FormData()
        data.append("title", noteObj.title)
        data.append("description", noteObj.description)
        data.append("isArchived", noteObj.isArchived)
        data.append("color", noteObj.color)
        data.append("collaberators", JSON.stringify(moveToCollArray))
          Addnotes(data)
            .then((response) => {
                console.log(response)
                props.ListentoTakeNote1("TakeNoteOne")   //when we click on close option it should go to takenote1
            })
            .catch((error) => {
                console.log(error)
                props.ListentoTakeNote1("TakeNoteOne")   //when we click on close option it should go to takenote1
            })
    }
    const [switchCollabTokeNote2, setswitchCollabTakeNote2] = useState(false)

    const OpenCollaborator = () => {
        setswitchCollabTakeNote2(true)
    }
    const ListenToCollaborator = (data) => {
        if (data == true) {
            setswitchCollabTakeNote2(false)
        }
    }
    const [moveToCollArray, setmoveToCollArray] = useState([])


    const allSelectedEmails = (args) => {
        setmoveToCollArray(args)
    }
    // const [Test, setTest] = useState(true)

    return (
        <ClickAwayListener onClickAway={handleClickAway}>

            <div>
                {
                    switchCollabTokeNote2 ? <Colloborator ListenToCollaborator={ListenToCollaborator} moveToCollArray={moveToCollArray} allSelectedEmails={allSelectedEmails}  /> : <div className="Container2" style={{ backgroundColor: noteObj.color }}>

                        <div className="inputform2 ">
                            <input className="input1" defaultValue={noteObj.title} type='text' placeholder="Title" onChange={taketitle} style={{ backgroundColor: noteObj.color }} />
                            <input className="input1" defaultValue={noteObj.description} type='text' placeholder="Take a note" onChange={takedescription} style={{ backgroundColor: noteObj.color }} />
                        </div>

                        {
                            (moveToCollArray.length !== 0) ? (
                                <div className="multipleIcons" >
                                    {
                                        moveToCollArray.map(() =>
                                            <div>
                                                <img id="itemlogo" src={addContact} alt="" />
                                                
                                            </div>)
                                    }
                                </div>
                            ) : null
                        }
                        <div className="symbols">
                            <div className="sym1">
                                <img id="items1" src={remainder2} alt="" />
                                <img id="items2" src={addContact} alt="" onClick={OpenCollaborator} />
                                {/* <img  onClick={takeColor}id="items3" src={colorIcon2} alt="" /> */}
                                <ColorPopper ListenToColor={ListenToColor} action="create" />
                                <img id="items4" src={Galleryimg} alt="" />
                                <img onClick={takeArcheived} id="items5" src={archeive} alt="" />
                                <img id="items6" src={Option} alt="" />
                                <img id="items7" src={undo} alt="" />
                                <img id="items8" src={redo} alt="" />
                            </div>
                            <div className="title">
                                <button onClick={submit}>  Close   </button>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </ClickAwayListener>

    )
}
export default TakeNoteTwo;
