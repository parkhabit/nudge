import { Button, Pressable, Text, View } from "react-native";

const ReminderCard = ({
  onClose,
  onPress,
  title,
  subtitle,
}: {
  onClose: () => void;
  onPress: () => void;
  title: string;
  subtitle: string;
}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      <Button onPress={onPress} title="set now" />
      <Pressable onPress={onClose}>
        <Text>close</Text>
      </Pressable>
    </View>
  );
};

export default ReminderCard;
