interface Props {
  name: string
}

export default function Header({name}: Props){
  return (
    <header className="text-center py-4 mb-3 bg-secondary">
      <h1 className="fw-bold">{name}</h1>
    </header>
  );
}