import { useEffect, useRef, useState } from 'react';
import {
  Alert,
  GestureResponderEvent,
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '@navigation/types';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '@assets/images/main-logo.png';
import Text from '@components/Text';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';

import MetaWhite from '@assets/images/meta-white.png';

const placeholders = {
  credentialSource: 'Username, email address or mobile number',
  password: 'Password'
};

const Login = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const [email, setEmail] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardOpen(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardOpen(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleLogin = async (e: GestureResponderEvent) => {
    e.stopPropagation();
    if (!email) {
      Alert.alert(
        `${placeholders.credentialSource} is required`,
        `Please enter your ${placeholders.credentialSource}`
      );
      return;
    }
    if (!password) {
      Alert.alert(
        `${placeholders.password} is required`,
        `Please enter your ${placeholders.password}`
      );
      return;
    }

    try {
      setLoading(true);
      // await login({ email, password });
      navigation.navigate('Home');
    } catch (err) {
      // setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#1f3534', '#1a2e3c', '#1a2e3c']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity
          style={styles.keyboardDismiss}
          activeOpacity={1}
          onPress={Keyboard.dismiss}
        >
          <>
            {!keyboardOpen && <Text style={styles.language}>English (UK)</Text>}
            <Image source={Logo} style={styles.logo} />
            <View style={styles.form}>
              <View>
                <TextInput
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  ref={emailInputRef}
                  style={[
                    styles.input,
                    {
                      borderColor: emailFocused ? '#fff' : '#647888'
                    }
                  ]}
                  onChangeText={setEmail}
                  value={email}
                  placeholder={
                    emailFocused || email ? '' : placeholders.credentialSource
                  }
                  placeholderTextColor='#ddd'
                />
                <Text style={styles.placeholder}>
                  {emailFocused || email ? placeholders.credentialSource : ''}
                </Text>
              </View>
              <View>
                <TextInput
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  ref={passwordInputRef}
                  style={[
                    styles.input,
                    {
                      borderColor: passwordFocused ? '#fff' : '#647888'
                    }
                  ]}
                  onChangeText={setPassword}
                  value={password}
                  placeholder={
                    passwordFocused || password ? '' : placeholders.password
                  }
                  placeholderTextColor='#ddd'
                  secureTextEntry
                />
                <Text style={styles.placeholder}>
                  {passwordFocused || password ? placeholders.password : ''}
                </Text>
              </View>

              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.forgotPassword}>Forgotten Password?</Text>
          </>
        </TouchableOpacity>
        {!keyboardOpen && (
          <>
            <TouchableOpacity style={styles.createButton}>
              <Text>Create New Account</Text>
            </TouchableOpacity>
            <Image source={MetaWhite} style={styles.meta} />
          </>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;
