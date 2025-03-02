import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const handleSend = (newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );

    const userMessage = newMessages[0].text.toLowerCase();
    let botResponse = "I'm sorry, I didn't understand that.";

    if (userMessage.includes('hello')) {
      botResponse = "Hi! How can I assist you today?";
    } else if (userMessage.includes('help')) {
      botResponse = "I can help you with finding doctors, medicines, or emergencies.";
    } else if (userMessage.includes('medicine')) {
      botResponse = "Please tell me the medicine you're looking for.";
    }
    setTimeout(() => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [
          {
            _id: Math.round(Math.random() * 1000000),
            text: botResponse,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Bot',
            },
          },
        ])
      );
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => handleSend(newMessages)}
        user={{
          _id: 1,
        }}
        renderInputToolbar={(props) => (
          <View style={styles.inputContainer}>
            <TextInput
              {...props}
              style={styles.input}
              placeholder="Type a message..."
            />
            <Button
              title="Send"
              onPress={() => handleSend([{ text: props.text, _id: Math.round(Math.random() * 1000000), user: { _id: 1 } }])}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default ChatBot;
