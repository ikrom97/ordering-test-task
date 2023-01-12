function MainLogo({ className }) {
  return (
    <a className={`${className ? className : ''} home-link`}
      href="blank.html"
    >
      <img src="img/main-logo.png"
        width={100}
        height={22}
        alt="Перейти на главную страницу блога"
        loading="lazy"
      />
    </a>
  );
}

export default MainLogo;
