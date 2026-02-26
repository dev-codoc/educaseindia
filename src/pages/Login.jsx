import { useState } from "react";
import FloatingInput from "../components/FloatingInput";

export default function Login() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-bold mb-2">
        Signin to your PopX account
      </h1>

      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit,
      </p>

      <div className="space-y-5">

        <FloatingInput
          label="Email Address"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <FloatingInput
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />

      </div>

      <button
        className="
        w-full mt-6 py-3 rounded-lg
        bg-gray-300 text-white font-semibold
        "
      >
        Login
      </button>

    </div>
  );
}