export default function Main({ children, className }) {
  return (
    <main
      className={`flex flex-col items-center  justify-center ${
        className ? className : "pt-[104px]"
      }`}
    >
      {children}
    </main>
  );
}
