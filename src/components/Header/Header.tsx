import './Header.scss'
import { IonIcon } from '@ionic/react';

import BellIcon from '../../assets/icons/bell.svg'

export const Header = () => {
    return (
        <div className='headerContainer'>
            <span className='greeting'>Om Namo Narayani</span>
            <div className='iconContainer'>
                <IonIcon icon={BellIcon}></IonIcon>
            </div>
        </div>
    )
}

