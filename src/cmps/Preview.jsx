import React from 'react'

export function Preview({diamond}) {
    return (
        <div >
            <p>{diamond.shape}</p>
            <p>{diamond.ct}</p>
            <img src={diamond.imageLink} style={{width:'150px'}}alt=""/>
            <a href={diamond.v360}>V360</a>
        </div>
    )
}
