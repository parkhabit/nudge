import { useContext, createContext, type PropsWithChildren } from "react";
import { useStorageState } from "./useStorageState";
import { Client, Account, ID, Models } from "react-native-appwrite";
import { createAccount } from "./appwrite";

const AuthContext = createContext<{
  signIn: (name: string, email: string) => Promise<void>;
  signUp: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => Promise<void>;
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

const DATABASE_ID = "6746673600096c14bf65";
const USER_COLLECTION_ID = "67466776000c943ce540";

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        signIn: async (email: string, password: string) => {
          const { account } = await createAccount();
          await account.createEmailPasswordSession(email, password);
          await account.get().then((user) => {
            setSession(user.$id);
          });
        },
        signUp: async (
          firstName: string,
          lastName: string,
          email: string,
          password: string
        ) => {
          let newUserAccount;
          try {
            const { account, database } = await createAccount();

            newUserAccount = await account.create(
              ID.unique(),
              email,
              password,
              `${firstName} ${lastName}`
            );
            if (!newUserAccount) {
              throw new Error("Error creating user");
            }

            await database.createDocument(
              DATABASE_ID,
              USER_COLLECTION_ID,
              ID.unique(),
              {
                userId: newUserAccount.$id,
                firstName,
                lastName,
                email,
              }
            );
          } catch (error) {
            console.log("Error on sign up:", error);
          }
        },
        signOut: async () => {
          const { account } = await createAccount();
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
