import axios from "axios";


export async function send(url,body){
    axios.post(url,body);
}



