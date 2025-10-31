// Un componente adicional con props
type Props = {
  nombre: string;
};

export default function Saludo({ nombre }: Props) {
  return <h2>Hola, {nombre}! 👋</h2>;
}