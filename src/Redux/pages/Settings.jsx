import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { labelDispatch } from '../redux/Store'; // Assuming this is correctly defined

const Settings = () => {
    const dispatch = useDispatch();
    const { showLabel, dropdownName } = useSelector(state => state);

    const handleCheckboxChange = (e) => {
        dispatch(labelDispatch(e.target.checked));
    };
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={showLabel}
                    onChange={handleCheckboxChange}
                />
                Show Label
            </label>

            <p>Choose Drop down is {dropdownName}</p>

            {showLabel && <p>This content is visible when the checkbox is checked.</p>}
        </div>
    );
};

export default Settings;
