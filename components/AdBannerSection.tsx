import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function AdBannerSection() {
  return (
    <View style={styles.adBanner}>
      {/* 실제 광고 컴포넌트가 이 자리에 들어갈 예정 */}
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>여기에 광고가 들어갑니다</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  adBanner: {
    width: '100%',
    height: 50, // 광고 영역 높이 고정(축소)
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  placeholder: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#2196f3', // 임시 파란색
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#fff',
    fontWeight: 'bold',
  },
}); 