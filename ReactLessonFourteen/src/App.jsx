import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();

  const password = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted ✅");
    reset();
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleSubmit(onSubmit)}>
        <h2>🚀 Create Account</h2>

        {/* Name */}
        <label>Name</label>
        <input
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email"
            }
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters"
            }
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        {/* Strength */}
        {password && (
          <p className="strength">
            Strength:
            <span>
              {password.length < 6
                ? " Weak"
                : password.length < 10
                ? " Medium"
                : " Strong"}
            </span>
          </p>
        )}

        {/* Confirm Password */}
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: (value) => {
              if (!password) return "Enter password first";
              return value === password || "Passwords do not match";
            }
          })}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}

        <button type="submit">✨ Register</button>
      </form>
    </div>
  );
}

export default App;