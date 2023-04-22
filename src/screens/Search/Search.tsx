import { FlatList } from 'react-native';
import Container from '@components/Container';
import SearchInput from '@components/SearchInput';
import FadeInView from '@components/FadeInView';
import useGridPosts, { MAX_POST_COUNT } from '@hooks/useGridPosts';

import GridItem from './views/GridItem';
import { styles } from './styles';
import { useCallback, useMemo, useState } from 'react';
import { arrangeDataForGrid } from '@utils/arrangeData';
import { GridMediaItem } from 'src/feed/types';
import { Photo, Video } from 'src/api/types';

const Search = () => {
  const posts = useGridPosts(1);
  const [searchText, setSearchText] = useState<string>('');
  const [numberOfPosts, setNumberOfPosts] = useState(3);
  const [viewableItems, setViewableItems] = useState([] as GridMediaItem[]);

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

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    // console.log('Changed in this iteration', changed);
    setViewableItems(viewableItems);
  }, []);

  console.log('Visible items are', viewableItems);

  return (
    <Container>
      <FadeInView>
        <SearchInput focusOnMount value={searchText} setValue={setSearchText} />
        <FlatList
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50
          }}
          data={filteredPosts.slice(0, numberOfPosts)}
          renderItem={({ item, index }) => {
            let shouldRender = true;

            if (viewableItems.length) {
              shouldRender = viewableItems.some(viewableItem => {
                console.log('viewableItem', viewableItem.item.id);
                console.log('item', item.id);
                return viewableItem.item.id !== item.id;
              });
            }

            if (!shouldRender) {
              return null;
            }

            return <GridItem item={item} index={index} />;
          }}
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
