import React, { Component } from "react";
// import PropTypes from 'prop-types'
export class newsItem extends Component {


  render() {  

    let {title, description,imageUrl,newsUrl} = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ backgroundColor: "a7b1ba"}}>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {/* <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6> */}
            <p className="card-text" >{description}</p>
            <a rel="noreferrer" href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
            {/* <button class="btn-group btn-dark" role="group" aria-label="Basic outlined example">
            <a className="btn-btn-sm btn-dark" href={newsUrl}>
              Read More
            </a> */}
            {/* </button> */}
            {/* <div class="btn-group" href={newsUrl} role="group" aria-label="Basic outlined example">
             <a className="btn-btn-primary active" href={newsUrl}>
            </div> */}
            {/* <div class="btn-group" role="group" aria-label="Basic outlined example">
              <a href={newsUrl} className="btn btn-primary active" >Active link</a>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default newsItem;
