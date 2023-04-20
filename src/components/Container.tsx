import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000'
  }
});

export default Container;
