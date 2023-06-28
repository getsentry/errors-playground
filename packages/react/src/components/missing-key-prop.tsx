export const MissingKeyProp = () => {
  const items = [1, 2, 3, 4, 5];

  console.log("Missing Key Prop example");
  console.error("Missing Key Prop example");

  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
