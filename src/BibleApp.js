import "./App.css";
import { Component, createElement } from "react";
import FormComponent from "./component/FormComponent";
import SearchComponent from "./component/SearchComponent";
import FooterComponent from "./component/FooterComponent";
import ChapterComponent from "./component/ChapterComponent";

export default class BibleApp extends Component {
    constructor(props) {
        super(props);
        this.state = { bibleData: {}, isSearch: false, fontSize: 20 };
        this.bibleUrl = "http://localhost:3000/kjv_bible/api/kjv_bible";
    }

    render() {
        let bibleBody;
        if (this.state.isSearch) bibleBody = createElement(
            SearchComponent,
            {
                bibleUrl: this.bibleUrl,
                fontSize: this.state.fontSize,
                bibleData: this.state.bibleData,
                changeFontSize: step => this.changeFontSize(step)
            }, null
        )
        else bibleBody = createElement(
            ChapterComponent,
            {
                fontSize: this.state.fontSize,
                bibleData: this.state.bibleData,
                changeFontSize: step => this.changeFontSize(step),
                requestChapter: (bk, chp) => this.submitRequest(bk, chp)
            }, null
        )
        return createElement(
            "div",
            null,
            createElement(
                FormComponent,
                {
                    searchBible: word => this.searchBible(word),
                    requestChapter: (bk, chp) => this.submitRequest(bk, chp)
                }, null
            ),
            bibleBody,
            createElement(FooterComponent, null, null)
        )
    }

    componentDidMount() {
        this.submitRequest("Genesis", 1);
    }

    submitRequest(bookName, chapter) {
        if (bookName.trim() && chapter)
            fetch(`${this.bibleUrl}/${encodeURIComponent(bookName)}/${chapter}`)
                .then(response => response.json())
                .then(response => this.setState({
                    isSearch: false,
                    bibleData: response
                }))
                .catch(error => { alert(error.message) })
    }

    searchBible(searchVal) {
        if (searchVal)
            fetch(`${this.bibleUrl}/search/${encodeURIComponent(searchVal)}`)
                .then(response => response.json())
                .then(response => this.setState({
                    isSearch: true,
                    bibleData: response
                }))
                .catch(error => { alert(error.message) })
    }

    changeFontSize(step) {
        if (step)
            this.setState({ fontSize: this.state.fontSize + 1 })
        else if (this.state.fontSize > 15)
            this.setState({ fontSize: this.state.fontSize - 1 })
    }
}
