/* eslint-disable react/prop-types */
import Title from "./title";
import Article from "./Article";
import Picture from "./picture";
import OldPrice from "./old-price";
import Price from "./Price";
import Counter from "./Counter";
import Description from "./Description";

function ProductPage({ product }) {
  return (
    <section>
      <Title>{product.name}</Title>
      <Article>{product.article}</Article>
      <div style={{ display: "flex" }}>
        <Picture src={product.src} alt={product.name}></Picture>
        <div>
          <p>
            Цена: {<OldPrice value={product.oldPrice} />} {<Price value={product.price} />}
            <div>
              Количество: <Counter />
            </div>
            <p><span>Доставка:</span> {product.delivery}</p>
            <button type="button">Купить</button>
          </p>
        </div>
      </div>
      <Description text={product.description} />
    </section>
  )
}

export default ProductPage;