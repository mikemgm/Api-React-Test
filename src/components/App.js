import React, {Component} from "react"; 
import SearchBarCurrency from "./SearchBarCurrency"; 
import CurrencyList from "./CurrencyList";
// import fixer from "../api/fixer";
import axios from "axios";


class App extends Component {
    state = { currencies: [] }
    
        onSearchSubmit = async (term) => {
            const response = await axios.get("https://api.exchangeratesapi.io/latest?symbols=USD,GBP", {
                params: { rates: term }
            }); 
    
            this.setState({ currencies: response.rates}) 
    
        }
    

    render() { 
        return (
            <div className="ui container">
            <SearchBarCurrency onSubmit= {this.onSearchSubmit} /> 
            <CurrencyList currencies= {this.state.currencies} />
            </div>
          );
    }
}
 
export default App;






// constructor() {
//     super(); 

//     this.state = { currencies: [] }
// } 

// componentDidMount() {
//     this.getCurrencies();
// } 

// getCurrencies(){
//     fetch("http://data.fixer.io/api/latest?access_key=1a00e2cfc419b787f55908acaf8a9ede") 
//     .then( results => results.json() )
//     .then( results => this.setState({currencies: results }));
// }

// render() {
//     return(
//         <ul>
//             {this.state.currencies.map((currencies, index) => {
//                 return(
//                     <div>
//                     <div  key={index}/> 
//                     <h1>{currencies.rates}</h1>
//                     </div>
//                 )

//             })} 



//         </ul>
//     )



// }

// }