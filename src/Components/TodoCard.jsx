export default function TodoCard(props){
    const {children,handledelete ,idx,handleedit} = props
    return(
        <div className="list-box">
            <li className="list-group-item list-group-item-action my-list-item">{children}

        <div className="icons">
            <button className="btn" onClick={() => {
                handleedit(idx)
            }}>
            <i className="fa fa-edit edit-i"></i>
        </button>
        
        <button className="btn" onClick={() => {
            handledelete(idx)
        }}>
        <i className="fa fa-trash-can trash-i"></i>
        </button>
        
        </div>
        
        </li>
        </div>
        
    )
}