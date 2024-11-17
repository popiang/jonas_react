import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

function AddCabin() {
    return (
        <Modal>
            <Modal.Open open="cabin-form">
                <Button>Add new cabin</Button>
            </Modal.Open>
            <Modal.Window name="cabin-form">
                <CreateCabinForm />
            </Modal.Window>

            <Modal.Open open="table">
                <Button>Show table</Button>
            </Modal.Open>
            <Modal.Window name="table">
                <CabinTable />
            </Modal.Window>
        </Modal>
    );
}

export default AddCabin;
