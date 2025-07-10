import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../constants/Colors';
import { useColorScheme } from '../hooks/useColorScheme';

interface AdBannerSectionProps {
  onAdPress?: () => void;
  backgroundColor?: string;
}

export function AdBannerSection({ onAdPress, backgroundColor }: AdBannerSectionProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.adBanner, { backgroundColor: backgroundColor ?? colors.background, paddingBottom: insets.bottom }]}> 
      <TouchableOpacity 
        style={[styles.adContainer, { backgroundColor: colors.tint }]}
        onPress={onAdPress}
        activeOpacity={0.8}
      >
        <Text style={[styles.adText, { color: '#fff' }]}>광고 배너 영역</Text>
        <Text style={[styles.adSubText, { color: '#fff' }]}>탭하여 더 자세히 보기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  adBanner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  adContainer: {
    width: '90%',
    height: '95%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  adText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  adSubText: {
    fontSize: 12,
    opacity: 0.8,
  },
}); 