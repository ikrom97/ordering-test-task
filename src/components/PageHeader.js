import PageNavigation from './PageNavigation';
import MainLogo from './MainLogo';
import UserNavigation from './UserNavigation';

function PageHeader() {
  const handleButtonClick = () =>
    document.body.classList.toggle('page__body--menu-shown');

  return (
    <header className="page-header">
      <nav className="main-navigation container">
        <PageNavigation />

        <MainLogo className="main-navigation__home-link" />

        <UserNavigation />

        <button className="main-navigation__toggle"
          title="Переключить меню"
          type="button"
          onClick={handleButtonClick}
        >
          <svg className="main-navigation__burger-icon" width={32} height={11}>
            <use xlinkHref="img/sprite.svg#burger-menu" />
          </svg>
          <svg className="main-navigation__close-icon" width={16} height={16}>
            <use xlinkHref="img/sprite.svg#close" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default PageHeader;
