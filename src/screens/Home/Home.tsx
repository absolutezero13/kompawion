import { useState } from 'react';
import { FlatList, View } from 'react-native';
import usePosts, { MAX_POST_COUNT } from '@hooks/usePosts';
import SearchInput from '@components/SearchInput';
import Container from '@components/Container';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '@navigation/types';

import Post from './views/Posts';
import Header from './views/Header';
import Stories from './views/Stories';
import { styles } from './styles';

const Home = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const posts = usePosts(1);
  const [numberOfPosts, setNumberOfPosts] = useState(3);

  return (
    <Container>
      <Header />
      <SearchInput onPressIn={() => navigation.navigate('Search')} />
      <FlatList
        ListHeaderComponent={Stories}
        data={posts.slice(0, numberOfPosts)}
        renderItem={({ item, index: postIndex }) => (
          <Post item={item} postIndex={postIndex} />
        )}
        ItemSeparatorComponent={() => <View style={styles.postSeperator} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          paddingBottom: 40
        }}
        showsVerticalScrollIndicator={false}
        onEndReached={
          numberOfPosts < MAX_POST_COUNT
            ? () => setNumberOfPosts(prev => prev + 3)
            : undefined
        }
      />
    </Container>
  );
};

export default Home;
