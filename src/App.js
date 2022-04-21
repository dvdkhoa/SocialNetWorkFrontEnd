import Login from './pages/Login';
import Newsfeed from './pages/newsfeed/Newsfeed';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

function App() {

    const user = JSON.stringify(localStorage.getItem('user'))
    // console.log('user', user);
    // const isLogin = useState(false)
    const [userLogin, setUserLogin] = useState(user)
    const login = (email, pass) => {
        // console.log(email, pass)
        return axios.post('https://localhost:7284/api/account/login', 
                        {
                            userName: email,
                            password: pass
                        }
                        )
                    .then(function (response) {
                        // handle success
                        const data = response.data.data

                        console.log('data login',data);

                        localStorage.setItem('user', JSON.stringify(data))

                        setUserLogin({...data})
                    })
    }

    return (
        <>
            {userLogin === 'null' ? <Login login={login} /> : <Newsfeed />}
        </>
    );
}

export default App;
