import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screen/profile/Profile';

const WalletStack =({params,}) => {
    const Stack=createStackNavigator();
    return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
    </Stack.Navigator>
    );
};

export default WalletStack;
