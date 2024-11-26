import { Button, Text } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StyledTextInput from "./ui/StyledTextInput";
import { router } from "expo-router";

const signinSchema = yup.object({
  email: yup.string().required("Field required"),
  password: yup.string().required("Field required"),
});

const SignInForm = ({
  onSignIn,
}: {
  onSignIn: (email: string, password: string) => Promise<void>;
}) => {
  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = async (data) => {
    onSignIn(data.email, data.password)
      .then(() => {
        router.navigate("/(tabs)/");
      })
      .catch((error) => {
        console.log(error.message);
        setError("root", { message: error.message });
        setTimeout(() => clearErrors("root"), 8000);
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

      {/* {type === "signin" && (
        // TODO: add functionality for forgot password
        <Link href="/forgot-password">
          <Text>Forgot password?</Text>
        </Link>
      )} */}
      {errors.root && (
        <Text className="color-red-500">{errors.root.message}</Text>
      )}
      <Button title={"Sign in"} onPress={handleSubmit(onSubmit)} />
    </>
  );
};

export default SignInForm;
