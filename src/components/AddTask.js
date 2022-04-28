import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {
  
    const [ text, setText ] = useState('')
    const [ day, setDay ] = useState('')
    const [ reminder, setReminder ] = useState(false)

    const onSubmit = (e) => {
        onAdd(e, { text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form onSubmit={ onSubmit }>

            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input value={text} onChange={ (e) => setText(e.target.value) }
                    type="text" id='text' placeholder='Text' 
                />
            </div>

            <div className="form-control">
                <label htmlFor="dateTime">Day & time</label>
                <input value={day} onChange={ (e) => setDay(e.target.value) }
                    type="text" id='dateTime' placeholder='Day & time' 
                />
            </div>

            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set reminder</label>
                <input checked={reminder} onChange={ (e) => setReminder(e.target.checked) }
                    type="checkbox" id='reminder' 
                />
            </div>

            <input type="submit" value="Add task" className='btn btn-block' />

        </form>
    )
}

export default AddTask