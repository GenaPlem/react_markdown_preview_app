import './App.scss';
import {Editor} from "./components/Editor";
import {Preview} from "./components/Preview";

function App() {
    return (
        <div className="App">
            <h1 className="title">Markdown Previewer</h1>
            <Editor/>
            <Preview/>
        </div>
    );
}

export default App;
