import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper className={cx('menu-poper')}>
                    <div className={cx('preview')}>
                        <AccountPreview></AccountPreview>
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                placement="bottom"
                render={renderPreview}
                offset={[-20, 0]}
            >
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        alt="ddx"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Bà Tân Vlogs</strong>
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            />
                        </p>

                        <p className={cx('username')}>Bà Tân Vlogs</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    label: PropTypes.string.isRequired,
};
export default AccountItem;
