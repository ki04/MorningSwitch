import { MainLayout } from '@/components/MainLayout';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function LetterScreen() {
  return (
    <MainLayout>
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>편지</Text>
          <Text style={styles.description}>
            이 탭에서는 나에게, 혹은 식물에게 편지를 쓰고 보관할 수 있습니다. 💌
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>내가 쓴 편지</Text>
          <Text style={styles.description}>
            - 오늘의 감정, 다짐, 식물에게 전하고 싶은 말 등을 자유롭게 남겨보세요.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>기능 예시</Text>
          <Text style={styles.description}>
            • 편지 작성/수정/삭제 • 날짜별 편지 목록 • 감정 태그 달기 • 편지 보관함 등
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