function ContactDetails() {
  return (
    <>
      <fieldset className="form__fieldset form__fieldset--contacts">
        <legend className="form__legend title-2">Контактные данные</legend>

        <div className="form__element">
          <input className="form__field"
            id="name"
            type="text"
            name="name"
            placeholder="Александр"
            autoComplete="off"
            required
          />
          <label className="form__label" htmlFor="name">Имя</label>
        </div>

        <div className="form__element">
          <input className="form__field"
            id="surname"
            type="text"
            name="surname"
            placeholder="Македонский"
            autoComplete="off"
            required
          />
          <label className="form__label" htmlFor="surname">Фамилия</label>
        </div>

        <div className="form__element">
          <input className="form__field"
            id="tel"
            type="tel"
            name="tel"
            placeholder="987-654-3210"
            autoComplete="off"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <label className="form__label" htmlFor="tel">Телефон</label>
        </div>

        <div className="form__element">
          <input className="form__field"
            id="email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            autoComplete="off"
            required
          />
          <label className="form__label" htmlFor="email">Email</label>
        </div>

        <div className="form__element form__element--wide">
          <input className="form__field"
            id="address"
            type="text"
            name="address"
            placeholder="г. Санкт-Петербург, пр. Просвещения, д. 99, кв. 152"
            autoComplete="off"
            required
          />
          <label className="form__label" htmlFor="address">Адрес доставки</label>
        </div>
      </fieldset>

      <div className="form__map" id="map" data-area="map" />
    </>
  );
}

export default ContactDetails;
