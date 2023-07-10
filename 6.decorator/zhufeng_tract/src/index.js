import React from 'react';
import ReactDOM from 'react-dom';
// 在react的  react-redux 高阶组件里就是装饰器

function connect(mapStateToProps, mapDispatchToProps) {
    return function (Target) {
        return class extends React.Component {
            render() {
                console.log('WrappedTarget render');
                return <Target />
            }
        }
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({})
@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
    render() {
        return <div>App</div>
    }
}
ReactDOM.render(<App />, document.getElementById('root'));