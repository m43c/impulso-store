import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

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
        <div className="container">
            <h1 className="container__title">Sign in for Impulso</h1>

            <form className="container__form" onSubmit={onSubmit}>
                {signinErrors.map((error, i) => (
                    <div
                        className="container__input container__input--error"
                        key={i}
                    >
                        {error}
                    </div>
                ))}

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
                    Sign In
                </button>

                <p className="container__question">
                    Don't have an account?{" "}
                    <Link className="container__link" to="/signup">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
