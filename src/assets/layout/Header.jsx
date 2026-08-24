import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import logoM from "../../assets/images/logo/M2.webp";

const socialLinks = {
  linkedin: "#",
  instagram: "https://www.instagram.com/monicahmarangoni_arquiteta",
  pinterest: "#",
};

const menuItems = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Sobre",
    href: "#quem-assina",
  },
  {
    label: "Projetos",
    href: "#projetos",
  },
  {
    label: "Imprensa",
    href: "#instagram",
  },
  {
    label: "Contato",
    href: "#contato",
  },
];

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

const MenuIcon = ({ open }) => (
  <div className="relative h-5 w-7">
    <span
      className={`absolute left-0 top-1 block h-px w-7 bg-current transition-transform duration-300 ${
        open ? "translate-y-[6px] rotate-45" : ""
      }`}
    />

    <span
      className={`absolute left-0 top-[10px] block h-px w-7 bg-current transition-opacity duration-300 ${
        open ? "opacity-0" : "opacity-100"
      }`}
    />

    <span
      className={`absolute bottom-1 left-0 block h-px w-7 bg-current transition-transform duration-300 ${
        open ? "-translate-y-[5px] -rotate-45" : ""
      }`}
    />
  </div>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappNumber = "5511999999999";

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de iniciar um projeto de arquitetura.",
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleTemporaryLink = (event, href) => {
    if (href === "#") {
      event.preventDefault();
    }
  };

  return (
    <motion.header
      className={`sticky inset-x-0 top-0 z-[100] bg-[#F1E9E2]/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_5px_30px_rgba(50,20,13,0.08)]" : ""
      }`}
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-4"
          aria-label="Voltar ao início"
        >
          <div
            className="h-10 w-12 bg-[#733522]"
            style={{
              WebkitMaskImage: `url("${logoM}")`,
              maskImage: `url("${logoM}")`,
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />

          <div className="hidden sm:block">
            <span className="block font-serif text-xl italic leading-none text-[#733522] lg:text-2xl">
              Monicah Marangoni
            </span>

            <span className="mt-2 block text-[8px] font-medium uppercase tracking-[0.35em] text-[#8A6C61] lg:text-[9px]">
              Arquitetura corporativa
            </span>
          </div>
        </a>

        {/* Menu desktop */}
        <nav
          className="hidden items-center gap-8 xl:flex"
          aria-label="Navegação principal"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-[10px] font-medium uppercase tracking-[0.3em] text-[#5D4B45] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#9A604E] after:transition-all after:duration-300 hover:text-[#9A604E] hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Ações desktop */}
        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-4 border-r border-[#8A6C61]/20 pr-5">
            {/* LinkedIn temporário */}
            <a
              href={socialLinks.linkedin}
              onClick={(event) =>
                handleTemporaryLink(event, socialLinks.linkedin)
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#5D4B45] transition-colors duration-300 hover:text-[#C9A55A]"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>

            {/* Instagram */}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#5D4B45] transition-colors duration-300 hover:text-[#C9A55A]"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>

            {/* Pinterest temporário */}
            <a
              href={socialLinks.pinterest}
              onClick={(event) =>
                handleTemporaryLink(event, socialLinks.pinterest)
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="text-[#5D4B45] transition-colors duration-300 hover:text-[#C9A55A]"
            >
              <PinterestIcon className="h-4 w-4" />
            </a>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#9A604E] px-7 text-[10px] font-medium uppercase tracking-[0.25em] text-[#9A604E] transition-colors duration-300 hover:bg-[#9A604E] hover:text-white"
          >
            Iniciar projeto
          </a>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="relative z-20 flex h-11 w-11 items-center justify-center text-[#733522] lg:hidden"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-x-0 top-20 z-10 h-[calc(100dvh-5rem)] overflow-y-auto bg-[#F1E9E2] px-5 py-10 sm:px-8 lg:hidden"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <nav className="flex flex-col" aria-label="Navegação mobile">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-[#733522]/15 py-5 font-serif text-4xl font-light italic text-[#733522]"
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex min-h-14 w-full items-center justify-center border border-[#9A604E] bg-[#9A604E] px-6 text-xs font-medium uppercase tracking-[0.3em] text-white"
            >
              Iniciar projeto
            </a>

            {/* Redes sociais mobile */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href={socialLinks.linkedin}
                onClick={(event) =>
                  handleTemporaryLink(event, socialLinks.linkedin)
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#733522] transition-colors duration-300 hover:text-[#C9A55A]"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#733522] transition-colors duration-300 hover:text-[#C9A55A]"
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
                className="text-[#733522] transition-colors duration-300 hover:text-[#C9A55A]"
              >
                <PinterestIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
