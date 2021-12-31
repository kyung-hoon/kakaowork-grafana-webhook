import axios from "axios";


export async function send(url,body){
    let res = await axios.post(url, body);
    let data = res.data;
    console.log(data);
}



