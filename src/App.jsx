import './App.css';
import JournalItem from './components/JournalItem/journalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPannel from './layout/leftPannel/LeftPannel';
import Body from './layout/body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [
	{
		id: '0',
		title: 'Подготовка к обновлению курсов',
		date: new Date(),
		text: 'Горные походы открывают удивительные природные ландшафты'
	},
	{
		id: '1',
		title: 'Подготовка ',
		date: new Date(),
		text: 'удивительные природные ландшафты'
	}
];
function App() {
	
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = (item) => {
		setItems(oldItems => [...oldItems, {
			id: Math.max(...oldItems.map(e => e.id)) + 1,
			text: item.text,
			title: item.title,
			date: new Date(item.date)
		}]);
	};

	const sortItems = (firstItem, secondItem) =>{
		if(firstItem.date < secondItem.date) return 11;
		else return -1;
	};

	return (
		<div className='app'>
			<LeftPannel>
				<Header/>
				<JournalAddButton></JournalAddButton>
				<JournalList>
					{items.sort(sortItems).map((el)=>(
						<CardButton key={el.id}>
							<JournalItem data={el}/>
						</CardButton>
					))}
				</JournalList>
			</LeftPannel>
			<Body>
				
				<JournalForm onSubmit={addItem}/>
				
				
			</Body>	
		</div>
	);
}

export default App;
