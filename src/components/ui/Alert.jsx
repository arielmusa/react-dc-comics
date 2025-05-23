export default function Alert({ type, text, bgColor }) {
  return <div className={`alert ${type} ${bgColor}`}>{text}</div>;
}
