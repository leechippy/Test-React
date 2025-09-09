import React from 'react';

const Router = (props) => {
   const {children}=props
   const href=window.location.href
   const obj=new URL(href)
   const path=obj.pathname.substring(1)
    return (
        <div>
           { 
             React.Children.toArray(children).find(item=>item.props.path==path)
            }
        </div>
    );
}

export default Router;
