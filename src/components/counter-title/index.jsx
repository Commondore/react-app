export const CounterTitle = ({ units, children }) => {
  const counterStyles = { color: "green" };

  if (units.length < 3) {
    counterStyles.color = "orange";
  }

  if (units.length < 2) {
    counterStyles.color = "red";
  }

  if (units.length === 0) {
    counterStyles.color = "white";
    counterStyles.backgroundColor = "black";
  }

  return (
    <h2 style={counterStyles}>
      {children}: {units.length}
    </h2>
  );
};
