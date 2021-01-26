import React from 'react'
import { Preview } from './Preview'

export function List({ diamonds }) {
    return (
        <div className="item-list">
            {
                diamonds.map(diamond => <Preview diamond={ diamond } key={diamond._id} />)
            }

        </div>
    )
}
