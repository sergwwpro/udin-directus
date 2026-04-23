"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { ua } from "@/content/ua";
import type { HomeContent } from "@/lib/content/home";

type ContactProps = { content?: HomeContent["contact"] };

export function Contact({ content }: ContactProps = {}) {
  const contact = content ?? ua.contact;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad response");
      toast.success(contact.form.success);
      reset();
    } catch {
      toast.error(contact.form.error);
    }
  };

  return (
    <section id="contact" className="relative">
      <Container className="py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <FadeIn className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden />
              <span className="eyebrow">{contact.eyebrow}</span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="mt-8 display-xl max-w-[12ch]">{contact.title}</h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-8 text-base md:text-lg text-ink/75 leading-[1.7] max-w-[42ch]">
                {contact.lead}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-12 flex flex-col gap-8">
                {contact.phones.map((p) => (
                  <a
                    key={p.value}
                    href={p.href}
                    className="group flex items-start gap-4 border-t border-hairline pt-5 hover:border-ink transition-colors"
                  >
                    <Phone
                      size={16}
                      strokeWidth={1.75}
                      className="mt-1 text-muted group-hover:text-accent transition-colors"
                    />
                    <span className="flex flex-col">
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                        {p.label}
                      </span>
                      <span className="mt-1 font-display text-2xl group-hover:text-accent transition-colors">
                        {p.value}
                      </span>
                    </span>
                  </a>
                ))}
                <a
                  href={contact.email.href}
                  className="group flex items-start gap-4 border-t border-hairline pt-5 hover:border-ink transition-colors"
                >
                  <Mail
                    size={16}
                    strokeWidth={1.75}
                    className="mt-1 text-muted group-hover:text-accent transition-colors"
                  />
                  <span className="flex flex-col">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                      {contact.email.label}
                    </span>
                    <span className="mt-1 font-display text-xl group-hover:text-accent transition-colors break-all">
                      {contact.email.value}
                    </span>
                  </span>
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="lg:col-span-6 lg:col-start-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-8 border border-hairline bg-paper-raised/50 p-8 md:p-12"
            >
              <Input
                label={contact.form.name}
                error={errors.name?.message}
                autoComplete="name"
                {...register("name")}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Input
                  label={contact.form.phone}
                  error={errors.phone?.message}
                  type="tel"
                  autoComplete="tel"
                  {...register("phone")}
                />
                <Input
                  label={contact.form.email}
                  error={errors.email?.message}
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                />
              </div>
              <Textarea
                label={contact.form.message}
                error={errors.message?.message}
                {...register("message")}
              />

              <Button type="submit" variant="primary" arrow disabled={isSubmitting} className="self-start mt-4">
                {isSubmitting ? contact.form.sending : contact.form.submit}
              </Button>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
