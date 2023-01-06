import "./App.css";
import { Component, createElement } from "react";
import SearchComponent from "./component/SearchComponent";
import FooterComponent from "./component/FooterComponent";
import ChapterComponent from "./component/ChapterComponent";

export default class BibleApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1, book_id: 1, bookName: "Genesis", chapter: 1,
      infoHTML: "", previousChapter: {}, nextChapter: {}
    };
  }
  render() {
    return createElement(
      "div",
      null,
      createElement(
        SearchComponent,
        {
          submitRequest: book => this.submitRequest(book),
          searchBible: searchVal => this.searchBible(searchVal)
        },
        null
      ),
      createElement(
        ChapterComponent,
        {
          bookName: this.state.bookName,
          chapter: this.state.chapter,
          infoHTML: this.state.infoHTML,
          prevNextProps: {
            nextProps: {
              bookName: this.state.nextChapter.book_name,
              chapter: this.state.nextChapter.chapter,
            },
            previousProps: {
              bookName: this.state.previousChapter.book_name,
              chapter: this.state.previousChapter.chapter,
            },
            requestChapter: book => this.submitRequest(book)
          },
        },
        null
      ),
      createElement(
        FooterComponent,
        null,
        null
      )
    )
  }
  searchBible(searchVal) {
    if (!searchVal.trim()) return;
    let msg = "Traverse the wordlist database and display results";
    msg += `for ${searchVal}`
    alert(msg)
  }
  submitRequest({ bookName, chapter }) {
    const addr = "http://192.168.43.69:3000/kjv_bible/api/kjv_bible";
    fetch(`${addr}/${bookName}/${chapter}`)
      .then(response => response.json())
      .then(response => this.setState({
        id: response.id,
        book_id: response.book_id,
        bookName: response.book_name,
        chapter: response.chapter,
        infoHTML: response.info_html,
        nextChapter: response.next_chapter,
        previousChapter: response.previous_chapter
      }))
      .catch(error => { alert(error.message) })
  }
  componentDidMount() {
    this.submitRequest(this.state);
  }
}