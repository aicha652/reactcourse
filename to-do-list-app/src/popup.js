import "./popup.css"

export default function Popup({title, detail}) {
    return(
        <div className="container-popup">
            <h3>تعديل المهمة</h3>
            <h3>{title}</h3>
            <h3>{detail}</h3>
        </div>
    )
}