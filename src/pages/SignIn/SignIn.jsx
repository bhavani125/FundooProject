import React from "react";
import './SignIn.css';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { UserSignIn } from "../../Service/UserService.";

const emailregex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignIn() {

    const [userObj, setuserObj] = React.useState({ email: "", password: "" })

    const [emailerror, setemailerror] = React.useState(false)
    const [passworderror, setpassworderror] = React.useState(false)

    const [emailhelper, setemailhelper] = React.useState("")
    const [passwordhelper, setpasswordhelper] = React.useState("")

    const takeemail = (event) => {
        setuserObj({ ...userObj, email: event.target.value })
    }
    const takepassword = (event) => {
        setuserObj({ ...userObj, password: event.target.value })
    }

    const onSubmit = () => {
        console.log(userObj);
        if (emailregex.test(userObj.email)) {
            setemailerror(false)
            setemailhelper("")
        } else {
            setemailerror(true)
            setemailhelper("enter an email or phonenumber")
        }
        if (passwordRegex.test(userObj.password)) {
            setpassworderror(false)
            setpasswordhelper("")
        } else {
            setpassworderror(true)
            setpasswordhelper("enter correct password")
        }
        if (emailregex.test(userObj.email) && passwordRegex.test(userObj.password)) {
        UserSignIn(userObj)
            .then(function (response) {
                console.log(response.data.id);
                localStorage.setItem("token",response.data.id)
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }

    return (
        <div>
            <div className="SignIn-Container">
                <div className="SignIn-Box">
                    <div className="actual-Box">
                        <div className="logo">
                            {/* <img className="googlelogo" src="../googlepages/src/Components/pages/SignIn/googleimg.png"></img> */}
                            <span className='g a'>G</span>
                            <span className='o a'>o</span>
                            <span className='o1 a'>o</span>
                            <span className='g a'>g</span>
                            <span className='l a'>l</span>
                            <span className='o a'>e</span>
                        </div>
                        <div className="Header"><h>Sign in</h></div>
                        <div className="subheader"><h>to continue to Gmail</h></div>
                        <div className="inputFiled">
                            <TextField onChange={takeemail} error={emailerror} helperText={emailhelper} fullWidth label="Email or phone" id="fullWidth" />

                            <Link href="#" underline="none">
                                {'Forgot email?'}
                            </Link>
                        </div>

                        <div className="inputFiled">
                            <TextField onChange={takepassword} error={passworderror} helperText={passwordhelper} fullWidth label="password" id="fullWidth" type="password" />
                            <Link href="#" underline="none">
                                {'Forgot password?'}
                            </Link>
                        </div>
                        <div className="link">
                            <p>Not your computer? Use Guest mode to sign in privately. </p>
                            <Link href="#" underline="none">
                                {'Learnmore'}
                            </Link>
                        </div>
                        <div class="rowbox">
                            <div className="link">
                                <Link href="#" underline="none">
                                    {'Create account'}
                                </Link>
                            </div>
                            <Button onClick={onSubmit} variant="contained" href="#contained-buttons">
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        </div >
    )
}

export default SignIn;

