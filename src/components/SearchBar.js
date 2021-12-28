import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div className="ui segment search-bar">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="">Video Search</label>
                    <input type="text" value={term}
                           onChange={(event) => setTerm(event.target.value)}/>
                </div>
            </form>
        </div>
    );
};


// class SearchBar extends React.Component {
//     state = {term: ''};
//
//     onInputChange = (event) => {
//         this.setState({term: event.target.value});
//     };
//
//     onFormSubmit = (event) => {
//         event.preventDefault();
//         this.props.onFormSubmit(this.state.term);
//     };
//
//     render() {
//         return (
//             <div className="ui segment search-bar">
//                 <form onSubmit={this.onFormSubmit} className="ui form">
//                     <div className="field">
//                         <label htmlFor="">Video Search</label>
//                         <input type="text" value={this.state.term}
//                                onChange={this.onInputChange}/>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

export default SearchBar