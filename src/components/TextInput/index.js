import React from 'react';
import { TextInput } from '../StyledComponents';
import styles from './style';
import { useTheme } from '../../context/theme';
import { NavigationMode } from '../../constants';

export default (props) => {
    const isDark = useTheme();
    return (
        <TextInput 
            {...props} 
            style={
                [
                    styles.textInput, 
                    isDark 
                    ? (!props.editable ? styles.textInputDarkNonEditable : styles.textInputDarkEditable ) 
                    : (!props.editable ? styles.textInputLightNonEditable : styles.textInputLightEditable )
                ]
            } 
        />
    );
}