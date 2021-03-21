import React from 'react';
import { useTheme, useThemeToggler } from '../../context/theme';
import { useStore, useDispatcherContext } from '../../context/reducer';
import styles from './style';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from '../../components/StyledComponents';
import { Switch, Image } from 'react-native';
import { Screens, NavigationMode, ActionTypes, AppConstants, Colors } from '../../constants';
import Task from '../../components/Task';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default (props) => {
    const toggleTheme = useThemeToggler();
    const store = useStore();
    const dispatch = useDispatcherContext();
    return (
        <SafeAreaView style={styles.outerWrapper}>
            <View style={styles.top}>
                <Switch
                    trackColor={{ false: Colors.SWITCH_FALSE, true: Colors.SWITCH_TRUE }}
                    thumbColor={Colors.SWITCH_THUMB}
                    onValueChange={() => toggleTheme()}
                    value={useTheme()}
                />
            </View>
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{AppConstants.HELLO}</Text>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Shivam</Text>
                </View>
                <View style={styles.profilePictureContainer}>
                    <Image style={styles.profilePicture} source={require("../../assests/sample.png")} />
                </View>
            </View>
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.scrollview}>
                    {
                        (store && store.length)
                            ? store.map((task) => {
                                return <TouchableOpacity key={task.id} onPress={() => props.navigation.navigate(Screens.CRUD_SCREEN, { mode: NavigationMode.EXISTING, task })}><Task task={task} /></TouchableOpacity>
                            })
                            : <View style={styles.empty}>
                                <Text style={styles.emptyText}>{AppConstants.EMPTY}</Text>
                            </View>
                    }
                    <View style={{ height: 100 }} />
                </ScrollView>
            </View>
            <View style={styles.rightFloatingButtonContainer}>
                <TouchableOpacity style={styles.floatingButton} onPress={() => props.navigation.navigate(Screens.CRUD_SCREEN, { mode: NavigationMode.NEW })}>
                    <Icon
                        name={'pencil-plus'}
                        size={20}
                        color={Colors.WHITE}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.leftFloatingButtonContainer}>
                <TouchableOpacity style={[styles.floatingButton, { backgroundColor: "red" }]} onPress={() => dispatch({ type: ActionTypes.SORT })}>
                    <Icon
                        name={'filter'}
                        size={20}
                        color={Colors.WHITE}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}