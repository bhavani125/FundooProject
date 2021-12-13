
import { React, Redirect } from "react-router";

function AuthRoute(props) {

  var userRegister= !localStorage.getItem("token")
  
  return (
    <div>
      {
        userRegister? <props.component /> : <Redirect to="/"></Redirect>
      }
    </div>
  )
}
export default AuthRoute

