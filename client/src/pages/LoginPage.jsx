import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signin, errors: signinErrors } = useAuth();

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.containerTitle}>Sign in for Impulso</h1>

            <form className={styles.containerForm} onSubmit={onSubmit}>
                {signinErrors.map((error, i) => (
                    <div
                        className={`${styles.containerInput} ${styles.containerInputError}`}
                        key={i}
                    >
                        {error}
                    </div>
                ))}

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
                    Sign In
                </button>

                <p className={styles.containerQuestion}>
                    Already have an account?{" "}
                    <Link className={styles.containerLink} to="/signup">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
