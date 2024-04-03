import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React,{useState,useEffect} from 'react';
import {View,LogBox, Text, StyleSheet} from 'react-native';
import CaretakerSignUp from '../components/Register/CaretakerSignUp';
import CaretakerLogin from '../components/Register/CaretakerLogin';
import {useLogin } from '../context/LoginProvider';
import Loading from '../components/Loading/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

LogBox.ignoreLogs(['new NativeEventEmitter']);

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const { isLoggedIn,setIsLoggedIn,role,setRole,code,setCode,caretaker,setCaretaker} = useLogin();
  const [loading,setLoading] = useState(true);
  
  useEffect(()=>{
    storageAccess();
    setLoading(false);
 },[]);

 const storageAccess = async()=>{
    const tempRole = await AsyncStorage.getItem('role');
    const tempLogin = await AsyncStorage.getItem('login');
    const tempCode = await AsyncStorage.getItem('code');
    const tempCaretakerDetails = await AsyncStorage.getItem('caretakerDetails');
    setCaretaker(JSON.parse(tempCaretakerDetails));
    setCode(tempCode);
    setRole(tempRole);
    
    if(tempLogin==="true"){
        setIsLoggedIn(true);
    }
    
    console.log("tempCode : ",tempCode,"| tempLogin : ",tempLogin," | tempRole : ",tempRole);
    console.log("Code : ",code,"| isLoggedIn : ",isLoggedIn," | role : ",role);
    console.log("Caretaker : ",caretaker);
 }

 if (loading) {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Loading"  >
           <Stack.Screen name="Loading" component={Loading}/>
       </Stack.Navigator>
  );
}

if(!isLoggedIn){
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Loading"  >
            <Stack.Screen name="Loading" component={Loading}/>
       </Stack.Navigator>
  )
}
else if (isLoggedIn && role==="user") {
   return (
       <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Loading">
        <Stack.Screen name="Loading" component={Loading}/>
       </Stack.Navigator>
   );
}
else if (isLoggedIn && role==="caretaker" && !code){
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Loading" >
        <Stack.Screen name="Loading" component={Loading}/>
      </Stack.Navigator>
  );
}
else if (isLoggedIn && role==="caretaker" && code){
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Loading" >
        <Stack.Screen name="Loading" component={Loading}/>
      </Stack.Navigator>
  );
}
}

export default AppNavigation;