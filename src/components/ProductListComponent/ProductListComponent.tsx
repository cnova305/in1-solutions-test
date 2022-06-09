import React from 'react';
import './ProductListComponent.css';

import { Voucher } from '../../types/types';

interface ProductListComponentProps {
  voucher: Voucher;
}

const ProductListComponent = ({
  voucher,
  ...props
}:ProductListComponentProps) => {
  return (
    <div className='list_component_block'>
      {/* <img src={voucher.voucherImageUrl} alt='voucher diagram' /> */}
      <div className='list_component_block_details'>
        <h1>
          {voucher.name}
        </h1>
        
      </div>
      <div className='list_component_block_price'>
        <div className='list_component_block_price_container'>
          
        </div>
      </div>
    </div>
  )
}

export default ProductListComponent