import React from "react";
import { connect } from "react-redux";

const Notes = props => {
  const note = props.notes.find(
    note => `${note.id}` === props.match.params.id
  );

  
console.log()
  

  const back = e => {
    e.preventDefault();
    props.history.push("/main-page");
    console.log("hi");
  };


  

  return (
    <div className="single-note">
      <div className="single-text">
        <h3> {note.message}</h3>
      </div>
      <div className="single-btn">
        <button>Edit</button>
        <button onClick={back}>Back</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(
  mapStateToProps,
  {}
)(Notes);
