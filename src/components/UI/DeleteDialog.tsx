import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

type TDeleteDialogProps = {
    open: boolean
    handleClose: VoidFunction
    handleOk: VoidFunction
    message: string
    title: string
}

export const DeleteDialog = ({ handleClose, handleOk, open, message, title }: TDeleteDialogProps) => {
    return (<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {title}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {message}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleOk} autoFocus>
                Agree
            </Button>
        </DialogActions>
    </Dialog>)
}