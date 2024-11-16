import { Control, Controller, FieldErrors } from "react-hook-form";
import { View, Text, TextInput } from "react-native";

interface StyledTextInputProps {
  label: string;
  name: string;
  control: Control<any>;
  errors: any;
  placeholder?: string;
}

const StyledTextInput = ({
  label,
  name,
  control,
  errors,
  placeholder,
}: StyledTextInputProps) => {
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
      {errors && <Text className="pt-2 color-red-600">{errors.message}</Text>}
    </View>
  );
};

export default StyledTextInput;
