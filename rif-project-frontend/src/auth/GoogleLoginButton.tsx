import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton: React.FC = () => {
  const responseGoogle = async (response: any) => {
    if (response.credential) {
      const idToken = response.credential;

      const res = await fetch("http://localhost:8080/api/auth/google-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: idToken }), // Use "token" instead of "idToken"
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Login successful:", data);
      } else {
        console.error("Login failed:", res.statusText);
      }
    } else {
      console.error("Google login failed:", response);
    }
  };

  return (
    <GoogleOAuthProvider clientId="784862852220-h52tgn6bc19rvvrmk9lt15c4k57f38a8.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={responseGoogle}
        onError={() => console.error("Login Failed")}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
