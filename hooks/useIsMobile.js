"use client"; // Diperlukan karena menggunakan hook dan window object
import { useState, useEffect } from "react";

// Hook ini akan mengembalikan 'true' jika lebar layar < 768px (breakpoint 'md' Tailwind)
export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fungsi ini akan dipanggil saat komponen dimuat di client dan saat layar di-resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Set nilai awal saat komponen dimuat di sisi client
    handleResize();

    // Tambahkan event listener untuk memantau perubahan ukuran layar
    window.addEventListener("resize", handleResize);

    // Bersihkan event listener saat komponen di-unmount untuk mencegah memory leak
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
