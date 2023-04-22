import { useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Search from '@assets/icons/search.svg';
import { colors } from '@theme/colors';
import { useNavigation } from '@react-navigation/native';

interface SearchInputProps {
  onPressIn?: () => void;
  focusOnMount?: boolean;
  value?: string;
  setValue?: (value: string) => void;
}

const SearchInput = ({
  onPressIn,
  focusOnMount,
  value = '',
  setValue
}: SearchInputProps) => {
  const navigation = useNavigation();
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    navigation.addListener('focus', () => {
      if (focusOnMount) {
        inputRef.current?.focus();
      }
    });
    navigation.addListener('blur', () => {
      inputRef.current?.blur();
    });
  }, [inputRef.current]);

  const handleSearchTextChange = (text: string) => {
    if (setValue) {
      setValue(text);
    }
  };

  return (
    <View style={styles.container}>
      <Search
        width={14}
        height={14}
        style={{
          color: '#8E8E93'
        }}
      />
      <TextInput
        ref={inputRef}
        onPressIn={onPressIn}
        style={styles.input}
        placeholder='Search'
        placeholderTextColor={'#8E8E93'}
        onChangeText={handleSearchTextChange}
        value={value}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    height: 36
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: colors.white,
    fontSize: 12,
    height: 36
  }
});

export default SearchInput;
