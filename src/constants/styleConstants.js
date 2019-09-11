import { Dimensions, Platform, StatusBar } from 'react-native';

// Colors
export const primaryActiveColor = '#5b82d7';
export const primaryColor = '#7699e5';
export const secondaryColor = '#304154';
export const lightSecondaryColor = '#516173';
export const redColor = '#E57676';
export const lightRedColor = 'rgba(229, 118, 118, 0.2)';
export const redActiveColor = '#de5454';
export const greenColor = '#4EB993';
export const lightGreenColor = 'rgba(78, 185, 147, 0.2)';
export const greyColor = '#9ca6af';
export const mediumGreyColor = '#e0e4e6';
export const lightGreyColor = '#f2f6fa';
export const lighterGreyColor = '#f8fafc';
export const whiteColor = '#ffffff';
export const blackColor = '#000000';
export const groceryColor = '#fff2dc';
export const groceryGreyColor = '#a1aab2';
export const transparentColor = 'transparent';
export const paleGreyColor = '#f6f7f9';
export const greyBorderColor = '#e2e7eb';
export const greyListBorderColor = '#ecf0f3';
export const greyContentColor = '#8d98a2';
export const greyCartColor = '#808c97';
export const greyDialogBorder = '#edeff0';
export const secondaryButtonTextColor = '#6f92de';
export const primaryActiveColorWithOpacity = 'rgba(118, 153, 229, 0.1);';
export const primaryActiveColorWithHalfOpacity = 'rgba(118, 153, 229, 0.5)';
export const greyLogoColor = 'rgba(128, 140, 151, 0.13)';
export const dialogBackgroundColor = 'rgba(4, 4, 15, 0.4)';

// Fonts
export const fontBold = 'Roboto-Bold';
export const fontRegular = 'Roboto-Regular';
export const fontMedium = 'Roboto-Medium';

// Screen measures
export const iOSstatusBarHeight = 25;
export const iOSstatusBarHeightiPhoneX = 40;
export const iPhoneXHeight = 812;
export const { width } = Dimensions.get('window');
const { height: wh } = Dimensions.get('window');
export const height = Platform.OS === 'ios' ? wh : (wh - StatusBar.currentHeight);
export const containerWidth = width * 0.94;
export const appSideSpace = (width - containerWidth) / 2;

// Linear gradients
export const cardLinearGradient = ['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.4)'];
export const headerLinearGradient = ['#fff8ed', '#fff2dc'];
export const groceryLinearGradient = ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.75)'];
