import { Habit } from "../../types";
import { createAccount } from "../appwrite";
import { Query, ID } from 'react-native-appwrite';



const DATABASE_ID = process.env.EXPO_PUBLIC_DATABASE_ID!!;
const USER_COLLECTION_ID = process.env.EXPO_PUBLIC_USER_COLLECTION_ID!!;
const HABIT_COLLECTION_ID = process.env.EXPO_PUBLIC_HABIT_COLLECTION_ID!!;

export const getUserInfo = async (userId: string) => {
    try {
       const { database } = await createAccount();
       const user = await database.listDocuments(
        DATABASE_ID,
        USER_COLLECTION_ID,
        [Query.equal('userId', [userId])]
      )

    return user.documents[0];
    } catch (error) {
      console.log(error)
    }
}


export const addHabit = async (habit: Habit) => {
  try {
    const { database } = await createAccount();
    const response = await database.createDocument(
      DATABASE_ID,
      HABIT_COLLECTION_ID,
      ID.unique(),
      {...habit, habitId: ID.unique()}
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}