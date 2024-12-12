import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollContainer = document.querySelector('.content-container'); // Cuộn phần tử cụ thể
        if (scrollContainer) {
            scrollContainer.scrollTo(0, 0); // Cuộn về đầu trong khu vực
        } else {
            window.scrollTo(0, 0); // Cuộn toàn trang nếu không tìm thấy phần tử
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
