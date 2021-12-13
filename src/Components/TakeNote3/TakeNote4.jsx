import React from "react";
import './TakeNote4.css';

import remainder2 from '../../Assests/Note2/remainder2.png'
import addContact from '../../Assests/Note2/addContact.png'
import colorIcon2 from '../../Assests/Note2/colorIcon2.png'
import Galleryimg from '../../Assests/Note2/Galleryimg.png'
import archeive from '../../Assests/Note2/archeive.png'
import Option from '../../Assests/Note2/Option.png'
import { ArchiveNotes } from "../../Service/DataService";
import { DeleteNotes } from "../../Service/DataService";
import ColorPopper from "../colorPopper/ColorPopper";


function TakeNoteFour(props) {


    const updateArchaive = (event) => {
        console.log(event.target.id)
        let ArchiveObj = {
            noteIdList: [event.target.id],
            isArchived: true
        }

        ArchiveNotes(ArchiveObj)
            .then((response) => {
                console.log(response)
                props.updatingArchaive(true)
                let DeleteObj = {
                    noteIdList: [event.target.id],
                    isDeleted: false
        
                }
                DeleteNotes(DeleteObj)
                    .then((response) => {
                        console.log(response)
                        props.updatingTrashnew(true)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
        

            })
            .catch((error) => {
                console.log(error)
            })

            }
    const updateDelete = (event) => {
        console.log(event.target.id)
        let DeleteObj = {
            noteIdList: [event.target.id],
            isDeleted: true

        }
        DeleteNotes(DeleteObj)
            .then((response) => {
                console.log(response)
                props.updatingTrash(true)
                let ArchiveObj = {
                    noteIdList: [event.target.id],
                    isArchived: false
                }
                ArchiveNotes(ArchiveObj)
                    .then((response) => {
                        console.log(response)
                        props.updatingArchaiveNew(true)
        
                    })
                    .catch((error) => {
                        console.log(error)
                    })
        
                // props.updatingArchaive(false)
            })
            .catch((error) => {
                console.log(error)
            })
       
    }


    return (
        <div>
            <div className="iconpart" >
                <img id="item1" src={remainder2} alt="" />
                <img id="item2" src={addContact} alt="" />
                {/* <img id="item3" src={colorIcon2} alt="" /> */}
                <ColorPopper action="update" id={props.noteId} updatingColor={props.updatingColor} />
                <img id="item4" src={Galleryimg} alt="" />
                <button className="item5" onClick={updateArchaive} id={props.noteId} ></button>
                <img src="https://img.icons8.com/material-outlined/20/000000/delete-trash.png" onClick={updateDelete} id={props.noteId} />
                <img id="item6" src={Option} alt="" />
            </div>
        </div>
    )
}
export default TakeNoteFour;