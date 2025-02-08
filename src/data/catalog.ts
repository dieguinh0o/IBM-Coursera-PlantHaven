import Data from './catalog.json';
import getImageURL from '../utilities/url-utilities';
import CatalogItem from '../types/CatalogItem';

export const Catalog: CatalogItem[] = Data.map((item) => {
    const {Name, Price, Description, Image, Id, Category} = item;
    const parsedImage = getImageURL(Image);
    return {
        Name: Name,
        Price: Price,
        Description: Description,
        Image: parsedImage,
        Id: Id,
        Category: Category
    };
});