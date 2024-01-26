// import React, { Component } from 'react'
import React  from 'react'
import { useState } from 'react';
const NewsItem=(props)=> {
  
    let { title, description, imageUrl,url,author,publishedAt,name } =  props;
    return (
      <>
      <div>
        <div className="card">
          <img src={imageUrl ? imageUrl : "https://placeholder.com/100x54" } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:1
            }}>{name}</span>
            <div className="d-flex justify-content-between">
            <a href={url} target="_black" className="btn btn-sm btn-primary">Read More</a>
            <a href={`http://localhost:3000/?url=${url}`} className="btn btn-sm btn-primary">Save News</a>
            </div>
          </div>
        </div>
      </div></>
    )
  
}
export default NewsItem

// import { useState } from 'react';
// export class NewsItem extends Component {
//   render() {
//     const [note,setNote]=useState({title:"",description:"",tag:""});
//   const handleClick=(e)=>{
//     e.preventDefault();
//     // addNote(note.title,note.description,note.tag);
//     // setNote({title:"",description:"",tag:""});
//     // props.showAlert("Note is created successfully","success")
//     console.log(note);
//   }
//   const onChange=(e)=>{
//     setNote({...note,[e.target.name]:e.target.value})
//   }
//     let { title, description, imageUrl,url,author,publishedAt,name } = this.props;
//     return (
//       <div>
//         <div className="card">
//           <img src={imageUrl ? imageUrl : "https://placeholder.com/100x54" } className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">{description}</p>
//             <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
//             <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:1
//             }}>{name}</span>
//             <a href={url} target="_black" className="btn btn-sm btn-primary">Read More</a>


//             <button type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>

// {/* <!-- Modal --> */}
// <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div className="modal-dialog">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalLabel">Add Note</h5>
//         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div className="modal-body">
//       <form>
//       <form>
//                 <div className="form-group">
//                     <label htmlFor="title">Title</label>
//                     <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter title" value={note.title} onChange={onChange} minLength={5} required/>
                   
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="description">Description</label>
//                     <input type="text" className="form-control" id="description" name="description" placeholder="Description" value={note.description} onChange={onChange} minLength={5} required/>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="tag">Tag</label>
//                     <input type="text" className="form-control" id="tag" name="tag" placeholder="Tag" value={note.tag} onChange={onChange} minLength={5} required/>
//                 </div> 
//                 <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
//             </form>
//           </form>
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" className="btn btn-primary" onClick={handleClick}>Save Note</button>
//       </div>
//     </div>
//   </div>
// </div>
//             {/*  <Link className="" to="/">Notes</Link>*/}
            
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default NewsItem
