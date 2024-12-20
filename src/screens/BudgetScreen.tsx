import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
} from 'react-native';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { useStore } from '../context/Context';
import { scale, scaleHeight, isIPhoneSE } from '../config/responsive';
import { useNavigation } from '@react-navigation/native';
import OnMenuButton from '../elements/buttons/OnMenuButton';
import GlobalStyles from '../constants/GlobalStyles';
import { icons } from '../constants/Images';

export default function BudgetScreen() {
  const navigation = useNavigation<any>();
  const { theme, budget, budgetsOfBargains, colorText } = useStore();
  const [selectedBudget, setSelectedBudget] = useState<number | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const openModal = (budget: number, date: string) => {
    setSelectedBudget(budget);
    setDate(date);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedBudget(null);
  };

  return (
    <BackgroundWrapper>
      <Text style={styles.description}>Budget</Text>
      <View style={styles.budgetBox}>
        <Text>
          <Text style={styles.budgetBoxText}>{budget}</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.changeBudgetBox, { backgroundColor: theme }]}
        onPress={() => navigation.navigate('BudgetEdit')}
      >
        <Image
          style={styles.image}
          source={icons.changelcon}
        />
      </TouchableOpacity>

      <ScrollView style={styles.listContainer}>
        {budgetsOfBargains.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.listBox}
            onPress={() => openModal(item.sum, item.date)}
          >
            <Text style={styles.listBoxText}>Budget of the Bargains</Text>
            <Text style={styles.listBoxDate}>{item.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Image style={styles.closeIcon} source={icons.closelcon} />
          </TouchableOpacity>
          <Text style={styles.modalText}>Budget of the Bargains</Text>
          <View style={[styles.modalContent, {backgroundColor: theme}]}>
            <Text style={[styles.modalAmount, {color: colorText}]}>{selectedBudget}</Text>
          </View>
          <Text style={styles.date}>{date}</Text>
        </View>
      </Modal>
      <View style={styles.onMenu}>
        <OnMenuButton />
      </View>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  description: {
    position: 'absolute',
    width: scale(261),
    height: scaleHeight(25),
    top: scaleHeight(98),
    left: scale(46),
    fontSize: scale(16),
    fontFamily: GlobalStyles.boldText.fontFamily,
    color: '#FFFFFF',
  },
  budgetBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(289),
    height: scaleHeight(81),
    top: scaleHeight(193),
    left: scale(69),
    borderRadius: scale(13),
    backgroundColor: '#449682',
  },
  budgetBoxText: {
    color: '#FFFFFF',
    fontFamily: GlobalStyles.boldText.fontFamily,
    fontSize: scale(50),
  },
  changeBudgetBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(289),
    height: scaleHeight(48),
    top: scaleHeight(292),
    left: scale(69),
    borderRadius: scale(13),
  },
  image: {
    width: scale(28),
    height: scaleHeight(28),
  },
  listContainer: {
    position: 'absolute',
    top: scaleHeight(376),
    left: scale(66),
    height: scaleHeight(500),
  },
  listBox: {
    backgroundColor: '#449682',
    flexDirection: 'row',
    alignItems: 'center',
    width: scale(292),
    height: scaleHeight(48),
    borderRadius: scale(13),
    marginBottom: scaleHeight(26),
  },
  listBoxText: {
    color: '#FFFFFF',
    fontFamily: GlobalStyles.text.fontFamily,
    width: scale(150),
    fontSize: scale(16),
    left: scale(31),
  },
  listBoxDate: {
    color: '#FFFFFF',
    fontFamily: GlobalStyles.boldText.fontFamily,
    fontSize: scale(16),
    left: scale(66),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(28, 33, 47, 0.85)',
  },
  modalContent: {
    width: scale(289),
    height: scaleHeight(81),
    top: scaleHeight(351),
    left: scale(69),
    borderRadius: scale(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    position: 'absolute',
    top: scaleHeight(324),
    left: scale(74),
    fontSize: scale(18),
    color: '#FFFFFF',
    fontFamily: GlobalStyles.boldText.fontFamily,
  },
  modalAmount: {
    fontSize: scale(50),
    fontFamily: GlobalStyles.boldText.fontFamily,
  },
  date: {
    position: 'absolute',
    top: scaleHeight(438),
    left: scale(315),
    fontSize: scale(16),
    color: '#FFFFFF',
    fontFamily: GlobalStyles.boldText.fontFamily,
  },
  closeIcon: {
    width: scale(24.83),
    height: isIPhoneSE ? scaleHeight(29.83) : scaleHeight(24.83),
  },
  closeButton: {
    width: scale(24.83),
    height: isIPhoneSE ? scaleHeight(29.83) : scaleHeight(24.83),
    position: 'absolute',
    top: scaleHeight(260.56),
    left: scale(348),
    borderRadius: scale(5),
    paddingVertical: scaleHeight(10),
    paddingHorizontal: scale(20),
  },
  onMenu: {
    position: 'absolute',
    top: scaleHeight(815),
  },
});
