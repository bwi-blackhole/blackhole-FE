import React from "react";
import { connect } from "react-redux";
import moment from 'moment';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newNote: {
        text: '',
        created_at: moment().format('MMMM Do YYYY'),
        storage: 1
      }
    };
  }

  handleInput = e => {
    e.persist();
    this.setState(prevState => ({
      newNote: { ...prevState.newNote, [e.target.name]: e.target.value }
    }));
  };

  addNote = e => {
    e.preventDefault();
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
          value={this.state.text}
          type="text"
          name="text"
          onChange={this.handleInput}
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
          <button> Blackhole </button>
          <button onClick={this.addNote}> Store In Satellite</button>
          <button onClick={this.back}>Back</button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(NoteForm);
