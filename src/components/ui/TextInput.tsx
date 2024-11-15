import { Controller } from "react-hook-form";
import { View, Text, TextInput } from "react-native";

const StyledTextInput = ({ label, name, control, errors }) => {
  return (
    <View>
      <Text className="text-semibold text-lg">{label}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="border border-gray-500 rounded p-2"
            value={value}
            onChangeText={onChange}
            placeholder={name}
          />
        )}
        name={name}
      />
      {errors?.name && <Text>{errors?.name?.message}</Text>}
    </View>
  );
};

export default StyledTextInput;
