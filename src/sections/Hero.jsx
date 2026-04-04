import { brain, downLoadIcon } from "@/assets";
import "./Hero.css";
import useScramble from "@/hooks/useScramble";

const Hero = () => {
  const role = useScramble();

  return (
    <section id="Hero" className="Hero">
      <div className="inner">
        <div className="container">
          <figure>
            <img src={brain} alt="메인로고" />
          </figure>
          <div className="contents">
            <h2 className="title">
              안녕하세요,
              <br />
              생각하는 <span className="role">{role}</span>
              <br />
              <span>서회정</span>입니다.
            </h2>
            <p className="description">
              다양한 환경에서도 동일한 사용자 경험을 제공하기 위해
              <br />
              크로스브라우징과 접근성을 꾸준히 고민합니다.
              <br />
              함께 제품을 만들고 성장할 팀을 찾고 있습니다.
            </p>
            <a href="/" target="_blank">
              이력서 다운로드 <img src={downLoadIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
