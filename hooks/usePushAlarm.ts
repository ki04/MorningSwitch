import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useCallback } from 'react';
import { Alert } from 'react-native';

export function usePushAlarm() {
  // 알림 권한 요청
  const requestPermission = useCallback(async () => {
    if (!Device.isDevice) {
      Alert.alert('알림', '실제 기기에서만 알림을 사용할 수 있습니다.');
      return false;
    }
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert('알림 권한 필요', '알림 권한이 허용되어야 알림을 받을 수 있습니다.');
      return false;
    }
    return true;
  }, []);

  // 알림 예약 (매일 지정된 시간)
  const scheduleDailyAlarm = useCallback(async (hour: number) => {
    await Notifications.cancelAllScheduledNotificationsAsync(); // 기존 알림 모두 취소
    const trigger = {
      hour,
      minute: 0,
      repeats: true,
      type: 'calendar',
    } as any;
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '굿모닝! 🌞',
        body: '오늘도 좋은 하루 보내세요!',
        sound: true,
      },
      trigger,
    });
  }, []);

  // 모든 예약 알림 취소
  const cancelAllAlarms = useCallback(async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }, []);

  return {
    requestPermission,
    scheduleDailyAlarm,
    cancelAllAlarms,
  };
} 