import React, { Component } from "react";

export default class AddCategoryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            attributes: [
                /*{
                    title: "attr1",
                    id: 0,
                    values: ["value1", "value2"],
                    newValue: ""
                },
                {
                    title: "attr2",
                    id: 1,
                    values: [],
                    newValue: ""
                }*/
            ],
            newAttribute: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);

        this.hanldeInputNewValue = this.hanldeInputNewValue.bind(this);
        this.handleAddNewValue = this.handleAddNewValue.bind(this);

        this.handleInputNewAttribute = this.handleInputNewAttribute.bind(this);
        this.handleAddNewAttribute = this.handleAddNewAttribute.bind(this);

        this.handleClickAddNewCategory = this.handleClickAddNewCategory.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    hanldeInputNewValue(event) {
        let attributes = this.state.attributes;
        attributes[event.target.name].newValue = event.target.value;
        this.setState({
            attributes: attributes
        });
    }

    handleAddNewValue(event) {
        if (this.state.attributes[event.target.name].newValue !== "") {
            let attributes = this.state.attributes;
            attributes[event.target.name].values.push(attributes[event.target.name].newValue);
            attributes[event.target.name].newValue = "";
            this.setState({
                attributes: attributes
            });
        }
    }

    handleInputNewAttribute(event) {
        this.setState({
            newAttribute: event.target.value
        })
    }

    handleAddNewAttribute() {
        if (this.state.newAttribute !== "") {
            let attributes = this.state.attributes;
            attributes.push({
                title: this.state.newAttribute,
                id: attributes.length,
                values: [],
                newValue: ""
            });
            this.setState({
                newAttribute: "",
                attributes: attributes
            });
        }
    }

    handleClickAddNewCategory() {
        if (this.state.title.length !== 0 && this.state.attributes.length !== 0) {
            let category = {};
            category.title = this.state.title;
            category.attributes = [];
            this.state.attributes.forEach(attribute => {
                if (attribute.values.length !== 0) {
                    category.attributes.push(
                        {
                            title: attribute.title,
                            id: attribute.id,
                            values: attribute.values
                        }
                    )
                }
            }
            );
            this.setState({
                title: "",
                attributes: [],
                newAttribute: ""
            });
            this.props.handleAddCategory(category);
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
                <ul>
                    {
                        this.state.attributes.map(attribute => {
                            return (
                                <div key={attribute.id}>
                                    <li>
                                        <label>{attribute.title}:</label>
                                    </li>
                                    <ul>
                                        {
                                            attribute.values.map(value => {
                                                return (
                                                    <li key={value}>{value}</li>
                                                );
                                            }
                                            )
                                        }
                                        <li>
                                            <input
                                                onChange={this.hanldeInputNewValue}
                                                type="text"
                                                placeholder="Новое значение"
                                                name={attribute.id}
                                                value={attribute.newValue}
                                            />
                                            <input
                                                onClick={this.handleAddNewValue}
                                                type="button"
                                                name={attribute.id}
                                                value="Добавить значение"
                                            />
                                        </li>
                                    </ul>
                                </div>

                            );
                        })
                    }
                    <li>
                        <input
                            onChange={this.handleInputNewAttribute}
                            type="text"
                            placeholder="Название нового аттрибута"
                            value={this.state.newAttribute}
                        />
                        <input
                            onClick={this.handleAddNewAttribute}
                            type="button"
                            value="Добавить аттрибут"
                        />
                    </li>
                </ul>
                <input
                    onClick={this.handleClickAddNewCategory}
                    type="button"
                    value="Добавить категорию"
                />
            </form>
        );
    }
}