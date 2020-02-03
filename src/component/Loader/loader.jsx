import React from 'react'
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
const override = css`
    display: block;
    margin-top: 130px;
    margin-left: 100px;
    border-color: blue;
`;


const Loader = ({ isLoading }) => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
            <ClipLoader
                css={override}
                sizeUnit={"px"}
                size={130}
                color={'#980001'}
                loading={isLoading}
            />
            </div>
            <div className="col-sm-4"></div>
            
            </div>
          </div>
    )
}

export default Loader