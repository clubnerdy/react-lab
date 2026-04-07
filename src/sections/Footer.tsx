import "@/styles/sections/Footer.css";

const Footer = () => {
  return (
    <footer id="Footer" className="Footer">
      <div className="inner">
        <h3>
          감사합니다
          <br />더 궁금한 점이 있다면
          <br />
          편하게 연락 주세요
        </h3>
        <ul className="container">
          <li>
            <p>Tel</p>
            <a href="tel:010-7594-2295">010-7594-2295</a>
          </li>
          <li>
            <p>Email</p>
            <a href="mailto:clubnerdy@naver.com">clubnerdy@naver.com</a>
          </li>
          <li>
            <p>GitHub</p>
            <a href="https://github.com/clubnerdy" target="_blank" rel="noreferrer">
              https://github.com/clubnerdy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
