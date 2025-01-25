import { useContext } from "react"
import { ModuleContext } from "../contexts"
import { DeleteDialog } from "../../../../components";

export const DeleteModule = () => {
    const { idDelete, handleOpenDelete, openDelete } = useContext(ModuleContext);

    const handleOk = (): void => { }

    return <DeleteDialog handleClose={handleOpenDelete} handleOk={handleOk} title="¿Esta seguro de eliminar?" message="¿Esta seguro de eliminar este registro?" open={openDelete} />
}