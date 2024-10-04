"use client";

import { AuthTitle } from "@/components/AuthTitle";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { AuthFooter } from "./AuthFooter";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "../provider/UserProvider";

export const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { loginHandler, isLoggedIn, loading, token } = useUser();

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const emailHandler = (event) => {
    event.preventDefault();
    setLoginInput((prev) => ({ ...prev, email: event.target.value }));
  };
  const passwordHandler = (event) => {
    event.preventDefault();
    setLoginInput((prev) => ({ ...prev, password: event.target.value }));
  };

  const login = async () => {
    const { email, password } = loginInput;

    if (!loginInput.password | !loginInput.email) {
      setError("email passwordoo hiine uu");
    } else {
      setError("");
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      loginHandler(email, password);
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <AuthTitle
        title={"Welcome Back"}
        description={"Welcome back, Please enter your details"}
      />
      <div className="w-[384px] flex flex-col gap-4 items-center">
        <Input type="text" inputHandler={emailHandler} placeholder={"email"} />
        <Input
          type={"password"}
          inputHandler={passwordHandler}
          placeholder={"Password"}
        />
        {error && <div className="text-red-600">{error}</div>}
        <Button clickHandler={login} text={"Log in"} />
      </div>
      <AuthFooter
        prop={"/signup"}
        footerText={"Don’t have account?"}
        buttonText={"Sign up"}
      />
    </div>
  );
};
