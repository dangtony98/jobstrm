import axios from 'axios';
import { JOBSTRM_URL } from '../variables/variables'; 

const register = (payload, callback) => {
    console.log('A');
    axios.post(`${JOBSTRM_URL}/api/user/register`, payload)
        .then((response) => {
            console.log('B');
            console.log(response);
            // localStorage.setItem('token', response.data.token);
            callback();
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
}

const login = (payload, callback) => {
    axios.post(`${JOBSTRM_URL}/api/user/login`, payload)
        .then((response) => {
            console.log('AB');
            console.log(response);
            // localStorage.setItem('token', response.data.token);
            callback();
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
}

const logout = () => {
    axios.post(`${JOBSTRM_URL}/api/logout`, {

        },
        {
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
}

export { register, login, logout };
