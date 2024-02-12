import './App.scss';
import {Editor} from "./components/Editor";
import {Preview} from "./components/Preview";
import {useState} from "react";

function App() {
    const [markdown, setMarkdown] = useState('Init')

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
