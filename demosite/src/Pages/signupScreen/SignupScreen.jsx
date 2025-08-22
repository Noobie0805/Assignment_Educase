import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Style from "./SignupScreen.module.css"

const SignupScreen = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        isAgency: true,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        localStorage.setItem("user", JSON.stringify(formData));
        navigate("/login", { state: formData });
    };

    return (
        <div className={Style.SignupScreen}>
            <div className={Style.SignupScreen_header}>
                Create your PopX account
            </div>

            <div className={Style.SignupScreen_form}>
                <span className={Style.SignupScreen_form_label}>
                    Fullname<span className={Style.SignupScreen_form_label_required}>*</span>
                </span>
                <input
                    className={Style.SignupScreen_form_input}
                    type="text"
                    name="fullName"
                    placeholder="Enter fullname"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={Style.SignupScreen_form}>
                <span className={Style.SignupScreen_form_label}>
                    Phone Number<span className={Style.SignupScreen_form_label_required}>*</span>
                </span>
                <input
                    className={Style.SignupScreen_form_input}
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={Style.SignupScreen_form}>
                <span className={Style.SignupScreen_form_label}>
                    Email Address<span className={Style.SignupScreen_form_label_required}>*</span>
                </span>
                <input
                    className={Style.SignupScreen_form_input}
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={Style.SignupScreen_form}>
                <span className={Style.SignupScreen_form_label}>
                    Password<span className={Style.SignupScreen_form_label_required}>*</span>
                </span>
                <input
                    className={Style.SignupScreen_form_input}
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>

            {formData.isAgency && (
                <div className={Style.SignupScreen_form}>
                    <span className={Style.SignupScreen_form_label}>Company</span>
                    <input
                        className={Style.SignupScreen_form_input}
                        type="text"
                        name="company"
                        placeholder="Enter company name"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>
            )}

            <div className={Style.SignupScreen_radioBtns}>
                <p>
                    Are you an Agency?<span className={Style.SignupScreen_form_label_required}>*</span>
                </p>
                <div className={Style.SignupScreen_radioBtns_container}>
                    <label className={Style.SignupScreen_radioBtns_label}>
                        <input
                            type="radio"
                            name="agency"
                            checked={formData.isAgency}
                            onChange={() => setFormData({ ...formData, isAgency: true })}
                        />
                        Yes
                    </label>
                    <label className={Style.SignupScreen_radioBtns_label}>
                        <input
                            type="radio"
                            name="agency"
                            checked={!formData.isAgency}
                            onChange={() => setFormData({ ...formData, isAgency: false })}
                        />
                        No
                    </label>
                </div>
            </div>

            <div
                className={Style.SignupScreen_createAccount}
                onClick={handleSubmit}
            >
                <span className={Style.SignupScreen_createAccount_text}>Create Account</span>
            </div>
        </div>
    );
};

export default SignupScreen;
