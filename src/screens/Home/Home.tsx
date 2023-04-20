import { FlatList, View } from 'react-native';
import usePosts from '@hooks/usePosts';
import SearchInput from '@components/SearchInput';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '@navigation/types';

import Post from './views/Posts';
import Header from './views/Header';
import { styles } from './styles';
import Stories from './views/Stories';
import Container from '@components/Container';

const Home = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const posts = usePosts(1);

  return (
    <Container>
      <Header />
      <SearchInput disabled onPressIn={() => navigation.navigate('Search')} />
      <FlatList
        ListHeaderComponent={Stories}
        data={posts}
        renderItem={({ item }) => <Post item={item} />}
        ItemSeparatorComponent={() => <View style={styles.postSeperator} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          paddingBottom: 40
        }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
