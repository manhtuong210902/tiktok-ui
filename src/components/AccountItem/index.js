import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://pixel-creation.com/wp-content/uploads/dbz-wallpaper-hd-goku-1024x768-dragon-ball-z-3d-wallpapers-39-800x800.jpg"
                alt="AA"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon
                        className={cx('icon-check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <p className={cx('username')}>Nguyenvana</p>
            </div>
        </div>
    );
}

export default AccountItem;
