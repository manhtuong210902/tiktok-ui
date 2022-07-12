import styles from './Header.module.scss';
import classNames from 'classnames/bind';

//cái này cho mục đích sử tên class có thể chứa dấu gạch ngang -
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
