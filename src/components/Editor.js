export const Editor = ({setMarkdownText, text}) => {
    return (
        <div className="editor">
            <h2 className="editor__header">Editor</h2>
            <textarea className="editor__textarea" onChange={(e) => setMarkdownText(e.target.value)}
                      value={text}></textarea>
        </div>
    )
}