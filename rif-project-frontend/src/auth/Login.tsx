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
      className="flex h-full w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://ustalumniassociation.files.wordpress.com/2020/10/ust-2.jpg?w=1200')",
      }}
    >
      <div className="container mx-auto py-4 px-4 flex items-center justify-center min-h-screen">
        <section className="rounded-xl  px-10 py-12 max-w-xl w-full">
          <div className="flex flex-col items-center justify-center mx-auto">
            <a
              href="#"
              className="flex items-center mb-6 text-3xl font-semibold text-yellow-500 "
            >
              <img className="w-10 h-10 mr-2" src={yellowalert} alt="logo" />
              YellowAlert
            </a>
            <div className="w-full bg-white rounded-lg shadow">
               <div className="p-6 space-y-4 sm:p-8">
                <h1 className="text-l font-bold leading-tight tracking-tight md:text-2xl">
                  Sign in to your account
                </h1>
                  <div>
                    <GoogleLoginButton />
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
};

export default Login;
