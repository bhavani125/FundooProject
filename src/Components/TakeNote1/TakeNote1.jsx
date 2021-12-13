import React from "react";
import './TakeNote1.css';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import NewList from "../../Assests/Note1/NewList.png"
import pen from "../../Assests/Note1/pen.png"
import image from "../../Assests/Note1/image.png"

function TakeNoteOne(props) {
    const changenote = () => {
        props.ListentoTakeNote1("TakeNoteTwo")
    }
    return (
        <div>
            <div className="Container1" onClick={changenote}>
                <div className="inputform" >
                    <Paper
                        component="form"
                        id="hb"
                        sx={{ p: '8px 3px',display: 'flex', alignItems: 'center', width: 600}}
                    >
                        <InputBase
                            id="abc"
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Take a note "
                            inputProps={{ 'aria-label': 'search ' }}
                        />
                        <div className="items">
                            <img id="item1" src={NewList} alt="" />
                            <img id="item2" src={pen} alt="" />
                            <img id="item3" src={image} alt="" />
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    )
}
export default TakeNoteOne;