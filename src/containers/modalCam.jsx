import "../assets/styles/modalCam.css"

function ModalCam ({children}) {
    return (
        <>
            <div className="container-modal">
                {children}
            </div>
        </>
    )
}

export default ModalCam;