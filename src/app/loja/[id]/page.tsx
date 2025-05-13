import { restaurants } from '@/mock/restaurant.mocks';
import { restaurantMenus } from '@/mock/restaurantMenu.mock';

import { Accordion } from '@/components/accordion/accordion';

import { CatalogList } from '../components/catalog-list/catalogList';
import { StoreDetails } from '../components/store-details/storeDetails';
import { StoreHeader } from '../components/store-header/storeHeader';

const Home = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const restaurant = restaurants.find((item) => item.id === id);
  const menu = restaurantMenus[id] ?? [];

  if (!restaurant) {
    return <div>Restaurante não encontrado.</div>;
  }

  return (
    <div style={{ padding: '24px 16px', display: 'flex', gap: '6px', flexDirection: 'column' }}>
      <StoreHeader
        name={restaurant.name}
        logoUrl={restaurant.imageUrl}
        linkToDetails={restaurant.linkToDetails}
      />
      <StoreDetails
        deliveryFee={restaurant.deliveryFee}
        rating={restaurant.rating}
        deliveryCondition={restaurant.deliveryCondition}
        minimumOrderValue={restaurant.minimumOrderValue}
        deliveryTimeDescription={restaurant.deliveryTime}
        distanceInKm={restaurant.distanceInKm}
        closingTime={restaurant.closingTime}
      />

      {menu?.map(({ title, description, icon, items }) => (
        <Accordion key={title} title={title} description={description} icon={icon}>
          <CatalogList items={items} store={id} />
        </Accordion>
      ))}
    </div>
  );
};

export default Home;
