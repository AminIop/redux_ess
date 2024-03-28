import PropTypes from 'prop-types';

const View = ({ isLoading, counterValueSelect, error }) => {
    if (isLoading) {
        return <div>Loading ...</div>
    }
    if (error) {
        return <div>Somthing has worrong</div>
    }
    
    return <div style={{ fontSize: "40px" }}>{counterValueSelect}</div>
}

View.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    counterValueSelect: PropTypes.number.isRequired,
    error: PropTypes.string.isRequired,
}

export default View