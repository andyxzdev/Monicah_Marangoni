import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const whatsappNumber = "5511999999999";

const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de conversar sobre um projeto de arquitetura.",
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const socialLinks = {
  linkedin: "#",
  instagram: "https://www.instagram.com/monicahmarangoni_arquiteta",
  pinterest: "#",
};

const InstagramIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.6"
    />

    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />

    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const LinkedInIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M6.5 8.2H3.2V21h3.3V8.2ZM4.85 3A1.92 1.92 0 1 0 4.85 6.84 1.92 1.92 0 0 0 4.85 3ZM21 13.65c0-3.86-2.06-5.65-4.81-5.65a4.15 4.15 0 0 0-3.75 2.06V8.2H9.15V21h3.29v-6.34c0-1.67.32-3.29 2.39-3.29 2.04 0 2.06 1.91 2.06 3.4V21H21v-7.35Z" />
  </svg>
);

const PinterestIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2a10 10 0 0 0-3.64 19.31c-.09-1.58-.02-3.48.39-5.22l1.29-5.46s-.32-.65-.32-1.6c0-1.5.87-2.62 1.95-2.62.92 0 1.37.69 1.37 1.52 0 .93-.59 2.31-.9 3.59-.26 1.07.54 1.95 1.6 1.95 1.92 0 3.39-2.02 3.39-4.95 0-2.59-1.86-4.4-4.52-4.4-3.08 0-4.89 2.31-4.89 4.7 0 .93.36 1.93.81 2.47.09.11.1.2.07.32l-.3 1.23c-.05.2-.16.24-.37.15-1.39-.65-2.26-2.68-2.26-4.31 0-3.51 2.55-6.73 7.35-6.73 3.86 0 6.86 2.75 6.86 6.43 0 3.84-2.42 6.93-5.78 6.93-1.13 0-2.19-.59-2.55-1.28l-.69 2.64c-.25.97-.93 2.19-1.38 2.93.83.26 1.7.4 2.61.4A10 10 0 0 0 12 2Z" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleTemporaryLink = (event, href) => {
    if (href === "#") {
      event.preventDefault();
    }
  };

  return (
    <footer
      id="contato"
      className="relative overflow-hidden bg-[#32140D] px-5 pb-8 pt-20 text-white sm:px-8 md:pt-28 lg:px-12"
    >
      <motion.div
        className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1.35fr_0.85fr] lg:gap-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        <div>
          <motion.span
            variants={itemVariants}
            className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#C9A55A] md:text-xs"
          >
            Vamos construir juntos
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-7 max-w-3xl text-5xl font-light italic leading-[1.05] tracking-[-0.025em] text-[#E9CDA9] sm:text-6xl lg:text-[70px]"
          >
            Estratégia e bem-estar em espaços que geram{" "}
            <span className="text-[#C9A55A]">resultados.</span>
          </motion.h2>

          <motion.a
            variants={itemVariants}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-5 border-b border-[#C9A55A] pb-2 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A55A] transition-colors duration-300 hover:border-white hover:text-white md:text-sm"
          >
            Iniciar uma conversa
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-300 group-hover:translate-x-2"
            >
              →
            </span>
          </motion.a>
        </div>

        <motion.div
          variants={itemVariants}
          className="grid content-start gap-12 sm:grid-cols-2"
        >
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/45">
              Endereço
            </span>

            <address className="mt-5 not-italic">
              <p className="font-serif text-xl leading-relaxed text-[#E9CDA9]">
                Rua Alfredo Pujol, 545 · Cj 81
                <br />
                02017-010 · São Paulo · SP
              </p>
            </address>
          </div>

          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/45">
              Contato
            </span>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href="tel:+551122833481"
                className="font-serif text-xl text-[#E9CDA9] transition-colors duration-300 hover:text-[#C9A55A]"
              >
                (11) 2283-3481
              </a>

              <a
                href="mailto:contato@monicahmarangoni.com.br"
                className="break-all text-sm font-light text-white/60 transition-colors duration-300 hover:text-[#C9A55A]"
              >
                contato@monicahmarangoni.com.br
              </a>
            </div>
          </div>

          <div className="sm:col-span-2">
            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/45">
              Social
            </span>

            <div className="mt-5 flex items-center gap-5">
              <a
                href={socialLinks.linkedin}
                onClick={(event) =>
                  handleTemporaryLink(event, socialLinks.linkedin)
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 transition-colors duration-300 hover:text-[#C9A55A]"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 transition-colors duration-300 hover:text-[#C9A55A]"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>

              <a
                href={socialLinks.pinterest}
                onClick={(event) =>
                  handleTemporaryLink(event, socialLinks.pinterest)
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="text-white/70 transition-colors duration-300 hover:text-[#C9A55A]"
              >
                <PinterestIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mx-auto mt-24 flex max-w-[1400px] flex-col gap-5 border-t border-white/15 pt-7 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40 sm:flex-row sm:items-center sm:justify-between"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
      >
        <p className="text-white sm:text-left">
          © {currentYear} Monicah Marangoni · Arquitetura corporativa
        </p>

        <Link
          to="/politica-de-privacidade"
          className="transition-colors duration-300 hover:text-[#C9A55A]"
        >
          Política de privacidade
        </Link>

        <span className="text-white/35">
          desenvolvido por agencia panda creative
        </span>
      </motion.div>
    </footer>
  );
};

export default Footer;
