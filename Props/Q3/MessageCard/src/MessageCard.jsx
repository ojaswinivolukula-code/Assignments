function MessageCard({title,message}){
    return(
        <div style={{background:'#00001a',padding:'15px',color:'white',border:'1px solid',margin:'10px'}}>
            <h3>{title}</h3>
            <p> {message}</p>
        </div>
    )
}
export default MessageCard;