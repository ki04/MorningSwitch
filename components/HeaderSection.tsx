import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { useColorScheme } from '../hooks/useColorScheme';

interface HeaderSectionProps {
  title: string;
}

export function HeaderSection({ title }: HeaderSectionProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.header, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1, // 전체 높이의 1/13 (1 + 10 + 1 + 1 = 13)
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}); 