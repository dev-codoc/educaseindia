import { useNavigate } from "react-router-dom";

export default function Welcome() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-screen p-6">

      <div>

        <h1 className="text-2xl font-bold mb-2">
          Welcome to PopX
        </h1>

        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button
          onClick={() => navigate("/register")}
          className="w-full bg-[#6c25ff] text-white py-3 rounded-lg mb-3"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-[#cebafb] text-black py-3 rounded-lg"
        >
          Already Registered? Login
        </button>

      </div>

    </div>
  );
}