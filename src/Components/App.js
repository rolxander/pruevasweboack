import React ,{ Component } from 'react';
import '../Assets/css/App.css';
class App extends Component
{
    constructor(props){
        super();
    }

    render(){
        const {children}  = this.props;
        return(
        
        <div>
            {children}
        </div>
           
            
    )}

}
export default App;