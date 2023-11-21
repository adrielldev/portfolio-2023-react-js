import { useState, useRef, Suspense,useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../Components/Loader";
import Alert from "../Components/Alert";
import Footer from "../Components/Footer";
import useAlert from "../hooks/useAlert";
const Contact = () => {
  const [form, setform] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation,setCurrentAnimation] = useState('idle')
  const {alert,showAlert,hideAlert} = useAlert();
  const formRef = useRef(null);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {
    setCurrentAnimation('walk')

  };
  const handleBlur = () => {
    setCurrentAnimation('idle')
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit')

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({show:true,text:'Mensagem enviada com sucesso',type:'success'})
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('idle')
        showAlert({show:true,text:'Erro ao enviar mensagem',type:'danger'})
        console.log(error);
      }).finally(()=>{
        setCurrentAnimation('idle')
        hideAlert();
        setform({name:'',email:'',message:''})
      })
  };

  return (
    <div>
      <section className="relative flex lg:flex-row flex-col max-container">
      { alert.show && <Alert {...alert}/>}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Entre em Contato</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className="text-black-500 font-semibold">Nome</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="João"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className="text-black-500 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="joao@gmail.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className="text-black-500 font-semibold">Sua Mensagem</label>
          <textarea
            name="message"
            className="textarea"
            rows={4}
            placeholder="Me diga como posso te ajudar!"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            disabled={isLoading}
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5],fov:75,near:0.1,far:1000 }} >
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={0.5}/>
          <Suspense fallback={<Loader />}>
            <Fox 
            currentAnimation={currentAnimation}
            position={[0.5,0.35,0]}
            rotation={[12.6,-0.6,0]}
            scale={[0.5,0.5,0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Contact;
