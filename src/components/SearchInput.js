import React from 'react';
import { Search } from './Icons';

function SearchInput() {
	return (
		<div className="w-full items-center bg-gray-900 text-white font-medium px-4 py-2 rounded-full ml-4 mt-2 flex">
			<span>
				<Search className="text-gray-400 mr-4" />
			</span>
			<input type="text" placeholder="Search Twitter" className="bg-transparent" />
		</div>
	);
}

export default SearchInput;
