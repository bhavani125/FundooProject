import axios from "axios"
let configObjForaddNotes = {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
    },
}
let configObjForArchiveNote = {
    headers: {
        Authorization: localStorage.getItem("token"),
    },
}
let configObjForSearchList= {
    headers: {
        Authorization: localStorage.getItem("token"),
    },
}

let configObjForColorNotes = {
    headers: {
        Authorization: localStorage.getItem("token"),
    },
}
let configObjForUpdateNotes = {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
    },
}
let configObjForDeleteNotes = {
    headers: {
        Authorization: localStorage.getItem("token"),
    },
}


export const Addnotes = async (formData) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes", formData, configObjForaddNotes)
    return response
}
export const GetNotes = async () => {
    let response = await axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList", configObjForaddNotes)
    return response
}
export const ArchiveNotes = async (ArchiveObj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes", ArchiveObj, configObjForArchiveNote)
    return response
}
export const ColorNotes = async (colorObj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes", colorObj, configObjForColorNotes)
    return response
}

export const UpdateNotes = async (formData) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes", formData, configObjForUpdateNotes)
    return response
}
export const DeleteNotes = async (DeleteObj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes", DeleteObj, configObjForDeleteNotes)
    return response
}
export const GetSearchList = async (SearchObj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/searchUserList", SearchObj, configObjForSearchList)
    return response
}

