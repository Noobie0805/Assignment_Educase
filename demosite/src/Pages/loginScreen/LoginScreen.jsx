
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./LoginScreen.module.css";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            setError("No account found. Please sign up first.");
            return;
        }

        if (storedUser.email === email && storedUser.password === password) {
            navigate("/profile", { state: storedUser });
        } else {
            setError("Invalid email or password.");
        }
    };

    return (
        <div className={Style.loginScreen}>
            <div className={Style.loginScreen_header}>
                Sign in to your PopX account
            </div>

            <div className={Style.loginScreen_para}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            </div>

            <div className={Style.loginScreen_email_password}>
                <span className={Style.loginScreen_email_password_label}>
                    Email Address
                </span>
                <input
                    className={Style.loginScreen_email_password_input}
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className={Style.loginScreen_email_password}>
                <span className={Style.loginScreen_email_password_label}>
                    Password
                </span>
                <input
                    className={Style.loginScreen_email_password_input}
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className={Style.loginScreen_login} onClick={handleLogin}>
                <span className={Style.loginScreen_login_text}>Login</span>
            </div>

            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </div>
    );
};

export default LoginScreen;
