import { MainLayout } from '@/components/MainLayout';
import { ThemedText } from '@/components/ThemedText';
import { usePushAlarm } from '@/hooks/usePushAlarm';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [selectedTime, setSelectedTime] = useState<number>(7);
  const { requestPermission, scheduleDailyAlarm, cancelAllAlarms } = usePushAlarm();

  // 알림받기 토글
  const handleNotificationToggle = async (value: boolean) => {
    setIsNotificationEnabled(value);
    if (value) {
      const granted = await requestPermission();
      if (granted) {
        await scheduleDailyAlarm(selectedTime);
        Alert.alert('알림 설정', '매일 아침 설정한 시간에 알림을 받을 수 있어요');
      } else {
        setIsNotificationEnabled(false);
      }
    } else {
      await cancelAllAlarms();
      Alert.alert('알림 설정', '알림받기 기능이 비활성화되어 더이상 알림을 받을 수 없어요');
    }
  };

  // 알림 시간 변경
  const handleTimeSelection = async (time: number) => {
    setSelectedTime(time);
    if (isNotificationEnabled) {
      await scheduleDailyAlarm(time);
    }
  };

  // 알림받기 ON 상태에서 앱 재실행 시 알림 재등록(선택사항)
  // useEffect(() => {
  //   if (isNotificationEnabled) {
  //     scheduleDailyAlarm(selectedTime);
  //   }
  // }, []);

  const timeOptions = [6, 7, 8, 9];

  return (
    <MainLayout>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>환경설정</Text>
        </View>

        {/* 알림받기 설정 */}
        <View style={styles.settingSection}>
          <ThemedText style={styles.settingTitle}>알림받기</ThemedText>
          <View style={styles.switchRow}>
            <Switch
              value={isNotificationEnabled}
              onValueChange={handleNotificationToggle}
              trackColor={{ false: '#ccc', true: '#007AFF' }}
              thumbColor={isNotificationEnabled ? '#fff' : '#f4f3f4'}
              style={styles.switch}
            />
            <ThemedText style={[styles.switchStateText, isNotificationEnabled ? styles.onText : styles.offText]}>
              {isNotificationEnabled ? 'ON' : 'OFF'}
            </ThemedText>
          </View>
        </View>

        {/* 알림시간 설정 */}
        <View style={styles.settingSection}>
          <ThemedText style={styles.settingTitle}>알림시간</ThemedText>
          <View style={styles.timeButtonRow}>
            {timeOptions.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeButton,
                  selectedTime === time && styles.timeButtonActive
                ]}
                onPress={() => handleTimeSelection(time)}
              >
                <ThemedText style={[
                  styles.timeButtonText,
                  selectedTime === time && styles.timeButtonTextActive
                ]}>
                  {time}시
                </ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 40,
  },
  section: {
    alignItems: 'center',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingSection: {
    marginVertical: 15,
    alignItems: 'center',
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    marginBottom: 2,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  switchStateText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  onText: {
    color: '#007AFF',
  },
  offText: {
    color: '#888',
  },
  timeButtonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    gap: 12,
  },
  timeButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    minWidth: 48,
    marginHorizontal: 2,
  },
  timeButtonActive: {
    backgroundColor: '#007AFF',
  },
  timeButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  timeButtonTextActive: {
    color: 'white',
  },
}); 