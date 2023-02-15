import { Component, createElement } from "react";
import zoomIn from "../assets/zoom-in.png";
import zoomOut from "../assets/zoom-out.png";

export default class FontSizeComponent extends Component {
    render() {
        const { changeFontSize } = this.props;

        return createElement(
            "div",
            { style: { display: "flex", gap: 10, alignSelf: "center" } },
            createElement(
                "img",
                {
                    alt: "Increase font size",
                    src: zoomIn, width: 22, height: 22,
                    className: "chapterComponent__zoom",
                    onClick: () => changeFontSize(true)
                }, null
            ),
            createElement(
                "img",
                {
                    alt: "Decrease font size",
                    src: zoomOut, width: 22, height: 22,
                    className: "chapterComponent__zoom",
                    onClick: () => changeFontSize(false)
                }, null
            )
        )
    }
}
