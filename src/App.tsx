import './App.css';
import Icon from './components/Icon';
import { IconNames } from './utils/constants/icon.constants';
import { IconSizes } from './components/Icon/Icon.types';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>This is how the Icon Component looks</p>
				<Icon name={IconNames.BOOKMARK} color="white" size={IconSizes.LARGE} />
			</header>
		</div>
	);
}

export default App;
