import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,

} from 'react-native';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { scale, scaleHeight, isIPhoneSE } from '../config/responsive';
import { icons } from '../constants/Images';
import { memo } from 'react';

import EmojiSelector from 'react-native-emoji-selector';
const EmojiSelectorMemo = memo(EmojiSelector);




import SelectPhotoButton from '../elements/buttons/SelectPhotoButton';

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
  const [showEmojiKeyboard, setShowEmojiKeyboard] = useState(false);
  const inputRef = useRef<TextInput | null>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handlePhotoSelected = (uri: string) => {
    setPhotoUri(uri);
    setKeyboardVisible(false);
  };



  const sendMessage = () => {
    if (input.trim() || photoUri) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: input.trim() || '',
          isUser: true,
          time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
          imageUri: photoUri,
        },
      ]);
      setInput('');
      setPhotoUri(null);
    }
  };

  const renderMessage = ({ item }: { item: { id: number; text: string; isUser: boolean; time: string, imageUri?: string } }) => (
    <View style={styles.messageWrapper}>
      {!item.isUser && (
        <View style={styles.supportHeader}>
          <Image source={icons.support} style={styles.headerIcon} />
          <Text style={styles.supportLabel}>Support 24/7</Text>
        </View>
      )}
      <View
        style={[
          styles.message,
          item.isUser ? styles.userMessage : styles.supportMessage,
        ]}
      >

          {item.imageUri ? (
            <View style={styles.messageContent}>
            <Image source={{ uri: item.imageUri }} style={styles.imageMessage} />
            <Text style={styles.messageText}>{item.text}</Text>
            </View>
          ) : (
            <View style={styles.messageContent}>
            <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
      </View>
  );

  const handleEmojiToggle = () => {
    setShowEmojiKeyboard((prev) => !prev);
    if (showEmojiKeyboard) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();}
  };



  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
              onTouchStart={() => setShowEmojiKeyboard(false)}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderMessage}
              ref={flatListRef}
              onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
              style={[styles.chatContainer,
                keyboardVisible ? { height: scaleHeight(222) } : { height: scaleHeight(500) },
            ]}
          />





          <View
              style={[
                styles.inputContainer,
                { top: keyboardVisible ? scaleHeight(490) : isIPhoneSE ? scaleHeight(850) : scaleHeight(799) },
              ]}
            >
              <TouchableOpacity onPress={handleEmojiToggle}>
                <Image style={styles.emojiIcon} source={icons.emoji} />
              </TouchableOpacity>

              <TextInput
                ref={inputRef}
                value={input}
                onChangeText={setInput}
                placeholder="Reply..."
                style={styles.input}
                onFocus={() => {setShowEmojiKeyboard(false);}}
              />

              <SelectPhotoButton onPhotoSelected={handlePhotoSelected} />

              <TouchableOpacity style={styles.send} onPress={sendMessage}>
                <Image style={styles.emojiIcon} source={icons.sendicon} />
              </TouchableOpacity>
          </View>





            {showEmojiKeyboard && (
              <View style={styles.emojiContainer}>
                 <EmojiSelectorMemo
                  showTabs={false}
                  showSearchBar={false}
                  columns={8}
                  onEmojiSelected={(emoji: any) => {
                    setInput((prev) => {
                      if ((prev + emoji).length <= 200) {
                        return prev + emoji;
                      } else {
                        return prev;
                      }
                    });
                    setShowEmojiKeyboard(false);
                    if (inputRef.current) {
                      inputRef.current.focus();
                    }
                  }}
                />
              </View>
            )}


      </BackgroundWrapper>
    </KeyboardAvoidingView>
  );
}




const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: scaleHeight(80),
    left: scale(71),
    width: scale(57.07),
    height: isIPhoneSE ? scaleHeight(66.07) : scaleHeight(57.07),
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
  emojiContainer: {
    backgroundColor: 'white',
    top: scaleHeight(566),
    bottom: 0,
    width: '100%',
    height: 380,
  },
  send: {
    width: scale(38),
    height: isIPhoneSE ? scaleHeight(45) : scaleHeight(38),
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
  },
  supportMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F1F1',
  },
  messageContent: {
    flex: 1,
    flexDirection: 'column',
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
  imageMessage: {
    width: scale(170),
    height: scaleHeight(150),
    borderRadius: scale(10),
    marginBottom: scale(10),
    alignSelf: 'flex-start',
  },
});
