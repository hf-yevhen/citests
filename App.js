import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

const App = () => {
  const [isShow, setIsShow] = useState(true);

  const onPressFunction = () => setIsShow(show => !show);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View testID="Text_Container" style={styles.textContainer}>
          <Text testID="Test_String">Test string</Text>
        </View>
        <View style={styles.divider} />
        <View testID="Test_Button_Container" style={styles.pressableContainer}>
          <Pressable testID="Toggle_Button" onPress={onPressFunction}>
            <Text>Press to toggle</Text>
          </Pressable>
          <View style={styles.divider} />

          {isShow && <Text testID="Disappearing_Text">This isn't hidden!</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fff',
  },
  textContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99d5ff',
  },
  pressableContainer: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aff2fa',
  },
  divider: {
    height: 20,
  },
});

export default App;
