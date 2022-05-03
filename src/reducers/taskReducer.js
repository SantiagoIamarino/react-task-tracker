const INITIAL_STATE = [
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: false
    },
    {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30pm",
        reminder: false
    }
]

export const taskReducer = ( state = INITIAL_STATE, action ) => {

    switch (action.type) {
        case '@tasks/created':

            return [ ...state, action.payload  ]
        
        case '@tasks/toggle_reminder':
            var { id } = action.payload;

            return state.map(note => {

                if(note.id == id) {
                    return {
                        ...note,
                        reminder: !note.reminder
                    }
                }

                return note
            })

        case '@tasks/deleted':
            var { id } = action.payload;

            return state.filter(note => id !== note.id)
    
        default:
            return state
    }

}

export const createNote = (content) => {

    const { text, day, reminder, id } = content;

    return {
        type: '@tasks/created',
        payload: { text, day, reminder, id }
    }

}

export const toggleReminder = (taskId) => {

    return {
        type: '@tasks/toggle_reminder',
        payload: { id: taskId }
    }

}

export const deleteNote = (taskId) => {

    return {
        type: '@tasks/deleted',
        payload: { id: taskId }
    }

}
