import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { scale, scaleHeight, isIPhoneSE } from '../config/responsive';
import { icons } from '../constants/Images';

export default function SupportScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Good day! How can I help you?',
      isUser: false,
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: input,
          isUser: true,
          time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setInput('');
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const renderMessage = ({ item }: { item: { id: any; text: string; isUser: boolean; time: string } }) => (
    <View style={styles.messageWrapper}>
      {!item.isUser && (
        <View style={styles.supportHeader}>
          <Image
            source={icons.support}
            style={styles.headerIcon}
          />
          <Text style={styles.supportLabel}>Support 24/7</Text>
        </View>
      )}
      <View
        style={[
          styles.message,
          item.isUser ? styles.userMessage : styles.supportMessage,
        ]}
      >
        <View style={styles.messageContent}>
          <Text style={styles.messageText}>{item.text}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <BackgroundWrapper>
      <View style={styles.iconContainer}>
        <Image source={icons.support} style={styles.icon} />
      </View>
      <Text style={styles.description}>Support Chat</Text>
      <Text style={styles.title}>
        Chat support is a program designed for real-time communication with users through text messages.
      </Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessage}
        ref={flatListRef}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
        style={[styles.chatContainer, keyboardVisible ? { height:  scaleHeight(222)} : { height:  scaleHeight(799)}]}
      />

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={[
            styles.inputContainer,
            { top: keyboardVisible ? scaleHeight(490) : isIPhoneSE ? scaleHeight(850) : scaleHeight(799) },
          ]}
        >
          <TouchableOpacity>
            <Image style={styles.emojiIcon} source={icons.emoji} />
          </TouchableOpacity>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Reply..."
            style={styles.input}
          />
          <TouchableOpacity>
            <Image style={styles.emojiIcon} source={icons.photolcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.send} onPress={sendMessage}>
            <Image style={styles.emojiIcon} source={icons.sendicon} />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: scaleHeight(80),
    left: scale(71),
    width: scale(57.07),
    height: isIPhoneSE ? scaleHeight(65) : scaleHeight(57.07),
    backgroundColor: '#FFFFFF',
    borderRadius: scale(95.11),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: scale(43),
    height: scaleHeight(34),
  },
  description: {
    position: 'absolute',
    top: scaleHeight(150),
    left: scale(21),
    fontSize: scale(28.53),
    fontFamily: 'KulimPark-SemiBold',
    color: '#FFFFFF',
  },
  title: {
    position: 'absolute',
    top: scaleHeight(190),
    left: scale(21),
    fontSize: scale(15.22),
    width: scale(400),
    color: '#FFFFFF',
    fontFamily: 'KulimPark-Regular',
  },
  chatContainer: {
    position: 'absolute',
    flex: 1,
    top: scaleHeight(268),
    left: scale(25),
    width: scale(380),
  },
  inputContainer: {
    position: 'absolute',
    flexDirection: 'row',
    height: scaleHeight(76),
    left: scale(2),
    width: scale(425),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: scale(7),
    borderBottomStartRadius: scale(7),
    paddingHorizontal: scale(10),
  },
  input: {
    flex: 1,
    height: scaleHeight(50),
    borderRadius: scale(25),
    marginHorizontal: scale(7),
    backgroundColor: '#F1F1F1',
    paddingHorizontal: scale(10),
  },
  emojiIcon: {
    width: scale(22.83),
    height: scaleHeight(22.83),
  },
  send: {
    width: scale(38),
    height: scaleHeight(38),
    borderRadius: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#449782',
    marginLeft: scale(7),
  },
  messageWrapper: {
    marginBottom: scale(50),
  },
  supportHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(5),
    marginLeft: scale(5),
  },
  headerIcon: {
    width: scale(43),
    height: isIPhoneSE ? scaleHeight(40) : scaleHeight(34),
    marginRight: scale(5),
  },
  supportLabel: {
    fontSize: scale(14),
    color: '#FFFFFF',
    fontFamily: 'KulimPark-Regular',
  },
  message: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: scale(10),
    marginHorizontal: scale(5),
    borderRadius: scale(8),
    position: 'relative',
    width: 'auto',
    maxWidth: '50%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#D1FAD7',
    width: 'auto',
  },
  supportMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F1F1',
  },
  messageContent: {
    flex: 1,
  },
  messageText: {
    fontSize: scale(16),
    color: '#333',
    fontFamily: 'KulimPark-Regular',
  },
  messageTime: {
    position: 'absolute',
    bottom: -scale(30),
    right: scale(5),
    fontSize: scale(12),
    color: '#888',
  },
});
