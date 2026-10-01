import Part from "./Part";

const Content = ({ exercises }) => {
  return (
    <>
      {exercises.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

export default Content;
