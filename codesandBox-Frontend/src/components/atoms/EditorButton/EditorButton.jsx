import './EditorButton.css'

export const EditorButton = ({ isActive}) => {

    function handleClick() {
        //TODO:
    }
    return (
        <button
            className="Editor-button"
            style={{
                color: isActive ? 'white' : '#959eba',
                backgroundColor: isActive ? '#413e59' : '#5c5b66',
                borderTop: isActive ? '2px solid #796cd9' : 'none'
            }}
            onClick={handleClick}
        >
            file.js
        </button>
    )
}