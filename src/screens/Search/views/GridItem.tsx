import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import Video from 'react-native-video';

import { Photo, Video as TVideo } from 'src/api/types';
import { GridPost } from 'src/feed/types';
import { styles } from '../styles';

interface GridItemProps {
  item: GridPost;
  index: number;
  shouldRenderHightQuality: boolean;
}

const GridVideo = ({ item }: { item: GridPost }) => {
  const video = item.mediaItems.find(
    mediaItem => mediaItem?.mediaType === 'video'
  );

  if (!video) {
    return null;
  }

  return (
    <Video
      poster={(video as TVideo)?.video_pictures?.[0].picture}
      posterResizeMode='cover'
      source={{ uri: (video as TVideo)?.video_files?.[0].link }}
      style={styles.video}
      resizeMode='cover'
      repeat
      muted
    />
  );
};

const GridPhoto = ({
  photo,
  shouldRenderHightQuality
}: {
  photo: Photo;
  shouldRenderHightQuality: boolean;
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <View>
      {loading && <ActivityIndicator style={styles.loading} />}
      <Image
        source={{
          uri: shouldRenderHightQuality ? photo.src.large2x : photo.src.small,
          cache: 'force-cache'
        }}
        progressiveRenderingEnabled
        style={styles.photo}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

const GridItem = ({ item, index, shouldRenderHightQuality }: GridItemProps) => {
  const videoInTheBeginning = index % 2 === 0;

  return (
    <View style={styles.gridWrapper}>
      {videoInTheBeginning && <GridVideo item={item} />}
      <FlatList
        data={item.mediaItems.filter(
          mediaItem => mediaItem?.mediaType === 'photo'
        )}
        renderItem={({ item }) => (
          <GridPhoto
            shouldRenderHightQuality={shouldRenderHightQuality}
            photo={item as Photo}
          />
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        scrollEnabled={false}
      />
      {!videoInTheBeginning && <GridVideo item={item} />}
    </View>
  );
};

export default GridItem;
