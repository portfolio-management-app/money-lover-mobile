import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Observer } from 'mobx-react-lite';
import { Button, Input } from 'react-native-elements';
import { Loading, PlatformView, TextContainer } from 'components';
import { NavigationHeader } from 'navigation/header';
import { colorScheme, styleProvider } from 'styles';
import { LocaleStore } from 'stores/ui-store';
import { googleSignIn, googleSignOut } from 'services/google-auth';
import { facebookLogin, getProfile } from 'services/facebook-auth';

export const Login = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const googleSignInPress = async () => {
    const result = await googleSignIn();
    if (result) {
      await googleSignOut();
    }
  };

  const facebookLoginPress = async () => {
    setIsLoading(true);
    const result = await facebookLogin();
    if (result) {
      const user = await getProfile();
      console.log(user);
    }
    setIsLoading(false);
  };

  return (
    <PlatformView style={styleProvider.body}>
      <Loading show={isLoading} />
      <Observer>
        {() => {
          const { locale } = LocaleStore;
          return (
            <View style={styles.form}>
              <NavigationHeader title={locale.loginPage.header} />
              <View style={styles.inputContainer}>
                <Input
                  autoCompleteType={true}
                  placeholder={locale.loginPage.placeHolder.email}
                  leftIcon={{
                    type: 'material-community',
                    name: 'email',
                  }}
                />
                <Input
                  secureTextEntry={true}
                  autoCompleteType={true}
                  placeholder={locale.loginPage.placeHolder.password}
                  leftIcon={{
                    type: 'material-community',
                    name: 'onepassword',
                  }}
                />
                <Button
                  containerStyle={[styleProvider.button, styles.loginButton]}
                  type="clear"
                  title={locale.greetingPage.login}
                ></Button>
              </View>
              <View style={styles.textContainer}>
                <TextContainer style={{ color: colorScheme.theme }}>
                  OR
                </TextContainer>
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  type="clear"
                  icon={{
                    type: 'antdesign',
                    name: 'googleplus',
                    color: colorScheme.white,
                  }}
                  onPress={() => googleSignInPress()}
                  containerStyle={[styleProvider.button, styles.googleButton]}
                  title={locale.loginPage.google}
                  titleStyle={{ color: colorScheme.white }}
                ></Button>
                <Button
                  onPress={() => facebookLoginPress()}
                  type="clear"
                  icon={{
                    type: 'fontawesome',
                    name: 'facebook',
                    color: colorScheme.white,
                  }}
                  containerStyle={[styleProvider.button, styles.facebookButton]}
                  title={locale.loginPage.facebook}
                  titleStyle={{ color: colorScheme.white }}
                ></Button>
              </View>
            </View>
          );
        }}
      </Observer>
    </PlatformView>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 20,
  },
  loginButton: {
    borderColor: colorScheme.theme,
  },
  googleButton: {
    borderColor: colorScheme.red500,
    backgroundColor: colorScheme.red500,
  },

  facebookButton: {
    borderColor: colorScheme.blue300,
    backgroundColor: colorScheme.blue300,
    marginTop: 30,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  inputContainer: {
    marginTop: 50,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
