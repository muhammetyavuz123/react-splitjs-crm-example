export const TableLocation = ({
  horizantalWindowValues,
  upVerticalWindowValues,
  downVerticalWindowValues,
}) => {
  return (
    <div
      className="tableLocation"
      style={{ display: "flex", justifyContent: "end" }}
    >
      <div className="tableLocationContext">
        <div>
          <p>Yatay Pencere Değerleri:</p>
          <p>{horizantalWindowValues}</p>
        </div>
        <div>
          <p>Üst Dikey Pencere Değerleri:</p>
          <p>{upVerticalWindowValues}</p>
        </div>
        <div>
          <p>Alt Dikey Pencere Değerleri:</p>
          <p>{downVerticalWindowValues}</p>
        </div>
      </div>
    </div>
  );
};
