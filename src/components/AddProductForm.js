import React, { Component, Fragment } from "react";
import getDateForInput from "../utils/getDateForInput";

export default class AddProductForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            createDate: new Date(),
            category: "",
            attributeValues: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleSelectAttrributeValue = this.handleSelectAttrributeValue.bind(this);

        this.handleClickAddProduct = this.handleClickAddProduct.bind(this);
    }

    handleSelectAttrributeValue(event) {
        let attributeValues = this.state.attributeValues;
        attributeValues.push({
            attributeTitle: event.target.name,
            attributeValue: event.target.value
        });
        this.setState({
            attributeValues: attributeValues
        });
    }

    handleInputChange(event) {
        if (event.target.value) {
            this.setState({
                [event.target.name]: event.target.value
            });
        } else {
            this.setState({
                category: ""
            });
        }
    }

    handleClickAddProduct() {
        if (this.state.title !== "" && this.state.category !== "" && 
            this.state.attributeValues.length === this.props.categories[this.state.category].attributes.length) {
            this.props.handleAddPoduct(this.state);
            this.setState({
                title: "",
                createDate: new Date(),
                category: "",
                attributeValues: []
            });
        }


    }

    render() {
        return (
            <form className="add">
                <label>
                    Название:
                    <input
                        onChange={this.handleInputChange}
                        type="text"
                        name="title"
                        value={this.state.title}
                    />
                </label>
                <label>
                    Дата создания:
                    <input
                        onChange={this.handleInputChange}
                        type="date"
                        name="createDate"
                        value={getDateForInput(this.state.createDate)}
                    />
                </label>
                <label>Выберите категорию:</label>
                <select
                    onChange={this.handleInputChange}
                    name="category"
                    value={this.state.category}
                >
                    <option
                        value=""
                    >Выберите категорию
                    </option>
                    {
                        this.props.categories.map((category, index) => {
                            return (
                                <option
                                    key={index}
                                    value={index}
                                >
                                    {category.title}
                                </option>
                            );
                        }
                        )
                    }
                </select>
                {
                    this.state.category !== "" && this.props.categories[this.state.category].attributes
                        .map(attribute => {
                            return (
                                <Fragment>
                                    <label>{attribute.title}</label>
                                    <select
                                        onChange={this.handleSelectAttrributeValue}
                                        name={attribute.title}
                                    >
                                        <option>Выберите значение</option>
                                        {

                                            attribute.values.map(value => {
                                                return (
                                                    <option key={value}>{value}</option>
                                                );
                                            })
                                        }
                                    </select>
                                </Fragment>
                            );
                        })
                }

                <input
                    onClick={this.handleClickAddProduct}
                    type="button"
                    value="Добавить товар"
                />
            </form>
        );
    }
}