import React from 'react';
import { shopRoutes } from '@packages/shared/src/routes/shop';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div>
      shopPage
      <div>
        <Link to={shopRoutes.second}>go to second page</Link>
      </div>
    </div>
  );
};

export default Shop;
