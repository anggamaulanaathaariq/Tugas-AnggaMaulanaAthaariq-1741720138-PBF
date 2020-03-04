import React, {Component} from "react";
import './mahasiswa.css';
import Post from "../../component/Blogpost/Post";

class mahasiswa extends Component{
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            NIM: 10,
            nama: "",
            alamat: "",
            hp: 12,
            angkatan: "",
            status: ""
        }
    }
    componentDidMount(){
        this.ambilDataDariServerAPI()
    }
    ambilDataDariServerAPI=()=> {
        fetch('http://localhost:3001/posts')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listArtikel: jsonHasilAmbilDariAPI
            })
        })
    }
}