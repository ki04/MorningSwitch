import { MainLayout } from '@/components/MainLayout';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <MainLayout>
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>환경설정</Text>
          <Text style={styles.description}>
            앱의 다양한 설정을 관리할 수 있습니다. ⚙️
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>설정 예시</Text>
          <Text style={styles.description}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: '#666',
  },
}); 