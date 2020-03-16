import React from "react";

import { Paper, TextField, Button } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    event.preventDefault();
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
          <Button
            style={{ marginTop: "10px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
