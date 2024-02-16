import Image from "next/image";

const Footer = ({ isVisible }) => {
  if (!isVisible) {
    return null; // Si isVisible est faux, ne pas rendre le header
  }
    return (
      <div className="bg-body-primary text-center text-lg-start pt-5" id="footer">
        <div className="container p-4">
          <div className="row">       
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Menu</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/" class="span_title1">Accueil</a>
                </li>
                <li>
                  <a href="/service" class="span_title1">Service</a>
                </li>
                <li>
                  <a href="/about" class="span_title1">A propos</a>
                </li>
                <li>
                  <a href="/contact" class="span_title1">Contact</a>
                </li>
              </ul>
            </div>
          
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-2">Service</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/service" className="span_title1">Impressions Grand Format</a>
                </li>
                <li>
                  <a href="/service" className="span_title1">Imprimés Personnalisés</a>
                </li>
                <li>
                  <a href="/service" className="span_title1">Produits Promotionnels</a>
                </li>
                <li>
                  <a href="/service" className="span_title1">Design Graphique et Personnalisation</a>
                </li>
              </ul>
            </div>
          
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 pe-5">
              <h5 className="text-uppercase ms-2">Contact</h5>
              <ul className="list-unstyled mb-0">
                <li type="button">
                  <Image
                    src="/icon4.png"
                    width={20}
                    height={20}
                    className="mx-2"
                  />
                  <a className="span_title1" href="/contact">+253 77 86 11 43 </a>
                  {/* <span className="span_title1">Notre Histoire</span> */}
                </li>
                <li href="/contact">
                  <Image
                      src="/icon11.png"
                      width={20}
                      height={20}
                      className="mx-2"
                    />
                    <a className="span_title1" href="/contact">+253 77 22 63 43</a>
                </li>
                <li href="/contact">
                  <Image
                      src="/icon12.png"
                      width={20}
                      height={20}
                      className="mx-2"
                    />
                    <a className="span_title1" href="/contact">safajetdjib@gmail.com </a>
                </li>
                <li href="/contact">
                  <Image
                      src="/icon5.png"
                      width={23}
                      height={23}
                      className="mx-2"
                    />
                    <a className="span_title1" href="/contact">Safa Jet </a>
                    <Image
                      src="/icon6.png"
                      width={20}
                      height={20}
                      className="mx-2"
                    />
                    <a className="span_title1" href="/contact">@safajetdjib</a>
                </li>
              </ul>
            </div>
          
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled">
                <div className="form-outline form-white mb-4">
                  <label className="form-label fs-5 fw-bold" for="typeEmailX1">Email</label>
                  <input type="email" id="typeEmailX1" class="form-control" placeholder="Votre adresse emil"/>
                </div>
                <li>
                <div>
                    <h5>Suivez-nous</h5>
                    <div>
                      <Image
                        src="/icon4.png"
                        width={25}
                        height={25}
                        className="mx-2"
                     
                      />
                      <Image
                        src="/icon5.png"
                        width={25}
                        height={25}
                       
                      />
                      <Image
                        src="/icon6.png"
                        width={25}
                        height={25}
                        className="mx-2"
                    
                      />
                      <Image
                        src="/icon7.png"
                        width={25}
                        height={25}               
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3">
          ©2024 Safa Jet. All rights reserved.
        </div>
      </div>
    );
  };
  
  export default Footer;