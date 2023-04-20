import { FlatList, View } from 'react-native';
import Container from '@components/Container';
import SearchInput from '@components/SearchInput';
import FadeInView from '@components/FadeInView';
import useGridPosts from '@hooks/useGridPosts';

import GridItem from './views/GridItem';
import { styles } from './styles';
import { useState } from 'react';

const Search = () => {
  const posts = useGridPosts(1);
  const [searchText, setSearchText] = useState<string>('');

  return (
    <Container>
      <FadeInView>
        <SearchInput focusOnMount value={searchText} setValue={setSearchText} />
        <FlatList
          data={posts}
          renderItem={({ item, index }) => (
            <GridItem item={item} index={index} searchText={searchText} />
          )}
          style={styles.list}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </FadeInView>
    </Container>
  );
};

export default Search;
