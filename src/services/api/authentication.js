import axios from 'axios';
import { JOBSTRM_URL } from '../variables/variables'; 

const register = (payload, callback) => {
    axios.post(`${JOBSTRM_URL}/api/user/register`, payload)
        .then((response) => {
            const { auth_token, first_name, last_name, email } = response.data.data;
            localStorage.setItem('session', JSON.stringify({
                auth_token,
                first_name,
                last_name,
                email
            }));
            callback();
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
}

const login = (payload, callback) => {
    axios.post(`${JOBSTRM_URL}/api/user/login`, payload)
        .then((response) => {
            const { auth_token, first_name, last_name, email } = response.data.data;
            localStorage.setItem('session', JSON.stringify({
                auth_token,
                first_name,
                last_name,
                email
            }));
            callback();
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
}

const logout = (callback) => {
    axios.post(`${JOBSTRM_URL}/api/user/logout`, {

        },
        {
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('session')).auth_token}` 
            }
        })
        .then(() => {
            localStorage.removeItem('session');
            callback();
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
}

export { register, login, logout };
