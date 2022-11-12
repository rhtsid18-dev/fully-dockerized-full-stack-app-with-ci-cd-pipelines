import './App.css';
import ApiCallBox from './ApiCallBox';

function App() {
	return (
		<div className="App">
			<h1>Fully Dockerized Full Stack Application with CI/CD Pipelines</h1>
			<div className="Space-around-flex">
				<ApiCallBox apiNumber={1} />
				<ApiCallBox apiNumber={2} />
			</div>
			<div className="center-flex">
				<ApiCallBox apiNumber={3} />
			</div>
		</div>
	);
}

export default App;
