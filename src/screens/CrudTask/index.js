import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from '../../components/StyledComponents';
import TextInput from '../../components/TextInput';
import { Alert } from 'react-native';
import { ActionTypes, AppConstants, NavigationMode, Colors } from '../../constants';
import styles from './style';
import { useStore, useDispatcherContext } from '../../context/reducer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from './DatePicker';

function setDateZero(date) {
    return date < 10 ? '0' + date : date;
}

export default (props) => {
    const mode = props.route.params.mode;
    const dispatch = useDispatcherContext();
    const [title, setTitle] = useState(mode === NavigationMode.EXISTING ? props.route.params?.task?.title : '');
    const [dueDate, setDueDate] = useState(mode === NavigationMode.EXISTING && props.route.params?.task.dueDate ? props.route.params?.task.dueDate : `${setDateZero(new Date().getDate())}/${setDateZero(new Date().getMonth() + 1)}/${new Date().getFullYear()}`)
    const [description, setDescription] = useState(mode === NavigationMode.EXISTING && props.route.params?.task?.description ? props.route.params?.task?.description : '');
    const [editable, setEditability] = useState(mode === NavigationMode.NEW);
    const store = useStore();
    const createTask = () => {
        // validate first
        if (title?.trim()?.length === 0) return;
        let task = {
            title: title.trim(), description: description?.trim(), dueDate
        }
        if (mode === NavigationMode.EXISTING) {
            task = { ...task, id: props.route.params?.task?.id, createdAt: props.route.params?.task?.createdAt }
            dispatch({ type: ActionTypes.EDIT, payload: task })
        } else {
            task = { ...task, id: store.length + 1, createdAt: new Date().toLocaleDateString() }
            dispatch({ type: ActionTypes.CREATE, payload: task })
        }
        props.navigation.goBack();
    }
    const handleDeleteButtonPress = () => {
        Alert.alert(
            AppConstants.DELETE_TEXT,
            AppConstants.DELETE_TITLE,
            [
                {
                    "text": AppConstants.CANCEL,
                    style: 'cancel'
                },
                {
                    "text": AppConstants.CONFIRM,
                    onPress: () => deleteConfirmed()
                },
            ],
            { cancelable: false }
        )
    }
    const deleteConfirmed = () => {
        dispatch({ type: ActionTypes.DELETE, payload: props.route.params?.task })
        props.navigation.goBack();
    }
    const handleCancelPress = () => {
        if (mode === NavigationMode.EXISTING) {
            if (!editable)
                props.navigation.goBack()
            else {
                setEditability(!editable)
                setDescription(props.route.params?.task?.description ? props.route.params?.task?.description : '')
                setTitle(props.route.params?.task?.title)
            }
        } else props.navigation.goBack();
    }
    return (
        <SafeAreaView style={styles.outerWrapper}>
            <View style={styles.top}>
                {
                    !editable &&
                    <TouchableOpacity
                        onPress={handleDeleteButtonPress}
                        style={[styles.roundButton, styles.deleteButton]}>
                        <Icon
                            name={'delete'}
                            size={16}
                            color={Colors.WHITE}
                        />
                    </TouchableOpacity>
                }
                <View style={styles.title}>
                    <Text style={styles.titleText}>{editable ? AppConstants.CREATE_HEADER : AppConstants.EDIT_HEADER}</Text>
                </View>
                {
                    !editable &&
                    <TouchableOpacity
                        onPress={() => {
                            setEditability(!editable)
                        }}
                        style={[styles.roundButton, styles.editButton]}>
                        <Icon
                            name={'comment-edit'}
                            size={16}
                            color={Colors.WHITE}
                        />
                    </TouchableOpacity>
                }
            </View>
            <ScrollView style={styles.scrollview}>
                <View style={styles.row}>
                    <Text>{AppConstants.TITLE}</Text>
                    <TextInput
                        autoCapitalize="words"
                        autoFocus={editable ? true : false}
                        onChangeText={value => setTitle(value)}
                        value={title}
                        editable={editable}
                    />
                </View>
                <View style={[styles.row, { maxHeight: 100 }]}>
                    <Text>{AppConstants.DESCRIPTION}</Text>
                    <TextInput
                        editable={editable}
                        value={description}
                        onChangeText={value => setDescription(value)}
                    />
                </View>
                <View style={[styles.row, styles.datePickerContainer]}>
                    <Text>{AppConstants.DUE_DATE}</Text>
                    <DatePicker handleDateChange={(date) => setDueDate(date)} date={dueDate} />
                </View>
                <View style={[styles.row, styles.buttonWrapper]}>
                    <TouchableOpacity style={[styles.title, styles.button, { backgroundColor: Colors.RED }]} onPress={handleCancelPress}>
                        <Text style={styles.buttonText}>{AppConstants.CANCEL}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.title, styles.button]} onPress={() => createTask()}>
                        <Text style={styles.buttonText}>{AppConstants.SAVE}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}