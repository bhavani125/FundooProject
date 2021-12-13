import './App.css';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Router from './router/router';
import { Provider } from 'react-redux';
import store from '../src/Redux/ReduxStore.js'


function App() {
  return (
    <div className="App">
      <Provider store={store}>

        {/* <SignIn/> */}
        {/* <SignUp/> */}
        <Router />
      </Provider>
    </div>
  );
}

export default App;
