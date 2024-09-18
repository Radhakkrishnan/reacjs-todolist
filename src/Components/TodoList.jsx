import TodoCard from "./TodoCard"

export default function TodoList(props){
    const {list} = props
    
    return(
        <ul className="list-group my-list">
            {list.map((val,validx) => {
                return(
                    <TodoCard {...props} key = {validx} idx={validx}>
                        <p>{val}</p>
                    </TodoCard>    
                )
            })}
        </ul>
    )
}
