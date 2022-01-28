import { TextContainer } from 'components';
import { Observer } from 'mobx-react-lite';
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { LocaleStore } from 'stores/ui-store';
import { colorScheme, iconProvider } from 'styles';

interface IProps {
  focused: boolean;
}
export const ReportTab = ({ focused }: IProps) => {
  return (
    <View>
      <Icon
        name="pie-chart"
        tvParallaxProperties={{}}
        size={25}
        type={iconProvider.feather}
        color={focused ? colorScheme.theme : colorScheme.gray600}
      ></Icon>
      <Observer>
        {() => {
          const { locale } = LocaleStore;
          return (
            <TextContainer
              style={{
                color: focused ? colorScheme.theme : colorScheme.gray600,
              }}
              type="extra-small"
            >
              {locale.bottomTab.report}
            </TextContainer>
          );
        }}
      </Observer>
    </View>
  );
};