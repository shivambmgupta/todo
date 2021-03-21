import React from 'react'
import DatePicker from 'react-native-datepicker'

export default (props) => {
    return (
        <DatePicker
            date={props.date}
            mode="date"
            format="DD/MM/YYYY"
            minDate={props.date}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36
                }
            }}
            onDateChange={props.handleDateChange}
        />
    );
}