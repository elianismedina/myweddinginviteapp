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
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Hola Carlos & Elizabeth, un invitado ha confirmado su asistencia
                a tu boda
              </Heading>
              <Text>
                El nombre del invitado que confirmó su asistencia es:{" "}
                {senderName}
              </Text>
              <Hr />
              <Text>El teléfono del invitado es: {senderPhone}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
