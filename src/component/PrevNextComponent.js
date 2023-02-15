import { Component, createElement } from "react";

export default class PrevNextComponent extends Component {
    render() {
        const { bookName: prevBookName,
            chapter: prevChapter } = this.props.previousProps;
        const { bookName: nextBookName,
            chapter: nextChapter } = this.props.nextProps;
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
                            requestChapter(prevBookName, prevChapter);
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
                            requestChapter(nextBookName, nextChapter);
                            event.target.parentElement.parentElement
                                .parentElement.scrollIntoView()
                        }
                    },
                    `${nextBookName} ${nextChapter}`,
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
