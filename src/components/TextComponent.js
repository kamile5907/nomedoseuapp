import { Text } from "react-native";

export default function TextComponent({ name, addres, description, style }) {
  return (
    <Text style={style}>
      {name}
      {addres}
      {description}
    </Text>
  );
}
