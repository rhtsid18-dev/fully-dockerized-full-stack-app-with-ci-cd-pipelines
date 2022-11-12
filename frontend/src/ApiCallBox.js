const ApiCallBox = (props) => {
	return (
		<div className="Api-call-box">
			<button>Call API {props.apiNumber}</button>
			<div className="Api-call-response-logs"></div>
		</div>
	);
}

export default ApiCallBox;
