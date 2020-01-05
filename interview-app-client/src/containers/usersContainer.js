import React from 'react';
import Header from '../components/header'
import Table from '../components/tableFinal'
import { Link } from 'react-router-dom'
import ContactPage from './formContainer';



// const users= [
// {
    
//     name:"Anas",
//     surname:"Ben Yaiche",
//     BirthYear:1990,
//     BirthPlace: "Tunis",
//     Actions: <Link to={`/user/1/gallery`}><button>view</button></Link>

// },
// {
//     name:"Anas",
//     surname:"Ben Yaiche",
//     BirthYear:1990,
//     BirthPlace: "Tunis",
//     Actions: <Link to={`/user/1/gallery`}><button>view</button></Link>

// },
// {
//     name:"Anas",
//     surname:"Ben Yaiche",
//     BirthYear:1990,
//     BirthPlace: "Tunis",
//     Actions:<Link to={`/user/1/gallery`}><button>view</button></Link>

// },
// {
//     name:"Anas",
//     surname:"Ben Yaiche",
//     BirthYear:1990,
//     BirthPlace: "Tunis",
//     Actions: <Link to={`/user/1/gallery`}><button>view</button></Link>

// },{
//     name:"Anas",
//     surname:"Ben Yaiche",
//     BirthYear:1990,
//     BirthPlace: "Tunis",
//     Actions: <Link to={`/user/1/gallery`}><button>view</button></Link>

// }
// ] 

export default class UsersContainer extends React.Component {


    render() {

      

        return (
            <div>
                <Header ><ContactPage/></Header>
                  <Table  />
            </div>
        )
    }

}