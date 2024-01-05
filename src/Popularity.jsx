function Popularity({ count }) {
  let result = null;

  if (count.lenght === 0) {
    result = <p>Будь первым. Поделись впечатлениями</p>;
  }

  if (count.lenght > 5) {
    result = <p style={{ color: "green" }}>Проверенный товар</p>;
  }
  return result;
}

export default Popularity;