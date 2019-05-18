import React, {Component} from "react"; 
import SearchBarCurrency from "./SearchBarCurrency"; 
import CurrencyList from "./CurrencyList";
// import fixer from "../api/fixer";
import axios from "axios";


class App extends Component {
    state = { currencies: [] }

    onSearchSubmit = async (term) => {
        const response = await axios.get("http://data.fixer.io/api/latest?access_key=1a00e2cfc419b787f55908acaf8a9ede", {
            params: { rates: term }
        }); 

        this.setState({ currencies: response.data.rates})
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