import SignUpForm from "../../components/SignUp";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSession } from "../../lib/authProvider";

const SignUp = () => {
  const { signIn, signUp } = useSession();

  async function register(email: string, password: string, name: string) {
    await signUp(name, email, password);
    await signIn(email, password);
  }
  return (
    <SafeAreaView>
      <SignUpForm onSignUp={register} />
    </SafeAreaView>
  );
};

export default SignUp;
