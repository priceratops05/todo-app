import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
    return <div className='navbar'>
        <div className='logo'>
            <FontAwesomeIcon icon={faPenToSquare} />
            <p>Todo App</p>
        </div>
       
    </div>
}