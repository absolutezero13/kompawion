import { memo, useRef, useState } from 'react';
import { Alert, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';

import { Video as TVideo } from 'src/api/types';
import { Metrics } from '@theme/metrics';

const maxHeight = Metrics.SCREEN_HEIGHT / 1.5;

const CustomVideo = ({ item }: { item: TVideo }) => {
  const [paused, setPaused] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    setPaused(p => !p);
  };
  const video = item.video_files[0];
  const aspectRatio = video.width / video.height;

  return (
    <TouchableWithoutFeedback onPress={handleVideoPress}>
      <Video
        minLoadRetryCount={5}
        onError={e =>
          Alert.alert('Error', 'Something went wrong while playing video.')
        }
        poster={item.video_pictures[0].picture}
        posterResizeMode='cover'
        ref={videoRef}
        volume={0}
        repeat
        paused={paused}
        source={{ uri: video.link }}
        style={{
          width: Metrics.SCREEN_WIDTH,
          height:
            Metrics.SCREEN_WIDTH / aspectRatio > maxHeight
              ? maxHeight
              : Metrics.SCREEN_WIDTH / aspectRatio
        }}
        resizeMode='cover'
      />
    </TouchableWithoutFeedback>
  );
};

export default memo(CustomVideo);
