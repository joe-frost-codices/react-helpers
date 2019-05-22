import React from 'react'

const SelectList = ({options = [], selected = null}) => (
    <React.Fragment>
        <select defaultValue={selected}>
            {options.map((option, index) => { 
                return (
                    <option 
                        key={index} 
                        value={option}
                        >
                            {option}
                    </option>
                )
            })}
        </select>
    </React.Fragment>
)

export default SelectList
