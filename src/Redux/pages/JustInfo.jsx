import React, { useRef, useState, useMemo, useCallback } from 'react';

const JustInfo = ({ status, objval, justInfoClick }) => {
    const [tooptipStatus, setTooltipStatus] = useState(false)
    const refobj = useRef()

    //ORRRR

    // const refobj = useMemo(() => {
    //     return {
    //         current: undefined
    //     }
    // }, [])
    // const refcallback = useCallback(() => {
    //     console.log("Insert Function");

    // }, [])
    return (
        <div>
            <h1
                ref={refobj}
                // ref={refcallback}
                className={tooptipStatus ? 'show-tooltip' : 'hide-tooltip'}
                onMouseEnter={(e) => {
                    setTooltipStatus(true)
                    const width1 = e.target.getBoundingClientRect().width
                    const width2 = refobj.current.getBoundingClientRect().width
                    const result = `${width2 - width1 / 2}px`
                    console.log(result);

                }}
                onMouseLeave={() => {
                    setTooltipStatus(false)
                }}
            >
                Just Info {status}</h1>
            <button onClick={(e) => justInfoClick()}>Click </button>
        </div>
    );
}

export default React.memo(JustInfo);

//Memo having two argument second one is call back function

// export default React.memo(JustInfo, (prev, next) => {
//     return false
// });
