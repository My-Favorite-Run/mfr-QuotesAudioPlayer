import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QuoteScreen from './screens/QuoteScreen';
import AudioScreen from './screens/AudioScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Quotes"
				component={QuoteScreen}
        options={{
          tabBarLabel: 'Mind',
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name="comment-quote" size={size} color={color} />
          ),
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Audio"
				component={AudioScreen}
        options={{
          tabBarLabel: 'Journey',
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name="headphones" size={size} color={color} />
          ),
          headerShown:false
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    color: '#e600ac',
  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#4d4dff',
  },
  buttonText: {
    color: '#fff',
  },
  quote: {
    fontSize: 17,
    textAlign: 'center',
  },
  source: {
    textAlign: 'right',
    marginTop: 15,
    fontStyle: 'italic',
  },
  quoteContainer: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5
  }
});

export default App;
