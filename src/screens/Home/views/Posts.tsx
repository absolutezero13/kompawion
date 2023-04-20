import { useRef, useState } from 'react';
import { FlatList, Image, View } from 'react-native';

import Text from '@components/Text';
import Dots from '@assets/icons/dots.svg';
import Heart from '@assets/icons/heart.svg';
import Comment from '@assets/icons/comment.svg';
import Messenger from '@assets/icons/messenger.svg';
import Bookmark from '@assets/icons/bookmark.svg';
import { styles } from '../styles';
import { Metrics } from '@theme/metrics';
import { timeAgo } from '@utils/formatTime';

const Header = ({ item }) => (
  <View style={styles.postHeader}>
    <Image source={{ uri: item.userAvatar }} style={styles.avatar} />
    <Text bold>{item.username}</Text>
    <View style={styles.dotsIcon}>
      <Dots />
    </View>
  </View>
);

const Actions = ({ item, activeImageIndex }) => (
  <View style={styles.postActions}>
    <View style={styles.userActionSection}>
      <Heart />
      <View style={styles.bigDivider} />
      <Comment />
      <View style={styles.bigDivider} />
      <Messenger />
    </View>
    {item.pictures.length > 1 && (
      <View style={styles.dots}>
        {item.pictures.map((pic, index: number) => {
          return (
            <View
              key={pic.order.toString()}
              style={[
                activeImageIndex === index ? styles.activeDot : styles.dot
              ]}
            />
          );
        })}
      </View>
    )}
    <View style={styles.autoMl}>
      <Bookmark />
    </View>
  </View>
);

const Details = ({ item }) => (
  <View style={styles.likesAndComments}>
    <Text bold>{item.likes} likes</Text>
    <View style={styles.userInfo}>
      <Text bold>{item.username} </Text>
      <Text>{item.caption}</Text>
    </View>
  </View>
);

const Comments = ({ item }) => {
  const [showComments, setShowComments] = useState(false);
  return (
    <View style={styles.comments}>
      <Text
        onPress={() => setShowComments(prev => !prev)}
        style={styles.viewComments}
      >
        {showComments ? 'Hide' : 'View'} all {item.comments.length} comments
      </Text>
      {showComments &&
        item.comments.map(comment => (
          <View style={styles.comment}>
            <Text bold>{comment.username}</Text>
            <Text>{comment.text}</Text>
          </View>
        ))}
    </View>
  );
};

const Time = ({ item }) => (
  <View style={styles.time}>
    <Text style={styles.timeText}>{timeAgo(item.createdAt)}</Text>
  </View>
);

const Post = ({ item }) => {
  const flatListRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const onScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const activeImageIndex = Math.round(contentOffsetX / Metrics.SCREEN_WIDTH);
    setActiveImageIndex(activeImageIndex);
  };

  return (
    <>
      <Header item={item} />
      <FlatList
        ref={flatListRef}
        data={item.pictures}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }} style={styles.postPicture} />
        )}
        keyExtractor={item => item.order}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <Actions item={item} activeImageIndex={activeImageIndex} />
      <Details item={item} />
      {!!item.comments.length && <Comments item={item} />}
      <Time item={item} />
    </>
  );
};

export default Post;
