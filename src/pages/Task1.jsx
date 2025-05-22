import React from 'react';
import './Laboratorna_5_2.css'
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const Task1 = () => {
    const images = [
        {
            preview: 'https://picsum.photos/id/1035/300/200',
            original: 'https://picsum.photos/id/1035/1200/800',
            description: 'Пляж на заході сонця',
        },
        {
            preview: 'https://picsum.photos/id/1039/300/200',
            original: 'https://picsum.photos/id/1039/1200/800',
            description: 'Пташка на гілці',
        },
        {
            preview: 'https://picsum.photos/id/1045/300/200',
            original: 'https://picsum.photos/id/1045/1200/800',
            description: 'Зимовий пейзаж',
        },
        {
            preview: 'https://picsum.photos/id/1052/300/200',
            original: 'https://picsum.photos/id/1052/1200/800',
            description: 'Кіт у коробці',
        },
        {
            preview: 'https://picsum.photos/id/1058/300/200',
            original: 'https://picsum.photos/id/1058/1200/800',
            description: 'Квітка крупним планом',
        },
        {
            preview: 'https://picsum.photos/id/1060/300/200',
            original: 'https://picsum.photos/id/1060/1200/800',
            description: 'Місто вночі',
        },
        {
            preview: 'https://picsum.photos/id/1081/300/200',
            original: 'https://picsum.photos/id/1081/1200/800',
            description: 'Авто на дорозі',
        },
        {
            preview: 'https://picsum.photos/id/1082/300/200',
            original: 'https://picsum.photos/id/1082/1200/800',
            description: 'Графіті на стіні',
        },
        {
            preview: 'https://picsum.photos/id/1083/300/200',
            original: 'https://picsum.photos/id/1083/1200/800',
            description: 'Ранковий туман',
        },
    ];

    const handleImageClick = (src, description) => {
        const instance = basicLightbox.create(`
            <img src="${src}" alt="${description}" />
            <p style="color:white; text-align:center;">${description}</p>
        `);
        instance.show();
    };

    return (
        <div className="gallery grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map(({ preview, original, description }) => (
                <img
                    key={original}
                    src={preview}
                    alt={description}
                    className="cursor-pointer border rounded shadow"
                    onClick={() => handleImageClick(original, description)}
                />
            ))}
        </div>
    );
};
export default Task1