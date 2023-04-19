import { useEffect } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Text from '@components/Text';

import SplashImage from '@assets/images/main-logo.png';
import Meta from '@assets/images/meta.png';
import { styles } from './styles';
import { RootNavigationProp } from '@navigation/types';

const Splash = () => {
  const navigation = useNavigation<RootNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
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
