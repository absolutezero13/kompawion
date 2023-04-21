import { FlatList } from 'react-native';
import Container from '@components/Container';
import SearchInput from '@components/SearchInput';
import FadeInView from '@components/FadeInView';
import useGridPosts from '@hooks/useGridPosts';

import GridItem from './views/GridItem';
import { styles } from './styles';
import { useMemo, useState } from 'react';
import { arrangeDataForGrid } from '@utils/arrangeData';
import { Photo, Video } from 'src/api/types';

const Search = () => {
  const posts = useGridPosts(1);
  const [searchText, setSearchText] = useState<string>('');

  const filteredPosts = useMemo(() => {
    if (!searchText) {
      return posts;
    }

    // const videos = [] as Video[];
    // const photos = [] as Photo[];

    // posts.forEach(post => {
    //   const video = post.mediaItems.find(
    //     mediaItem => mediaItem?.mediaType === 'video'
    //   );
    //   const filteredPhotos = post.mediaItems.filter(
    //     mediaItem =>
    //       mediaItem?.mediaType === 'photo' &&
    //       mediaItem?.url.includes(searchText)
    //   );

    //   if (video?.video_files[1].link?.includes(searchText)) {
    //     videos.push(video);
    //   }

    //   if (filteredPhotos.length) {
    //     photos.push(...filteredPhotos);
    //   }
    // });

    // const allItemsLength = videos.length + photos.length;
    // const itemCount = Math.ceil(allItemsLength / 5);

    // const arrangedData = arrangeDataForGrid(photos, videos, itemCount);

    // return arrangedData;
    return posts;
  }, [posts, searchText]);

  return (
    <Container>
      <FadeInView>
        <SearchInput focusOnMount value={searchText} setValue={setSearchText} />
        <FlatList
          data={filteredPosts}
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
