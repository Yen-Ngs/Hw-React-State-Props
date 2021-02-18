import React, { Component } from 'react'
import ChGlProps from "./ChGlProps";

export default class ChangingGlasses extends Component {

    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ];

    state = {
        itemDetail: {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./glassesImage/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
    };
    renderItem = () => {
        return this.arrProduct.map((item, index) => {
            return (
                <div className="col-2" key={index}>
                    <ChGlProps
                        details={this.detail}
                        item={item} />
                </div>
            );
        });
    };

    detail = (itemClick) => {
        this.setState({
            itemDetail: itemClick,
        });
    };

    render() {
        return (
            <div>
                <div className="container" style={{
                    backgroundImage: `url("./glassesImage/background.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: 800,
                }}>
                    <h3 className="text-white py-2 text-center"
                        style={{ backgroundColor: "black", opacity: 0.5 }}>
                        Try Glasses Online
                </h3>
                    <div
                        className="col-6 m-auto"
                        style={{
                            backgroundImage: `url("./glassesImage/model.jpg")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "585px",
                            position: "relative",
                        }}
                    ></div>
                    <div className="row mt-5">
                        <div className="col-4">
                            <h3 className="text-center">{this.state.itemDetail.tenSP}</h3>
                            <img src={this.state.itemDetail.url}
                                style={{
                                    position: "absolute",
                                    backgroundSize: "cover",
                                    opacity: 0.7,
                                    top: "-200%",
                                    left: "98%",
                                    zIndex: 99
                                }} alt="abc" />
                        </div>
                        <div className="col-8">
                            <h3>Details</h3>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>ID</td>
                                        <td>{this.state.itemDetail.id}</td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td>{this.state.itemDetail.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>{this.state.itemDetail.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Detail</td>
                                        <td>{this.state.itemDetail.desc}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="row">
                        {this.renderItem()}
                    </div>


                </div>
            </div>

        )
    }
}
