import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const MainStack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Feather name="plus" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <MainStack.Screen
          name="Show"
          component={ShowScreen}
          options={({ navigation, route: { params } }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Edit", { id: params.id })}
              >
                <EvilIcons name="pencil" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <MainStack.Screen name="Create" component={CreateScreen} />
        <MainStack.Screen name="Edit" component={EditScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App = () => {
  return (
    <Provider>
      <NavigationStack />
    </Provider>
  );
};

// import React from "react";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import IndexScreen from "./src/screens/IndexScreen";
// import { Provider } from "./src/context/BlogContext";
// import ShowScreen from "./src/screens/ShowScreen";
// import CreateScreen from "./src/screens/CreateScreen";
// import EditScreen from "./src/screens/EditScreen";

// const navigator = createStackNavigator(
//   {
//     Index: IndexScreen,
//     Show: ShowScreen,
//     Create: CreateScreen,
//     Edit: EditScreen,
//   },
//   {
//     initialRouteName: "Index",
//     defaultNavigationOptions: {
//       title: "Blogs",
//     },
//   }
// );

// const App = createAppContainer(navigator);

// export default () => {
//   return (
//     <Provider>
//       <App />
//     </Provider>
//   );
// };
