import './journalForm.css';
import ButtonSave from '../button/button';

const JournalForm = ({onSubmit}) => {

	const addJournalItem = (e) =>{
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
	};

	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type="text" name="title" />
			<input type="date" name="date" />
			<input type="text" name='tag'/>
			<textarea name="text" cols="30" rows="10"></textarea>
			<ButtonSave text='Save'/>
		</form>
	);
};
export default JournalForm;