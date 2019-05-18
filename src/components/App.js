import React, {Component} from "react"; 
import SearchBarCurrency from "./SearchBarCurrency"; 
import CurrencyList from "./CurrencyList";
import fixer from "../api/fixer";


class App extends Component {
    state = { currencies: [] }

    onSearchSubmit = async (term) => {
        const response = await fixer.get("/latest", {
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