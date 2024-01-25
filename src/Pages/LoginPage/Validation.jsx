import React, { useState } from 'react'

export const Validation = (username,password) => {

    let error={uname:"",password:""}

    if(username===""){
        error.uname="Username Required*"
    }
    else if(username.length<5){
        error.uname="Username at least 6 characters length"
    }

    if(password===""){
        error.password="Password Required*"
    }
    else if(password.length<8){
        error.password="Password must be at least 8 characters"
    }
  return error;
}

export const otpEmailValidate=(otpEmail)=>{

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(otpEmail==""){
        return "Recovery Email is required*";
    }
    else if(!(emailPattern.test(otpEmail))){
        return "Email is in incorrect format"
    }
}

export const otpMobilelValidate=(otpMobile)=>{

    const mobileNumberPattern = /^\d{10}$/;

    if(otpMobile==""){
        return "Recovery Mobile no is required*";
    }
    else if(!(mobileNumberPattern.test(otpMobile))){
        return "Mobile number is in incorrect format"
    }
}


export const validateOtp=(otp)=>{

    if(otp==""){
        return "OTP code is required*";
    }
    else if(otp.length<6){
        return "OTP at least 6 digits code"
    }
}

export const validateNewPassword=(values)=>{

    const errors={}
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    

    if(!values.newpassword){
        errors.newpassword="New password is required*";
    }
    else if(passwordPattern.test(values.newpassword)){
        errors.newpassword="Please enter valid password";
    }

    else if(!values.confirmpassword){
        errors.confirmpassword= "Confirm password is required*";

    }else if(values.newpassword!==values.confirmpassword){
        errors.confirmpassword="Password Confirmation is wrong";
    
    }else{
        return null
    }

    return errors
}
