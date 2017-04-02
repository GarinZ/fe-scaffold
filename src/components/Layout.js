/*
 * 母版文件
 */
import React from 'react'
import {Link} from 'react-router'
export default function Layout({children}) {
    return (
        <div>
            <div>home</div>
            <div>
                <Link to='/'>Home</Link>
                {' '}
                <Link to='/hello'>Hello</Link>
                {' '}
                <Link to='/count'>Count</Link>
            </div>
            <div>{children}</div>
            <div>footer</div>
        </div>
    );
}
