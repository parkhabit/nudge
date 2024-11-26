import React from "react";
import { Text } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInForm from "../../components/SignIn";
import { useSession } from "../../lib/authProvider";

const SignIn = () => {
  const { signIn } = useSession();
  return (
    <SafeAreaView>
      <Text>Welcome to Nudge</Text>
      <Text>Sign in to continue</Text>
      <Text>
        Don't have an account?<Link href="/signup">Create an account</Link>
      </Text>
      <SignInForm onSignIn={signIn} />
    </SafeAreaView>
  );
};

export default SignIn;
