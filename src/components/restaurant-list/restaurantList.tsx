'use client';

import { useState } from 'react';

import { restaurants } from '@/mock/restaurant.mocks';
import Image from 'next/image';

import RestaurantCard from '../restaurant-card/restaurantCard';
import * as S from './restaurantList.styles';

export default function RestaurantList() {
  const [search, setSearch] = useState('');

  const filteredRestaurants = restaurants.filter((r) => r.name.toLowerCase().includes(search.toLowerCase()));

  const openRestaurants = filteredRestaurants.filter((r) => r.openTrade);
  const closedRestaurants = filteredRestaurants.filter((r) => !r.openTrade);

  return (
    <>
      <S.SearchWrapper>
        <S.SearchInput
          type='text'
          placeholder='busque pela loja ou culinária'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </S.SearchWrapper>

      <S.ImageWrapper>
        <Image src='/images/promo.png' alt='promoção' fill objectFit='cover' />
      </S.ImageWrapper>

      <S.SectionTitle>abertos</S.SectionTitle>
      <S.ListContainer>
        {openRestaurants.map((restaurant) => (
          <RestaurantCard data={restaurant} key={restaurant.id} />
        ))}
      </S.ListContainer>

      <S.SectionTitle>fechados</S.SectionTitle>
      <S.ListContainer>
        {closedRestaurants.map((restaurant) => (
          <RestaurantCard data={restaurant} key={restaurant.id} />
        ))}
      </S.ListContainer>
    </>
  );
}
