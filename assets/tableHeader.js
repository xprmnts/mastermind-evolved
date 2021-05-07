import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const columns = [
    {
        title: <FontAwesomeIcon icon={faLock} />,
        dataIndex: 'slot1',
        key: 'slot1'
    },
    {
        title: <FontAwesomeIcon icon={faLock} />,
        dataIndex: 'slot2',
        key: 'slot2'
    },
    {
        title: <FontAwesomeIcon icon={faLock} />,
        dataIndex: 'slot3',
        key: 'slot3'
    },
    {
        title: <FontAwesomeIcon icon={faLock} />,
        dataIndex: 'slot4',
        key: 'slot4'
    },
    {
        title: 'E',
        dataIndex: 'exact',
        key: 'exact'
    },
    {
        title: 'P',
        dataIndex: 'partial',
        key: 'partial'
    }
];

export default columns;
