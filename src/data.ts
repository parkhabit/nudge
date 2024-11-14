import { Frequency, Habit, ValueType, TrackedDay } from "./types";

export const dataHabits: Habit[] = [
    {
        id: 1,
        name: "Drink water",
        description: "Increase water intake",
        icon: "sunrise",
        valueType: ValueType.NUMBER,
        frequency: Frequency.DAILY,
        reminders: ["17:00"],
    },
    {
        id: 2,
        name: "Steps",
        description: "Walk 10,000 steps",
        icon: "sunset",
        valueType: ValueType.NUMBER,
        frequency: Frequency.DAILY,
        reminders: [],
    },
    {
        id: 3,
        name: "Read",
        description: "Increase reading time",
        icon: "star",
        valueType: ValueType.NUMBER,
        frequency: Frequency.DAILY,
        reminders: [],
    },
    {
        id: 4,
        name: "Meditate",
        description: "Meditation is good for my brain",
        icon: "square",
        valueType: ValueType.BOOLEAN,
        frequency: Frequency.DAILY,
        reminders: [],
    },
    {
        id: 5,
        name: "Sleep",
        description: "Get 8 hours of sleep",
        icon: "tablet",
        frequency: Frequency.DAILY,
        valueType: ValueType.BOOLEAN,
        reminders: [],
    }
]

export const dataTracking: TrackedDay[] = [
    {
        id: 1,
        date: new Date('2024-11-14'),
        habits : [
            {
            habitId: 1,
            habitValue: 0,
            habitComplete: false,
        },
        {
            habitId: 2,
            habitValue: 500,
            habitComplete: false,
        },
        {
            habitId: 3,
            habitValue: 20,
            habitComplete: false,
        },
        {
            habitId: 4,
            habitValue: false,
            habitComplete: false,
        },
        {
            habitId: 5,
            habitValue: true,
            habitComplete: false,
        },
    ]
    },
]