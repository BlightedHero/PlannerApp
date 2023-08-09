import { Text } from "react-native";
import * as React from 'react';

export default function EventScreen({ route }) {
    const { date } = route.params;

    return (
        <Text>{date}</Text>
    );
}