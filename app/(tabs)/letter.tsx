import { MainLayout } from '@/components/MainLayout';
import { CommonStyles } from '@/constants/CommonStyles';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function LetterScreen() {
  return (
    <MainLayout>
      <ScrollView contentContainerStyle={CommonStyles.container}>
        <View style={CommonStyles.section}>
          <Text style={CommonStyles.sectionTitle}>편지</Text>
          <Text style={CommonStyles.description}>
            이 탭에서는 나에게, 혹은 식물에게 편지를 쓰고 보관할 수 있습니다. 💌
          </Text>
        </View>
        <View style={CommonStyles.section}>
          <Text style={CommonStyles.sectionTitle}>내가 쓴 편지</Text>
          <Text style={CommonStyles.description}>
            - 오늘의 감정, 다짐, 식물에게 전하고 싶은 말 등을 자유롭게 남겨보세요.
          </Text>
        </View>
        <View style={CommonStyles.section}>
          <Text style={CommonStyles.sectionTitle}>기능 예시</Text>
          <Text style={CommonStyles.description}>
            • 편지 작성/수정/삭제 • 날짜별 편지 목록 • 감정 태그 달기 • 편지 보관함 등
          </Text>
        </View>
      </ScrollView>
    </MainLayout>
  );
} 