import { View, Text, Pressable } from "react-native";

const DateButton = ({
  date,
  active,
  onDateChange,
}: {
  date: Date;
  active: boolean;
  onDateChange: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  const day = date.toLocaleString("en-us", { weekday: "short" });

  return (
    <Pressable className="items-center" onPress={() => onDateChange(date)}>
      <Text className={`pb-2 ${active && "font-bold"}`}>{day}</Text>
      <View
        className={`rounded-full bg-gray-300 h-11 w-11 items-center justify-center p-3 ${
          active && "border-2 border-black"
        }`}
      >
        <Text>{date.getDate()}</Text>
      </View>
    </Pressable>
  );
};

const DatePicker = ({
  currentDate,
  onDateChange,
}: {
  currentDate: Date;
  onDateChange: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  const addDays = (date: Date, days: number) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  };

  const subtractDays = (date: Date, days: number) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - days);
    return newDate;
  };

  const startingDate = subtractDays(currentDate, 3);

  let dateButtonList = [];
  for (let i = 0; i < 7; i++) {
    const newDate = addDays(startingDate, i);
    dateButtonList.push(
      <DateButton date={newDate} active={i === 3} onDateChange={onDateChange} />
    );
  }

  return (
    <View className="flex flex-row gap-3 justify-between p-4">
      {dateButtonList}
    </View>
  );
};

export default DatePicker;
