import React from "react";

export default function Image({nombre, url, alt}) {
    return (
        <div className="car-img">
            <img src={url} alt={alt} />
            <p>{nombre}</p>
        </div>
    );
}