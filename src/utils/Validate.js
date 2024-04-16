export const Validation=(email,Password,Confirmpass)=>{
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);

    if(!isEmailValid) return " ! Email is not valid";
    if(!isPassValid) return " ! Your Password is wrong";
    //if(isPassValid!==Confirmpass) return "! Password does not match";

    return null;
}