import React, {Component} from "react"; 

class SearchBarCurrency extends Component {
    state = {term: ""}
    
    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term)
    }
    
    
    render() { 
        return ( 
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form"> 
                    <div className="field">
                        <label>SEARCH</label>
                        <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={(event) => this.setState({ term: event.target.value })} 
                        />
                    </div>
                    
                </form>
            </div>
         );
    }
}
 
export default SearchBarCurrency;