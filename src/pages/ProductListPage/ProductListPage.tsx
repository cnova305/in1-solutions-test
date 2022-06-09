import React, { useState, useEffect } from 'react';
import './ProductListPage.css'

import ProductListComponent from '../../components/ProductListComponent/ProductListComponent';

import Axios from "axios";

import { Voucher } from '../../types/types';


const ProductListPage = () => {

  const [voucherData, setVoucherData] = useState<Voucher>({
    id: 0,
    name: '',
    description: '',
    hotelName: '',
    price: 0,
  })

  const [voucherList, setVoucherList] =useState<Array<Voucher>>([voucherData])

  const getVoucherList = async () => {
    Axios.get(
      'https://shop.bookin1.com/api/property/11128/allvouchers'
    ).then((response) => {
      console.log(response.data.vouchers)
      setVoucherData(response.data.vouchers[0])
      setVoucherList(response.data.vouchers)
    })
  }

  useEffect(() => {
    getVoucherList();
  }, []);


  return (
    <div className='list_page_container'>
      <div className='list_container'>
        {voucherList &&
          voucherList.map((voucher) => {
            return (
              <div className='list_component_container'>
                <ProductListComponent voucher={voucher} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductListPage