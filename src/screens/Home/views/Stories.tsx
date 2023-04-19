import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { stories } from '../../../feed/stories';
import Text from '@components/Text';

import { styles } from '../styles';
import BounceableButton from '@components/Bounceable';

const Stories = () => {
  const Story = ({ item }) => (
    <BounceableButton style={styles.story}>
      <Image
        source={{
          uri: item.image
        }}
        style={styles.storyImage}
      />
      <Text numberOfLines={1} style={styles.storyText}>
        {item.username}
      </Text>
    </BounceableButton>
  );

  const Separator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={stories}
      renderItem={Story}
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.stories}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default Stories;
