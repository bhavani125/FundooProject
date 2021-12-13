import { React, Redirect } from "react-router";

function ProtectedRoute(props) {

  var userRegister= localStorage.getItem("token")
  
  return (
    <div>
      {
        userRegister? <props.component /> : <Redirect to="/"></Redirect>
      }
    </div>
  )
}
export default ProtectedRoute

