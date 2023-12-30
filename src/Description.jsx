/* eslint-disable react/prop-types */
function Description({ text }) {
  return (
    <div>
      <h2>Описание</h2>
      {text}
      <button type="button">Подробнее</button>
    </div>
  )
}

export default Description;