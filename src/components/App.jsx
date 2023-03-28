import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getPics } from 'components/services/pics-api.js';

import { AppWrapper } from './App.styled';
import { Button } from 'components/Button/Button.styled';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
// import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    page: 1,
    searchQuery: '',
    picsSet: [],
    isloading: false,
    error: null,
    // status: 'idle',
  };

  searchSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1 });
    window.scrollTo(0, 0);
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    const prevPage = prevState.page;
    const nextPage = this.state.page;
    // console.log('prevPage', prevPage);
    // console.log('nextPage :>> ', nextPage);

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      // console.log('searchQuery has changed');

      // this.setState({ status: 'pending' });
      this.setState({ isLoading: true });

      getPics(nextQuery, nextPage)
        .then(data => {
          this.setState({
            picsSet:
              nextPage === 1 ? data.hits : [...prevState.picsSet, ...data.hits],
          });
          // this.setState({ picsSet: data.hits });
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  render() {
    const { picsSet, error, isLoading } = this.state;
    console.log('picsSet', picsSet);
    // if (status === 'idle') {
    // }
    // if (status === 'pending') {
    //   return <Loader />;
    // }
    // if (status === 'rejected') {
    //   return <h1>{error.message}</h1>;
    // }
    // if (status === 'resolved') {
    //   return <ImageGallery items={picsSet} />;
    // }

    return (
      <AppWrapper>
        <Searchbar onSubmit={this.searchSubmit} />
        {error && <h1>{error.message}</h1>}
        {/* <Loader /> */}
        {picsSet && <ImageGallery items={this.state.picsSet} />}
        {isLoading && <Loader />}
        <Button onClick={this.loadMore} type="button">
          Load more
        </Button>
        {/* <Modal /> */}
        <ToastContainer autoClose={3000} />
      </AppWrapper>
    );
  }
}

// <AppWrapper>
//   {error && <h1>{error.message}</h1>}
//   <Searchbar onSubmit={this.searchSubmit} />
//   {loading && <h1>Loading..</h1>}
//   {picsSet && <ImageGallery items={this.state.picsSet} />}

//   <ToastContainer autoClose={3000} />
// </AppWrapper>;
