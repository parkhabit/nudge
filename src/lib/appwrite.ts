import { Client, Account, ID, Models } from "react-native-appwrite";


export async function createClient() {
    const client = new Client().setProject("673c3e6b002bacb965ed").setPlatform("com.nudge.app");
  
    const account = new Account(client);
    return account
}

