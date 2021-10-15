import './App.css';
import Header from '../Wrappers/Header';
import Recommended from '../Wrappers/Recommended';

function App() {
	return (
		<div className='App'>
			<Header />
			<section className='recommended-books'>
				<Recommended />
				<Recommended />
				<Recommended />
			</section>
		</div>
	);
}

export default App;
