const Modal = ({ data, content, setSelectedContent, setShowModal }) => {
    const { name, url, description, date, type } = content;
    return(
        <div style={styles.modal}>
            <div style={styles.modalContent}>
                <div style={styles.modalHeader}>
                    <h1 style={styles.modalTitle}>{name}</h1>
                    <button style={styles.modalCloseButton} onClick={() => setShowModal(false)}>close</button>
                </div>
                <div style={styles.splitContainer}>
                    <div style={styles.modalImageContainer}>
                        <img style={styles.modalIMage} />
                        <p style={styles.modalDescriptionText}>{description}</p>
                    </div>
                    <div style={styles.modalDescription}>
                        <div style={styles.modalRowData}>
                            <p style={styles.modalDescriptionText}>Date</p>
                            <p style={styles.modalDescriptionText}>{date}</p>
                        </div>
                        <div style={styles.modalRowData}>
                            <p style={styles.modalDescriptionText}>Type</p>
                            <p style={styles.modalDescriptionText}>{type}</p>
                        </div>
                    </div>
                </div>
                <div style={styles.modalImagePicker}></div>
            </div>
        </div>
    );
}