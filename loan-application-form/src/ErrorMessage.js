import "./ErrorMessage.css"

export default function ErrorMessage({message}) {
    return (
        <div>
            <p className="error-message">{ message }</p>
        </div>
    )
}