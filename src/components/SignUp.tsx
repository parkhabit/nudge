import { Button } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StyledTextInput from "./ui/StyledTextInput";
import { router } from "expo-router";

const signupSchema = yup.object({
  email: yup.string().required("Field required"),
  password: yup.string().required("Field required"),
  firstName: yup.string().required("Field required"),
  lastName: yup.string().required("Field required"),
});

interface FormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const SignUpForm = ({
  onSignUp,
}: {
  onSignUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: FormData) => {
    onSignUp(data.email, data.password, data.firstName, data.lastName)
      .then(() => {
        router.push("./success");
      })
      .catch((error) => {
        console.error("Failed to sign up", error);
      });
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

      <StyledTextInput
        label="First name"
        name="firstName"
        control={control}
        errors={errors.firstName}
      />
      <StyledTextInput
        label="Last name"
        name="lastName"
        control={control}
        errors={errors.firstName}
      />

      <Button title={"Sign up"} onPress={handleSubmit(onSubmit)} />
    </>
  );
};

export default SignUpForm;
