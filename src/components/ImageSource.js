import { Image } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function ImageSource({ imageSource }) {
  return <Image source={imageSource} style={styles.Image} />;
}
