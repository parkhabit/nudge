import { Text, Pressable, View } from "react-native";

const ReminderCard = ({
  onClose,
  title,
  subtitle,
}: {
  onClose: () => void;
  title: string;
  subtitle: string;
}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      <Pressable onPress={onClose}>
        <Text>close</Text>
      </Pressable>
    </View>
  );
};

export default ReminderCard;
