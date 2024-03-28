import { GestureHandlerRootView } from "react-native-gesture-handler";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HomeScreen />
    </GestureHandlerRootView>
  );
}
