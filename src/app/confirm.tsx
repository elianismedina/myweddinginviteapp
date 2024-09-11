"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import localFont from "next/font/local";

import { sendEmail } from "@/actions/sendEmail";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
});

const ConfirmSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const notify = () => toast.success("¡Gracias por confirmar tu asistencia!");

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Button
          onPress={onOpen}
          className=" bg-primary-800 text-primary-100 mb-8 p-2"
        >
          Confirma tu asistencia
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        backdrop="opaque"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
            // transition: "all 0.3s",
          },
        }}
        className={raleway.className}
      >
        <ToastContainer position="top-center" autoClose={1000} />
        <ModalContent>
          {(onClose) => (
            <>
              <form
                action={async (formData) => {
                  const { error } = await sendEmail(formData);
                  if (error) {
                    console.error(error);
                    return;
                  }
                }}
              >
                <ModalHeader className="flex flex-col gap-1">
                  Confirma tu asistencia
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="name" className="text-primary-800">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={50}
                      name="senderName"
                      placeholder="Jane Doe"
                      id="name"
                      className="p-2 bg-primary-950 text-primary-100"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="phone" className="text-primary-800">
                      Número de teléfono
                    </label>
                    <input
                      type="phone"
                      required
                      maxLength={10}
                      placeholder="1234567890"
                      name="senderPhone"
                      id="phone"
                      className="p-2 bg-primary-950 text-primary-100"
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                    className="px-4 py-2 text-primary-400 bg-primary-950 rounded-md flex flex-row items-center justify-center gap-2 text-sm"
                  >
                    Cerrar
                  </Button>
                  <div>
                    <button
                      type="submit"
                      className="px-4 py-2 text-primary-950 bg-primary-500 font-bold rounded-md flex flex-row items-center justify-center gap-2 text-sm"
                      onClick={() => {
                        notify();
                      }}
                    >
                      Confirmar asistencia
                    </button>
                  </div>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConfirmSection;
