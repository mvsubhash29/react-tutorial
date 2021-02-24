import React, { useState, useEffect, useRef, createRef } from 'react';
import axios from 'axios';
import { Parent } from '../Context/Parent';

export const Countries = () => {
	const [countries, setCountries] = useState();
	const [error, setError] = useState(false);
	const useRefVal = useRef();
	const createRefVal = createRef();

 

	async function fetchCountries() {
		try {
			const response = await axios.get('https://api.covid19api.com/countries');
			setCountries(response.data);
		} catch (error) {
			setError(true);
		}
	}

	useEffect(() => { 
		fetchCountries();
	}, []);

	return (
		<> 
		<Parent />
			<h1>Countries List</h1>
			{
				error && <>Something Went wrong</>
			}
			<ul>
				{
					countries && countries.map((countryObj, index) =>
						<li key={index}>{countryObj.Country} - {countryObj.Slug}</li>
					)
				}
			</ul>
		</>
	)
} 