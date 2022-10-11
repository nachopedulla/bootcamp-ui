import {React, useRef} from "react";

const TextArea = ({query, changeQueryHandler}) => {

    const codeAreaRef = useRef();

    const onKeyDownHandler = (event) => {
        if (event.key == 'Tab') {
            event.preventDefault()
            changeQueryHandler(event.shiftKey ? removeTab(event) : addTab(event))
        }
    }

    const removeTab = event => {
        const value = codeAreaRef.current.value;
        const selectionStart = codeAreaRef.current.selectionStart;
        const selectionEnd = codeAreaRef.current.selectionEnd;
    
        const beforeStart = query.substring(0, selectionStart).split('').reverse().join('');
        const indexOfTab = beforeStart.indexOf('  ');
        const indexOfNewline = beforeStart.indexOf('\n');
    
        codeAreaRef.current.selectionStart = selectionStart - 2;
        codeAreaRef.current.selectionEnd = selectionEnd - 2;

        if (indexOfTab !== -1 && indexOfTab < indexOfNewline) {
            return  beforeStart.substring(indexOfTab + 2).split('').reverse().join('') +
                    beforeStart.substring(0, indexOfTab).split('').reverse().join('') +
                    value.substring(selectionEnd);
        }

        return query
    }

    const addTab = event => {
        const { selectionStart, selectionEnd } = event.target;
        const newText = `${query.substring(0, selectionStart)}  ${query.substring(selectionEnd, query.length)}`;
      
        codeAreaRef.current.focus();
        codeAreaRef.current.value = newText;
      
        codeAreaRef.current.setSelectionRange(
            selectionStart + 2,
            selectionStart + 2
        );
        return newText;
    }

    return (
        <textarea 
            className='textArea' 
            value={query}
            ref={codeAreaRef}
            onKeyDown={onKeyDownHandler}
            onChange={({target}) => changeQueryHandler(target.value)}
        />
    )
}
export default TextArea;