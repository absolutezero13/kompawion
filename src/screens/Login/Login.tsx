import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  GestureResponderEvent,
  Image,
  Keyboard,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { StackActions, useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '@navigation/types';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '@assets/images/main-logo.png';
import Text from '@components/Text';
import MetaWhite from '@assets/images/meta-white.png';
import { styles } from './styles';

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
      setTimeout(() => {
        setLoading(false);
        navigation.dispatch(StackActions.replace('HomeStack'));
      }, 2000);
    } catch (err) {
    } finally {
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

              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.button,
                  {
                    opacity: loading ? 0.5 : 1
                  }
                ]}
                disabled={loading}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>Log In</Text>
                {loading && (
                  <ActivityIndicator
                    style={{ marginLeft: 5 }}
                    size='small'
                    color='#fff'
                  />
                )}
              </TouchableOpacity>
            </View>
            <Text
              style={styles.forgotPassword}
              onPress={() => Alert.alert('Too bad.')}
            >
              Forgotten Password?
            </Text>
          </>
        </TouchableOpacity>
        {!keyboardOpen && (
          <>
            <TouchableOpacity
              onPress={() => Alert.alert('Trust me you have an account.')}
              activeOpacity={0.8}
              style={styles.createButton}
            >
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
