import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "./actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  book = (x, i) =>
    <div key={x}>
     
    </div>;

  render() {
    const { results = [] } = this.props.data;
    return results.length
      ? <h1>
          {results.map(this.book)}
        </h1>
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);  