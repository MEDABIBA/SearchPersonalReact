import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name: 'John. C', salary:800, encrease: false, rise: true, id: 1, error: false},
                {name: 'Alex.M', salary:1000, encrease: true, rise: false, id: 2},
                {name: 'Artem.M', salary:600, encrease: false, rise: false, id: 3} 
            ], 
            term: '',
            filter: 'all'
        }
        this.maxId = 4
    }
    deleteItem = (id)=>{
        this.setState(({data})=>{
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name,salary)=>{  
        const newItem = {
            name,
            salary,
            encreasse: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data})=>{
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })

        
    }

    onToggleProp = (id, prop) =>{
        this.setState(({data})=>({  //ВТОРОЙ ВАРИАНТ  ВЫПОЛНЕНИЯ ЗАДАЧИ
            data: data.map(item =>{
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                    return item;
            })
            }))
            // this.setState(({data})=>{        //ПЕРВЫЙ ВАРИАНТ  ВЫПОЛНЕНИЯ ЗАДАЧИ
            //     const index = data.findIndex((elem)=> elem.id === id) // Находим индекс елемента 
            //     const old = data[index];
            //     const newItem = {...old, encrease: !old.encrease};
            //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)] // создаём новый массив данных без его мутации     
            //     return {
            //         data: newArr
            //     }
            // })  
         
    }

        searchMap = (items, term)=>{
            if(term.length === 0){
                return items;
            }
                return  items.filter(item=>{
                    return item.name.indexOf(term) > -1
                })
            
        }

        onUpdateSearch = (term)=>{
            this.setState({term: term})
    }

    filterPost = (items, filter)=>{
        
       switch(filter){
        case 'all':
            return items.filter(item=>item);
        case 'rise':
            return items.filter(item=>item.rise);
            case 'moreThen1000':
                return items.filter(item=> item.salary >= 1000);
                default:
                    return items
       }
    }

    onFilterSelect = (filter)=>{
        this.setState({filter}) 
    }
    render(){   
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item=>item.encrease).length
        const {term, data, filter} = this.state
        const visibleData = this.filterPost(this.searchMap(data, term), filter)

    return (
       
        <div className= 'app'>
            <AppInfo
            employees={employees}
            increased={increased}/>
            <div className="search-panel">
                <SearchPanel
                onUpdateSearch={this.onUpdateSearch}/>  
                <AppFilter
                filterPost={this.onFilterSelect}
                />
            </div>
            <EmployersList 
            data={visibleData}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}
            />
            <EmployersAddForm onAdd={this.addItem}/>
        </div>
    );
}

}

export default App  