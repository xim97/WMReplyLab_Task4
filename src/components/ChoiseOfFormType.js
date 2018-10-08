import React, { Component } from "react";

export default class ChoiseOfFormType extends Component {
    
    render() {
        return (
            <div className="choise-form-type">
                <label>
                    <input
                        type="radio"
                        name="formType"
                        value="category"
                        onChange={this.props.onChange}
                        checked={this.props.formType === "category"}
                    />
                    Категория
                </label>
                <label>
                    <input
                        type="radio"
                        name="formType"
                        value="product"
                        onChange={this.props.onChange}
                        checked={this.props.formType === "product"}
                    />
                    Товар
                </label>
            </div>
        );
    }
}