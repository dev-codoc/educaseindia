import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingInput from "../components/FloatingInput";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/account");
  };

  return (
    <div className="h-screen flex flex-col justify-between p-6 bg-gray-100">

      {/* TOP SECTION */}
      <div>

        <h1 className="text-2xl font-bold mb-6">
          Create your PopX account
        </h1>

        <div className="space-y-5">

          <FloatingInput
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <FloatingInput
            label="Phone number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <FloatingInput
            label="Email address"
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

          <FloatingInput
            label="Company name"
            name="company"
            value={form.company}
            onChange={handleChange}
          />

          {/* RADIO */}
          <div>

            <p className="text-sm mb-3">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>

            <div className="flex items-center gap-6">

              <label className="flex items-center gap-2 cursor-pointer">

                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={form.agency === "Yes"}
                  onChange={handleChange}
                  className="accent-[#6c25ff] w-4 h-4"
                />

                Yes

              </label>

              <label className="flex items-center gap-2 cursor-pointer">

                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={form.agency === "No"}
                  onChange={handleChange}
                  className="accent-[#6c25ff] w-4 h-4"
                />

                No

              </label>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BUTTON */}
      <button
        onClick={handleSubmit}
        className="
        w-full 
        bg-[#6c25ff]
        from-[#6c25ff] 
        to-[#6c25ff] 
        text-white 
        py-3 
        rounded-lg 
        font-semibold
        "
      >
        Create Account
      </button>

    </div>
  );
}