import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

import ProductPageComponent from '../../components/ProductPageComponent/ProductPageComponent';


import Axios from "axios";

import urls from '../../config/urls';

import { Voucher } from '../../types/types';

const ProductPage = () => {

  const {id} = useParams();

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

  const currentVoucher = voucherList.find(voucher => voucher.id === Number(id)) || voucherData

  return (
    <div className='product_page_container'>
      <div className='product_container'>
        <div className='product_component_container'>
          <ProductPageComponent voucher={currentVoucher} />
        </div>
      </div>
    </div>
  )
}

export default ProductPage