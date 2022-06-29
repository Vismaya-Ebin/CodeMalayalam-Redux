import React ,{useState} from 'react';


const ImageGalleryFunction = ({links}) => {
    console.log('Image Gallery',links)
    const[ initialState,updatedState] = useState(links);
    console.log('Image Gallery2',initialState)

    const removeItem=(data) => {
        updatedState(initialState.filter(item =>item !== data));
    }
    return (
        <div>
            <h2>Image Gallery</h2>
            {initialState.map((data,index)=>(<div>
                <img src={data}/>
                <button onClick={()=>removeItem(data)}>Close</button>
            </div>))}
        </div>
    );
}

export default ImageGalleryFunction;
