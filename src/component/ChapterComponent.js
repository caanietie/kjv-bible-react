import { Component, createElement } from "react";
import FontSizeComponent from "./FontSizeComponent";
import PrevNextComponent from "./PrevNextComponent";

export default class ChapterComponent extends Component {
	render() {
		const { book_name: bookName,
			info_html: infoHTML, next_chapter: nextChapter,
			previous_chapter: previousChapter } = this.props.bibleData;

		const prevNextProps = {
			nextProps: {
				bookName: nextChapter ? nextChapter.book_name : "",
				chapter: nextChapter ? nextChapter.chapter : ""
			},
			previousProps: {
				bookName: previousChapter ? previousChapter.book_name : "",
				chapter: previousChapter ? previousChapter.chapter : "",
			}
		};

		const { requestChapter, changeFontSize, fontSize } = this.props;

		return createElement(
			"div",
			null,
			createElement(
				"div",
				{
					style: {
						display: "flex", marginRight: 50,
						justifyContent: "space-between"
					}
				},
				createElement(
					"h3",
					{ style: { fontSize: 30 } },
					bookName ? bookName.toUpperCase() : ""
				),
				createElement(
					FontSizeComponent, { changeFontSize }, null
				)
			),
			createElement(
				"div",
				{
					style: { fontSize },
					dangerouslySetInnerHTML: { __html: infoHTML }
				},
				null
			),
			createElement(
				PrevNextComponent,
				{ ...prevNextProps, requestChapter },
				null
			)
		)
	}
}
