import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { usePushNotifications } from '../hooks/usePushNotifications';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export const PushNotificationTest: React.FC = () => {
  const { expoPushToken, notification, scheduleLocalNotification } = usePushNotifications();

  const handleTestNotification = async () => {
    try {
      await scheduleLocalNotification(
        'MorningSwitch 알림',
        '테스트 알림입니다!',
        undefined
      );
      Alert.alert('알림 전송됨', '즉시 알림이 전송됩니다.');
    } catch (error) {
      Alert.alert('오류', '알림 전송에 실패했습니다.');
      console.error('알림 전송 오류:', error);
    }
  };

  const handleImmediateNotification = async () => {
    try {
      await scheduleLocalNotification(
        '즉시 알림',
        '즉시 표시되는 알림입니다!',
        null
      );
    } catch (error) {
      Alert.alert('오류', '알림 전송에 실패했습니다.');
      console.error('알림 전송 오류:', error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>푸시 알림 테스트</ThemedText>
      
      <View style={styles.buttonContainer}>
        <ThemedView style={styles.button} onTouchEnd={handleImmediateNotification}>
          <ThemedText style={styles.buttonText}>즉시 알림 보내기</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.button} onTouchEnd={handleTestNotification}>
          <ThemedText style={styles.buttonText}>5초 후 알림 예약</ThemedText>
        </ThemedView>
      </View>

      {expoPushToken && (
        <View style={styles.tokenContainer}>
          <ThemedText style={styles.tokenLabel}>푸시 토큰:</ThemedText>
          <ThemedText style={styles.tokenText}>
            {expoPushToken.substring(0, 20)}...
          </ThemedText>
        </View>
      )}

      {notification && (
        <View style={styles.notificationContainer}>
          <ThemedText style={styles.notificationLabel}>마지막 알림:</ThemedText>
          <ThemedText style={styles.notificationText}>
            {notification.request.content.title}
          </ThemedText>
          <ThemedText style={styles.notificationText}>
            {notification.request.content.body}
          </ThemedText>
        </View>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 10,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  tokenContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 8,
  },
  tokenLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  tokenText: {
    fontSize: 12,
    fontFamily: 'monospace',
  },
  notificationContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderRadius: 8,
  },
  notificationLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  notificationText: {
    fontSize: 12,
    marginBottom: 2,
  },
}); 