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
        <div className="form-container min-w-[300px] sm:max-w-xs">
            <h1 className="form-title">Sign in for Impulso</h1>

            <form onSubmit={onSubmit}>
                {signinErrors.map((error, i) => (
                    <div className="form-input text-center bg-light-red" key={i}>
                        {error}
                    </div>
                ))}

                <input
                    className="form-input"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <p className="form-input-error">Email is required</p>
                )}

                <input
                    className="form-input"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                {errors.password && (
                    <p className="form-input-error">Password is required</p>
                )}

                <button
                    className="form-btn bg-light-yellow"
                    type="submit"
                >
                    Sign in
                </button>

                <p className="form-cta">
                    <span>New to Impulso?</span>
                    <Link className="form-cta-link" to="/signup">
                        Create an account
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
