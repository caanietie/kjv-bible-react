import { Component, createElement } from "react";

export default class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { bookName: "Genesis", chapter: 1, searchVal: "" };
    }

    render() {
        const { requestChapter, searchBible } = this.props;

        return createElement(
            "div",
            { style: { display: "flex", justifyContent: "space-between" } },
            createElement(
                "form",
                {
                    onSubmit: event => {
                        event.preventDefault();
                        requestChapter(this.state.bookName, this.state.chapter);
                    }
                },
                createElement(
                    "input",
                    {
                        value: this.state.bookName,
                        type: "text", placeholder: "Book",
                        className: "searchComponent_bookName",
                        onChange: ev => {
                            this.setState({ bookName: ev.target.value })
                        }
                    }, null
                ),
                createElement(
                    "input",
                    {
                        className: "searchComponent_chapter",
                        type: "number", placeholder: "Chapter",
                        min: 1, max: 176, value: this.state.chapter,
                        onChange: ev => {
                            this.setState({ chapter: ev.target.value })
                        }
                    }, null
                ),
                createElement(
                    "button",
                    {
                        type: "submit",
                        className: "searchComponent_submitRequest"
                    },
                    "Read"
                )
            ),
            createElement(
                "form",
                {
                    onSubmit: event => {
                        event.preventDefault();
                        searchBible(this.state.searchVal.trim());
                    }
                },
                createElement(
                    "input",
                    {
                        value: this.state.searchVal,
                        type: "text", placeholder: "Search",
                        className: "searchComponent_bookName",
                        onChange: ev => {
                            this.setState({ searchVal: ev.target.value })
                        }
                    }, null
                ),
                createElement(
                    "button",
                    {
                        type: "submit",
                        className: "searchComponent_submitRequest"
                    },
                    "Search"
                )
            )
        )
    }
}
