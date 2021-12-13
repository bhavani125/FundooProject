import axios from "axios";

export const UserSignUp = async (obj) => {
    // console.log("hello");
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', obj)
    return response

}
