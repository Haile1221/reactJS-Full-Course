
import { useState } from 'react'
import './App.css'
function App() {
  // add state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // add error states
  const [errors, setErrors] = useState({});
  // Password requirement state
  const [requirements, setRequirements] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
  });


  // strength state 
  const [strength, setStrength] = useState("");


  // password strength checker 
  function checkStrength(value) {
    const req = {
      length: value.length >= 6,
      upper: /[A-Z]/.test(value),
      lower: /[a-z]/.test(value),
      number: /\d/.test(value),
      special: /[@$!%*?&]/.test(value),

    };
    setRequirements(req);

    const passed = Object.values(req).filter(Boolean).length;

    if (passed <= 2) return "Weak";
    if (passed <= 4) return "Medium";
    return "Strong";

  }


  // input handling /updating 
  function handleChange(e) {
    const { name, value } = e.target;
    // use newForm 

    const newForm = { ...form, [name]: value };
    setForm(newForm);

    let error = "";
    // Individual Field Validation
    // name 
    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required";
      }
    }

    // email
    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(value)) {   //based on test@domain.com
        error = "Enter a valid email";
      }
    }

    // password
    if (name === "password") {
      if (!value.trim()) {
        error = "Password is required";
        setStrength("");
      } else {
        const pwStrength = checkStrength(value);
        setStrength(pwStrength);

        if (pwStrength === "Weak") {
          error = "Password is too weak";
        }
      }

      // ✅ sync confirm password automatically
      if (form.confirmPassword) {
        if (value !== form.confirmPassword) {
          setErrors(prev => ({
            ...prev,
            confirmPassword: "Passwords do not match"
          }));
        } else {
          setErrors(prev => ({
            ...prev,
            confirmPassword: ""
          }));
        }
      }
    }




    // consfirm password
    if (name === "confirmPassword") {
      if (!value.trim()) {
        error = "Confirm Password is required";
      } else if (value !== newForm.password) {
        error = "Passwords do not match";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }))
  }


  // // valiadation function 
  // function validate() {
  //   let newErrors = {}
  //   // name required 
  //   if (!form.name)
  //     newErrors.name = "Name is required";

  //    // email required 
  //   if (!form.email)
  //     newErrors.email = "Email is required";

  //   // password required 
  //   if (!form.password)
  //     newErrors.password= "Password is required";

  //   // ConfirmPassword required 
  //   if (!form.ConfirmPassword)
  //     newErrors.ConfirmPassword = "Confirm Password is required";

  //   return newErrors;
  // }



  // ➕ Add: prevent page refresh/ update validate all fields
  function handleSubmit(e) {
    e.preventDefault();
    let validationErrors = {};
    // Individual Field Validation
    //  name 
    if (!form.name.trim()) {
      validationErrors.name = "Name is required";
    }

    //  email
    if (!form.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      validationErrors.email = "Enter a Valid Email";
    }

    //  password
    if (!form.password.trim()) {
      validationErrors.password = "Password is required";
    } else {
      const req = {
        length: form.password.length >= 6,
        upper: /[A-Z]/.test(form.password),
        lower: /[a-z]/.test(form.password),
        number: /\d/.test(form.password),
        special: /[@$!%*?&]/.test(form.password),
      };

      const passed = Object.values(req).filter(Boolean).length;

      if (passed < 5) {
        validationErrors.password = "Password must meet all requirements";
      }
    }


    // //  confirm passwod
    if (!form.confirmPassword.trim()) {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (form.confirmPassword !== form.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);


    // if no errors 
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successsfully ...")
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
    }

  }


  return (
    <div className='container'>

      <form className='card' onSubmit={handleSubmit}>
        <h2> Register </h2>
        {/* connecting state with inputs  */}

        <input name='name' value={form.name} onChange={handleChange} placeholder='name' />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <input name='email' value={form.email} onChange={handleChange} placeholder='email' />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <input name='password' value={form.password} type='password' onChange={handleChange} placeholder='password' />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        {/* PASSWORD UI FEEDBACK */}
        {form.password && (
          <>
            <p className={`strength ${strength.toLowerCase()}`}>
              Strength: <strong>{strength}</strong>
            </p>

            <ul className="password-rules">
              <li className={requirements.length ? "valid" : ""}>
                Minimum 6 characters
              </li>
              <li className={requirements.upper ? "valid" : ""}>
                Uppercase letter
              </li>
              <li className={requirements.lower ? "valid" : ""}>
                Lowercase letter
              </li>
              <li className={requirements.number ? "valid" : ""}>
                Number
              </li>
              <li className={requirements.special ? "valid" : ""}>
                Special character (@$!%*?&)
              </li>
            </ul>
          </>
        )}



        <input type='password' name='confirmPassword' value={form.confirmPassword} onChange={handleChange} placeholder='Confirm password' />
        {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}

        <button> Register </button>

      </form>
    </div>
  )
}

export default App
