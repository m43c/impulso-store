import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import styles from "./LoginPage.module.css";

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { errors: signinErrors, signin } = useAuth();

    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        await signin(data)
            .then(() => navigate("/products"))
            .catch(() => navigate("/signin"));
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sign in for Impulso</h1>

            <form className={styles.form} onSubmit={onSubmit}>
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
                    <p className={styles.inputError}>Email is required</p>
                )}

                <input
                    type="password"
                    className={styles.input}
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                {errors.password && (
                    <p className={styles.inputError}>Password is required</p>
                )}

                <button
                    type="submit"
                    className={`${styles.input} ${styles.button}`}
                >
                    Sign in
                </button>

                <p className={styles.question}>
                    New to Impulso?{" "}
                    <Link className={styles.link} to="/signup">
                        Create an account
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
