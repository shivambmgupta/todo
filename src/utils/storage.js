import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../constants'

export default class Storage {
    static async setItem(key, value) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value))
        } catch (error) {

        }
    }
    static async getItem(key) {
        try {
            return new Promise((resolve, reject) => {
                AsyncStorage.getItem(key).then(response => {
                    resolve(JSON.parse(response))
                })
            })
        } catch (error) {

        }
    }
    static async removeItem(key) {
        try {
            return await AsyncStorage.removeItem(key);
        } catch (error) { }
    }
    static async clearAll() {
        try {
            await AsyncStorage.clear()
        } catch (error) {

        }
    }
    static async appendItem(task) {
        this.getItem(StorageKey.KEY).then(taskList => {
            taskList = taskList ? taskList : [];
            taskList.push(task);
            this.setItem(StorageKey.KEY, taskList);
        })
    }
    static async updateStore(tasks) {
        this.clearAll();
        this.setItem(StorageKey.KEY, tasks);
    }
}