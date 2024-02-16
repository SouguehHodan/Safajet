import Image from "next/image";
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'


const About = () => {

  const isNavbarVisible = true;
  const isFooterVisible = true;

    return (
      <section>
        <Navbar isVisible={isNavbarVisible} />
      <section className="sec_about">
        <h1 className="mx-2 mb-5">À Propos de Safa Jet</h1>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title fs-4 fw-bold mb-4 mt-3">
              Safa Jet : Nourrissez votre créativité avec des impressions 
              exceptionnelles, où chaque détail prend vie et chaque 
              couleur raconte une histoire unique.
            </h5>
            <p className="card-text">
              Chez Safa Jet, notre engagement envers l'innovation et la qualité se reflète dans chacun de nos 
              services d'impression numérique. Nous sommes fiers d'offrir une gamme complète de solutions 
              pour répondre à vos besoins créatifs et commerciaux. Explorez notre palette de services 
              exceptionnels qui transcendent les attentes.
            </p>
          </div>
        </div>


        <div className="d-flex justify-content-center" id="dabout">
          <div className="d-1">
            <div className="divabout">
              <Image
                src="/icon1.png"
                width={50}
                height={50}
                className="mx-3"
              /> 
              <span className="span_title">Notre Mission</span>
              <p className="mt-3">
                Chez Safa Jet, notre mission est claire : transformer vos idées en œuvres d'art 
                imprimées exceptionnelles. Que vous recherchiez des impressions grand format 
                qui ne passent pas inaperçues, des imprimés personnalisés qui reflètent votre 
                identité, des produits promotionnels innovants ou un service de design 
                graphique de pointe, nous sommes là pour donner vie à votre vision.
              </p>
            </div>
            <div className="divabout">
            <Image
              src="/icon2.png"
              width={50}
              height={50}
              className="mx-3"
            />
            <span className="span_title">Notre Engagement</span>
            <p className="mt-3">
              Créativité sans Limites : Chaque projet est une opportunité d'exprimer notre 
              créativité débordante. Nous repoussons les limites pour offrir des solutions 
              uniques et mémorables. </p>
            <p className="mt-3">
              Qualité Inégalée : Nous croyons en l'excellence à chaque étape. De la 
              conception à l'impression, la qualité est notre signature. </p>
            <p className="mt-3">
              Partenariat de Confiance : Nous établissons des relations solides avec nos 
              clients. Votre succès est notre succès, et nous sommes déterminés à être votre 
              partenaire de confiance dans tous vos projets d'impression
              </p>
            </div>
            <div className="divabout">
            <Image
              src="/icon3.png"
              width={50}
              height={50}
               className="mx-3"
            />
            <span className="span_title">Notre Histoire</span>
            <p className="mt-3">
              Depuis notre création, nous avons eu le privilège de travailler avec des clients 
              diversifiés, des petites entreprises aux grandes marques. Chaque projet nous 
              inspire à repousser les frontières de la créativité et à fournir des résultats qui 
              dépassent les attentes.
              </p>
            </div>
          </div>
          <div className="about-img">
            <div>
              <Image
                src="/about1.jpg"
                width={600}
                height={350}
                className="mb-5"
                id="about-img1"
                alt="c'est moi"
              />
              </div>
            <div className="about-img1">
              <Image
                src="/about2.jpg"
                width={600}
                height={350}
                id="about-img1"
                alt="c'est moi"
              />
            </div>
          </div>
        </div>

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
            <textarea class="form-control" id="form6Example7" rows="4" placeholder="Votre message"></textarea>
          </div>
          <button data-mdb-ripple-init type="button" class="btn btn-primary mb-4 rounded">Envoyer</button>
        </form>

      </section>
      <Footer isVisible={isFooterVisible} />
</section>
    );
  };
  
  export default About;