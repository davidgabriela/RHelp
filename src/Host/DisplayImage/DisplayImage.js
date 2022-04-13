import React, { useState } from "react";
import FileBase64 from "react-file-base64";

const UploadAndDisplayImage = (props) => {
    const [selectedImage, setSelectedImage] = useState("");

    return (
        <div>
            {selectedImage && (
                <div>
                    <img alt='not fount' width={"250px"} src={selectedImage} />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>
                        Remove
                    </button>
                </div>
            )}
            <br />

            <br />

            <FileBase64
                type='file'
                multiple={false}
                onDone={({ base64 }) => {
                    setSelectedImage(base64);
                    props.onImgChange(base64);
                }}
            />
        </div>
    );
};

export default UploadAndDisplayImage;
