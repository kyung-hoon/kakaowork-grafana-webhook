
let parser= {};

parser.parse = async function(body) {
    let output = new Object();
    const req = JSON.stringify(body)
    output.text =body.greetings
    //파싱 로직 작성
    return output;
}
export default parser ;
