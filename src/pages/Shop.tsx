import './Shop.css';
import ItemCard from '../components/Item-ShopCard.tsx';
import {Catalog} from '../data/catalog.ts';
import CatalogItem from '../types/CatalogItem.ts';

interface CatalogSection {
  Category: string;
  Items: CatalogItem[];
}

function getUniqueCategories(catalog:CatalogItem[]):string[] {
  const categories = new Set<string>();
  catalog.forEach((item:CatalogItem)=> {
    categories.add(item.Category);
  });
  return Array.from(categories);
}

function splitCatalogIntoCategories(catalog:CatalogItem[], categories:string[]) {
  const OrganizedCatalog:CatalogSection[] = new Array();
  categories.forEach((category:string) => {
    const NewSection:CatalogSection = {
      Category: category,
      Items: catalog.filter(item => item.Category === category)
    }
    OrganizedCatalog.push(NewSection);
  })
  return OrganizedCatalog;
}

function renderShop(catalog:CatalogSection[]) {
   return catalog.map((section) => {
    const ItemCards = section.Items.map((item) => {
      return(
        <li key={item.Id}>
          <ItemCard Item={item}></ItemCard>
        </li>
        )}
      ) 
    return (
      <>
      <div className='CategorySection-Container'>
        <h3 className='Category-Header'>{section.Category}</h3>
        <ul className='shop-item-list'>
          {ItemCards}
        </ul>
      </div>
      </>
    )
   })
}


export default function Shop() {
  const Categories = getUniqueCategories(Catalog);
  const OrganizedCatalog = splitCatalogIntoCategories(Catalog, Categories);
    return (
    <div className="shop-page-container">
      <div className='shop-container'>
        {renderShop(OrganizedCatalog)}
      </div>
    </div>
  )
}