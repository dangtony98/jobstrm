import axios from 'axios';
import { JOBSTRM_URL } from '../variables/variables'; 

const loadApplications = (callback) => {
    axios.get(`${JOBSTRM_URL}/api/job-applicaion/show-all`, 
        { 
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('session')).auth_token}` 
            }
        })
        .then((response) => {
            console.log('api/job-applcaion/show-all response: ');
            console.log(response)
        })
        .catch((error) => {

            console.log('Error: ' + error);
        });
}

const createApplication = (payload, callback) => {
    axios.post(`${JOBSTRM_URL}/api/job-applicaion/create`, payload,
    {
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('session')).auth_token}` 
        }
    })
    .then((response) => {
        console.log('api/job-applcaion/create response: ');
        console.log(response);
        callback();
    })
    .catch((error) => {
        console.log('Error: ' + error);
    });
}; 

export { loadApplications, createApplication };