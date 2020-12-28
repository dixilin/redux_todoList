import React, { Component } from "react";
import { List, Input, Button } from "antd";

import { connect } from "react-redux";

import {
  getChangeInputAction,
  getHandleSubmitAction,
  getDeleteItemAction,
  getHandleSubmitActionAsync,
} from "./store/actionCreators";

class TodoList extends Component {
  render() {
    return (
      <div style={{ marginTop: "200px", paddingLeft: "200px" }}>
        <div>
          <Input
            style={{ width: "300px", marginRight: "10px" }}
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <Button
            type="primary"
            onClick={() => {
              this.props.handleSubmit(this.props.inputValue);
            }}
          >
            提交
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.props.handleSubmitAsync(this.props.inputValue);
            }}
          >
            延迟一秒后提交
          </Button>
        </div>
        <List
          style={{ width: "300px", marginTop: "10px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                this.props.deleteItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputChange(e) {
      const action = getChangeInputAction(e.target.value);
      dispatch(action);
    },
    handleSubmit(val) {
      const action = getHandleSubmitAction(val);
      dispatch(action);
    },
    deleteItem(idx) {
      const action = getDeleteItemAction(idx);
      dispatch(action);
    },
    handleSubmitAsync(val) {
      const action = getHandleSubmitActionAsync(val);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
