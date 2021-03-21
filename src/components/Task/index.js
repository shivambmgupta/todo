import React, { useState } from 'react';
import { View, Text as SCText } from '../StyledComponents';
import styles from './style';
import { useTheme } from '../../context/theme';
import CheckBox from '@react-native-community/checkbox';
import { useDispatcherContext } from '../../context/reducer';
import { ActionTypes } from '../../constants';

const Text = (props) => {
    const isDark = useTheme();
    return <SCText {...props} style={[props.style, isDark ? styles.backgroundColorDark : styles.backgroundColorLight]}>{props.children}</SCText>
}

export default (props) => {
    const isDark = useTheme();
    const dispatch = useDispatcherContext();
    const task = props?.task;
    const [isDone, toggleIsDone] = useState(task.isDone)
    const handleToggle = (value) => {
        toggleIsDone(prevIsDone => !prevIsDone);
        let updatedTask = { ...task, isDone: !task.isDone }
        dispatch({ type: ActionTypes.EDIT, payload: updatedTask })
    }
    return (
        <View style={[styles.body, isDark ? styles.backgroundColorDark : styles.backgroundColorLight]}>
            <View style={[styles.row, isDark ? styles.backgroundColorDark : styles.backgroundColorLight]}>
                <View>
                    <Text style={[styles.titleText, isDone ? styles.textCut : {}]}>{task.title}</Text>
                    <Text style={[styles.descriptionText, isDone ? styles.textCut : {}]}>{task.description}</Text>
                </View>
                <View style={[styles.rightContainer, isDark ? styles.backgroundColorDark : styles.backgroundColorLight]}>
                    <CheckBox
                        style={isDark ? styles.backgroundColorDark : styles.backgroundColorLight}
                        value={isDone}
                        onValueChange={(newValue) => handleToggle(newValue)}
                    />
                </View>
            </View>
            <View style={[styles.row, isDark ? styles.backgroundColorDark : styles.backgroundColorLight]}>
                <Text style={styles.timeText}>{`Created: ${task.createdAt}`}</Text>
                {task.dueDate && <Text style={styles.timeText}>{`Due: ${task.dueDate}`}</Text>}
            </View>
        </View>
    );
}