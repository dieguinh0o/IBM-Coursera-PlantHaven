import './Shop.css';
import ItemCard from '../components/Item-ShopCard.tsx';
import {Catalog} from '../data/catalog.ts';


export default function Shop() {

    const plants = Catalog.map((item) => {
        return (
            <li key={item.Id}>
                <ItemCard Item={item}></ItemCard>
            </li>
        )
    });

    return (
    <div className="shop-page-container">
      <h1>Air Purifying Plants</h1>
      <div className='shop-container'>
        <ul className="shop-item-list">
          {plants}
        </ul>
      </div>
    </div>
  )
}