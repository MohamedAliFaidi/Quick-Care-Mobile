import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DoctorProfile from "./DoctorProfile";
import { useState } from "react";
import link from "../../Adress";
<<<<<<< HEAD
import axios from "axios";
import DoctorChat from "../patient/SecondaryMenu/doctorChat";
const GetAllRequests = ({navigation}) => {
=======
import TreatedReq from "./TreatedReq";

const GetAllRequests = ({navigation,route}) => {
>>>>>>> 144735e2a184448ae6c9e028c5eea4b72de2d8fd
  const [data, setData] = useState([]);
  
  useEffect(() => {
    console.log(route.params.id);
    
    fetch(`${link}/request/getAllRequests`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  



  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity style={styles.touch}>
            <Text>request :{item.id}</Text>
            <Text>{item.description}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                title="Accept"
                onPress={() => navigation.navigate('DetailsForDoctor',{id:item.patientId,requestId:item.id,doctorId:route.params.id})}
              >
                <Text>details</Text>
              </TouchableOpacity>
         
            </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}
const Tab = createMaterialBottomTabNavigator();

const DoctorNav = ({ route }) => {
  return (
    <Tab.Navigator
      initialRouteName="GetAllRequests"
      activeColor="#4169E1"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: "#44b3cc" }}
      style={{ backgroundColor: "#4169E1" }}
    >
      <Tab.Screen
        name="GetAllRequests"
        component={GetAllRequests}
        initialParams={{ id: route.params.id }}
        options={{
          tabBarLabel: "GetAllRequests",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TreatedReq"
        component={TreatedReq}
        initialParams={{ id: route.params.id }}

        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        initialParams={{ id: route.params.id }}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={DoctorChat}
        initialParams={{ id: route.params.id }}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DoctorNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    borderColor: "#44b3cc",
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    justifyContent: "center",
    fontSize: 32,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    padding: 10,
    backgroundColor: "#44b3cc",
    borderRadius: 20,
    width: 120,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  touch: {
    justifyContent:"center",
    alignItems:"center",
  },
  
});
