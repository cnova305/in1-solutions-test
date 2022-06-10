import React, { useState, useEffect } from 'react';
import './ProductListPage.css'

import ProductListComponent from '../../components/ProductListComponent/ProductListComponent';

import Axios from "axios";

import urls from '../../config/urls';

import { Voucher } from '../../types/types';


const ProductListPage = () => {

  const [voucherData, setVoucherData] = useState<Voucher>({
    id: 0,
    name: '',
    description: '',
    hotelName: '',
    price: 0,
    variants: []
  })

  const [voucherList, setVoucherList] =useState<Array<Voucher>>([voucherData])

  const getVoucherList = async () => {
    Axios.get(
      urls.api
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
          voucherList.map((voucher, index) => {
            return (
              <div key={`voucher-${index}`} className='list_component_container'>
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