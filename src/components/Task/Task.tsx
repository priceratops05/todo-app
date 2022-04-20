import { useState } from 'react';
import './Task.scss';
import { Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface TaskProps {
    priority?: string;
}

export default function Task(props: TaskProps) {
    const [isHidden, setIsHidden] = useState(true);
    const handleClick = (e: any) => {
        if (e.target.type === 'checkbox') return;
        console.dir(e.target);
        if (isHidden) {
            setIsHidden(false);
        } else {
            setIsHidden(true);
        }
    }
    return <div className={`task ${props.priority}`} onClick={handleClick}>
        <div className='date'>19/04/2022</div>
        <div className='status'>
            <h3>Hacer tarea</h3>
            <Checkbox
                color="info-o"
                animation="smooth"
                icon={<FontAwesomeIcon icon={faCheck} className="svg" data-type="svg" />}
                bigger
                shape="curve"
            />
        </div>
        <p className={isHidden ? 'hide' : 'show'}>Replicar App Beehive</p>
    </div>;

}