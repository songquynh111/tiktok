import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem({ children }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="ddx" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>ddx</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>sss</span>
            </div>
        </div>
    );
}

export default AccountItem;
