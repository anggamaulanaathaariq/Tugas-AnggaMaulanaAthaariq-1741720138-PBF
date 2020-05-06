import React from "react";

const Post = (props) => {
    return (
        <div className="buku">
            <div className="gambar-buku">
                <img src="http://placeimg.com/640/480/tech" alt="Gambar Tumbnail Buku"/>
            </div>
            <div className="konten-buku">
                <div className="judul-buku">{props.judul}</div>
                <div className="penulis-buku">{props.penulis}</div>
                <div className="date-buku">{props.date}</div>
                <p className="penerbit-buku">{props.penerbit}</p>
                <div className="harga-buku">{props.harga}</div>
                
                <button className="btn btn-sm btn-danger" 
                onClick={() => {if (window.confirm('Apakah anda yakin menghapus list buku ini?')) props.hapusBuku(props.idBuku)}}>Hapus</button>    
                
                <a href="https://www.gramedia.com/search?q=informatika" target="_blank">
                 <button className="btn btn-sm btn-warning" 
                onClick={() => {if (window.confirm('Apakah anda akan melakukan pencarian produk ini?')) props.infoBuku(props.idBuku)}}>Informasi</button>
                </a>
            </div>
        </div>
    )
}

export default Post;