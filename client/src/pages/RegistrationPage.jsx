import { useForm } from "react-hook-form";
import { signupRequest } from "../api/auth";

function RegistrationPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        const res = await signupRequest(values);
        console.log(res);
    });

    return (
        <div>
            <h1>Sign Up</h1>

            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    {...register("username", { required: true })}
                    placeholder="Username"
                />

                <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                />

                <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                />

                <button type="submit">Sign Up</button>

                <p>
                    Already have an account? <a href="#">Sing in</a>
                </p>
            </form>
        </div>
    );
}

export default RegistrationPage;
