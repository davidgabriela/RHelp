import React, { useState } from "react";
import { Button } from "react-bootstrap";
import FileBase64 from "react-file-base64";
import './DisplayImage.css';

const UploadAndDisplayImage = (props) => {
    const [selectedImage, setSelectedImage] = useState("");

    return (
        <div className="upload">
            <FileBase64
                type='file'
                multiple={false}
                onDone={({ base64 }) => {
                    setSelectedImage(base64);
                    props.onImgChange(base64);
                }}
            />
            {selectedImage && (
                <div className="photo">
                    <Button variant="dark" onClick={() => setSelectedImage(null)}>
                        Remove
                    </Button>
                    <img alt='upload' width={"400px"} src={selectedImage} />
                </div>
            )}

        </div>
    );
};

export default UploadAndDisplayImage;
