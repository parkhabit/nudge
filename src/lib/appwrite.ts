import { Client, Account, Databases, ID, Models } from "react-native-appwrite";

export async function createAccount() {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("673c3e6b002bacb965ed")
    .setPlatform("com.nudge.app");

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
  };
}
