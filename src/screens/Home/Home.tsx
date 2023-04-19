import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './views/Header';
import { styles } from './styles';
import Stories from './views/Stories';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView>
        <Stories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
