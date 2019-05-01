import React from "react";
import { connect } from "react-redux";
// import moment from 'moment';
import { addNote } from '../actions';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
      newNote: {
        message: '',
        user_id: 2,
        delete_at: '',
      }
    };
  }

  handleInput = e => {
    e.persist();
    this.setState(prevState => ({
      newNote: { ...prevState.newNote, [e.target.name]: e.target.value }
    }));
  };

  handleAnimate = e => {
    e.preventDefault();
    this.setState(prevState => ({
      animate: !prevState.animate
    }));

   setTimeout(() => {this.props.history.push('/main-page')}, 3000)
  };



  addNote = e => {
    e.preventDefault();
    this.props.addNote(this.state.newNote);
    this.props.history.push("/main-page");
  };

  back = e => {
    e.preventDefault();
    this.props.history.push("/main-page");
  };

  render() {
    return (
      <div className="note-form">
        <h1 className="form-header">Say Goodbye To All Of Your Problems</h1>
        <textarea
          placeholder="Vent it all away..."
          value={this.state.newNote.message}
          type="text"
          name="message"
          onChange={this.handleInput}
          className={this.state.animate ? 'gone' : null}
        />
          <div className="select-box">
          <h3> Days To Store In Satellite: </h3>
          <select
            name="storage"
            onChange={this.handleInput}
            value={this.state.newNote.storage}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <div className="storage-btn">
          <button onClick={this.handleAnimate}> Blackhole </button>
          <button onClick={this.addNote}> Store In Satellite</button>
          <button onClick={this.back}>Back</button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
      notes: state.notes
  }
}

export default connect(
  mapStateToProps,
  { addNote }
)(NoteForm);
