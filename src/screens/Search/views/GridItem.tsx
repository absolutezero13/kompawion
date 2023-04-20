import { FlatList, Image, View } from 'react-native';
import Video from 'react-native-video';
import { Photo } from 'src/api/types';
import { GridPost } from 'src/feed/types';
import { styles } from '../styles';

interface GridItemProps {
  item: GridPost;
  index: number;
  searchText: string;
}

const GridVideo = ({
  item,
  searchText
}: {
  item: GridPost;
  searchText: string;
}) => {
  const video = item.mediaItems.find(
    mediaItem => mediaItem?.mediaType === 'video'
  );

  if (
    !video ||
    (searchText &&
      video?.video_files[1].link
        ?.toLowerCase()
        .includes(searchText.toLowerCase()))
  ) {
    return null;
  }

  return (
    <Video
      source={{ uri: video?.video_files[1].link }}
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

const GridItem = ({ item, index, searchText }: GridItemProps) => {
  const videoInTheBeginning = index % 2 === 0;

  return (
    <View
      style={{
        flexDirection: 'row'
      }}
    >
      {videoInTheBeginning && <GridVideo item={item} searchText={searchText} />}
      <FlatList
        data={item.mediaItems.filter(
          mediaItem =>
            mediaItem?.mediaType === 'photo' &&
            mediaItem?.url.toLowerCase().includes(searchText.toLowerCase())
        )}
        renderItem={({ item }) => <GridPhoto photo={item as Photo} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        scrollEnabled={false}
      />
      {!videoInTheBeginning && (
        <GridVideo item={item} searchText={searchText} />
      )}
    </View>
  );
};

export default GridItem;
