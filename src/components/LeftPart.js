import React, { Component } from "react";
import ChoiseOfFormType from "./ChoiseOfFormType";
import AddCategoryForm from "./AddCategoryForm";
import AddProductForm from "./AddProductForm";

export default class LeftPart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formType: "product"
        }

        this.onChangeFormType = this.onChangeFormType.bind(this);
    }

    onChangeFormType(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="left-part">
                <ChoiseOfFormType
                    onChange={this.onChangeFormType}
                    formType={this.state.formType}
                />
                {
                    this.state.formType === "category" && <AddCategoryForm
                        handleAddCategory={this.props.handleAddCategory}
                    />
                }
                {
                    this.state.formType === "product" && <AddProductForm
                        products={this.props.products}
                        categories={this.props.categories}
                        handleAddPoduct={this.props.handleAddPoduct}
                    />
                }
            </div>
        );
    }
}