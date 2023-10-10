import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./LoginPage.module.css";

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signin, isAuthenticated, errors: signinErrors } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/products");
        }
    }, [isAuthenticated]);

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.title}>Sign in for Impulso</h1>

            <form className={styles.formContainer} onSubmit={onSubmit}>
                {signinErrors.map((error, i) => (
                    <div
                        className={`${styles.input} ${styles.loginError}`}
                        key={i}
                    >
                        {error}
                    </div>
                ))}

                <input
                    type="email"
                    className={styles.input}
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <p className={styles.errorInput}>Email is required</p>
                )}

                <input
                    type="password"
                    className={styles.input}
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                {errors.password && (
                    <p className={styles.errorInput}>Password is required</p>
                )}

                <button
                    type="submit"
                    className={`${styles.input} ${styles.button}`}
                >
                    Sign In
                </button>

                <p className={styles.question}>
                    Already have an account?{" "}
                    <Link className={styles.link} to="/signup">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
