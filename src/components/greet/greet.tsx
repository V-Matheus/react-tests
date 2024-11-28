
// práticas de TDD
// Aqui deve ter um component que irá renderizar "Hello"

type GreetProps = {
  name?: string;
};

export const Greet = ({ name }: GreetProps) => {
  return <div>Hello {name}</div>;
};

