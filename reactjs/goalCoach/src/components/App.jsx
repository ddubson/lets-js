import React from 'react'
import {firebaseApp} from '../firebase'
import {connect} from 'react-redux'
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import CompleteGoalList from './CompleteGoalList'

class App extends React.Component {
    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div style={{margin: '5px'}}>
                <h3>Goal Coach</h3>
                <AddGoal/>

                <hr/>
                <h4>Goals</h4>
                <GoalList/>

                <hr />
                <h4>Complete Goals</h4>
                <CompleteGoalList />
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                >Sign Out
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, null)(App);
