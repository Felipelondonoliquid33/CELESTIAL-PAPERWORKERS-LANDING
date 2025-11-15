import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Label } from './ui/Label';
import { Input } from './ui/Input';
import { cn } from '../utils/cn';

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#4F97A3] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#87CEBB] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeopbwad");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-8 sm:py-12 min-h-[20rem] sm:min-h-[30rem]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003366] mb-3 sm:mb-4 px-2">¡Mensaje enviado con éxito! 🌟</h2>
          <p className="text-base sm:text-lg text-[#212842] px-2">Pronto te responderemos.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003366] mb-2">
        Envíanos un mensaje
      </h2>
      <p className="mt-2 max-w-sm text-xs sm:text-sm text-[#212842] mb-6 sm:mb-8">
        Completa el formulario y nos pondremos en contacto contigo lo antes posible.
      </p>

      <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4 sm:space-y-6 md:flex-row md:space-y-0 md:space-x-4">
          <LabelInputContainer>
            <Label htmlFor="nombre">Nombre Completo</Label>
            <Input id="nombre" name="nombre" placeholder="Juan Pérez" type="text" required />
            <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
          </LabelInputContainer>
          
          <LabelInputContainer>
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" name="email" placeholder="juan@ejemplo.com" type="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Label htmlFor="asunto">Asunto</Label>
          <Input id="asunto" name="asunto" placeholder="¿En qué podemos ayudarte?" type="text" required />
          <ValidationError prefix="Asunto" field="asunto" errors={state.errors} />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="mensaje">Mensaje</Label>
          <motion.div
            className="group/input rounded-lg p-[2px] transition duration-300"
            whileHover={{ background: "radial-gradient(100px circle at var(--mouse-x) var(--mouse-y), #4F97A3, transparent 80%)" }}
          >
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={5}
              className="shadow-input flex w-full rounded-md border-none bg-white px-3 py-2 text-xs sm:text-sm text-[#212842] transition duration-400 group-hover/input:shadow-none placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-[#4F97A3] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none"
              placeholder="Cuéntanos tu situación y cómo podemos ayudarte..."
            />
          </motion.div>
          <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 sm:h-12 w-full rounded-md bg-gradient-to-br from-[#4F97A3] to-[#434F85] font-medium text-sm sm:text-base text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:shadow-2xl transition-all duration-300"
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? 'Enviando...' : 'Enviar Mensaje →'}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}