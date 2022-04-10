import React, { useState } from "react";

const UploadAndDisplayImage = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            {selectedImage && (
                <div>
                    <img
                        alt='not fount'
                        width={"250px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>
                        Remove
                    </button>
                </div>
            )}
            <br />

            <br />
            <input
                type='file'
                name='myImage'
                onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                    console.log(event.target.files[0]);
                    props.onImgChange(
                        URL.createObjectURL(event.target.files[0])
                    );
                }}
            />
        </div>
    );
};

export default UploadAndDisplayImage;
