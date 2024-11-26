import { useContext, createContext, type PropsWithChildren } from "react";
import { useStorageState } from "./useStorageState";
import { Client, Account, ID, Models } from "react-native-appwrite";
import { set } from "react-hook-form";

const AuthContext = createContext<{
  signIn: (name: string, email: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signUp: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

let client: Client;
let account: Account;

client = new Client()
  .setProject("673c3e6b002bacb965ed")
  .setPlatform("com.nudge.app");

account = new Account(client);

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        signIn: async (email: string, password: string) => {
          await account.createEmailPasswordSession(email, password);
          await account.get().then((user) => {
            setSession(user.$id);
          });
        },
        signUp: async (name: string, email: string, password: string) => {
          await account.create(ID.unique(), email, password, name);
        },
        signOut: () => {
          account.deleteSession("current");
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
