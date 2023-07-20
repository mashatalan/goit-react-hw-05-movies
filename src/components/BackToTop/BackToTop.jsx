import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setToTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {toTop && (
        <button
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'plum',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 4px 2px purple',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
          onClick={scrollToTop}
        >
          &#11014;
        </button>
      )}
    </>
  );
};

export default BackToTop;
