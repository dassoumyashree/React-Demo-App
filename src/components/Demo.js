import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect, ConnectedProps } from 'react-redux';

const Demo  = (props) => {
    
    console.log(props)
    return (
        <h2>planName</h2>
    )
}

const mapStateToProps = (state) => {
    console.log('sip', state)
    return {
        travelItems: state.travelItems
    };
   
};

// export {TravelItemDetail as default}
export default connect(mapStateToProps)(Demo);
