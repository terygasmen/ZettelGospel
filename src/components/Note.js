import { AiFillMinusCircle } from 'react-icons/ai';

const Note = ({ id, address, title, text, citation, handleDeleteNote }) => {
	return (
		<div className='note'>
			<section className='note-header'>
				<span className='note-address'>{address}</span>
				<span className='note-title'>{title}</span>
			</section>
			<span className='note-content'>{text}</span>
			<div className='note-footer'>
				<small className='note-citation'>{citation}</small>
				<AiFillMinusCircle
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;