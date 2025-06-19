export default function Article({name, email, birthday, content="no content", children}){
    return(
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{birthday}</p>
            <p>{content}</p>
            <p>{children}</p>
        </div>
    )
}