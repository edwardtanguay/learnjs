import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
  const colors = ['green', 'yellow', 'blue'];
  const message = colors.join(', '); 

	return <div className="App">{message}</div>;
}

export default App;
