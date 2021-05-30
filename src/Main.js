import logo from './logo.svg';
import './App.css';
import './styles.css';
import img_cabin from './assets/img/portfolio/cabin.png';
import img_cake from './assets/img/portfolio/cake.png';
import img_circus from './assets/img/portfolio/circus.png';
import img_game from './assets/img/portfolio/game.png';
import img_safe from './assets/img/portfolio/safe.png';
import img_submarine from './assets/img/portfolio/submarine.png';
import img_avatar from './assets/img/avataaars.svg'; 

function Main() {
  return (
    <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content />
        <meta name="author" content />
        <title>사랑의 열매에 기부하세요! </title>
        {/* Favicon*/}
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        {/* Font Awesome icons (free version)*/}
        {/* Google fonts*/}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        {/* Core theme CSS (includes Bootstrap)*/}
        <link href="css/styles.css" rel="stylesheet" />
        {/* Navigation*/}
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#page-top">사랑의 지갑</a>
            <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Wallet</a></li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Masthead*/}
        <header className="masthead bg-primary text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            {/* Masthead Avatar Image*/}
            <img className="masthead-avatar mb-5" src={img_avatar} alt="..." />
            {/* Masthead Heading*/}
            <h1 className="masthead-heading text-uppercase mb-0">사랑의 지갑으로 시작하세요!</h1>
            {/* Icon Divider*/}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line" />
              <div className="divider-custom-icon"><i className="fas fa-heart"/></div>
              <div className="divider-custom-line" />
            </div>
            {/* Masthead Subheading*/}
            <p className="masthead-subheading font-weight-light mb-0">나누는 기쁨, 희망과 행복 - 사랑의열매를 소개합니다.</p>
          </div>
        </header>
        {/* Portfolio Section*/}
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            {/* Portfolio Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Wallet</h2>
            {/* Icon Divider*/}
            <div className="divider-custom">
              <div className="divider-custom-line" />
              <div className="divider-custom-icon"><i className="fas fa-star" /></div>
              <div className="divider-custom-line" />
            </div>
            {/* Portfolio Grid Items*/}
            <div className="row justify-content-center">
              {/* Portfolio Item 1*/}
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                  </div>
                  <img className="img-fluid" src={img_cabin} alt="..."/>
                </div>
              </div>
              {/* Portfolio Item 2*/}
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                  </div>
                  <img className="img-fluid" src={img_cake} alt="..." />
                </div>
              </div>
              {/* Portfolio Item 3*/}
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                  </div>
                  <img className="img-fluid" src={img_circus} alt="..." />
                </div>
              </div>
              {/* Portfolio Item 4*/}
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                  </div>
                  <img className="img-fluid" src={img_game} alt="..." />
                </div>
              </div>
              {/* Portfolio Item 5*/}
              <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                  </div>
                  <img className="img-fluid" src={img_safe} alt="..." />
                </div>
              </div>
              {/* Portfolio Item 6*/}
              <div className="col-md-6 col-lg-4">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                  </div>
                  <img className="img-fluid" src={img_submarine} alt="..." />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section*/}
        <section className="page-section bg-primary text-white mb-0" id="about">
          <div className="container">
            {/* About Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
            {/* Icon Divider*/}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line" />
              <div className="divider-custom-icon"><i className="fas fa-star" /></div>
              <div className="divider-custom-line" />
            </div>
            {/* About Section Content*/}
            <div className="row">
              <div className="col-lg-4 ms-auto"><p className="lead">세 개의 빨간 열매는 나, 가족, 이웃을 상징하며, 열매의 빨간색은 따뜻한 사랑의 마음을, 하나로 모아진 줄기는 더불어 함께 사는 사회를 만들어가자는 뜻을 가지고 있습니다. '사랑의 열매는 나와 가족을 사랑하는 마음으로 이웃에게 사랑을 전하자는 나눔의 의미를 담고 있습니다.</p></div>
              <div className="col-lg-4 me-auto"><p className="lead">'사회복지공동모금회'는 '사랑의 열매'를 캠페인 상징으로 연말연시는 물론 연중 이웃돕기 캠페인을 펼치고 있으며, 사랑의 열매는 현재 우리 국민에게 이웃사랑의 상징으로 자리잡고 있습니다.</p></div>
            </div>
            {/* About Section Button*/}
            <div className="text-center mt-4">
              <a className="btn btn-xl btn-outline-light" href="https://chest.or.kr/base.do">
                <i className="fas fa-download me-2" />
                사랑의 열매로 이동!
              </a>
            </div>
          </div>
        </section>
        {/* Contact Section*/}
        <section className="page-section" id="contact">
          <div className="container">
            {/* Contact Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
            {/* Icon Divider*/}
            <div className="divider-custom">
              <div className="divider-custom-line" />
              <div className="divider-custom-icon"><i className="fas fa-star" /></div>
              <div className="divider-custom-line" />
            </div>
            {/* Contact Section Form*/}
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-7">
                <form>
                  <div className="form-floating">
                    <input className="form-control" id="inputName" type="text" placeholder="Enter your name..." />
                    <label htmlFor="inputName">Name</label>
                  </div>
                  <div className="form-floating">
                    <input className="form-control" id="inputEmail" type="email" placeholder="Enter your email..." />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number..." />
                    <label htmlFor="inputPhone">Phone Number</label>
                  </div>
                  <div className="form-floating">
                    <textarea className="form-control" id="inputMessage" placeholder="Enter your message here..." style={{height: '12rem'}} defaultValue={""} />
                    <label htmlFor="inputMessage">Message</label>
                  </div>
                  <br />
                  <button className="btn btn-primary btn-xl" type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Footer*/}
        <footer className="footer text-center">
          <div className="container">
            <div className="row">
              {/* Footer Location*/}
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">
                  2215 John Daniel Drive
                  <br />
                  Clark, MO 65243
                </p>
              </div>
              {/* Footer Social Icons*/}
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter" /></a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in" /></a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble" /></a>
              </div>
              {/* Footer About Text*/}
              <div className="col-lg-4">
                <h4 className="text-uppercase mb-4">About Freelancer</h4>
                <p className="lead mb-0">
                  Freelance is a free to use, MIT licensed Bootstrap theme created by
                  <a href="http://startbootstrap.com">Start Bootstrap</a>
                  .
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* Copyright Section*/}
        <div className="copyright py-4 text-center text-white">
          <div className="container"><small>Copyright © Your Website 2021</small></div>
        </div>
        {/* Portfolio Modals*/}
        {/* Portfolio Modal 1*/}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} aria-labelledby="portfolioModal1" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Portfolio Modal - Title*/}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                      {/* Icon Divider*/}
                      <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                      </div>
                      {/* Portfolio Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src={img_cabin} alt="..." />
                      {/* Portfolio Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                        <i className="fas fa-times fa-fw" />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Modal 2*/}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} aria-labelledby="portfolioModal2" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Portfolio Modal - Title*/}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Tasty Cake</h2>
                      {/* Icon Divider*/}
                      <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                      </div>
                      {/* Portfolio Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src={img_cake} alt="..." />
                      {/* Portfolio Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                        <i className="fas fa-times fa-fw" />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Modal 3*/}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} aria-labelledby="portfolioModal3" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Portfolio Modal - Title*/}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Circus Tent</h2>
                      {/* Icon Divider*/}
                      <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                      </div>
                      {/* Portfolio Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src={img_circus} alt="..." />
                      {/* Portfolio Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                        <i className="fas fa-times fa-fw" />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Modal 4*/}
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} aria-labelledby="portfolioModal4" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Portfolio Modal - Title*/}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                      {/* Icon Divider*/}
                      <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                      </div>
                      {/* Portfolio Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src={img_game} alt="..." />
                      {/* Portfolio Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                        <i className="fas fa-times fa-fw" />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Modal 5*/}
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} aria-labelledby="portfolioModal5" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Portfolio Modal - Title*/}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                      {/* Icon Divider*/}
                      <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                      </div>
                      {/* Portfolio Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src={img_safe} alt="..." />
                      {/* Portfolio Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                        <i className="fas fa-times fa-fw" />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Modal 6*/}
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} aria-labelledby="portfolioModal6" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Portfolio Modal - Title*/}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                      {/* Icon Divider*/}
                      <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                      </div>
                      {/* Portfolio Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src={img_submarine} alt="..." />
                      {/* Portfolio Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                        <i className="fas fa-times fa-fw" />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bootstrap core JS*/}
        {/* Core theme JS*/}
      </div>
  );
}

export default Main;
