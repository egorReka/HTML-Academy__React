/* eslint-disable react/prop-types */
import OldPrice from "./old-price";
import Price from "./Price";

function FullPrice({ price, oldPrice }) {
  const showOldPrice = oldPrice && oldPrice > price;

  return (
    <>
      {showOldPrice && <OldPrice value={oldPrice} />}
      {showOldPrice && " "}
      <Price value={price} />
    </>
  );
}

export default FullPrice;