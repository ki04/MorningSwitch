import { MainLayout } from '@/components/MainLayout';
import { CommonStyles } from '@/constants/CommonStyles';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function PlantScreen() {
  return (
    <MainLayout>
      <ScrollView contentContainerStyle={CommonStyles.container}>
        <View style={CommonStyles.section}>
          <Text style={CommonStyles.sectionTitle}>식물 키우기</Text>
          <Text style={CommonStyles.description}>
            이 탭에서는 나만의 식물을 키우고 성장 과정을 기록할 수 있습니다. 🌱
          </Text>
        </View>
        <View style={CommonStyles.section}>
          <Text style={CommonStyles.sectionTitle}>오늘의 식물 상태</Text>
          <Text style={CommonStyles.description}>
            - 물 주기, 성장 단계, 메모 등 다양한 정보를 관리하세요.
          </Text>
        </View>
        <View style={CommonStyles.section}>
          <Text style={CommonStyles.sectionTitle}>기능 예시</Text>
          <Text style={CommonStyles.description}>
            • 식물 추가/삭제 • 성장 기록 남기기 • 사진 첨부 • 알림 설정 등
          </Text>
        </View>
      </ScrollView>
    </MainLayout>
  );
} 