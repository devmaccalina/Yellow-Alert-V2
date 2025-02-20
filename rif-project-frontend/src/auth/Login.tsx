import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import {jwtDecode} from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "./Modal";
import yellowalert from "../assets/yellowalert.png";
import GoogleLoginButton from './GoogleLoginButton';

interface JwtPayload {
  roles: string[];
  isNewUser: boolean;
  [key: string]: any;
}

const Login = () => {
  
  return (
    <div
  className="flex min-h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat px-6"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://ustalumniassociation.files.wordpress.com/2020/10/ust-2.jpg?w=1200')",
  }}
>
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-20">
    
    <div className="flex flex-col items-center text-center md:text-center">
      <a
        href="#"
        className="flex items-center text-4xl md:text-[80px] text-white"
      >
        <img className="w-20 h-20 md:w-40 md:h-40 mr-3" src={yellowalert} alt="logo" />
        <span className="font-bold text-yellow-400">Yellow</span>Alert
      </a>

      <div className="flex flex-col items-center md:items-start justify-center mt-4">
        <p className="text-gray-300 font-semibold max-w-md text-center md:text-center">
        Comprehensive Risk Monitoring Platform for the Office of Planning and Quality Management
        </p>
      </div>
    </div>
  
    <section className="flex flex-col justify-center backdrop-blur-lg bg-white/10 shadow-lg rounded-2xl px-8 py-10 max-w-md w-full h-[400px] text-left border-t-[10px] border-yellow-400">
      <h1 className="text-xl md:text-4xl font-bold text-yellow-400 mb-8">
        Sign In
      </h1>

      <p className="text-md md:text-l font-semibold text-white text-left mb-8">
        To access YellowAlert, please make sure you sign in using your personal UST Google Workspace Account.
      </p>

      <div className="mt-6">
        <GoogleLoginButton />
      </div>
    </section>

  </div>
</div>


  );
};

export default Login;
