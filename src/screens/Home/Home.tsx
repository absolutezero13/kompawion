import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from './views/Header';
import { styles } from './styles';
import Stories from './views/Stories';
import Post from './views/Posts';
import usePosts from '@hooks/usePosts';

const Home = () => {
  const posts = usePosts(1);
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
      <Header />
      <FlatList
        ListHeaderComponent={Stories}
        data={posts}
        renderItem={({ item }) => <Post item={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          paddingBottom: 40
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;
