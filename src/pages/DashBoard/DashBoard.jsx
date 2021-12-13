import React from "react";
import '../DashBoard/Dashboard.css'
import HeaderSection from "../../Components/Header/Header";
import TakeNoteOne from "../../Components/TakeNote1/TakeNote1";
import TakeNoteTwo from "../../Components/TakeNote2/TakeNote2";
import TakeNoteThree from "../../Components/TakeNote3/TakeNote3";
import MiniDrawer from "../../Components/Drawer/Drawer";
import { GetNotes } from "../../Service/DataService";
import Colloborator from "../../Components/Collaborator/Collaborator";
import { getThemeProps } from "@mui/system";

function DashBoard() {

    const [switchnote1note2, setswitchnote1note2] = React.useState("TakeNoteOne")

    const [currentPage, setcurrentPage] = React.useState("allnotes")

    // const [newState, setnewState] = React.useState("TakeNoteOne")

    const ListentoTakeNote1 = (data) => {
        // console.log(data)
        if (data == "TakeNoteTwo") {
            setswitchnote1note2("TakeNoteTwo")
        }
        else if (data == "TakeNoteOne") {
            setswitchnote1note2("TakeNoteOne")
            GetNote(currentPage)
        }

    }

    const [displayoption, setdisplayoption] = React.useState(false)

    const ListentoMenu = (data) => {
        // console.log(data)
        if (data == true) {
            setdisplayoption(!displayoption)
        }
    }


    const GetNote = (action) => {
        GetNotes()
            .then((response) => {
                // console.log(response)
                // console.log(response.data.data.data);
                //setnoteArray(response.data.data.data);
                let filterArray = response.data.data.data.filter(function (note) {
                    if (action == "allnotes") {
                        if (note.isArchived == false && note.isDeleted == false) {
                            return note
                        }
                    } else if (action == "isArchived") {
                        if (note.isArchived == true && note.isDeleted == false) {
                            return note 
                        }
                    } else if (action == "isDeleted") {
                        if (note.isArchived == false && note.isDeleted == true) {
                            return note
                        }
                    }

                })
                setnoteArray(filterArray);

            }).catch((error) => {
                console.log(error);
            });
    }


    const ListenToParticularLists = (data) => {
        setcurrentPage(data)
        GetNote(data)
    }

    const [noteArray, setnoteArray] = React.useState([])

    React.useEffect(() => {
        GetNote(currentPage)

    }, [])

    const updatingArchaive = (data) => {
        if (data == true) {
            GetNote(currentPage)
        }
    }

    const updatingColor = (data) => {
        if (data == true) {
            GetNote(currentPage)
        }
    }

    const updatingNote = (data) => {
        if (data == true) {
            GetNote(currentPage)
        }
    }

    const updatingTrash = (data) => {
        if (data == true) {
            GetNote(currentPage)
        }
    }
    const updatingArchaiveNew = (data) => {
        if (data == true) {
            GetNote(currentPage)
        }
    }

    const updatingTrashnew = (data) => {
        if (data == true) {
            GetNote(currentPage)
        }
    }
    
    return (
        <div className="main">
            <div className="HeadSearchSection">
                <HeaderSection ListentoMenu={ListentoMenu} />
                <div>
                    {/* {displayoption && <MiniDrawer />} */}
                    <MiniDrawer displayoption={displayoption} ListenToParticularLists={ListenToParticularLists} />
                </div>
            </div>
            <div className="TakeNoteContainer">
                {
                    switchnote1note2 == "TakeNoteTwo" ? <TakeNoteTwo ListentoTakeNote1={ListentoTakeNote1} />
                        : switchnote1note2 == "TakeNoteOne" ? < TakeNoteOne ListentoTakeNote1={ListentoTakeNote1} /> : <div> </div>
                }
                {/* {
                    ViewCollabarotor && <Colloborator />
                } */}

            </div>
            {/* <TakeNoteOne/> */}
            {/* <TakeNoteTwo/> */}
            {/* <TakeNoteThree /> */}
            <div className="notebox">
                {
                    noteArray.map((note) => <TakeNoteThree note={note} updatingArchaive={updatingArchaive}
                        updatingColor={updatingColor} updatingNote={updatingNote} updatingTrash={updatingTrash}
                        updatingTrashnew={updatingTrashnew} updatingArchaiveNew={updatingArchaiveNew} />)
                }

            </div>

        </div>
    )

}
export default DashBoard;


