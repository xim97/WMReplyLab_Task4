import React, { Component } from "react";

export default class RightPart extends Component {
    render() {
        return (
            <ol>
                {
                    this.props.products.map(product => {
                        return (
                            <li>
                                <p>{product.product.title}</p>
                                <p>{product.product.createDate.toLocaleString()}</p>                                
                                {
                                    product.product.attributeValues.map(element => {
                                        return (
                                            <p key={element.attributeTitle}>{element.attributeTitle}:{element.attributeValue}</p>
                                        );
                                    })
                                }
                            </li>
                        );
                    })
                }
            </ol>
        );
    }
}