import { Button, Text } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StyledTextInput from "./ui/StyledTextInput";
import { Link, router } from "expo-router";

const signinSchema = yup.object({
  email: yup.string().required("Field required"),
  password: yup.string().required("Field required"),
});

const signupSchema = yup.object({
  email: yup.string().required("Field required"),
  password: yup.string().required("Field required"),
});

const AuthForm = ({ type }: { type: string }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(type === "signin" ? signinSchema : signupSchema),
  });

  handleSubmit((data) => console.log(data));

  const onSubmit = (data) => {
    console.log(data);
    router.push("/");
  };

  return (
    <>
      <StyledTextInput
        label="Email"
        name="email"
        control={control}
        errors={errors.email}
      />
      <StyledTextInput
        label="Password"
        name="password"
        control={control}
        errors={errors.password}
      />

      {type === "signin" && (
        <Link href="/forgot-password">
          <Text>Forgot password?</Text>
        </Link>
      )}

      <Button
        title={type === "signin" ? "Sign in" : "Sign up"}
        onPress={onSubmit}
      />
    </>
  );
};

export default AuthForm;
