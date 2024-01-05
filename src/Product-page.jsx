/* eslint-disable react/prop-types */
import Title from "./title";
import Article from "./Article";
import Picture from "./picture";
import FullPrice from "./full-price";
import Counter from "./Counter";
import Description from "./Description";
import Comments from "./Comments";
import Popularity from "./Popularity";

function ProductPage({ product }) {
  return (
    <section>
      <Title>{product.name}</Title>
      <Article>{product.article}</Article>
      <div style={{ display: "flex" }}>
        <Picture src={product.src} alt={product.name}></Picture>
        <div>
          <p>
            Цена: {" "}
            <FullPrice oldPrice={product.oldPrice} price={product.price} />
          </p>
          <div>
            Количество: <Counter />
          </div>
          <p>
            <span>Доставка:</span> {product.delivery}
          </p>
          <button type="button">Купить</button>
          <Popularity count={product.comments} />
        </div>
      </div>
      <Description text={product.description} />
      <Comments comments={product.comments} />
    </section>
  )
}

export default ProductPage;