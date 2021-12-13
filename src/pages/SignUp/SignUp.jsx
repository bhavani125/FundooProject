import React from "react";
import './ContainerSignUp.css';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { UserSignUp } from "../../Service/UserTwo";

import account3 from "../../Assests/SignUp/account3.svg"


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignUp() {
    const [userObj, setuserObj] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            service: "advance",
            password: ""
        }
    )

    const [firstNameerror, setfirstNameerror] = React.useState(false)
    const [lastNameerror, setlastNameerror] = React.useState(false)
    const [emailerrors, setemailerrors] = React.useState(false)
    const [passworderrors, setpassworderrors] = React.useState(false)

    const [Namehelper, setNamehelper] = React.useState("")
    const [emailhelper, setemailhelper] = React.useState("You can use letters, numbers & periods")
    const [passwordhelper, setpasswordhelper] = React.useState("")

    const takefirstName = (event) => {
        setuserObj({ ...userObj, firstName: event.target.value })
    }
    const takelastName = (event) => {
        setuserObj({ ...userObj, lastName: event.target.value })
    }
    const takeemail = (event) => {
        setuserObj({ ...userObj, email: event.target.value })

    }
    const takepassword = (event) => {
        setuserObj({ ...userObj, password: event.target.value })
    }

    const onSubmit = () => {

        console.log(userObj);
        if (firstNameRegex.test(userObj.firstName)) {
            setfirstNameerror(false)
            setNamehelper("")
        } else {
            setfirstNameerror(true)
            setNamehelper("Enter the first and last names")
        }
        if (lastNameRegex.test(userObj.lastName)) {
            setlastNameerror(false)
            setNamehelper("")

        } else {
            setlastNameerror(true)
            setNamehelper("Enter the first and last names")

        }
        if (emailRegex.test(userObj.email)) {
            setemailerrors(false)
            setemailhelper("")
        } else {
            setemailerrors(true)
            setemailhelper("choose a gmail address")
        }
        if (passwordRegex.test(userObj.password)) {
            setpassworderrors(false)
            setpasswordhelper("")
        } else {
            setpassworderrors(true)
            setpasswordhelper("enter correct password")
        }
        if (firstNameRegex.test(userObj.firstName) && lastNameRegex.test(userObj.lastName) && emailRegex.test(userObj.email) && passwordRegex.test(userObj.password)) {
            UserSignUp(userObj)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }
    return (
        <div>
            <div className="Main-container">
                <div className="Header-conatiner">
                    <div className="actualBox">
                        <div className="SignUp-Content">
                            <div className="logo1">
                                {/* <img className="googlelogo" src="../googlepages/src/Components/pages/SignIn/googleimg.png"></img> */}
                                <span className='g a'>G</span>
                                <span className='o a'>o</span>
                                <span className='o1 a'>o</span>
                                <span className='g a'>g</span>
                                <span className='l a'>l</span>
                                <span className='o a'>e</span>
                            </div>
                            <div className="Header1"><h>Create your Google Account</h></div>
                            <div className="subheader1"><h>to continue to Gmail</h></div>

                            <div className="inputField1">
                                <TextField onChange={takefirstName} error={firstNameerror} helperText={Namehelper} id="outlined-basic" label="Firstname" variant="outlined" />
                                <TextField onChange={takelastName} error={lastNameerror} id="outlined-basic" label="Lastname" variant="outlined" />
                            </div>

                            <div className="input2">
                                <TextField onChange={takeemail} error={emailerrors} helperText={emailhelper} fullWidth label="Username" id="fullWidth" />
                            </div>

                            <div className="inputField1">
                                <TextField onChange={takepassword} error={passworderrors} helperText={passwordhelper} id="outlined-basic" label="password" variant="outlined" />
                                <TextField id="outlined-basic" label="confirm" variant="outlined" />
                            </div>
                            <div className="text">
                                <h>Use 8 or more characters with a mix of letters, numbers & symbols</h>
                            </div>
                            <div className="selectbox-content">
                                <div className="checkbox">
                                    <Checkbox {...label} />
                                </div>
                                <h>Show Password</h>
                            </div>
                            <div class="rowbox1">
                                <div className="link">
                                    <Link href="#" underline="none">
                                        {'Sign in instead'}
                                    </Link>
                                </div>
                                <Button onClick={onSubmit} variant="contained" href="#contained-buttons">
                                    Next
                                </Button>
                            </div>

                        </div>


                        <div className="SignUp-logo">
                            <div className="icon">
                                <img src={account3} />

                            </div>
                            <p>One account. All of Google <br /> working for you.</p>
                        </div>
                    </div>

                </div>
                <div className="footercontainer">
                </div>
            </div>
        </div>
    )

}
export default SignUp;