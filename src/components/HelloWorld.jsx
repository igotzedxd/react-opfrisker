function HelloWorld({ name }) {
  return <p>Hello {name.length === 0 ? "World" : name}!</p>;
}

export default HelloWorld;
