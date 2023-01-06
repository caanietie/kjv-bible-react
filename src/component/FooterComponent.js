import { Component, createElement } from "react";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";

export default class FooterComponent extends Component {
  render() {
    return createElement(
      "div",
      { className: "footerComponent", "data-test-id": "footerComponent" },
      createElement(
        "small",
        { style: { textAlign: "center" } },
        "Developed by Anietie",
        createElement(
          "div",
          { style: { display: "flex", justifyContent: "center", gap: "4%" } },
          createElement(
            "a",
            { href: "https://www.twitter.com/caanietie" },
            createElement(
              "img",
              {
                width: 20, height: 20, src: twitter,
                alt: "twitter handle", "data-testid": "socialHandle"
              },
              null
            )
          ),
          createElement(
            "span",
            null,
            "|"
          ),
          createElement(
            "a",
            { href: "https://www.github.com/caanietie" },
            createElement(
              "img",
              {
                width: 20, height: 20, src: github,
                alt: "github handle", "data-testid": "socialHandle"
              },
              null
            )
          )
        )
      )
    )
  }
}