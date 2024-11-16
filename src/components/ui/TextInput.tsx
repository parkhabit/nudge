import { Controller } from "react-hook-form";
import { View, Text, TextInput } from "react-native";

const StyledTextInput = ({ label, name, control, errors, placeholder }) => {
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
            className="border border-gray-500 rounded-lg py-4 px-5"
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
          />
        )}
        name={name}
      />
      {errors?.[name] && (
        <Text className="pt-2 color-red-600">{errors?.[name]?.message}</Text>
      )}
    </View>
  );
};

export default StyledTextInput;
