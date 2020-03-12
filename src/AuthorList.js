import React,{Component} from "react";
import SearchBar from './SearchBar';

// Components
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  constructor(props){
    super(props);
    this.state={
      authors:this.props.authors
    };
  }
  filterAuthors = query => {
    this.setState({
       authors:this.props.authors.filter(author =>{
         const authorName = author.first_name +" " + author.last_name;
         return authorName.toLowerCase().includes(query.toLowerCase())         
        }) 
      });
    }
  render()
  {
    
    const authorCards = this.state.authors.map(author => (
    <AuthorCard key={author.first_name + author.last_name} author={author} selectAuthor={this.props.selectAuthor} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row"><SearchBar filter={this.filterAuthors} /></div>
      <div className="row">{authorCards}</div>
    </div>
  );}
};

export default AuthorList;
