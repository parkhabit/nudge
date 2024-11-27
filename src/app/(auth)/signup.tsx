import SignUpForm from "../../components/SignUp";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSession } from "../../lib/authProvider";

const SignUp = () => {
  const { signIn, signUp } = useSession();

  async function register(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    await signUp(firstName, lastName, email, password);
    await signIn(email, password);
  }
  return (
    <SafeAreaView>
      <SignUpForm onSignUp={register} />
    </SafeAreaView>
  );
};

export default SignUp;
