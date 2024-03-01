import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/images';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
                </h4>
                <span className={cx('user-name')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
