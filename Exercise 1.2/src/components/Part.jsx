const Part = ({ key, name, exercises }) => {
  return (
    <p key={key}>
      {name} {exercises}
    </p>
  );
};

export default Part;
