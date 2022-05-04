import React, { Component } from "react";

export default class NotifyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      okBtn: this.props.ok || "Ok",
      cancleBtn: this.props.cancel || "Cancel",
    };
  }
  render() {
    return (
      <div>
        <div className="modal fade" id="staticBackdrop">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  {this.state.title}
                </h5>
                <button type="button" className="btn-close" />
              </div>

              <div className="modal-body">...</div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary">
                  {this.state.cancleBtn}
                </button>
                <button type="button" className="btn btn-primary">
                  {this.state.okBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
