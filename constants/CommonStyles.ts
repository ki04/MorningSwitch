import { StyleSheet } from 'react-native';

export const CommonStyles = StyleSheet.create({
  // 레이아웃
  container: {
    flex: 1,
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