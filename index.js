import React from "react"
import ReactDOM from "react-dom/client";

// const jsxhead= <h2>Hellow from React🚀</h2>
// const roo= ReactDOM.createRoot(document.getElementById("hea"))
// roo.render(jsxhead)
//react component is two types of components first of which is classbased component seconf
//functional component 
//functional component is written like
//jsx Element
// const heading = <h2>Hellow this is abhay</h2> //it is a jsx element which later transpile into react element using babel later which gets render by using react and converted to HTML element
// const root = ReactDOM.createRoot(document.querySelector("#hea")) //root element which converts the react element into html element with the help  of root.render
// root.render(heading)
// //React component
// basically it is of two types
// 1.Class Based componenet
//2functional component= just like js function which return jsx element or react element
//lets create functional component
// const Heading= ()=>{      //Note that while assigning component function First letter should be capital other you will gets some error
//     return (<div>
//     <h2>hellow this is  abhay</h2>
//     <h3>hellow this is also abahy</h3>
//     </div>)
// }
// root.render(<Heading />)   //while rendering the react components we use <Functioncomponentname /> to render it unlike jsx element.
//WE can also use components to another components
// const para= <p>Parcel is a beast in js</p>
// const Another= ()=> <p>React is highly is demand</p>

// const Heading= ()=>{
// return (<div>    
//     {para}  
//     {para}
//     {console.log("Hellow greeting from abhay sahu to you")}
//     <h2>hellow this is  abhay</h2>
//     <h3>hellow this is also abahy</h3>
//     </div>)
// }
// root.render(<Heading />)
//WE can call it the same way we did to render
//We can run normal js inside jsx be it anything 
// We can call components inside components using <Tag/>  or  <Tag></Tag>  or {Tag()}
// const parent= React.createElement("div",{id:"title"},[
//     React.createElement("h1",{},"this is h1"),
//     React.createElement("h2",{},"this is h2"),
//     React.createElement("h3",{},"this is h3")
// ])
// const parent= (<div className="title">
// <h1>this is h1 yes</h1>
// <h2>this is h2</h2>
// <h3>this is h3</h3>
// </div>)
// const Parent= ()=>{
//     return (
//         <div className="title">
//             <h1>this is h1</h1>
//             <h2>this is h2</h2>
//             <h3>this is really h3</h3>
//         </div>
//     )
// }
// const Great= function(){
//     return (
//         <h2>Hey what is up?
//             <button>click me</button>
//         </h2>
        
//     )
// }
// const child= <p>Hellow bro where are you going?</p>
// const parent = <div className="hellow">
// <h1>hellow this is abhay</h1>
// {"what is up?"}
// {child}
// <Great>z</Great>
// </div>
const header= (
    <div className="header">
<div className="logocontainer">
    <img className="logo" src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?t=st=1730622968~exp=1730626568~hmac=a1191e587d4da1f591aa967969cb96168ec7fcdcb9e868ac063fefb16719d42e&w=740"
    />
</div>
<div className="searchbar">
    <input  type="text" placeholder="Type here to search" className="searchinp"></input>
    <button >search</button>
</div>
<div className="usericon" >
    <button className="iconbutt">
    <img className="userlogo" src="https://img.icons8.com/?size=100&id=42384&format=png&color=000000"/>
    </button>
</div>
</div>)
const App=()=>{
    return (
    <div className="container">
      {header}
    </div>)
}
const root= ReactDOM.createRoot(document.querySelector("#hea"))
root.render(<App/>)



