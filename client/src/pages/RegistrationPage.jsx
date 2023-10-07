import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import styles from "./RegistrationPage.module.css";

function RegistrationPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const {
        signup,
        user,
        isAuthenticated,
        errors: registrationErrors,
    } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((values) => {
        signup(values);
    });

    useEffect(() => {
        if (!user) {
            navigate("/signup");
        } else {
            navigate("/signin")
        }
    }, [user]);

    return (
        <div className={styles.container}>
            <h1 className={styles.containerTitle}>Sign up for Impulso</h1>

            <form className={styles.containerForm} onSubmit={onSubmit}>
                {registrationErrors.map((error, i) => (
                    <div
                        className={`${styles.containerInput} ${styles.containerInputError}`}
                        key={i}
                    >
                        {error}
                    </div>
                ))}

                <input
                    type="text"
                    className={styles.containerInput}
                    placeholder="Username"
                    {...register("username", { required: true })}
                />
                {errors.username && (
                    <p className={styles.containerError}>
                        Username is required
                    </p>
                )}

                <input
                    type="email"
                    className={styles.containerInput}
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <p className={styles.containerError}>Email is required</p>
                )}

                <input
                    type="password"
                    className={styles.containerInput}
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                {errors.password && (
                    <p className={styles.containerError}>
                        Password is required
                    </p>
                )}

                <button
                    type="submit"
                    className={`${styles.containerInput} ${styles.containerInputButton}`}
                >
                    Sign Up
                </button>

                <p className={styles.containerQuestion}>
                    Already have an account?{" "}
                    <Link className={styles.containerLink} to="/signin">
                        Sing in
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default RegistrationPage;
