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
            navigate("/signin");
        }
    }, [user]);

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.title}>Sign up for Impulso</h1>

            <form className={styles.formContainer} onSubmit={onSubmit}>
                {registrationErrors.map((error, i) => (
                    <div
                        className={`${styles.input} ${styles.registrationErrors}`}
                        key={i}
                    >
                        {error}
                    </div>
                ))}

                <input
                    type="text"
                    className={styles.input}
                    placeholder="Username"
                    {...register("username", { required: true })}
                />
                {errors.username && (
                    <p className={styles.error}>
                        Username is required
                    </p>
                )}

                <input
                    type="email"
                    className={styles.input}
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <p className={styles.error}>Email is required</p>
                )}

                <input
                    type="password"
                    className={styles.input}
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                {errors.password && (
                    <p className={styles.error}>
                        Password is required
                    </p>
                )}

                <button
                    type="submit"
                    className={`${styles.input} ${styles.button}`}
                >
                    Sign Up
                </button>

                <p className={styles.question}>
                    Already have an account?{" "}
                    <Link className={styles.link} to="/signin">
                        Sing in
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default RegistrationPage;
