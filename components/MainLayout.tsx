import React, { ReactElement, ReactNode, isValidElement } from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, View } from 'react-native';

const TAB_BAR_HEIGHT = 60;
const AD_BANNER_HEIGHT = 90;

interface MainLayoutProps {
  children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  // children이 ScrollView인지 타입 가드
  const isScrollView =
    isValidElement(children) &&
    (children.type === ScrollView ||
      (typeof children.type === 'object' && 'displayName' in children.type && (children.type as any).displayName === 'ScrollView'));

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {isScrollView
          ? React.cloneElement(children as ReactElement<ScrollViewProps>, {
              contentContainerStyle: [
                (children as ReactElement<ScrollViewProps>).props.contentContainerStyle,
                // 광고 높이 padding 제거
              ],
            })
          : <View>{children}</View>
        }
      </View>
      {/* 광고배너 완전 제거 */}
    </View>
  );
}

const styles = StyleSheet.create({
  adBannerFixed: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: TAB_BAR_HEIGHT,
    height: AD_BANNER_HEIGHT,
    zIndex: 10,
  },
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