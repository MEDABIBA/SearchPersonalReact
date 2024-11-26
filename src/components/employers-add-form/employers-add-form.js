 import {Component} from 'react'
import './employers-add-form.css'
class EmployersAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addForm = (e)=>{
        if(this.state.name !== ''){
            console.log('ok')
        }
    }
    onSubmit = (e)=>{
        e.preventDefault();
        if(this.state.name.length <= 3 || this.state.salary === '' || this.state.salary <= 0 ){
            this.setState({
                error: true
            })
        }else{
            this.props.onAdd(this.state.name, this.state.salary);
            
            this.setState({
                name: '',
                salary: '',
                error: false
            }) 
        }
        
    }
    render(){
        let {name, salary, error} = this.state
        let button ="btn btn-outline-light "
        if(error === true){
            button += 'red'
        }
        return (
          
            <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" 
                    value={name}
                    name="name"
                    onChange={this.onValueChange}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" 
                    value={salary}
                    name="salary"
                    onChange={this.onValueChange}/>

                <button type="submit"
                        className={button}
                        data-toggle='button'
                        >Добавить</button>
            </form>
        </div>
        )
    }
        
    }
    export default EmployersAddForm;