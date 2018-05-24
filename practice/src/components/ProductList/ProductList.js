import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <div className="panel-body">
        <table className="table table-bordered table-hover text-left">
          <thead>
            <tr>
              <th>STT</th>
              <th>Ma</th>
              <th>Ten</th>
              <th>Gia</th>
              <th>Trang thai</th>
              <th>Hanh dong</th>
            </tr>
          </thead>
          <tbody>
            {this.props.children}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductList;
