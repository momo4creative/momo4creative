export default function Backdrop({ close }) {
  return (
    <button
      className="w-full h-full absolute top-0 left-0 backdrop-blur-sm bg-white/25"
      type="button"
      onClick={close}
    ></button>
  );
}
