import React from 'react';
const Frame = ({children}) => {
    const clone = (child)=> {
        return React.cloneElement(child,{
            name: 'clone'
        });
    };
    const renderChildren = (children) =>{
        return React.Children.map(children, (child, index)=>{
            const clonedChild = clone(child);
            return clonedChild;
        })
    }
    return <div>佛蘭標題
        <p>{React.Children.count(children)}</p>
        {renderChildren(children)}
    </div>
};
export default Frame;