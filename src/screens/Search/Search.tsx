import { useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import Container from '@components/Container';
import SearchInput from '@components/SearchInput';
import FadeInView from '@components/FadeInView';
import useGridPosts, { MAX_POST_COUNT } from '@hooks/useGridPosts';

import { arrangeDataForGrid } from '@utils/arrangeData';
import { GridMediaItem } from 'src/feed/types';
import { Photo, Video } from 'src/api/types';
import GridItem from './views/GridItem';
import { styles } from './styles';

const INITIAL_NUMBER_OF_POSTS = 3;

const Search = () => {
  const posts = useGridPosts();

  const [searchText, setSearchText] = useState<string>('');
  const [numberOfPosts, setNumberOfPosts] = useState(INITIAL_NUMBER_OF_POSTS);

  const filteredPosts = useMemo(() => {
    if (!searchText) {
      return posts;
    }

    const videos = [] as GridMediaItem[];
    const photos = [] as GridMediaItem[];

    posts.forEach(post => {
      const video = post.mediaItems.find(
        mediaItem => mediaItem?.mediaType === 'video'
      );
      const filteredPhotos = post.mediaItems.filter(
        mediaItem =>
          mediaItem?.mediaType === 'photo' &&
          (mediaItem as Photo)?.alt.includes(searchText)
      );

      if (
        (video as Video & { mediaType: string })?.video_files[1].link?.includes(
          searchText
        ) &&
        video
      ) {
        videos.push(video);
      }

      if (filteredPhotos.length) {
        photos.push(...filteredPhotos);
      }
    });

    const allItemsLength = videos.length + photos.length;
    const itemCount = Math.ceil(allItemsLength / 5);
    const arrangedData = arrangeDataForGrid(videos, photos, itemCount);
    return arrangedData;
  }, [posts, searchText]);

  return (
    <Container>
      <FadeInView>
        <SearchInput focusOnMount value={searchText} setValue={setSearchText} />
        <FlatList
          data={filteredPosts.slice(0, numberOfPosts)}
          renderItem={({ item, index }) => (
            <GridItem item={item} index={index} />
          )}
          style={styles.list}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          onEndReached={
            numberOfPosts < MAX_POST_COUNT
              ? () => setNumberOfPosts(prev => prev + 3)
              : undefined
          }
        />
      </FadeInView>
    </Container>
  );
};

export default Search;
