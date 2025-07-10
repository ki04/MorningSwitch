import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true, // 네이티브 헤더 사용
        headerTitle: 'MorningSwitch', // 앱 이름 고정
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
        name="plant"
        options={{
          title: '식물키우기',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="leaf.fill" color={color} />, // 적절한 아이콘
        }}
      />
      <Tabs.Screen
        name="letter"
        options={{
          title: '편지',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="envelope.fill" color={color} />, // 적절한 아이콘
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '환경설정',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gearshape.fill" color={color} />, // 적절한 아이콘
        }}
      />
    </Tabs>
  );
}
