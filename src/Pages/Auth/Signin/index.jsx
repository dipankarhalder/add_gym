import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { paths } from "../../../Constant";
import { Button } from "../../../Shared/Button";
import { Checkbox } from "../../../Shared/Checkbox";
import { Logo } from "../../../Components/Common/Logo";
import { EmailInput } from "../../../Components/Shared/FormElements/EmailInput";
import { PasswordInput } from "../../../Components/Shared/FormElements/PasswordInput";
import { ToastContext } from "../../../Shared/Toast/context/ToastContext";

import {
  AppSignin,
  AppInsideSignin,
  AppHeadingSignin,
  AppFormSignin,
  AppCheckField,
  AppBtnField,
  AppLinkCover,
} from "../style";

const MESSAGES = {
  email: {
    required: "Please provide a valid email address.",
    invalid: "Hmm, that doesn't look like a valid email.",
  },
  password: {
    required: "Please provide a valid password.",
  },
  success: {
    title: "Successfully Submitted",
    description: "You are a authorized user.",
  },
  error: {
    title: "Login Error",
    description: "Please enter a valid email and password",
  },
};

const signinSchema = yup.object({
  email: yup
    .string()
    .trim("No leading or trailing spaces allowed.")
    .strict(true)
    .email(MESSAGES.email.invalid)
    .required(MESSAGES.email.required),
  password: yup.string().required(MESSAGES.password.required),
});

export const SigninPage = () => {
  const navigate = useNavigate();
  const { addToast } = useContext(ToastContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinSchema),
  });

  const inputs = [
    {
      name: "email",
      label: "Email Address",
      component: EmailInput,
      props: { register, errors, placeholder: "" },
    },
    {
      name: "password",
      label: "Password",
      component: PasswordInput,
      props: { register, errors, placeholder: "" },
    },
  ];

  const onSubmit = (data) => {
    if (data.email === "addgym@gmail.com" && data.password === "AddGym@1234") {
      addToast({
        type: "success",
        title: MESSAGES.success.title,
        description: MESSAGES.success.description,
      });
      navigate(paths.OTP);
    } else {
      addToast({
        type: "error",
        title: MESSAGES.error.title,
        description: MESSAGES.error.description,
      });
    }
  };

  return (
    <AppSignin>
      <AppInsideSignin>
        <Logo />
        <AppHeadingSignin>
          <h1>Welcome Back</h1>
          <p>Nice to see you again, please enter your details</p>
        </AppHeadingSignin>
        <AppFormSignin onSubmit={handleSubmit(onSubmit)} noValidate>
          {inputs.map((input) => {
            const Component = input.component;
            return (
              <Component
                key={input.name}
                name={input.name}
                label={input.label}
                {...input.props}
              />
            );
          })}
          <AppCheckField>
            <Checkbox
              id="remember"
              name="remember"
              label="Remember Me"
              {...register("remember")}
            />
            <Link to={paths.FORGOT}>Forgot password?</Link>
          </AppCheckField>
          <AppBtnField>
            <Button>Continue</Button>
          </AppBtnField>
          <p style={{ fontSize: "13px", color: "#aaaaaa" }}>
            addgym@gmail.com || AddGym@1234
          </p>
        </AppFormSignin>
      </AppInsideSignin>
    </AppSignin>
  );
};
