import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { AdBannerSection } from '@/components/AdBannerSection';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: true, // 네이티브 헤더 사용
          headerTitle: 'MorningSwitch', // 앱 이름 고정
          headerTitleStyle: {
            fontSize: 28, // 글자 크기만 크게
          },
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="letter"
          options={{
            title: 'Letter',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="envelope.fill" color={color} />, // 적절한 아이콘
          }}
        />
        <Tabs.Screen
          name="plant"
          options={{
            title: 'Growth',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="leaf.fill" color={color} />, // 적절한 아이콘
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="gearshape.fill" color={color} />, // 적절한 아이콘
          }}
        />
      </Tabs>
      <View style={styles.adBannerFixed} pointerEvents="box-none">
        <AdBannerSection />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  adBannerFixed: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 80, // 광고배너를 탭바보다 더 위로 올림(기존 60 → 80)
    height: 50, // 광고 높이
    zIndex: 10,
  },
});
