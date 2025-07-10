import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { AdBannerSection } from './AdBannerSection';
import { HeaderSection } from './HeaderSection';
import { LayoutContainer } from './LayoutContainer';
import { MainContentSection } from './MainContentSection';

interface MainLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

export function MainLayout({ title = '앱 제목', children }: MainLayoutProps) {
  const handleAdPress = () => {
    Alert.alert('광고', '광고를 클릭했습니다!');
  };

  return (
    <LayoutContainer>
      <HeaderSection title={title} />
      <MainContentSection>
        {children || (
          <View style={styles.defaultContent}>
            <Text style={styles.contentTitle}>메인 컨텐츠 영역</Text>
            <Text style={styles.contentText}>
              이곳에 실제 컨텐츠가 들어갑니다. 스크롤이 가능하며 
              전체 높이의 10/12 비율을 차지합니다.
            </Text>
          </View>
        )}
      </MainContentSection>
      <AdBannerSection onAdPress={handleAdPress} />
    </LayoutContainer>
  );
}

const styles = StyleSheet.create({
  defaultContent: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
}); 