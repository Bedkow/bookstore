import './App.css';
import Header from '../Wrappers/Header';
import Recommended from '../Wrappers/Recommended';
import booksDB from '../../db/db.json';

function App() {
	// function recommendedGenerator() {}

	console.log(booksDB); //
	console.log(booksDB.books[0]['imgPath']); //
	let path = booksDB.books[0]['imgPath'];
	console.log(typeof path + path); //
	return (
		<div className='App'>
			<Header />
			<section className='recommended-books'>
				<Recommended imgPath={path} />
				<Recommended imgPath={path} />
				<Recommended imgPath={path} />
			</section>
		</div>
	);
}

export default App;

/* 
- edit JSON paths to include public folder path
- CSS to get imgs under control
*/
