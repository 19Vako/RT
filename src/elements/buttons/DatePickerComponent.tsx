import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { scale, scaleHeight } from '../../config/responsive';
import { useStore } from '../../context/Context';

interface DatePickerComponentProps {
  onDateChange: (date: string) => void; // Функция для передачи выбранной даты
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const {colorText} = useStore();


  const formatDate = (date: string) => {
    const newDate = new Date(date);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const onDayPress = (day: any) => {
    const formattedDate = formatDate(day.dateString);
    setSelectedDate(formattedDate);
    setCalendarVisible(false);
    onDateChange(formattedDate); // Передача выбранной даты через props
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCalendarVisible(true)}
      >
        <Image
          style={styles.image}
          source={require('../../images/icons/calendarIcon.png')}
        />
        <Text style={[styles.buttonText, {color: colorText}]}>
          {selectedDate || '00.00.0000'}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={isCalendarVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCalendarVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={onDayPress}
              markedDates={{
                [selectedDate!]: {
                  selected: true,
                  selectedColor: 'blue',
                },
              }}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setCalendarVisible(false)}
            >
              <Text style={styles.closeButtonText}>Закрыть</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: scale(15),
    height: scaleHeight(15),
  },
  buttonText: {
    fontFamily: 'KulimPark-Regular',
    fontSize: scale(16),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: scale(20),
  },
  calendarContainer: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: scale(10),
    padding: scale(12),
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: scale(4),
    elevation: 5,
  },
  closeButton: {
    marginTop: scaleHeight(10),
    paddingVertical: scaleHeight(10),
    alignItems: 'center',
    backgroundColor: '#FF5252',
    borderRadius: scale(8),
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: scale(16),
  },
});

export default DatePickerComponent;
