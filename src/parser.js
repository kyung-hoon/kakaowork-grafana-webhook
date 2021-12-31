
export async function parse(body) {
    let output = new Object();
    const req = JSON.stringify(body)
    output.text =`!!grafana alert!!.\nstatus: ${body.state}\norg" ${body.orgId}`
    //파싱 로직 작성
    return output
}