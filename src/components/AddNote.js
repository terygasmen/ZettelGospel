import { useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';

const AddNote = ({ handleAddNote }) => {
    const [address, setAddress] = useState('');
    const [title, setTitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const [citation, setCitation] = useState('');

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleCitationChange = (event) => {
        setCitation(event.target.value);
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(address, title, noteText, citation);
            setAddress('');
            setTitle('');
            setNoteText('');
            setCitation('');
        }
    };

    return (
        <div className='note new'>
            <div className='note-header'>
                <input
                    placeholder='address'
                    className='note-address'
                    value={address}
                    onChange={handleAddressChange}
                />
                <input
                    placeholder='title'
                    className='note-title'
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
            />
            <div className='note-footer'>
                <input
                    placeholder='citation'
                    className='note-citation'
                    value={citation}
                    onChange={handleCitationChange}
                />
                <button className='save' onClick={handleSaveClick}>
                    <BsFillPlusCircleFill size='1.4em' color='#D8E1E9' />
                </button>
            </div>
        </div>
    );
};

export default AddNote;
