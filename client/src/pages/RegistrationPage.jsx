import { useForm } from "react-hook-form";
import { signupRequest } from "../api/auth";
import "./RegistrationPage.css";

function RegistrationPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        const res = await signupRequest(values);
        console.log(res);
    });

    return (
        <div className="container">
            <h1 className="container__h1">Welcome to Impulso</h1>

            <form className="container__form" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="container__input"
                    placeholder="Username"
                    {...register("username", { required: true })}
                />

                <input
                    type="email"
                    className="container__input"
                    placeholder="Email"
                    {...register("email", { required: true })}
                />

                <input
                    type="password"
                    className="container__input"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />

                <button
                    type="submit"
                    className="container__input container__input--button"
                >
                    Sign Up
                </button>

                <p className="container__p">
                    Already have an account?{" "}
                    <a className="container__link" href="#">
                        Sing in
                    </a>
                </p>
            </form>
        </div>
    );
}

export default RegistrationPage;
