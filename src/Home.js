import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "./actions";
import "./style.css";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  person = (x, i) =>
    <div key={x.id}>
    <table id="customers">
      <tr>
        <th>Gender</th>
        <th> First Name </th>
        <th> Last  Name </th>
        <th> Picture </th>
      </tr>
      <tr>  <td>{x.title}</td>
      <td>{x.body} </td>
      </tr>
    </table>
    </div>;

  render() {
    const { results = [] } = this.props.data;
    console.log(results);
    return results.length
      ? <h1>
          {results.map(this.person)}
        </h1>
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data:state});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);