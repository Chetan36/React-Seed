import React, { Component } from "react";
import PropTypes from 'prop-types';
import HeaderComponent from "../../components/header/index";
import styles from './styles';

import { connect } from 'react-redux';
import { fetchTrainingData } from '../../actions/trainingDataActions';

class TrainingData extends Component {

    componentDidMount() {
        this.props.fetchTrainingData();
    }

    render() {
        console.log('This is the training data.', this.props.trainingData);
        return(
            <div>
                <HeaderComponent />
                <div style={styles.textDiv}>
                    <h1>You are in TrainingData component</h1>
                </div>
            </div>
        )
    }
}

TrainingData.propTypes = {
    fetchTrainingData: PropTypes.func.isRequired,
    trainingData: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    trainingData: state.training.trainingItems
})

export default connect(mapStateToProps, { fetchTrainingData })(TrainingData);
