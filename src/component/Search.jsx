import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };
  handleFilter = (event) => {
    this.setState(()=>({ type: event.target.dataset.type }),()=>{
      this.props.searchMovie(this.state.search, this.state.type)
    });
  };
  render() {
    return (
      <div className='row'>
        <div className='input-field '>
          <input
            placeholder='Search'
            type='search'
            className='validate'
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className='btn search-btn'
            onClick={() => this.props.searchMovie(this.state.search,this.state.type)}
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='all'
              onChange={this.handleFilter}
              checked={this.state.type ==='all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='movie'
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='series'
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
