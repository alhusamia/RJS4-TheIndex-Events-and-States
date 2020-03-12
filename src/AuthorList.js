import React,{Component} from "react";
import SearchBar from './SearchBar';

// Components
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  state={
    query:null
  }
  // filterAuthors = query => {this.setState({ query :this.props.authors.filter(query =>{query.first_name || query.last_name}) });
  render()
  {
    
    const authorCards = this.props.authors.map(author => (
    <AuthorCard key={author.first_name + author.last_name} author={author} selectAuthor={this.props.selectAuthor} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div class="row"><SearchBar  /></div>
      <div className="row">{authorCards}</div>
    </div>
  );}
};

export default AuthorList;
