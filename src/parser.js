
export async function parse(body) {
    let output = new Object();
    const req = JSON.stringify(body)
    output.text =req.greetings
    //파싱 로직 작성
    return output;
}