import { FlatList, Image, View } from 'react-native';
import Video from 'react-native-video';
import { Photo } from 'src/api/types';
import { GridPost } from 'src/feed/types';
import { styles } from '../styles';

interface GridItemProps {
  item: GridPost;
  index: number;
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
      source={{ uri: video?.video_files?.[0].link }}
      style={styles.video}
      resizeMode='cover'
      repeat
      muted
    />
  );
};

const GridPhoto = ({ photo }: { photo: Photo }) => {
  return <Image source={{ uri: photo.src.large2x }} style={styles.photo} />;
};

const GridItem = ({ item, index }: GridItemProps) => {
  const videoInTheBeginning = index % 2 === 0;

  return (
    <View
      style={{
        flexDirection: 'row'
      }}
    >
      {videoInTheBeginning && <GridVideo item={item} />}
      <FlatList
        data={item.mediaItems.filter(
          mediaItem => mediaItem?.mediaType === 'photo'
        )}
        renderItem={({ item }) => <GridPhoto photo={item as Photo} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        scrollEnabled={false}
      />
      {!videoInTheBeginning && <GridVideo item={item} />}
    </View>
  );
};

export default GridItem;
