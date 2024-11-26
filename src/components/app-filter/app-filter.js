import { Component } from 'react';
import './app-filter.css'
    class AppFilter extends Component {
        constructor(props){
            super(props)
        }
        
        filterPost = (e)=>{
            let buttonId = e.target.dataset.id
            let filter = ''
            if(buttonId === '1'){
            //    this.setState({filter: 'rise'})
            filter = 'rise'
            }
        else if(buttonId === '2'){
            // this.setState({filter: 'moreThen1000'})
            filter = 'moreThen1000'
        }else{
            // this.setState({filter: 'all'})
             filter = 'all'
        }
        this.props.filterPost(filter)
       }
    
        render(){
           
            
            return(
                <div className="btn-group">
                    <button
                     className="btn btn-light"
                    type="button"
                    data-id='0'
                    onClick={this.filterPost}>
                        Всі сотрудники
                    </button>
                    <button
                     className="btn btn-outline-light"
                    type="button"
                    data-id='1'
                    onClick={this.filterPost}>
                        
                        На підвищення
                    </button>
                    <button
                     className="btn btn-outline-light"
                    type="button"
                    data-id='2'
                    onClick={this.filterPost}>
                        По зарплаті більше 1000$
                    </button>
                </div>
            )
        }
       
    }
    export default AppFilter;