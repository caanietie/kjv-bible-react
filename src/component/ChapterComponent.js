import { Component, createElement } from "react";
import FontSizeComponent from "./FontSizeComponent";
import PrevNextComponent from "./PrevNextComponent";

export default class ChapterComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { fontSize: 20 }
	}
	render() {
		return createElement(
			"div",
			null,
			createElement(
				"div",
				{ style: { display: "flex", justifyContent: "space-between", marginRight: 50 } },
				createElement(
					"h3",
					{ style: { fontSize: 30 } },
					this.props.bookName.toUpperCase()
				),
				createElement(
					FontSizeComponent,
					{ changeFontSize: step => this.changeFontSize(step) },
					null
				)
			),
			createElement(
				"div",
				{
					style: { fontSize: this.state.fontSize },
					dangerouslySetInnerHTML: { __html: this.props.infoHTML }
				},
				null
			),
			createElement(
				PrevNextComponent,
				{ ...this.props.prevNextProps },
				null
			)
		)
	}
	changeFontSize(step) {
		if (step)
			this.setState({ fontSize: this.state.fontSize + 1 })
		else if (this.state.fontSize > 15)
			this.setState({ fontSize: this.state.fontSize - 1 })
	}
}
