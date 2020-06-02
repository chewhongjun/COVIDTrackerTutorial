import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


export const fetchData = async () => {
    try{
        const {data:{confirmed, recovered, lastUpdate}} = await axios.get(url);
   
        
        return  {confirmed, recovered,lastUpdate}
    } catch(err) {

    }
}
        