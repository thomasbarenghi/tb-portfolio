export default function Main({ children, className }) {
  return <main className={`flex justify-center flex-col  items-center ${className ? className : "pt-[104px]"}`}>{children}</main>;
}
