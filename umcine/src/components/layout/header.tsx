import { Link } from "@tanstack/react-router";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__left">
          <Link className="header__logo" to="/">
            <img src="/icons/movie.svg" alt="" aria-hidden="true" />
            <span>UMCine</span>
          </Link>
          <nav className="header__nav">
            <Link className="header__nav-link header__nav-link--active" to="/">
              영화
            </Link>
            <Link className="header__nav-link" to="/search">
              검색
            </Link>
            <a className="header__nav-link" href="/mypage">
              내 정보
            </a>
          </nav>
        </div>
        <div className="header__right">
          <button
            type="button"
            className="header__search"
            aria-label="검색"
          >
            <img src="/icons/search.svg" alt="" aria-hidden="true" />
          </button>
          <button type="button" className="header__login">
            로그인
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
