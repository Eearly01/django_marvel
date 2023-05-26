import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Add from './components/Add.jsx'
import Edit from './components/Edit.jsx';

function App() {
	let [characters, setCharacters] = useState([]);

	const getCharacters = () => {
		axios
			.get('http://localhost:8000/api/characters')
			.then(
				(res) => setCharacters(res.data),
				(err) => console.error(err)
			)
			.catch((error) => console.error(error));
	};

	const handleCreate = (newCharacter) => {
		axios.post('http://localhost:8000/api/characters', newCharacter).then((res) => {
			console.log(res);
			getCharacters();
		});
	};

	const handleDelete = (event) => {
    console.log(event.target.value)
		axios
			.delete(`http://localhost:8000/api/characters/${event.target.value}`)
			.then((res) => {
				getCharacters();
			});
	};

	const handleUpdate = (editCharacter) => {
		console.log(editCharacter);
		axios
			.put(`http://localhost:8000/api/characters/${editCharacter.id}`, editCharacter)
			.then((res) => {
				getCharacters();
			});
	};

	//UseEffect Hook
	useEffect(() => {
		getCharacters();
	}, []);
	return (
		<>
			<Add handleCreate={handleCreate} />
			<h1>Marvel Characters</h1>
			<div className='characters'>
				{characters.map((Character) => {
					return (
						<div className='characterCards' key={Character.id}>
							<h4>Name: {Character.name}</h4>
							<h5>Age: {Character.age}</h5>
              <h5>Main Power: {Character.main_power}</h5>
              <h5>Team: {Character.team}</h5>
							<Edit handleUpdate={handleUpdate} Character={Character} />
							<button onClick={handleDelete} value={Character.id}>
								X
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
