import React from "react"

const Cards = ({ Image ,description,name}) => {
  return (
    <div>
      <div
        className="card p-2"
        style={{
          width: "38rem",
          textAlign: "center",
          flex: "1",
          backgroundColor: "#00000063",
        }}
      >
        <div className="d-flex flex-column align-items-center">
          <img
            src={Image}
            className=" object-fit-cover rounded-circle"
            alt="Image1"
            style={{
              height: "200px",
              width: "200px",
            }}
          />
        </div>

        <div class="card-body">
          <h5 class="card-title text-center">{name}</h5>
          <p class="card-text text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cards