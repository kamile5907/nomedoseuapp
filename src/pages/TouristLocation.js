import { View } from "react-native";
import TextComponent from "../components/TextComponent";
import { styles } from "../styles/StyleSheet";
import ImageSource from "../components/ImageSource";

export default function TouristLocation() {
  const Santorini = {
    uri: "https://i.pinimg.com/564x/22/9b/05/229b055491ab1fa3f2fe58a066e96e82.jpg",
  };
  return (
    <View style={styles.container}>
      <View style={styles.borda}>
        <TextComponent style={styles.name} name="Santorini" />
        <ImageSource imageSource={Santorini} />
        <TextComponent
          style={styles.endereço}
          addres="Ilha Santorini, Grécia"
        />
        <TextComponent
          style={styles.description}
          description="Santorini envolve muito mais que uma simples viagem. Quem embarca rumo a essa ilha na Grécia muitas vezes está em busca de uma experiência inesquecível. Realizar o sonho de conhecer os cenários de Santorini pode envolver não só os pontos turísticos, mas também uma hospedagem especial e um visual sensacional. Sendo assim, ao embarcar rumo a Santorini, avalie bem o que você espera de uma hospedagem por lá, já que o hotel muitas vezes é grande parte da experiência de viajar para Santorini!"
        />
      </View>
    </View>
  );
}
