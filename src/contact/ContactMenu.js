import React, { useState } from "react";
import emailjs from "emailjs-com";
import DOMPurity from "dompurify";
import "../styles/Contact.css";

const ContactMenu = () => {
    const initialStates = {
        name: "",
        email: "",
        message: "",
    };
    const [fromdata, setFormData] = useState(initialStates);
    const [errors, setErrors] = useState({});
    const [isloading, setIsloading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((preFormData) => ({
            ...preFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validatedErrors = validateForm(fromdata);
        if (Object.keys(validatedErrors).length > 0) {
            setErrors(validatedErrors);
            return;
        }
        setIsloading(true);

        const { name, email, message } = fromdata;
        const sanitizedData = {
            name: "Name:" + DOMPurity.sanitize(name),
            email: "Email:" + DOMPurity.sanitize(email),
            message: "Message:" + DOMPurity.sanitize(message),
        };
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userID = process.env.REACT_APP_EMAILJS_USER_ID;

        emailjs
            .send(serviceID, templateID, sanitizedData, userID)
            .then((response) => {
                console.log(
                    "Email sent successfully",
                    response.status,
                    response.text
                );
                setFormData(initialStates);
                setErrors({});
                setIsSent(true);
            })
            .catch((error) => {
                console.error("Email sent failed", error);
            })
            .finally(() => {
                setIsloading(false);
            });
    };

    const validateForm = () => {
        const errors = {};
        const { name, email, message } = fromdata;
        if (!name.trim()) {
            errors.name = "Name is required";
        }
        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!isValidEmail(email)) {
            errors.email = "Invalid email address";
        }
        if (!message.trim()) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const isValidEmail = (value) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(value);
    };
    return (
        <div className="contact-menu">
            {!isSent && (
                <form onSubmit={handleSubmit}>
                    <div className="from-group">
                        <lebel htmlFor="name">Name</lebel>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={fromdata.name}
                            onChange={handleChange}
                            className={errors.name ? "error" : ""}
                            disabled={isloading}
                        />
                        {errors.name && (
                            <span className="error-message">{errors.name}</span>
                        )}
                    </div>

                    <div className="from-group">
                        <lebel htmlFor="email">Email</lebel>
                        <input
                            type="text"
                            id="email"
                            name="email" 
                            placeholder="Email"
                            value={fromdata.email}
                            onChange={handleChange}
                            className={errors.email ? "error" : ""}
                            disabled={isloading}
                        />
                        {errors.email && (
                            <span className="error-message">
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <div className="from-group">
                        <lebel htmlFor="message">Message</lebel>
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            placeholder="Message"
                            value={fromdata.message}
                            onChange={handleChange}
                            className={errors.message ? "error" : ""}
                            disabled={isloading}
                        ></textarea>
                        {errors.message && (
                            <span className="error-message">
                                {errors.message}
                            </span>
                        )}
                    </div>
                    <button type="Submit" disabled={isloading}>
                        {isloading ? "SENDING..." : "SUBMIT"}
                    </button>
                </form>
            )}
            {isSent && (
                <div className="success-message">
                    <p>
                        SUCCESS <br></br>
                        <br></br>
                        Thank you for your message.
                    </p>
                </div>
            )}
        </div>
    );
};
export default ContactMenu;
