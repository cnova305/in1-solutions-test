import React from 'react';
import './ProductPageComponent.css';

import { Voucher, variant } from '../../types/types';

interface ProductPageComponentProps {
  voucher: Voucher;
}

const ProductPageComponent = ({
  voucher,
  ...props
}:ProductPageComponentProps) => {
  return (
    <div className='page_component_block'>
      <div className='page_component_block_hotel'>
        {voucher.hotelName}
      </div>
      <div className='page_component_block_details'>
        <div className='page_component_block_details_price'>
          <h1>
            {voucher.name}
          </h1>
          <div className='page_component_block_details_price_view'>
            <span>Retail Value {voucher.currency} {voucher.displayPrice}</span>
          </div>
          <div className='page_component_block_details_price_title'>
            <span className='page_component_block_details_price_title_currency'>
              {voucher.currency}
            </span>
            <span className='page_component_block_details_price_title_price'>
              {voucher.price}
            </span>
            <span className='page_component_block_details_price_title_cents'>
              .00
            </span>

          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductPageComponent