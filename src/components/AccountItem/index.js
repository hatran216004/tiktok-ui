import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/280545795_740810917078711_6467780029175581584_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeFNJflN3wmHoEPOvy1eJmMytF3QqiQx-bS0XdCqJDH5tABkIirDLXz_cod0dpy062ImkAssVEw3mUdgETTMeijh&_nc_ohc=cAdKNbWfA5YAX99SW-9&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfB-0lFp9x8w3jl1lEawNkljl_C5EKY9QVFCD9C-cngmbA&oe=65E11D0C"
                alt="Aki"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Ha Tran
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <span className={cx('user-name')}>HaTran@123</span>
            </div>
        </div>
    );
}

export default AccountItem;
