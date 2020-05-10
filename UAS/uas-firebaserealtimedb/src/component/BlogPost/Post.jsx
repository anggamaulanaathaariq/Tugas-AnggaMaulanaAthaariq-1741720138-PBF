import React from "react";

const Post = (props) => {
    return (
        <div className="buku">
            <div className="gambar-buku">
                <img src="https://bandung.transstudiomall.com/asset/tenant/20200224121612000000.JPG" alt="Gambar Tumbnail Buku"/>
            </div>
            <div className="konten-buku">
                <div className="judul-buku">{props.judul}</div>
                <div className="penulis-buku">{props.penulis}</div>
                <div className="date-buku">{props.date}</div>
                <p className="penerbit-buku">{props.penerbit}</p>
                <div className="harga-buku">{props.harga}</div>
                </div>

            <div className="button-buku">
                <button className="btn btn-sm btn-danger" 
                onClick={() => {if (window.confirm('Apakah anda yakin menghapus list buku ini?')) props.hapusBuku(props.idBuku)}}>Hapus</button>    
            
            <div className="button-buku2">
                <a href="https://www.gramedia.com/" target="_blank">
                 <button className="btn btn-sm btn-warning" 
                onClick={() => {if (window.confirm('Apakah anda akan melakukan pencarian produk ini?')) props.infoBuku(props.idBuku)}}>Informasi</button>
                </a>
            </div>

            <div className="button-buku3">
                <a href="https://www.gramedia.com/search?q=informatika" target="_blank">
                 <button className="btn btn-sm btn-success" 
                onClick={() => {if (window.confirm('Apakah anda akan melakukan pencarian produk ini?')) props.infoBuku(props.idBuku)}}>Beli</button>
                </a>
            </div>
            </div>
        </div>
    )
}

export default Post;