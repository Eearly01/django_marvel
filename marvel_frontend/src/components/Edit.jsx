import React, { useState } from 'react';

const Edit = (props) => {
	const [character, setCharacter] = useState({...props.Character});

    const handleChange = (event) => {
        setCharacter({ ...character, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
			event.preventDefault();
			props.handleUpdate(character);
		};

	return (
		<>
			<details>
				<summary>Edit character</summary>
				<form onSubmit={handleSubmit}>
					<label htmlFor='name'>Name: </label>
					<input
						type='text'
						name='name'
						value={character.name}
						onChange={handleChange}
					/>
					<label htmlFor='age'>Age: </label>
					<input
						type='text'
						name='age'
						value={character.age}
						onChange={handleChange}
					/>
					<label htmlFor='main_power'>Power: </label>
					<input
						type='text'
						name='main_power'
						value={character.main_power}
						onChange={handleChange}
					/>
					<label htmlFor='team'>Team: </label>
					<input
						type='text'
						name='team'
						value={character.team}
						onChange={handleChange}
					/>
					<input type='submit' />'
				</form>
			</details>
		</>
	);
};

export default Edit;
