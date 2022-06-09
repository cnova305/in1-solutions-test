import React, { useState, useEffect } from 'react';
import './ProductListPage.css'

import ProductListComponent from '../../components/ProductListComponent/ProductListComponent';

import Axios from "axios";

import { Voucher } from '../../types/types';


const voucher = {
  id: 51203,
  name: 'Tintswalo Atlantic South African Residents Winter Rate Voucher',
  description: '',
  hotelName:"Tintswalo Atlantic",
  price :6100.0,
}

const ProductListPage = () => {

  const [voucherData, setVoucherData] = useState<Voucher>({
    id: 0,
    name: '',
    description: '',
    hotelName: '',
    price: 0,
  })

  // const [voucherList, setVoucherList] =useState<Array<Voucher>>([voucherData])

  const getVoucherList = async () => {
    Axios.get(
      'https://shop.bookin1.com/api/property/11128/allvouchers'
    ).then((response) => {
      console.log(response.data.vouchers)
    })
  }

  getVoucherList()


  return (
    <div className='list_page_container'>
      <div className='list_container'>
        <div className='list_component_container'>
          <ProductListComponent voucher={voucher} />
        </div>
      </div>
    </div>
  )
}

export default ProductListPage