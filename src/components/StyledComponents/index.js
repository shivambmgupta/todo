import React from 'react';
import {
    Text as RNText,
    View as RNView,
    TouchableOpacity as RNTouchableOpacity,
    SafeAreaView as RNSafeAreaView,
    ScrollView as RNScrollView,
    TextInput as RNTextInput
} from 'react-native';
import { useTheme } from '../../context/theme';
import themes from '../../utils/theme';

// An HOC to create further component
export const createStyledComponent = (WrappedComponent, foregroundComponent) => {
    return (props) => {
        const isDark = useTheme();
        return <WrappedComponent 
            { ...props }
            style={
                [
                    isDark 
                        ? (foregroundComponent ? themes.darkThemeText : themes.dark) 
                        : (foregroundComponent ? themes.lightThemeText : themes.light),
                    props.style 
                ]
            }
            >{props.children}</WrappedComponent>
    }
}

export const Text = createStyledComponent(RNText, foregroundComponent = true);
export const View = createStyledComponent(RNView);
export const TouchableOpacity = createStyledComponent(RNTouchableOpacity);
export const SafeAreaView = createStyledComponent(RNSafeAreaView);
export const ScrollView = createStyledComponent(RNScrollView);
export const TextInput = createStyledComponent(RNTextInput, foregroundComponent = true);