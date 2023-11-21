import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Algum projeto ou desafio em mente? <br className='sm:block hidden' />
       Vamos construir algo juntos!
      </p>
      <Link to='/contato' className='btn'>
        Contato
      </Link>
    </section>
  );
};

export default CTA;