import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/Colors';
import { useColorScheme } from '../hooks/useColorScheme';

const { height: screenHeight } = Dimensions.get('window');

interface LayoutContainerProps {
  children: React.ReactNode;
}

export function LayoutContainer({ children }: LayoutContainerProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 전체 높이의 12(1+10+1) 비율로 구성됨
    height: screenHeight,
  },
}); 