export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-menu">
            <div className="footer-links col">
              <h3>DC COMICS</h3>
              <ul>
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Games</li>
                <li>Videos</li>
                <li>News</li>
              </ul>
              <h3>SHOP</h3>
              <ul>
                <li>Shop DC</li>
                <li>Shop DC Collections</li>
              </ul>
            </div>

            <div className="footer-links col">
              <h3>DC</h3>
              <ul>
                <li>Terms of use</li>
                <li>Privacy Policy (new)</li>
                <li>Ad Choices</li>
                <li>Advertising</li>
                <li>Jobs</li>
                <li>Subscriptions</li>
                <li>Talent Workshops</li>
                <li>CPSC Certificates</li>
                <li>Ratings</li>
                <li>Shop Help</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footer-links col">
              <h3>SITES</h3>
              <ul>
                <li>DC</li>
                <li>MAD Magazine</li>
                <li>DC Kids</li>
                <li>DC Universe</li>
                <li>DC Power Visa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        {" "}
        <div className="container">
          <div className="follow-up-banner">
            <div>
              <a className="sign-up btn btn-secondary" href="">
                SIGN-UP NOW!
              </a>
            </div>
            <div id="social-links">
              <h3>FOLLOW US</h3>
              <ul id="social-media-links">
                <li>
                  <img src="src/assets/img/footer-facebook.png" alt="" />
                </li>
                <li>
                  <img src="src/assets/img/footer-twitter.png" alt="" />
                </li>
                <li>
                  <img src="src/assets/img/footer-youtube.png" alt="" />
                </li>
                <li>
                  <img src="src/assets/img/footer-pinterest.png" alt="" />
                </li>
                <li>
                  <img src="src/assets/img/footer-periscope.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
