import React from "react";
import { connect } from "react-redux";
import { deleteNotes } from '../actions';

class Notes extends React.Component{

  state = {
    animate: false
  }
  

   back = e => {
    e.preventDefault();
    this.props.history.push("/main-page");
  };


  // deleteNote = id => {
  //   this.props.deleteNotes(id);
  //   this.props.history.push('/main-page');
  // }


  handleAnimate = (id) => {
    this.setState(prevState => ({
      animate: !prevState.animate
    }));
  setTimeout(() => {this.props.deleteNotes(id);}, 3000)
   setTimeout(() => {this.props.history.push('/main-page')}, 3000)
  };
  




 render() {
     const note = this.props.notes.find(
    note => `${note.id}` === this.props.match.params.id);
   return (
    <div className={this.state.animate ? 'gone' : 'single-note'}>
    <div className="single-text">
      <h3> {note.message}</h3>
      <h6>{note.created_at}</h6>
    </div>
    <div className="single-btn">
      <button>Edit</button>
      <button onClick={() => this.handleAnimate(note.id)}>Blackhole</button>
      <button onClick={this.back}>Back</button>
    </div>
  </div>
   )
 }

}

  

const mapStateToProps = state => ({
  notes: state.notes,
  deletingNotes: state.deletingNotes
});

export default connect(
  mapStateToProps,
  { deleteNotes }
)(Notes);
