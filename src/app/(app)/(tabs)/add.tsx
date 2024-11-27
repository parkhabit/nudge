import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { View, Pressable, Text, SafeAreaView } from "react-native";
import StyledTextInput from "../../../components/ui/StyledTextInput";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { router } from "expo-router";
import { addHabit } from "../../../lib/actions/userActions";
import { Habit } from "../../../types";

const schema = yup.object({
  name: yup.string().required("Field required"),
  description: yup.string().required("Field required"),
  valueDescription: yup.string().required("Field required"),
  // habitIcon: yup.string(),
  valueType: yup.string() || yup.number(),
  frequency: yup.string(),
  reminders: yup.array().of(yup.string()),
});

const Add = () => {
  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  // handleSubmit((data) => console.log(data));

  const [valueSelected, setValueSelected] = useState<String>();
  const [frequencySelected, setFrequencySelected] = useState<String>();

  const onSubmit = (data: any) => {
    addHabit({
      ...data,
      valueType: valueSelected,
      frequency: frequencySelected,
    }).then((res) => {
      if (res) {
        clearErrors();
        router.push("/success");
      }
    });
  };

  return (
    <SafeAreaView className="flex-1">
      <Text className="text-bold text-2xl py-4 px-2">
        Add a new behaviour to track
      </Text>
      <View className="gap-4 p-2">
        <StyledTextInput
          placeholder="Drink water"
          label="Behaviour title"
          name={"name"}
          control={control}
          errors={errors.name}
        />
        <StyledTextInput
          placeholder="Keeping hydrated is important for my health"
          label="Behaviour description"
          name={"description"}
          control={control}
          errors={errors.description}
        />
        <View className="flex flex-row gap-3">
          <View className="flex-2">
            <Text className="text-semibold text-lg pb-0 mb-0">
              Choose a value to track behaviour
            </Text>
            <SelectList
              setSelected={(key: string) => setValueSelected(key)}
              save="key"
              search={false}
              boxStyles={{ borderRadius: 8 }}
              data={[
                { key: "NUMBER", value: "Number" },
                // { key: "2", value: "Hours & minutes" },
                { key: "BOOLEAN", value: "Completed or not" },
              ]}
            />
          </View>
          {valueSelected !== "Completed or not" && (
            <View className="flex-1">
              <StyledTextInput
                placeholder="of glasses"
                label="Value description"
                name={"valueDescription"}
                control={control}
                errors={errors.valueDescription}
              />
            </View>
          )}
        </View>

        <View>
          <Text className="text-semibold text-lg pb-0 mb-0">
            How often do you want to track this behaviour?
          </Text>
          <SelectList
            setSelected={(key: string) => setFrequencySelected(key)}
            save="key"
            search={false}
            boxStyles={{ borderRadius: 8 }}
            data={[
              { key: "DAILY", value: "Daily" },
              { key: "WEEKLY", value: "Weekly" },
              { key: "MONTHLY", value: "Monthly" },
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
    </SafeAreaView>
  );
};

export default Add;
