import React from 'react'
import '../select-categories/select.css'

const Categories = () => {
    return (
        <div className='selectDrop'>
            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="#item2">Item 2</a>
                </li>
                <li>
                    <a href="#item3">Item 3</a>
                </li>
                <li>
                    <a href="#item4">Item 4</a>
                </li>
            </ul>
        </div>
    )
}

export default Categories
