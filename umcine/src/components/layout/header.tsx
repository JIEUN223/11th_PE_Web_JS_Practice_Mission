import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__left">
          <a className="header__logo" href="/">
            <img src="/icons/movie.svg" alt="" aria-hidden="true" />
            <span>UMCine</span>
          </a>
          <nav className="header__nav">
            <a className="header__nav-link header__nav-link--active" href="/">
              영화
            </a>
            <a className="header__nav-link" href="/search">
              검색
            </a>
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
