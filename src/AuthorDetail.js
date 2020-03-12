import React from "react";


function AuthorDetail(props){
    const author = props.author;
    const bookDetail = props.author.books.map(book => (
        <tr key={book.title}>
        <td>{book.title}</td>
        <td>{`${props.author.first_name} ${props.author.last_name}`}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    ))
    return (
    <div className="author col-xs-10">
    <div>
        <h3>{author.first_name} {author.last_name}</h3>
        <img src={author.imageUrl} className="img-thumbnail" alt="I SHOULD BE AN AUTHOR NAME TOO"/>
    </div>
    <table className='mt-3 table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Authors</th>
                <th>Color</th>
            </tr>
        </thead>
        <tbody>
           {bookDetail}
        </tbody>
    </table>
</div>);
}

export default AuthorDetail;