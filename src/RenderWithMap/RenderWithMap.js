import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    productList = [
        { id: 1, name: 'Iphone X', price: 1000, img: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg' },
        { id: 1, name: 'Iphone 11', price: 1100, img: "http://tanphatmobile.vn/hinh-anh/san-pham/1_55_5.jpg" },
        { id: 1, name: 'Iphone 12', price: 1300, img: 'https://salt.tikicdn.com/cache/w444/ts/product/0f/4a/19/e2c1e692c76e5aeb99baa2dcef13cdcb.jpg' },
    ]

    renderProduct = () => {
        // const arrDivProduct = [];

        // for (let i = 0; i < this.productList.length; i++) {
        //     let product = this.productList[i];

        //     const jsxDivProduct = <div className="col-4">
        //         <div className="card text-left">
        //             <img className="card-img-top" src={product.img} alt="1" />
        //             <div className="card-body">
        //                 <h4 className="card-title">{product.name}</h4>
        //                 <p className="card-text">{product.price}</p>
        //             </div>
        //         </div>
        //     </div>;
        //     arrDivProduct.push(jsxDivProduct);
        // }
        // return arrDivProduct;

        const contentJSX = this.productList.map((product, index) => {
            return <div key={index} className="col-4">
                <div className="card text-left">
                    <img className="card-img-top" src={product.img} alt="1" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>;
        })
        return contentJSX;
    }

    renderTableProduct = () => {
        return this.productList.map((product, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td> <img style={{ width: 200, height: 200 }} src={product.img} alt="1" /></td>
                <td>{product.price}</td>
            </tr>
        })

    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center display4">Danh sách sản phẩm</h1>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>img</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableProduct()}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
