import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import images from '~/assets/image';
import Search from '../Search';
import Image from '~/components/Image';
import { ChatBoxIcon, PaperPlaneIcon } from '~/components/Icons';
import routesConfig from '~/config/router';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faGlobe,
    faCircleQuestion,
    faKeyboard,
    faGear,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
// import { faPaperPlane, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

//cái này cho mục đích sử tên class có thể chứa dấu gạch ngang -
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },

                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const handleOnchangeMenu = (MenuItem) => {
        console.log(MenuItem);
    };

    const currentUser = true;

    const menuUser = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: routesConfig.profile,
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin} />,
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
                <Link className={cx('logo')} to={routesConfig.home}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />} to={routesConfig.upload}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages" placement="bottom" delay={[75, 0]}>
                                <button className={cx('action-btn')}>
                                    <PaperPlaneIcon />
                                    {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[75, 100]}>
                                <button className={cx('action-btn')}>
                                    <ChatBoxIcon />
                                    <span className={cx('badge')}>12</span>
                                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary>Log in</Button>
                    )}
                    <Menu items={currentUser ? menuUser : MENU_ITEMS} onChange={handleOnchangeMenu}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://pixel-creation.com/wp-content/uploads/dbz-wallpaper-hd-goku-1024x768-dragon-ball-z-3d-wallpapers-39-800x800.jpg"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
