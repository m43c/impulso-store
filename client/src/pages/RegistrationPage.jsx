import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import "./RegistrationPage.css";

function RegistrationPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signup, isAuthenticated, errors: registrationErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className="container">
            <h1 className="container__title">Welcome to Impulso</h1>

            <form className="container__form" onSubmit={onSubmit}>
                {registrationErrors.map((error, i) => (
                    <div
                        className="container__input container__input--error"
                        key={i}
                    >
                        {error}
                    </div>
                ))}

                <input
                    type="text"
                    className="container__input"
                    placeholder="Username"
                    {...register("username", { required: true })}
                />
                {errors.username && (
                    <p className="container__error">Username is required</p>
                )}

                <input
                    type="email"
                    className="container__input"
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <p className="container__error">Email is required</p>
                )}

                <input
                    type="password"
                    className="container__input"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                {errors.password && (
                    <p className="container__error">Password is required</p>
                )}

                <button
                    type="submit"
                    className="container__input container__input--button"
                >
                    Sign Up
                </button>

                <p className="container__question">
                    Already have an account?{" "}
                    <Link className="container__link" to="/signin">
                        Sing in
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default RegistrationPage;
