import Image from "next/image";
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const Home = () => {

  const isNavbarVisible = true;
  const isFooterVisible = true;

  return (
    <section >
      <Navbar isVisible={isNavbarVisible} />
      <div className="accueil-img">
        <div className="position-absolute end-50 text-white ps-5 pt-5" id="accueil">
          <h2 className="text-white fw-boldn mb-4">Explorez l'Art de l'Impression Numérique</h2>
          <p className="text-white mb-5">
            Des créations époustouflantes, une qualité inégalée, Votre Vision, 
            notre métier. Transformez vos idées en réalité visuelle 
            exceptionnelle avec notre impression numérique de pointe
          </p>
          <button type="button" href="/about" className="btn1 text-white">En savoir plus</button>
          {/* <a className="btn1 text-white" href="/about" type="button">En savoir plus</a> */}
        </div>
      </div>
      <div className="accueil-2">
        <div className="text-center" id="text-center-ac">
          <h3 className="fw-bold">Safajet</h3>
          <h2 className="fw-bold">
              Transformez vos idées en réalité visuelle 
              exceptionnelle avec notre impression 
              numérique de pointe !
            </h2>
            <p> 
              Chez Safa Jet, notre engagement envers l'innovation et la qualité se reflète dans chacun de nos 
              services d'impression numérique. Nous sommes fiers d'offrir une gamme complète de solutions 
              pour répondre à vos besoins créatifs et commerciaux. Explorez notre palette de services 
              exceptionnels qui transcendent les attentes
            </p>
        </div>
        <div className="d-flex justify-content-around align-items-center" id="Accueil">
          <div className="accueil-3">
            <h3>
              Pourquoi Safa Jet ?
            </h3>
            <h2>
              La réponse à vos besoins d'impression numérique
            </h2>
            <p>
              Chez Safa Jet, nous croyons en la puissance de la créativité et de l'innovation 
              pour transformer vos idées en œuvres visuelles exceptionnelles. En tant que 
              leader dans le domaine de l'impression numérique, nous nous engageons à 
              offrir bien plus que des services d'impression standard
            </p>
            <a className="icon-link" href="/about">
              En savoir plus
              <svg clclassNameass="bi" aria-hidden="true"></svg>
            </a>
          </div>
          <div className="accueil-4">
            <div className="row" id="row1">
              <div className="mb-3">
                <Image
                  src="/accueil1.jpg"
                  width={450}
                  height={300}
                  className="img1"
                  alt="c'est moi"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 d-flex justify-content-between">
              <Image
                  src="/accueil2.jpg"
                  width={225}
                  height={200}
                  className="rounded-3 me-3"
                  alt="c'est moi"
                />
                <Image
                  src="/accueil3.jpg"
                  width={225}
                  height={200}
                  className="rounded-3"
                  alt="c'est moi"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="acc-parr">
      <div className="acc-parr-1">
        <h2 className="fs-5">
          Nos Services
        </h2>
        <p className="fs-5 fw-bold">
          Découvrez l'excellence 
          de nos Services d'impression 
          numérique chez Safa Jet
        </p>
      </div>
      <div className="acc-parr-2">
        <p>
          Chez Safa Jet, notre engagement envers l'innovation et la qualité se reflète dans 
          chacun de nos services d'impression numérique. Nous sommes fiers d'offrir une 
          gamme complète de solutions pour répondre à vos besoins créatifs et 
          commerciaux.
        </p>
        <a className="icon-link" href="/service">
          En savoir plus
          <svg className="bi" aria-hidden="true"></svg>
        </a>
      </div>
    </div>

    <div className="accT">
      <h2>
        Témoignages Clients
      </h2>
      <p className="acc-tem-1">
        L'engagement envers la satisfaction client chez Safa Jet se traduit par une 
        communauté de clients satisfaits. Découvrez ce que nos clients ont à dire sur leur 
        expérience avec nous
      </p>

      <div className="accTem-1">
      <Image
        src="/accueil4.jpg"
        width={235}
        height={200}
        className="acct-img"
        alt="c'est moi"
      />
      <div className="accTem-2">
        <h4 className="fs-5 pb-3">"Une Équipe Exceptionnelle"</h4>
        <p className="fs-p">
          “Safa Jet ne se contente pas de répondre aux attentes, ils les dépassent. Travailler 
          avec eux a été une expérience exceptionnelle, du début à la fin. Leur équipe dévouée 
          et compétente a une manière unique de transformer des concepts en réalité 
          imprimée.”
        </p>
        <h4 className="fs-5 pb-3">"Créativité Sans Limite"</h4>
        <p className="fs-p">
          “La créativité chez Safa Jet est vraiment sans limite. Ils ont une compréhension 
          profonde de notre vision et la traduisent magnifiquement dans chaque impression. 
          C'est un plaisir de collaborer avec une équipe aussi talentueuse.”
        </p>
        <h4 className="fs-5 pb-3">"Qualité Inégalée"</h4>
        <p className="fs-p">
          “La qualité de l'impression chez Safa Jet est inégalée. Chaque détail est pris en 
          compte, et le résultat final est toujours impeccable. Nous avons trouvé en eux un 
          partenaire de confiance pour tous nos besoins d'impression.”
        </p>
        <h4 className="fs-5 pb-3">"Réactivité et Professionnalisme"</h4>
        <p className="fs-p">
          “La réactivité et le professionnalisme de Safa Jet sont vraiment appréciables. Ils 
          comprennent l'importance des délais et font tout pour garantir des livraisons 
          ponctuelles sans compromis sur la qualité. Une entreprise fiable à tous égards.”
        </p>
      </div>
      </div>
    </div>

    <div className="acc-realiser">
      <h4 className="fs-4 mx-5 mb-3">
        Nos Réalisations
      </h4>
      <h3 className="fs-3 mx-5 mb-3">
        Découvrez nos réalisations exceptionnelles dans notre Portfolio.
      </h3>
      <p className="fs-p mx-5 mb-5">
        Découvrez notre expertise à travers une collection captivante de projets réalisés avec passion et précision. Notre portfolio est le reflet de notre engagement envers 
        l'excellence, illustrant comment Safa Jet transforme les concepts créatifs en impressions numériques exceptionnelles.
      </p>
        <div class="content">
                <div class="container rounded">
                    <div class="rollers position-relative overflow-hidden">
                        <div class="start-roller"></div>
                        <div class="wrapper">
                            <div class="items-container roll-LL">
                                <div class="item">
                                <Image
                                  src="/service1.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service2.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service3.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service4.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service5.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                            </div>
                            <div class="items-container roll-RL">
                                <div class="item">
                                <Image
                                  src="/service16.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service17.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service18.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service19.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service21.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="items-container reverse-roll-LL">
                            <div class="item">
                                <Image
                                  src="/service6.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service7.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service8.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service9.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                            </div>
                            <div class="items-container reverse-roll-RL">
                            <div class="item">
                                <Image
                                  src="/service10.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service11.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service12.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service13.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service14.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                                </div>
                                <div class="item">
                                <Image
                                  src="/service15.jpg"
                                  width={200}
                                  height={200}
                                  alt="c'est moi"
                                />
                            </div>
                        </div>
                        <div className="end-roller"></div>
                    </div>
                </div>
      </div>
    </div>
    </div>

    <div className="vh-100">
      <div className="part-partenaire">
        <div className="partenaire">
          <div className="partenaire-0">
            <h4>
              Nos Partenaires de Confiance
            </h4>
            <h3 className="fs-3 fw-bold">
              Des partenariats solides, 
              une excellence constante
            </h3>
          </div>
          <div className="partenaire-1">
            <p className="fs-p">
              Chez Safa Jet, nous sommes fiers de collaborer avec des partenaires de confiance qui 
              partagent notre engagement envers l'excellence et l'innovation. Ces relations 
              stratégiques renforcent notre capacité à offrir des services d'impression numérique de 
              premier ordre. Découvrez les entreprises et organisations qui font partie de notre 
              réseau de confiance
            </p>
          </div>
        </div>
        <div className="partenaire2">
          <div>
            <Image
              src="/logo1.png"
              width={180}
              height={90}
              className="parimg"
            />
            <Image
              src="/logo2.png"
              width={180}
              height={90}
              className="parimg"
            />
            <Image
              src="/logo3.png"
              width={180}
              height={90}
              className="parimg"
            />
            <Image
              src="/logo4.png"
              width={180}
              height={90}
              className="parimg"
            />
          </div>
          <div className="mt-3">
            <Image
              src="/logo5.png"
              width={180}
              height={90}
              className="parimg"
            />
            <Image
              src="/logo6.png"
              width={180}
              height={90}
              className="parimg"
            />
            <Image
              src="/logo7.png"
              width={180}
              height={90}
              className="parimg"
            />
            <Image
              src="/logo8.png"
              width={180}
              height={90}
              className="parimg"
            />
            <Image
              src="/logo9.png"
              width={180}
              height={90}
              className="parimg"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="d-flex justify-content-center" id="acc-conc">
      <div className="acc-conc">
          <h3 className="fs-2 mb-4">Contactez-nous</h3>
          <p>
            Que ce soit pour discuter de vos besoins d'impression 
            numérique, obtenir des informations supplémentaires sur nos 
            services, ou pour toute autre demande, l'équipe de Safa Jet est 
            à votre disposition. N'hésitez pas à nous contacter selon vos 
            préférences :
          </p>
          <div>
            <div>
            <Image
              src="/icon0.png"
              width={40}
              height={40}
              className="me-2 mb-2 mx-0 ms-0"
            />
            <span>Centre-Ville, Rue de Berne, Djibouti</span>
            </div>
            <div>
            <Image
              src="/icon9.png"
              width={25}
              height={25}
              className="me-4 mb-3 ms-1"
            />
            <span>+253 77 86 11 43 / +253 77 22 63 43</span>
            </div>
            <div>
            <Image
              src="/icon8.png"
              width={25}
              height={25}
              className="me-4 ms-1"
            />
            <span>safajetdjib@gmail.com</span>
            </div>
          </div>
      </div>
      <div className="acc-conc1">
        <form  className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" id="formcom">
  
          <div className="row mb-4">
            <div className="col">
              <div data-mdb-input-init class="form-outline  border-primary-subtle">
                <input type="text" id="form6Example1" className="form-control" placeholder="Nom" />
              </div>
            </div>
            <div className="col">
              <div data-mdb-input-init class="form-outline  border-primary-subtle">
                <input type="text" id="form6Example2" class="form-control" placeholder="Prenom" />
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col">
              <div data-mdb-input-init class="form-outline  border-primary-subtle">
                <input type="text" id="form6Example1" className="form-control"  placeholder="Telephone"/>
              </div>
            </div>
            <div className="col">
              <div data-mdb-input-init class="form-outline  border-primary-subtle">
                <input type="text" id="form6Example2" class="form-control" placeholder="Adresse email" />
              </div>
            </div>
          </div>
          <div data-mdb-input-init class="form-outline mb-4  border-primary-subtle">
            <textarea className="form-control" id="form6Example7" rows="4" placeholder="Votre message"></textarea>
          </div>
          <button data-mdb-ripple-init type="button" class="btn btn-primary mb-4 rounded">Envoyer</button>
        </form>
      </div>
    </div>
    <Footer isVisible={isFooterVisible} />
</section>

  );
};

export default Home;