
import {useState} from "react";
import Data from "./data"
import White from "./white"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Hero() {


    const [title1,SetTitle1] = useState("");
    const [title2,SetTitle2] = useState("");
    const [title3,SetTitle3] = useState("");
    const [firms,SetFirms] = useState("");
    const [data, setData] = useState('');
    const [dataAd1, setDataAd1] = useState('');
    const [dataAd2, setDataAd2] = useState('');
    const [dataAd3, setDataAd3] = useState('');
    const [dataAd4, setDataAd4] = useState('');
    let admins = require('./super.json');     //super way to use json file with eas ; 
//     for (let i=0 ; i<=1 ;i++){
// console.log(admins[0].forEach(element => console.log(element)));}
// console.log(data);



const parentChild = () => {
    setData(firms);
    setDataAd1(currentAdress[0]);
    setDataAd2(currentAdress[1]);
    setDataAd3(currentAdress[2]);
    setDataAd4(currentAdress[3]);
  }


let dataMain ;
const data4 = {
    name: 'Lego Z.O.O.',
    adress1: "Legoland 18",
    adress2: "Parkway 7",
    adress3: "USA",
    adress4: "257-265"
  }

  const data1 = {
    name: 'CocaCola',
    adress1: "Street 7",
    adress2: "Chicago",
    adress3: "USA",
    adress4: "321-234"
  }

  const data2 = {
    name: 'Hagen Daz',
    adress1: "Ruo de Wancourt",
    adress2: "Tilloy-lès-Mofflaines",
    adress3: "France",
    adress4: "323-232"
  }

  const data3 = {
    name: 'Sevmash',
    adress1: "Severodvinsk ",
    adress2: "White Sea",
    adress3: "Russia",
    adress4: "999-888"}

// for (let i = 2 ; i<=4 ;i++){
//     console.log(data+i)
// }

const lup = [data1,data2,data3,data4]
for (let i = 1 ; i<=3;i++){
for (let key in lup[i]) {
if (`${key}` === "name"){
    console.log(`${key}`)
    console.log(`${key}: ${lup[i][key]}`);
dataMain = ` ${lup[i][key]}`;
}
}}
let currentAdress=[];
let itemList=[];
let adress1=[];
let adress2=[];
let adress3=[];
let adress4=[];
lup.map((item,index)=>{
    console.log(itemList)
  itemList.push( <option key={index}>{item.name}</option>)
  if (item.name == firms){currentAdress.push(item.adress1,item.adress2,item.adress3,item.adress4)}

  
  adress1.push( <option key={index}>{item.adress1}</option>)
  adress2.push( <option key={index}>{item.adress2}</option>)
  adress3.push( <option key={index}>{item.adress3}</option>)
  adress4.push( <option key={index}>{item.adress4}</option>)
})





    return ( 

        <Router>
            <Route path="/home">
<div className="main">
<Link to="/white"><button onClick={()=> parentChild()} >Click to create</button></Link>
<form>

<input className="field" placeholder ="Order number"
value ={title1}
onChange={(e)=>SetTitle1(e.target.value)}
></input>
<input className="field" placeholder="Pallet number"
value ={title2} type="number"
onChange={(e)=>SetTitle2(e.target.value)}
></input>
<input className="field" placeholder="Box number"
value ={title3} type="number"
onChange={(e)=>SetTitle3(e.target.value)}
></input>

</form>
<select
value ={firms}
onChange={(e)=>SetFirms(e.target.value)}>
{itemList}
  </select>
{/* 
<p>{firms}</p>
<p>{currentAdress[0]}</p>
<p>{currentAdress[1]}</p>
<p>{currentAdress[2]}</p>
<p>{currentAdress[3]}</p> */}


</div></Route>
<Route path="/white">
            <White parentChild={data} ox1={dataAd1} ox2={dataAd2} ox3={dataAd3} ox4={dataAd4} ox5={title1} ox6={title2} ox7={title3}/>
          </Route>
</Router>
    )
}

export default Hero;