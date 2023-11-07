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
        <div className="form-container min-w-[300px] sm:max-w-xs">
            <h1 className="form-title">Sign up for Impulso</h1>

            <form onSubmit={onSubmit}>
                {registrationErrors.map((error, i) => (
                    <div
                        className="form-input border-none text-center bg-rdBg"
                        key={i}
                    >
                        {error}
                    </div>
                ))}

                <input
                    className="form-input"
                    type="text"
                    placeholder="Username"
                    {...register("username", { required: true })}
                />
                {errors.username && (
                    <p className="form-input-error">Username is required</p>
                )}

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

                <button className="form-btn bg-bluBg" type="submit">
                    Sign up
                </button>

                <p className="form-cta">
                    Already have an account?{" "}
                    <Link className="form-cta-link" to="/signin">
                        Sing in
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default RegistrationPage;
