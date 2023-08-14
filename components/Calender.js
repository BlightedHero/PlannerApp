import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

function AppCalendar({ navigation }) {
    const tasks = {
        '2023-08-10': {selected: true, marked: true, selectedColor: 'blue'},
        '2023-08-20': {marked: true, dotColor: 'red', activeOpacity: 0},
        '2023-08-22': {disabled: true, disableTouchEvent: true}
      };

  return (
    <SafeAreaView style={styles.container}>
      <Calendar markedDates={tasks} onDayPress={(day) => navigation.navigate('Events', { date: day.dateString })}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default AppCalendar;
