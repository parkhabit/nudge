import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { View, Button } from "react-native";
import StyledTextInput from "../../components/ui/TextInput";

const schema = yup
  .object({
    habitName: yup.string().required(),
    habitDescription: yup.string().required(),
    habitIcon: yup.string().required(),
    valueType: yup.string() || yup.number(),
    frequency: yup.string(),
    reminders: yup.array().of(yup.string()),
  })
  .required();

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
  const onSubmit = (data) => console.log(data);

  return (
    <View className="gap-4 p-2">
      <StyledTextInput
        label="Behaviour title"
        name={"habitName"}
        control={control}
        errors={errors}
      />
      <StyledTextInput
        label="Behaviour description"
        name={"habitDescription"}
        control={control}
        errors={errors}
      />

      {/* Need a dropdown for the rest of the fields */}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default Add;
