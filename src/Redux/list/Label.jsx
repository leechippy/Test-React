import React from 'react';

const Label = ({ title }) => {
    return (
        <div>
            <h3 className="list-label">{title} </h3>
        </div>
    );
}
const labeldata = React.memo(Label)
export { labeldata as Label };
