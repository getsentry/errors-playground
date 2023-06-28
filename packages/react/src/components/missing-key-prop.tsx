export const MissingKeyProp = () => {
  const items = [1, 2, 3, 4, 5];

  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
