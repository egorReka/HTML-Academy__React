import { Title } from "./title";
import { Article } from "./Article";
import { Picture } from "./picture";
import { OldPrice } from "./old-price";
import { Price } from "./Price";
import { Counter } from "./Counter";
import { Description } from "./Description";


function ProductPage() {
  return (
    <section>
      <Title></Title>
      <Article></Article>
      <div style={{ display: "flex" }}>
        <Picture></Picture>
        <div>
          <p>
            Цена: {<OldPrice />} {<Price />}
            <div>
              Количество: <Counter />
            </div>
            <p><span>Доставка:</span> 1 апреля </p>
            <button type="button">Купить</button>
          </p>
        </div>
      </div>
      <Description />
    </section>
  )
}

export default ProductPage;