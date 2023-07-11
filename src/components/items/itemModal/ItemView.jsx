import React from "react";
import "./ItemView.css";

function ItemView(props) {
  const measurementElements = Object.entries(props.measurements).map(
    ([key, values]) => (
      <div className="flex text-medium" key={key}>
        <p className="measurement-header bold-text">{key}:</p>
        <div className="measurement-value">
          <div className="measurement-value-container">
            <p>{values[0]}</p>
            <p>in</p>
          </div>
          <div className="measurement-value-container">
            <p>{values[1]}</p>
            <p>cm</p>
          </div>
        </div>
      </div>
    )
  );
  const activeButtonElement = props.active ? (
    <button
      className="primary-button high-z-index position-right"
      onClick={() => props.handleActive(props.title.toUpperCase())}
    >
      Set as not Active
    </button>
  ) : (
    <button
      className="primary-button high-z-index position-right"
      onClick={() => props.handleActive(props.title.toUpperCase())}
    >
      Set as Active
    </button>
  );
  return (
    <section className="item-modal-container">
      <button
        className="back-button secondary-link-color"
        onClick={props.handleClickModal}
      >
        ←
      </button>

      <div className="text-center">
        <img className="large-thumbnail" src={props.imageSrc}></img>
        <h3 className="modal-title bold-text text-medium">{props.title}</h3>
        <div className="grey-line"></div>
        <div className="sub-row">
          <p className="text-medium">{props.category}</p>
          {activeButtonElement}
        </div>
      </div>
      <div className="item-measurements">{measurementElements}</div>
      <div className="button-container">
        <button
          className="primary-button high-z-index"
          onClick={props.handleEdit}
        >
          Edit
        </button>
        <button
          className="primary-button high-z-index"
          onClick={() => props.handleDeleteItem(props.title.toUpperCase())}
        >
          Delete
        </button>
      </div>
    </section>
  );
}

export default ItemView;
