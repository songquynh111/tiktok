import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faQuestionCircle,
    faSign,
    faSignIn,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'lang',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Cấp 2',
                        data: [
                            {
                                code: 'en',
                                title: 'English1',
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt1',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);

    //hanlde logic
    const handleMenuchange = (menuItem) => {
        switch (menuItem.type) {
            case 'lang':
                console.log(menuItem.type);

                break;

            default:
                break;
        }
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@as',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"></img>
                </div>
                <HeadlessTippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon className={cx('upload-icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>12</span>
                            </button>
                        </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuchange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                alt="ddx"
                                fallBack="https://avatar.iran.liara.run/public/33"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>

                    {/* <Button
                    primary
                    leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                    rightIcon={<FontAwesomeIcon icon={faSignOut} />}
                    >
                        Login
                    </Button> */}
                    {/* <Button outline rounded className={cx('custom-login')}>
                        Login
                    </Button> */}
                    {/* <Button outline small>
                        Login
                    </Button> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
