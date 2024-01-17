import { Endpoints } from '../../types';

export const getProduct: Endpoints['getProduct'] = async (
  context,
  params
) => {
  console.log('getProduct has been called');

  const product = await fetch('https://fakestoreapi.com/products/1')
  .then(res=>res.json())
  .then(json=>json)

  return product;
};
