import { useForm } from "react-hook-form";

function RegistrationPage() {
    const { register, handleSubmit } = useForm();

    return (
        <div>
            <h1>Sign Up</h1>

            <form
                onSubmit={handleSubmit((values) => {
                    console.log(values);
                })}
            >
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
