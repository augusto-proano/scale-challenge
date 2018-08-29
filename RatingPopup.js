import React from "react";
import Rating from "react-rating";
import Popup from "reactjs-popup";

const RatingPopup = (element, natPerils) => {
  const naturalPerils = Object.keys(natPerils);
  const ratingScale = Object.values(natPerils);
  return (
    <Popup trigger={element} closeOnDocumentClick>
      {() => (
        <div className="popup">
          <div className="popup-perils">
            {naturalPerils.map((natPeril, idx) => (
              <h1 key={idx}>{`${natPeril[0].toUpperCase()}${natPeril.slice(
                1
              )}`}</h1>
            ))}
          </div>
          <div className="popup-scale">
            {ratingScale.map((value, idx) => (
              <div key={idx} className="popup-scale-single">
                {/* Rating Scale from 1 to 10 */}
                <Rating
                  initialRating={value}
                  stop="10"
                  readonly={true}
                  emptySymbol={["empty-symbol"]}
                  fullSymbol={[
                    "full-symbol color-1",
                    "full-symbol color-2",
                    "full-symbol color-3",
                    "full-symbol color-4",
                    "full-symbol color-5",
                    "full-symbol color-6",
                    "full-symbol color-7",
                    "full-symbol color-8",
                    "full-symbol color-9",
                    "full-symbol color-10"
                  ]}
                />
                <h1>{value}</h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </Popup>
  );
};

export default RatingPopup;
