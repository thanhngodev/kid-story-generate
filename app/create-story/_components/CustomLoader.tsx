import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import Image from "next/image";
import { useEffect } from "react";

const CustomLoader = ({ isLoading }: { isLoading: boolean }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <div>
      {isLoading && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
          isKeyboardDismissDisabled={true}
        >
          <ModalContent>
            {() => (
              <>
                <ModalBody className="p-10 flex w-full items-center justify-center">
                  <Image
                    src={"/loader.gif"}
                    alt="loader"
                    width={300}
                    height={300}
                    className="w-[200px] h-[200px]"
                  />
                  <h2 className="font-bold text-primary text-2xl text-center">
                    Please Wait
                    <br />
                    Story Generating...
                  </h2>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default CustomLoader;
