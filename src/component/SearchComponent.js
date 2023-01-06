import { Component, createElement } from "react";

export default class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { bookName: "Genesis", chapter: 1, search: "" };
  }
  render() {
    return createElement(
      "div",
      { style: { display: "flex", justifyContent: "space-between" } },
      createElement(
        "form",
        {
          onSubmit: event => {
            event.preventDefault();
            this.props.submitRequest(this.state);
          }
        },
        createElement(
          "input",
          {
            value: this.state.bookName,
            type: "text", placeholder: "Book",
            className: "searchComponent_bookName",
            onChange: event => this.setState({ bookName: event.target.value })
          },
          null
        ),
        createElement(
          "input",
          {
            className: "searchComponent_chapter",
            type: "number", placeholder: "Chapter",
            min: 1, max: 176, value: this.state.chapter,
            onChange: event => this.setState({ chapter: event.target.value })
          },
          null
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
            this.props.searchBible(this.state.search);
          }
        },
        createElement(
          "input",
          {
            value: this.state.search,
            type: "text", placeholder: "Search",
            className: "searchComponent_bookName",
            onChange: event => this.setState({ search: event.target.value })
          },
          null
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