import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { View, Pressable, Text } from "react-native";
import StyledTextInput from "../../../components/ui/StyledTextInput";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { router } from "expo-router";

const schema = yup.object({
  habitName: yup.string().required("Field required"),
  habitDescription: yup.string().required("Field required"),
  habitValueDescription: yup.string().required("Field required"),
  habitIcon: yup.string(),
  valueType: yup.string() || yup.number(),
  frequency: yup.string(),
  reminders: yup.array().of(yup.string()),
});

const Add = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      habitName: "",
      habitDescription: "",
    },
  });

  handleSubmit((data) => console.log(data));

  const [valueSelected, setValueSelected] = useState<String>();
  const [frequencySelected, setFrequencySelected] = useState<String>();
  const onSubmit = (data) => {
    console.log(data);
    router.push("/success");
  };

  return (
    <View className="gap-4 p-2">
      <StyledTextInput
        placeholder="Drink water"
        label="Behaviour title"
        name={"habitName"}
        control={control}
        errors={errors.habitName}
      />
      <StyledTextInput
        placeholder="Keeping hydrated is important for my health"
        label="Behaviour description"
        name={"habitDescription"}
        control={control}
        errors={errors.habitDescription}
      />
      <View className="flex flex-row gap-3">
        <View className="flex-2">
          <Text className="text-semibold text-lg pb-0 mb-0">
            Choose a value to track behaviour
          </Text>
          <SelectList
            setSelected={(val: string) => setValueSelected(val)}
            save="value"
            search={false}
            boxStyles={{ borderRadius: 8 }}
            data={[
              { key: "1", value: "Number" },
              { key: "2", value: "Hours & minutes" },
              { key: "3", value: "Completed or not" },
            ]}
          />
        </View>
        {valueSelected !== "Completed or not" && (
          <View className="flex-1">
            <StyledTextInput
              placeholder="of glasses"
              label="Value description"
              name={"habitValueDescription"}
              control={control}
              errors={errors.habitValueDescription}
            />
          </View>
        )}
      </View>

      <View>
        <Text className="text-semibold text-lg pb-0 mb-0">
          How often do you want to track this behaviour?
        </Text>
        <SelectList
          setSelected={(val: string) => setFrequencySelected(val)}
          save="value"
          search={false}
          boxStyles={{ borderRadius: 8 }}
          data={[
            { key: "1", value: "Daily" },
            { key: "2", value: "Weekly" },
            { key: "3", value: "Monthly" },
          ]}
        />
      </View>

      <Pressable
        className="bg-slate-500 rounded-lg flex items-center p-3"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-semibold text-white text-lg">Submit</Text>
      </Pressable>
    </View>
  );
};

export default Add;
