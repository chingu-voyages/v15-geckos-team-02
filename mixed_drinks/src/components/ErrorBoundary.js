import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false
        }
    }
    
    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

render() {
    return (
        <div>
            {this.state.hasError ? <h1>An error occurred</h1> : this.props.children}
        </div>
    )
  }
}

export default ErrorBoundary;