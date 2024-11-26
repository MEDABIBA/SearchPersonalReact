import EmployersListItem from "../employers-list-item/employers-list-item" 
import './employers-list.css'
    const EmployersList = ({data, onDelete, onToggleProp})=>{
        const elements = data.map((item)=>{
            const {id, ...props} = item
            return (
                <EmployersListItem
                 key={id}
                 {...props}
                 onDelete={()=> onDelete(id)}
                onToggleProp={(e)=>onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}    // получаем таргет клика
                 
                 />
            )
        })
        return(
            <ul className="app-list list-group"> 
                {elements}  
            </ul>
        )
    }
    export default EmployersList