import React, { useEffect, useState } from "react";
import Label from "../ui/Label";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import loginApi from "../../api/loginapi";
import { MdAnalytics } from "react-icons/md";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      navigate("/home");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const data = await loginApi(formData);

      localStorage.setItem("token", data.token);

      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border-none rounded shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="w-full flex justify-center items-center">
          <MdAnalytics className=" text-[#125887] size-9" />
        </div>
        <h1 className="text-[#125887] text-xl font-medium text-center md:text-2xl mb-1">StuPredict</h1>
        <h1 className="text-md text-center mb-3">
          Asain College of Higher Studies
        </h1>
        <Label text="Email" htmlFor="email" />
        <div className="relative w-full">
          <MdEmail className="absolute left-3 top-1/2 -translate-y-3.5 text-gray-400" />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <Label text="Password" htmlFor="password" />
        <div className="relative w-full">
          <FaLock className="absolute left-3 top-1/2 translate-y-4 text-gray-400" />
        </div>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={"Enter your password"}
        />

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        {/* <div className="flex justify-center items-center my-3 w-full">
          <Button type="submit">Login</Button>
        </div> */}
        <button className="text-center px-2 py-3 w-full text-lg hover:font-semibold bg-[#125887] hover:bg-[#04395E] rounded my-3 text-white">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
