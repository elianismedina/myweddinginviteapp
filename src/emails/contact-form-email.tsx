import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderName: string;
  senderPhone: string;
};

export default function ContactFormEmail({
  senderName,
  senderPhone,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje</Preview>
      <Tailwind>
        <Body className="bg-primary-500 text-primary-900">
          <Container>
            <Section className="bg-primary-500 borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Hola Carlos & Elizabeth. <br />
                Un invitado ha confirmado su asistencia a tu boda
              </Heading>
              <Text>
                El nombre del invitado que confirmó su asistencia es:{" "}
                {senderName}
              </Text>
              <Hr />
              <Text>El teléfono del invitado es: {senderPhone}</Text>
              <Hr />
              <Text>
                Por favor, revisa la información y confirma la asistencia del
                invitado.
              </Text>
              <Hr />
              <Text>
                Saludos, el equipo de soporte de la plataforma de confirmación
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
