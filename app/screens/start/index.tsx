import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { imageSource } from 'assets/images';
import { BaseButton, PlatformView, TextContainer } from 'shared/components';
import { colorScheme, dimensionProvider, styleProvider } from 'shared/styles';
import { UserStore } from 'shared/stores';
import { screenName } from 'navigation/screen-names';
import { WaveIndicator } from 'react-native-indicators';
import { localeKey, storage, TOKEN_KEY } from 'services/storage';
import { i18n } from 'i18n';

const START_CONTENT = i18n[localeKey].greetingPage;

export const Start = observer(() => {
  const navigation = useNavigation();
  const { pendingAuthen, user, initUser } = UserStore;
  React.useEffect(() => {
    if (!pendingAuthen) {
      if (user.isLoggedIn) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: screenName.home }],
          })
        );
      }
    }
  }, [pendingAuthen, user, navigation]);

  React.useEffect(() => {
    const token = storage.getString(TOKEN_KEY);
    initUser(token);
  }, [initUser]);
  return (
    <>
      {pendingAuthen ? (
        <PlatformView style={styles.container}>
          <WaveIndicator size={80} color={colorScheme.theme} />
        </PlatformView>
      ) : (
        <>
          {!user.isLoggedIn ? (
            <PlatformView style={styles.container}>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.appIcon}
                  source={imageSource.appIcon}
                ></Image>
                <TextContainer style={{ marginLeft: 10 }}>
                  Money Master
                </TextContainer>
              </View>

              <Image style={styles.image} source={imageSource.banner}></Image>

              <TextContainer style={{ fontWeight: 'bold' }} type="h4">
                {START_CONTENT.intro}
              </TextContainer>

              <View style={styles.buttonContainer}>
                <BaseButton
                  style={styles.registerButton}
                  onPress={() =>
                    navigation.navigate(screenName.register as never)
                  }
                  label={START_CONTENT.register}
                />
                <BaseButton
                  style={styles.loginButton}
                  labelStyle={{ color: colorScheme.theme }}
                  onPress={() => navigation.navigate(screenName.login as never)}
                  label={START_CONTENT.login}
                />
              </View>
            </PlatformView>
          ) : (
            <PlatformView style={styleProvider.body}>
              <WaveIndicator size={80} color={colorScheme.theme} />
            </PlatformView>
          )}
        </>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorScheme.white,
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginLeft: 20,
  },
  appIcon: {
    width: 40,
    height: 40,
  },
  image: {
    width: dimensionProvider.width,
    height: dimensionProvider.width + 50,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  registerButton: {
    backgroundColor: colorScheme.theme,
    marginVertical: 20,
    width: '100%',
  },

  loginButton: {
    backgroundColor: colorScheme.white,
    borderColor: colorScheme.theme,
    borderWidth: 1,
    marginVertical: 20,
    width: '100%',
  },
});
