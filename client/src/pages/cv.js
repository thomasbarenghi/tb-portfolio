import { useRouter } from "next/router";
import { useEffect } from "react";

export default function CV() {
  const router = useRouter();

  useEffect(() => {
    handleDownload();
  }, []);

  const handleDownload = () => {
  router.push("/pdf/cv.pdf");
  };

  return (
    <div className="z-[10000] absolute top-0 left-0 w-screen h-screen bg-white"></div>
  );
}
