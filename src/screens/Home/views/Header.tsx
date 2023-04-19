import { Image, View } from 'react-native';
import Instagram from '@assets/images/instagram-logo.png';
import Heart from '@assets/icons/heart.svg';
import Message from '@assets/icons/message.svg';
import { styles } from '../styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={Instagram} style={styles.headerLogo} />
      <View style={styles.iconsWrapper}>
        <Heart width={25} height={25} />
        <View style={styles.divider} />
        <Message width={25} height={25} />
      </View>
    </View>
  );
};

export default Header;
