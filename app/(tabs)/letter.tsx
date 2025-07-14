import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyCypOTcA3XGumte3OUzpN2ZflmJmXtHlI8",
  authDomain: "morning-switch-app-60505.firebaseapp.com",
  projectId: "morning-switch-app-60505",
  storageBucket: "morning-switch-app-60505.appspot.com",
  messagingSenderId: "23756271152",
  appId: "1:23756271152:web:942a5bcecaf6775556c7f5",
  measurementId: "G-M3CPBXR7B9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const envelopeImage = require('../../assets/images/envelope.png');

function getTodayKey() {
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${mm}-${dd}`;
}

export default function LetterScreen() {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [letter, setLetter] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleOpen = async () => {
    setOpened(true);
    setLoading(true);
    setError(null);
    try {
      const key = getTodayKey();
      const docRef = doc(db, 'messages', key);
      const docSnap = await getDoc(docRef);
      console.log('docSnap.exists:', docSnap.exists());
      if (docSnap.exists()) {
        const data = docSnap.data();
        setLetter(data.content || data.text || '내용 없음');
      } else {
        setLetter('오늘의 편지가 없습니다.');
      }
    } catch (e) {
      console.log('Firestore error:', e);
      setError('편지 불러오기 실패');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {!opened ? (
        <TouchableOpacity style={styles.center} onPress={handleOpen} activeOpacity={0.8}>
          <Image source={envelopeImage} style={styles.image} resizeMode="contain" />
          <Text style={styles.title}>응원메세지가 도착했어요!</Text>
          <Text style={styles.desc}>(화면을 터치해 편지를 확인하세요)</Text>
        </TouchableOpacity>
      ) : loading ? (
        <ActivityIndicator size="large" color="#888" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <TouchableOpacity style={styles.letterBox} onPress={() => { setOpened(false); setLetter(null); setError(null); }} activeOpacity={0.8}>
          <Text style={styles.letterText}>{letter}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  center: { justifyContent: 'center', alignItems: 'center' },
  image: { width: 160, height: 120, marginBottom: 24 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  desc: { fontSize: 14, color: '#888' },
  letterBox: { padding: 24, borderRadius: 16, backgroundColor: '#f9f9f9', marginTop: 16, minWidth: 240 },
  letterText: { fontSize: 18, color: '#333', textAlign: 'center' },
  error: { color: 'red', fontSize: 16, marginTop: 16 },
}); 