import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";
import firebase from "firebase";
import API from "../../services";
import firebaseConfig from "../../firebase/config";

class BlogPost extends Component{
  constructor(props) {
      super(props);
      firebase.initializeApp(firebaseConfig);

      this.state = {
          listBuku: []
      }
  }

    ambilDataDariServerAPI = () => {                // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
    }

    simpanDataKeServerAPI = () => {
        firebase.database()
        .ref("/")
        .set(this.state);
    }

    componentDidMount() {       // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()  // ambil data dari server API lokal
    }

    componentDidUpdate(prevProps, prevState) {
        if  (prevState !== this.state) {
            this.simpanDataKeServerAPI();
        }
    }

    handleHapusBuku = (idBuku) => {        // fungsi yang meng-handle button action hapus data
     const {listBuku} = this.state;
     const newState = listBuku.filter(data => {
         return data.uid !== idBuku;
     });
     this.setState({listBuku: newState});
    }

    handleTombolSimpan = (event) => {            // fungsi untuk meng-handle tombol simpan
      
       let title = this.refs.judulBuku.value;
       let penulis = this.refs.penulisBuku.value;
       let date = this.refs.dateBuku.value;
       let penerbit = this.refs.penerbitBuku.value;
       let harga = this.refs.hargaBuku.value;
       let uid = this.refs.uid.value;
       

       if (uid && title && penulis && date && penerbit && harga) {
           const {listBuku} = this.state;
           const indeksBuku = listBuku.findIndex(data => {
               return data.uid === uid;
           });
           listBuku[indeksBuku].title = title;
           listBuku[indeksBuku].penulis = penulis;
           listBuku[indeksBuku].date = date;
           listBuku[indeksBuku].penerbit = penerbit;
           listBuku[indeksBuku].harga = harga;
           this.setState({ listBuku });
       }else if (title && penulis && date && harga) {
           const uid = new Date().getTime().toString();
           const { listBuku } = this.state;
           listBuku.push({ uid, title, penulis, date, penerbit, harga });
           this.setState({listBuku});
       }
       this.refs.judulBuku.value= "";
       this.refs.penulisBuku.value= "";
       this.refs.dateBuku.value= "";
       this.refs.penerbitBuku.value= "";
       this.refs.hargaBuku.value= "";
       this.refs.uid.value= "";
    };

    render() {
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" ref="judulBuku" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Penulis</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="penulis" name="penulis" ref="penulisBuku"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Tanggal Input</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="date" name="date" ref="dateBuku"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Penerbit</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="penerbit" name="penerbit" ref="penerbitBuku"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Harga</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="harga" name="harga" ref="hargaBuku"></input>
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref="uid" />
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Buku</h2>
                {
                    this.state.listBuku.map(buku => {  // looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
                        return <Post key={buku.uid} judul={buku.title} penulis={buku.penulis} date={buku.date} penerbit={buku.penerbit} harga={buku.harga} idBuku={buku.uid} hapusBuku={this.handleHapusBuku}/>     // mappingkan data json dari API sesuai dengan kategorinya
                    })
                }
            </div>
        )
    }
}

export default BlogPost;