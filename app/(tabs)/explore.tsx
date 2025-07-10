import { MainLayout } from '@/components/MainLayout';
import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ExploreScreen() {
  const handleCustomAdPress = () => {
    Alert.alert('커스텀 광고', '이것은 커스텀 광고 배너입니다!');
  };

  return (
    <MainLayout title="커스텀 레이아웃">
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>커스텀 컨텐츠 예시</Text>
          <Text style={styles.description}>
            이 페이지는 MainLayout 컴포넌트를 사용하여 커스텀 컨텐츠를 표시합니다.
            광고 배너와 하단 탭이 자동으로 포함됩니다.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>인터랙티브 요소</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Alert.alert('버튼 클릭', '버튼이 클릭되었습니다!')}
          >
            <Text style={styles.buttonText}>클릭해보세요</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>레이아웃 특징</Text>
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>✅ 정확한 비율 유지 (1:10:1:1)</Text>
            <Text style={styles.featureItem}>✅ 다크모드 자동 지원</Text>
            <Text style={styles.featureItem}>✅ 스크롤 가능한 컨텐츠</Text>
            <Text style={styles.featureItem}>✅ 인터랙티브한 탭 메뉴</Text>
            <Text style={styles.featureItem}>✅ 클릭 가능한 광고 배너</Text>
            <Text style={styles.featureItem}>✅ 반응형 디자인</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>컴포넌트 재사용</Text>
          <Text style={styles.description}>
            MainLayout 컴포넌트는 다른 페이지에서도 쉽게 재사용할 수 있습니다.
            title prop과 children을 통해 커스터마이징이 가능합니다.
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
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  featureList: {
    marginLeft: 10,
  },
  featureItem: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
});
