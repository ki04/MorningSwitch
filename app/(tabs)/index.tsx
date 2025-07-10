import { MainLayout } from '@/components/MainLayout';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <MainLayout title="레이아웃 데모">
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>레이아웃 비율 설명</Text>
          <Text style={styles.description}>
            이 레이아웃은 다음과 같은 비율로 구성되어 있습니다:
          </Text>
          <View style={styles.ratioList}>
            <Text style={styles.ratioItem}>• 상단 제목 영역: 1/13</Text>
            <Text style={styles.ratioItem}>• 메인 컨텐츠 영역: 10/13</Text>
            <Text style={styles.ratioItem}>• 광고 배너 영역: 1/13</Text>
            <Text style={styles.ratioItem}>• 하단 탭 메뉴 영역: 1/13</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>컴포넌트 구성</Text>
          <Text style={styles.description}>
            각 영역은 독립적인 컴포넌트로 구성되어 있어 재사용이 가능합니다:
          </Text>
          <View style={styles.componentList}>
            <Text style={styles.componentItem}>• LayoutContainer</Text>
            <Text style={styles.componentItem}>• HeaderSection</Text>
            <Text style={styles.componentItem}>• MainContentSection</Text>
            <Text style={styles.componentItem}>• AdBannerSection</Text>
            <Text style={styles.componentItem}>• MainLayout</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>특징</Text>
          <Text style={styles.description}>
            • 다크모드/라이트모드 자동 지원{'\n'}
            • 반응형 디자인{'\n'}
            • 스크롤 가능한 메인 컨텐츠{'\n'}
            • 인터랙티브한 탭 메뉴{'\n'}
            • 클릭 가능한 광고 배너
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>사용 방법</Text>
          <Text style={styles.codeExample}>
            {`import { MainLayout } from '@/components/MainLayout';

export default function MyScreen() {
  return (
    <MainLayout title="내 앱 제목">
      {/* 여기에 컨텐츠를 넣으세요 */}
    </MainLayout>
  );
}`}
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
  ratioList: {
    marginLeft: 10,
  },
  ratioItem: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  componentList: {
    marginLeft: 10,
  },
  componentItem: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
    fontFamily: 'monospace',
  },
  codeExample: {
    fontSize: 14,
    fontFamily: 'monospace',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    color: '#333',
    lineHeight: 20,
  },
});
