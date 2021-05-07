import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar,
    faBell,
    faCoffee,
    faCircle,
    faHeart,
    faIceCream
} from '@fortawesome/free-solid-svg-icons';

const options = [
    {
        value: 1,
        icon: <FontAwesomeIcon icon={faStar} />
    },
    {
        value: 2,
        icon: <FontAwesomeIcon icon={faBell} />
    },
    {
        value: 3,
        icon: <FontAwesomeIcon icon={faCoffee} />
    },
    {
        value: 4,
        icon: <FontAwesomeIcon icon={faCircle} />
    },
    {
        value: 5,
        icon: <FontAwesomeIcon icon={faHeart} />
    },
    {
        value: 6,
        icon: <FontAwesomeIcon icon={faIceCream} />
    }
];

export default options;
