

export default function Todoinput(props){
    const {addlist,newval,setnewval} = props
    
    return(
        <>
        <div className="heading">
            <h1 className="lead">TO-DO</h1>
        </div>
         <div className="head">
            <input type="text" placeholder="Enter todo item.." className="form-control"
              value={newval} onChange={(e) => {
                setnewval(e.target.value)
              }
              }  
            />
            <button className="btn btn-outline-secondary my-btn" onClick={() => {
                addlist(newval)
                setnewval('')
            }}
            >ADD</button>

        </div>
        </>
       
    )
}