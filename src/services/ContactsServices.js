import axios from 'axios';

import { API } from './URL';


export async function getRandomUsers(numberUsers) {
    // get random users one by one.
    let randomUsers = []
    try {
        for (let index = 0; index < numberUsers; index++) {
            const request = await axios.get(`${API}`)
            randomUsers.push(request.data.results[0])
        }
        return randomUsers;
    } catch (error) {
        console.error(error);
    }
}
