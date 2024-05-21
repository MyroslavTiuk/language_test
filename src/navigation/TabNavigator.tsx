import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { moderateScale, scaleHeight, scaleWidth } from "../constants/metrics";
import { Home } from "../view/screens/Home";
import { Setting } from "../view/screens/Setting";

const Tab = createBottomTabNavigator();

export const TabNavigator: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }: any) => ({
          gestureEnabled: true,
          tabBarStyle: {
            height: scaleHeight(96),
            paddingHorizontal: scaleWidth(5),
            paddingTop: scaleHeight(5),
            backgroundColor: 'gray',
            borderTopLeftRadius: moderateScale(32),
            borderTopRightRadius: moderateScale(32),
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: moderateScale(10),
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'white',
        })}
      >
        <Tab.Screen
          options={({ route }: any) => ({
            gestureEnabled: true,
            headerShown: false,
          })}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={({ route, focu }: any) => ({
            gestureEnabled: true,
            headerShown: false,
          })}
          name="Settings"
          component={Setting}
        />
      </Tab.Navigator>
    </>
  );
};