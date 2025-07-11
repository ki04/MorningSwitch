import { MainLayout } from '@/components/MainLayout';
import { CommonStyles } from '@/constants/CommonStyles';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <MainLayout>
      <ScrollView contentContainerStyle={CommonStyles.container}>
        <View style={CommonStyles.section}>
          <Text style={CommonStyles.sectionTitle}>환경설정</Text>
          <Text style={CommonStyles.description}>
            앱의 다양한 설정을 관리할 수 있습니다. ⚙️
          </Text>
        </View>
        <View style={CommonStyles.section}>
          <Text style={CommonStyles.sectionTitle}>설정 예시</Text>
          <Text style={CommonStyles.description}>
            • 알림 설정
            • 테마(다크/라이트) 변경
            • 계정 관리
            • 데이터 백업/복원 등
          </Text>
        </View>
      </ScrollView>
    </MainLayout>
  );
} 