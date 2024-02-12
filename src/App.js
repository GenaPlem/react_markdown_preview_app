import './App.scss';
import {Editor} from "./components/Editor";
import {Preview} from "./components/Preview";
import {useState} from "react";
import {marked} from "marked";
import hljs from 'highlight.js';
import {initialMarkdown} from "./initialMarkdown";

function App() {
    const [markdown, setMarkdown] = useState(initialMarkdown)

    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        highlight: function (code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, {language}).value;
        },
        pedantic: false,
        gfm: true,
        breaks: true,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
    });

    const setMarkdownText = (value) => {
        setMarkdown(value)
    }

    return (
        <div className="App">
            <h1 className="title">Markdown Previewer</h1>
            <Editor setMarkdownText={setMarkdownText} text={markdown}/>
            <Preview text={markdown}/>
        </div>
    );
}

export default App;
