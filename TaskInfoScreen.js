import { Text } from "react-native";
import * as React from 'react';

export default function TaskInfoScreen({ route }) {

    return (
        <Text> {route.params?.title} </Text>
    );
}