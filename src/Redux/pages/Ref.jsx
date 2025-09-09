import React from 'react';

const Ref = (props, ref) => {
    const { user } = props
    console.log(user);

    return (
        <div>
            <h1>Ref</h1>
        </div>
    );
}

export default React.forwardRef(Ref);

//OR

// const ref = React.forwardRef(function (props, ref) {

//     const { user } = props
//     console.log(user);

//     return (
//         <div>
//             <h1>Ref</h1>
//         </div>
//     );

// })

// export default React.forwardRef(Ref);


