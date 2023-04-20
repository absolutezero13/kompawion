import { useRef, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
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
  const videoWithHighestQuality = item.video_files[2];
  const aspectRatio =
    videoWithHighestQuality.width / videoWithHighestQuality.height;

  return (
    <TouchableWithoutFeedback onPress={handleVideoPress}>
      <Video
        ref={videoRef}
        volume={0}
        repeat
        paused={paused}
        source={{ uri: item.video_files[2].link }}
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

export default CustomVideo;
