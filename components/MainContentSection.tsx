import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { useColorScheme } from '../hooks/useColorScheme';

interface MainContentSectionProps {
  children: React.ReactNode;
}

export function MainContentSection({ children }: MainContentSectionProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.mainContent, { backgroundColor: colors.background }]}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 10, // 전체 높이의 10/13
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
}); 