export const signup = async(text_id, text_pw, text_email) => {
    const data={
        userId : text_id,
        password: text_pw,
        email: text_email
    }
    // const result = await Fet.post("auth/signup", JSON.stringify(data));
    // console.log(result);

    // if (result.statusCode==="201"){
    //     window.location.href = '../../index.html';
    // }
    // else{
    //     alert(result.message); 
    // }

    return JSON.stringify({"statusCode": "201"});
}