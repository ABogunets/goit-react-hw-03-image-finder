import React, { Component } from 'react';
import { toast } from 'react-toastify';

import { ImSearch } from 'react-icons/im';
// import { nanoid } from 'nanoid';
import {
  SearchbarWrapper,
  SearchForm,
  SearchBtn,
  // SearchBtnLabel,
  Input,
} from 'components/Searchbar/Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      toast.warning('Please enter something..');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.reset();
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchbarWrapper>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <ImSearch style={{ width: 20, height: 20 }} />
            {/* <SearchBtnLabel>Search</SearchBtnLabel> */}
          </SearchBtn>
          <Input
            type="text"
            value={this.state.searchQuery}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarWrapper>
    );
  }
}
