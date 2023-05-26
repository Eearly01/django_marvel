import React, { useState } from 'react';

//Only Need Props as a param if we are passing in props to this component

const Add = (props) => {
    let emptyCharacter = {name: '', age: '', main_power: '', team: ''}
    const [character, setCharacter] = useState(emptyCharacter)

    const handleChange = (event) => {
        setCharacter({...character, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleCreate(character);

    }
    return (
			<>
				<form onSubmit={handleSubmit}>
					<label htmlFor='name'>Name: </label>
					<input type='text' name='name' onChange={handleChange} />
					<br />
					<br />
					<label htmlFor='age'>Age: </label>
					<input type='number' name='age' onChange={handleChange} />
					<br />
					<br />
					<label htmlFor='main_power'>Power: </label>
					<input type='text' name='main_power' onChange={handleChange} />
					<br />
					<br />
					<label htmlFor='team'>Team: </label>
					<input type='text' name='team' onChange={handleChange} />
					<input type='submit' />
				</form>
			</>
		);
}

export default Add