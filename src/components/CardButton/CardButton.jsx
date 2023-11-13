import './CardButton.css';
import '../JournalItem/journalItem';

const CardButton = ({children, className}) => {
	const resultClass = `card-button ${className ? className : ''}`;
	return (
		<button className={resultClass}>
			{children}
		</button>
	);
};
export default CardButton;