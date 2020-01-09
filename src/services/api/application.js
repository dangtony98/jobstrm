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
            console.log('load applicatoins response: ');
            console.log(response);
        })
        .catch((error) => {

            console.log('Error: ' + error);
        });
}

export { loadApplications };