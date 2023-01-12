import SearchForm from './SearchForm';

function UserNavigation() {
  return (
    <ul className="user-navigation">
      <li className="user-navigation__item">
        <SearchForm />
      </li>

      <li className="user-navigation__item">
        <a className="user-navigation__link"
          href="blank.html"
          title="Аккаунт"
        >
          <svg className="user-navigation__icon" width={20} height={19}>
            <use xlinkHref="img/sprite.svg#account" />
          </svg>
        </a>
      </li>

      <li className="user-navigation__item">
        <a className="user-navigation__link"
          href="blank.html"
          title="Избранные"
          data-quantity={8}
        >
          <svg className="user-navigation__icon" width={18} height={17}>
            <use xlinkHref="img/sprite.svg#favorite" />
          </svg>
        </a>
      </li>

      <li className="user-navigation__item">
        <a className="user-navigation__link"
          href="blank.html"
          title="Корзина"
          data-quantity={2}
        >
          <svg className="user-navigation__icon" width={20} height={18}>
            <use xlinkHref="img/sprite.svg#bag" />
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default UserNavigation;
