import { useState } from "react";
import { motion } from "framer-motion";

import api from "../../../services/api";

const tiposProjeto = [
  {
    label: "Corporativo",
    value: "CORPORATIVO",
  },
  {
    label: "Comercial",
    value: "COMERCIAL",
  },
  {
    label: "Residencial",
    value: "RESIDENCIAL",
  },
  {
    label: "Retrofit / Reforma",
    value: "RETROFIT_REFORMA",
  },
];

const initialForm = {
  tipoProjeto: "CORPORATIVO",
  nome: "",
  empresa: "",
  email: "",
  telefone: "",
  mensagem: "",
};

const ContatoForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Informe seu nome.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Informe seu e-mail.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Informe um e-mail válido.";
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Informe seu telefone.";
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Conte um pouco sobre o projeto.";
    } else if (formData.mensagem.trim().length < 20) {
      newErrors.mensagem =
        "Descreva o projeto usando pelo menos 20 caracteres.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFeedback("");

    if (!validateForm()) {
      setStatus("error");
      setFeedback("Revise os campos indicados antes de enviar.");
      return;
    }

    try {
      setStatus("loading");

      const payload = {
        tipoProjeto: formData.tipoProjeto,
        nome: formData.nome.trim(),
        empresa: formData.empresa.trim() || null,
        email: formData.email.trim().toLowerCase(),
        telefone: formData.telefone.trim(),
        mensagem: formData.mensagem.trim(),
        origem: "SITE",
      };

      await api.post("/contatos", payload);

      setStatus("success");
      setFeedback(
        "Mensagem enviada com sucesso. Em breve entraremos em contato.",
      );

      setFormData(initialForm);
      setErrors({});
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);

      const apiMessage = error.response?.data?.message;

      setStatus("error");
      setFeedback(
        apiMessage ||
          "Não foi possível enviar sua mensagem. Tente novamente em instantes.",
      );
    }
  };

  const isLoading = status === "loading";

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      className="border border-[#733522]/15 bg-[#FCF8F4] p-6 sm:p-9 lg:p-12"
      initial={{
        opacity: 0,
        x: 45,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Tipo de projeto */}
      <fieldset>
        <legend className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#9A604E]">
          Tipo de projeto
        </legend>

        <div className="mt-5 flex flex-wrap gap-3">
          {tiposProjeto.map((tipo) => {
            const selected = formData.tipoProjeto === tipo.value;

            return (
              <button
                key={tipo.value}
                type="button"
                onClick={() =>
                  setFormData((current) => ({
                    ...current,
                    tipoProjeto: tipo.value,
                  }))
                }
                className={`min-h-10 border px-5 text-[10px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                  selected
                    ? "border-[#843B21] bg-[#843B21] text-white"
                    : "border-[#733522]/20 bg-transparent text-[#8A6C61] hover:border-[#843B21] hover:text-[#843B21]"
                }`}
              >
                {tipo.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Nome e empresa */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <FormField
          label="Nome"
          name="nome"
          type="text"
          value={formData.nome}
          error={errors.nome}
          onChange={handleChange}
          autoComplete="name"
          required
        />

        <FormField
          label="Empresa"
          name="empresa"
          type="text"
          value={formData.empresa}
          error={errors.empresa}
          onChange={handleChange}
          autoComplete="organization"
        />
      </div>

      {/* E-mail e telefone */}
      <div className="mt-9 grid gap-8 sm:grid-cols-2">
        <FormField
          label="E-mail"
          name="email"
          type="email"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />

        <FormField
          label="Telefone"
          name="telefone"
          type="tel"
          value={formData.telefone}
          error={errors.telefone}
          onChange={handleChange}
          autoComplete="tel"
          required
        />
      </div>

      {/* Mensagem */}
      <div className="mt-9">
        <label
          htmlFor="mensagem"
          className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#9A604E]"
        >
          Sobre o projeto
        </label>

        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          rows={6}
          maxLength={2000}
          placeholder="Conte um pouco sobre o espaço, o uso e os objetivos."
          aria-invalid={Boolean(errors.mensagem)}
          aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
          className={`mt-4 block w-full resize-y border-x-0 border-t-0 bg-transparent px-0 py-3 text-base font-light text-[#543025] outline-none transition-colors placeholder:text-[#625A56]/45 focus:ring-0 ${
            errors.mensagem
              ? "border-b border-red-700"
              : "border-b border-[#733522]/20 focus:border-[#C9A55A]"
          }`}
        />

        <div className="mt-2 flex items-start justify-between gap-4">
          {errors.mensagem ? (
            <p id="mensagem-error" className="text-xs text-red-700">
              {errors.mensagem}
            </p>
          ) : (
            <span />
          )}

          <span className="text-[10px] text-[#625A56]/50">
            {formData.mensagem.length}/2000
          </span>
        </div>
      </div>

      {/* Envio */}
      <div className="mt-10 flex flex-col items-start gap-5">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex min-h-12 items-center justify-center gap-5 border border-[#843B21] bg-[#843B21] px-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:bg-transparent hover:text-[#843B21] disabled:cursor-not-allowed disabled:opacity-55"
        >
          {isLoading ? "Enviando..." : "Enviar"}

          {!isLoading && <span aria-hidden="true">→</span>}
        </button>

        {feedback && (
          <p
            role={status === "error" ? "alert" : "status"}
            className={`text-sm font-light ${
              status === "success" ? "text-green-800" : "text-red-700"
            }`}
          >
            {feedback}
          </p>
        )}
      </div>
    </motion.form>
  );
};

const FormField = ({
  label,
  name,
  type,
  value,
  error,
  onChange,
  autoComplete,
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#9A604E]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`mt-4 block w-full border-x-0 border-t-0 bg-transparent px-0 py-3 text-base font-light text-[#543025] outline-none transition-colors focus:ring-0 ${
          error
            ? "border-b border-red-700"
            : "border-b border-[#733522]/20 focus:border-[#C9A55A]"
        }`}
      />

      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
};

export default ContatoForm;
