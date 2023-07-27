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
    <div className="absolute left-0 top-0 z-[10000] h-screen w-screen bg-white"></div>
  );
}
