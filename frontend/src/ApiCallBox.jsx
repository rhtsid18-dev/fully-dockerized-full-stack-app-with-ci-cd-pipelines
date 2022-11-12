import { useState } from "react";

const ApiCallBox = (props) => {
	const [responseLog, setResponseLog] = useState([]);

	const callApi = (apiNumber) => {
		fetch(`http://localhost:8080/api-${apiNumber}`)
			.then(response => response.json())
			.then(data => setResponseLog([...responseLog, JSON.stringify(data)]))
	}

	return (
		<div className="Api-call-box">
			<button onClick={() => callApi(props.apiNumber)}>Call API {props.apiNumber}</button>
			<div className="Api-call-response-logs">
				{responseLog.toString()}
			</div>
		</div>
	);
}

export default ApiCallBox;
