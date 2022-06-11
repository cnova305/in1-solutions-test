import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductListComponent.css';

import { Voucher } from '../../types/types';

interface ProductListComponentProps {
  voucher: Voucher;
}

const ProductListComponent = ({
  voucher,
  ...props
}:ProductListComponentProps) => {

  const navigator = useNavigate();

  const [current, setCurrent] = useState(0);
  const length = voucher.variants?.length;


  function selectVariant(e: React.ChangeEvent<HTMLSelectElement>) {
    setCurrent(Number(e.target.value))
  }

  return (
    
    <>
      {length === 0 && (
        <div className='list_component_block'>
          {/* <img src={voucher.voucherImageUrl} alt='voucher diagram' /> */}
          <div className='list_component_block_details'>
            <h1>
              {voucher.name}
            </h1>
          </div>
          <div className='list_component_block_price'>
              <div className='list_component_block_price_container'>
                <div>
                  <span className='list_component_block_price_container_currency'>{voucher.currency}</span>
                  <span className='list_component_block_price_container_price'>{voucher.displayPrice}</span>
                </div>
                <div onClick={() => {
                  navigator(`/product/${voucher.id?.toString()}`)
                }} className='list_component_block_price_container_button'>

                </div>
                
              </div>
          </div>
        </div>
      )}

      {length !== 0 && (
        <>
          {voucher.variants.map((variant, index) => {
            return (
              <div className={index === current ? 'list_component_block_variant_active': 'list_component_block_variant_inactive'} key={index}>
               {current === index && (
                  <div className='list_component_block'>
                    {/* <img src={voucher.voucherImageUrl} alt='voucher diagram' /> */}
                    <div className='list_component_block_details'>
                      <div className='list_component_block_details_variant_container'>
                        <select onChange={selectVariant}>
                          {voucher.variants &&
                            voucher.variants.map((variantselector, index) => {
                              return (
                                <option value={index} key={`variant-${index}`}>
                                  {variantselector.name}
                                </option>
                              )
                            })}
                        </select>
                      </div>
                    </div>
                    <div className='list_component_block_price'>
                        <div className='list_component_block_price_container'>
                          <div>
                            <span className='list_component_block_price_container_currency'>{voucher.currency}</span>
                            <span className='list_component_block_price_container_price'>{variant.price}</span>
                          </div>
                          <div className='list_component_block_price_container_button'></div>
                          
                        </div>
                    </div>
                  </div>
                 )}
            </div>
            )}
          )}
        </>
      )}
    </>
  )
}

export default ProductListComponent
