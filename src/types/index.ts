import FeatherIcon from "@expo/vector-icons/Feather";

export enum ValueType {
    BOOLEAN,
    NUMBER,
}

export enum Frequency {
    DAILY = 'daily',
    WEEKLY = 'weekly',
    MONTHLY = 'monthly',
}

export type Habit = {
    id: number;
    name: string;
    description: string;
    // icon: keyof typeof FeatherIcon.glyphMap;
    valueType: ValueType;
    valueDescription: string;
    frequency: Frequency;
    reminders: string[];
}

export type TrackedHabit = {
    habitId: number;
    habitValue: boolean | number;
    habitComplete: boolean;
}

export type TrackedDay = {
    id: number;
    date: Date;
    habits: TrackedHabit[]
}