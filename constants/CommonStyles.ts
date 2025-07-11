import { StyleSheet } from 'react-native';

export const CommonStyles = StyleSheet.create({
  // 레이아웃
  container: {
    flex: 1,
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center',     // 가로 중앙 정렬
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  // 텍스트
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: '#666',
    textAlign: 'center',
  },
}); 