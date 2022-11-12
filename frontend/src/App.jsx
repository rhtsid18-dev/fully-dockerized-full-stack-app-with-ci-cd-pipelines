import './App.css';
import ApiCallBox from './ApiCallBox';

function App() {
	return (
		<div className="App">
			<h1>Fully Dockerized Full Stack Application with CI/CD Pipelines</h1>
			<div className="Space-around-flex">
				<ApiCallBox apiNumber="one" />
				<ApiCallBox apiNumber="two" />
			</div>
			<div className="center-flex">
				<ApiCallBox apiNumber="three" />
			</div>
		</div>
	);
}

export default App;
