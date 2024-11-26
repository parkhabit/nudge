import { View, Text, Pressable, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import FeatherIcon from "@expo/vector-icons/Feather";
import { useForm, Controller } from "react-hook-form";
import { dataHabits } from "../../data";

const Tracking = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const currentHabit = dataHabits.filter((habit) => habit.id === Number(id))[0];
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      trackingValue: "0",
    },
  });

  const onSubmit = (data: { trackingValue: string }) => {
    // track the value that we get back here
    router.back();
  };
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-end w-full p-4">
        <Pressable onPress={() => router.back()}>
          <FeatherIcon name="x" size={24} />
        </Pressable>
      </View>
      <Text>{currentHabit.name}</Text>
      <Text>{currentHabit.description}</Text>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="0"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="trackingValue"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};

export default Tracking;
