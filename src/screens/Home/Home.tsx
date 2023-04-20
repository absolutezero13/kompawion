import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from './views/Header';
import { styles } from './styles';
import Stories from './views/Stories';
import Posts from './views/Posts';
import Post from './views/Posts';
import { posts } from '../../feed/posts';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <FlatList
        ListHeaderComponent={Stories}
        data={posts}
        renderItem={({ item }) => <Post item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;
