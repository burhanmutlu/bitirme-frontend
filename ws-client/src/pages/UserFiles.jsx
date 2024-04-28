import React, {Component} from 'react';
import {getAllFiles, getFilesById} from "../api/apiCalls";

class UserFiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            images: []
        };
    }

    async componentDidMount() {
        const id = 1;
        try {
            const files = await getAllFiles(id);
            const imageDataPromises = files.data.map(d => getFilesById(d.id));
            const imageResponses = await Promise.all(imageDataPromises);
            const imageUrls = imageResponses.map(response => response.data);
            this.setState({ data: files.data, images: imageUrls });
        } catch (error) {
            console.error('Error fetching files:', error);
        }
    }

    render() {
        const { images } = this.state;
        console.log(images);
        return (
            <div>
                {3 === 3 ? <p className="text-bg-danger alert-danger">3</p> : 3}
                <p>Images</p>
                {images.map((imageUrl, index) => (
                    <img src={imageUrl} alt={`Resim-${index}`} />
                ))}
            </div>
        );
    }
}

export default UserFiles;
