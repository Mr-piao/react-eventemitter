// import React,{Component} from 'react';
// import ReactDOM from 'react-dom';


import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Em from 'event-emitter';

var em = new Em();
let a='这是一个数据'
let b=`你好,${a}吗`
class A extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'这是数据AAAAAAAAAAAA1',
        }
    }
    click=()=>{
        console.log(b)
        em.emit('aa',{aa:this.state.name})
    }
    componentWillMount(){
        em.on('bb',(events)=>{this.setState({name:events.bb})})
    }
    render(){
        return(
            <div>
                <button onClick={this.click}>这是a按钮</button>
                <p>{this.state.name}</p>
            </div>
        )
    }
}
class B extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'这是数据BBBBBBBBBBBBB',
            bName:'这是数据BBBBBBBBBBBBB',
        }
    }
    componentWillMount(){
        em.on('aa',(events)=>{this.setState({name:events.aa})});
    }
    
    click=()=>{
       // alert(11)
      em.emit('bb',{bb:this.state.bName})
    }
    render(){
        return(
            <div>
                <button onClick={this.click}>这是b按钮</button>
                <p>{this.state.name}</p>
                <p>{this.state.aName}</p>
            </div>  
        )
    }
}
class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id='root'>
               <A />
               <B />
            </div>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('root'))
