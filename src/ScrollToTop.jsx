import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // Хук useLocation позволяет получать информацию о текущем URL
  const { pathname } = useLocation();

  useEffect(() => {
    // При изменении pathname (т.е. при переходе на новую страницу)
    // прокручиваем окно в координаты 0,0 (верх страницы)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // instant - мгновенно, smooth - плавно
    });
  }, [pathname]); // Запускать эффект только при смене pathname

  return null; // Этот компонент ничего не рендерит
}
