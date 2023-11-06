import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

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
        <div className="auth-container sm:max-w-xs">
            <h1 className="auth-title">Sign in for Impulso</h1>

            <form onSubmit={onSubmit}>
                {signinErrors.map((error, i) => (
                    <div className="auth-input text-center bg-red" key={i}>
                        {error}
                    </div>
                ))}

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
                    Sign in
                </button>

                <p className="auth-cta">
                    <span>New to Impulso?</span>
                    <Link className="auth-cta-link" to="/signup">
                        Create an account
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
