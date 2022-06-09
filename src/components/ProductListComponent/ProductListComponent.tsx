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
    <div>{voucher.name}</div>
  )
}

export default ProductListComponent