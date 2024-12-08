import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { scale, scaleHeight, isIPhoneSE} from '../config/responsive';

export default function SupportScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Добрый день! Чем могу вам помочь?',
      isUser: false,
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
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
    if (messages.length && messages[messages.length - 1].isUser) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: 'Спасибо за ваше сообщение! Мы свяжемся с вами.',
            isUser: false,
            time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }, 1000);
    }
  }, [messages]);

  const renderMessage = ({ item }: { item: { id: any; text: string; isUser: boolean; time: string } }) => (
    <View style={styles.messageWrapper}>
      {!item.isUser && (
        <View style={styles.supportHeader}>
          <Image
            source={require('../images/icons/support.png')}
            style={styles.headerIcon}
          />
          <Text style={styles.supportLabel}>Поддержка 24/7</Text>
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
        <Image source={require('../images/icons/support.png')} style={styles.icon} />
      </View>
      <Text style={styles.description}>Чат поддержки</Text>
      <Text style={styles.title}>
        Чат-поддержка - это программа, предназначенная для взаимодействия с пользователями через текстовые сообщения в режиме реального времени.
      </Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessage}
        ref={flatListRef}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
        style={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Image style={styles.emojiIcon} source={require('../images/icons/emoji.png')} />
        </TouchableOpacity>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Reply..."
          style={styles.input}
        />
        <TouchableOpacity>
          <Image style={styles.emojiIcon} source={require('../images/icons/photoIcon.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.send} onPress={sendMessage}>
          <Image style={styles.emojiIcon} source={require('../images/icons/sendIcon.png')} />
        </TouchableOpacity>
      </View>
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
    height: scaleHeight(500),
  },
  inputContainer: {
    position: 'absolute',
    flexDirection: 'row',
    height: scaleHeight(76),
    top: scaleHeight(799),
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
    width: 'auto', // Ширина зависит от контента
    maxWidth: '50%', // Ширина не может быть больше 50% от экрана
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
  messageIcon: {
    width: scale(30),
    height: scaleHeight(30),
    marginRight: scale(10),
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
