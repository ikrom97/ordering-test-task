import { useState } from 'react';

function Comment() {
  const [message, setMessage] = useState('');
  const [charsCount, setCharsCount] = useState(0);
  const charsMaxLength = 142;

  const handleTextChange = (evt) => {
    if (evt.target.value.length > charsMaxLength) {
      evt.target.value = evt.target.value.slice(0, charsMaxLength);
      setMessage(evt.target.value);
      setCharsCount(evt.target.value.length);
      return;
    }

    setCharsCount(evt.target.value.length);
  };

  return (
    <fieldset className="form__fieldset" data-area="comment">
      <legend className="form__legend title-2">Комментарий к заказу</legend>

      <div className="form__element">
        <textarea className="form__field form__field--text"
          id="comment"
          name="comment"
          placeholder="Комментарий к заказу"
          defaultValue={message}
          onChange={handleTextChange}
        />

        <label className="form__label form__label--text" htmlFor="comment">
          Комментарий к заказу
        </label>

        <p className="form__field-info">
          Использовано <output>{charsCount}</output>/{charsMaxLength} символов
        </p>
      </div>
    </fieldset>
  );
}

export default Comment;
