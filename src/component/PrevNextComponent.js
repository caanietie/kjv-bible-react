import { Component, createElement } from "react";

export default class PrevNextComponent extends Component {
  render() {
    const { bookName: prevBookName,
      chapter: prevChapter } = this.props.previousProps;
    const { bookName: nextBookName,
      chapter: nextBookChapter } = this.props.nextProps;
    const { requestChapter } = this.props;
    return createElement(
      "div",
      { className: "prevNextComponent" },
      createElement(
        "div",
        { className: "prevNextComponent_prevNext" },
        createElement(
          "button",
          {
            onClick: event => {
              requestChapter(this.props.previousProps);
              event.target.parentElement.parentElement
                .parentElement.scrollIntoView()
            }
          },
          `${prevBookName} ${prevChapter}`,
        ),
        createElement(
          "span",
          null,
          "Previous Chapter"
        )
      ),
      createElement(
        "div",
        { className: "prevNextComponent_prevNext" },
        createElement(
          "button",
          {
            onClick: event => {
              requestChapter(this.props.nextProps);
              event.target.parentElement.parentElement
                .parentElement.scrollIntoView()
            }
          },
          `${nextBookName} ${nextBookChapter}`,
        ),
        createElement(
          "span",
          null,
          "Next Chapter"
        )
      )
    )
  }
}