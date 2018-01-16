// create first react element
// createElement takes 3 arguments (tag, element properties, child content)
const title = React.createElement(
	'h1',
	{id: 'title', className: 'header'},
	'Hello World' 
)

// render the element
// ReactDOM takes 2 arguments: element to render, where to render in the DOM
ReactDOM.render(
	title,
	document.getElementById('react-container')
)