import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadData } from './action'

class Info extends Component {
    render(){
        return(
            <div>
                <p>Info{this.props.data}</p>
                <button onClick={() => this.props.loadData()}>load</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error
    }
}
const mapDispatchToProps = ( dispatch) => {
    return{
        loadData: () => dispatch(loadData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info) 