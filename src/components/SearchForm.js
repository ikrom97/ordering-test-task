function SearchForm() {
  return (
    <form className="search-form" action="/" method="get">
      <label className="search-form__label" aria-label="Глобальный поиск">
        <svg className="search-form__icon" width={18} height={18}>
          <use xlinkHref="img/sprite.svg#search" />
        </svg>

        <input className="search-form__input"
          name="keyword"
          type="search"
          list="products"
          placeholder="Введите ключевое слово для поиска"
          autoComplete="off"
        />
      </label>

      <datalist id="products">
        <option value="Утепленная стеганная куртка женская Top Hills"></option>
        <option value="Вязанная шапка Zolla"></option>
      </datalist>
    </form>
  );
}

export default SearchForm;
