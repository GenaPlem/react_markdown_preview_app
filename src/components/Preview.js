import {marked} from "marked";

export const Preview = ({text}) => {
    return (
        <div className="preview">
            <h2 className="preview__header">Preview</h2>
            <div className="preview__content" id="previewElement"
                 dangerouslySetInnerHTML={{__html: marked.parse(text)}}>
            </div>
        </div>
    )
}