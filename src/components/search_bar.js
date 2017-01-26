import React from 'react';


class SearchBar extends React.Component {
	constructor(props){
		super(props);

		this.state = { term: '  '};
	}



	render(){
		return(
			<div className="search-bar">	
				<input 
					placeholder="Busca tu video favorito"
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
				
			</div>
			);
	}


	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
		//este ultimo PROP que contiene un Metodo, ha sido enviado solo para ser ejecutado con un argumento de aqui, pero que afecte directamente en index.js 
	}


}


export default SearchBar;




