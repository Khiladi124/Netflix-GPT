
export const checkValidData=(email,password)=>{
 const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
 const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 if(!isEmailValid) return {errorInEmail:"Email ID is not valid",errorInPassword:""};
 if(!isPasswordValid) return {errorInEmail:"",errorInPassword:"Password is not valid"};
 return null;
};
