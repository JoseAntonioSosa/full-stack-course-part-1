const Total = ({ parts }) => {
  const exerciseTotals = parts.map((part) => part.exercises);
  return <p>Number of exercises {exerciseTotals.reduce((sum, total) => sum + total, 0)}</p>;
};

export default Total;
