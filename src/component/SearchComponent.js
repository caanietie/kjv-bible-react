import { Component, createElement } from "react";
import FontSizeComponent from "./FontSizeComponent";

export default class SearchComponent extends Component {
	render() {
		const { bibleUrl, changeFontSize, fontSize } = this.props;
		const searchValue = this.props.bibleData.search.value;
		const searchData = this.props.bibleData.search.data.map(data => {
			const { book_name: bookName, chapter,
				verse, verse_id: verseId, info_text: infoText } = data;
			return createElement(
				"tr",
				{ key: verseId },
				createElement(
					"td",
					null,
					createElement(
						"a",
						{ href: `${bibleUrl}/${bookName}/${chapter}#${verse}` },
						`${bookName} ${chapter}:${verse}`
					)
				),
				createElement("td", null, `${infoText}`)
			);
		});
		const searchLength = this.props.bibleData.search.data.length;
		const searchMessage = searchLength === 0 ? "are no results" :
			searchLength === 1 ? "is 1 result" :
				`are ${searchLength} results`;

		return createElement(
			"div",
			{ style: { fontSize } },
			createElement(
				"div",
				{
					style: {
						display: "flex", marginRight: 50,
						justifyContent: "space-between"
					}
				},
				createElement(
					"div",
					null,
					`There ${searchMessage} for `,
					createElement("b", null, `${searchValue}`),
				),
				createElement(FontSizeComponent, { changeFontSize }, null),
			),
			createElement(
				"table",
				null,
				createElement("tbody", null, searchData)
			)
		)
	}
}
