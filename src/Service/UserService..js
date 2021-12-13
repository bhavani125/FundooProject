import axios from "axios";

export const UserSignIn = async (obj) => {
    // console.log("hii")
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', obj)
    return response
}
