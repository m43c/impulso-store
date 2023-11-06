import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function RegistrationPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signup, user, errors: registrationErrors } = useAuth();

    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        signup(data);
    });

    useEffect(() => {
        if (!user) {
            navigate("/signup");
        } else {
            navigate("/signin");
        }
    }, [user]);

    return (
        <div className="auth-container sm:max-w-xs">
            <h1 className="auth-title">Sign up for Impulso</h1>

            <form onSubmit={onSubmit}>
                {registrationErrors.map((error, i) => (
                    <div className="auth-input text-center bg-red" key={i}>
                        {error}
                    </div>
                ))}

                <input
                    className="auth-input"
                    type="text"
                    placeholder="Username"
                    {...register("username", { required: true })}
                />
                {errors.username && (
                    <p className="auth-input-error">Username is required</p>
                )}

                <input
                    className="auth-input"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <p className="auth-input-error">Email is required</p>
                )}

                <input
                    className="auth-input"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                {errors.password && (
                    <p className="auth-input-error">Password is required</p>
                )}

                <button className="auth-btn" type="submit">
                    Sign up
                </button>

                <p className="auth-cta">
                    Already have an account?{" "}
                    <Link className="auth-cta-link" to="/signin">
                        Sing in
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default RegistrationPage;
