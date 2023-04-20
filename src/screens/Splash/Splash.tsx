import { useEffect } from 'react';
import { Image, View } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import Text from '@components/Text';

import SplashImage from '@assets/images/main-logo.png';
import Meta from '@assets/images/meta.png';
import { styles } from './styles';
import { RootNavigationProp } from '@navigation/types';
import { getGenericPassword } from 'react-native-keychain';

const Splash = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const checkUserAndNavigate = async () => {
    try {
      const credentials = await getGenericPassword();
      if (credentials) {
        setTimeout(() => {
          navigation.dispatch(StackActions.replace('HomeStack'));
        }, 500);
      } else {
        setTimeout(() => {
          navigation.dispatch(StackActions.replace('Login'));
        }, 1000);
      }
    } catch (error) {}
  };

  useEffect(() => {
    checkUserAndNavigate();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={SplashImage} style={styles.splashImage} />
      <View style={styles.bottomPart}>
        <Text style={styles.fromText}>from</Text>
        <Image source={Meta} style={styles.metaImage} />
      </View>
    </View>
  );
};

export default Splash;
