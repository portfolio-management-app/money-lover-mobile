import { colorScheme } from './color-scheme';
import { Dimensions, StyleSheet } from 'react-native';

export const fontProvider = {
  openSans: 'OpenSans',
};

export const dimensionProvider = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};

export const iconProvider = {
  material: 'material',
  materialCommunity: 'material-community',
  antDesign: 'antdesign',
  entypo: 'entypo',
  evilicon: 'evilicon',
  feather: 'feather',
  fontAwesome: 'font-awesome',
  fontAwesome5: 'font-awesome-5',
  fontisto: 'fontisto',
  foundation: 'foundation',
  ionicon: 'ionicon',
  octicon: 'octicon',
  simpleLineIcon: 'simple-line-icon',
  zocial: 'zocial',
};

export const styleProvider = StyleSheet.create({
  body: {
    backgroundColor: colorScheme.bg,
    flex: 1,
  },

  button: {
    borderRadius: 20,
    width: '100%',
    paddingVertical: 5,
    borderWidth: 1,
  },
  defaultButton: {
    borderRadius: 20,
    fontFamily: fontProvider.openSans,
  },
  centerVertical: {
    alignItems: 'center',
  },
  assetImage: {
    height: 30,
    width: 30,
  },
  assetTextContainer: {
    justifyContent: 'space-between',
    marginLeft: 15,
  },

  centerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textField: {
    borderBottomWidth: 1,
    borderColor: colorScheme.gray400,
    paddingBottom: 4,
    marginBottom: 35,
    fontFamily: fontProvider.openSans,
  },
  assetCard: {
    padding: 20,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  assetCardContainer: {
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
});
