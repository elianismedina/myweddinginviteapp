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

const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
});

const ConfirmSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
        className={raleway.className}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirma tu asistencia
              </ModalHeader>
              <ModalBody>
                <form action="">
                  <div className="flex flex-col gap-4">
                    <label htmlFor="name" className="text-primary-800">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
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
                      name="phone"
                      id="phone"
                      className="p-2 bg-primary-950 text-primary-100"
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className="bg-primary-950 text-primary-100 p-2"
                >
                  Cerrar
                </Button>
                <Button
                  onPress={onClose}
                  className="bg-primary-800 text-primary-100 p-2"
                >
                  Confirmar asistencia
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConfirmSection;
