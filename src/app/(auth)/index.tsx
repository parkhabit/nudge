import { Text } from "react-native";
import AuthForm from "../../components/AuthForm";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <>
      <Text>Welcome to Nudge</Text>
      <Text>Sign in to continue</Text>
      <Text>
        Don't have an account?<Link href="/signup">Create an account</Link>
      </Text>
      <AuthForm type="signin" />
    </>
  );
};

export default SignIn;
